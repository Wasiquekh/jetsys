import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Hydraulic Servicing Trolley for Aviation | Jetsys Defence",
  description:
    "High-performance aircraft hydraulic servicing trolley by Jetsys Defence for aviation and defence use. Reliable hydraulic service system for aircraft maintenance and testing.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/aircraft_hydraulic_servicing_trolley",
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
                Aircraft Hydraulic Servicing Trolley – Aviation Hydraulic Service System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a high-performance Aircraft Hydraulic Servicing Trolley designed for aviation, aerospace, and defence environments. Built for precision, durability, and efficiency, this hydraulic servicing system supports aircraft maintenance, testing, and fluid management operations.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/Aircraft Hydraulic Servicing Trolley.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Hydraulic Servicing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Pressure Hydraulic Capability</h4>
                          Designed for high pressure hydraulic servicing trolley aircraft applications ensuring accurate pressure control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Portable Design</h4>
                          Compact and mobile aircraft hydraulic servicing trolley for easy movement across hangars and airfields.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Integrated filtration for clean hydraulic fluid handling in aviation hydraulic service system.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Function Operation</h4>
                          Supports testing, fluid transfer, and maintenance as an aircraft hydraulic test and servicing trolley.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged Defence Build</h4>
                          Engineered for military hydraulic servicing trolley and harsh aerospace environments.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Aircraft Hydraulic Servicing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Aircraft Hydraulic Servicing Trolley to your fleet, fluids, and environmental envelope.
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
                        <tr><td className="px-4 py-2 border-b">Operating Pressure</td><td className="px-4 py-2 border-b">Up to high-pressure aviation standards</td></tr>
                        <tr><td className="px-4 py-2 border-b">Flow Rate</td><td className="px-4 py-2 border-b">Adjustable hydraulic flow control</td></tr>
                        <tr><td className="px-4 py-2 border-b">Filtration Level</td><td className="px-4 py-2 border-b">Multi-stage filtration system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Reservoir Capacity</td><td className="px-4 py-2 border-b">Customizable tank capacity</td></tr>
                        <tr><td className="px-4 py-2 border-b">Power Supply</td><td className="px-4 py-2 border-b">Electric / Engine-driven options</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Wheeled trolley with locking mechanism</td></tr>
                        <tr><td className="px-4 py-2 border-b">Compatibility</td><td className="px-4 py-2 border-b">Suitable for multiple aircraft hydraulic systems</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Maintenance Operations</h4>
                          Used in regular servicing and inspection of aircraft hydraulic systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Aviation</h4>
                          Ideal for defence aircraft hydraulic servicing trolley operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Industry</h4>
                          Supports aerospace hydraulic service unit applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Key component in aircraft hydraulic ground support equipment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved Maintenance Efficiency</h4>
                          Reduces aircraft downtime with fast servicing operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Enhanced Safety</h4>
                          Ensures safe hydraulic pressure and contamination-free fluid handling.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost-Effective Operations</h4>
                          Minimizes maintenance cost with reliable servicing systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Versatile Usage</h4>
                          Suitable for multiple aircraft types and hydraulic systems.
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
                        <li>Pressure monitoring gauges</li>
                        <li>Flow control valves</li>
                        <li>Hydraulic testing modules</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>System diagnostics interface</li>
                        <li>Safety shut-off mechanisms</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures accurate testing and monitoring in aviation hydraulic servicing cart system.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aircraft Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Expertise in aviation and defence equipment</li>
                        <li>High-quality manufacturing standards</li>
                        <li>Custom-built hydraulic servicing trolley for aircraft</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven reliability in aerospace operations</li>
                        <li>Advanced engineering for performance and durability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aircraft Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Portable Hydraulic Servicing Unit for Aircraft</h4>
                          Lightweight unit for quick maintenance tasks.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Pressure Hydraulic Service Unit Aircraft</h4>
                          Designed for heavy-duty aircraft hydraulic systems.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Hydraulic Fluid Servicing Trolley</h4>
                          Focused on fluid transfer and filtration operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Service Unit</h4>
                          Advanced systems for aerospace-grade servicing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Aircraft Hydraulic Servicing Trolley from Jetsys Defence</h3>
                  <p className="text-black">
                    Get industry-leading aircraft hydraulic maintenance trolley solutions from Jetsys Defence. Designed for performance, precision, and reliability in aviation and defence hydraulic servicing systems.
                  </p>
                  <div className="mt-6">
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