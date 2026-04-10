import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "PLC Based Pneumatic Control Panel | PLC Pneumatic Control System | Jetsys Defence",
  description:
    "Discover PLC Based Pneumatic Control Panel by Jetsys Defence. High-performance PLC pneumatic control system for aviation and industrial automation with precision and reliability.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/plc-based-pneumatic-control-panel",
  },
};

export default function Page() {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                PLC Based Pneumatic Control Panel – Advanced Automated Pneumatic Control System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-performance PLC Based Pneumatic Control Panel designed for advanced
                automation in aviation and industrial applications. Under the Aviation Equipment – Pneumatic Control Panel
                category, this system delivers intelligent control using a reliable PLC pneumatic control system. As a
                trusted PLC pneumatic control panel manufacturer, Jetsys Defence offers durable and customizable solutions
                for precision-controlled pneumatic operations.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/PLC Based Pneumatic Control Panel.png"
                  width={500}
                  height={1000}
                  alt="PLC Based Pneumatic Control Panel by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Product Overview
                </h2>
                <p className="text-black mb-4">
                  The PLC Based Pneumatic Control Panel is an advanced automation system that integrates programmable
                  logic control with pneumatic systems. This pneumatic control panel with PLC enables accurate control
                  of air pressure, flow, and sequencing for complex operations.
                </p>
                <p className="text-black">
                  Engineered for efficiency, this PLC controlled pneumatic system enhances operational accuracy and
                  automation in aviation ground support and industrial processes.
                </p>
              </div>

              {/* What is PLC Based Pneumatic Control Panel? */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  What is PLC Based Pneumatic Control Panel?
                </h2>
                <p className="text-black mb-4">
                  A PLC Based Pneumatic Control Panel is a system that uses a programmable logic controller (PLC) to
                  manage pneumatic components such as valves, actuators, and regulators. It functions as a complete
                  PLC based pneumatic control panel system, allowing automated and programmable control of pneumatic
                  operations.
                </p>
                <p className="text-black">
                  This automated pneumatic control system with PLC ensures consistent performance, improved reliability,
                  and efficient system operation.
                </p>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Key Features of PLC Based Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>
                        <h4 className="font-bold text-[#5C5649]">PLC-Based Automation Control</h4>
                        Advanced PLC pneumatic control system for precise and programmable operation.
                      </li>
                      <li>
                        <h4 className="font-bold text-[#5C5649]">High Accuracy & Repeatability</h4>
                        Ensures consistent performance in complex pneumatic processes.
                      </li>
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Integrated Control Interface</h4>
                        User-friendly pneumatic control panel with PLC for monitoring and operation.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Industrial-Grade Construction</h4>
                        Designed as an industrial PLC pneumatic control panel for demanding environments.
                      </li>
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Customizable System Design</h4>
                        Supports custom PLC pneumatic control panel configurations based on application needs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Technical Specifications of PLC Based Pneumatic Control Panel
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
                      <tr><td className="px-4 py-2 border-b">Control Type</td><td className="px-4 py-2 border-b">PLC Pneumatic Control System</td></tr>
                      <tr><td className="px-4 py-2 border-b">PLC Integration</td><td className="px-4 py-2 border-b">Standard / Custom programmable logic controller</td></tr>
                      <tr><td className="px-4 py-2 border-b">Pressure Range</td><td className="px-4 py-2 border-b">Adjustable as per system requirements</td></tr>
                      <tr><td className="px-4 py-2 border-b">Components</td><td className="px-4 py-2 border-b">PLC unit, solenoid valves, actuators, sensors</td></tr>
                      <tr><td className="px-4 py-2 border-b">Interface</td><td className="px-4 py-2 border-b">Digital control panel with HMI (optional)</td></tr>
                      <tr><td className="px-4 py-2 border-b">Operation Mode</td><td className="px-4 py-2 border-b">Automatic / Programmable</td></tr>
                      <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled</td></tr>
                      <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Overpressure, Electrical Safety Systems</td></tr>
                      <tr><td className="px-4 py-2 border-b">Build</td><td className="px-4 py-2 border-b">Industrial-grade enclosure</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Variants */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Variants of PLC Based Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Industrial PLC Pneumatic Control Panel Systems</li>
                      <li>Automated Pneumatic Control System with PLC Units</li>
                      <li>Custom PLC Pneumatic Control Panel Solutions</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Compact PLC Controlled Pneumatic Systems</li>
                      <li>High-Precision PLC Based Pneumatic Control Panel Systems</li>
                    </ul>
                  </div>
                </div>
                <p className="text-black mt-4">These variants provide flexibility for different operational and automation requirements.</p>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Benefits of PLC Based Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Advanced automation through PLC controlled pneumatic system</li>
                      <li>Improved operational efficiency and accuracy</li>
                      <li>Reduced manual intervention</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Reliable and repeatable performance</li>
                      <li>Customizable for various applications</li>
                      <li>Durable and low-maintenance system</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Applications of PLC Based Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Aviation ground support systems</li>
                      <li>Aircraft pneumatic control panel for ground operations</li>
                      <li>Industrial automation and process control</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Air pressure and flow control systems</li>
                      <li>Manufacturing and production systems</li>
                      <li>Testing and maintenance environments</li>
                    </ul>
                  </div>
                </div>
                <p className="text-black mt-4">This PLC based pneumatic control panel system is widely used in aviation and industrial sectors.</p>
              </div>

              {/* Control & Diagnostics */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Control & Diagnostics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>PLC-based control interface with real-time monitoring</li>
                      <li>System status and performance indicators</li>
                      <li>Fault detection and alert systems</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Data logging and diagnostics</li>
                      <li>Optional HMI and remote monitoring capability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Why Choose Jetsys Defence */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Why Choose Jetsys Defence for PLC Based Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Trusted PLC pneumatic control panel supplier</li>
                      <li>Expertise in automation and pneumatic systems</li>
                      <li>High-quality and durable engineering solutions</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Custom-built PLC based pneumatic control panel system</li>
                      <li>Proven performance in aviation and industrial sectors</li>
                      <li>Strong technical support and service</li>
                    </ul>
                  </div>
                </div>
                <p className="text-black mt-4">Jetsys Defence is a reliable PLC pneumatic control panel manufacturer delivering advanced automation solutions.</p>
              </div>

              {/* Order Section */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Order Our PLC Based Pneumatic Control Panel System from Jetsys Defence
                </h2>
                <p className="text-black">
                  Upgrade your automation systems with Jetsys Defence&apos;s PLC Based Pneumatic Control Panel. Whether you
                  require a custom PLC pneumatic control panel or a complete automated pneumatic control system with PLC,
                  we provide high-performance solutions tailored to your needs.
                </p>
                <p className="text-black mt-4">
                  Contact Jetsys Defence today to enhance your operational efficiency.
                </p>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}