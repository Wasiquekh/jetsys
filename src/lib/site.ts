export const SITE_URL = "https://www.jetsys.co.in";

/** Absolute URL for a site-root-relative path. */
export const absolute = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

/**
 * One sitemap per section, rather than one file listing all 190 URLs. Search
 * Console reports coverage per submitted sitemap, so splitting by section makes
 * it possible to see which part of the site has a problem.
 *
 * Order matters: the first prefix that matches a route wins, so "root" is last
 * and acts as the catch-all for `/` and `/contact-us`.
 */
export const SITEMAP_SECTIONS = [
  { id: "resources", prefix: "/resources" },
  { id: "products", prefix: "/products" },
  { id: "solutions", prefix: "/solutions" },
  { id: "industries", prefix: "/industries" },
  { id: "about", prefix: "/about-us" },
  { id: "root", prefix: null },
] as const;

export type SitemapSection = (typeof SITEMAP_SECTIONS)[number]["id"];

export const SITEMAP_IDS = SITEMAP_SECTIONS.map(({ id }) => id);

export function sectionOf(route: string): SitemapSection {
  for (const { id, prefix } of SITEMAP_SECTIONS) {
    if (prefix && (route === prefix || route.startsWith(`${prefix}/`))) return id;
  }
  return "root";
}

/** Where each section sitemap is served. Next.js names these from the ids above. */
export const sitemapUrl = (id: string) => `${SITE_URL}/sitemap/${id}.xml`;
