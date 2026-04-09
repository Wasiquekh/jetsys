import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "28.5V DC Ground Power Unit | Aircraft DC Power Supply System | Jetsys Defence",
  description:
    "Explore 28.5V DC Ground Power Unit by Jetsys Defence – reliable aircraft DC power supply system for aviation, military, and airport operations. High-performance DC GPU aircraft solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/28.5vdc-ground-power-unit",
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
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                28.5V DC Ground Power Unit | Aircraft DC Power Supply System | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-performance 28.5V DC Ground Power Unit, engineered to deliver stable and
                efficient aircraft DC power supply for aviation environments. Designed under our Runway Spares category,
                this advanced DC GPU aircraft system ensures uninterrupted ground operations with precision-engineered
                power delivery. Our aviation DC power unit supports both civil and military aircraft, making Jetsys Defence
                a trusted name among DC GPU aircraft manufacturers.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/28.5vdc-ground-power-unit.png"
                  width={500}
                  height={1000}
                  alt="28.5V DC Ground Power Unit by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Product Overview
                  </h2>
                  <p className="text-black mb-4">
                    The 28.5V DC ground power unit is a reliable external power system used to supply DC power to aircraft
                    during maintenance, inspection, and ground handling. Built with rugged components, this aircraft ground
                    power supply system reduces dependency on onboard power sources and ensures safe, cost-efficient operations.
                  </p>
                  <p className="text-black">
                    This ground power unit 28.5V DC aviation solution is suitable for airport, hangar, and field operations.
                  </p>
                </div>
              </section>

              {/* What is 28.5V DC Ground Power Unit? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is 28.5V DC Ground Power Unit?
                  </h2>
                  <p className="text-black mb-4">
                    A 28.5V DC Ground Power Unit is an external electrical system that provides regulated DC power to aircraft
                    when engines are off. It acts as a primary aircraft DC power supply system for avionics testing,
                    maintenance, and pre-flight checks.
                  </p>
                  <p className="text-black">
                    Widely used in aviation, this DC GPU aircraft system ensures stable voltage output and protects sensitive
                    onboard equipment.
                  </p>
                </div>
              </section>

              {/* Key Features of 28.5V DC Ground Power Unit */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of 28.5V DC Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Stable DC Output</h4>
                          Delivers consistent 28.5V DC ground power unit output with minimal ripple, ensuring protection of
                          aircraft electronics.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged Aviation Design</h4>
                          Engineered for harsh environments, making it ideal as a military aircraft DC ground power unit.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Portable & Mobile Options</h4>
                          Available as a portable DC GPU aircraft unit for flexible deployment across airports and remote airfields.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Efficiency System</h4>
                          Optimized performance reduces energy loss and enhances reliability in airport ground power unit
                          DC operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Safety Protection</h4>
                          Integrated overload, short circuit, and thermal protection for safe aircraft operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Specifications of 28.5V DC Ground Power Unit
                  </h2>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                         </tr>
                      </thead>
                      <tbody>
                        <tr><td className="px-4 py-2 border-b">Output Voltage</td><td className="px-4 py-2 border-b">28.5V DC</td></tr>
                        <tr><td className="px-4 py-2 border-b">Current Capacity</td><td className="px-4 py-2 border-b">Customizable (based on aircraft requirements)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Frequency</td><td className="px-4 py-2 border-b">DC Output (No frequency variation)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled / Forced ventilation</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Fixed / Towable / Portable</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Overvoltage, Short Circuit</td></tr>
                        <tr><td className="px-4 py-2 border-b">Input Supply</td><td className="px-4 py-2 border-b">AC Input compatible</td></tr>
                        <tr><td className="px-4 py-2 border-b">Build</td><td className="px-4 py-2 border-b">Heavy-duty aviation-grade chassis</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of 28.5V DC Ground Power Unit */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Variants of 28.5V DC Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Portable DC GPU Aircraft Units</li>
                        <li>Towable Ground Power Unit 28.5V DC Aviation</li>
                        <li>Fixed Installation Aircraft DC Power Supply System</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Military Aircraft DC Ground Power Unit</li>
                        <li>Airport Ground Power Unit DC Systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Each variant is designed to meet specific aviation operational requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of 28.5V DC Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reduces aircraft fuel consumption during ground operations</li>
                        <li>Extends aircraft battery life</li>
                        <li>Ensures stable aircraft DC power supply system</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Minimizes maintenance downtime</li>
                        <li>Improves operational efficiency in aviation environments</li>
                        <li>Cost-effective solution compared to onboard power usage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of 28.5V DC Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft maintenance and servicing</li>
                        <li>Pre-flight avionics testing</li>
                        <li>Military airbase operations</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport ground handling systems</li>
                        <li>Hangar operations and inspections</li>
                        <li>Remote airfield power support</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This aviation DC power unit is essential for all types of aircraft ground operations.
                  </p>
                </div>
              </section>

              {/* Control & Diagnostics */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Control & Diagnostics
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Digital control panel for voltage and current monitoring</li>
                        <li>Fault detection and alert system</li>
                        <li>Real-time diagnostics for system health</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>User-friendly interface for operators</li>
                        <li>Remote monitoring capabilities (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for 28.5V DC Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Trusted DC GPU aircraft manufacturers</li>
                        <li>High-quality aviation-grade components</li>
                        <li>Customizable solutions based on aircraft needs</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Proven reliability in airport and military operations</li>
                        <li>Competitive 28.5V DC ground power unit price</li>
                        <li>Dedicated support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence delivers precision-engineered aircraft ground power supply systems designed for long-term
                    performance.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;