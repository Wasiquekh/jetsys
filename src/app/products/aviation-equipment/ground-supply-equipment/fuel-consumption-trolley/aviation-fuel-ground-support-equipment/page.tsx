import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aviation Fuel Ground Support Equipment | Aircraft Fuel GSE | Jetsys Defence",
  description:
    "High-performance Aviation Fuel Ground Support Equipment by Jetsys Defence for fuel handling, testing, transfer, and servicing. Ideal for aircraft fuel GSE, aviation fuel systems, and defence operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment",
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
                Aviation Fuel Ground Support Equipment – Advanced Aircraft Fuel Handling Systems by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence delivers advanced Aviation Fuel Ground Support Equipment, engineered for safe, efficient, and precise fuel handling in aviation, defence, and aerospace environments. Our solutions cover complete aviation fuel GSE requirements including transfer, filtration, testing, and monitoring systems.
              </p>

              <div className="my-8">
                <Image
                  src="/images/aviation-fuel-ground-support-equipment.png"
                  width={500}
                  height={1000}
                  alt="Aviation Fuel Ground Support Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The aviation fuel ground support equipment range includes a complete suite of fuel ground support systems aviation designed for aircraft refueling, fuel transfer, filtration, testing, and monitoring. These systems are essential for maintaining operational efficiency and safety in aviation fuel management.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Aviation Fuel Ground Support Equipment?</h2>
              <p className="font-medium text-base mb-6">
                Aviation Fuel Ground Support Equipment refers to a wide range of aircraft fuel ground support equipment used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Handle and transfer aviation fuel</li>
                <li>Perform refueling and defueling operations</li>
                <li>Monitor and measure fuel flow and consumption</li>
                <li>Test and filter fuel for quality assurance</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It forms a complete aviation ground fuel support system integrating aviation fuel handling equipment, fuel servicing ground support equipment, and aviation GSE fuel systems.
              </p>

              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aviation Fuel Ground Support Equipment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Complete Fuel Handling Solutions</h3>
                        Covers fuel transfer and defueling equipment. Supports efficient aircraft fuel support equipment operations.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Advanced Fuel Servicing Systems</h3>
                        Integrated aviation fuel servicing equipment. Designed for high-performance fuel operations.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Functional Fuel Systems</h3>
                        Includes aviation fuel filtration system. Supports fuel testing equipment aviation and analysis.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Precision Monitoring & Measurement</h3>
                        Equipped with fuel flow measurement system aircraft. Accurate tracking of fuel usage and flow.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Rugged Defence-Grade Design</h3>
                        Built for military fuel ground support equipment. Reliable in harsh aerospace and defence environments.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Aviation Fuel Ground Support Equipment</h2>
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
                        <td className="px-4 py-2 border-b font-medium">System Capacity</td>
                        <td className="px-4 py-2 border-b">Customizable based on application</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Operation Mode</td>
                        <td className="px-4 py-2 border-b">Manual / Semi-automatic / Fully automated</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Power Supply</td>
                        <td className="px-4 py-2 border-b">Electric / Battery-operated</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">System Components</td>
                        <td className="px-4 py-2 border-b">Fuel transfer and defueling units, filtration and purification systems, fuel testing and analysis equipment, flow meters and monitoring systems, pumps, valves, and safety controls</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Build & Design</td>
                        <td className="px-4 py-2 border-b">Heavy-duty industrial construction, anti-static components for safety, weather-resistant coating for outdoor use</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aviation Fuel Ground Support Equipment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Fuel Transfer & Refueling Systems</h3><p>Complete aircraft refueling equipment solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Fuel Testing & Analysis Systems</h3><p>Advanced fuel testing equipment aviation setups</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Fuel Filtration & Cleaning Systems</h3><p>High-performance aviation fuel filtration system</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Aviation Fuel GSE Solutions</h3><p>Tailor-made custom aviation fuel ground support equipment</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aviation Fuel Ground Support Equipment</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures safe and efficient fuel handling</li>
                  <li>Improves operational efficiency of aviation fuel systems</li>
                  <li>Reduces contamination and fuel loss</li>
                  <li>Enhances reliability of aircraft fuel servicing equipment</li>
                  <li>Supports compliance with aviation safety standards</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aviation Fuel Ground Support Equipment</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft refueling and defueling operations</li>
                  <li>Aviation fuel storage and transfer</li>
                  <li>Defence and military aviation operations</li>
                  <li>Aerospace fuel system management</li>
                  <li>Ground support equipment operations</li>
                  <li>Fighter jet servicing (fighter aircraft fuel support equipment)</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Real-time fuel monitoring systems</li>
                  <li>Flow rate and pressure control</li>
                  <li>Contamination detection and alerts</li>
                  <li>Diagnostic tools for system performance</li>
                  <li>Integrated aviation fuel servicing equipment controls</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aviation Fuel Ground Support Equipment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted aviation fuel ground support equipment manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored aircraft fuel GSE supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven systems for defence and aerospace industries</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern aircraft fuel servicing equipment manufacturer capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete lifecycle support from design to deployment</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Aviation Fuel Ground Support Equipment from Jetsys Defence</h2>
                <p className="text-black">
                  Jetsys Defence is a leading aviation fuel equipment supplier offering complete aviation fuel ground support equipment solutions. Choose our systems for high performance, safety, and reliability in aviation, defence, and aerospace fuel operations.
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