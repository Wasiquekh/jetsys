import { NextResponse, type NextRequest } from "next/server";

// Legacy WordPress URLs that have a genuine equivalent on the current site.
// Anything without an equivalent is intentionally left to 404.
const LEGACY_REDIRECTS: Record<string, string> = {
  "/about": "/about-us",
  "/contacts": "/contact-us",
  "/what-we-do": "/solutions",
  "/service/indigenization": "/solutions/indegenization",
  "/service/test-rigs-test-chambers":
    "/products/aviation-equipment/ground-test-equipment",
  "/services/rig-chamber": "/products/aviation-equipment/ground-test-equipment",
  "/steel": "/products/airborne-raw-materials",
  "/service/aircraft-spares": "/products/aircraft-spares-system",
  "/service/raw-materials": "/products/airborne-raw-materials",
};

export function middleware(request: NextRequest) {
  // request.url keeps the trailing slash; nextUrl.pathname may normalise it.
  const { pathname, search } = new URL(request.url);
  // Leading slashes are collapsed too so the target can never be read as
  // a protocol-relative URL.
  const path = "/" + pathname.replace(/^\/+|\/+$/g, "");
  const destination =
    LEGACY_REDIRECTS[path] ?? (path !== pathname ? path : null);

  if (!destination) return NextResponse.next();

  return NextResponse.redirect(new URL(destination + search, request.url), 308);
}

export const config = {
  // Everything except Next internals and API routes.
  matcher: ["/((?!_next/|api/).*)"],
};
