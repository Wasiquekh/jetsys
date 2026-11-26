import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// Replaces the robots.txt that next-sitemap used to emit into public/.
// Only the sitemap index is declared: a crawler reads /sitemap.xml and
// discovers the six section sitemaps from it, so listing all six here as
// well only repeats what the index already says. The Host directive is gone
// because Google ignores it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
