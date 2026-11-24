import type { Metadata } from "next";
import type { ReactNode } from "react";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import FourWireMeasurement from "../../components/resources/diagrams/FourWireMeasurement";
import InstrumentClasses from "../../components/resources/diagrams/InstrumentClasses";
import ProcedureFlow from "../../components/resources/diagrams/ProcedureFlow";
import {
  dateModified,
  datePublished,
  faqSection,
  introduction,
  metaDescription,
  metaTitle,
  sections,
  title,
} from "./article-content";

const siteUrl = "https://www.jetsys.co.in";
const canonicalUrl = `${siteUrl}/resources/squib-testing`;
const publisher = { "@type": "Organization", name: "Jetsys Defence", url: siteUrl };
const overview = { id: "overview", title: "Overview" };
const breadcrumb = {
  links: [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
  ],
  current: "Squib Testing",
};

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: canonicalUrl },
};

// The page carries no photographs, so the three diagrams are inline SVG rather
// than image files and the hero runs without a background image.
const diagrams: Record<string, ReactNode> = {
  "four-wire": <FourWireMeasurement />,
  "procedure-flow": <ProcedureFlow />,
  "instrument-classes": <InstrumentClasses />,
};

const renderDiagram = (name: string) => diagrams[name] ?? null;

const faq = faqSection.blocks.find((block) => block.kind === "faq");

// The trailing cross-reference in each answer is on-page navigation rather than
// part of the answer, so it is dropped from the schema text only.
const schemaAnswer = (answer: string) => answer.replace(/\s*\[[^\]]+\]\(#[^)]*\)\s*$/, "").trim();

// TechArticle matches the one other Resources article that emits JSON-LD.
// No HowTo: section 5 describes what a procedure consists of and is explicitly
// not steps for the reader to perform. No Product: that belongs on the ground
// test equipment page. Organization appears only as author and publisher.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      headline: title,
      description: metaDescription,
      mainEntityOfPage: canonicalUrl,
      datePublished,
      dateModified,
      author: publisher,
      publisher,
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
        acceptedAnswer: { "@type": "Answer", text: schemaAnswer(answer) },
      })),
    }] : []),
  ],
};

export default function SquibTestingPage() {
  return (
    <ResourceArticle
      breadcrumb={breadcrumb}
      title={title}
      jumpLink={sections[0]}
      sections={sections}
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
          renderDiagram={renderDiagram}
          className={section.id === "what-is-a-squib" ? styles.referenceCallout : undefined}
        />
      ))}

      <ReferenceSection section={faqSection} />
    </ResourceArticle>
  );
}
