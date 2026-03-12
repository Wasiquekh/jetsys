import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Defence Vehicle Solutions for Military Operations | Jetsys Defence",
  description: "Jetsys Defence manufactures advanced defence vehicle systems including military vehicles, armored defence vehicles, tactical support vehicles, and specialized combat transport solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/nato-cable/defence_vehicle",
  },
  openGraph: {
    title: "Defence Vehicle Solutions for Military Operations | Jetsys Defence",
    description: "Jetsys Defence manufactures advanced defence vehicle systems including military vehicles, armored defence vehicles, tactical support vehicles, and specialized combat transport solutions.",
    url: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/nato-cable/defence_vehicle",
    siteName: "Jetsys Defence",
    images: [
      {
        url: "https://www.jetsys.co.in/images/defence-vehicle-solutions-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jetsys Defence Vehicle Solutions for Military Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Defence Vehicle Solutions for Military Operations | Jetsys Defence",
    description: "Jetsys Defence manufactures advanced defence vehicle systems including military vehicles, armored defence vehicles, and tactical support vehicles.",
    images: ["https://www.jetsys.co.in/images/defence-vehicle-solutions-twitter.jpg"],
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
              Defence Vehicle Solutions for Military and Tactical Operations – Jetsys Defence
            </h1>
            
            <p className="font-medium text-base">
              A Defence vehicle plays a crucial role in modern military operations by providing secure 
              transportation, mobility, and protection in demanding environments. Jetsys Defence specializes in 
              developing high-performance defence vehicle solutions engineered for durability, reliability, and 
              operational efficiency.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Our defence vehicle systems support military logistics, tactical transport, and operational 
              mobility. From armored defence vehicles to military support vehicles, our designs focus on 
              strength, safety, and adaptability for various defence applications.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Jetsys Defence combines advanced engineering and high-quality materials to manufacture modern 
              defence vehicles capable of operating in challenging terrains and operational conditions.
            </p>
            
            <br />
            
            <Image
              src="/images/jetsys defence.png"
              width={500}
              height={1000}
              alt="Jetsys Defence Vehicle Solutions for Military Operations"
              className="m-auto mb-6"
            />
            
            <OrderNowContactButton />
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Advanced Defence Vehicle Engineering
            </h2>
            
            <p className="font-medium text-base">
              At Jetsys Defence, every defence vehicle is designed with precision engineering to ensure 
              operational readiness and long-term reliability. Our vehicles are developed to support a wide 
              range of defence and security missions.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Key Features of Our Defence Vehicles
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Durable military vehicle platforms designed for demanding environments</li>
              <li>Reinforced armored defence vehicles for enhanced protection</li>
              <li>Reliable tactical defence vehicles for mission mobility</li>
              <li>High-performance military transport vehicles for equipment and personnel</li>
              <li>Rugged off-road defence vehicles capable of operating in harsh terrains</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These advanced design features ensure that every defence vehicle delivers dependable performance 
              during critical operations.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Military Transport and Tactical Support Vehicles
            </h2>
            
            <p className="font-medium text-base">
              A defence vehicle is essential for transporting personnel, equipment, and mission-critical 
              resources in military operations. Jetsys Defence manufactures specialized military transport 
              vehicles designed to support modern defence logistics.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Applications of Defence Vehicles
            </h3>
            
            <p className="font-medium text-base">
              Our defence vehicle systems are widely used for:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Tactical troop transportation</li>
              <li>Military logistics and cargo movement</li>
              <li>Equipment transport and deployment</li>
              <li>Field support operations</li>
              <li>Strategic mobility for defence missions</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These tactical defence vehicles provide safe and efficient mobility while supporting mission 
              effectiveness.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Armored Defence Vehicles for Enhanced Protection
            </h2>
            
            <p className="font-medium text-base">
              Armored defence vehicles are designed to provide additional protection for personnel and equipment 
              during military operations. Jetsys Defence develops advanced armored military vehicles engineered 
              for security and durability.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Benefits of Armored Defence Vehicles
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Reinforced structural protection</li>
              <li>Secure military combat vehicle design</li>
              <li>Increased operational safety for personnel</li>
              <li>Enhanced durability in hostile environments</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These armored defence vehicles are built to support mission-critical operations where safety and 
              reliability are essential.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Off-Road Defence Vehicle Performance
            </h2>
            
            <p className="font-medium text-base">
              Military missions often require vehicles capable of operating in rough and unpredictable terrain. 
              Jetsys Defence manufactures off-road defence vehicles designed to maintain performance in difficult 
              conditions.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Capabilities of Off-Road Defence Vehicles
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>High mobility in rugged terrain</li>
              <li>Strong suspension systems for stability</li>
              <li>Durable chassis construction</li>
              <li>Reliable tactical military vehicles for field operations</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These defence vehicles are designed to support mobility across deserts, mountainous areas, and 
              remote operational zones.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Defence Vehicle Solutions for Modern Military Operations
            </h2>
            
            <p className="font-medium text-base">
              Modern defence forces require versatile vehicles that support multiple operational roles. 
              Jetsys Defence designs defence vehicle solutions that combine strength, technology, and 
              operational flexibility.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Types of Defence Vehicles
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Tactical military vehicles</li>
              <li>Armored defence vehicles</li>
              <li>Military transport vehicles</li>
              <li>Combat support vehicles</li>
              <li>Field logistics vehicles</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              Each defence vehicle is engineered to support mission-critical operations with reliability and 
              durability.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Defence Vehicle Specifications
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
                  <tr><td className="px-4 py-2 border-b">Product Type</td><td className="px-4 py-2 border-b">Defence Vehicle Systems</td></tr>
                  <tr><td className="px-4 py-2 border-b">Brand</td><td className="px-4 py-2 border-b">Jetsys Defence</td></tr>
                  <tr><td className="px-4 py-2 border-b">Vehicle Categories</td><td className="px-4 py-2 border-b">Armored, Tactical, Transport, Off-Road, Support</td></tr>
                  <tr><td className="px-4 py-2 border-b">Protection Level</td><td className="px-4 py-2 border-b">Reinforced Armor, Ballistic Protection Available</td></tr>
                  <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">High Mobility, All-Terrain Capability</td></tr>
                  <tr><td className="px-4 py-2 border-b">Applications</td><td className="px-4 py-2 border-b">Military Transport, Tactical Operations, Logistics</td></tr>
                  <tr><td className="px-4 py-2 border-b">Build Quality</td><td className="px-4 py-2 border-b">Heavy-Duty Military Grade Construction</td></tr>
                  <tr><td className="px-4 py-2 border-b">Operational Environment</td><td className="px-4 py-2 border-b">Desert, Mountain, Urban, Remote Areas</td></tr>
                </tbody>
              </table>
            </div>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Why Choose Jetsys Defence for Defence Vehicles
            </h2>
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Advanced Engineering
            </h3>
            <p className="font-medium text-base">
              Our defence vehicles are developed using precision engineering and high-quality manufacturing 
              processes.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Reliable Military Performance
            </h3>
            <p className="font-medium text-base">
              Every military vehicle is built to perform in demanding operational environments.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Durable Construction
            </h3>
            <p className="font-medium text-base">
              Our armored defence vehicles use strong structural materials designed for long-term durability.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Mission-Ready Solutions
            </h3>
            <p className="font-medium text-base">
              Jetsys Defence provides tactical defence vehicle solutions that meet the evolving needs of 
              defence and security forces.
            </p>
            
            <br />
            <br />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Indigenous Design & Manufacturing Excellence
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence prides itself on developing and manufacturing defence vehicle systems that 
                  meet the highest standards of innovation and quality. Our in-house design and production 
                  capabilities ensure tailored solutions for every defence requirement.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Trusted by Defence Organizations
                </h3>
                <p className="font-medium text-base">
                  We have built a strong reputation for providing reliable and high-performance defence 
                  vehicles, trusted by military organizations and security forces around the world.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  On-site Service and Support Availability
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence offers comprehensive on-site service and support, ensuring that your defence 
                  vehicle systems operate at peak efficiency. Our team of experts is always available to assist 
                  with maintenance, repairs, and operational support.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  ISO-certified Production Standards
                </h3>
                <p className="font-medium text-base">
                  Our manufacturing process adheres to ISO-certified standards, guaranteeing that each defence 
                  vehicle is produced with the utmost precision and reliability, and meets all relevant military 
                  quality benchmarks.
                </p>
              </div>
            </div>
            
            <br />
            
            <p className="font-medium text-base">
              A reliable defence vehicle is essential for ensuring mobility, protection, and operational success 
              in military environments. Jetsys Defence manufactures advanced defence vehicle solutions, including 
              armored military vehicles, tactical defence vehicles, and military transport vehicles designed for 
              modern defence operations.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              With a focus on strength, reliability, and performance, Jetsys Defence continues to develop defence 
              vehicles that support mission readiness and operational efficiency in challenging environments.
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