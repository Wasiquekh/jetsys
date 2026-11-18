import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const whyNitrogen = { id: "why-dry-nitrogen-is-used", title: "Why dry nitrogen is used" };
const contents = [overview, ...sections];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/nitrogen-for-aircraft-tyres" },
};

export default function NitrogenForAircraftTyresPage() {
  return (
    <ResourceArticle
      category="Aircraft Ground Support"
      title={title}
      heroImage="/images/tire_infliation.png"
      heroVariant="equipment"
      jumpLink={whyNitrogen}
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
          className={section.id === "aircraft-systems-that-require-nitrogen-servicing" ? styles.referenceCallout : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
