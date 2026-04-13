import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Hydraulic Test & Flushing Trolley for Industrial & Aviation | Jetsys Defence",
  description:
    "High-performance hydraulic test & flushing trolley by Jetsys Defence for aviation, industrial, and defence use. Reliable hydraulic flushing unit for testing, cleaning, and system maintenance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/hydraulic-test-&-flushing-trolley",
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
                Hydraulic Test & Flushing Trolley – Advanced Hydraulic Flushing System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-efficiency Hydraulic Test & Flushing Trolley engineered for aviation, industrial, and defence applications. This advanced hydraulic test and flushing trolley ensures precise system cleaning, testing, and fluid management for critical hydraulic operations.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/Hydraulic Test & Flushing Trolley.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Test and Flushing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The hydraulic flushing trolley is an essential hydraulic testing and flushing equipment used for removing contaminants, flushing hydraulic lines, and testing system performance. It plays a vital role in maintaining reliability in industrial hydraulic flushing system and aviation environments.
                  </p>
                </div>
              </section>

              {/* What is Hydraulic Test & Flushing Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is Hydraulic Test & Flushing Trolley?</h3>
                  <p className="text-black">
                    A hydraulic test unit combined with a hydraulic flushing unit is a mobile system designed to clean, flush, and test hydraulic circuits. It functions as a complete hydraulic cleaning and flushing system to ensure optimal performance and prevent system failures.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Hydraulic Test & Flushing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High-Pressure Flushing Capability</h4>
                          Designed as a high pressure hydraulic flushing unit for effective removal of contaminants.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Integrated Testing System</h4>
                          Works as a hydraulic testing trolley for accurate pressure and flow testing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration Technology</h4>
                          Ensures clean operation in hydraulic oil flushing system processes.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Compact Design</h4>
                          Portable hydraulic oil flushing trolley for easy deployment across sites.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty Industrial Build</h4>
                          Suitable for industrial hydraulic flushing system and defence operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Hydraulic Test & Flushing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Hydraulic Test & Flushing Trolley to your operational needs, fluids, and environmental envelope.
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
                        <tr><td className="px-4 py-2 border-b">Operating Pressure</td>
                          <td className="px-4 py-2 border-b">High-pressure flushing and testing system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Flow Rate</td>
                          <td className="px-4 py-2 border-b">Adjustable flow control for flushing operations</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Filtration</td>
                          <td className="px-4 py-2 border-b">Multi-stage filtration system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Reservoir Capacity</td>
                          <td className="px-4 py-2 border-b">Customizable tank size</td>
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
                          <td className="px-4 py-2 border-b">Suitable for multiple hydraulic systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Hydraulic Test & Flushing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Flushing System</h4>
                          Designed for large-scale industrial hydraulic cleaning operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Hydraulic Flushing Trolley</h4>
                          Specialized for aviation and aerospace hydraulic systems.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Hydraulic Flushing Trolley</h4>
                          Tailored solutions based on operational requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Flushing Equipment</h4>
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Hydraulic Test & Flushing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved System Reliability</h4>
                          Removes contaminants and ensures clean hydraulic circuits.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Extended Equipment Life</h4>
                          Reduces wear and tear through proper flushing and testing.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Efficient Maintenance Operations</h4>
                          Speeds up hydraulic system cleaning and testing processes.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost Savings</h4>
                          Prevents system failures and reduces maintenance costs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Hydraulic Test & Flushing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Used in industrial hydraulic flushing system supplier environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation & Aerospace Maintenance</h4>
                          Ideal for aviation hydraulic test and flushing unit operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Systems</h4>
                          Supports defence hydraulic flushing system applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Used in hydraulic ground support testing system operations.
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
                        <li>Pressure gauges for system monitoring</li>
                        <li>Flow control and regulation valves</li>
                        <li>Hydraulic testing modules</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Diagnostic interface for performance analysis</li>
                        <li>Safety shut-off and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures accuracy in hydraulic system testing equipment operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Hydraulic Test & Flushing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Trusted hydraulic test and flushing trolley manufacturer</li>
                        <li>Advanced engineering for industrial and aviation use</li>
                        <li>Custom-built hydraulic flushing equipment</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven reliability in defence and aerospace sectors</li>
                        <li>Leading hydraulic test unit manufacturer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Hydraulic Test & Flushing Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for high-performance hydraulic flushing trolley supplier solutions. Built for precision, durability, and efficiency in hydraulic system cleaning, testing, and maintenance.
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