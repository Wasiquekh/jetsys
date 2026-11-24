// Routes whose lastmod is a real publication or revision date rather than the
// build timestamp. Add an entry here when a page is published or materially revised.
const LASTMOD = {
  "/resources/squib-testing": "2026-11-24",
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jetsys.co.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: LASTMOD[path]
      ? new Date(`${LASTMOD[path]}T00:00:00Z`).toISOString()
      : new Date().toISOString(),
    alternateRefs: config.alternateRefs ?? [],
  }),
};
