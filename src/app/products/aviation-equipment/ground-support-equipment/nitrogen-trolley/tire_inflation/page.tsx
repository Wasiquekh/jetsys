import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aviation Tire Inflation Equipment | Jetsys Defence Tyre Inflator Systems",
  description: "Jetsys Defence aviation tire inflation systems deliver precise pressure control, durable design, and portable tyre inflator solutions for aircraft maintenance and ground support operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/nitrogen-trolley/tire_inflation",
  },
  openGraph: {
    title: "Aviation Tire Inflation Equipment | Jetsys Defence Tyre Inflator Systems",
    description: "Jetsys Defence aviation tire inflation systems deliver precise pressure control, durable design, and portable tyre inflator solutions for aircraft maintenance and ground support operations.",
    url: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/nitrogen-trolley/tire_inflation",
    siteName: "Jetsys Defence",
    images: [
      {
        url: "https://www.jetsys.co.in/images/aviation-tire-inflator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jetsys Defence Aviation Tire Inflation System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviation Tire Inflation Equipment | Jetsys Defence",
    description: "Jetsys Defence aviation tire inflation systems deliver precise pressure control, durable design, and portable tyre inflator solutions for aircraft maintenance.",
    images: ["https://www.jetsys.co.in/images/aviation-tire-inflator-twitter.jpg"],
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
              Aviation Tire Inflation Equipment – Jetsys Defence
            </h1>
            
            <p className="font-medium text-base">
              Maintaining the correct tire inflation level is critical in aviation safety, 
              aircraft performance, and landing reliability. Jetsys Defence provides advanced 
              aviation tyre inflator and automatic tyre inflator systems designed for precision, 
              durability, and operational efficiency.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Our aviation inflator tyre systems ensure accurate pressure management for aircraft 
              wheels, helping maintenance teams maintain optimal aircraft performance. Built with 
              robust materials and precision gauges, Jetsys Defence solutions serve both defense 
              and commercial aviation ground support teams.
            </p>
            
            <br />    
            <Image
              src="/images/tire_infliation.png"
              width={500}
              height={1000}
              alt="Jetsys Defence Aviation Tire Inflation System"
              className="m-auto mb-6"
            />
            
            <OrderNowContactButton />
            <br />
  <p className="font-medium text-base">
              These systems function as high-performance automotive air pump and auto air pump 
              technologies adapted for aviation environments, ensuring reliability in demanding 
              conditions.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Why Tire Inflation Matters in Aviation
            </h2>
            
            <p className="font-medium text-base">
              Proper tire inflation is essential for aircraft safety and operational efficiency. 
              Incorrect pressure can cause uneven wear, reduced landing performance, and increased 
              maintenance costs.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Jetsys Defence aviation car tyre pressure inflator technology adapted for aircraft ensures:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Accurate pressure control for aircraft tires</li>
              <li>Improved aircraft landing stability</li>
              <li>Reduced tire wear and maintenance downtime</li>
              <li>Safe and efficient ground support operations</li>
              <li>Faster maintenance turnaround for aviation crews</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              Our auto tyre inflator and portable tyre inflator solutions allow technicians to manage 
              aircraft tire pressure quickly and accurately during routine inspections.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Advanced Tyre Inflator Technology for Aviation
            </h2>
            
            <p className="font-medium text-base">
              Jetsys Defence aviation tyre inflator for car style portable systems are engineered to 
              deliver aviation-grade reliability. These automatic tyre inflator systems combine pressure 
              monitoring, durable hoses, and precision regulators to ensure controlled inflation.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Precision Pressure Control
            </h3>
            <p className="font-medium text-base">
              The system maintains accurate tire inflation levels required for aircraft operations.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Portable and Compact Design
            </h3>
            <p className="font-medium text-base">
              Our portable tyre inflator units allow technicians to easily transport equipment across 
              hangars and runways.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Heavy-Duty Aviation Construction
            </h3>
            <p className="font-medium text-base">
              Jetsys Defence automotive air pump components are designed to withstand harsh operational 
              environments.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Fast Inflation Capability
            </h3>
            <p className="font-medium text-base">
              High-efficiency auto air pump mechanisms enable rapid tire servicing without compromising 
              safety.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Key Features of Jetsys Defence Tire Inflation Equipment
            </h2>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Aviation-grade tyre inflator</li>
              <li>Durable industrial auto tyre inflator</li>
              <li>High-accuracy pressure gauge</li>
              <li>Compact portable tyre inflator design</li>
              <li>Efficient automotive air pump mechanism</li>
              <li>Reliable inflator tyre hose assembly</li>
              <li>User-friendly car tyre pressure inflator controls</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These features make Jetsys Defence equipment suitable for aircraft ground maintenance, 
              defense operations, and aviation service facilities.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Aviation Tire Inflator Specifications
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
                  <tr><td className="px-4 py-2 border-b">Product Type</td><td className="px-4 py-2 border-b">Aviation Tire Inflation System</td></tr>
                  <tr><td className="px-4 py-2 border-b">Brand</td><td className="px-4 py-2 border-b">Jetsys Defence</td></tr>
                  <tr><td className="px-4 py-2 border-b">Inflator Type</td><td className="px-4 py-2 border-b">Automatic Tyre Inflator</td></tr>
                  <tr><td className="px-4 py-2 border-b">Pump Type</td><td className="px-4 py-2 border-b">Automotive Air Pump</td></tr>
                  <tr><td className="px-4 py-2 border-b">Portability</td><td className="px-4 py-2 border-b">Portable Tyre Inflator Design</td></tr>
                  <tr><td className="px-4 py-2 border-b">Pressure Control</td><td className="px-4 py-2 border-b">Precision Tire Inflation Regulation</td></tr>
                  <tr><td className="px-4 py-2 border-b">Application</td><td className="px-4 py-2 border-b">Aircraft Ground Maintenance</td></tr>
                  <tr><td className="px-4 py-2 border-b">Build Quality</td><td className="px-4 py-2 border-b">Heavy-Duty Industrial Construction</td></tr>
                </tbody>
              </table>
            </div>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Applications of Aviation Tire Inflators
            </h2>
            
            <p className="font-medium text-base">
              Jetsys Defence inflator systems are used in multiple aviation environments:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Aircraft ground support equipment</li>
              <li>Military aviation maintenance</li>
              <li>Commercial airline maintenance operations</li>
              <li>Airport service facilities</li>
              <li>Aircraft tire servicing workshops</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              The flexibility of our tyre inflator, auto air pump, and inflator tyre technology ensures 
              compatibility with various aircraft tire servicing requirements.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Why Choose Jetsys Defence
            </h2>
            
            <p className="font-medium text-base">
              Jetsys Defence is committed to delivering high-performance aviation equipment engineered 
              for safety, reliability, and precision.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Our aviation tire inflation systems combine advanced engineering with durable materials to 
              support aircraft ground operations worldwide. Whether you require a portable tyre inflator, 
              automatic tyre inflator, or high-capacity automotive air pump, Jetsys Defence provides 
              trusted solutions for aviation professionals.
            </p>
            
            <br />
            <br />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Indigenous Design & Manufacturing Excellence
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence prides itself on developing and manufacturing aviation equipment that 
                  meets the highest standards of innovation and quality. Our in-house design and production 
                  capabilities ensure tailored solutions for every customer.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Trusted by Defence and Commercial Aviation Sectors
                </h3>
                <p className="font-medium text-base">
                  We have built a strong reputation for providing reliable and high-performance aviation 
                  equipment, trusted by both defense organizations and commercial aviation operators around 
                  the world.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  On-site Service and Support Availability
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence offers comprehensive on-site service and support, ensuring that your 
                  equipment operates at peak efficiency. Our team of experts is always available to assist 
                  with installation, maintenance, and troubleshooting.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  ISO-certified Production Standards
                </h3>
                <p className="font-medium text-base">
                  Our manufacturing process adheres to ISO-certified standards, guaranteeing that each 
                  product is produced with the utmost precision and reliability, and meets all relevant 
                  international quality benchmarks.
                </p>
              </div>
            </div>
            
            <br />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;