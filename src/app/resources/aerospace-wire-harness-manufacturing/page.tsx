import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const process = { id: "manufacturing-process", title: "See the manufacturing process" };
const contents = [overview, ...sections];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/aerospace-wire-harness-manufacturing" },
};

export default function AerospaceWireHarnessManufacturingPage() {
  return (
    <ResourceArticle
      category="Aerospace Wiring & Manufacturing"
      title={title}
      heroImage="/images/aircraft-electrical-harness.png"
      heroVariant="equipment"
      jumpLink={process}
      sections={contents}
      showArticleFooter={false}
    >
      <section id={overview.id} aria-label={overview.title} className={`${styles.section} ${styles.overview}`}>
        <ReferenceParagraphs paragraphs={introduction} />
      </section>

      {sections.map((section) => (
        <ReferenceSection
          key={section.id}
          section={section}
          className={section.id === process.id ? styles.referenceCallout : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
