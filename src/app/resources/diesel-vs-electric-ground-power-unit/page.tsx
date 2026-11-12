import type { Metadata } from "next";
import Image from "next/image";
import { BatteryCharging, Fuel, MoveHorizontal, Plug } from "lucide-react";
import ResourceArticle, {
  ArticleChecklist,
  ArticleDetailRows,
  ArticleFaq,
  ArticleParagraphs,
} from "../ResourceArticle";
import styles from "../resource-article.module.css";
import {
  applications,
  comparison,
  documentation,
  draftNote,
  faq,
  introduction,
  metaDescription,
  metaTitle,
  operation,
  selection,
  specifications,
  title,
  tradeOffs,
} from "./article-content";

const equipmentMedia = {
  diesel: { icon: Fuel, image: null },
  mains: { icon: Plug, image: "/images/fixed-electrical-ground-power2.png" },
  battery: { icon: BatteryCharging, image: "/images/electric-ground-power-unit.png" },
};

const detailSections = [
  { id: "applications", label: "Applications", content: applications },
  { id: "technical-specifications", label: "Technical specifications", content: specifications },
  { id: "operating-costs", label: "Costs, maintenance and emissions", content: tradeOffs },
];

const sections = [
  { id: "overview", title: "Overview" },
  { id: "at-a-glance", title: "At a glance" },
  { id: "how-they-work", title: "How the units work" },
  ...detailSections.map(({ id, label }) => ({ id, title: label })),
  { id: "how-to-choose", title: "How to choose" },
  { id: "documentation", title: "Jetsys configurations and documentation" },
  { id: "frequently-asked-questions", title: faq.title },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/diesel-vs-electric-ground-power-unit" },
};

export default function DieselVsElectricGroundPowerPage() {
  return (
    <ResourceArticle
      title={title}
      heroImage="/images/Aircraft ROH.png"
      jumpLink={{ id: "at-a-glance", title: "Compare the units" }}
      sections={sections}
      draftNote={draftNote}
    >
      <section id="overview" className={`${styles.section} ${styles.overview}`}>
        <h2>Overview</h2>
        <ArticleParagraphs paragraphs={introduction} />
      </section>

      <section id="at-a-glance" className={`${styles.section} ${styles.responsiveSection}`}>
        <h2 id="comparison-heading">{comparison.title}</h2>
        <p className={styles.tableHint}>
          <MoveHorizontal size={17} aria-hidden="true" /> Scroll to compare all columns
        </p>
        <div className={styles.tableScroll} role="region" aria-labelledby="comparison-heading" tabIndex={0}>
          <table className={styles.matrix}>
            <thead>
              <tr>
                {comparison.headers.map((header) => <th key={header} scope="col">{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map(([factor, ...values]) => (
                <tr key={factor}>
                  <th scope="row">{factor}</th>
                  {values.map((value, index) => <td key={comparison.headers[index + 1]}>{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="how-they-work" className={`${styles.section} ${styles.responsiveSection}`}>
        <h2>{operation.title}</h2>
        <div className={styles.equipmentGrid}>
          {operation.groups.map(({ id, title, paragraphs }) => {
            const { icon: Icon, image } = equipmentMedia[id];

            return (
              <div key={id} className={styles.formatCard} data-format={id}>
                <div className={styles.formatMedia}>
                  {image ? (
                    <Image src={image} alt="" fill sizes="(max-width: 760px) 90vw, 290px" />
                  ) : (
                    <Icon className={styles.equipmentIllustration} strokeWidth={1.25} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.formatCopy}>
                  <h3><Icon size={20} aria-hidden="true" />{title}</h3>
                  <ArticleParagraphs paragraphs={paragraphs} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {detailSections.map(({ id, content }) => (
        <section id={id} key={id} className={styles.section}>
          <h2>{content.title}</h2>
          <ArticleDetailRows groups={content.groups} />
        </section>
      ))}

      <section id="how-to-choose" className={`${styles.section} ${styles.checklist}`}>
        <h2>{selection.title}</h2>
        <ArticleChecklist steps={selection.steps} />
      </section>

      <section id="documentation" className={styles.section}>
        <h2>{documentation.title}</h2>
        <ArticleParagraphs paragraphs={documentation.paragraphs} />
      </section>

      <section id="frequently-asked-questions" className={styles.section}>
        <h2>{faq.title}</h2>
        <ArticleFaq entries={faq.entries} />
      </section>
    </ResourceArticle>
  );
}
