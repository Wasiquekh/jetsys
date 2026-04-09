import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Defence Pneumatic Control Panel | Military Pneumatic Control System | Jetsys Defence",
  description:
    "Explore Defence Pneumatic Control Panel by Jetsys Defence. High-performance military pneumatic control system designed for aerospace and defence applications.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/defence-pneumatic-control-panel",
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
                Defence Pneumatic Control Panel – Rugged Military Pneumatic Control System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-performance Defence Pneumatic Control Panel engineered for demanding
                military and aerospace environments. Under the Aviation Equipment – Pneumatic Control Panel category,
                this system ensures precise and reliable control for advanced military pneumatic control system applications.
                As a trusted defence pneumatic control panel manufacturer, Jetsys Defence delivers rugged, durable, and
                customizable solutions tailored for defence aviation requirements.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/Defence Pneumatic Control Panel.png"
                  width={500}
                  height={1000}
                  alt="Defence Pneumatic Control Panel by Jetsys Defence"
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
                  The Defence Pneumatic Control Panel is a specialized system designed to control and regulate pneumatic
                  operations in military aircraft and ground support systems. This pneumatic control panel for defence
                  ensures accurate air pressure management and system reliability under extreme conditions.
                </p>
                <p className="text-black">
                  Built for performance and durability, this military pneumatic control panel system supports critical
                  aerospace operations.
                </p>
              </div>

              {/* What is Defence Pneumatic Control Panel? */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  What is Defence Pneumatic Control Panel?
                </h2>
                <p className="text-black mb-4">
                  A Defence Pneumatic Control Panel is an advanced control system used to manage pneumatic functions in
                  defence and aerospace applications. It operates as a complete military pneumatic control system, controlling
                  airflow, pressure, and actuation through a centralized panel.
                </p>
                <p className="text-black">
                  This aerospace pneumatic control panel ensures safe, efficient, and precise operation of pneumatic
                  systems in military environments.
                </p>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Key Features of Defence Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Rugged Military-Grade Design</h4>
                        Built as a rugged pneumatic control panel for defence to withstand harsh environments and extreme conditions.
                      </li>
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Precision Pneumatic Control</h4>
                        Ensures accurate airflow and pressure management in military pneumatic control system applications.
                      </li>
                      <li>
                        <h4 className="font-bold text-[#5C5649]">High Reliability Performance</h4>
                        Designed for mission-critical operations in defence aviation.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Advanced Control Interface</h4>
                        User-friendly defense pneumatic control panel for efficient system operation and monitoring.
                      </li>
                      <li>
                        <h4 className="font-bold text-[#5C5649]">Customizable System Configuration</h4>
                        Supports custom defence pneumatic control panel solutions tailored to specific requirements.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Technical Specifications of Defence Pneumatic Control Panel
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
                      <tr><td className="px-4 py-2 border-b">Control Type</td><td className="px-4 py-2 border-b">Military Pneumatic Control System</td></tr>
                      <tr><td className="px-4 py-2 border-b">Pressure Range</td><td className="px-4 py-2 border-b">Adjustable based on operational needs</td></tr>
                      <tr><td className="px-4 py-2 border-b">Components</td><td className="px-4 py-2 border-b">Valves, regulators, actuators, sensors</td></tr>
                      <tr><td className="px-4 py-2 border-b">Operation Mode</td><td className="px-4 py-2 border-b">Manual / Automatic</td></tr>
                      <tr><td className="px-4 py-2 border-b">Interface</td><td className="px-4 py-2 border-b">Control panel with monitoring indicators</td></tr>
                      <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled</td></tr>
                      <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overpressure, Overload, Safety Systems</td></tr>
                      <tr><td className="px-4 py-2 border-b">Build</td><td className="px-4 py-2 border-b">Aerospace-grade rugged enclosure</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Variants */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Variants of Defence Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Military Pneumatic Control Panel System Units</li>
                      <li>Aerospace Pneumatic Control Panel Solutions</li>
                      <li>Custom Defence Pneumatic Control Panel Systems</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Compact Rugged Pneumatic Control Panels for Defence</li>
                      <li>High-Performance Military Pneumatic Control Panels</li>
                    </ul>
                  </div>
                </div>
                <p className="text-black mt-4">These variants ensure flexibility for different defence and aerospace requirements.</p>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Benefits of Defence Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Reliable military pneumatic control system for critical operations</li>
                      <li>Enhanced operational efficiency in defence environments</li>
                      <li>Precise air pressure and flow control</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Reduced system downtime and maintenance</li>
                      <li>Customizable for mission-specific requirements</li>
                      <li>Durable and long-lasting performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Applications of Defence Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Military aircraft ground support systems</li>
                      <li>Aerospace pneumatic control operations</li>
                      <li>Aircraft pneumatic control panel for ground operations</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Defence maintenance and testing environments</li>
                      <li>Air pressure and control systems in military bases</li>
                      <li>Aviation and defence system integration</li>
                    </ul>
                  </div>
                </div>
                <p className="text-black mt-4">This pneumatic control panel for defence is essential for modern aerospace operations.</p>
              </div>

              {/* Control & Diagnostics */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Control & Diagnostics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Real-time pressure and system monitoring</li>
                      <li>Performance indicators and system alerts</li>
                      <li>Fault detection and safety mechanisms</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Diagnostic tools for system analysis</li>
                      <li>Optional integration with advanced monitoring systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Why Choose Jetsys Defence */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Why Choose Jetsys Defence for Defence Pneumatic Control Panel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Leading defence pneumatic control panel supplier</li>
                      <li>Expertise in aerospace and military systems</li>
                      <li>High-quality and rugged engineering standards</li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Custom-built military pneumatic control panel system</li>
                      <li>Proven reliability in defence applications</li>
                      <li>Strong technical support and service</li>
                    </ul>
                  </div>
                </div>
                <p className="text-black mt-4">Jetsys Defence is a trusted defence pneumatic control panel manufacturer delivering advanced aerospace solutions.</p>
              </div>

              {/* Order Section */}
              <div className="mt-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Order Our Defence Pneumatic Control Panel System from Jetsys Defence
                </h2>
                <p className="text-black">
                  Enhance your defence aviation operations with Jetsys Defence's Defence Pneumatic Control Panel. Whether
                  you require a custom defence pneumatic control panel or a high-performance military pneumatic control
                  system, we provide solutions designed for reliability and efficiency.
                </p>
                <p className="text-black mt-4">
                  Contact Jetsys Defence today to upgrade your aerospace control systems.
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