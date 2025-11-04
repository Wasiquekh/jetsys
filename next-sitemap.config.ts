// next-sitemap.config.ts
import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://www.jetsys.co.in/", // ✅ CHANGE THIS
  generateRobotsTxt: true, // ✅ robots.txt also generated
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;
