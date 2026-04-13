import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "High Pressure Hydraulic Servicing Trolley for Aircraft | Jetsys Defence",
  description:
    "High pressure hydraulic servicing trolley by Jetsys Defence for aviation, industrial, and defence systems. Reliable hydraulic service unit for testing, maintenance, and high-pressure operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/high-pressure-hydraulic-servicing-trolley",
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
                High Pressure Hydraulic Servicing Trolley – Aviation & Industrial Hydraulic System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-performance High Pressure Hydraulic Servicing Trolley designed for aviation, aerospace, defence, and industrial applications. This advanced high pressure hydraulic servicing trolley ensures reliable and precise servicing of high-pressure hydraulic systems.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/High Pressure Hydraulic Servicing Trolley.png"
                  width={500}
                  height={1000}
                  alt="High Pressure Hydraulic Servicing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The hydraulic servicing trolley high pressure is engineered to handle demanding hydraulic operations requiring high-pressure control, fluid transfer, and system testing. It is widely used in industrial high pressure hydraulic system, aviation maintenance, and hydraulic ground support high pressure system environments.
                  </p>
                </div>
              </section>

              {/* What is High Pressure Hydraulic Servicing Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is High Pressure Hydraulic Servicing Trolley?</h3>
                  <p className="text-black">
                    A high pressure hydraulic service unit is a specialized hydraulic high pressure servicing unit used for testing, servicing, and maintaining high-pressure hydraulic systems. It functions as a complete high pressure hydraulic control and service system for critical operations.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of High Pressure Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Pressure Performance Capability</h4>
                          Designed for fighter aircraft hydraulic servicing trolley high pressure applications with accurate pressure handling.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty Construction</h4>
                          Built as a heavy duty hydraulic servicing trolley for industrial and defence use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Ensures contamination-free fluid handling in hydraulic oil high pressure service unit operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Functional Testing Capability</h4>
                          Works as a high pressure hydraulic test trolley for system diagnostics and servicing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Robust Design</h4>
                          Portable and durable hydraulic service trolley high pressure system for field operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of High Pressure Hydraulic Servicing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each High Pressure Hydraulic Servicing Trolley to your operational needs, fluids, and environmental envelope.
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
                          <td className="px-4 py-2 border-b">High-pressure hydraulic system compatibility</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Flow Rate</td>
                          <td className="px-4 py-2 border-b">Adjustable high-pressure flow control</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Filtration</td>
                          <td className="px-4 py-2 border-b">Multi-stage filtration system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Reservoir Capacity</td>
                          <td className="px-4 py-2 border-b">Customizable hydraulic tank</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Power Source</td>
                          <td className="px-4 py-2 border-b">Electric / engine-driven options</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Mobility</td>
                          <td className="px-4 py-2 border-b">Heavy-duty trolley with locking wheels</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compatibility</td>
                          <td className="px-4 py-2 border-b">Suitable for aviation, industrial, and defence systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of High Pressure Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft High Pressure Hydraulic Servicing Trolley</h4>
                          Designed for aviation and aircraft hydraulic system servicing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial High Pressure Hydraulic System Trolley</h4>
                          Used for heavy industrial hydraulic applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom High Pressure Hydraulic Servicing Trolley</h4>
                          Customized solutions based on operational needs.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic High Pressure Service Equipment</h4>
                          Advanced system for aerospace and defence applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of High Pressure Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable High Pressure Operations</h4>
                          Ensures stable and accurate hydraulic pressure control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved System Performance</h4>
                          Maintains efficiency in high-pressure hydraulic systems.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reduced Maintenance Downtime</h4>
                          Speeds up servicing and testing processes.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost Efficiency</h4>
                          Prevents system failures and reduces operational costs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of High Pressure Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation & Aircraft Maintenance</h4>
                          Used in aircraft high pressure hydraulic servicing trolley operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Systems</h4>
                          Supports defence high pressure hydraulic servicing system applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Used in industrial high pressure hydraulic system environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Essential for hydraulic ground support high pressure system operations.
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
                        <li>High-pressure monitoring gauges</li>
                        <li>Flow and pressure control valves</li>
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
                  <p className="text-black mt-4">Ensures precision in high pressure hydraulic service equipment operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for High Pressure Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Trusted high pressure hydraulic servicing trolley manufacturer</li>
                        <li>Advanced engineering for aviation and industrial systems</li>
                        <li>Custom-built hydraulic servicing trolley high pressure solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven performance in defence and aerospace environments</li>
                        <li>Reliable high pressure hydraulic trolley supplier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our High Pressure Hydraulic Servicing Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for high-performance high pressure hydraulic servicing trolley supplier solutions. Designed for precision, durability, and efficiency in high-pressure hydraulic system servicing.
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