import type { Metadata } from "next";
import ResourceArticle from "../ResourceArticle";
import { ReferenceSection } from "../ResourceReference";
import { metaDescription, metaTitle, sections, title } from "./article-content";

const breadcrumb = {
  links: [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
  ],
  current: title,
};

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: "https://www.jetsys.co.in/resources/led-vs-halogen-airfield-lights" },
};

export default function LedVsHalogenAirfieldLightsPage() {
  return (
    <ResourceArticle
      breadcrumb={breadcrumb}
      title={title}
      heroImage="/images/led-runway-lights.png"
      heroVariant="equipment"
      jumpLink={sections[1]}
      sections={sections}
      showArticleFooter={false}
    >
      {sections.map((section) => <ReferenceSection key={section.id} section={section} />)}
    </ResourceArticle>
  );
}
