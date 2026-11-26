import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing-slash removal is handled in src/middleware.ts so that legacy
  // URLs such as /about/ reach their replacement in a single redirect.
  skipTrailingSlashRedirect: true,

  async headers() {
    return [
      {
        // Every HTML document route. The negative lookaheads exclude Next
        // internals, API routes, and anything ending in a file extension -
        // /sitemap.xml, /robots.txt, /favicon.ico and everything under
        // public/ - which keep the headers they already send. The sitemaps
        // in particular must stay must-revalidate with no s-maxage, or a
        // crawler can be handed a year-old copy.
        //
        // The extension test is anchored to the end of the path on purpose.
        // A route such as
        //   /products/.../ground-power-unit/28.5vdc-ground-power-unit
        // contains a dot but does not end in an extension, and still needs
        // the header.
        source: "/:path((?!_next/|api/)(?!.*\\.[a-zA-Z0-9]+$).*)",
        headers: [
          {
            key: "Cache-Control",
            // s-maxage is unchanged: the CDN still holds a page for a year
            // and is cleared by invalidation on deploy. What was missing is
            // the private-cache half. With no max-age and no must-revalidate,
            // a browser applies heuristic freshness and may serve a stored
            // copy of a page without revalidating it - which is what makes a
            // deployed change appear not to have landed.
            value: "public, max-age=0, must-revalidate, s-maxage=31536000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
