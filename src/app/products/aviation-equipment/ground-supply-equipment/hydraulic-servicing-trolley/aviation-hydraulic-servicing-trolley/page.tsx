import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aviation Hydraulic Servicing Trolley for Aircraft | Jetsys Defence",
  description:
    "High-performance aviation hydraulic servicing trolley by Jetsys Defence for aircraft maintenance, testing, and ground support hydraulic systems in aviation and defence sectors.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/aviation-hydraulic-servicing-trolley",
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
                Aviation Hydraulic Servicing Trolley – Advanced Aircraft Hydraulic Service System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-efficiency Aviation Hydraulic Servicing Trolley engineered for aviation, aerospace, and defence applications. This advanced aviation hydraulic servicing trolley ensures precision hydraulic servicing, testing, and maintenance for modern aircraft systems.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/Aviation Hydraulic Servicing Trolley.png"
                  width={500}
                  height={1000}
                  alt="Aviation Hydraulic Servicing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aviation Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High-Pressure Performance</h4>
                          Optimized for demanding fighter aircraft hydraulic servicing trolley applications with precise pressure control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Compact Design</h4>
                          Easy-to-move hydraulic servicing trolley for aviation with robust wheels and compact footprint.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Ensures contamination-free fluid handling in aviation hydraulic servicing trolley operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Functional Capability</h4>
                          Works as an aircraft hydraulic test trolley for testing, servicing, and diagnostics.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged Defence Construction</h4>
                          Designed for defence aviation hydraulic servicing trolley and military environments.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Aviation Hydraulic Servicing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Aviation Hydraulic Servicing Trolley to your fleet, fluids, and environmental envelope.
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
                        <tr><td className="px-4 py-2 border-b">Operating Pressure</td><td className="px-4 py-2 border-b">High-pressure aviation-grade system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Flow Rate</td><td className="px-4 py-2 border-b">Adjustable hydraulic flow system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Filtration</td><td className="px-4 py-2 border-b">Multi-stage filtration unit</td></tr>
                        <tr><td className="px-4 py-2 border-b">Reservoir Capacity</td><td className="px-4 py-2 border-b">Customizable fluid tank size</td></tr>
                        <tr><td className="px-4 py-2 border-b">Power Source</td><td className="px-4 py-2 border-b">Electric / engine-driven options</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Heavy-duty wheeled trolley</td></tr>
                        <tr><td className="px-4 py-2 border-b">Compatibility</td><td className="px-4 py-2 border-b">Suitable for various aircraft hydraulic systems</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aviation Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Portable Aviation Hydraulic Servicing Unit</h4>
                          Lightweight and easy to deploy for quick aircraft maintenance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High-Pressure Hydraulic Service Unit for Aircraft</h4>
                          Designed for heavy-duty aircraft and aerospace systems.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Aviation Hydraulic Servicing Trolley</h4>
                          Tailored solutions based on aircraft type and operational needs.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Servicing Unit</h4>
                          Advanced systems for high-performance aerospace applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aviation Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Faster Aircraft Maintenance</h4>
                          Reduces downtime with efficient hydraulic servicing operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved System Reliability</h4>
                          Ensures clean fluid handling and stable pressure control.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost Efficiency</h4>
                          Minimizes operational and maintenance costs.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Aircraft Compatibility</h4>
                          Suitable for commercial, defence, and aerospace aircraft.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aviation Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Maintenance & Testing</h4>
                          Used for routine servicing and hydraulic testing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Aviation</h4>
                          Ideal for military hydraulic servicing trolley operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Industry</h4>
                          Supports high-end aerospace hydraulic servicing unit applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Essential in aviation hydraulic ground support equipment systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Digital pressure monitoring system</li>
                        <li>Flow control and regulation valves</li>
                        <li>Hydraulic testing modules</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Real-time diagnostics interface</li>
                        <li>Safety shutdown and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures precision performance in aviation hydraulic service cart operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aviation Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Trusted aviation hydraulic servicing trolley manufacturer</li>
                        <li>High-quality engineering for aviation and defence</li>
                        <li>Custom-built hydraulic service unit for aircraft</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven performance in harsh environments</li>
                        <li>Reliable aviation ground support equipment supplier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Aviation Hydraulic Servicing Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for advanced aviation hydraulic maintenance trolley solutions. Our systems are built for precision, durability, and high-performance aircraft hydraulic servicing.
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