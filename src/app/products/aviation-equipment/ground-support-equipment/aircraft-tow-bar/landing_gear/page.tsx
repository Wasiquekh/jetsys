import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Landing Gear Systems for Aircraft | Jetsys Defence Aviation Solutions",
  description: "Jetsys Defence provides high-performance landing gear solutions including retractable landing gear, aircraft nose gear, airplane undercarriage, and A380 landing gear systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/aircraft-systems/landing-gear-solutions",
  },
  openGraph: {
    title: "Landing Gear Systems for Aircraft | Jetsys Defence Aviation Solutions",
    description: "Jetsys Defence provides high-performance landing gear solutions including retractable landing gear, aircraft nose gear, airplane undercarriage, and A380 landing gear systems.",
    url: "https://www.jetsys.co.in/products/aviation-equipment/aircraft-systems/landing-gear-solutions",
    siteName: "Jetsys Defence",
    images: [
      {
        url: "https://www.jetsys.co.in/images/landing-gear-systems-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jetsys Defence Landing Gear Systems for Aircraft",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Gear Systems for Aircraft | Jetsys Defence",
    description: "Jetsys Defence provides high-performance landing gear solutions including retractable landing gear, aircraft nose gear, and airplane undercarriage systems.",
    images: ["https://www.jetsys.co.in/images/landing-gear-systems-twitter.jpg"],
    creator: "@jetsysdefence",
    site: "@jetsysdefence",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container max-w-7xl mx-auto px-1 py-2">
            <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
              Landing Gear Systems for Aircraft – Jetsys Defence
            </h1>
            
            <p className="font-medium text-base">
              The landing gear is a critical component of any aircraft, ensuring safe takeoff, landing, and ground 
              maneuvering. Jetsys Defence specializes in advanced landing gear solutions designed for performance, 
              reliability, and durability in all aviation conditions.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Our systems include aircraft landing gear, retractable landing gear, aircraft nose gear, and airplane 
              undercarriage solutions engineered for commercial, military, and specialized aircraft. From A380 
              landing gear systems to conventional landing gear, Jetsys Defence ensures that every landing gear 
              assembly meets the highest safety and operational standards.
            </p>
            
            <br />
            
            <Image
              src="/images/ChatGPT Image Mar 11, 2026, 03_41_17 PM.png"
              width={500}
              height={1000}
              alt="Jetsys Defence Landing Gear Systems for Aircraft"
              className="m-auto mb-6"
            />
            
            <OrderNowContactButton />
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Types of Landing Gear Systems
            </h2>
            
            <p className="font-medium text-base">
              Landing gear systems vary depending on the aircraft type and mission requirements. Jetsys Defence 
              manufactures a wide range of landing gear on plane solutions to support different aircraft 
              configurations.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Conventional Landing Gear
            </h3>
            <p className="font-medium text-base">
              Conventional landing gear features a tailwheel configuration and is widely used in smaller or 
              historic aircraft. This gear system provides reliable performance while maintaining simple 
              mechanical design.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Tricycle Landing Gear
            </h3>
            <p className="font-medium text-base">
              Tricycle landing gear includes a nose gear and two main gears, offering greater stability during 
              taxi, takeoff, and landing. Jetsys Defence develops durable aircraft nose gear and airplane nose 
              gear for tricycle landing systems.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Tandem Landing Gear
            </h3>
            <p className="font-medium text-base">
              Tandem landing gear is used in specialized aircraft to evenly distribute weight across the fuselage. 
              Our tandem landing gear solutions ensure structural integrity and smooth operation in heavy aircraft.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Retractable Landing Gear
            </h3>
            <p className="font-medium text-base">
              Retractable landing gear systems improve aerodynamic efficiency by folding into the aircraft body 
              during flight. Jetsys Defence provides advanced retract gear and retractable undercarriage solutions 
              for modern airplanes.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Aircraft Nose Gear and UnderCarriage Solutions
            </h2>
            
            <p className="font-medium text-base">
              The aircraft nose gear plays a vital role in steering and braking during ground operations. 
              Jetsys Defence designs high-strength aircraft undercarriage and airplane undercarriage systems that 
              ensure safe taxiing and takeoff performance.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Key Features
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Durable materials for long-term reliability</li>
              <li>Precision-engineered aircraft nose gear for stability</li>
              <li>Advanced shock absorption systems for smooth landings</li>
              <li>Compatible with a wide range of gear plane and flight landing gear configurations</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              Our aeroplane landing gear and aircrafts landing gear solutions meet strict aviation safety standards, 
              enhancing aircraft operational efficiency.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Specialized Landing Gear Systems
            </h2>
            
            <p className="font-medium text-base">
              Jetsys Defence also develops landing gear of a plane for large commercial aircraft, military jets, 
              and specialized aviation platforms.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Examples of Specialized Systems
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>A380 landing gear for heavy commercial aircraft</li>
              <li>Flight landing gear for high-performance jets</li>
              <li>Gear landing systems optimized for varied aircraft types</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These systems are engineered for durability, reliability, and smooth operation under all flight 
              conditions.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Landing Gear Systems Specifications
            </h2>
            
            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Feature</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-4 py-2 border-b">Product Type</td><td className="px-4 py-2 border-b">Landing Gear Systems</td></tr>
                  <tr><td className="px-4 py-2 border-b">Brand</td><td className="px-4 py-2 border-b">Jetsys Defence</td></tr>
                  <tr><td className="px-4 py-2 border-b">Landing Gear Types</td><td className="px-4 py-2 border-b">Conventional, Tricycle, Tandem, Retractable</td></tr>
                  <tr><td className="px-4 py-2 border-b">Aircraft Compatibility</td><td className="px-4 py-2 border-b">Commercial, Military, Specialized Aircraft</td></tr>
                  <tr><td className="px-4 py-2 border-b">Key Components</td><td className="px-4 py-2 border-b">Nose Gear, Main Gear, Shock Absorption Systems</td></tr>
                  <tr><td className="px-4 py-2 border-b">Specialized Systems</td><td className="px-4 py-2 border-b">A380 Landing Gear, High-Performance Jet Systems</td></tr>
                  <tr><td className="px-4 py-2 border-b">Safety Standards</td><td className="px-4 py-2 border-b">Aviation Grade, Strict Safety Compliance</td></tr>
                  <tr><td className="px-4 py-2 border-b">Build Quality</td><td className="px-4 py-2 border-b">Precision-Engineered, High-Strength Materials</td></tr>
                </tbody>
              </table>
            </div>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Benefits of Jetsys Defence Landing Gear Solutions
            </h2>
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Safety and Reliability
            </h3>
            <p className="font-medium text-base">
              Every landing gear system is manufactured to meet rigorous aviation safety standards, providing 
              peace of mind during takeoff, flight, and landing.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Durability and Performance
            </h3>
            <p className="font-medium text-base">
              Our aircraft undercarriage and airplane gear solutions are built to withstand repeated landings, 
              harsh weather conditions, and heavy operational loads.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Advanced Engineering
            </h3>
            <p className="font-medium text-base">
              Jetsys Defence combines precision engineering with high-quality materials to produce retractable 
              landing gear, conventional landing gear, and tandem landing gear systems suitable for all aircraft 
              types.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Why Choose Jetsys Defence for Landing Gear
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Indigenous Design & Manufacturing Excellence
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence prides itself on developing and manufacturing landing gear systems that meet 
                  the highest standards of aviation innovation and quality. Our in-house design and production 
                  capabilities ensure tailored solutions for every aircraft requirement.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Trusted by Commercial and Military Aviation
                </h3>
                <p className="font-medium text-base">
                  We have built a strong reputation for providing reliable and high-performance landing gear 
                  solutions, trusted by commercial airlines and military aviation organizations around the world.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  On-site Service and Support Availability
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence offers comprehensive on-site service and support, ensuring that your landing 
                  gear systems operate at peak efficiency. Our team of experts is always available to assist 
                  with installation, maintenance, and troubleshooting.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  ISO-certified Production Standards
                </h3>
                <p className="font-medium text-base">
                  Our manufacturing process adheres to ISO-certified standards, guaranteeing that each landing 
                  gear system is produced with the utmost precision and reliability, and meets all relevant 
                  international aviation quality benchmarks.
                </p>
              </div>
            </div>
            
            <br />
            
            <p className="font-medium text-base">
              Jetsys Defence provides advanced landing gear systems designed to meet the demands of modern 
              aviation. Our expertise covers aircraft nose gear, tricycle landing gear, retractable undercarriage, 
              and A380 landing gear, ensuring operational efficiency, safety, and performance for commercial and 
              military aircraft.
            </p>
            
            <br />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;