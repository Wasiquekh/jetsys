import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Minus, Waves } from "lucide-react";
import ResourceArticle, { ArticleChecklist, ArticleDetailRows, ArticleFaq, ArticleParagraphs } from "../ResourceArticle";
import {
  configurations,
  documentation,
  draftNote,
  faqs,
  formats,
  introduction,
  metaDescription,
  metaTitle,
  selectionSteps,
  specifications,
  usage,
} from "./article-content";
import styles from "../resource-article.module.css";

const gpuPath = "/products/aviation-equipment/ground-supply-equipment/ground-power-unit";

const formatMedia = {
  "28-v-dc": {
    icon: Minus,
    image: "/images/28.5vdc-ground-power-unit.png",
    product: `${gpuPath}/28.5vdc-ground-power-unit`,
    label: "View 28.5 V DC ground power unit",
  },
  "400-hz-ac": {
    icon: Waves,
    image: "/images/400Hz Ground Power Unit.png",
    product: `${gpuPath}/400hz-ground-power-unit`,
    label: "View 400 Hz ground power unit",
  },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "power-formats", title: "Compare the power formats" },
  { id: "where-it-is-used", title: "Ramp and hangar applications" },
  { id: "gpu-configurations", title: "Ground power unit configurations" },
  { id: "specifications", title: "Specifications to check" },
  { id: "selection-checklist", title: "Selection checklist" },
  { id: "documentation", title: "Documentation and testing" },
  { id: "frequently-asked-questions", title: "Frequently asked questions" },
] as const;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/28v-dc-vs-400hz-ground-power" },
};

export default function GroundPowerResourcePage() {
  const [overview, comparison, applications, equipment, specs, checklist, records, questions] = sections;

  return (
    <ResourceArticle
      title={(
        <>
          <span className={styles.titleLine}>28 V DC vs <span className={styles.frequency}>400 Hz</span></span>{" "}
          <span className={styles.titleLine}>Ground Power for Aircraft</span>
        </>
      )}
      heroImage="/images/Testing & Maintenance.png"
      jumpLink={comparison}
      sections={sections}
      draftNote={draftNote}
    >
      <section id={overview.id} className={`${styles.section} ${styles.overview}`}>
        <h2>{overview.title}</h2>
        <ArticleParagraphs paragraphs={introduction} />
      </section>

      <section id={comparison.id} className={styles.section}>
        <h2>{comparison.title}</h2>
        <div className={styles.comparisonGrid}>
          {formats.map(({ id, title, paragraphs }) => {
            const { icon: Icon, image, product, label } = formatMedia[id];

            return (
              <div key={id} className={styles.formatCard} data-format={id}>
                <div className={styles.formatMedia}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 400px"
                  />
                </div>
                <div className={styles.formatCopy}>
                  <h3><Icon size={22} aria-hidden="true" />{title}</h3>
                  <ArticleParagraphs paragraphs={paragraphs} />
                  <Link className={styles.productLink} href={product}>
                    {label} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id={applications.id} className={styles.section}>
        <h2>{applications.title}</h2>
        <div className={styles.applicationGrid}>
          {usage.map(({ title, paragraphs }) => (
            <div key={title} className={styles.applicationCard}>
              <h3>{title}</h3>
              <ArticleParagraphs paragraphs={paragraphs} />
            </div>
          ))}
        </div>
      </section>

      <section id={equipment.id} className={styles.section}>
        <h2>{equipment.title}</h2>
        <ArticleDetailRows groups={configurations} />
      </section>

      <section id={specs.id} className={styles.section}>
        <h2>{specs.title}</h2>
        <ArticleDetailRows groups={specifications} />
      </section>

      <section id={checklist.id} className={`${styles.section} ${styles.checklist}`}>
        <h2>{checklist.title}</h2>
        <ArticleChecklist steps={selectionSteps} />
      </section>

      <section id={records.id} className={styles.section}>
        <h2>{records.title}</h2>
        <ArticleParagraphs paragraphs={documentation} />
      </section>

      <section id={questions.id} className={styles.section}>
        <h2>{questions.title}</h2>
        <ArticleFaq entries={faqs} />
      </section>
    </ResourceArticle>
  );
}
