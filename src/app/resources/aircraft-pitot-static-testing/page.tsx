import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ResourceArticle, {
  ArticleChecklist,
  ArticleDetailRows,
  ArticleFaq,
  ArticleParagraphs,
} from "../ResourceArticle";
import styles from "../resource-article.module.css";
import {
  draftNote,
  equipment,
  faqs,
  introduction,
  metaDescription,
  metaTitle,
  principles,
  procedureNote,
  procedureSteps,
  products,
  results,
  selectionCriteria,
  selectionIntro,
  testingTriggers,
} from "./article-content";

const groundTestPath = "/products/aviation-equipment/ground-test-equipment";
const productMedia = {
  "air-data": {
    image: "/images/Air Data Test System.png",
    href: `${groundTestPath}/air-data-test-system`,
    linkLabel: "View Air Data Test System",
  },
  "pitot-leak": {
    image: "/images/Automated Pitot Leak Tester.png",
    href: `${groundTestPath}/automated-pitot-leak-tester`,
    linkLabel: "View Automated Pitot Leak Tester",
  },
};

const overview = { id: "overview", title: "Overview" };
const detailSections = [
  { id: "what-testing-checks", title: "What pitot-static testing checks", groups: principles },
  { id: "when-testing-is-needed", title: "When testing is needed", groups: testingTriggers },
  { id: "test-equipment", title: "Pitot-static test equipment", groups: equipment },
];
const procedure = { id: "testing-process", title: "The testing process" };
const records = { id: "results-and-records", title: "Interpreting and recording results" };
const selection = { id: "selecting-a-test-set", title: "Choosing a pitot-static test set" };
const jetsys = { id: "jetsys-equipment", title: "Jetsys Defence test equipment" };
const questions = { id: "frequently-asked-questions", title: "Frequently asked questions" };
const sections = [overview, ...detailSections, procedure, records, selection, jetsys, questions];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/aircraft-pitot-static-testing" },
};

export default function AircraftPitotStaticTestingPage() {
  return (
    <ResourceArticle
      category="Air Data & Pitot-Static Testing"
      title="Aircraft Pitot Static Testing and Test Equipment"
      heroImage="/images/aircraft_pitot_static_tester.png"
      heroVariant="equipment"
      jumpLink={detailSections[0]}
      sections={sections}
      draftNote={draftNote}
    >
      <section id={overview.id} className={`${styles.section} ${styles.overview}`}>
        <h2>{overview.title}</h2>
        <ArticleParagraphs paragraphs={introduction} />
      </section>

      {detailSections.map(({ id, title, groups }) => (
        <section id={id} key={id} className={styles.section}>
          <h2>{title}</h2>
          <ArticleDetailRows groups={groups} />
        </section>
      ))}

      <section id={procedure.id} className={`${styles.section} ${styles.checklist}`}>
        <h2>{procedure.title}</h2>
        <ArticleChecklist steps={procedureSteps} />
        <p className={styles.procedureNote}>{procedureNote}</p>
      </section>

      <section id={records.id} className={styles.section}>
        <h2>{records.title}</h2>
        <ArticleDetailRows groups={results} />
      </section>

      <section id={selection.id} className={styles.section}>
        <h2>{selection.title}</h2>
        <ArticleParagraphs paragraphs={[selectionIntro]} />
        <ul className={styles.criteriaList}>
          {selectionCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
        </ul>
      </section>

      <section id={jetsys.id} className={styles.section}>
        <h2>{jetsys.title}</h2>
        <div className={styles.comparisonGrid}>
          {products.map(({ id, paragraph }) => {
            const { image, href, linkLabel } = productMedia[id];
            const titleEnd = paragraph.indexOf(". ") + 1;

            return (
              <div key={id} className={styles.formatCard} data-format={id}>
                <div className={styles.formatMedia}>
                  <Image src={image} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 420px" />
                </div>
                <div className={styles.formatCopy}>
                  <div className={styles.paragraphs}>
                    <p><strong>{paragraph.slice(0, titleEnd)}</strong>{paragraph.slice(titleEnd)}</p>
                  </div>
                  <Link href={href} className={styles.productLink}>
                    {linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id={questions.id} className={styles.section}>
        <h2>{questions.title}</h2>
        <ArticleFaq entries={faqs} />
      </section>
    </ResourceArticle>
  );
}
