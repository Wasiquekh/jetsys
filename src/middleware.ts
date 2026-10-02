import { NextResponse, type NextRequest } from "next/server";
import { REDIRECTS } from "./redirects";

// Redirect keys are stored decoded, so "%26" and a literal "&" both match.
function decodePath(path: string) {
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

export function middleware(request: NextRequest) {
  // request.url keeps the trailing slash; nextUrl.pathname may normalise it.
  const { pathname, search } = new URL(request.url);
  // Leading slashes are collapsed too so the target can never be read as
  // a protocol-relative URL.
  const path = "/" + pathname.replace(/^\/+|\/+$/g, "");
  const destination =
    REDIRECTS[decodePath(path)] ?? (path !== pathname ? path : null);

  if (!destination) return NextResponse.next();

  return NextResponse.redirect(new URL(destination + search, request.url), 308);
}

export const config = {
  // Everything except Next internals and API routes.
  matcher: ["/((?!_next/|api/).*)"],
};
