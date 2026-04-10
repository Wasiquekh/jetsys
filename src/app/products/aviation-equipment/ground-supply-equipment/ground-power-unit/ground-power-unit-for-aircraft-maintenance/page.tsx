import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Ground Power Unit for Aircraft Maintenance | GPU for Avionics Testing | Jetsys Defence",
  description:
    "High-performance Ground Power Unit for Aircraft Maintenance by Jetsys Defence. Reliable aircraft maintenance power supply for avionics testing and ground operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/ground-power-unit-for-aircraft-maintenance",
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
                Ground Power Unit for Aircraft Maintenance – Reliable Avionics Testing Power Unit by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a precision-engineered Ground Power Unit for Aircraft Maintenance, designed to
                deliver stable and efficient aircraft maintenance power supply for aviation environments. As part of our
                Runway Spares category, this advanced GPU for aircraft maintenance ensures safe and uninterrupted power
                during servicing and inspection. Our systems are trusted for delivering accurate and reliable avionics
                testing power unit performance across civil and military aviation sectors.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/H1 Ground Power Unit for Aircraft Maintenance.png"
                  width={500}
                  height={1000}
                  alt="Ground Power Unit for Aircraft Maintenance by Jetsys Defence"
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
                    The Ground Power Unit for Aircraft Maintenance is a specialized system that provides consistent electrical
                    power to aircraft during maintenance, testing, and repair operations. This aircraft maintenance power
                    supply is essential for powering avionics systems without relying on onboard engines.
                  </p>
                  <p className="text-black">
                    Designed for precision and reliability, this GPU for aircraft maintenance supports hangar operations,
                    workshops, and airfield maintenance activities.
                  </p>
                </div>
              </section>

              {/* What is Ground Power Unit for Aircraft Maintenance? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Ground Power Unit for Aircraft Maintenance?
                  </h2>
                  <p className="text-black mb-4">
                    A Ground Power Unit for Aircraft Maintenance is an external electrical system used to supply power to
                    aircraft systems while on the ground. It functions as a dedicated avionics testing power unit, enabling
                    technicians to perform diagnostics, repairs, and system checks efficiently.
                  </p>
                  <p className="text-black">
                    This aircraft maintenance power supply ensures stable voltage and frequency, protecting sensitive
                    avionics and onboard electronics.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Ground Power Unit for Aircraft Maintenance
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Precision Power Output</h4>
                          Delivers stable and regulated output ideal for avionics testing power unit applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-System Compatibility</h4>
                          Supports various aircraft systems, making it a versatile GPU for aircraft maintenance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Low Ripple & Noise</h4>
                          Ensures clean power supply critical for sensitive electronic diagnostics.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Compact & Mobile Design</h4>
                          Available in portable configurations for flexible maintenance operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Safety Protection</h4>
                          Equipped with overload, short circuit, and thermal protection mechanisms.
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
                    Technical Specifications of Ground Power Unit for Aircraft Maintenance
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
                        <tr><td className="px-4 py-2 border-b">Output Type</td><td className="px-4 py-2 border-b">AC / DC (as required for maintenance operations)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Voltage Range</td><td className="px-4 py-2 border-b">28.5V DC / 115-200V AC (configurable)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Frequency</td><td className="px-4 py-2 border-b">400 Hz (for AC systems)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Power Capacity</td><td className="px-4 py-2 border-b">Customizable</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Portable / Towable</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Overvoltage, Short Circuit</td></tr>
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
                    Variants of Ground Power Unit for Aircraft Maintenance
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Portable GPU for Aircraft Maintenance</li>
                        <li>Hangar-Based Aircraft Maintenance Power Supply Units</li>
                        <li>Avionics Testing Power Unit Systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Multi-Output Ground Power Units for Maintenance</li>
                        <li>Custom Maintenance GPU Systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants ensure adaptability for different aircraft maintenance requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Ground Power Unit for Aircraft Maintenance
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Provides reliable aircraft maintenance power supply</li>
                        <li>Enhances safety during avionics testing</li>
                        <li>Reduces dependency on aircraft engines</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Improves maintenance efficiency and turnaround time</li>
                        <li>Protects sensitive onboard electronics</li>
                        <li>Cost-effective solution for maintenance operations</li>
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
                    Applications of Ground Power Unit for Aircraft Maintenance
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft maintenance and repair operations</li>
                        <li>Avionics testing and diagnostics</li>
                        <li>Hangar and workshop operations</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Pre-flight system inspections</li>
                        <li>Military aircraft maintenance</li>
                        <li>Aircraft electrical system testing</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This GPU for aircraft maintenance is essential for ensuring accurate and efficient servicing.
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
                        <li>Digital display for voltage and current monitoring</li>
                        <li>Real-time diagnostics and fault alerts</li>
                        <li>User-friendly control interface</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>System performance tracking</li>
                        <li>Optional remote monitoring capability</li>
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
                    Why Choose Jetsys Defence for Ground Power Unit for Aircraft Maintenance
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Expertise in aircraft maintenance power supply systems</li>
                        <li>High-precision engineering for avionics testing</li>
                        <li>Customizable solutions for diverse aircraft types</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reliable performance in aviation and defence sectors</li>
                        <li>Competitive pricing and long-term durability</li>
                        <li>Strong after-sales support</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence delivers dependable GPU for aircraft maintenance solutions tailored for modern aviation requirements.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Ground Power Unit for Aircraft Maintenance from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Enhance your aircraft servicing capabilities with Jetsys Defence&apos;s Ground Power Unit for Aircraft Maintenance.
                    Whether you require a portable avionics testing power unit or a complete aircraft maintenance power supply
                    system, we offer high-performance solutions built for precision and reliability.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to upgrade your aviation maintenance operations.
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