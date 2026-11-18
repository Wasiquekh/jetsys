import type { Metadata } from "next";
import ResourceArticle from "../../resources/ResourceArticle";
import { ReferenceParagraphs, ReferenceSection } from "../../resources/ResourceReference";
import styles from "../../resources/resource-article.module.css";
import { introduction, metaDescription, metaTitle, sections, title } from "./article-content";

const overview = { id: "overview", title: "Overview" };
const process = {
  id: "how-a-test-bench-is-specified-and-built-step-by-step",
  title: "See the test bench process",
};
const breadcrumb = {
  links: [{ href: "/solutions", label: "Solutions" }],
  current: title,
};
const contents = [overview, ...sections];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/solutions/custom-test-rig-design" },
};

export default function CustomTestRigDesignPage() {
  return (
    <ResourceArticle
      breadcrumb={breadcrumb}
      title={title}
      heroImage="/images/aircraft-component-test-bench.png"
      heroVariant="equipment"
      jumpLink={process}
      sections={contents}
      showArticleFooter={false}
    >
      <section id={overview.id} aria-label={overview.title} className={`${styles.section} ${styles.overview}`}>
        <ReferenceParagraphs paragraphs={introduction} />
      </section>

      {sections.map((section) => (
        <ReferenceSection
          key={section.id}
          section={section}
          className={section.id === process.id ? `${styles.checklist} ${styles.referenceSteps}` : undefined}
        />
      ))}
    </ResourceArticle>
  );
}
