import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pneumatic Valve Control Panel | Automatic Valve Control System | Jetsys Defence",
  description:
    "Explore Pneumatic Valve Control Panel by Jetsys Defence. High-performance pneumatic valve control system for aviation and industrial applications with precision and reliability.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/pneumatic-valve-control-panel",
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
                Pneumatic Valve Control Panel – Advanced Valve Control System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers a high-performance Pneumatic Valve Control Panel designed for advanced aviation and
                industrial applications. Under the Aviation Equipment – Pneumatic Control Panel category, this system ensures
                precise control of pneumatic valves for efficient and reliable operations. As a trusted pneumatic valve
                control panel manufacturer, Jetsys Defence provides durable and customizable solutions for various control
                system requirements.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Pneumatic Valve Control Panel.png"
                  width={500}
                  height={1000}
                  alt="Pneumatic Valve Control Panel by Jetsys Defence"
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
                    The Pneumatic Valve Control Panel is a specialized system designed to manage and control pneumatic valves
                    through a centralized interface. This pneumatic valve control system enables efficient regulation of
                    air flow, pressure, and valve operations in aviation and industrial environments.
                  </p>
                  <p className="text-black">
                    Engineered for accuracy and performance, this valve control panel pneumatic solution enhances system
                    efficiency and automation.
                  </p>
                </div>
              </section>

              {/* What is Pneumatic Valve Control Panel? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Pneumatic Valve Control Panel?
                  </h2>
                  <p className="text-black mb-4">
                    A Pneumatic Valve Control Panel is a control system that operates pneumatic valves using air pressure
                    and control signals. It functions as a complete pneumatic valve control panel system, enabling automated
                    or manual control of valve operations.
                  </p>
                  <p className="text-black">
                    This pneumatic control panel for valves ensures precise control over airflow and system functionality
                    in critical applications.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Pneumatic Valve Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Precision Valve Control</h4>
                          Provides accurate control of airflow through an advanced pneumatic valve control system.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Automated Operation</h4>
                          Supports automatic pneumatic valve control system functionality for enhanced efficiency.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Robust Industrial Design</h4>
                          Designed as an industrial pneumatic valve control panel for demanding environments.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Centralized Control Interface</h4>
                          User-friendly control panel for efficient monitoring and operation.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Customizable Configurations</h4>
                          Supports custom pneumatic valve control panel solutions for specific applications.
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
                    Technical Specifications of Pneumatic Valve Control Panel
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
                        <tr><td className="px-4 py-2 border-b">Control Type</td><td className="px-4 py-2 border-b">Pneumatic Valve Control System</td></tr>
                        <tr><td className="px-4 py-2 border-b">Operation Mode</td><td className="px-4 py-2 border-b">Manual / Automatic</td></tr>
                        <tr><td className="px-4 py-2 border-b">Pressure Range</td><td className="px-4 py-2 border-b">Adjustable based on system requirements</td></tr>
                        <tr><td className="px-4 py-2 border-b">Components</td><td className="px-4 py-2 border-b">Pneumatic valves, regulators, actuators</td></tr>
                        <tr><td className="px-4 py-2 border-b">Interface</td><td className="px-4 py-2 border-b">Control panel with indicators and switches</td></tr>
                        <tr><td className="px-4 py-2 border-b">Automation</td><td className="px-4 py-2 border-b">Optional integration with control systems</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overpressure, System Safety Controls</td></tr>
                        <tr><td className="px-4 py-2 border-b">Build</td><td className="px-4 py-2 border-b">Industrial-grade enclosure</td></tr>
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
                    Variants of Pneumatic Valve Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Industrial Pneumatic Valve Control Panel Systems</li>
                        <li>Automatic Pneumatic Valve Control System Units</li>
                        <li>Custom Pneumatic Valve Control Panel Solutions</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Compact Valve Control Panel Pneumatic Units</li>
                        <li>Multi-Valve Control Panel Systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants are designed for different operational and system requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Pneumatic Valve Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Precise control of pneumatic valve operations</li>
                        <li>Improved efficiency through automation</li>
                        <li>Reliable pneumatic valve control panel system</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reduced manual intervention</li>
                        <li>Customizable solutions for diverse applications</li>
                        <li>Durable and low-maintenance system</li>
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
                    Applications of Pneumatic Valve Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aviation ground support systems</li>
                        <li>Aircraft pneumatic control panel for ground operations</li>
                        <li>Industrial automation systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Air pressure and valve regulation systems</li>
                        <li>Manufacturing and process industries</li>
                        <li>Maintenance and testing environments</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This pneumatic valve control panel is widely used in aviation and industrial sectors.
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
                        <li>Real-time system monitoring</li>
                        <li>Pressure and valve status indicators</li>
                        <li>Fault detection and alert systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Performance tracking</li>
                        <li>Optional integration with advanced control systems</li>
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
                    Why Choose Jetsys Defence for Pneumatic Valve Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Trusted pneumatic valve control panel supplier</li>
                        <li>Expertise in aviation and pneumatic systems</li>
                        <li>High-quality and durable engineering</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built pneumatic valve control panel system</li>
                        <li>Proven performance across industries</li>
                        <li>Strong technical support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence is a reliable pneumatic valve control panel manufacturer delivering precision-engineered solutions.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Pneumatic Valve Control Panel System from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Enhance your control systems with Jetsys Defence&apos;s Pneumatic Valve Control Panel. Whether you require
                    a custom pneumatic valve control panel or an advanced automatic pneumatic valve control system, we provide
                    high-performance solutions tailored to your needs.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to upgrade your operational efficiency.
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