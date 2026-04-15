import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aerospace Cable Harness Manufacturer | Aerospace Wiring Harness | Jetsys Defence",
  description:
    "Jetsys Defence is a trusted aerospace cable harness manufacturer delivering aerospace wiring harness, aviation cable assembly, and custom aerospace cable harness solutions for defence and aircraft systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/aerospace-cable-harness",
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
                Aerospace Cable Harness – Advanced Aviation Cable Assembly by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence delivers advanced aviation cable harness solutions engineered for modern aircraft systems. Our precision-built aircraft cable harness assemblies ensure reliable signal transmission, power distribution, and avionics integration across defence and aerospace platforms.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/Aerospace Cable Harness.png"
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
                        Jetsys Defence offers advanced Aerospace Cable Harness solutions engineered for high-performance aviation and defence applications. As a leading aerospace cable harness manufacturer, we specialize in precision-built aerospace wiring harness, aviation cable assembly, and aircraft cable harness assembly systems.
                      </p>
                      <p className="text-black">
                        Our solutions support critical aerospace operations with reliable electrical interconnect system aerospace technologies.
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
                        The Aerospace Cable Harness from Jetsys Defence is a high-quality integrated system designed to transmit electrical power and signals across complex aircraft and aerospace systems.
                      </p>
                      <p className="text-black">
                        Our aerospace cable assembly and aerospace electrical cable harness products ensure seamless connectivity, durability, and operational safety in demanding aviation environments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Aerospace Cable Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Aerospace Cable Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An Aerospace Cable Harness is a structured assembly of cables, connectors, and protective components used to manage electrical and signal transmission in aerospace systems.
                      </p>
                      <p className="text-black font-semibold">Also known as:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>aerospace wire harness</li>
                        <li>aerospace wiring harness</li>
                        <li>avionics cable harness aerospace</li>
                        <li>aircraft cable harness</li>
                      </ul>
                      <p className="text-black font-semibold">It forms the backbone of:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>aircraft electrical wiring system</li>
                        <li>avionics systems</li>
                        <li>defence aerospace cable harness applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Aerospace Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aerospace Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Precision Manufacturing</h3>
                        <p className="text-black pl-5">Designed by expert aerospace harness manufacturers with strict quality standards.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight & Durable</h3>
                        <p className="text-black pl-5">Optimized aerospace cable harness assembly reduces aircraft weight while ensuring durability.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Extreme Environment Resistance</h3>
                        <p className="text-black pl-5">Handles high temperature, vibration, and pressure in fighter aircraft cable harness and military aircraft cable harness systems.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Engineering</h3>
                        <p className="text-black pl-5">Available from custom aerospace cable harness manufacturer for specific aviation requirements.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Advanced Signal Integrity</h3>
                        <p className="text-black pl-5">Ensures high-performance aerospace signal cable harness transmission.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Aerospace Cable Harness */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Aerospace Cable Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Aerospace Cable Harnesses to your environmental, electrical, and routing requirements.
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
                          <td className="px-4 py-2 border-b">Voltage Rating</td>
                          <td className="px-4 py-2 border-b">Up to 600V / Custom</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Temperature Range</td>
                          <td className="px-4 py-2 border-b">-55°C to +200°C</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Cable Type</td>
                          <td className="px-4 py-2 border-b">Aerospace-grade insulated wires</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding</td>
                          <td className="px-4 py-2 border-b">Braided / Foil Shield</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Connector Type</td>
                          <td className="px-4 py-2 border-b">Aviation-certified connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Assembly Type</td>
                          <td className="px-4 py-2 border-b">Modular aerospace cable integration system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance</td>
                          <td className="px-4 py-2 border-b">Aerospace & Defence Standards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Aerospace Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aerospace Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aerospace Wire Harness</li>
                      <li>Aerospace Wiring Harness</li>
                      <li>Aerospace Cable Assembly</li>
                      <li>Aviation Cable Harness</li>
                      <li>Aircraft Cable Harness Assembly</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Avionics Cable Harness</li>
                      <li>Aerospace Electrical Wiring Harness</li>
                      <li>Defence Aerospace Cable Harness</li>
                      <li>Military Aircraft Cable Harness</li>
                      <li>Fighter Aircraft Cable Harness</li>
                      <li>Electrical Interconnect System Aerospace</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Aerospace Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aerospace Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Reliable electrical and signal connectivity</li>
                      <li>Reduced system complexity</li>
                      <li>Improved operational efficiency</li>
                      <li>Long service life in harsh conditions</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Supports advanced aerospace harness manufacturing</li>
                      <li>Enhances performance of aircraft electrical wiring system</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Aerospace Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aerospace Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Commercial Aircraft Systems</li>
                      <li>Defence & Military Aircraft</li>
                      <li>Fighter Jets & Helicopters</li>
                      <li>UAV & Aerospace Platforms</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Avionics and Communication Systems</li>
                      <li>Electrical Integration Systems</li>
                    </ul>
                  </div>
                  <p className="text-black mt-4">
                    Used by: aerospace wiring harness supplier, aerospace cable harness supplier industries.
                  </p>
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
                        Jetsys Defence Aerospace Cable Harness systems include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Real-time signal monitoring</li>
                        <li>Fault detection & isolation</li>
                        <li>Diagnostic compatibility with avionics</li>
                        <li>Easy inspection & maintenance</li>
                        <li>Enhanced system reliability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Aerospace Cable Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aerospace Cable Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Trusted aerospace cable harness manufacturer</li>
                      <li>Expertise in aerospace cable assembly manufacturers domain</li>
                      <li>Custom-built solutions for aviation & defence</li>
                      <li>High-quality materials and strict testing</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Competitive aerospace cable harness price</li>
                      <li>Reliable aircraft cable harness manufacturer capabilities</li>
                      <li>Global standard aerospace harness manufacturing</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Aerospace Cable Harness from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black font-semibold">
                        Looking for a reliable aerospace cable harness supplier?
                      </p>
                      <p className="text-black">
                        Jetsys Defence provides:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom aerospace cable harness solutions</li>
                        <li>Bulk manufacturing & supply</li>
                        <li>Fast delivery timelines</li>
                        <li>End-to-end engineering support</li>
                      </ul>
                      <p className="text-black font-medium mt-4">
                        Get in touch today for premium aerospace cable harness systems designed for modern aviation needs.
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