import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Defence Hydraulic Servicing Trolley for Military Aircraft | Jetsys Defence",
  description:
    "Defence hydraulic servicing trolley by Jetsys Defence for military and aviation use. Reliable hydraulic service unit for aircraft maintenance, testing, and ground support systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/defence-hydraulic-servicing-trolley",
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
                Defence Hydraulic Servicing Trolley – Military & Aviation Hydraulic Service System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a high-performance Defence Hydraulic Servicing Trolley engineered for military, aviation, and aerospace applications. This advanced defence hydraulic servicing trolley is built to deliver reliable hydraulic servicing, testing, and maintenance in demanding operational environments.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/Defence Hydraulic Servicing Trolley.png"
                  width={500}
                  height={1000}
                  alt="Defence Hydraulic Servicing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The military hydraulic servicing trolley is a robust and efficient solution designed for defence hydraulic ground support equipment operations. It supports hydraulic fluid transfer, filtration, pressure control, and testing for mission-critical aircraft and defence systems.
                  </p>
                </div>
              </section>

              {/* What is Defence Hydraulic Servicing Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is Defence Hydraulic Servicing Trolley?</h3>
                  <p className="text-black">
                    A defence hydraulic service unit is a specialized hydraulic servicing trolley for defence designed to maintain and test hydraulic systems in military aircraft and equipment. It functions as a complete hydraulic servicing unit for military operations ensuring reliability and safety.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Defence Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Military-Grade Construction</h4>
                          Built as a heavy duty hydraulic service trolley for harsh defence environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Pressure Hydraulic Capability</h4>
                          Optimized for high pressure hydraulic servicing system applications in aircraft.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Function Servicing System</h4>
                          Works as a hydraulic test and servicing trolley for testing and maintenance.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Ensures clean fluid handling in hydraulic oil servicing unit operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Field-Ready Design</h4>
                          Portable and efficient for hydraulic ground support equipment aviation operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Defence Hydraulic Servicing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Defence Hydraulic Servicing Trolley to your operational needs, fluids, and environmental envelope.
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
                          <td className="px-4 py-2 border-b">High-performance hydraulic pressure system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Flow Rate</td>
                          <td className="px-4 py-2 border-b">Adjustable hydraulic flow control</td>
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
                          <td className="px-4 py-2 border-b">Heavy-duty wheels with locking mechanism</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compatibility</td>
                          <td className="px-4 py-2 border-b">Suitable for defence aircraft and industrial systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Defence Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fighter Aircraft Hydraulic Servicing Trolley</h4>
                          Designed for fighter aircraft hydraulic servicing trolley operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Military Hydraulic Service Cart</h4>
                          Compact unit for mobile military hydraulic servicing tasks.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Defence Hydraulic Servicing Trolley</h4>
                          Tailored systems based on mission-specific requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Service Unit</h4>
                          Advanced variant for aerospace and defence systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Defence Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable Mission Performance</h4>
                          Ensures consistent hydraulic system performance in defence operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reduced Maintenance Downtime</h4>
                          Improves efficiency with faster servicing and testing.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Enhanced System Safety</h4>
                          Maintains stable pressure and contamination-free operation.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Versatile Multi-System Support</h4>
                          Suitable for military aircraft, ground systems, and industrial use.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Defence Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Military Aircraft Maintenance</h4>
                          Used in aircraft hydraulic servicing trolley defence supplier operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence Ground Support Equipment</h4>
                          Essential in defence hydraulic ground support equipment systems.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace & Aviation Systems</h4>
                          Supports aviation hydraulic servicing system applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Used in industrial hydraulic servicing trolley environments.
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
                        <li>Diagnostic interface for system analysis</li>
                        <li>Safety shut-off and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures precision in hydraulic maintenance system operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Defence Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Trusted defence hydraulic servicing trolley manufacturer</li>
                        <li>Expertise in military and aerospace equipment</li>
                        <li>Custom-built defence hydraulic maintenance trolley solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven reliability in high-performance environments</li>
                        <li>Leading defence hydraulic equipment manufacturer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Defence Hydraulic Servicing Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for advanced military hydraulic servicing trolley supplier solutions. Designed for durability, precision, and high-performance hydraulic servicing in defence and aviation operations.
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