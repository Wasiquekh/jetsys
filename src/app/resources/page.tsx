import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import styles from "../hubs.module.css";
import ResourceTopicGrid from "./ResourceTopicGrid";

const topics = [
  {
    title: "Aircraft Ground Power",
    description: "Explore the choices behind aircraft ground power, including power formats, equipment mobility and how units are powered. Use these topics to prepare questions about aircraft compatibility and operating needs.",
    subjects: ["28 V DC vs 400 Hz", "Diesel vs electric GPUs", "Fixed vs mobile ground power"],
    image: "/images/H1 Ground Power Unit for Aircraft Maintenance.png",
  },
  {
    title: "Air Data & Pitot-Static Testing",
    description: "Understand where pitot-static testing and air data test set calibration fit into aircraft maintenance discussions. Get familiar with the equipment and documentation to ask about when defining a test requirement.",
    subjects: ["Pitot-static testing", "Air data test sets", "Calibration"],
    image: "/images/Pitot Static Test Equipment.png",
  },
  {
    title: "Thermal Vacuum & Space Testing",
    description: "Explore the purpose of thermal vacuum testing and the decisions involved in selecting a chamber for a space test programme. Start with the hardware being tested and the conditions the test needs to represent.",
    subjects: ["TVAC testing", "Chamber design", "Space hardware testing"],
    image: "/images/Thermal Vacuum Chamber.png",
  },
  {
    title: "Airfield Lighting & Signage",
    description: "Get familiar with the lighting and signs used across airfields. Compare equipment by its location, intended purpose and installation requirements.",
    subjects: ["Airfield signs", "LED vs halogen", "Inset vs elevated lights"],
    image: "/images/airfield-lighting-system.png",
  },
  {
    title: "Aerospace Wiring & Manufacturing",
    description: "Learn what to discuss when specifying aircraft wire harnesses, from drawings and interfaces to inspection, testing and traceability documentation.",
    subjects: ["Wire harness manufacturing", "Inspection and testing", "Traceability"],
    image: "/images/aircraft-wiring-harness.png",
  },
  {
    title: "Aircraft Ground Support",
    description: "Explore equipment used for aircraft movement, servicing and engine starting. Identify the aircraft interface and operational requirements before comparing equipment options.",
    subjects: ["Aircraft tow bars", "Nitrogen servicing", "Engine starting equipment"],
    image: "/images/Aircraft Tow Bar.png",
  },
  {
    title: "Avionics & Fuel Testing",
    description: "Browse aircraft test equipment topics for avionics and fuel systems. Understand how measurement needs, equipment interfaces and reporting requirements shape an enquiry.",
    subjects: ["Avionics test equipment", "Aviation fuel testing", "Test benches"],
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
          <div className={`${styles.shell} ${styles.resourceHeroInner}`}>
            <h1 id="resources-title" className={`horizon ${styles.resourceTitle}`}>
              Aviation &amp; Aerospace Resources
            </h1>
            <p className={styles.resourceLede}>
              Explore aircraft ground power, testing equipment, airfield systems and
              aerospace manufacturing. Get familiar with the terminology, understand
              what to compare, and prepare clearer technical enquiries.
            </p>
            <a className={styles.topicLink} href="#resource-topics">
              Explore Resource Topics <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className={styles.resourceEditorial} aria-labelledby="resource-intro-title">
          <div className={`${styles.shell} ${styles.editorialLayout}`}>
            <h2 id="resource-intro-title" className={styles.sectionTitle}>
              Understand the equipment behind the operation
            </h2>
            <div className={styles.editorialCopy}>
              <p>
                An equipment requirement usually begins with a practical question.
                What type of ground power does the operation need? What should a test
                system help verify? Which airfield lighting options should be compared?
                Understanding the application makes it easier to identify the right
                questions before reviewing a specification or requesting a quote.
              </p>
              <p>
                This section brings together topics for engineering, maintenance and
                procurement teams working across aviation and aerospace. Browse the areas
                below to get familiar with equipment categories, common terminology and
                the information worth preparing for a technical discussion.
              </p>
              <p>
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
            <h2 id="topics-title" className={styles.sectionTitle}>Explore Resource Topics</h2>
            <p className={styles.topicIntro}>Browse by equipment, application or technical subject.</p>
            <ResourceTopicGrid>
              {topics.map(({ title, description, subjects, image, cover }) => (
                <li key={title} className={styles.topicCard}>
                  <div className={styles.topicMedia}>
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
                      {subjects.map((subject) => <li key={subject}>{subject}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ResourceTopicGrid>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div className={`${styles.shell} ${styles.faqLayout}`}>
            <h2 id="faq-title" className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map(({ question, answer }) => (
                <details key={question} name="resources-faq" className={styles.faqItem}>
                  <summary>
                    {question}
                    <ChevronDown className={styles.faqChevron} size={20} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
