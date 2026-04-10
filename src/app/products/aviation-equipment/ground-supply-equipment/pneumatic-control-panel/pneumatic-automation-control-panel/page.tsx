import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pneumatic Automation Control Panel for Aviation | Jetsys Defence",
  description:
    "Advanced pneumatic automation control panel by Jetsys Defence for aviation and defence. PLC-based, high-performance compressed air control systems for industrial automation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/pneumatic-automation-control-panel",
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
                Pneumatic Automation Control Panel – Aviation & Defence Systems
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a cutting-edge Pneumatic Automation Control Panel engineered for aviation, aerospace, and defence environments. Our system integrates advanced pneumatic automation system capabilities with high reliability for mission-critical operations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/pneumatic-automation-control-panel.png"
                  width={500}
                  height={1000}
                  alt="Pneumatic Automation Control Panel – Aviation & Defence Systems by Jetsys Defence"
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
                    The Pneumatic Automation Control Panel is a precision-built industrial pneumatic control panel designed to manage and automate compressed air systems. This air control panel system ensures efficient control, monitoring, and operation of complex pneumatic processes.
                  </p>
                </div>
              </section>

              {/* What is Pneumatic Automation Control Panel? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Pneumatic Automation Control Panel?
                  </h2>
                  <p className="text-black mb-4">
                    A Pneumatic Automation Control Panel is an advanced automated pneumatic control system that uses PLC and electro-pneumatic technology to regulate airflow, pressure, and actuation in industrial and aviation systems. It acts as the central control unit for any compressed air control system.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Pneumatic Automation Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">PLC-Based Automation Control</h4>
                          Integrated PLC pneumatic control panel for precise automation and control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Electro Pneumatic Integration</h4>
                          High-performance electro pneumatic control panel ensures fast response and accuracy.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy Duty Industrial Design</h4>
                          Built as a heavy duty pneumatic control panel for harsh environments.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Station Control Capability</h4>
                          Supports multi station pneumatic control panel operations for complex systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Engineering</h4>
                          Fully configurable custom pneumatic control panel based on application needs.
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
                    Technical Specifications of Pneumatic Automation Control Panel
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
                        <tr>
                          <td className="px-4 py-2 border-b">Control Type</td>
                          <td className="px-4 py-2 border-b">PLC based pneumatic automation control panel</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Operation</td>
                          <td className="px-4 py-2 border-b">Electro-pneumatic automation</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Pressure Range</td>
                          <td className="px-4 py-2 border-b">High-pressure industrial compatibility</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Power Supply</td>
                          <td className="px-4 py-2 border-b">Industrial-grade electrical input</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Interface</td>
                          <td className="px-4 py-2 border-b">HMI / Digital control interface</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Material</td>
                          <td className="px-4 py-2 border-b">Corrosion-resistant metal enclosure</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Application</td>
                          <td className="px-4 py-2 border-b">Aircraft pneumatic control panel, defence, industrial automation</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">System Type</td>
                          <td className="px-4 py-2 border-b">Industrial pneumatic automation control system</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Pneumatic Automation Control Panel */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Variants of Pneumatic Automation Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Pneumatic Control Panel</h4>
                          Designed for factory and automation use with robust performance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">PLC Based Pneumatic Automation Control Panel</h4>
                          Provides programmable automation for precise system control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Electro Pneumatic Automation Control Panel</h4>
                          Combines electrical signals with pneumatic execution.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom PLC Pneumatic Control Panel</h4>
                          Tailored systems for specialized industrial and defence requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation Pneumatic Control Panel</h4>
                          Optimized for aerospace pneumatic control system and aircraft applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Pneumatic Automation Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Efficiency Automation</h4>
                          Improves productivity with automated pneumatic automation system control.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Enhanced System Reliability</h4>
                          Ensures stable performance in compressed air automation control panel systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reduced Operational Costs</h4>
                          Minimizes manual intervention and maintenance costs.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Precision Control</h4>
                          Accurate regulation of pressure and flow in pneumatic system control panel.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Scalability</h4>
                          Expandable for complex industrial automation control panel setups.
                        </li>
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
                    Applications of Pneumatic Automation Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Pneumatic Systems</h4>
                          Used in aircraft pneumatic control panel operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence Automation Systems</h4>
                          Reliable defence pneumatic control panel for mission-critical environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Control Systems</h4>
                          Supports aerospace pneumatic control system integration.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Automation</h4>
                          Widely used in pneumatic panel for industrial automation processes.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Military Systems</h4>
                          Integrated in military pneumatic automation system applications.
                        </li>
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
                  <p className="text-black">
                    The system includes advanced diagnostics for monitoring airflow, pressure, and system health. Real-time feedback via HMI enables predictive maintenance and efficient system control in any compressed air control system.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Pneumatic Automation Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Trusted pneumatic control panel manufacturer</li>
                        <li>Reliable pneumatic control panel supplier</li>
                        <li>Expertise in industrial pneumatic automation control system</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built high-performance solutions</li>
                        <li>Proven systems for aviation and defence applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Pneumatic Automation Control Panel from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Choose Jetsys Defence for advanced high performance pneumatic control panel systems designed for aviation, defence, and industrial automation. Get customized solutions for your operational needs.
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