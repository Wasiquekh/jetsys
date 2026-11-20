# JetSys — Build Fix & Website Audit

**Date:** 20 November 2026
**Branch:** `fix/build-and-audit`
**Stack detected:** Next.js 15.4.7 (App Router) · React 19.1.0 · TypeScript 5 (strict) · Tailwind v4 · npm (`package-lock.json`)
**Deploy target:** AWS Amplify (`amplify.yml` → `npm ci` → `npm run build`)

---

## Summary

### What was broken

**The build was not broken.** On a clean checkout, `npm ci` and `npm run build` both exited 0 before any change was made. There were no errors, no type errors and no failing tests to fix — `tsc --noEmit` was already clean under `strict: true`, and the project has no test suite.

What the build *did* surface was **4 ESLint warnings**, and behind two of them sat a genuine performance problem worth roughly 8 MB on the homepage.

### What was fixed

| # | Error / warning | File | Root cause | Change |
|---|---|---|---|---|
| 1 | `'h1' is defined but never used` | `src/app/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/fuel-flushing-trolley/page.tsx:10` | Editor auto-import misfire: `import { h1 } from "framer-motion/m"`. The `<h1>` on line 31 is a plain intrinsic JSX element — a lowercase JSX tag never resolves to an imported binding, so the import was dead. | Removed the import. |
| 2 | `'Link' is defined but never used` | `src/app/products/aviation-equipment/ground-support-equipment/nato-cable/page.tsx:9` | Same class of mistake: `import { Link } from "lucide-react"` pulled in the *chain icon*, never used. | Removed the import. |
| 3–4 | `@next/next/no-img-element` ×2 | `src/app/HomeClient.tsx` (icon strips, desktop + mobile) | The two `<img>` tags render **animated GIFs**. `next/image` does not optimise animated images, so the obvious swap buys nothing and risks breaking the animation. The real defect was the assets: 8 GIFs totalling **9.25 MB**, displayed at 80×80 px, while **`.webm` versions of the same clips already sat unused in `public/images` at 1.24 MB total**. | Swapped all 8 to the existing `.webm` via `<video autoPlay loop muted playsInline preload="metadata">`, carrying the alt text across as `aria-label` + `role="img"`. **~8.0 MB saved on the homepage.** |

Two further changes were made with your explicit approval:

- **`HomeClient.tsx:55`** — hero `preload="auto"` → `preload="metadata"`. The hero `<video>` was instructing every browser to download the full **4.6 MB** `bg-video.mp4` before anything else. Autoplay still works; the poster still paints immediately.
- **`HomeClient.tsx:388`** — added `aspect-square` to the mobile icon `<video>`. A `<video>` with a width but no height falls back to the CSS default 300×150 ratio until metadata arrives; without this the mobile icons rendered 118×150 instead of square and would have shifted on load. Verified 118×118 after the change.

### Nothing was silenced or weakened

No `@ts-ignore`, no `@ts-nocheck`, no `eslint-disable`, no `: any`, no `ignoreBuildErrors`, no `|| {}`, no swallowed catches, no deleted tests, no removed pages. A sweep of `src/` confirms **zero** suppression directives in the codebase (the single string match in `AboutLineAnimation.tsx:33` is a comment, not a directive). No dependency was added, upgraded or downgraded. No `.env` file, API key, business logic or schema was touched.

### Verification

```
npm ci                 → exit 0   (463 packages, no peer conflicts, no install warnings)
npm run build          → exit 0   (193/193 static pages; postbuild next-sitemap OK)
npx tsc --noEmit       → exit 0   (0 type errors)
npx next lint          → exit 0   ✔ No ESLint warnings or errors
rm -rf .next && build  → exit 0   (reproducible from clean)
```

Full output: `build-log.txt`.

> **One environment caveat, stated plainly.** This audit ran on a Linux sandbox copy of the repo (Node 22.23.5 / npm 10.9.9), not on your Windows machine — a shell on your machine was not available to this session. The sandbox's network allowlist blocks `fonts.googleapis.com`, which `next/font/google` contacts at build time for Montserrat (`src/app/layout.tsx:4,16`). Rather than alter your font setup to suit my sandbox, the build was run with Next's own documented test hook `NEXT_FONT_GOOGLE_MOCKED_RESPONSES`, set as an environment variable only. **No file in the repository was changed for this.** It does mean the font fetch itself is the one build step not exercised end-to-end here; everything else — all 193 routes, types, lint, sitemap — was.

---

## Findings

Severity reflects impact on users, search visibility or security — not effort.

### CRITICAL

**C1 · `next@15.4.7` carries a published RCE advisory**
`package.json:20` · `npm audit` reports **35 vulnerabilities (4 critical, 29 high, 2 moderate)**. The headline entry is against the framework itself: *"Next.js is vulnerable to RCE in React flight protocol"*. Also critical: **`swiper`** (prototype pollution, a direct dependency used by `TeamSlider`/`MobileLandingCards`), plus transitive `tar` (arbitrary file write via hardlink traversal) and `fast-xml-parser` (DoS).
**Fix:** upgrade `next` to the patched release, then `swiper`. Re-run `npm ci && npm run build && npx tsc --noEmit && npx next lint` from clean. *Per your instruction this was documented, not applied.*

**C2 · `nodemailer` SMTP command-injection advisory, in the one place it matters**
`package.json:22`, used by `src/app/api/contact/route.ts:5` · High-severity advisory: *SMTP command injection via unsanitised `envelope.size`*. This is the only server-side dependency handling untrusted input on the site.
**Fix:** upgrade `nodemailer` to the patched version.

**C3 · `/api/contact` has no rate limiting, CAPTCHA or honeypot**
`src/app/api/contact/route.ts:28` · The route is `force-dynamic`, publicly POST-able and sends an authenticated SMTP email per request. A trivial loop can mail-bomb `EMAIL_RECEIVER`, exhaust the cPanel hourly send quota (which typically gets the mailbox suspended, taking the contact form down for real customers), and there is no attribution or throttle of any kind.
**Fix:** per-IP token bucket (Upstash/Redis, or an in-memory LRU if single-instance), plus a hidden honeypot field and/or Cloudflare Turnstile. Add a max length on `message` — currently a 1 MB body is accepted and emailed.

**C4 · Homepage hero still ships ~10 MB of media**
`src/app/HomeClient.tsx:48–63` · `poster="/images/poster.jpg"` is **5,493,637 bytes (5.4 MB)** and `bg-video.mp4` is **4,691,715 bytes (4.6 MB)**. Both are served as raw static files — confirmed against the live site, where `poster.jpg → 200` and `bg-video.mp4 → 206` both bypass the image optimizer. The poster is the LCP element on the homepage.
`preload="metadata"` (applied) stops the eager 4.6 MB pull, **but the assets themselves still need re-encoding** — that needs the source files.
**Fix:** poster → WebP/AVIF at the real display size (~1920×600), target **< 150 KB**. Video → H.264 at a sane bitrate plus a WebM/AV1 source, target **< 1.5 MB**; consider dropping the video entirely below `md` via `<source media>`.

### HIGH

**H1 · 295 images carry `alt="Picture of the author"`, on 189 of 190 pages**
136 occurrences in source, fanning out to 295 rendered instances · Boilerplate copied from the Next.js docs example. On a site whose entire structure is 157 SEO-targeted product pages, every product image is telling Google and every screen-reader user nothing. Also 13 `alt=""` and 67 cases where alt text merely repeats adjacent visible text (axe `image-redundant-alt`).
Worst offenders: `/products` (11 of 13 images), `/products/aviation-equipment/ground-support-equipment` (9 of 11), `/solutions` (9 of 11). Starts at `src/app/components/Header.tsx:25` — the company logo itself.
**Fix:** write real alt text describing each product. WCAG 2.1 §1.1.1.

**H2 · Open Graph and Twitter cards are missing sitewide**
Of 190 prerendered pages: **183 have no `og:title`, 187 no `og:image`, 187 no `og:url`, 183 no `twitter:card`.** Only 7 product pages have any. Sharing a product page on LinkedIn or WhatsApp — the obvious B2B defence channels — produces a bare, unclickable-looking link. There is also **no `metadataBase`** anywhere, which must be set first or relative `og:image` URLs will not resolve.
**Fix:** add `metadataBase: new URL("https://www.jetsys.co.in")` to `src/app/layout.tsx` and an `openGraph` + `twitter` block to the shared metadata, with a per-page image.

**H3 · The logo is a 574 KB "SVG", loaded twice per page**
`src/app/components/Header.tsx:22`, `StickyHeader.tsx:38` (both `jetsys-logo.svg`, **574,091 bytes**) and `Footer.tsx:19` (`footer-logo.svg`, **565,169 bytes**). An SVG that large is almost certainly a traced or embedded raster. SVGs bypass `next/image` optimisation, so the full **~1.1 MB ships on all 190 pages** — verified on the live site (`jetsys-logo.svg → 200`, `footer-logo.svg → 200`). Two other 590 KB "SVG" client logos (`client-3.svg`, `client-4.svg`) sit on the homepage.
**Fix:** re-export as true vector (a wordmark should be < 10 KB) or ship a WebP at display size. Add `priority` to the header logo — it is above the fold.

**H4 · 11 filenames break `/_next/image` with HTTP 400**
Reproducible on a clean `next start` build: any `<Image>` whose source filename contains a **spaced ampersand (` & `)**, a **comma**, or an **en-dash (`–`)** returns `400 — The requested resource isn't a valid image`. Byte-identical files under plain names return 200, and `hydraulic-&-pneumatic-test-system.png` (unspaced `-&-`) returns 200, so it is the character pattern, not the file.

Affected: `Aircraft Spares & System.png`, `Aircraft Looms, Cables & Harnesses.png`, `Fuel Transfer & Defueling Trolley.png`, `Hydraulic Test & Flushing Trolley.png`, `Nose Jack & Main Jack.png`, `Spreader & Cutter With Petrol Engine.png`, `Testing & Maintenance.png`, `Ring – Oil Feed.png`, `Runway Lighting System –.png`, `Halogen Runway Lights – … .png`, `LED Taxiway Lights – … .png` — used across `ProductAnimate.tsx`, `SolutionAnimate.tsx` and 10+ product pages.

> **Scope, honestly:** this does **not** currently break your live site. I checked `https://www.jetsys.co.in/products` in a browser and the "Aircraft Spares & System" tile renders correctly, because the deployed build serves those images as plain static files rather than through the optimizer. Treat this as a **latent risk** that will bite the moment those images route through `/_next/image` — not as a live outage.

**Fix:** rename the 11 files to plain lowercase ASCII with hyphens and update the references. Cheap, permanent, and removes a whole class of URL-encoding bugs.

**H5 · No security headers at all**
`next.config.ts` has no `headers()` and `amplify.yml` sets none. There is no `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`/`frame-ancestors`, `X-Content-Type-Options`, `Referrer-Policy` or `Permissions-Policy`. The site is clickjackable and has no transport pinning.
**Fix:** add a `headers()` block in `next.config.ts` (or `customHeaders` in Amplify). Start CSP in report-only — GA and Clarity need allowing.

**H6 · Contact form inputs have no programmatic labels** *(axe: critical, 7 nodes)*
`src/app/contact-us/ContactUsClient.tsx:132–137` and throughout · Captions are rendered as `<p className="font-medium text-sm mb-1">Name</p>` followed by an unlabelled Formik `<Field name="name">`. It looks like a label but nothing associates the two, so a screen reader announces seven anonymous edit fields. The same pattern is in `ContactUsModalButton.tsx`.
**Fix:** `<label htmlFor="name">Name</label>` + `<Field id="name" name="name">`. WCAG 2.1 §1.3.1, §3.3.2.

**H7 · Landmark structure is wrong on nearly every page**
`<main>` exists in only 7 source files, so roughly **183 of 190 pages have no main landmark** (axe `landmark-one-main`, 11/17 sampled pages; `region`, 122 nodes across all 17). Separately, `Header.tsx` and `StickyHeader.tsx` both render a `<header>`, giving **two banner landmarks on every page** (axe `landmark-no-duplicate-banner`, 15/17 pages). There is **no skip link** anywhere.
**Fix:** wrap page content in `<main>` (ideally once, in `layout.tsx`), change `StickyHeader`'s wrapper to a `<div>` or give it `role="presentation"`, and add a skip-to-content link.

### MEDIUM

**M1 · The footer overflows horizontally at 768 px, on every page**
`src/app/components/Footer.tsx:14` · `flex md:flex-nowrap` combined with a fixed `md:w-96` (384 px) first column (line 16) and `md:pl-20` (80 px) on the link area (line 76) exceeds the viewport at the `md` breakpoint. Measured **+65 px of horizontal scroll on 15 of 17 pages at 768 px**; 360 px, 1280 px and 1920 px are clean. Offending element is the column `<h2>` at `Footer.tsx:190,203`, rendering at `right: 833px` in a 768 px viewport.
**Fix:** allow wrapping until `lg` (`md:flex-wrap lg:flex-nowrap`), or reduce `md:w-96`/`md:pl-20` at the `md` step.

**M2 · `/api/contact` leaks internal env var names to the public**
`src/app/api/contact/route.ts:40–47` · On a config error the 500 response body includes `error: \`Missing: ${missing.join(", ")}\``, disclosing `CPANEL_EMAIL_HOST`, `CPANEL_EMAIL_USER`, `CPANEL_EMAIL_PASSWORD`, `EMAIL_RECEIVER` to any caller. Note the catch block at line 202 already gates its `error` field behind `NODE_ENV === "development"` — this earlier branch simply missed the same guard.
**Fix:** apply the identical guard, or drop the field.

**M3 · `/api/contact` discloses credential state**
`src/app/api/contact/route.ts:191–196` · Returns *"Authentication failed. Please check email credentials."* and *"Unable to connect to the email server."* to the public client, telling an attacker exactly which part of your mail stack is misconfigured. The client discards these anyway (`ContactUsModalButton.tsx:89` shows a generic toast).
**Fix:** one generic user-facing message; keep specifics in `console.error` only.

**M4 · `transporter.verify()` runs on every submission**
`src/app/api/contact/route.ts:86` · A full SMTP connect + auth handshake before every send, roughly doubling both latency and connection count against a cPanel host that rate-limits connections. `verify()` is a startup diagnostic.
**Fix:** delete it — `sendMail` surfaces the same errors — or move it to a health check.

**M5 · Colour contrast failures** *(axe: serious, 41 nodes across 16 of 17 pages)*
Recurring offender is the `bg-white/15` translucent nav/menu item against its backdrop. WCAG 2.1 §1.4.3 requires 4.5:1 for body text.
**Fix:** raise the overlay opacity or darken the backdrop until 4.5:1 is met.

**M6 · Titles and descriptions are truncated in search results**
**134 of 190 titles exceed 60 characters** (longest: 96 chars, `/products/aviation-equipment/ground-support-equipment`) and **138 of 190 descriptions exceed 160 characters**. Google truncates both.
*Credit where due: all 190 titles and all 190 descriptions are **unique** — no duplication anywhere, which is rare at this page count.*
**Fix:** trim to ≤60 / ≤155, leading with the distinguishing term rather than the shared `| Jetsys Defence` suffix.

**M7 · Heading hierarchy skips a level on 81 pages**
Pages jump `h1 → h3` with no `h2` (e.g. all `bomb-loading-trolley`, `ldp-trolley` and `spreader-cutter-*` product pages; `Product Overview` headings render as `h3`). Confirmed independently by axe `heading-order`.
**Fix:** promote the first section heading to `h2`. WCAG §1.3.1.

**M8 · No error, loading or 404 boundaries anywhere**
Zero `error.tsx`, `global-error.tsx`, `loading.tsx` and `not-found.tsx` in `src/app`. An unhandled render error anywhere shows Next's raw error screen, and `/anything-invalid` returns an unbranded default 404 with **no header, nav or footer** (verified: landmark counts all zero on a 404). This matters more than usual here because `src/redirects.ts` deliberately lets unmatched legacy URLs 404 — so real visitors from old inbound links land on that bare page.
**Fix:** add a branded `not-found.tsx` with the site chrome and links into `/products`; add `error.tsx` at the root.

**M9 · Focus indicators are removed** *(WCAG 2.1 §2.4.7)*
`outline-none` appears **15 times** in `src/` including every contact input (`ContactUsClient.tsx:134,148,…`). Measured: ~10 of the first 40 focusable elements per page show no visible focus ring, rising to **17 on `/contact-us`**.
**Fix:** replace bare `outline-none` with `focus-visible:ring-2 focus-visible:ring-primary`.

**M10 · Nested interactive controls** *(axe: serious, 17 nodes on 3 pages)*
Product cards are `<div role="button" tabindex="0" aria-pressed="false">` wrappers that contain their own links/buttons. Keyboard and screen-reader users get two conflicting controls. Related: `label-content-name-mismatch` (9 nodes) — `aria-label` text does not contain the visible label, breaking voice control (WCAG §2.5.3).
**Fix:** make the card a plain container and let the inner link be the only control.

**M11 · Structured data exists on exactly one page**
Only `/resources/inset-vs-elevated-airfield-lights` emits JSON-LD. 157 product pages carry none — no `Product`, `Organization` or `BreadcrumbList` schema, despite URLs nested up to 5 levels deep.
*Credit: the one implementation at `page.tsx:75` is done correctly, escaping `<` as `<` inside `dangerouslySetInnerHTML` — the right pattern.*
**Fix:** add `BreadcrumbList` sitewide and `Product` to product pages.

**M12 · Footer social icons are 16×16 px** *(WCAG 2.1 §2.5.8, AA)*
`Footer.tsx:39,66` etc. · Measured 16×16 px at 360 px viewport, on every page; the AA minimum is 24×24.
**Fix:** pad the anchor to ≥24×24. *(The ~150 other "small" targets flagged at 19 px tall are inline links within prose, which §2.5.8 explicitly exempts — not a finding.)*

### LOW

- **L1 · 40.9 MB of unused assets.** 60 files in `public/` are referenced nowhere, including `Global.gif` (4.8 MB), `Precise.gif` (3.3 MB), `Rapid.gif` (2.5 MB), `jetsys defence.png` (3.1 MB), `ChatGPT Image Mar 11, 2026….png` (2.5 MB). They bloat the repo and every Amplify build.
- **L2 · 4 unused runtime dependencies**: `embla-carousel-react`, `embla-carousel-autoplay`, `react-intersection-observer`, `react-slick`. Carousels actually use **Swiper**; `useInView` is a local hook in `MissionVisionAnimate.tsx:6` plus framer-motion's own. Worse, `src/app/layout.tsx:5–6` still imports `slick-carousel/slick/slick.css` and `slick-theme.css` — **dead CSS on all 190 pages** for a library that is never rendered. `@types/react-slick` is likewise unused. *(`react-dom` is required by React/Next at runtime — not unused.)*
- **L3 · 4 empty directories** — dead scaffolding from an abandoned dynamic-article system: `src/app/resources/[slug]/` (a dynamic segment with no `page.tsx`), `src/app/resources/conformal-coating-removal-methods/`, `src/app/components/resources/diagrams/`, `src/content/resources/articles/`. Nothing imports `src/content`. Harmless to the build; confusing to the next developer.
- **L4 · `console.log(e)` in production client code** — `ContactUsModalButton.tsx:96`. The user does get a toast, so the error is not silently swallowed, but raw error objects reach the browser console. The two `console.error` calls in the API route are legitimate server logging.
- **L5 · The 10 s send timeout cannot actually cancel the send** — `route.ts:147–151`. `Promise.race` rejects, but `sendPromise` keeps running and the SMTP connection is never closed, so a user can see "timed out" and the email still arrives. The `setTimeout` is also never cleared, holding an event-loop ref for 10 s on every successful request. **Fix:** `clearTimeout` in a `finally`, and prefer nodemailer's own `connectionTimeout` / `greetingTimeout` / `socketTimeout`.
- **L6 · Email subject is HTML-escaped** — `route.ts:96` applies `esc(name)` to a *subject line*, which is not HTML. A sender called "Smith & Co" arrives as `Smith &amp; Co`. *(The same `esc()` applied to the HTML body is correct and consistently used — no injection path found there.)*
- **L7 · `replyTo: email` is not validated** — `route.ts:95`. Only truthiness is checked before being handed to nodemailer as an address.
- **L8 · `README.md` is untouched `create-next-app` boilerplate** — it still tells a new developer to deploy on Vercel, while the project deploys to Amplify. No mention of required env vars.
- **L9 · The build depends on reaching Google Fonts** — `layout.tsx:4,16`. `next/font/google` fetches Montserrat at build time; a Google Fonts outage or an egress-restricted build network fails the Amplify build outright. **Fix:** `next/font/local` with the woff2 self-hosted.

---

## Verified healthy

Worth recording, because these are the things that are usually broken at this page count:

- **Zero broken internal links.** Every internal `href` across all 190 prerendered pages resolves to a real route or a defined redirect.
- **Zero orphan routes.** All 189 routes are reachable from somewhere in the site.
- **Redirects are clean.** All 31 entries in `src/redirects.ts`: no missing destinations, **no chains**, no self-redirects, and none shadowing a live page. The middleware's trailing-slash and protocol-relative handling (`middleware.ts:20–22`) is correct.
- **Zero broken asset references.** All 249 assets referenced in code exist on disk.
- **No secrets anywhere.** No hardcoded credentials in `src/`, no `.env*` committed (`.gitignore` covers `.env*`), and no SMTP env name appears in the client bundle.
- **`robots.txt` and `sitemap.xml` agree** — 189 URLs, absolute, no trailing slashes, consistent with the middleware.
- **Canonical tags on 189 of 190 pages** (the exception is `/_not-found`, which is correct).
- **Strict TypeScript passes with no escape hatches** — `strict: true`, zero `any`, zero suppressions.
- **One `dangerouslySetInnerHTML`, used correctly** — the JSON-LD block, properly escaped.

---

## Fix next — prioritised

| # | Item | Severity | Effort | Why this order |
|---|---|---|---|---|
| 1 | Upgrade `next`, `swiper`, `nodemailer` | C1, C2 | **1–3 h** | A published RCE against the framework. Everything else is cosmetic next to it. Needs a clean build + manual smoke test. |
| 2 | Rate-limit + honeypot on `/api/contact` | C3 | **2–4 h** | Your contact form is your lead channel; losing the mailbox to a spam flood takes it offline. |
| 3 | Re-encode `poster.jpg` and `bg-video.mp4` | C4 | **1–2 h** | ~10 MB → under 1.7 MB on the page that every visitor lands on. Needs the source media. |
| 4 | Replace 295 × `alt="Picture of the author"` | H1 | **4–8 h** | Pure content work, no risk, and the single biggest SEO + accessibility win available. Scriptable to a first draft from each page's `<h1>`. |
| 5 | `metadataBase` + Open Graph/Twitter sitewide | H2 | **2–3 h** | One shared metadata block plus a default share image fixes 180+ pages at once. |
| 6 | Re-export the three logo SVGs | H3 | **1 h** | ~1.1 MB off every one of 190 pages. |
| 7 | Security headers in `next.config.ts` | H5 | **1–2 h** | Fast; start CSP in report-only. |
| 8 | Labels on contact fields + restore focus rings | H6, M9 | **1–2 h** | Small, legally meaningful, and the form is the conversion point. |
| 9 | `<main>` landmark, de-duplicate `<header>`, skip link | H7 | **2–3 h** | Mostly `layout.tsx`; fixes 122 axe nodes in one pass. |
| 10 | Footer `md:flex-nowrap` overflow | M1 | **30 min** | One-line class change, kills a horizontal scrollbar on every page at tablet width. |
| 11 | Harden `/api/contact` responses (M2, M3, M4, L5, L6, L7) | M, L | **2 h** | Best batched into a single pass over one 207-line file. |
| 12 | Branded `not-found.tsx` + root `error.tsx` | M8 | **2 h** | Matters because unmatched legacy URLs intentionally 404. |
| 13 | Rename the 11 special-character image files | H4 | **1–2 h** | Not currently breaking production — schedule it, don't rush it. |
| 14 | Trim titles/descriptions; fix `h1 → h3` skips | M6, M7 | **3–5 h** | Mechanical across 134/81 pages. |
| 15 | Colour contrast, nested-interactive cards, tap targets | M5, M10, M12 | **3–4 h** | Needs design input on the palette. |
| 16 | `BreadcrumbList` + `Product` structured data | M11 | **3–4 h** | Compounding SEO value across 157 product pages. |
| 17 | Delete unused deps, dead slick CSS, 40.9 MB of assets, empty dirs | L1, L2, L3 | **1–2 h** | Satisfying cleanup; do it when the branch is otherwise quiet. |
| 18 | Self-host Montserrat; rewrite `README.md` | L9, L8 | **1–2 h** | Removes a build-time external dependency. |

---

## Methodology

- **Build/type/lint:** `npm ci`, `npm run build`, `npx tsc --noEmit`, `npx next lint`, plus a clean `rm -rf .next` rebuild.
- **SEO:** every one of the 190 prerendered HTML files parsed directly for title, description, canonical, OG/Twitter, viewport, lang, JSON-LD, heading order and alt text — i.e. what actually ships, not a sample.
- **Links:** all internal `href`s in rendered HTML diffed against the route set derived from the App Router file tree, plus the redirect map.
- **Runtime:** Chrome via Playwright over 17 representative routes (hubs, deep leaf products, resources, solutions, contact, 404) capturing console errors, page errors, failed requests and hydration warnings. **No hydration errors were found on any page.**
- **Accessibility:** `axe-core` 4.x, WCAG 2.0/2.1 A + AA + best-practice, on those same 17 routes.
- **Responsive:** 360 / 768 / 1280 / 1920 px, measuring real `scrollWidth` overflow and computed tap-target boxes.
- **Security:** `npm audit`, secret scanning of source and the built client bundle, header and CORS inspection, and a read of the only server route.
- **Assets:** byte-exact sizes taken from the real `public/` directory on disk and diffed against every path referenced in source.

**Limits you should know about.** Lighthouse scores and lab LCP/CLS/INP figures are deliberately **not** quoted. The sandbox could not hold the full 152 MB of production imagery, so measured paint timings there would have been flatteringly wrong; INP is a field metric that needs real user interaction regardless. The performance findings above are instead grounded in exact byte sizes and delivery method verified against the live site. For real numbers, run PageSpeed Insights against `https://www.jetsys.co.in/` once items 3 and 6 are done.
