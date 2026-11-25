import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const checklist = { id: "aircraft-tow-bar-selection-checklist", title: "Aircraft Tow Bar Selection Checklist" };

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/how-to-choose-an-aircraft-tow-bar" },
};

export default function AircraftTowBarGuidePage() {
  return (
    <ResourceArticle
      route="/resources/how-to-choose-an-aircraft-tow-bar"
      category="Aircraft Ground Support"
      title={title}
      heroImage="/images/Aircraft Tow Bar.png"
      heroVariant="equipment-photo"
      jumpLink={checklist}
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
          className={section.id === checklist.id ? styles.referenceCallout : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
