import type { Metadata } from "next";
import { MoveHorizontal } from "lucide-react";
import ResourceArticle from "../ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../ResourceReference";
import articleStyles from "../resource-article.module.css";
import styles from "./glossary.module.css";
import {
  indexIntro,
  indexLetters,
  introduction,
  letterGroups,
  metaDescription,
  metaTitle,
  sections,
  title,
} from "./article-content";

const overview = { id: "overview", title: "Overview" };
const index = { id: "glossary-index", title: "How to Use This Glossary" };
const categories = sections.slice(0, 10);
const contents = [index, ...sections];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: {
    canonical: "https://www.jetsys.co.in/resources/aviation-ground-support-equipment-glossary",
  },
};

export default function AviationGroundSupportEquipmentGlossaryPage() {
  return (
    <ResourceArticle
      route="/resources/aviation-ground-support-equipment-glossary"
      breadcrumb={{
        links: [{ href: "/", label: "Home" }, { href: "/resources", label: "Resources" }],
        current: "Glossary",
      }}
      title={title}
      heroImage="/images/Aircraft Air Data Calibration System.png"
      heroVariant="equipment"
      jumpLink={{ id: index.id, title: "Browse the A–Z index" }}
      sections={contents}
      showArticleFooter={false}
    >
      <section id={overview.id} aria-label={overview.title} className={articleStyles.section + " " + articleStyles.overview}>
        <ReferenceParagraphs paragraphs={introduction} />
      </section>

      <section id={index.id} className={articleStyles.section}>
        <h2>{index.title}</h2>
        <ReferenceParagraphs paragraphs={[indexIntro]} />

        <nav className={styles.jumpIndex} aria-label="A–Z jump index">
          <p>A–Z jump index</p>
          <ul>
            {indexLetters.map(({ label, id }) => (
              <li key={label}>
                {id ? <a href={"#" + id}>{label}</a> : <span aria-disabled="true">{label}</span>}
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.categoryIndex} aria-label="Browse by category">
          <p>Browse by category</p>
          <ul>
            {categories.map(({ id, title }) => <li key={id}><a href={"#" + id}>{title}</a></li>)}
          </ul>
          <a href="#abbreviations-quick-reference" className={styles.abbreviationsLink}>
            Abbreviations quick reference
          </a>
        </nav>

        <div className={articleStyles.responsiveSection}>
          <p className={articleStyles.tableHint}>
            <MoveHorizontal size={17} aria-hidden="true" /> Scroll to see all columns
          </p>
          <div className={articleStyles.tableScroll} role="region" aria-label="A–Z glossary terms" tabIndex={0}>
            <table className={articleStyles.matrix + " " + styles.indexTable}>
              <thead><tr><th scope="col">Letter</th><th scope="col">Terms</th></tr></thead>
              <tbody>
                {letterGroups.map(({ id, letter, terms }) => (
                  <tr key={id}>
                    <th id={id} scope="row" className={articleStyles.headingAnchor}>{letter}</th>
                    <td>
                      <ul className={styles.termLinks}>
                        {terms.map(({ label, id }) => <li key={label}><a href={"#" + id}>{label}</a></li>)}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {sections.map((section) => <ReferenceSection key={section.id} section={section} />)}
    </ResourceArticle>
  );
}
