import type { ReactNode } from "react";
import { MoveHorizontal } from "lucide-react";
import { ArticleFaq } from "./ResourceArticle";
import styles from "./resource-article.module.css";

type ArticleBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; title: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "table"; label: string; headers: string[]; rows: string[][] }
  | { kind: "faq"; entries: { question: string; answer: string }[] };

export type ArticleSection = {
  id: string;
  title: string;
  blocks: ArticleBlock[];
};

export function ReferenceSection({ section, className, children }: {
  section: ArticleSection;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section id={section.id} className={className ? `${styles.section} ${className}` : styles.section}>
      <h2>{section.title}</h2>
      <div className={styles.referenceBlocks}>
        {section.blocks.map((block, index) => <ReferenceBlock key={index} block={block} />)}
      </div>
      {children}
    </section>
  );
}

function ReferenceBlock({ block }: { block: ArticleBlock }) {
  switch (block.kind) {
    case "paragraph":
      return <div className={styles.paragraphs}><p>{block.text}</p></div>;
    case "heading":
      return <h3>{block.title}</h3>;
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      const className = block.ordered ? `${styles.criteriaList} ${styles.numberedList}` : styles.criteriaList;
      return (
        <Tag className={className}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </Tag>
      );
    }
    case "table": {
      const className = block.headers.length > 4
        ? `${styles.responsiveSection} ${styles.wideTable}`
        : styles.responsiveSection;

      return (
        <div className={className}>
          <p className={styles.tableHint}>
            <MoveHorizontal size={17} aria-hidden="true" /> Scroll to see all columns
          </p>
          <div className={styles.tableScroll} role="region" aria-label={block.label} tabIndex={0}>
            <table className={styles.matrix}>
              <thead>
                <tr>{block.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
              </thead>
              <tbody>
                {block.rows.map(([label, ...cells]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {cells.map((cell, index) => <td key={block.headers[index + 1]}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    case "faq":
      return <ArticleFaq entries={block.entries} />;
  }
}
