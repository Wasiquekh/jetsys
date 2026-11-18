import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import styles from "../hubs.module.css";
import ScrollReveal from "../components/ScrollReveal";

type SubjectLink = { label: string; href: string };
type Subject = string | SubjectLink;

type Topic = {
  title: string;
  description: string;
  subjects: Subject[];
  image: string;
  cover?: boolean;
};

const topics: Topic[] = [
  {
    title: "Aircraft Ground Power",
    description: "Explore the choices behind aircraft ground power, including power formats, equipment mobility and how units are powered. Use these topics to prepare questions about aircraft compatibility and operating needs.",
    subjects: [
      { label: "28 V DC vs 400 Hz", href: "/resources/28v-dc-vs-400hz-ground-power" },
      { label: "Diesel vs electric GPUs", href: "/resources/diesel-vs-electric-ground-power-unit" },
      { label: "Fixed vs mobile ground power", href: "/resources/fixed-electrical-ground-power-fegp" },
    ],
    image: "/images/H1 Ground Power Unit for Aircraft Maintenance.png",
  },
  {
    title: "Air Data & Pitot-Static Testing",
    description: "Understand where pitot-static testing and air data test set calibration fit into aircraft maintenance discussions. Get familiar with the equipment and documentation to ask about when defining a test requirement.",
    subjects: [
      { label: "Pitot-static testing", href: "/resources/aircraft-pitot-static-testing" },
      { label: "Air data test sets", href: "/resources/air-data-test-set-calibration#what-is-an-air-data-test-set" },
      { label: "Calibration", href: "/resources/air-data-test-set-calibration" },
    ],
    image: "/images/Pitot Static Test Equipment.png",
  },
  {
    title: "Thermal Vacuum & Space Testing",
    description: "Explore the purpose of thermal vacuum testing and the decisions involved in selecting a chamber for a space test programme. Start with the hardware being tested and the conditions the test needs to represent.",
    subjects: [
      { label: "TVAC testing", href: "/resources/thermal-vacuum-testing" },
      { label: "Chamber design", href: "/resources/thermal-vacuum-testing#thermal-vacuum-chamber" },
      { label: "Space hardware testing", href: "/resources/thermal-vacuum-testing#applications-and-use-cases" },
    ],
    image: "/images/Thermal Vacuum Chamber.png",
  },
  {
    title: "Airfield Lighting & Signage",
    description: "Get familiar with the lighting and signs used across airfields. Compare equipment by its location, intended purpose and installation requirements.",
    subjects: [
      { label: "Airfield ground lighting", href: "/resources/airfield-ground-lighting" },
      { label: "Airfield signs", href: "/resources/airfield-signs-guide" },
      { label: "LED vs halogen", href: "/resources/led-vs-halogen-airfield-lights" },
      { label: "Inset vs elevated lights", href: "/resources/inset-vs-elevated-airfield-lights" },
    ],
    image: "/images/airfield-lighting-system.png",
  },
  {
    title: "Aerospace Wiring & Manufacturing",
    description: "Learn what to discuss when specifying aircraft wire harnesses, from drawings and interfaces to inspection, testing and traceability documentation.",
    subjects: [
      { label: "Wire harness manufacturing", href: "/resources/aerospace-wire-harness-manufacturing" },
      { label: "Inspection and testing", href: "/resources/aerospace-wire-harness-manufacturing#inspection-and-testing" },
      { label: "Traceability", href: "/resources/aerospace-wire-harness-manufacturing#traceability" },
    ],
    image: "/images/aircraft-wiring-harness.png",
  },
  {
    title: "Aircraft Ground Support",
    description: "Explore equipment used for aircraft movement, servicing and engine starting. Identify the aircraft interface and operational requirements before comparing equipment options.",
    subjects: [
      { label: "Aircraft tow bars", href: "/resources/how-to-choose-an-aircraft-tow-bar" },
      { label: "Nitrogen servicing", href: "/resources/nitrogen-for-aircraft-tyres" },
      { label: "Engine starting equipment", href: "/resources/engine-starting-trolley-vs-ground-power-unit" },
    ],
    image: "/images/Aircraft Tow Bar.png",
  },
  {
    title: "Avionics & Fuel Testing",
    description: "Browse aircraft test equipment topics for avionics and fuel systems. Understand how measurement needs, equipment interfaces and reporting requirements shape an enquiry.",
    subjects: [
      { label: "Avionics test equipment", href: "/resources/aviation-fuel-testing-equipment" },
      { label: "Fuel testing", href: "/resources/aviation-fuel-testing-equipment" },
      "Test benches",
    ],
    image: "/images/aircraft-fuel-testing-equipment.png",
  },
  {
    title: "Engineering Standards & Glossary",
    description: "Find a starting point for understanding the abbreviations and standards that appear in aviation equipment discussions, specifications and procurement documents.",
    subjects: ["MIL-STD-704", "Aviation terminology", "Equipment acronyms"],
    image: "/images/Aircraft Air Data Calibration System.png",
  },
  {
    title: "Defence Indigenization",
    description: "Explore the terminology used in indigenization projects, including requirements definition, local manufacturing, validation and documentation.",
    subjects: ["Local manufacturing", "Validation", "Engineering documentation"],
    image: "/images/Indegenization.png",
    cover: true,
  },
];

const articleCount = new Set(
  topics.flatMap(({ subjects }) =>
    subjects
      .filter((subject): subject is SubjectLink => typeof subject !== "string")
      .map((subject) => subject.href.split("#")[0]),
  ),
).size;

const subjectCount = topics.reduce((total, { subjects }) => total + subjects.length, 0);

const heroStats = [
  { label: "Topic areas", value: topics.length },
  { label: "In-depth articles", value: articleCount },
  { label: "Subjects covered", value: subjectCount },
];

const faqs = [
  {
    question: "Who is the Resources section for?",
    answer: "It is for engineering, maintenance and procurement teams looking to understand aviation equipment, compare options or prepare a technical enquiry.",
  },
  {
    question: "Where can I find specifications for a Jetsys product?",
    answer: (
      <>
        Check the relevant page in the <Link href="/products">Jetsys product catalogue</Link>.
        For details about a particular model or configuration,{" "}
        <Link href="/contact-us">contact Jetsys</Link> with your application requirements.
      </>
    ),
  },
  {
    question: "What information should I prepare before comparing equipment?",
    answer: "Start with the intended application, relevant aircraft or equipment interface, operating environment and any documentation your team requires. These details help narrow the options to discuss.",
  },
  {
    question: "How can I discuss a technical requirement with Jetsys?",
    answer: (
      <>
        Use the existing <Link href="/contact-us">Jetsys enquiry form</Link>. Describe the
        equipment or application and include the technical requirements you already know.
      </>
    ),
  },
];

export const metadata: Metadata = {
  title: "Aviation & Aerospace Resources | Jetsys Defence",
  description: "Explore technical topics on ground power, aircraft testing, airfield systems and aerospace manufacturing, and prepare clearer technical enquiries.",
  alternates: { canonical: "https://www.jetsys.co.in/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <StickyHeader />
      <ScrollReveal />
      <main className={styles.resources}>
        <section className={styles.resourceHero} aria-labelledby="resources-title">
          <div className={styles.resourceBackdrop}>
            <Image
              src="/images/Other Offerings.png"
              alt=""
              fill
              priority
              sizes="(max-width: 760px) 100vw, 72vw"
              className={styles.resourceImage}
            />
          </div>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`${styles.shell} ${styles.resourceHeroInner}`}>
            <p className={styles.heroEyebrow}>Technical Resource Library</p>
            <h1 id="resources-title" className={`horizon ${styles.resourceTitle}`}>
              Aviation &amp; Aerospace Resources
            </h1>
            <p className={styles.resourceLede}>
              Explore aircraft ground power, testing equipment, airfield systems and
              aerospace manufacturing. Get familiar with the terminology, understand
              what to compare, and prepare clearer technical enquiries.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.topicLink} href="#resource-topics">
                Explore Resource Topics <ArrowDown size={18} aria-hidden="true" />
              </a>
              <Link className={styles.ghostLink} href="/contact-us">
                Discuss a requirement <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <dl className={styles.heroStats}>
              {heroStats.map(({ label, value }) => (
                <div key={label} className={styles.heroStat}>
                  <dt>{label}</dt>
                  <dd>{String(value).padStart(2, "0")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.resourceEditorial} aria-labelledby="resource-intro-title">
          <div className={`${styles.shell} ${styles.editorialLayout}`}>
            <div className={styles.editorialHead} data-animate>
              <p className={styles.eyebrow}>Overview</p>
              <h2 id="resource-intro-title" className={styles.sectionTitle}>
                Understand the equipment behind the operation
              </h2>
            </div>
            <div className={styles.editorialCopy}>
              <p data-animate>
                An equipment requirement usually begins with a practical question.
                What type of ground power does the operation need? What should a test
                system help verify? Which airfield lighting options should be compared?
                Understanding the application makes it easier to identify the right
                questions before reviewing a specification or requesting a quote.
              </p>
              <p data-animate>
                This section brings together topics for engineering, maintenance and
                procurement teams working across aviation and aerospace. Browse the areas
                below to get familiar with equipment categories, common terminology and
                the information worth preparing for a technical discussion.
              </p>
              <p data-animate>
                Use the <Link href="/products">Jetsys product catalogue</Link> when you
                need details about a particular model or configuration. If your requirement
                depends on an aircraft interface, test profile or operating environment,
                include that context when <Link href="/contact-us">contacting the team</Link>.
              </p>
            </div>
          </div>
        </section>

        <section id="resource-topics" className={styles.topicSection} aria-labelledby="topics-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead} data-animate>
              <div>
                <p className={styles.eyebrow}>Browse the library</p>
                <h2 id="topics-title" className={styles.sectionTitle}>Explore Resource Topics</h2>
                <p className={styles.sectionIntro}>
                  Browse by equipment, application or technical subject.
                </p>
              </div>
              <p className={styles.countPill}>
                {topics.length} topic areas · {articleCount} articles
              </p>
            </div>
            <ul className={styles.topicGrid}>
              {topics.map(({ title, description, subjects, image, cover }, index) => (
                <li key={title} className={styles.topicCard} data-animate>
                  <div className={styles.topicMedia}>
                    <span className={styles.cardIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 950px) calc((100vw - 64px) / 2), (max-width: 1168px) calc((100vw - 80px) / 3), 363px"
                      className={cover ? styles.topicImageCover : styles.topicImage}
                    />
                  </div>
                  <div className={styles.topicCopy}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul className={styles.subjects} aria-label={`${title} topics`}>
                      {subjects.map((subject) =>
                        typeof subject === "string" ? (
                          <li key={subject}>{subject}</li>
                        ) : (
                          <li key={subject.label} className={styles.linkedSubject}>
                            <Link href={subject.href} className={styles.subjectLink}>
                              {subject.label}
                              <ArrowRight size={14} aria-hidden="true" />
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div className={`${styles.shell} ${styles.faqLayout}`}>
            <div className={styles.editorialHead} data-animate>
              <p className={styles.eyebrow}>Good to know</p>
              <h2 id="faq-title" className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map(({ question, answer }) => (
                <details key={question} name="resources-faq" className={styles.faqItem} data-animate>
                  <summary>
                    {question}
                    <ChevronDown className={styles.faqChevron} size={26} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.resourceCta} aria-labelledby="resource-cta-title">
          <div className={`${styles.shell} ${styles.ctaInner}`} data-animate>
            <div>
              <h2 id="resource-cta-title">Have a requirement to discuss?</h2>
              <p>
                Share the application, aircraft or equipment interface and operating
                environment, and the Jetsys team will take it from there.
              </p>
            </div>
            <Link className={styles.contactLink} href="/contact-us">
              Contact the team <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
