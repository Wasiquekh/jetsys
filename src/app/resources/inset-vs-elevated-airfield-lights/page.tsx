import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const siteUrl = "https://www.jetsys.co.in";
const canonicalUrl = `${siteUrl}/resources/inset-vs-elevated-airfield-lights`;
const heroImage = "/images/precision-runway-lighting-system.png";
const overview = { id: "overview", title: "Overview" };
const contents = [overview, ...sections];
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      headline: title,
      description: metaDescription,
      mainEntityOfPage: canonicalUrl,
      image: `${siteUrl}${heroImage}`,
      author: { "@type": "Organization", name: "Jetsys Defence", url: siteUrl },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [...breadcrumb.links, { href: canonicalUrl, label: breadcrumb.current }]
        .map(({ href, label }, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: label,
          item: new URL(href, siteUrl).href,
        })),
    },
    ...(faq ? [{
      "@type": "FAQPage",
      mainEntity: faq.entries.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    }] : []),
  ],
};

export default function InsetVsElevatedAirfieldLightsPage() {
  return (
    <ResourceArticle
      breadcrumb={breadcrumb}
      title={title}
      heroImage={heroImage}
      heroVariant="equipment"
      jumpLink={sections[0]}
      sections={contents}
      showArticleFooter={false}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

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
