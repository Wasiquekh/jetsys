import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Digital Fuel Metering Trolley | Aircraft Fuel Measurement System | Jetsys Defence",
  description:
    "Precision Digital Fuel Metering Trolley by Jetsys Defence for accurate fuel measurement, dispensing, and monitoring. Ideal for aviation fuel metering system and aircraft fuel management operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/digital-fuel-metering-trolley",
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
                Digital Fuel Metering Trolley – Advanced Aircraft Fuel Measurement System by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence presents a state-of-the-art Digital Fuel Metering Trolley, engineered for precise fuel measurement, dispensing, and monitoring in aviation, defence, and aerospace environments. This advanced digital fuel measurement system ensures accuracy, efficiency, and safety in critical fuel handling operations.
              </p>

              <div className="my-8">
                <Image
                  src="/images/digital-fuel-metering-trolley.png"
                  width={500}
                  height={1000}
                  alt="Digital Fuel Metering Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The digital fuel metering trolley is a mobile fuel metering system trolley designed to measure, control, and dispense fuel with high precision. It plays a vital role in aviation fuel metering system setups and supports efficient aircraft fuel management and ground support operations.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Digital Fuel Metering Trolley?</h2>
              <p className="font-medium text-base mb-6">
                A Digital Fuel Metering Trolley is a specialized digital fuel dispensing trolley used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Measure fuel quantity accurately</li>
                <li>Monitor fuel flow and consumption</li>
                <li>Control fuel dispensing operations</li>
                <li>Provide real-time fuel data and analytics</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It functions as a complete fuel measurement and control system and integrates with fuel monitoring and metering system in aviation operations.
              </p>

              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Digital Fuel Metering Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">High-Precision Digital Measurement</h3>
                        Advanced digital fuel flow meter for accurate readings. Real-time monitoring via fuel metering and monitoring trolley.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Integrated Fuel Dispensing System</h3>
                        Works as fuel dispensing and metering unit. Controlled and efficient fuel delivery.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Robust Aviation Design</h3>
                        Durable construction for military aircraft fuel metering system use. Reliable in harsh aerospace environments.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Smart Monitoring & Control</h3>
                        Digital interface for instant fuel data. Integrated aviation fuel flow measurement system.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Functional Capability</h3>
                        Supports fuel metering trolley digital and measurement operations. Works as complete aircraft fuel measurement system.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Digital Fuel Metering Trolley</h2>
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
                        <td className="px-4 py-2 border-b font-medium">Flow Range</td>
                        <td className="px-4 py-2 border-b">Configurable based on requirements</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Power Supply</td>
                        <td className="px-4 py-2 border-b">Electric / Battery-operated</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">System Components</td>
                        <td className="px-4 py-2 border-b">Digital fuel meter, flow sensors and control valves, fuel pump and dispensing unit, monitoring display panel, safety valves and regulators</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b font-medium">Build & Design</td>
                        <td className="px-4 py-2 border-b">Heavy-duty industrial frame, anti-static wheels with locking system, weather-resistant coating</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Digital Fuel Metering Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Digital Fuel Meter Trolley</h3><p>Basic digital fuel meter trolley for routine operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Monitoring & Control Trolley</h3><p>High-end digital fuel measurement trolley with analytics</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Metering System</h3><p>Designed for defence fuel metering trolley operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Digital Fuel Metering System</h3><p>Tailor-made custom digital fuel metering trolley</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Digital Fuel Metering Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures accurate fuel measurement and control</li>
                  <li>Reduces fuel wastage and improves efficiency</li>
                  <li>Enhances reliability of aviation fuel metering system</li>
                  <li>Supports safe and controlled fuel dispensing</li>
                  <li>Improves operational performance of fuel systems</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Digital Fuel Metering Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft fuel measurement and dispensing</li>
                  <li>Aviation fuel monitoring systems</li>
                  <li>Defence and military aviation operations</li>
                  <li>Aerospace fuel management</li>
                  <li>Ground support equipment operations</li>
                  <li>Fuel handling and distribution systems</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Digital control panel for real-time monitoring</li>
                  <li>Fuel flow and quantity tracking system</li>
                  <li>Diagnostic alerts for system performance</li>
                  <li>Pressure and flow regulation controls</li>
                  <li>Integrated fuel monitoring and metering system</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Digital Fuel Metering Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted digital fuel metering trolley manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored fuel metering trolley supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven systems for defence and aerospace industries</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern fuel metering equipment manufacturer capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete support from design to deployment and service</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Digital Fuel Metering Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Jetsys Defence is a leading aviation fuel metering system supplier delivering high-performance, accurate, and reliable systems. Choose our digital fuel metering trolley for advanced fuel measurement, monitoring, and control in aviation and aerospace applications.
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