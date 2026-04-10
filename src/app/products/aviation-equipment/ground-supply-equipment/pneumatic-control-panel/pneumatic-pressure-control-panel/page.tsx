import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pneumatic Pressure Control Panel | Air Pressure Control System | Jetsys Defence",
  description:
    "Discover Pneumatic Pressure Control Panel by Jetsys Defence. High-performance pneumatic pressure control system for aviation and industrial applications with precise air pressure regulation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/pneumatic-pressure-control-panel",
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
                Pneumatic Pressure Control Panel – Advanced Air Pressure Control System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers a high-performance Pneumatic Pressure Control Panel designed for precision air pressure
                management in aviation and industrial environments. Under the Aviation Equipment – Pneumatic Control Panel
                category, this system ensures accurate and reliable pneumatic pressure control system functionality. As a
                trusted pneumatic pressure control panel manufacturer, Jetsys Defence delivers durable and customizable
                solutions tailored to meet diverse operational requirements.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Pneumatic Pressure Control Panel.png"
                  width={500}
                  height={1000}
                  alt="Pneumatic Pressure Control Panel by Jetsys Defence"
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
                    The Pneumatic Pressure Control Panel is an advanced system engineered to regulate and control air pressure
                    within pneumatic systems. This pneumatic pressure control panel system provides stable pressure output,
                    ensuring efficient operation of connected equipment.
                  </p>
                  <p className="text-black">
                    Designed for performance and reliability, this air pressure control panel is widely used in aviation
                    ground operations and industrial automation systems.
                  </p>
                </div>
              </section>

              {/* What is Pneumatic Pressure Control Panel? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Pneumatic Pressure Control Panel?
                  </h2>
                  <p className="text-black mb-4">
                    A Pneumatic Pressure Control Panel is a control system that manages and regulates compressed air pressure
                    using precision components such as regulators, valves, and sensors. It functions as a complete pneumatic
                    pressure control system, ensuring controlled airflow and pressure stability.
                  </p>
                  <p className="text-black">
                    This pneumatic pressure regulation panel is essential for applications requiring consistent and accurate
                    air pressure.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Pneumatic Pressure Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Precision Pressure Regulation</h4>
                          Ensures accurate control through an advanced pneumatic pressure control system.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Automated Control Functionality</h4>
                          Supports automatic pneumatic pressure control system for enhanced efficiency.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial-Grade Construction</h4>
                          Designed as an industrial pneumatic pressure control panel for demanding environments.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Centralized Control Interface</h4>
                          User-friendly air pressure control panel for monitoring and operation.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Customizable Design</h4>
                          Supports custom pneumatic pressure control panel configurations for specific needs.
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
                    Technical Specifications of Pneumatic Pressure Control Panel
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
                        <tr><td className="px-4 py-2 border-b">Control Type</td><td className="px-4 py-2 border-b">Pneumatic Pressure Control System</td></tr>
                        <tr><td className="px-4 py-2 border-b">Pressure Range</td><td className="px-4 py-2 border-b">Adjustable based on application</td></tr>
                        <tr><td className="px-4 py-2 border-b">Components</td><td className="px-4 py-2 border-b">Pressure regulators, valves, gauges, sensors</td></tr>
                        <tr><td className="px-4 py-2 border-b">Operation Mode</td><td className="px-4 py-2 border-b">Manual / Automatic</td></tr>
                        <tr><td className="px-4 py-2 border-b">Interface</td><td className="px-4 py-2 border-b">Control panel with indicators and controls</td></tr>
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
                    Variants of Pneumatic Pressure Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Industrial Pneumatic Pressure Control Panel Systems</li>
                        <li>Automatic Pneumatic Pressure Control System Units</li>
                        <li>Custom Pneumatic Pressure Control Panel Solutions</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Compact Pneumatic Pressure Regulation Panels</li>
                        <li>High-Precision Air Pressure Control Panel Systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants are designed to meet different operational and application requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Pneumatic Pressure Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Accurate and reliable pneumatic pressure control system</li>
                        <li>Improved operational efficiency</li>
                        <li>Consistent air pressure regulation</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reduced manual intervention</li>
                        <li>Customizable solutions for various applications</li>
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
                    Applications of Pneumatic Pressure Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aviation ground support systems</li>
                        <li>Aircraft pneumatic control panel for ground operations</li>
                        <li>Industrial automation and process control</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Air pressure distribution and regulation systems</li>
                        <li>Manufacturing and testing environments</li>
                        <li>Maintenance and servicing operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This pneumatic pressure control panel system is essential for both aviation and industrial applications.
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
                        <li>Real-time pressure monitoring</li>
                        <li>System performance indicators</li>
                        <li>Fault detection and alert systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Pressure regulation diagnostics</li>
                        <li>Optional integration with automated systems</li>
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
                    Why Choose Jetsys Defence for Pneumatic Pressure Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Trusted pneumatic pressure control panel supplier</li>
                        <li>Expertise in aviation and pneumatic systems</li>
                        <li>High-quality and durable engineering standards</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built pneumatic pressure control panel system</li>
                        <li>Proven performance across industries</li>
                        <li>Strong technical support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence is a reliable pneumatic pressure control panel manufacturer delivering precision-engineered solutions.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Pneumatic Pressure Control Panel System from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Enhance your operations with Jetsys Defence&apos;s Pneumatic Pressure Control Panel. Whether you require
                    a custom pneumatic pressure control panel or a fully automated pneumatic pressure control system, we
                    provide high-performance solutions tailored to your needs.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to upgrade your air pressure control systems.
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