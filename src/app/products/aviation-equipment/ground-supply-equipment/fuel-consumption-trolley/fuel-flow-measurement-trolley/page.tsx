import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Fuel Flow Measurement Trolley | Aircraft Fuel Flow Testing System | Jetsys Defence",
  description:
    "Advanced Fuel Flow Measurement Trolley by Jetsys Defence for accurate fuel flow testing, calibration, and monitoring. Ideal for aircraft fuel flow measurement and aviation fuel testing systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/fuel-flow-measurement-trolley",
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
                Fuel Flow Measurement Trolley – Precision Aircraft Fuel Monitoring System by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence introduces a high-precision Fuel Flow Measurement Trolley, engineered for accurate fuel flow monitoring, testing, and calibration in aviation, defence, and aerospace sectors. This advanced fuel flow measurement system ensures reliable performance and precise data for critical fuel management operations.
              </p>

              <div className="my-8">
                <Image
                  src="/images/fuel-flow-measurement-trolley.png"
                  width={500}
                  height={1000}
                  alt="Fuel Flow Measurement Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The fuel flow measurement trolley is a mobile fuel flow meter trolley designed to measure, analyze, and calibrate fuel flow in aircraft systems. It is a vital part of aviation fuel flow testing equipment and ensures optimal fuel efficiency, safety, and compliance in aviation operations.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Fuel Flow Measurement Trolley?</h2>
              <p className="font-medium text-base mb-6">
                A Fuel Flow Measurement Trolley is a specialized fuel flow testing unit used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Measure fuel flow rate accurately</li>
                <li>Calibrate fuel systems and flow meters</li>
                <li>Monitor fuel consumption and performance</li>
                <li>Analyze fuel delivery systems</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It works as a complete fuel measurement and calibration system and integrates seamlessly with aviation fuel monitoring system setups.
              </p>

              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Fuel Flow Measurement Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">High-Accuracy Flow Measurement</h3>
                        Precision aviation fuel flow meter for real-time data. Accurate fuel flow analysis system integration.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Advanced Calibration Capability</h3>
                        Supports fuel flow calibration trolley operations. Ensures reliable aircraft fuel flow calibration system performance.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Robust & Mobile Design</h3>
                        Heavy-duty construction for military aircraft fuel flow testing unit use. Easy mobility as mobile fuel flow measurement trolley.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Integrated Monitoring System</h3>
                        Real-time tracking via fuel flow monitoring trolley. Digital display for instant analysis.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Functional Testing</h3>
                        Works as fuel flow testing trolley and fuel measurement trolley system. Supports full aviation fuel flow testing system.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Fuel Flow Measurement Trolley</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Specification</th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border-b font-medium">Fuel Type</td><td className="px-4 py-2 border-b">ATF / Jet Fuel</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Flow Measurement Range</td><td className="px-4 py-2 border-b">Customizable</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Accuracy</td><td className="px-4 py-2 border-b">High precision (± as per requirement)</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Power Supply</td><td className="px-4 py-2 border-b">Electric / Battery-operated</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">System Components</td><td className="px-4 py-2 border-b">Digital fuel flow meter, calibration system, pumps and control valves, data monitoring interface, sensors and pressure gauges</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Build & Design</td><td className="px-4 py-2 border-b">Industrial-grade steel frame, anti-static wheels with locking system, weather-resistant coating</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Fuel Flow Measurement Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Fuel Flow Meter Trolley</h3><p>Basic fuel flow meter trolley for routine measurement</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Calibration System Trolley</h3><p>High-end fuel flow calibration system with digital analytics</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Flow Testing Trolley</h3><p>Designed for defence fuel flow measurement trolley operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Fuel Flow Measurement System</h3><p>Fully customizable custom fuel flow measurement trolley</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Fuel Flow Measurement Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures accurate fuel flow monitoring and control</li>
                  <li>Improves efficiency of aircraft fuel flow testing equipment</li>
                  <li>Reduces fuel wastage and operational costs</li>
                  <li>Enhances reliability of aviation fuel monitoring system</li>
                  <li>Supports precise calibration of fuel systems</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Fuel Flow Measurement Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft fuel system testing and calibration</li>
                  <li>Aviation fuel monitoring and diagnostics</li>
                  <li>Defence and military aviation operations</li>
                  <li>Aerospace fuel system analysis</li>
                  <li>Ground support equipment operations</li>
                  <li>Fuel flow testing in maintenance facilities</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Digital interface for real-time monitoring</li>
                  <li>Calibration control and adjustment system</li>
                  <li>Flow rate and pressure monitoring</li>
                  <li>Diagnostic alerts and performance tracking</li>
                  <li>Integrated fuel flow analysis system</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Fuel Flow Measurement Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted fuel flow measurement trolley manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored fuel flow meter trolley supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Proven systems for defence and aerospace sectors</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern fuel flow calibration system manufacturer capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete support from design to deployment and service</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Fuel Flow Measurement Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Jetsys Defence is a leading aviation fuel flow testing equipment supplier delivering high-performance, reliable, and precise systems. Choose our fuel flow measurement trolley for advanced fuel monitoring, calibration, and testing in aviation and aerospace applications.
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