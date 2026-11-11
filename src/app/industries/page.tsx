import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import styles from "../hubs.module.css";

const sectors = [
  {
    title: "Civil Aviation & MRO",
    image: "/images/Aircraft ROH.png",
    description: "Ground power units and ground test equipment support commercial aircraft servicing, maintenance and repair.",
  },
  {
    title: "Defence Aviation",
    image: "/images/Aviation Equipment.png",
    description: "Jetsys supplies ground support equipment, aircraft test rigs and spares for military aircraft maintenance.",
  },
  {
    title: "Airports & Airfields",
    image: "/images/Runway Spares.png",
    description: "Runway and taxiway lighting, guidance signs and replacement components support airfield operations and maintenance.",
  },
  {
    title: "Space & Satellite Testing",
    image: "/images/Thermal Vacuum Chamber.png",
    description: "Jetsys designs and manufactures thermal vacuum chambers for environmental testing of satellite subsystems, payloads and electronics.",
    contain: true,
  },
  {
    title: "Aerospace Manufacturing",
    image: "/images/Airborne Raw Materials.png",
    description: "Jetsys supplies aerospace-grade steels, precision fasteners and adhesives for aerospace fabrication and assembly.",
  },
];

export const metadata: Metadata = {
  title: "Industries We Serve | Jetsys Defence",
  description: "Explore how Jetsys Defence supports civil and military aviation, airfields, satellite testing and aerospace manufacturing.",
  alternates: { canonical: "https://www.jetsys.co.in/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <StickyHeader />
      <main className={styles.industries}>
        <section className={styles.industryHero} aria-labelledby="industries-title">
          <Image
            src="/images/poster.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.industryHeroImage}
          />
          <div className={`${styles.shell} ${styles.industryIntro}`}>
            <div className={styles.enter}>
              <p className={styles.eyebrow}>Aviation, airfields & space</p>
              <h1 id="industries-title" className={`horizon ${styles.title}`}>Industries</h1>
              <p className={styles.intro}>
                Jetsys Defence supplies equipment and materials for aircraft maintenance,
                airfield operations, satellite testing and aerospace manufacturing.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.sectorSection}`} aria-labelledby="sectors-title">
          <h2 id="sectors-title" className={styles.sectionTitle}>Sectors we serve</h2>
          <ul className={styles.sectorGrid}>
            {sectors.map(({ title, image, description, contain }) => (
              <li key={title} className={styles.sectorCard}>
                <div className={styles.sectorMedia}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1168px) 49vw, 600px"
                    className={contain ? styles.sectorImageContain : styles.sectorImage}
                  />
                </div>
                <div className={styles.sectorCopy}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.industryContact}>
            <h2>Have a project in mind?</h2>
            <Link href="/contact-us" className={styles.contactLink}>
              Contact Jetsys <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
