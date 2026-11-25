import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const comparison = { id: sections[0].id, title: "Compare the equipment" };

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/engine-starting-trolley-vs-ground-power-unit" },
};

export default function EngineStartingTrolleyVsGroundPowerUnitPage() {
  return (
    <ResourceArticle
      route="/resources/engine-starting-trolley-vs-ground-power-unit"
      category="Aircraft Ground Support"
      title={title}
      heroImage="/images/aircraft-starting-power-unit.png"
      heroVariant="equipment"
      jumpLink={comparison}
      sections={sections}
      showArticleFooter={false}
    >
      <section id={overview.id} aria-label={overview.title} className={`${styles.section} ${styles.overview}`}>
        <ReferenceParagraphs paragraphs={introduction} />
      </section>

      {sections.map((section) => (
        <ReferenceSection
          key={section.id}
          section={section}
          className={section.id === comparison.id ? styles.referenceCallout : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
