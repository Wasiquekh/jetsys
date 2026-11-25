import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const externalPower = {
  id: "external-power-and-ground-power-equipment",
  title: "External power and ground power equipment",
};

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/mil-std-704-aircraft-electrical-power" },
};

export default function MilStd704AircraftElectricalPowerPage() {
  return (
    <ResourceArticle
      route="/resources/mil-std-704-aircraft-electrical-power"
      breadcrumb={{
        links: [
          { href: "/", label: "Home" },
          { href: "/resources", label: "Resources" },
        ],
        current: "MIL-STD-704",
      }}
      title={title}
      heroImage="/images/aircraft-ground-power-unit.png"
      heroVariant="equipment"
      jumpLink={externalPower}
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
          className={section.id === externalPower.id ? styles.referenceCallout : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
