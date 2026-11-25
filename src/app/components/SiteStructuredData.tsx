"use client";

import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";
import { breadcrumbNode, graph, organizationNode } from "@/lib/schema-base";

/**
 * Organization (once for the site) plus the BreadcrumbList for whichever route
 * is being rendered.
 *
 * This is a client component only so that it can read the current route. Every
 * page here is statically generated, so Next.js prerenders it per route and the
 * JSON-LD ends up in the static HTML - it is not injected at runtime. That is
 * also why breadcrumbs live here rather than being pasted into 190 page files:
 * one place to change, and no page can be added without getting them.
 */
export default function SiteStructuredData() {
  const pathname = usePathname();
  const route = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  return <JsonLd data={graph(organizationNode, breadcrumbNode(route))} />;
}
