import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Electric Ground Power Unit (eGPU) | Battery Ground Power Unit Aircraft | Jetsys Defence",
  description:
    "Discover Electric Ground Power Unit (eGPU) by Jetsys Defence – efficient battery ground power unit for aircraft. Reliable, eco-friendly aircraft ground power system for modern aviation operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/electric-ground-power-unit",
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
                Electric Ground Power Unit (eGPU) – Advanced Aircraft Ground Power System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a next-generation Electric Ground Power Unit (eGPU) designed to deliver clean and
                efficient ground power supply aircraft solutions. Under our Runway Spares category, this advanced eGPU
                aircraft system is engineered for modern aviation needs where sustainability, efficiency, and performance
                are critical. Our battery ground power unit technology eliminates dependency on fuel-based systems, making
                Jetsys Defence a preferred choice for high-performance ground aircraft power solutions.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/electric-ground-power-unit.png"
                  width={500}
                  height={1000}
                  alt="Electric Ground Power Unit (eGPU) by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Product Overview
                  </h2>
                  <p className="text-black mb-4">
                    The Electric Ground Power Unit (eGPU) is a battery-powered system that provides reliable electrical power
                    to aircraft during ground operations. This external power unit aircraft solution is ideal for airports,
                    hangars, and maintenance facilities looking to reduce emissions and operating costs.
                  </p>
                  <p className="text-black">
                    As a modern alternative to traditional ground power unit aircraft, the eGPU ensures silent, eco-friendly,
                    and efficient performance.
                  </p>
                </div>
              </section>

              {/* What is Electric Ground Power Unit (eGPU)? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Electric Ground Power Unit (eGPU)?
                  </h2>
                  <p className="text-black mb-4">
                    An Electric Ground Power Unit (eGPU) is an advanced ground power unit that uses battery-based energy
                    storage to supply electrical power to aircraft when engines are off. It acts as a reliable ground power
                    supply aircraft system for avionics, lighting, and onboard systems.
                  </p>
                  <p className="text-black">
                    This battery ground power unit is widely used as an external power unit aircraft, supporting both civil
                    and military aviation operations.
                  </p>
                </div>
              </section>

              {/* Key Features of Electric Ground Power Unit (eGPU) */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Electric Ground Power Unit (eGPU)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Zero Emission Operation</h4>
                          Eco-friendly electric ground power unit eliminates fuel usage and reduces carbon footprint.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Silent Performance</h4>
                          Noise-free operation ideal for airport environments and indoor hangar use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High-Efficiency Battery System</h4>
                          Advanced lithium battery technology ensures long operational hours for eGPU aircraft applications.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fast Charging Capability</h4>
                          Quick recharge cycles enhance operational efficiency of the battery ground power unit.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Smart Power Management</h4>
                          Optimized output ensures stable ground aircraft power without voltage fluctuations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Specifications of Electric Ground Power Unit (eGPU)
                  </h2>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                         </tr>
                      </thead>
                      <tbody>
                        <tr><td className="px-4 py-2 border-b">Output Type</td><td className="px-4 py-2 border-b">AC / DC (as per aircraft requirements)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Power Capacity</td><td className="px-4 py-2 border-b">Customizable (kVA/kW based)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Battery Type</td><td className="px-4 py-2 border-b">Lithium-ion / Advanced battery system</td></tr>
                        <tr><td className="px-4 py-2 border-b">Charging Time</td><td className="px-4 py-2 border-b">Fast charging supported</td></tr>
                        <tr><td className="px-4 py-2 border-b">Operating Mode</td><td className="px-4 py-2 border-b">Fully electric</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Towable / Portable / Fixed ground power unit</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled / Intelligent thermal management</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Short Circuit, Battery Protection</td></tr>
                        <tr><td className="px-4 py-2 border-b">Control Interface</td><td className="px-4 py-2 border-b">Digital display panel</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Electric Ground Power Unit (eGPU) */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Variants of Electric Ground Power Unit (eGPU)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Portable Battery Ground Power Unit</li>
                        <li>Towable Electric Ground Power Unit</li>
                        <li>Fixed Ground Power Unit (eGPU)</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-Capacity Airport Ground Power Unit Aircraft Systems</li>
                        <li>Compact eGPU Aircraft Units for Small Aircraft</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These types of ground power unit are designed to meet diverse aviation operational requirements.
                  </p>
                </div>
              </section>

              {/* Benefits of Electric Ground Power Unit (eGPU) */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Electric Ground Power Unit (eGPU)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reduces fuel consumption and operational costs</li>
                        <li>Environment-friendly alternative to diesel GPUs</li>
                        <li>Low maintenance compared to traditional ground power unit aircraft</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Silent operation enhances airport working conditions</li>
                        <li>Improves aircraft turnaround efficiency</li>
                        <li>Reliable and consistent ground power supply aircraft</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Electric Ground Power Unit (eGPU)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport ground handling operations</li>
                        <li>Aircraft maintenance and servicing</li>
                        <li>Hangar operations</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Military airbase ground power systems</li>
                        <li>Pre-flight checks and avionics testing</li>
                        <li>Fixed and mobile in ground power unit operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Control & Diagnostics
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Intelligent digital control panel</li>
                        <li>Battery status monitoring system</li>
                        <li>Real-time diagnostics and fault alerts</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Energy consumption tracking</li>
                        <li>Remote monitoring capability (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Electric Ground Power Unit (eGPU)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Expertise in advanced ground aircraft power systems</li>
                        <li>Reliable and durable aviation-grade design</li>
                        <li>Competitive aircraft ground power unit price</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built solutions for diverse aircraft types</li>
                        <li>Proven performance in aviation and defence sectors</li>
                        <li>Strong after-sales support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence delivers cutting-edge electric ground power unit solutions tailored for modern aviation.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Electric Ground Power Unit (eGPU) from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Enhance your aviation operations with Jetsys Defence's Electric Ground Power Unit (eGPU). Whether you need
                    a battery ground power unit, fixed ground power unit, or portable solution, we provide high-performance
                    systems designed for efficiency and sustainability.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to get the best aircraft ground power unit price and upgrade your ground
                    power supply aircraft system.
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