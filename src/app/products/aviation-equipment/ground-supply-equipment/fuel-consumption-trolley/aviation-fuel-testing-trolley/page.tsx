import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aviation Fuel Testing Trolley | Aircraft Fuel Testing Equipment | Jetsys Defence",
  description:
    "High-precision Aviation Fuel Testing Trolley by Jetsys Defence for accurate fuel quality analysis, contamination detection, and aviation fuel testing. Ideal for aircraft fuel testing and ground support systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-testing-trolley",
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
                Aviation Fuel Testing Trolley – Advanced Fuel Quality Testing by Jetsys Defence
              </h1>          
              <p className="font-medium text-base mb-6">
                Jetsys Defence introduces a high-performance Aviation Fuel Testing Trolley, designed for precise fuel quality inspection, contamination detection, and safe aviation fuel handling. This advanced aviation fuel testing equipment is engineered for aerospace, defence, and commercial aviation environments where accuracy and reliability are critical.
              </p>
              <div className="my-8">
                <Image
                  src="/images/aviation-fuel-testing-trolley.png"
                  width={500}
                  height={1000}
                  alt="Aviation Fuel Testing Trolley by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
 <h2 className="text-2xl font-bold text-[#5C5649] mb-3">Product Overview</h2>
              <p className="font-medium text-base mb-6">
                The aviation fuel testing trolley is a mobile fuel testing unit for aviation that enables on-site fuel analysis, filtration, and sampling. It is an essential part of aircraft fuel testing ground support equipment and supports safe aircraft operations by ensuring fuel purity and compliance with aviation standards.
              </p>

              <h2 className="text-2xl font-bold text-[#5C5649] mb-3">What is Aviation Fuel Testing Trolley?</h2>
              <p className="font-medium text-base mb-6">
                An Aviation Fuel Testing Trolley is a specialized aircraft fuel testing equipment used to:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Analyze aviation fuel quality</li>
                <li>Detect contamination (water, particles, impurities)</li>
                <li>Perform fuel sampling and inspection</li>
                <li>Ensure compliance with aviation fuel standards</li>
              </ul>
              <p className="font-medium text-base mb-6">
                It functions as a complete aviation fuel quality control system and fuel contamination testing system for aircraft operations.
              </p>
              {/* Key Features */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aviation Fuel Testing Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Accurate Fuel Analysis</h3>
                        Advanced sensors for aviation fuel analysis trolley operations. Real-time monitoring of fuel quality parameters.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Contamination Detection System</h3>
                        Integrated fuel contamination testing system. Water detection and particle filtration.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Integrated Filtration Unit</h3>
                        Works as aviation fuel filtration and testing unit. Ensures clean and safe fuel supply.
                      </li>
                    </ul>
                  </div>
                  <div className="text-black space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Durable & Mobile Design</h3>
                        Rugged construction for military fuel testing trolley aircraft use. Easy mobility across hangars and runways.
                      </li>
                      <li>
                        <h3 className="font-bold text-[#5C5649]">Multi-Functional Testing Capability</h3>
                        Supports fuel sampling and testing equipment. Complete aviation fuel inspection system integration.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Technical Specifications of Aviation Fuel Testing Trolley</h2>
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
                      <tr><td className="px-4 py-2 border-b font-medium">Testing Capability</td><td className="px-4 py-2 border-b">Contamination, density, and quality analysis</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Tank Capacity</td><td className="px-4 py-2 border-b">20L – 200L (Customizable)</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Power Supply</td><td className="px-4 py-2 border-b">Electric / Battery-operated</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">System Components</td><td className="px-4 py-2 border-b">Fuel sampling unit, filtration system, digital testing panel, pumps, pressure regulators, safety valves, sensors</td></tr>
                      <tr><td className="px-4 py-2 border-b font-medium">Build & Design</td><td className="px-4 py-2 border-b">Heavy-duty steel frame, anti-static wheels, weather-resistant coating</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Variants */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aviation Fuel Testing Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Standard Aviation Fuel Test Trolley</h3><p>Basic aviation fuel test trolley for routine testing</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Digital Testing Trolley</h3><p>Smart system with digital analytics and reporting</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Defence-Grade Fuel Testing System</h3><p>Designed for defence aviation fuel testing trolley operations</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Aviation Fuel Testing System</h3><p>Tailor-made custom aviation fuel testing trolley based on requirements</p></div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aviation Fuel Testing Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Ensures high fuel quality and safety</li>
                  <li>Detects contamination before aircraft fueling</li>
                  <li>Improves reliability of aircraft fuel quality testing system</li>
                  <li>Reduces maintenance risks and operational failures</li>
                  <li>Enhances efficiency in aviation fuel testing equipment operations</li>
                </ul>
              </section>

              {/* Applications */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aviation Fuel Testing Trolley</h2>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>Aircraft maintenance and inspection</li>
                  <li>Fuel quality control before refueling</li>
                  <li>Defence and military aviation operations</li>
                  <li>Aerospace fuel testing labs</li>
                  <li>Ground support equipment operations</li>
                  <li>Fighter jet fuel inspection (fighter aircraft fuel testing system)</li>
                </ul>
              </section>

              {/* Control & Diagnostics */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Digital interface for real-time testing data</li>
                  <li>Automated alerts for contamination detection</li>
                  <li>Pressure and flow monitoring system</li>
                  <li>Diagnostic tools for system performance</li>
                  <li>Integrated aviation fuel quality control system</li>
                </ul>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aviation Fuel Testing Trolley</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><h3 className="font-bold text-[#5C5649]">Industry Expertise</h3><p>Trusted aviation fuel testing trolley manufacturer</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Custom Engineering</h3><p>Tailored aviation fuel testing system supplier solutions</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">High Reliability</h3><p>Designed for defence and aerospace applications</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">Advanced Technology</h3><p>Modern fuel testing equipment manufacturer aviation capabilities</p></div>
                  <div><h3 className="font-bold text-[#5C5649]">End-to-End Support</h3><p>Complete lifecycle support from design to deployment</p></div>
                </div>
              </section>

              {/* Order Section */}
              <section className="mb-8">
                <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Aviation Fuel Testing Trolley from Jetsys Defence</h2>
                <p className="text-black">
                  Choose Jetsys Defence for high-quality aircraft fuel testing equipment supplier solutions. Our aviation fuel testing trolley systems are engineered for performance, safety, and precision, making them ideal for aviation, defence, and aerospace sectors.
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