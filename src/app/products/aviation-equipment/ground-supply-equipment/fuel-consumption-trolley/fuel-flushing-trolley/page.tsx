import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";
import { h1 } from "framer-motion/m";

export const metadata: Metadata = {
  title:
    "Fuel Flushing Trolley | Aircraft Fuel Flushing Equipment | Jetsys Defence",
  description:
    "High-performance Fuel Flushing Trolley by Jetsys Defence for fuel system cleaning, contamination removal, and aviation fuel filtration. Ideal for aircraft fuel system flushing and maintenance operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/fuel-flushing-trolley",
  },
};

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Fuel Flushing Trolley – Advanced Aircraft Fuel System Cleaning by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence offers a high-efficiency Fuel Flushing Trolley, engineered for deep cleaning, flushing, and purification of aircraft fuel systems. This advanced fuel flushing equipment is designed for aviation, defence, and aerospace sectors to ensure contamination-free fuel flow and optimal system performance.
              </p>

              

              <div className="my-8">
                <Image
                  src="/images/Fuel Flushing Trolley.png"
                  width={500}
                  height={1000}
                  alt="Fuel Flushing Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
<h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The fuel flushing trolley is a mobile fuel system flushing trolley used to clean fuel lines, tanks, and components by circulating filtered fuel through the system. It plays a critical role in fuel system maintenance equipment and ensures reliability in aviation fuel flushing system operations.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Fuel Flushing Trolley?</h2>
              <p className="font-medium text-base mb-6">
                A Fuel Flushing Trolley is a specialized fuel flushing unit designed to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Remove contaminants from fuel systems</li>
                <li>Flush fuel lines and pipelines</li>
                <li>Filter and purify aviation fuel</li>
                <li>Maintain system cleanliness and efficiency</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It functions as a complete fuel filtration and flushing system and fuel contamination removal system for aircraft and aerospace fuel systems.
              </p>
              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Fuel Flushing Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">High-Efficiency Flushing System</h3>
                        Advanced fuel flushing system for deep cleaning. Continuous circulation for effective contamination removal.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Integrated Filtration Unit</h3>
                        Multi-stage aviation fuel filtration unit. Removes particles, water, and impurities.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Robust Industrial Design</h3>
                        Heavy-duty construction for military aircraft fuel flushing unit use. Long-lasting and corrosion-resistant.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Safe & Controlled Operation</h3>
                        Leak-proof design for fuel line flushing trolley applications. Anti-static components for safety.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Purpose Functionality</h3>
                        Works as fuel cleaning and flushing trolley. Supports complete fuel purification system.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Fuel Flushing Trolley</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border-b font-medium">Fuel Type</td><td className="px-4 py-2 border-b">ATF / Jet Fuel</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Flow Rate</td><td className="px-4 py-2 border-b">Customizable based on system requirements</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Tank Capacity</td><td className="px-4 py-2 border-b">50L – 500L (Custom options available)</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Power Supply</td><td className="px-4 py-2 border-b">Electric / Battery-operated</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">System Components</td><td className="px-4 py-2 border-b">High-capacity fuel pump, multi-stage filtration system, flexible hoses, connectors, pressure gauges, flow meters, safety valves, monitoring panel</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Build & Design</td><td className="px-4 py-2 border-b">Heavy-duty steel frame, anti-static wheels with locking system, weather-resistant industrial coating</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Fuel Flushing Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Fuel Flushing Unit</h3><p>Basic fuel flushing unit for routine maintenance</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Filtration & Flushing System</h3><p>High-performance fuel filtration and flushing system with enhanced purification</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Flushing Trolley</h3><p>Designed for defence fuel flushing trolley operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Fuel Flushing System</h3><p>Tailor-made custom fuel flushing trolley solutions</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Fuel Flushing Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures clean and contamination-free fuel systems</li>
                  <li>Improves efficiency of fuel cleaning system aircraft</li>
                  <li>Reduces maintenance downtime and operational risks</li>
                  <li>Extends lifespan of fuel system components</li>
                  <li>Enhances performance of aviation fuel flushing system</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Fuel Flushing Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft fuel system cleaning and maintenance</li>
                  <li>Fuel tank and pipeline flushing</li>
                  <li>Aviation and aerospace fuel system servicing</li>
                  <li>Defence and military operations</li>
                  <li>Ground support equipment maintenance</li>
                  <li>Industrial fuel system cleaning</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Real-time monitoring of fuel flow and pressure</li>
                  <li>Filtration performance indicators</li>
                  <li>Contamination detection system</li>
                  <li>Digital control panel for system operation</li>
                  <li>Diagnostic tools for maintenance and troubleshooting</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Fuel Flushing Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted fuel flushing trolley manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Flexible fuel flushing system supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven performance in aerospace and defence sectors</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern fuel flushing unit manufacturer capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete lifecycle support from manufacturing to service</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Fuel Flushing Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Jetsys Defence is a reliable aircraft fuel flushing equipment supplier offering high-quality, durable, and efficient systems. Choose our fuel flushing trolley for superior performance, safety, and long-term operational reliability.
                </p>
                <div className="mt-6">
                  <OrderNowContactButton />
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

export default Page;