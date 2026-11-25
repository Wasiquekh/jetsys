import { PAGE_LABELS } from "./page-labels";
import { SITE_URL, absolute } from "./site";

/**
 * The structured-data pieces that are safe to import from a client component.
 *
 * Keep it that way. Everything here ends up in the browser bundle, which is why
 * the breadcrumb reads page-labels.ts (route and short name only) and not
 * page-index.ts (every page's title, description and dates - about 90 KB).
 * Article and Product live in structured-data.ts, which is server-only.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationNode = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Jetsys Defence",
  url: `${SITE_URL}/`,
  logo: absolute("/images/jetsys-logo.svg"),
  email: "info@jetsys.co.in",
  telephone: "+91-90046-45224",
  sameAs: ["https://www.linkedin.com/company/jetsys-defence/"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "G07, C-Wing, Salman CHS, Vashi, Sector 9A",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400703",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Plot no. 34A, Rangara Complex, Dahisar Mori, Taloja",
      addressRegion: "Maharashtra",
      postalCode: "410208",
      addressCountry: "IN",
    },
  ],
};

/** A reference to the Organization node rather than a second copy of it. */
export const publisherRef = { "@id": ORGANIZATION_ID };

/**
 * The ancestor chain for a route, as BreadcrumbList. Only routes that really
 * exist get a crumb, so a crumb can never point at a 404: the labels and the
 * route list come from the same generated file.
 */
export function breadcrumbNode(route: string) {
  const segments = route.split("/").filter(Boolean);
  const trail = ["/"];
  for (let i = 0; i < segments.length; i += 1) {
    trail.push(`/${segments.slice(0, i + 1).join("/")}`);
  }

  const items = trail
    .map((path) => ({ path, label: PAGE_LABELS[path] }))
    .filter((item): item is { path: string; label: string } => Boolean(item.label));

  // A single crumb is just the page itself, which tells Google nothing.
  if (items.length < 2) return null;

  return {
    "@type": "BreadcrumbList",
    "@id": `${absolute(route)}#breadcrumb`,
    itemListElement: items.map(({ path, label }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: absolute(path),
    })),
  };
}

type Node = Record<string, unknown>;

/** Wraps nodes in one @graph and drops the ones that returned null. */
export function graph(...nodes: (Node | null | undefined)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((node): node is Node => Boolean(node)),
  };
}
