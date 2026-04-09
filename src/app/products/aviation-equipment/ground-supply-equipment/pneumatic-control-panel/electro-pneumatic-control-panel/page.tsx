import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Electro Pneumatic Control Panel | PLC Based Pneumatic Control System | Jetsys Defence",
  description:
    "Explore Electro Pneumatic Control Panel by Jetsys Defence. High-performance electro pneumatic control system with PLC for aviation and industrial automation applications.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/pneumatic-control-panel/electro-pneumatic-control-panel",
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
                Electro Pneumatic Control Panel – Advanced Aviation Control System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers a precision-engineered Electro Pneumatic Control Panel designed for advanced aviation
                and industrial control applications. Under the Aviation Equipment – Pneumatic Control Panel category, this
                system combines electrical and pneumatic technologies to deliver accurate and reliable control performance.
                As a leading electro pneumatic control panel manufacturer, Jetsys Defence provides robust and customizable
                solutions for aviation ground operations and automation systems.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Electro Pneumatic Control Panel.png"
                  width={500}
                  height={1000}
                  alt="Electro Pneumatic Control Panel by Jetsys Defence"
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
                    The Electro Pneumatic Control Panel is an integrated system that combines electrical control mechanisms
                    with pneumatic actuation. This electro pneumatic control system ensures efficient control of air pressure,
                    flow, and mechanical operations in aviation environments.
                  </p>
                  <p className="text-black">
                    Engineered for reliability, this pneumatic electrical control panel is widely used in automated systems
                    requiring precise and responsive control.
                  </p>
                </div>
              </section>

              {/* What is Electro Pneumatic Control Panel? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Electro Pneumatic Control Panel?
                  </h2>
                  <p className="text-black mb-4">
                    An Electro Pneumatic Control Panel is a system that uses electrical signals to control pneumatic components
                    such as valves, actuators, and air distribution systems. It functions as a complete electro pneumatic
                    control panel system, enabling automated operations through controlled air pressure.
                  </p>
                  <p className="text-black">
                    This system is often integrated with PLC technology, making it a highly efficient electro pneumatic
                    control panel with PLC for modern aviation and industrial automation.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Electro Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Integrated Electrical & Pneumatic Control</h4>
                          Combines electrical logic with pneumatic actuation in a single electro pneumatic control system.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">PLC-Based Automation</h4>
                          Advanced electro pneumatic control panel with PLC for precise and automated operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Precision Control</h4>
                          Ensures accurate air pressure and flow management for sensitive applications.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Modular & Scalable Design</h4>
                          Flexible architecture for custom electro pneumatic control panel configurations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Durable Industrial Build</h4>
                          Designed as an industrial electro pneumatic control panel suitable for harsh environments.
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
                    Technical Specifications of Electro Pneumatic Control Panel
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
                        <tr><td className="px-4 py-2 border-b">Control Type</td><td className="px-4 py-2 border-b">Electro Pneumatic Control System</td></tr>
                        <tr><td className="px-4 py-2 border-b">PLC Integration</td><td className="px-4 py-2 border-b">Available (optional/custom)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Voltage Range</td><td className="px-4 py-2 border-b">As per system requirement</td></tr>
                        <tr><td className="px-4 py-2 border-b">Pneumatic Pressure Range</td><td className="px-4 py-2 border-b">Adjustable</td></tr>
                        <tr><td className="px-4 py-2 border-b">Components</td><td className="px-4 py-2 border-b">Solenoid valves, regulators, actuators</td></tr>
                        <tr><td className="px-4 py-2 border-b">Interface</td><td className="px-4 py-2 border-b">Digital / PLC-based control panel</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Short Circuit, Pressure Control</td></tr>
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
                    Variants of Electro Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>PLC-Based Electro Pneumatic Control Panel Systems</li>
                        <li>Industrial Electro Pneumatic Control Panel Units</li>
                        <li>Custom Electro Pneumatic Control Panel Solutions</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Automation-Based Electro Pneumatic Control Panels</li>
                        <li>Compact Pneumatic Electrical Control Panel Units</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants are designed for different aviation and automation requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Electro Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High precision and reliable control system</li>
                        <li>Efficient electro pneumatic automation panel performance</li>
                        <li>Reduces manual intervention through automation</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Enhances operational efficiency and system response</li>
                        <li>Customizable for specific applications</li>
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
                    Applications of Electro Pneumatic Control Panel
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
                        <li>Air pressure control and distribution systems</li>
                        <li>Manufacturing and process control applications</li>
                        <li>Testing and maintenance environments</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    This electro pneumatic control panel system is widely used in both aviation and industrial sectors.
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
                        <li>PLC-based control interface</li>
                        <li>Real-time pressure and system monitoring</li>
                        <li>Fault detection and alert system</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Performance diagnostics and system tracking</li>
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
                    Why Choose Jetsys Defence for Electro Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Trusted electro pneumatic control panel supplier</li>
                        <li>Expertise in aviation and automation systems</li>
                        <li>High-quality and durable engineering standards</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built electro pneumatic control panel system</li>
                        <li>Proven performance across industries</li>
                        <li>Strong technical support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence is a reliable electro pneumatic control panel manufacturer delivering advanced control solutions.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Electro Pneumatic Control Panel System from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Upgrade your aviation and automation systems with Jetsys Defence's Electro Pneumatic Control Panel.
                    Whether you require a custom electro pneumatic control panel or a PLC-based automation system, we provide
                    high-performance solutions tailored to your needs.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to enhance your operational efficiency with advanced control systems.
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