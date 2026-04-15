import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Fuel Testing Equipment | Aviation Fuel Testing System | Jetsys Defence",
  description:
    "High-precision Aircraft Fuel Testing Equipment by Jetsys Defence for fuel quality analysis, contamination detection, and aviation fuel inspection. Ideal for defence and aerospace fuel testing systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aircraft-fuel-testing-equipment",
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
                Aircraft Fuel Testing Equipment – Advanced Aviation Fuel Quality Analysis by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence offers advanced Aircraft Fuel Testing Equipment, engineered for precise fuel quality analysis, contamination detection, and inspection. Designed for aviation, defence, and aerospace sectors, this aviation fuel testing equipment ensures reliable performance, safety, and compliance in critical fuel operations.
              </p>

              <div className="my-8">
                <Image
                  src="/images/aircraft-fuel-testing-equipment.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Fuel Testing Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The aircraft fuel testing equipment is a comprehensive aviation fuel testing system used for analyzing fuel quality, detecting contaminants, and ensuring proper fuel standards before aircraft operation. It is an essential part of aircraft fuel testing ground support equipment and supports safe and efficient aviation fuel handling.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Aircraft Fuel Testing Equipment?</h2>
              <p className="font-medium text-base mb-6">
                Aircraft Fuel Testing Equipment refers to a range of specialized fuel testing equipment for aircraft used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Analyze aviation fuel quality</li>
                <li>Detect contamination such as water and particles</li>
                <li>Perform fuel sampling and inspection</li>
                <li>Ensure compliance with aviation fuel standards</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It functions as a complete fuel quality analysis system and integrates with aviation fuel inspection system setups.
              </p>

              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Fuel Testing Equipment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Advanced Fuel Analysis Capability</h3>
                        High-precision aircraft fuel analysis equipment. Supports aviation fuel quality testing equipment operations.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Contamination Detection System</h3>
                        Integrated fuel contamination testing equipment. Detects water, particulate matter, and impurities.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Comprehensive Testing Kit</h3>
                        Includes aircraft fuel test kit and sampling tools. Compatible with fuel sampling and testing equipment.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Durable & Field-Ready Design</h3>
                        Rugged construction for military fuel testing equipment aircraft use. Suitable for harsh aviation environments.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-System Integration</h3>
                        Works with aviation fuel filtration and testing unit. Supports complete aviation fuel quality control equipment.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Aircraft Fuel Testing Equipment</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Specification</th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Fuel Type</td>
                        <td className="px-4 py-2 border-b">ATF / Jet Fuel</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Testing Capability</td>
                        <td className="px-4 py-2 border-b">Contamination, density, and quality analysis</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Operation Mode</td>
                        <td className="px-4 py-2 border-b">Manual / Semi-automatic / Digital</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Power Supply</td>
                        <td className="px-4 py-2 border-b">Portable / Electric options available</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">System Components</td>
                        <td className="px-4 py-2 border-b">Fuel sampling kits, contamination detection sensors, filtration and testing unit, monitoring and analysis tools, safety and handling components</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Build & Design</td>
                        <td className="px-4 py-2 border-b">Compact and portable structure, industrial-grade materials, weather-resistant design</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aircraft Fuel Testing Equipment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Fuel Test Kit</h3><p>Basic aircraft fuel test equipment for routine inspections</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Fuel Testing System</h3><p>Complete aviation fuel testing system with digital analysis</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Testing Equipment</h3><p>Designed for defence aircraft fuel testing equipment operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Fuel Testing Solutions</h3><p>Tailor-made custom aircraft fuel testing equipment</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Fuel Testing Equipment</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures high fuel quality and safety</li>
                  <li>Detects contamination before aircraft fueling</li>
                  <li>Improves efficiency of aviation fuel testing equipment</li>
                  <li>Reduces operational risks and maintenance issues</li>
                  <li>Enhances performance of fuel systems</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Fuel Testing Equipment</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft maintenance and inspection</li>
                  <li>Fuel quality control before refueling</li>
                  <li>Defence and military aviation operations</li>
                  <li>Aerospace fuel system testing</li>
                  <li>Ground support equipment usage</li>
                  <li>Fighter jet fuel inspection (fighter aircraft fuel testing system)</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Real-time monitoring and analysis tools</li>
                  <li>Contamination detection alerts</li>
                  <li>Fuel sampling and testing interface</li>
                  <li>Diagnostic system for performance evaluation</li>
                  <li>Integrated aviation fuel inspection system</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aircraft Fuel Testing Equipment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted aircraft fuel testing equipment manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored aviation fuel testing equipment supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven systems for defence and aerospace sectors</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern fuel testing equipment manufacturer aviation capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete support from design to deployment and service</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Aircraft Fuel Testing Equipment from Jetsys Defence</h2>
                <p className="text-black">
                  Jetsys Defence is a leading aircraft fuel testing system supplier offering high-performance and reliable solutions. Choose our aviation fuel testing equipment for precision, safety, and efficiency in aviation and aerospace fuel operations.
                </p> 
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