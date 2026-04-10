import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Ground Power Unit for Airports | Airport Ground Power Unit System | Jetsys Defence",
  description:
    "High-performance Ground Power Unit for Airports by Jetsys Defence. Reliable airport ground power unit and aircraft stand power supply for efficient aviation operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit-for-airports",
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
                Ground Power Unit for Airports – Advanced Airport Ground Power System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a high-efficiency Ground Power Unit for Airports, designed to deliver reliable and
                continuous airport ground power unit solutions for modern aviation infrastructure. As part of our Runway
                Spares category, this advanced system ensures stable aircraft stand power supply for seamless airport
                operations. Our expertise in ground power system airport solutions positions Jetsys Defence as a trusted
                provider for civil and military aviation environments.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/ground-power-unit-for-airports.png"
                  width={500}
                  height={1000}
                  alt="Ground Power Unit for Airports by Jetsys Defence"
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
                    The Ground Power Unit for Airports is a critical system used to supply electrical power to aircraft
                    parked at terminals, stands, and gates. This airport ground power unit supports aircraft systems during
                    boarding, servicing, and maintenance without relying on onboard power sources.
                  </p>
                  <p className="text-black">
                    Engineered for high-demand airport environments, this ground power system airport ensures operational
                    efficiency, energy savings, and reduced emissions.
                  </p>
                </div>
              </section>

              {/* What is Ground Power Unit for Airports? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Ground Power Unit for Airports?
                  </h2>
                  <p className="text-black mb-4">
                    A Ground Power Unit for Airports is an external electrical system that provides power to aircraft while
                    they are stationed at airport stands or gates. It acts as a reliable aircraft stand power supply, supporting
                    avionics, cabin systems, and maintenance operations.
                  </p>
                  <p className="text-black">
                    This airport ground power unit is essential for ensuring smooth and efficient ground handling processes.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Ground Power Unit for Airports
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Continuous Power Supply</h4>
                          Provides uninterrupted ground power system airport support for all aircraft operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Load Capacity</h4>
                          Designed to handle multiple aircraft requirements with stable aircraft stand power supply.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Energy Efficient Operation</h4>
                          Optimized power delivery reduces operational costs and energy consumption.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged Airport Design</h4>
                          Built to withstand heavy-duty airport conditions and continuous usage.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Flexible Integration</h4>
                          Compatible with various airport infrastructures including gates and remote stands.
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
                    Technical Specifications of Ground Power Unit for Airports
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
                        <tr><td className="px-4 py-2 border-b">Output Power</td><td className="px-4 py-2 border-b">400 Hz AC / 28.5V DC (configurable)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Voltage Range</td><td className="px-4 py-2 border-b">115/200 V AC</td></tr>
                        <tr><td className="px-4 py-2 border-b">Frequency</td><td className="px-4 py-2 border-b">400 Hz</td></tr>
                        <tr><td className="px-4 py-2 border-b">Power Capacity</td><td className="px-4 py-2 border-b">Customizable for airport operations</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled / Forced ventilation</td></tr>
                        <tr><td className="px-4 py-2 border-b">Installation Type</td><td className="px-4 py-2 border-b">Mobile / Fixed</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Overvoltage, Short Circuit</td></tr>
                        <tr><td className="px-4 py-2 border-b">Control System</td><td className="px-4 py-2 border-b">Digital interface with monitoring</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Variants of Ground Power Unit for Airports
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Mobile Airport Ground Power Unit</li>
                        <li>Fixed Ground Power System Airport</li>
                        <li>Bridge Mounted Aircraft Stand Power Supply Systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Centralized Airport Ground Power Unit Systems</li>
                        <li>Hybrid Ground Power Units for Airports</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants provide flexibility for different airport layouts and operational requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Ground Power Unit for Airports
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Ensures reliable aircraft stand power supply</li>
                        <li>Reduces aircraft fuel consumption and emissions</li>
                        <li>Improves airport operational efficiency</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Minimizes dependency on onboard power systems</li>
                        <li>Enhances passenger comfort during boarding</li>
                        <li>Cost-effective long-term airport ground power unit solution</li>
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
                    Applications of Ground Power Unit for Airports
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport terminal gate operations</li>
                        <li>Aircraft stand and apron power supply</li>
                        <li>Ground handling and servicing</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft maintenance and inspection</li>
                        <li>Military and civil aviation airports</li>
                        <li>Remote stand power solutions</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This ground power system airport is essential for modern airport infrastructure.
                  </p>
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
                        <li>Digital control panel for real-time data</li>
                        <li>Fault detection and alert system</li>
                        <li>Power usage monitoring</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Remote diagnostics capability</li>
                        <li>Automated safety shutdown systems</li>
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
                    Why Choose Jetsys Defence for Ground Power Unit for Airports
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Expertise in airport ground power unit systems</li>
                        <li>Reliable and durable aviation-grade products</li>
                        <li>Customizable solutions for different airport needs</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Competitive pricing with long-term value</li>
                        <li>Proven performance in aviation and defence sectors</li>
                        <li>Dedicated support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence delivers advanced ground power system airport solutions built for performance and reliability.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Ground Power Unit for Airports from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Upgrade your airport operations with Jetsys Defence&apos;s Ground Power Unit for Airports. Whether you need
                    a fixed ground power system airport or a mobile aircraft stand power supply, we offer tailored solutions
                    designed for maximum efficiency.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to enhance your airport ground power unit infrastructure.
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