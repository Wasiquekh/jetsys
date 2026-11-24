import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, MoveHorizontal } from "lucide-react";
import { ArticleFaq } from "./ResourceArticle";
import styles from "./resource-article.module.css";

type ArticleBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; id?: string; title: string; level?: 3 | 4 }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "table"; label: string; caption?: string; headers: string[]; rows: string[][] }
  | { kind: "faq"; entries: { question: string; answer: string }[] }
  | { kind: "diagram"; name: string };

export type ArticleSection = {
  id: string;
  headingId?: string;
  title: string;
  blocks: ArticleBlock[];
};

const internalLink = /\[([^\]\r\n]+)\]\((\/(?!\/)[a-z0-9/_-]+(?:#[a-z0-9_-]+)?|#[a-z0-9_-]+)\)/gi;

function referenceText(text: string) {
  if (!text.includes("](/") && !text.includes("](#")) return text;

  const parts: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(internalLink)) {
    const [source, label, href] = match;
    const start = match.index;
    parts.push(text.slice(cursor, start));
    parts.push(href.startsWith("#")
      ? <a key={start} href={href}>{label}</a>
      : <Link key={start} href={href}>{label}</Link>);
    cursor = start + source.length;
  }

  parts.push(text.slice(cursor));
  return parts;
}

export function ReferenceParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className={styles.paragraphs}>
      {paragraphs.map((paragraph) => <p key={paragraph}>{referenceText(paragraph)}</p>)}
    </div>
  );
}

export function ReferenceSection({ section, className, children, renderDiagram }: {
  section: ArticleSection;
  className?: string;
  children?: ReactNode;
  renderDiagram?: (name: string) => ReactNode;
}) {
  return (
    <section id={section.id} className={className ? `${styles.section} ${className}` : styles.section}>
      <h2 id={section.headingId} className={section.headingId ? styles.headingAnchor : undefined}>{section.title}</h2>
      <div className={styles.referenceBlocks}>
        {section.blocks.map((block, index) => (
          <ReferenceBlock key={index} block={block} renderDiagram={renderDiagram} />
        ))}
      </div>
      {children}
    </section>
  );
}

function ReferenceBlock({ block, renderDiagram }: {
  block: ArticleBlock;
  renderDiagram?: (name: string) => ReactNode;
}) {
  switch (block.kind) {
    case "paragraph": {
      const action = /^\[([^\]\r\n]+)\]\(\/contact-us\)$/.exec(block.text);
      if (action) {
        return (
          <div>
            <Link href="/contact-us" className={styles.referenceAction}>
              {action[1]} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        );
      }

      return <ReferenceParagraphs paragraphs={[block.text]} />;
    }
    case "heading": {
      const Heading = block.level === 4 ? "h4" : "h3";
      return <Heading id={block.id} className={block.id ? styles.headingAnchor : undefined}>{block.title}</Heading>;
    }
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      const className = block.ordered ? `${styles.criteriaList} ${styles.numberedList}` : styles.criteriaList;
      return (
        <Tag className={className}>
          {block.items.map((item) => <li key={item}>{referenceText(item)}</li>)}
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
              {block.caption ? <caption>{block.caption}</caption> : null}
              <thead>
                <tr>{block.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
              </thead>
              <tbody>
                {block.rows.map(([label, ...cells]) => (
                  <tr key={label}>
                    <th scope="row">{referenceText(label)}</th>
                    {cells.map((cell, index) => <td key={block.headers[index + 1]}>{referenceText(cell)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    case "faq":
      return <ArticleFaq entries={block.entries} renderAnswer={referenceText} />;
    case "diagram":
      return renderDiagram ? <figure className={styles.diagram}>{renderDiagram(block.name)}</figure> : null;
  }
}
