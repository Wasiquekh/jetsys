import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Hydraulic Maintenance Trolley for Industrial & Aviation | Jetsys Defence",
  description:
    "Advanced hydraulic maintenance trolley by Jetsys Defence for industrial, aviation, and defence use. Reliable hydraulic service unit for maintenance, repair, and testing systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/hydraulic-maintenance-trolley",
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
                Hydraulic Maintenance Trolley – Industrial & Aviation Hydraulic Service System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers a high-performance Hydraulic Maintenance Trolley designed for industrial, aviation, and defence applications. This advanced hydraulic maintenance trolley delivers precision, durability, and efficiency for hydraulic system servicing, repair, and maintenance operations.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/hydraulic-maintenance-trolley.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Maintenance Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The hydraulic maintenance trolley is a versatile hydraulic service trolley used for fluid handling, filtration, pressure control, and system maintenance. It is widely used in industrial hydraulic maintenance trolley, aviation, and heavy-duty environments where hydraulic systems require reliable servicing.
                  </p>
                </div>
              </section>

              {/* What is Hydraulic Maintenance Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is Hydraulic Maintenance Trolley?</h3>
                  <p className="text-black">
                    A hydraulic maintenance trolley is a mobile hydraulic service unit designed to perform hydraulic oil transfer, system flushing, pressure testing, and maintenance. It acts as a complete hydraulic maintenance system used in industries, aerospace, and defence operations.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Hydraulic Maintenance Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty Performance</h4>
                          Engineered as a heavy duty hydraulic trolley for industrial and defence applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Compact Design</h4>
                          Functions as a mobile hydraulic maintenance unit for easy movement across facilities.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Ensures contamination-free fluid handling in hydraulic oil service trolley operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Function Capability</h4>
                          Works as a hydraulic repair trolley and servicing system for multiple tasks.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Robust Industrial Build</h4>
                          Suitable for industrial hydraulic service trolley and high-demand environments.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Hydraulic Maintenance Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Hydraulic Maintenance Trolley to your operational needs, fluids, and environmental envelope.
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
                        <tr><td className="px-4 py-2 border-b">Operating Pressure</td><td className="px-4 py-2 border-b">High-performance hydraulic pressure system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Flow Control</td><td className="px-4 py-2 border-b">Adjustable flow rate system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Filtration</td><td className="px-4 py-2 border-b">Multi-stage filtration technology</td></tr>
                        <tr><td className="px-4 py-2 border-b">Tank Capacity</td><td className="px-4 py-2 border-b">Customizable hydraulic reservoir</td></tr>
                        <tr><td className="px-4 py-2 border-b">Power Source</td><td className="px-4 py-2 border-b">Electric / engine-driven options</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Heavy-duty wheels with locking system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Compatibility</td><td className="px-4 py-2 border-b">Supports multiple hydraulic systems</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Hydraulic Maintenance Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Maintenance Trolley</h4>
                          Designed for factory and industrial hydraulic servicing operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Hydraulic Maintenance Trolley</h4>
                          Specialized for aviation hydraulic servicing and maintenance.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Hydraulic Maintenance Trolley</h4>
                          Built according to specific operational and system requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Service Unit</h4>
                          Advanced variant for aerospace and defence hydraulic systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Hydraulic Maintenance Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved Operational Efficiency</h4>
                          Reduces downtime with fast hydraulic servicing and repair.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable System Performance</h4>
                          Ensures stable hydraulic pressure and clean fluid handling.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost-Effective Maintenance</h4>
                          Minimizes maintenance costs through efficient servicing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Versatile Usage Across Industries</h4>
                          Suitable for industrial, aviation, and defence applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Hydraulic Maintenance Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Used in factories for hydraulic system maintenance trolley operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation & Aerospace Maintenance</h4>
                          Ideal for aviation hydraulic maintenance trolley applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Operations</h4>
                          Supports defence hydraulic servicing trolley and military systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Used in hydraulic ground support equipment operations.
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
                        <li>Pressure gauges and monitoring systems</li>
                        <li>Flow control valves</li>
                        <li>Hydraulic testing modules</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Diagnostic interface for system analysis</li>
                        <li>Safety shut-off and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures accurate performance in hydraulic servicing trolley operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Hydraulic Maintenance Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Trusted hydraulic maintenance trolley manufacturer</li>
                        <li>High-quality industrial and aviation-grade systems</li>
                        <li>Custom-built hydraulic maintenance equipment</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven reliability in defence and aerospace sectors</li>
                        <li>Leading hydraulic servicing unit manufacturer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Hydraulic Maintenance Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Get high-performance hydraulic maintenance trolley solutions from Jetsys Defence. Designed for durability, precision, and efficiency across industrial, aviation, and defence applications.
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