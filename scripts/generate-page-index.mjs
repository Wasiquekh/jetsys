/**
 * Regenerates src/lib/page-index.ts and src/lib/page-labels.ts.
 *
 *   node scripts/generate-page-index.mjs
 *
 * For every route under src/app that has a page.tsx it records:
 *   label       - short human name, from the page's own metadata title
 *                 (everything before the first "|" or dash). Used by
 *                 BreadcrumbList.
 *   title       - the page's full metadata title.
 *   description - the page's metadata description.
 *   published   - the date the route's page.tsx first appeared in git.
 *   modified    - the date the route's own files last changed in git.
 *
 * "The route's own files" means page.tsx and the data files beside it. Files in
 * IGNORED are deliberately excluded: they are not rendered, so editing one must
 * not advance the page's last-modified date. Shared components are excluded for
 * the same reason - a footer tweak does not revise 190 pages, and claiming it
 * did is exactly what made the old build-timestamp lastmod worthless.
 *
 * Two outputs, because one of them is imported by a client component and the
 * other must never be: page-labels.ts holds only the route/label pairs that
 * BreadcrumbList needs, so titles, descriptions and dates stay out of the
 * browser bundle.
 *
 * Run this after publishing or materially revising a page, and commit both files.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP = path.join(REPO, "src/app");
const INDEX_OUT = path.join(REPO, "src/lib/page-index.ts");
const LABELS_OUT = path.join(REPO, "src/lib/page-labels.ts");

const IGNORED = new Set(["editorial-notes.md"]);

/**
 * Crumb overrides for routes whose meta title does not shorten to the name the
 * site visibly uses in its breadcrumbs.
 *
 * A content-bearing page can instead declare `export const breadcrumbLabel`
 * beside its copy, which is preferred. A Next.js page.tsx cannot: the framework
 * rejects named exports it does not recognise, so those routes are listed here.
 */
const LABEL_OVERRIDES = {
  // Every /resources guide renders "Resources" in its breadcrumb; the hub's
  // meta title shortens to "Aviation & Aerospace Resources".
  "/resources": "Resources",
};

function pageFiles(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) pageFiles(full, out);
    else if (entry.name === "page.tsx") out.push(full);
  }
  return out;
}

const routeOf = (file) => {
  const rel = path.relative(APP, path.dirname(file)).split(path.sep).join("/");
  return rel === "" ? "/" : `/${rel}`;
};

const git = (...args) =>
  execFileSync("git", ["-C", REPO, ...args], { encoding: "utf8" }).trim();

const posix = (abs) => path.relative(REPO, abs).split(path.sep).join("/");

const clean = (value) =>
  value.replace(/\\"/g, '"').replace(/\\n/g, " ").replace(/\s+/g, " ").trim();

/** `export const NAME = "..."` from any of the files beside the page. */
function constantFrom(files, name) {
  const pattern = new RegExp(
    `export const ${name}\\s*=\\s*(?:\\n\\s*)?"((?:[^"\\\\]|\\\\.)*)"`,
  );
  for (const file of files) {
    const match = pattern.exec(readFileSync(file, "utf8"));
    if (match) return clean(match[1]);
  }
  return "";
}

/**
 * Reads a metadata field, which may sit on the following line and may be either
 * a string literal or - as the /resources guides do - an identifier imported
 * from the article-content.ts beside the page.
 */
function metaField(source, field, siblingFiles) {
  const block = /export const metadata[^=]*=\s*\{/.exec(source);
  const tail = source.slice(block ? block.index : 0);

  const literal = new RegExp(`${field}:\\s*(?:\\n\\s*)?"((?:[^"\\\\]|\\\\.)*)"`).exec(tail);
  if (literal) return clean(literal[1]);

  const identifier = new RegExp(`${field}:\\s*(?:\\n\\s*)?([A-Za-z_$][\\w$]*)\\s*,`).exec(tail);
  if (identifier) return constantFrom(siblingFiles, identifier[1]);

  // Property shorthand, e.g. `title,` meaning `title: title`.
  if (new RegExp(`(^|[{\\s])${field}\\s*,`).test(tail)) {
    return constantFrom(siblingFiles, field);
  }

  return "";
}

/**
 * The short name for this route, used by BreadcrumbList.
 *
 * A page whose meta title does not shorten cleanly can declare
 * `export const breadcrumbLabel = "..."` beside its content, which wins. That
 * keeps the crumb in the structured data identical to the crumb the page
 * renders, instead of letting the two drift apart.
 */
function labelFor(title, route, siblingFiles) {
  if (route === "/") return "Home";
  if (LABEL_OVERRIDES[route]) return LABEL_OVERRIDES[route];
  const declared = constantFrom(siblingFiles, "breadcrumbLabel");
  if (declared) return declared;
  if (title) {
    const short = title
      .split("|")[0]
      .split(" – ")[0]
      .split(" — ")[0]
      .trim();
    if (short) return short;
  }
  // No parsable metadata title: fall back to the slug, which still beats
  // omitting the crumb. Fix the page's metadata rather than this script.
  const slug = route.split("/").pop() ?? "";
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const entries = [];

for (const file of pageFiles(APP).sort()) {
  const route = routeOf(file);
  const dir = path.dirname(file);
  const siblings = readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && !IGNORED.has(e.name))
    .map((e) => posix(path.join(dir, e.name)));

  const siblingFiles = siblings
    .filter((rel) => rel.endsWith(".ts") || rel.endsWith(".tsx"))
    .map((rel) => path.join(REPO, rel));

  let modified = null;
  let published = null;
  for (const rel of siblings) {
    const log = git("log", "--format=%cI", "--", rel).split("\n").filter(Boolean);
    if (!log.length) continue;
    if (!modified || log[0] > modified) modified = log[0];
    if (rel.endsWith("/page.tsx")) published = log[log.length - 1];
  }
  // A page that has just been written has no git history yet. Rather than drop
  // it from the index - which would silently leave it out of the sitemap and
  // leave its Article with no dates - fall back to the dates the content file
  // declares, and to the file's own mtime if it declares none. Once the page is
  // committed, git becomes the source again on the next run.
  if (!modified) {
    const declaredModified = constantFrom(siblingFiles, "dateModified");
    const declaredPublished = constantFrom(siblingFiles, "datePublished");
    if (declaredModified || declaredPublished) {
      modified = declaredModified || declaredPublished;
      published = declaredPublished || declaredModified;
      console.warn(`${route}: not committed yet - using the declared dates`);
    } else {
      modified = new Date(statSync(file).mtimeMs).toISOString();
      published = modified;
      console.warn(`${route}: not committed yet and declares no dates - using the file mtime`);
    }
  }
  if (!published) published = modified;

  const source = readFileSync(file, "utf8");
  const title = metaField(source, "title", siblingFiles);
  entries.push({
    route,
    label: labelFor(title, route, siblingFiles),
    title,
    description: metaField(source, "description", siblingFiles),
    published,
    modified,
  });
}

entries.sort((a, b) => a.route.localeCompare(b.route));

const q = (value) => JSON.stringify(value);

writeFileSync(
  INDEX_OUT,
  `// GENERATED FILE - do not edit by hand.
// Run \`node scripts/generate-page-index.mjs\` and commit the result.
//
// One record per route: the page's own metadata, and the real publication and
// last-revision dates read from git. The sitemap and the Article and Product
// structured data all read from here, so a page's lastmod and its dateModified
// can never disagree.
//
// SERVER ONLY. Do not import this from a client component: it would put every
// page's title and description in the browser bundle. Client code that needs a
// route's name imports page-labels.ts instead.

export type PageRecord = {
  /** Short human name for this route. */
  label: string;
  /** The page's full metadata title. */
  title: string;
  /** The page's metadata description. */
  description: string;
  /** ISO date the route first appeared. */
  published: string;
  /** ISO date the route's own files last changed. */
  modified: string;
};

export const PAGE_INDEX: Record<string, PageRecord> = {
${entries
  .map(
    (e) =>
      `  ${q(e.route)}: {\n    label: ${q(e.label)},\n    title: ${q(e.title)},\n    description: ${q(
        e.description,
      )},\n    published: ${q(e.published)},\n    modified: ${q(e.modified)},\n  },`,
  )
  .join("\n")}
};

export const ROUTES = Object.keys(PAGE_INDEX);
`,
  "utf8",
);

writeFileSync(
  LABELS_OUT,
  `// GENERATED FILE - do not edit by hand.
// Run \`node scripts/generate-page-index.mjs\` and commit the result.
//
// Route to short name, for BreadcrumbList. This is the only part of the page
// index that reaches the browser, so it deliberately carries nothing else.

export const PAGE_LABELS: Record<string, string> = {
${entries.map((e) => `  ${q(e.route)}: ${q(e.label)},`).join("\n")}
};
`,
  "utf8",
);

console.log(
  `wrote ${entries.length} routes to ${posix(INDEX_OUT)} and ${posix(LABELS_OUT)}`,
);
