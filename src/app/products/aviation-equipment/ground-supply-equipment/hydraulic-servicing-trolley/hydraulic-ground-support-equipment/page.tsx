import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Hydraulic Ground Support Equipment for Aircraft | Jetsys Defence",
  description:
    "Hydraulic ground support equipment by Jetsys Defence for aviation, defence, and aerospace use. Reliable hydraulic GSE systems for aircraft servicing, testing, and maintenance operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/hydraulic-ground-support-equipment",
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
                Hydraulic Ground Support Equipment – Advanced Aviation Hydraulic GSE Systems by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers advanced Hydraulic Ground Support Equipment designed for aviation, aerospace, and defence applications. This high-performance hydraulic ground support equipment ensures efficient aircraft servicing, hydraulic testing, and maintenance operations.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/hydraulic-ground-support-equipment.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Ground Support Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The hydraulic GSE equipment is a critical part of aviation hydraulic ground support systems, supporting aircraft hydraulic servicing, testing, and fluid handling. It is widely used in aircraft hydraulic ground support equipment operations to maintain system reliability and performance.
                  </p>
                </div>
              </section>

              {/* What is Hydraulic Ground Support Equipment Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is Hydraulic Ground Support Equipment?</h3>
                  <p className="text-black">
                    Hydraulic ground support equipment refers to specialized aircraft ground support hydraulic equipment used for servicing, testing, and maintaining hydraulic systems in aircraft. These systems function as hydraulic service units for fluid transfer, pressure control, and diagnostics.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Hydraulic Ground Support Equipment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High-Performance Hydraulic Systems</h4>
                          Designed for aviation hydraulic ground support systems with precise pressure and flow control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Function Capability</h4>
                          Works as hydraulic servicing ground support equipment, testing and maintenance solution.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty Construction</h4>
                          Built as heavy duty hydraulic service equipment for demanding environments.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration Technology</h4>
                          Ensures clean fluid handling in hydraulic fluid servicing systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Modular & Custom Design</h4>
                          Supports custom hydraulic ground support equipment configurations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Hydraulic Ground Support Equipment</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Hydraulic Ground Support Equipment to your operational needs, aircraft types, and environmental envelope.
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
                          <td className="px-4 py-2 border-b">Operating Pressure</td>
                          <td className="px-4 py-2 border-b">High-performance hydraulic system compatibility</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Flow Rate</td>
                          <td className="px-4 py-2 border-b">Adjustable flow control system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Filtration</td>
                          <td className="px-4 py-2 border-b">Multi-stage filtration technology</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Reservoir Capacity</td>
                          <td className="px-4 py-2 border-b">Customizable hydraulic tank size</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Power Source</td>
                          <td className="px-4 py-2 border-b">Electric / engine-driven options</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Mobility</td>
                          <td className="px-4 py-2 border-b">Fixed or mobile configurations available</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compatibility</td>
                          <td className="px-4 py-2 border-b">Suitable for aircraft and industrial hydraulic systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Hydraulic Ground Support Equipment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Hydraulic Ground Support Equipment</h4>
                          Designed for aircraft ground support equipment hydraulic system operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Hydraulic Ground Power Unit</h4>
                          Used for hydraulic power supply in aircraft maintenance.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Hydraulic Ground Support Equipment</h4>
                          Tailored solutions based on operational needs.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Ground Support Systems</h4>
                          Advanced systems for aerospace and defence applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Hydraulic Ground Support Equipment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved Aircraft Maintenance Efficiency</h4>
                          Enhances servicing speed and reduces downtime.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable Hydraulic Performance</h4>
                          Ensures stable pressure and contamination-free operation.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost-Effective Operations</h4>
                          Minimizes maintenance and operational costs.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-System Compatibility</h4>
                          Suitable for aviation, defence, and industrial hydraulic systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Hydraulic Ground Support Equipment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Maintenance & Servicing</h4>
                          Used in aircraft hydraulic ground support equipment operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Aviation</h4>
                          Supports defence hydraulic ground support equipment applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Industry</h4>
                          Used in aerospace hydraulic ground support systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Applicable in hydraulic maintenance equipment environments.
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
                        <li>Hydraulic testing equipment modules</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Diagnostic interface for system analysis</li>
                        <li>Safety shut-off and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures precision in hydraulic testing equipment operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Hydraulic Ground Support Equipment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Trusted hydraulic ground support equipment manufacturer</li>
                        <li>Expertise in aviation and defence GSE systems</li>
                        <li>Custom-built hydraulic GSE equipment solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven performance in aerospace environments</li>
                        <li>Reliable aviation ground support equipment supplier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Hydraulic Ground Support Equipment from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for advanced hydraulic ground support systems designed for performance, durability, and efficiency in aircraft servicing, hydraulic testing, and maintenance operations.
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