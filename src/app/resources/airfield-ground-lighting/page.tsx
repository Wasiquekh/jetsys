import type { Metadata } from "next";
import ResourceArticle, { ArticleParagraphs } from "../ResourceArticle";
import { ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };

export const metadata: Metadata = {
  title,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/airfield-ground-lighting" },
};

export default function AirfieldGroundLightingPage() {
  return (
    <ResourceArticle
      route="/resources/airfield-ground-lighting"
      category="Airfield Lighting & Signage"
      title={title}
      heroImage="/images/airport-ground-lighting-system.png"
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
