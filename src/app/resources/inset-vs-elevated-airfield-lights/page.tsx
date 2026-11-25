import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import JsonLd from "../../components/JsonLd";
import { faqNode } from "@/lib/structured-data";
import { graph } from "@/lib/schema-base";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const siteUrl = "https://www.jetsys.co.in";
const canonicalUrl = `${siteUrl}/resources/inset-vs-elevated-airfield-lights`;
const heroImage = "/images/precision-runway-lighting-system.png";
const overview = { id: "overview", title: "Overview" };
const breadcrumb = {
  links: [
    { href: "/resources", label: "Resources" },
    { href: "/resources/airfield-ground-lighting", label: "Airfield Ground Lighting" },
  ],
  current: title,
};

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: canonicalUrl },
};

const faq = sections
  .find((section) => section.id === "frequently-asked-questions")
  ?.blocks.find((block) => block.kind === "faq");

// Only the FAQPage lives here now. The Article comes from ResourceArticle via
// the `route` prop - which also supplies the datePublished and dateModified
// this hand-written block was missing - and the BreadcrumbList comes from the
// root layout.
const structuredData = graph(
  faq
    ? faqNode({
        route: "/resources/inset-vs-elevated-airfield-lights",
        entries: faq.entries,
      })
    : null,
);

export default function InsetVsElevatedAirfieldLightsPage() {
  return (
    <ResourceArticle
      route="/resources/inset-vs-elevated-airfield-lights"
      breadcrumb={breadcrumb}
      title={title}
      heroImage={heroImage}
      heroVariant="equipment"
      jumpLink={sections[0]}
      sections={sections}
      showArticleFooter={false}
    >
      <JsonLd data={structuredData} />

      <section id={overview.id} aria-label={overview.title} className={`${styles.section} ${styles.overview}`}>
        <ReferenceParagraphs paragraphs={introduction} />
      </section>

      {sections.map((section) => (
        <ReferenceSection
          key={section.id}
          section={section}
          className={section.id === "the-short-answer" ? styles.referenceCallout : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
