import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing-slash removal is handled in src/middleware.ts so that legacy
  // URLs such as /about/ reach their replacement in a single redirect.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
