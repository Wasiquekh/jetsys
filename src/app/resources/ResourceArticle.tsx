import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight, List } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import JsonLd from "../components/JsonLd";
import { PAGE_INDEX } from "@/lib/page-index";
import { articleNode } from "@/lib/structured-data";
import { graph } from "@/lib/schema-base";
import styles from "./resource-article.module.css";

type ArticleLink = { id: string; title: string };
type Breadcrumb = { links: readonly { href: string; label: string }[]; current: string };
const resourcesLink = { href: "/resources", label: "Resources" };

/**
 * The id of the lead-in block every guide opens with. It is styled as an
 * unheaded lead paragraph, so it has no <h2> for a contents link to land on.
 */
const OVERVIEW_ID = "overview";

/**
 * Builds the "On this page" list.
 *
 * Guides used to prepend their own `{ id: "overview", title: "Overview" }`
 * entry by hand while rendering the lead-in without a heading, which left
 * twelve pages advertising a section that did not visibly exist. The contents
 * list is now derived here instead, and an Overview entry only appears when
 * `overviewHeading` is set - which is also the only thing that renders the
 * matching <h2>. Entry and heading are produced together or not at all, so a
 * new guide cannot reintroduce the mismatch.
 */
function contentsFor(sections: readonly ArticleLink[], overviewHeading?: string) {
  const rest = sections.filter((section) => section.id !== OVERVIEW_ID);
  return overviewHeading
    ? [{ id: OVERVIEW_ID, title: overviewHeading }, ...rest]
    : rest;
}

export default function ResourceArticle({
  category = "Aircraft Ground Power",
  breadcrumb = { links: [resourcesLink], current: category },
  route,
  articleType = "Article",
  title,
  heroImage,
  heroVariant,
  jumpLink,
  sections,
  overviewHeading,
  draftNote,
  showArticleFooter = true,
  children,
}: {
  category?: string;
  breadcrumb?: Breadcrumb;
  /**
   * This guide's own path, e.g. "/resources/squib-testing". Supplying it emits
   * the Article structured data for the page, with the headline, description
   * and dates read from the generated page index - so the article's
   * dateModified and the sitemap's lastmod are always the same value. The
   * BreadcrumbList is emitted site-wide from the root layout, not here.
   */
  route?: string;
  /** TechArticle where a guide is genuinely technical reference material. */
  articleType?: "Article" | "TechArticle";
  title: ReactNode;
  heroImage?: string;
  heroVariant?: "equipment" | "equipment-photo";
  jumpLink: ArticleLink;
  sections: readonly ArticleLink[];
  /**
   * Set this only when the lead-in block really renders a heading with this
   * text. Leaving it unset keeps the lead-in out of the contents list.
   */
  overviewHeading?: string;
  draftNote?: string;
  showArticleFooter?: boolean;
  children: ReactNode;
}) {
  const contents = contentsFor(sections, overviewHeading);
  const record = route ? PAGE_INDEX[route] : undefined;

  return (
    <>
      {route && record ? (
        <JsonLd
          data={graph(
            articleNode({
              route,
              headline: record.label,
              description: record.description,
              type: articleType,
            }),
          )}
        />
      ) : null}
      <Header />
      <StickyHeader />
      <main className={styles.page}>
        <article aria-labelledby="resource-article-title">
          <header className={styles.hero} data-variant={heroVariant}>
            {heroImage ? (
              <div className={styles.heroMedia}>
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  priority
                  sizes={heroVariant ? "(max-width: 720px) 100vw, 55vw" : "(max-width: 720px) 100vw, 70vw"}
                />
              </div>
            ) : null}
            <div className={`${styles.shell} ${styles.heroInner}`}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                {breadcrumb.links.map(({ href, label }) => (
                  <Fragment key={href}>
                    <Link href={href}>{label}</Link>
                    <ChevronRight size={14} aria-hidden="true" />
                  </Fragment>
                ))}
                <span aria-current="page">{breadcrumb.current}</span>
              </nav>
              <h1 id="resource-article-title">{title}</h1>
              <a href={`#${jumpLink.id}`} className={styles.heroLink}>
                {jumpLink.title} <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </header>

          <div className={`${styles.shell} ${styles.articleLayout}`}>
            <nav className={styles.contents} aria-labelledby="resource-article-contents">
              <p id="resource-article-contents">
                <List size={18} aria-hidden="true" /> On this page
              </p>
              <ul>
                {contents.map(({ id, title }) => (
                  <li key={id}><a href={`#${id}`}>{title}</a></li>
                ))}
              </ul>
            </nav>

            <div className={styles.articleBody}>
              {children}
              {showArticleFooter ? (
                <footer className={styles.articleFooter}>
                  {draftNote ? (
                    <details className={styles.draftNote} suppressHydrationWarning>
                      <summary>Draft formatting note</summary>
                      <p>{draftNote}</p>
                    </details>
                  ) : null}
                  <Link href="/resources" className={styles.backLink}>
                    Explore more resources <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </footer>
              ) : null}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function ArticleParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className={styles.paragraphs}>
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

export function ArticleDetailRows({ groups }: {
  groups: readonly { title: string; paragraphs: readonly string[] }[];
}) {
  return (
    <div className={styles.detailRows}>
      {groups.map(({ title, paragraphs }) => (
        <div key={title} className={styles.detailRow}>
          <h3>{title}</h3>
          <ArticleParagraphs paragraphs={paragraphs} />
        </div>
      ))}
    </div>
  );
}

export function ArticleChecklist({ steps }: { steps: readonly string[] }) {
  return (
    <ol>
      {steps.map((step) => {
        const sentenceEnd = step.indexOf(". ") + 1;

        return (
          <li key={step}>
            <strong>{step.slice(0, sentenceEnd)}</strong>{step.slice(sentenceEnd)}
          </li>
        );
      })}
    </ol>
  );
}

export function ArticleFaq({ entries, renderAnswer }: {
  entries: readonly { question: string; answer: string }[];
  renderAnswer?: (answer: string) => ReactNode;
}) {
  return (
    <div className={styles.faqList}>
      {entries.map(({ question, answer }) => (
        <details key={question} name="resource-article-faq" className={styles.faqItem} suppressHydrationWarning>
          <summary>
            <h3>{question} <ChevronDown size={19} aria-hidden="true" /></h3>
          </summary>
          <p>{renderAnswer ? renderAnswer(answer) : answer}</p>
        </details>
      ))}
    </div>
  );
}
