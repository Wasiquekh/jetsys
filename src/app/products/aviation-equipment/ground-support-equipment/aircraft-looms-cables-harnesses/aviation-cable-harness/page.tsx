import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aviation Cable Harness Manufacturer | Aircraft Cable Harness – Jetsys Defence",
  description:
    "High-performance aviation cable harness by Jetsys Defence. Reliable aircraft cable harness assembly, aerospace cable harness, and custom aviation wiring systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/aviation-cable-harness",
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
                Aviation Cable Harness – High-Performance Aircraft Wiring by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence delivers advanced aviation cable harness solutions engineered for modern aircraft systems. Our precision-built aircraft cable harness assemblies ensure reliable signal transmission, power distribution, and avionics integration across defence and aerospace platforms.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/aviation-cable-harness.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Wiring Harness by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Company Product by Jetsys Defence */}
              <section>
                <br /><br />
                <div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Jetsys Defence is a leading aviation cable harness manufacturer offering high-quality aerospace cable harness and aircraft electrical cable harness systems designed for durability, safety, and mission-critical performance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Product Overview */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Our aviation cable harness is designed to meet the demanding requirements of aircraft systems, ensuring seamless electrical connectivity across avionics, control systems, and power units. Built with aerospace-grade materials, these harnesses support high-performance operations in extreme environments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Aviation Cable Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Aviation Cable Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An aviation cable harness is a structured assembly of wires, connectors, and protective coverings used in aircraft electrical systems. It organizes and secures wiring for efficient power and signal transmission in aircraft electrical interconnect systems.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Aviation Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aviation Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Reliability Design</h3>
                        <ul className="text-gray-600 pl-5 space-y-1 list-disc">
                          <li>Aerospace-grade materials for long lifecycle</li>
                          <li>Designed for fighter aircraft cable harness applications</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Precision Engineering</h3>
                        <ul className="text-gray-600 pl-5 space-y-1 list-disc">
                          <li>Custom-built aircraft cable harness assembly</li>
                          <li>Optimized routing for reduced interference</li>
                        </ul>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Environmental Resistance</h3>
                        <ul className="text-gray-600 pl-5 space-y-1 list-disc">
                          <li>Heat, vibration, and moisture resistant</li>
                          <li>Suitable for defence aviation cable harness use</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight & Compact</h3>
                        <ul className="text-gray-600 pl-5 space-y-1 list-disc">
                          <li>Reduced aircraft weight</li>
                          <li>Efficient aviation wiring harness integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Aviation Cable Harness */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Aviation Cable Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Aviation Cable Harnesses to your environmental, electrical, and routing requirements.
                  </p>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">Voltage Rating</td>
                          <td className="px-4 py-2 border-b">As per aircraft system requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Current Capacity</td>
                          <td className="px-4 py-2 border-b">High-load capable</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Conductors</td>
                          <td className="px-4 py-2 border-b">Copper / Tinned Copper</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Insulation</td>
                          <td className="px-4 py-2 border-b">PTFE / ETFE / XLPE</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding</td>
                          <td className="px-4 py-2 border-b">Shielded aircraft signal cable harness</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">EMI/EMC Compliance</td>
                          <td className="px-4 py-2 border-b">EMI/EMC compliant aerospace electrical cable harness</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Connector Type</td>
                          <td className="px-4 py-2 border-b">MIL-spec connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Temperature Range</td>
                          <td className="px-4 py-2 border-b">-55°C to +200°C</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Aviation Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aviation Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Avionics Cable Harness</h3>
                        <p className="text-gray-600 pl-5">For navigation and communication systems (aircraft avionics cable harness)</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Power Distribution Harness</h3>
                        <p className="text-gray-600 pl-5">Used in aircraft electrical systems</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Cable Assembly</h3>
                        <p className="text-gray-600 pl-5">Tailored aviation cable assembly based on aircraft configuration</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Military Grade Harness</h3>
                        <p className="text-gray-600 pl-5">For military aircraft cable harness and defence operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits of Aviation Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aviation Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                      <li>Improved aircraft system reliability</li>
                      <li>Reduced maintenance downtime</li>
                      <li>High-performance aerospace wiring and cable assembly</li>
                    </ul>
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                      <li>Enhanced safety in critical operations</li>
                      <li>Efficient aircraft electrical interconnect system integration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Aviation Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aviation Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                      <li>Commercial aircraft systems</li>
                      <li>Military & defence aviation</li>
                      <li>UAV and drone systems</li>
                    </ul>
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                      <li>Avionics and control systems</li>
                      <li>Aerospace testing equipment</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Jetsys Defence integrates advanced quality checks and diagnostics:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Continuity testing</li>
                        <li>Insulation resistance testing</li>
                        <li>Signal integrity verification</li>
                        <li>Full compliance with aerospace standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Aviation Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aviation Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                      <li>Trusted aircraft cable harness supplier</li>
                      <li>Custom engineering capabilities</li>
                      <li>Proven expertise in aerospace cable assembly</li>
                    </ul>
                    <ul className="space-y-3 text-gray-600 pl-5 list-disc">
                      <li>High-quality manufacturing standards</li>
                      <li>Competitive aviation cable harness price</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Aviation Cable Harness System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Upgrade your aircraft systems with our premium aviation cable harness solutions. Jetsys Defence offers reliable, durable, and high-performance aircraft cable harness assemblies tailored to your operational needs.
                      </p>
                      <p className="text-black font-medium mt-4">
                        Contact Jetsys Defence today to get the best aviation wiring harness supplier solutions for your aircraft systems.
                      </p>
                    </div>
                  </div>
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