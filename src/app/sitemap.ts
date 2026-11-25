import type { MetadataRoute } from "next";
import { PAGE_INDEX } from "../lib/page-index";
import {
  SITEMAP_IDS,
  absolute,
  sectionOf,
  type SitemapSection,
} from "../lib/site";

// Section sitemaps, served at /sitemap/<id>.xml. robots.txt lists all of them.
export async function generateSitemaps() {
  return SITEMAP_IDS.map((id) => ({ id }));
}

export default async function sitemap({
  id,
}: {
  id: SitemapSection;
}): Promise<MetadataRoute.Sitemap> {
  return Object.entries(PAGE_INDEX)
    .filter(([route]) => sectionOf(route) === id)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([route, { modified }]) => ({
      url: absolute(route),
      // The date this page's own files last changed, from git, not the build
      // clock. A page that has not been touched since October says so.
      lastModified: modified,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
}
