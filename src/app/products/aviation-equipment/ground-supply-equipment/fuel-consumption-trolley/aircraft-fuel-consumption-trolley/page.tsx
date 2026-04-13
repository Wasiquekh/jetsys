import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Fuel Consumption Trolley | Aviation Fuel Service Trolley | Jetsys Defence",
  description:
    "High-precision Aircraft Fuel Consumption Trolley by Jetsys Defence for accurate fuel monitoring, transfer, and servicing. Ideal for aviation fuel service, refueling, and ground support operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aircraft-fuel-consumption-trolley",
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
                Aircraft Fuel Consumption Trolley – Precision Fuel Monitoring by Jetsys Defence
              </h1>
              <p className="font-medium text-base mb-6">
                Jetsys Defence presents a high-performance Aircraft Fuel Consumption Trolley, engineered for accurate fuel measurement, safe transfer, and efficient fuel servicing operations. Designed for aviation, defence, and aerospace sectors, this advanced aviation fuel service trolley ensures precision, reliability, and operational safety in critical environments.
              </p>

            

              <div className="my-8">
                <Image
                  src="/images/Aircraft Fuel Consumption Trolley.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Fuel Consumption Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
  <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The aircraft fuel consumption trolley is a specialized aircraft fuel servicing trolley used to measure, monitor, and control fuel usage during aircraft testing, maintenance, and ground operations. Built with rugged components and precision instruments, it functions as a complete aircraft fuel transfer system and fuel management system aircraft solution.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Aircraft Fuel Consumption Trolley?</h2>
              <p className="font-medium text-base mb-6">
                An Aircraft Fuel Consumption Trolley is an advanced aviation fuel servicing equipment used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Measure fuel consumption accurately</li>
                <li>Supply controlled fuel flow to aircraft systems</li>
                <li>Act as a mobile aircraft fuel dispensing unit</li>
                <li>Support testing and calibration of fuel systems</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It is widely used as part of aircraft ground fuel support equipment and aviation fuel ground support system setups.
              </p>
              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Fuel Consumption Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">High Precision Measurement</h3>
                        Accurate fuel flow monitoring system. Integrated sensors for real-time consumption tracking.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Robust Construction</h3>
                        Heavy-duty frame for military fuel servicing trolley aircraft use. Corrosion-resistant materials for long life.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Safe Fuel Handling</h3>
                        Leak-proof design for aircraft fuel handling trolley operations. Explosion-proof components for safety.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Mobility & Flexibility</h3>
                        Easy-to-move aviation refueling trolley design. Suitable for hangar and runway operations.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Integrated Fuel Transfer System</h3>
                        Works as a fuel service trolley for aircraft. Supports efficient aircraft fuel supply trolley functionality.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Aircraft Fuel Consumption Trolley</h2>
                <div className="overflow-x-auto bg-white rounded-lg">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border-b font-medium">Fuel Type</td><td className="px-4 py-2 border-b">Aviation Turbine Fuel (ATF) / Jet Fuel</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Flow Rate</td><td className="px-4 py-2 border-b">Customizable as per requirement</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Tank Capacity</td><td className="px-4 py-2 border-b">50L – 500L (Custom options available)</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Power Supply</td><td className="px-4 py-2 border-b">Electric / Battery-operated</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">System Components</td><td className="px-4 py-2 border-b">Flow meters, fuel pumps, digital monitoring panel, safety valves, filtration system</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Build & Design</td><td className="px-4 py-2 border-b">Heavy-duty steel frame, anti-static wheels, weather-resistant coating</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aircraft Fuel Consumption Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Fuel Service Trolley</h3><p>Basic aircraft fuel service trolley for routine operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Digital Fuel Monitoring Trolley</h3><p>Smart system with digital dashboard and analytics</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Servicing Trolley</h3><p>Designed for defence aircraft fuel servicing trolley operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Aviation Fuel Supply System</h3><p>Tailor-made aviation fuel supply system as per aircraft needs</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Fuel Consumption Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures accurate fuel consumption tracking</li>
                  <li>Reduces fuel wastage and operational cost</li>
                  <li>Improves efficiency in aircraft refueling equipment operations</li>
                  <li>Enhances safety in fuel handling processes</li>
                  <li>Supports reliable aviation fuel servicing equipment usage</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Fuel Consumption Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft maintenance and testing</li>
                  <li>Fuel system calibration</li>
                  <li>Defence and military aviation operations</li>
                  <li>Ground support operations</li>
                  <li>Fighter jet servicing (fighter aircraft fuel servicing trolley)</li>
                  <li>Aerospace fuel system diagnostics</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Digital control panel for real-time monitoring</li>
                  <li>Flow rate and pressure adjustment system</li>
                  <li>Fault detection and alert system</li>
                  <li>Integrated diagnostics for performance tracking</li>
                  <li>Smart interface for fuel management system aircraft</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aircraft Fuel Consumption Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Leading manufacturer of aircraft refueling equipment manufacturer solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Fully customizable custom aircraft fuel servicing trolley options</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Trusted in defence and aerospace sectors</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern aviation fuel service equipment supplier capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Design, manufacturing, testing, and after-sales service</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Aircraft Fuel Consumption Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Get a premium-quality aircraft fuel trolley supplier solution tailored to your aviation needs. Jetsys Defence delivers reliable, efficient, and high-performance aircraft fuel servicing trolley manufacturer systems for aviation, defence, and aerospace applications.
                </p>
                <div className="mt-6">
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

export default Page;