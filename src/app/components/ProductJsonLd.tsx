import JsonLd from "./JsonLd";
import { PAGE_INDEX } from "@/lib/page-index";
import { productNode } from "@/lib/structured-data";
import { graph } from "@/lib/schema-base";

/**
 * Product structured data for a single product page.
 *
 * The name and description are read from the generated page index rather than
 * passed in, so they cannot drift from the page's own <title> and meta
 * description. Renders nothing for a route that is not in the index, which is
 * what happens if a page is moved without regenerating the index.
 *
 * Category and hub pages do not get this: a page listing six sub-categories is
 * not itself a product.
 */
export default function ProductJsonLd({ route }: { route: string }) {
  const record = PAGE_INDEX[route];
  if (!record) return null;

  return (
    <JsonLd
      data={graph(
        productNode({
          route,
          name: record.label,
          description: record.description,
        }),
      )}
    />
  );
}
