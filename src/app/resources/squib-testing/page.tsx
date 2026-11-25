import type { Metadata } from "next";
import type { ReactNode } from "react";
import ResourceArticle from "../ResourceArticle";
import JsonLd from "../../components/JsonLd";
import { faqNode } from "@/lib/structured-data";
import { graph } from "@/lib/schema-base";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import FourWireMeasurement from "../../components/resources/diagrams/FourWireMeasurement";
import InstrumentClasses from "../../components/resources/diagrams/InstrumentClasses";
import ProcedureFlow from "../../components/resources/diagrams/ProcedureFlow";
import {
  faqSection,
  introduction,
  metaDescription,
  metaTitle,
  sections,
  title,
} from "./article-content";

const canonicalUrl = "https://www.jetsys.co.in/resources/squib-testing";
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

// Only the FAQPage lives here now. The Article comes from ResourceArticle via
// the `route` prop and the BreadcrumbList from the root layout, so this page no
// longer hand-rolls either. No HowTo: section 5 describes what a procedure
// consists of and is explicitly not steps for the reader to perform. No
// Product: that belongs on the ground test equipment page.
const structuredData = graph(
  faq
    ? faqNode({
        route: "/resources/squib-testing",
        entries: faq.entries.map(({ question, answer }) => ({
          question,
          answer: schemaAnswer(answer),
        })),
      })
    : null,
);

export default function SquibTestingPage() {
  return (
    <ResourceArticle
      route="/resources/squib-testing"
      breadcrumb={breadcrumb}
      title={title}
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
          renderDiagram={renderDiagram}
          className={section.id === "what-is-a-squib" ? styles.referenceCallout : undefined}
        />
      ))}

      <ReferenceSection section={faqSection} />
    </ResourceArticle>
  );
}
