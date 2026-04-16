import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aviation Ground Support Jack | Aircraft Lifting System Jetsys Defence",
  description:
    "High-quality aviation ground support jack for aircraft maintenance. Durable hydraulic aircraft jack systems by Jetsys Defence for safe lifting operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/nose-jack/aviation-ground-support-lack",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              {/* H1 */}
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Aviation Ground Support Jack – High Capacity Aircraft Lifting Systems | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aviation Ground Support Jack by Jetsys Defence is a high-performance lifting solution designed for safe and efficient aircraft maintenance operations. Built for precision and durability, our aircraft ground support jack systems ensure reliable lifting of aircraft for inspection, servicing, and repair.
              </p>
              <br /><br />

              <div>
                <Image
                  src="/images/Aviation Ground Support Jack.png"
                  width={500}
                  height={1000}
                  alt="Aviation Ground Support Jack by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
              <br /><br />

              {/* H2: Company Product by Jetsys Defence */}
              <p className="font-medium text-base">
                Jetsys Defence is a trusted aviation ground support jack manufacturer delivering advanced aircraft lifting jack systems for aviation, aerospace, and defence sectors. Our aviation jack equipment is engineered to meet demanding operational requirements with maximum safety and performance.
              </p>
              <br /><br />

              {/* H2: Product Overview */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
              <p className="font-medium text-base">
                The aviation ground support jack is a critical part of aircraft ground support equipment jack systems used for lifting aircraft during maintenance and inspection. Our ground support lifting jack solutions are designed for stability, precision, and ease of operation.
              </p>
              <br /><br />

              {/* H2: What is Aviation Ground Support Jack? */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Aviation Ground Support Jack?</h2>
              <p className="font-medium text-base">
                An aviation ground support jack is a mechanical or hydraulic device used to lift aircraft safely for maintenance tasks such as landing gear inspection, tyre replacement, and structural servicing.
              </p>
              <p className="font-medium text-base mt-2">This aircraft jack system ensures:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Safe lifting of aircraft</li>
                <li>Stable support during maintenance</li>
                <li>Controlled operation for precision handling</li>
              </ul>
              <br /><br />

              {/* H2: Key Features */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aviation Ground Support Jack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="text-black space-y-4">
                  <ul className="list-disc pl-5">
                    <li><strong className="text-[#5C5649]">High Load Capacity</strong> – Designed for heavy aircraft lifting, suitable for defence aircraft jack and commercial aviation.</li>
                    <li><strong className="text-[#5C5649]">Hydraulic & Mechanical Options</strong> – Available in hydraulic aircraft jack and screw jack aircraft variants with smooth and controlled lifting operations.</li>
                    <li><strong className="text-[#5C5649]">Stability & Safety</strong> – Wide base and locking mechanisms ensure safe aircraft handling.</li>
                  </ul>
                </div>
                <div className="text-black space-y-4">
                  <ul className="list-disc pl-5">
                    <li><strong className="text-[#5C5649]">Precision Lifting System</strong> – Accurate height control for maintenance, ideal for aircraft servicing jack operations.</li>
                    <li><strong className="text-[#5C5649]">Durable Construction</strong> – Built with aerospace-grade materials for long-lasting performance under heavy usage.</li>
                  </ul>
                </div>
              </div>
              <br /><br />

              {/* Technical Specifications Table */}
              <div className="mx-auto">
                <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Aviation Ground Support Jack</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border-b">Capacity</td><td className="px-4 py-2 border-b">As per aircraft requirements</td></tr>
                      <tr><td className="px-4 py-2 border-b">Lift Type</td><td className="px-4 py-2 border-b">Hydraulic / Mechanical</td></tr>
                      <tr><td className="px-4 py-2 border-b">Height Range</td><td className="px-4 py-2 border-b">Adjustable lifting range</td></tr>
                      <tr><td className="px-4 py-2 border-b">Material</td><td className="px-4 py-2 border-b">High-strength steel construction</td></tr>
                      <tr><td className="px-4 py-2 border-b">Safety Features</td><td className="px-4 py-2 border-b">Locking system, overload protection</td></tr>
                      <tr><td className="px-4 py-2 border-b">Application</td><td className="px-4 py-2 border-b">Aircraft lifting system / aviation GSE lifting equipment</td></tr>
                      <tr><td className="px-4 py-2 border-b">Compliance</td><td className="px-4 py-2 border-b">Aviation and defence standards</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br /><br />

              {/* Variants */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aviation Ground Support Jack</h2>
              <ul className="list-disc pl-5">
                <li>Aircraft Nose Jack</li>
                <li>Aircraft Main Jack</li>
                <li>Tripod Aircraft Jack</li>
                <li>Hydraulic Aircraft Jack</li>
                <li>Screw Jack Aircraft</li>
                <li>Custom Aircraft Lifting Jack</li>
              </ul>
              <br /><br />

              {/* Benefits */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aviation Ground Support Jack</h2>
              <ul className="list-disc pl-5">
                <li>Safe and efficient aircraft lifting</li>
                <li>High reliability during maintenance operations</li>
                <li>Reduced risk of accidents</li>
                <li>Easy operation and handling</li>
                <li>Long service life with minimal maintenance</li>
              </ul>
              <br /><br />

              {/* Applications */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aviation Ground Support Jack</h2>
              <ul className="list-disc pl-5">
                <li>Aircraft maintenance and servicing</li>
                <li>Landing gear inspection and repair</li>
                <li>Military aircraft maintenance</li>
                <li>Fighter aircraft maintenance jack operations</li>
                <li>Aviation MRO facilities</li>
                <li>Aerospace ground support operations</li>
              </ul>
              <br /><br />

              {/* Control & Diagnostics */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
              <p className="font-medium text-base">The aircraft maintenance jack system supports safe operation and monitoring:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Pressure control in hydraulic systems</li>
                <li>Load monitoring and safety locking</li>
                <li>Manual and automated control options</li>
                <li>Maintenance-friendly design for inspections</li>
              </ul>
              <br /><br />

              {/* Why Choose Jetsys Defence */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aviation Ground Support Jack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Leading aircraft maintenance jack manufacturer</li>
                  <li>Trusted aviation jack equipment supplier</li>
                  <li>Custom-built solutions for aviation and defence</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>High-quality manufacturing and testing standards</li>
                  <li>Competitive aircraft jack price</li>
                  <li>Reliable support and delivery</li>
                </ul>
              </div>
              <br /><br />

              {/* Order Section */}
              <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Aviation Ground Support Jack System from Jetsys Defence</h2>
              <p className="font-medium text-base">
                Choose Jetsys Defence, your trusted aircraft jack supplier, for high-performance and durable lifting systems.
              </p>
              <p className="font-medium text-base mt-2">We offer:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Custom design and engineering</li>
                <li>Fast production and delivery</li>
                <li>End-to-end technical support</li>
              </ul>
              <p className="font-medium text-base mt-4">
                Contact us today to get your aerospace ground support jack tailored to your aircraft requirements.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;