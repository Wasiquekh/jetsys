import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight, List } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import styles from "./resource-article.module.css";

type ArticleLink = { id: string; title: string };
type Breadcrumb = { links: readonly { href: string; label: string }[]; current: string };
const resourcesLink = { href: "/resources", label: "Resources" };

export default function ResourceArticle({
  category = "Aircraft Ground Power",
  breadcrumb = { links: [resourcesLink], current: category },
  title,
  heroImage,
  heroVariant,
  jumpLink,
  sections,
  draftNote,
  showArticleFooter = true,
  children,
}: {
  category?: string;
  breadcrumb?: Breadcrumb;
  title: ReactNode;
  heroImage?: string;
  heroVariant?: "equipment" | "equipment-photo";
  jumpLink: ArticleLink;
  sections: readonly ArticleLink[];
  draftNote?: string;
  showArticleFooter?: boolean;
  children: ReactNode;
}) {
  return (
    <>
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
                {sections.map(({ id, title }) => (
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
