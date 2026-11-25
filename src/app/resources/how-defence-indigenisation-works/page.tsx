import type { Metadata } from "next";
import type { ReactNode } from "react";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import JsonLd from "../../components/JsonLd";
import IndigenisationProcess from "../../components/resources/diagrams/IndigenisationProcess";
import { faqNode } from "@/lib/structured-data";
import { graph } from "@/lib/schema-base";
import {
  faqSection,
  introduction,
  metaDescription,
  metaTitle,
  sections,
  title,
} from "./article-content";

const route = "/resources/how-defence-indigenisation-works";
const canonicalUrl = `https://www.jetsys.co.in${route}`;
const overview = { id: "overview", title: "Overview" };
const breadcrumb = {
  links: [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
  ],
  current: "How Defence Indigenisation Works",
};

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: canonicalUrl },
};

// The page carries no photographs. The section 3 process diagram is inline SVG,
// and the hero runs without a background image. The section 15 comparison
// diagram from the source copy is not drawn: the table carries that argument.
const diagrams: Record<string, ReactNode> = {
  "indigenisation-process": <IndigenisationProcess />,
};

const renderDiagram = (name: string) => diagrams[name] ?? null;

const faq = faqSection.blocks.find((block) => block.kind === "faq");

// The trailing cross-reference in each answer is on-page navigation rather than
// part of the answer, so it is dropped from the schema text only.
const schemaAnswer = (answer: string) => answer.replace(/\s*\[[^\]]+\]\(#[^)]*\)\s*$/, "").trim();

// Article comes from ResourceArticle via the `route` prop, which also supplies
// datePublished and dateModified from the generated page index, and the
// BreadcrumbList comes from the root layout. Only the FAQPage lives here.
//
// No HowTo: the ten steps describe a process carried out by institutions over
// years, not steps the reader performs. No Organization: it is sitewide and
// @id-referenced, so the Article's publisher points at that one node.
const structuredData = graph(
  faq
    ? faqNode({
        route,
        entries: faq.entries.map(({ question, answer }) => ({
          question,
          answer: schemaAnswer(answer),
        })),
      })
    : null,
);

export default function HowDefenceIndigenisationWorksPage() {
  return (
    <ResourceArticle
      route={route}
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
          className={section.id === "the-process" ? styles.referenceCallout : undefined}
        />
      ))}

      <ReferenceSection section={faqSection} />
    </ResourceArticle>
  );
}
