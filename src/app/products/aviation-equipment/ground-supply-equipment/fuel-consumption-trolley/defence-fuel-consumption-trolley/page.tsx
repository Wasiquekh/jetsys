import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Defence Fuel Consumption Trolley | Military Fuel Monitoring System | Jetsys Defence",
  description:
    "High-precision Defence Fuel Consumption Trolley by Jetsys Defence for accurate fuel monitoring, measurement, and control in military and aerospace operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/defence-fuel-consumption-trolley",
  },
};

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Defence Fuel Consumption Trolley – Advanced Military Fuel Monitoring System by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence introduces a high-performance Defence Fuel Consumption Trolley, engineered for precise fuel monitoring, measurement, and servicing in defence and military aviation environments. This advanced fuel consumption monitoring system defence ensures operational efficiency, safety, and accuracy in critical fuel handling operations.
              </p>

              <div className="my-8">
                <Image
                  src="/images/defence-fuel-consumption-trolley.png"
                  width={500}
                  height={1000}
                  alt="Defence Fuel Consumption Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The defence fuel consumption trolley is a specialized defence fuel service trolley designed to monitor, measure, and control fuel consumption in aircraft and ground support systems. It is a vital part of defence fuel ground support equipment and supports efficient fuel usage tracking in military operations.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Defence Fuel Consumption Trolley?</h2>
              <p className="font-medium text-base mb-6">
                A Defence Fuel Consumption Trolley is an advanced fuel consumption unit for defence used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Measure and monitor fuel usage in real time</li>
                <li>Control fuel flow and consumption rates</li>
                <li>Support aircraft fuel servicing operations</li>
                <li>Provide accurate data for fuel management</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It integrates with fuel flow measurement system, fuel metering system, and aviation fuel monitoring system to ensure precise fuel control.
              </p>

              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Defence Fuel Consumption Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">High-Precision Fuel Monitoring</h3>
                        Accurate fuel consumption monitoring system. Real-time data tracking for defence applications.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Integrated Fuel Measurement System</h3>
                        Advanced fuel measurement and control system. Supports efficient fuel usage monitoring equipment.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Rugged Military-Grade Design</h3>
                        Built for military fuel consumption trolley operations. Durable construction for harsh environments.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Functional Fuel Handling</h3>
                        Works as defence fuel handling trolley. Supports military aircraft fuel handling equipment.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Smart Monitoring & Control</h3>
                        Digital interface for live monitoring. Integration with aviation fuel servicing system defence.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Defence Fuel Consumption Trolley</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Fuel Type</td>
                        <td className="px-4 py-2 border-b">ATF / Jet Fuel</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Measurement Accuracy</td>
                        <td className="px-4 py-2 border-b">High precision (customizable)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Flow Rate</td>
                        <td className="px-4 py-2 border-b">Configurable as per operational needs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Power Supply</td>
                        <td className="px-4 py-2 border-b">Electric / Battery-operated</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">System Components</td>
                        <td className="px-4 py-2 border-b">Fuel flow meters, monitoring and control system, pumps and valves, digital display interface, sensors and safety systems</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Build & Design</td>
                        <td className="px-4 py-2 border-b">Heavy-duty steel frame, anti-static wheels with locking mechanism, weather-resistant coating</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Defence Fuel Consumption Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Defence Fuel Service Trolley</h3><p>Basic defence fuel service trolley for routine use</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Fuel Monitoring System Trolley</h3><p>Enhanced defence fuel monitoring trolley with analytics</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Military-Grade Fuel Handling System</h3><p>Designed for military fuel service trolley operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Defence Fuel Consumption System</h3><p>Tailor-made custom defence fuel consumption trolley</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Defence Fuel Consumption Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Accurate monitoring of fuel consumption and usage</li>
                  <li>Reduces fuel wastage and improves efficiency</li>
                  <li>Enhances reliability of defence fuel systems</li>
                  <li>Supports safe and controlled fuel handling</li>
                  <li>Improves operational performance in military aviation</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Defence Fuel Consumption Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Defence and military aviation operations</li>
                  <li>Aircraft fuel monitoring and servicing</li>
                  <li>Ground support equipment operations</li>
                  <li>Fighter jet servicing (fighter aircraft fuel service trolley)</li>
                  <li>Aerospace fuel system management</li>
                  <li>Fuel usage tracking in defence systems</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Real-time fuel consumption monitoring system</li>
                  <li>Digital control panel for system management</li>
                  <li>Flow rate and pressure monitoring</li>
                  <li>Diagnostic alerts for system performance</li>
                  <li>Integrated fuel monitoring equipment manufacturer standards</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Defence Fuel Consumption Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted defence fuel consumption trolley manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored defence fuel monitoring system supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven performance in military and aerospace sectors</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern fuel monitoring equipment manufacturer capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete support from design to deployment and service</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Defence Fuel Consumption Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Jetsys Defence is a leading military fuel service trolley supplier delivering high-performance, reliable, and precise fuel systems. Choose our defence fuel consumption trolley for advanced fuel monitoring, measurement, and control in defence and aerospace operations.
                </p>
              </section>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Page;