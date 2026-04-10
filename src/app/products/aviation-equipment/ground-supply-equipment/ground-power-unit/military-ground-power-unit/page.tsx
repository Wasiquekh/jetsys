import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Military Ground Power Unit | Defense Aviation GPU | Rugged Aircraft GPU | Jetsys Defence",
  description:
    "Explore Military Ground Power Unit by Jetsys Defence – rugged defense aviation GPU designed for military aircraft ground operations. Reliable and high-performance aircraft power systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/military-ground-power-unit",
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
                Military Ground Power Unit – Rugged Defense Aviation GPU by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-performance Military Ground Power Unit, engineered to meet the demanding
                requirements of defense aviation. As part of our Runway Spares category, this advanced defense aviation GPU
                delivers reliable and stable power for military aircraft operations. Our military aircraft ground power unit
                is built with rugged construction and advanced technology, ensuring dependable performance in extreme
                environments.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/military-ground-power-unit.png"
                  width={500}
                  height={1000}
                  alt="Military Ground Power Unit by Jetsys Defence"
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
                    The Military Ground Power Unit is a specialized power system designed to supply electrical energy to
                    military aircraft during ground operations. This rugged ground power unit ensures uninterrupted power
                    for avionics, diagnostics, and mission-critical systems.
                  </p>
                  <p className="text-black">
                    Designed for field deployment and airbase operations, this defense aviation GPU supports a wide range
                    of military aircraft platforms.
                  </p>
                </div>
              </section>

              {/* What is Military Ground Power Unit? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Military Ground Power Unit?
                  </h2>
                  <p className="text-black mb-4">
                    A Military Ground Power Unit is an external electrical system used to provide power to military aircraft
                    when engines are off. It acts as a reliable military aircraft ground power unit for maintenance, testing,
                    and operational readiness.
                  </p>
                  <p className="text-black">
                    This defense aviation GPU ensures stable output and protects sensitive onboard electronics in high-demand
                    environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Military Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged Military Design</h4>
                          Built to withstand harsh environments, making it a reliable rugged ground power unit for defense operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Reliability Output</h4>
                          Provides stable and consistent power required for sensitive military avionics systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Aircraft Compatibility</h4>
                          Supports various aircraft types with adaptable power configurations.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobility & Field Deployment</h4>
                          Portable and towable configurations for rapid deployment across airbases.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Safety Systems</h4>
                          Integrated protection against overload, short circuit, and voltage fluctuations.
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
                    Technical Specifications of Military Ground Power Unit
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
                        <tr><td className="px-4 py-2 border-b">Power Capacity</td><td className="px-4 py-2 border-b">Customizable for military aircraft</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled / Heavy-duty ventilation</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Portable / Towable / Skid-mounted</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Overvoltage, Short Circuit</td></tr>
                        <tr><td className="px-4 py-2 border-b">Build</td><td className="px-4 py-2 border-b">Military-grade rugged enclosure</td></tr>
                        <tr><td className="px-4 py-2 border-b">Control System</td><td className="px-4 py-2 border-b">Digital monitoring interface</td></tr>
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
                    Variants of Military Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Portable Military Aircraft Ground Power Unit</li>
                        <li>Towable Defense Aviation GPU Systems</li>
                        <li>Fixed Military Ground Power Units</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Hybrid Rugged Ground Power Unit Solutions</li>
                        <li>Custom Military GPU Systems for Specialized Aircraft</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants ensure flexibility for diverse defense aviation requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Military Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reliable military aircraft ground power unit for mission readiness</li>
                        <li>Supports critical avionics and onboard systems</li>
                        <li>Reduces dependency on aircraft engines during ground operations</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Enhances operational efficiency in military airbases</li>
                        <li>Designed for extreme environmental conditions</li>
                        <li>Long-lasting and low-maintenance rugged ground power unit</li>
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
                    Applications of Military Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Military airbase ground operations</li>
                        <li>Aircraft maintenance and servicing</li>
                        <li>Pre-flight and mission readiness checks</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Avionics testing and diagnostics</li>
                        <li>Field deployment operations</li>
                        <li>Defense aviation support systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This defense aviation GPU is essential for maintaining operational readiness of military aircraft.
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
                        <li>Digital control panel for real-time monitoring</li>
                        <li>Fault detection and alert systems</li>
                        <li>Performance tracking and diagnostics</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>User-friendly interface for operators</li>
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
                    Why Choose Jetsys Defence for Military Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Expertise in defense aviation GPU systems</li>
                        <li>High-quality military aircraft ground power unit solutions</li>
                        <li>Rugged and reliable engineering standards</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Customizable configurations for military needs</li>
                        <li>Proven performance in demanding environments</li>
                        <li>Strong after-sales support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence delivers dependable rugged ground power unit solutions tailored for defense aviation.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Military Ground Power Unit from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Enhance your defense aviation operations with Jetsys Defence&apos;s Military Ground Power Unit. Whether you
                    require a portable defense aviation GPU or a complete military aircraft ground power unit system, we
                    provide high-performance solutions designed for reliability and durability.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to upgrade your military ground power capabilities.
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