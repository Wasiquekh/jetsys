import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResourceArticle, { ArticleParagraphs } from "../ResourceArticle";
import { ReferenceSection } from "../ResourceReference";
import styles from "../resource-article.module.css";
import {
  introduction,
  metaDescription,
  metaTitle,
  sections,
  title,
} from "./article-content";

const overview = { id: "overview", title: "Overview" };
const contents = [overview, ...sections];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/air-data-test-set-calibration" },
};

export default function AirDataTestSetCalibrationPage() {
  return (
    <ResourceArticle
      category="Air Data & Pitot-Static Testing"
      title={title}
      heroImage="/images/Aircraft Air Data Calibration System.png"
      heroVariant="equipment"
      jumpLink={sections[0]}
      sections={contents}
    >
      <section id={overview.id} className={`${styles.section} ${styles.overview}`}>
        <h2>{overview.title}</h2>
        <ArticleParagraphs paragraphs={introduction} />
      </section>

      {sections.map((section) => {
        const isProcedure = section.id === "calibration-process";
        const isQuotation = section.id === "request-a-quotation";
        const sectionStyle = isProcedure ? `${styles.checklist} ${styles.referenceSteps}` : isQuotation ? styles.quotation : "";

        return (
          <ReferenceSection key={section.id} section={section} className={sectionStyle}>
            {isQuotation ? (
              <Link className={styles.heroLink} href="/contact-us">
                Contact Jetsys Defence <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ) : null}
          </ReferenceSection>
        );
      })}
    </ResourceArticle>
  );
}
