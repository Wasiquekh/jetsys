import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_IDS, sitemapUrl } from "../lib/site";

// Replaces the robots.txt that next-sitemap used to emit into public/.
// Every section sitemap is listed; robots.txt is the sitemap index.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: SITEMAP_IDS.map(sitemapUrl),
    host: SITE_URL,
  };
}
