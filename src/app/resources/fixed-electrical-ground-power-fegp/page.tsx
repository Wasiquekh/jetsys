import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plug, Truck } from "lucide-react";
import ResourceArticle, {
  ArticleChecklist,
  ArticleDetailRows,
  ArticleFaq,
  ArticleParagraphs,
} from "../ResourceArticle";
import styles from "../resource-article.module.css";
import {
  applications,
  deployment,
  documentation,
  draftNote,
  faqs,
  introduction,
  metaDescription,
  metaTitle,
  planning,
  requirements,
  selectionSteps,
} from "./article-content";

const gpuPath = "/products/aviation-equipment/ground-supply-equipment/ground-power-unit";

const deploymentMedia = {
  fixed: {
    icon: Plug,
    image: "/images/fixed-electrical-ground-power2.png",
    href: gpuPath,
    linkLabel: "Explore fixed ground power options",
  },
  mobile: {
    icon: Truck,
    image: "/images/mobile_ground_power_unit.png",
    href: `${gpuPath}/mobile_ground_power_unit`,
    linkLabel: "Explore mobile ground power units",
  },
};

const overview = { id: "overview", title: "Overview" };
const comparison = { id: "fixed-and-mobile-ground-power", title: "Fixed and mobile ground power" };
const detailSections = [
  { id: "operating-environments", title: "Gates, remote stands and hangars", groups: applications },
  { id: "equipment-requirements", title: "Aircraft and site requirements", groups: requirements },
  { id: "capacity-cost-and-backup", title: "Capacity, costs and backup coverage", groups: planning },
];
const checklist = { id: "selection-checklist", title: "Selection checklist" };
const records = { id: "documentation", title: "Jetsys configurations and documentation" };
const questions = { id: "frequently-asked-questions", title: "Frequently asked questions" };

const sections = [overview, comparison, ...detailSections, checklist, records, questions];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/fixed-electrical-ground-power-fegp" },
};

export default function FixedElectricalGroundPowerPage() {
  return (
    <ResourceArticle
      title="FEGP vs Mobile Ground Power Units for Aircraft"
      heroImage="/images/Other Offerings.png"
      jumpLink={{ id: comparison.id, title: "Compare fixed and mobile ground power" }}
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
          {deployment.map(({ id, title, paragraphs }) => {
            const { icon: Icon, image, href, linkLabel } = deploymentMedia[id];

            return (
              <div key={id} className={styles.formatCard} data-format={id}>
                <div className={styles.formatMedia}>
                  <Image src={image} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 420px" />
                </div>
                <div className={styles.formatCopy}>
                  <h3><Icon size={22} aria-hidden="true" />{title}</h3>
                  <ArticleParagraphs paragraphs={paragraphs} />
                  <Link href={href} className={styles.productLink}>
                    {linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {detailSections.map(({ id, title, groups }) => (
        <section key={id} id={id} className={styles.section}>
          <h2>{title}</h2>
          <ArticleDetailRows groups={groups} />
        </section>
      ))}

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
