import type { Metadata } from "next";
import ResourceArticle, { ArticleParagraphs } from "../ResourceArticle";
import { ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/airfield-signs-guide" },
};

export default function AirfieldSignsGuidePage() {
  return (
    <ResourceArticle
      route="/resources/airfield-signs-guide"
      category="Airfield Lighting & Signage"
      title={title}
      heroImage="/images/Taxiway Direction.png"
      heroVariant="equipment"
      jumpLink={sections[0]}
      sections={sections}
      showArticleFooter={false}
    >
      <section id={overview.id} aria-label={overview.title} className={`${styles.section} ${styles.overview}`}>
        <ArticleParagraphs paragraphs={introduction} />
      </section>

      {sections.map((section) => <ReferenceSection key={section.id} section={section} />)}
    </ResourceArticle>
  );
}
