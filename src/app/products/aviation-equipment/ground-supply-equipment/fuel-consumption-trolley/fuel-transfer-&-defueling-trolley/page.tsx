import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Fuel Transfer & Defueling Trolley | Aircraft Fuel Transfer Trolley | Jetsys Defence",
  description:
    "High-performance Fuel Transfer & Defueling Trolley by Jetsys Defence for safe aircraft fuel transfer, defueling, and circulation. Ideal for aviation fuel handling, ground support, and military operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/fuel-transfer-&-defueling-trolley",
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
                Fuel Transfer & Defueling Trolley – Advanced Aircraft Fuel Handling System by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence presents a robust and high-efficiency Fuel Transfer & Defueling Trolley, engineered for safe and precise aircraft fuel transfer, defueling, and circulation. This advanced aviation fuel transfer trolley is designed for aviation, defence, and aerospace applications requiring reliable fuel handling and operational safety.
              </p>

              

              <div className="my-8">
                <Image
                  src="/images/Fuel Transfer & Defueling Trolley.png"
                  width={500}
                  height={1000}
                  alt="Fuel Transfer & Defueling Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
<h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The fuel transfer and defueling trolley is a mobile aviation fuel transfer system used for transferring fuel between storage units and aircraft, as well as safely removing fuel during maintenance or emergency operations. It is a key component of aircraft ground fuel support equipment and modern aviation fuel ground support system setups.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Fuel Transfer & Defueling Trolley?</h2>
              <p className="font-medium text-base mb-6">
                A Fuel Transfer & Defueling Trolley is a specialized fuel pumping system for aircraft that enables:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Controlled fuel transfer to aircraft systems</li>
                <li>Safe removal (defueling) of aviation fuel</li>
                <li>Circulation of fuel for testing and maintenance</li>
                <li>Operation as an aircraft fuel dispensing unit</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It supports both aviation fuel supply and return system and aircraft fuel circulation system requirements.
              </p>
              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Fuel Transfer & Defueling Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Efficient Fuel Transfer System</h3>
                        High-capacity pumps for aircraft fuel transfer trolley operations. Smooth fuel flow control for precision transfer.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Advanced Defueling Capability</h3>
                        Safe and quick fuel defueling unit aircraft functionality. Ideal for maintenance and emergency fuel removal.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Durable Aviation Design</h3>
                        Heavy-duty construction for military aircraft defueling system use. Corrosion-resistant and long-lasting materials.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Safe Fuel Handling</h3>
                        Leak-proof design for aviation fuel handling trolley. Anti-static system to prevent hazards.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Functional Operation</h3>
                        Supports aircraft refueling and defueling equipment operations. Works as complete aerospace fuel transfer equipment.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Fuel Transfer & Defueling Trolley</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border-b font-medium">Fuel Type</td><td className="px-4 py-2 border-b">Aviation Turbine Fuel (ATF) / Jet Fuel</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Flow Rate</td><td className="px-4 py-2 border-b">Customizable (based on requirement)</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Tank Capacity</td><td className="px-4 py-2 border-b">50L – 1000L options available</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Power Supply</td><td className="px-4 py-2 border-b">Electric / Battery-operated</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">System Components</td><td className="px-4 py-2 border-b">High-performance fuel pumps, flow meters, control valves, aviation-grade hoses, filtration unit, pressure gauges, safety valves</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Build & Design</td><td className="px-4 py-2 border-b">Heavy-duty steel frame, anti-static lockable wheels, weather-resistant industrial coating</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Fuel Transfer & Defueling Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Fuel Transfer Trolley</h3><p>Basic fuel transfer trolley for aircraft operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Defueling System Trolley</h3><p>Enhanced aviation defueling system with safety controls</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Handling Trolley</h3><p>Built for defence fuel transfer and defueling trolley use</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Fuel Transfer System</h3><p>Fully customizable custom fuel transfer and defueling trolley</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Fuel Transfer & Defueling Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Enables safe and efficient fuel transfer and removal</li>
                  <li>Reduces fuel loss and contamination risks</li>
                  <li>Improves operational efficiency of aviation fuel transfer system</li>
                  <li>Enhances safety in aircraft refueling and defueling equipment usage</li>
                  <li>Supports reliable aircraft fuel dispensing unit operations</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Fuel Transfer & Defueling Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft maintenance and servicing</li>
                  <li>Fuel transfer between storage and aircraft</li>
                  <li>Fuel removal during inspection or repair</li>
                  <li>Defence and military aviation operations</li>
                  <li>Ground support equipment usage</li>
                  <li>Fighter jet operations (fighter aircraft fuel transfer trolley)</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Real-time fuel flow monitoring system</li>
                  <li>Pressure and temperature control</li>
                  <li>Safety alerts for leakage or overpressure</li>
                  <li>Diagnostic system for performance monitoring</li>
                  <li>Integrated control panel for efficient operation</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Fuel Transfer & Defueling Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Leading fuel transfer and defueling trolley manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored aviation fuel transfer system supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven performance in defence and aerospace environments</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern aircraft refueling equipment manufacturer capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete support from design to deployment and service</p></div>
                </div>
              </section>
                                                                                                                                      
              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Fuel Transfer & Defueling Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Choose Jetsys Defence for reliable and high-performance aircraft fuel transfer trolley supplier solutions. Our systems are designed for precision, safety, and efficiency, making them ideal for aviation, defence, and aerospace fuel handling operations.
                </p>
                <div className="mt-6">
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