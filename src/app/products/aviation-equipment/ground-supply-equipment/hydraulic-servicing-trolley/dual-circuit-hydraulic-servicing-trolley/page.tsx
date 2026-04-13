import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Dual Circuit Hydraulic Servicing Trolley for Aircraft | Jetsys Defence",
  description:
    "High-performance dual circuit hydraulic servicing trolley by Jetsys Defence for aviation, defence, and industrial use. Reliable dual hydraulic service unit for testing, maintenance, and fluid control.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/dual-circuit-hydraulic-servicing-trolley",
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
                Dual Circuit Hydraulic Servicing Trolley – Advanced Aviation & Industrial Hydraulic System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a high-performance Dual Circuit Hydraulic Servicing Trolley engineered for aviation, aerospace, defence, and industrial applications. This advanced dual circuit hydraulic servicing trolley ensures efficient servicing of dual hydraulic systems with precision and reliability.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/Dual Circuit Hydraulic Servicing Trolley.png"
                  width={500}
                  height={1000}
                  alt="Dual Circuit Hydraulic Servicing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The hydraulic servicing trolley dual circuit is designed to handle two independent hydraulic systems simultaneously. It is widely used in aviation dual hydraulic servicing system, industrial environments, and hydraulic ground support dual circuit system operations where dual-line hydraulic systems are required.
                  </p>
                </div>
              </section>

              {/* What is Dual Circuit Hydraulic Servicing Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is Dual Circuit Hydraulic Servicing Trolley?</h3>
                  <p className="text-black">
                    A dual circuit hydraulic service unit is a specialized hydraulic servicing unit dual system designed to service, test, and maintain two hydraulic circuits independently or simultaneously. It acts as a complete dual circuit hydraulic oil servicing system for high-performance applications.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Dual Circuit Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Dual-Line Hydraulic System Support</h4>
                          Designed as a dual line hydraulic service trolley to operate two circuits independently.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Pressure Performance</h4>
                          Optimized as a high pressure dual circuit hydraulic unit for demanding operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Independent Control Mechanism</h4>
                          Allows precise control of both circuits in hydraulic servicing trolley for dual system.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile & Heavy-Duty Design</h4>
                          Robust dual circuit hydraulic trolley for easy mobility and durability.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Ensures clean hydraulic fluid handling in dual circuit hydraulic servicing trolley operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Dual Circuit Hydraulic Servicing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Dual Circuit Hydraulic Servicing Trolley to your operational needs, fluids, and environmental envelope.
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
                          <td className="px-4 py-2 border-b">Dual Circuit Operation</td>
                          <td className="px-4 py-2 border-b">Independent or simultaneous circuit control</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Operating Pressure</td>
                          <td className="px-4 py-2 border-b">High-pressure dual system compatibility</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Flow Rate</td>
                          <td className="px-4 py-2 border-b">Adjustable for both circuits</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Filtration</td>
                          <td className="px-4 py-2 border-b">Multi-stage filtration for both hydraulic lines</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Reservoir</td>
                          <td className="px-4 py-2 border-b">Dual tank or shared tank configuration</td>
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
                          <td className="px-4 py-2 border-b">Suitable for aircraft and industrial dual systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Dual Circuit Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Dual Circuit Hydraulic Servicing Trolley</h4>
                          Designed for aviation and fighter aircraft hydraulic servicing trolley dual system operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Dual Circuit Hydraulic System Trolley</h4>
                          Used in heavy industrial hydraulic servicing applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Dual Circuit Hydraulic Servicing Trolley</h4>
                          Tailored configurations based on operational requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Dual Hydraulic Service Unit</h4>
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Dual Circuit Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Increased Efficiency</h4>
                          Service two hydraulic systems simultaneously, reducing downtime.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improved System Reliability</h4>
                          Ensures accurate pressure and contamination-free operation.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost Optimization</h4>
                          Reduces equipment and operational costs by combining dual systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Versatile Multi-System Usage</h4>
                          Suitable for aviation, industrial, and defence hydraulic systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Dual Circuit Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Hydraulic Systems</h4>
                          Used in aircraft dual circuit hydraulic servicing trolley operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Aviation</h4>
                          Ideal for defence dual circuit hydraulic trolley applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Supports industrial dual circuit hydraulic system maintenance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Used in hydraulic ground support dual circuit system operations.
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
                        <li>Dual pressure monitoring gauges</li>
                        <li>Independent flow control valves</li>
                        <li>Hydraulic testing modules for both circuits</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Diagnostic interface for system performance</li>
                        <li>Safety shut-off and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures precision in hydraulic dual circuit service equipment operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Dual Circuit Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Leading dual circuit hydraulic servicing trolley manufacturer</li>
                        <li>Advanced engineering for aviation and industrial systems</li>
                        <li>Custom-built hydraulic servicing trolley with dual circuit</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven reliability in aerospace and defence environments</li>
                        <li>Trusted dual circuit hydraulic trolley supplier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Dual Circuit Hydraulic Servicing Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for high-performance dual circuit hydraulic servicing trolley supplier solutions. Designed for precision, durability, and efficiency in dual hydraulic system servicing and maintenance.
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