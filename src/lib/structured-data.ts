import { PAGE_INDEX } from "./page-index";
import { absolute } from "./site";
import { publisherRef } from "./schema-base";

/**
 * Article and Product structured data.
 *
 * SERVER ONLY. This imports the full page index, so importing it from a client
 * component would ship every page's title, description and dates to the
 * browser. Organization, BreadcrumbList and `graph` live in schema-base.ts,
 * which is client-safe.
 */

/**
 * Article for a /resources guide.
 *
 * No `author`: no guide credits a named engineer yet and there is no author
 * page to point at, and inventing one would be worse than omitting it. When a
 * real person can be linked, this is the only place it needs to be added.
 */
export function articleNode({
  route,
  headline,
  description,
  type = "Article",
}: {
  route: string;
  headline: string;
  description: string;
  /** TechArticle where the guide is genuinely technical reference material. */
  type?: "Article" | "TechArticle";
}) {
  const record = PAGE_INDEX[route];

  return {
    "@type": type,
    "@id": `${absolute(route)}#article`,
    headline,
    description,
    mainEntityOfPage: absolute(route),
    ...(record
      ? { datePublished: record.published, dateModified: record.modified }
      : {}),
    publisher: publisherRef,
  };
}

/**
 * Product for a product page. No `offers`: the site publishes no prices, and an
 * invented price or availability is a claim Google would act on.
 */
export function productNode({
  route,
  name,
  description,
  image,
}: {
  route: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@type": "Product",
    "@id": `${absolute(route)}#product`,
    name,
    description,
    ...(image ? { image: absolute(image) } : {}),
    brand: publisherRef,
    manufacturer: publisherRef,
    url: absolute(route),
  };
}

/** Only for pages that really carry an FAQ block in the body. */
export function faqNode({
  route,
  entries,
}: {
  route: string;
  entries: readonly { question: string; answer: string }[];
}) {
  if (!entries.length) return null;

  return {
    "@type": "FAQPage",
    "@id": `${absolute(route)}#faq`,
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
