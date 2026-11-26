import { SITEMAP_IDS, sitemapUrl } from "../../lib/site";

/**
 * The sitemap index.
 *
 * generateSitemaps() in src/app/sitemap.ts emits one sitemap per section at
 * /sitemap/<id>.xml but no parent index, so once the old next-sitemap output
 * was removed from public/ there was nothing behind /sitemap.xml and it
 * returned 404.
 *
 * The section names come from SITEMAP_IDS, which is the same array
 * generateSitemaps maps over, so a section added in src/lib/site.ts appears
 * in this index and gets its own sitemap from one edit. There is
 * deliberately no second list to keep in step.
 */
export const dynamic = "force-static";

export function GET() {
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...SITEMAP_IDS.map((id) => `<sitemap><loc>${sitemapUrl(id)}</loc></sitemap>`),
    "</sitemapindex>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      // Matches what the section sitemaps send. An index a crawler cannot
      // re-read is worse than no index.
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
