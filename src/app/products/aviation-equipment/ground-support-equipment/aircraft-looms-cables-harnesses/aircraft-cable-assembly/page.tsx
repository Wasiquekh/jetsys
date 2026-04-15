import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Cable Assembly | Aerospace Cable Harness Jetsys Defence",
  description:
    "High-quality aircraft cable assembly for aviation & defence systems. Reliable aerospace electrical cable assembly solutions by Jetsys Defence.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/aircraft-cable-assembly",
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
                Aircraft Cable Assembly – High Precision Aerospace Electrical Interconnect Systems | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Cable Assembly solutions by Jetsys Defence are engineered to deliver superior performance, reliability, and durability for aviation and defence applications. Our aerospace cable assembly systems ensure seamless electrical connectivity across aircraft systems, avionics, and mission-critical components.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/Aircraft Cable Assembly.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Wiring Harness by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Company Product by Jetsys Defence */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Company Product by Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Jetsys Defence is a leading aircraft cable assembly manufacturer specializing in advanced aerospace cable assemblies and aircraft cable harness assembly solutions. We provide precision-engineered systems for aviation, aerospace, and defence sectors with strict quality and performance standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Product Overview */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        The aircraft cable assembly is a critical component used for electrical power distribution and signal transmission across aircraft systems. Our aviation cable assembly solutions are designed to support complex aircraft architectures with high reliability and safety.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Aircraft Cable Assembly? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Aircraft Cable Assembly?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An aircraft cable assembly is an integrated system of cables, connectors, and protective components designed to transmit electrical signals and power between various aircraft subsystems.
                      </p>
                      <p className="text-black font-semibold">This aerospace electrical cable assembly ensures:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>Efficient signal transmission</li>
                        <li>Organized wiring structure</li>
                        <li>Protection from environmental factors</li>
                        <li>Reliable system integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Aircraft Cable Assembly */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Cable Assembly</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Precision Engineering</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Designed for aircraft cable integration</li>
                          <li>Ensures accurate signal and power distribution</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Aerospace Grade Materials</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Built with high-quality insulation and shielding</li>
                          <li>Suitable for custom aerospace cables</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">EMI/RFI Protection</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Maintains signal integrity in aircraft signal cable assembly</li>
                          <li>Reduces interference in avionics systems</li>
                        </ul>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Manufacturing</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Solutions by custom aircraft cable assembly manufacturer</li>
                          <li>Tailored designs for complex aircraft systems</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight & Durable</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Optimized for aircraft performance and fuel efficiency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Aircraft Cable Assembly */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Aircraft Cable Assembly</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Aircraft Cable Assemblies to your environmental, electrical, and routing requirements.
                  </p>
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
                          <td className="px-4 py-2 border-b">Temperature Range</td>
                          <td className="px-4 py-2 border-b">-55°C to +200°C</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Voltage Rating</td>
                          <td className="px-4 py-2 border-b">As per aircraft system requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding</td>
                          <td className="px-4 py-2 border-b">Braided / Foil / Hybrid</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Insulation</td>
                          <td className="px-4 py-2 border-b">PTFE / XLPE / ETFE</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Connector Type</td>
                          <td className="px-4 py-2 border-b">Aerospace-grade connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance</td>
                          <td className="px-4 py-2 border-b">Aviation and defence standards</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Type</td>
                          <td className="px-4 py-2 border-b">Aircraft electrical cable assembly / aerospace wiring harness assembly</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Aircraft Cable Assembly */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aircraft Cable Assembly</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aerospace Cable Harness Assembly</li>
                      <li>Aircraft Avionics Cable Assembly</li>
                      <li>Military Aircraft Cable Assembly</li>
                      <li>Defence Aircraft Cable Assembly</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Fighter Aircraft Cable Assembly</li>
                      <li>Custom Aircraft Cable Assemblies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Aircraft Cable Assembly */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Cable Assembly</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>High reliability in mission-critical systems</li>
                      <li>Reduced maintenance and downtime</li>
                      <li>Improved safety and system performance</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Long lifecycle and durability</li>
                      <li>Efficient electrical interconnect system aircraft</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Aircraft Cable Assembly */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Cable Assembly</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Commercial aircraft systems</li>
                      <li>Military and defence aircraft</li>
                      <li>Avionics and communication systems</li>
                      <li>Flight control and navigation systems</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>UAV and aerospace platforms</li>
                      <li>Aircraft electrical wiring system integration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        The aircraft cable harness assembly supports advanced monitoring and diagnostics:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Signal integrity testing</li>
                        <li>Fault detection and isolation</li>
                        <li>Integration with avionics systems</li>
                        <li>Maintenance-friendly design with test points</li>
                        <li>Compatible with avionics cable harness systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Aircraft Cable Assembly */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aircraft Cable Assembly</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Trusted aviation cable assembly supplier</li>
                      <li>Expertise in aerospace cable assembly supplier solutions</li>
                      <li>Custom-built designs for aviation and defence</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Strict quality testing and compliance</li>
                      <li>Competitive aircraft cable assembly price</li>
                      <li>Reliable manufacturing and delivery</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Aircraft Cable Assembly System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Choose Jetsys Defence, your trusted aircraft cable harness manufacturer, for high-performance and durable cable assembly solutions.
                      </p>
                      <p className="text-black">
                        We offer:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom engineering and design</li>
                        <li>Fast production and delivery</li>
                        <li>End-to-end technical support</li>
                      </ul>
                      <p className="text-black font-medium mt-4">
                        Contact us today to get your aircraft cable assembly aerospace solution tailored to your requirements.
                      </p>
                    </div>
                  </div>
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