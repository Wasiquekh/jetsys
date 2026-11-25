import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const comparison = { id: sections[0].id, title: "Compare testing methods" };

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/aviation-fuel-testing-equipment" },
};

export default function AviationFuelTestingEquipmentPage() {
  return (
    <ResourceArticle
      route="/resources/aviation-fuel-testing-equipment"
      category="Avionics & Fuel Testing"
      title={title}
      heroImage="/images/aviation-fuel-testing-trolley.png"
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
