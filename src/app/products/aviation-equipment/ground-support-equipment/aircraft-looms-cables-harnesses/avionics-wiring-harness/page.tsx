import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Avionics Wiring Harness for Aircraft & Defence | Jetsys Defence",
  description:
    "High-quality avionics wiring harness for aircraft and defence systems. Reliable, EMI-protected, custom aerospace cable harness solutions by Jetsys Defence.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/avionics-wiring-harness",
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
                Avionics Wiring Harness – High Precision Aircraft Electrical Integration | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                At Jetsys Defence, we design and manufacture high-performance Avionics Wiring Harness systems engineered for modern aircraft, military platforms, and aerospace electronics. Our solutions ensure reliable signal transmission, EMI protection, and long-term durability in extreme aviation environments.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/avionics-wiring-harness.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Wiring Harness by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        The Avionics Wiring Harness from Jetsys Defence is a precision-engineered electrical interconnect system designed to integrate avionics equipment, sensors, navigation systems, and communication modules across aircraft platforms.
                      </p>
                      <p className="text-black">
                        Built using aerospace-grade materials, our avionics cable harness solutions ensure consistent performance, safety, and compliance with aviation standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Avionics Wiring Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Avionics Wiring Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An Avionics Wiring Harness is a structured assembly of wires, connectors, terminals, and protective coverings used to transmit power and signals between avionics systems in aircraft.
                      </p>
                      <p className="text-black font-semibold">It plays a critical role in:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>Navigation systems</li>
                        <li>Communication systems</li>
                        <li>Flight control electronics</li>
                        <li>Surveillance and defence avionics</li>
                      </ul>
                      <p className="text-black">
                        This aircraft avionics wiring harness ensures organized routing, reduced interference, and high reliability in mission-critical environments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Avionics Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Avionics Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Reliability & Safety</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Designed for aircraft electrical wiring system stability</li>
                          <li>Ensures uninterrupted signal transmission</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">EMI & RFI Shielding</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Advanced shielding for avionics data cable harness</li>
                          <li>Reduces electromagnetic interference</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight & Compact Design</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Optimized for aircraft weight reduction</li>
                          <li>Efficient routing for complex avionics wiring systems</li>
                        </ul>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Engineering</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Fully customizable custom avionics wiring harness manufacturer solutions</li>
                          <li>Compatible with systems like garmin g3x wiring harness, garmin g5 wiring harness, and garmin gtx 327 wiring harness</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Aerospace Grade Materials</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Heat-resistant, vibration-proof, and corrosion-resistant</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Avionics Wiring Harness */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Avionics Wiring Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Avionics Wiring Harnesses to your environmental, electrical, and routing requirements.
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
                          <td className="px-4 py-2 border-b">As per aircraft system requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Temperature Range</td>
                          <td className="px-4 py-2 border-b">-55°C to +200°C</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding Type</td>
                          <td className="px-4 py-2 border-b">Braided / Foil / Combination</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Connector Type</td>
                          <td className="px-4 py-2 border-b">MIL-spec / Custom connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Insulation Material</td>
                          <td className="px-4 py-2 border-b">PTFE / XLPE / ETFE</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance</td>
                          <td className="px-4 py-2 border-b">Aerospace & defence standards</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Harness Type</td>
                          <td className="px-4 py-2 border-b">Avionics electrical harness / avionics interconnect system</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Avionics Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Avionics Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft Avionics Cable Assembly</li>
                      <li>Military Avionics Wiring Harness</li>
                      <li>Fighter Aircraft Avionics Harness</li>
                      <li>Aerospace Avionics Wiring Harness</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Avionics Wiring Harness for Military Aircraft</li>
                      <li>Avionics Cable Harness for Data & Signal Systems</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Avionics Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Avionics Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Improved system reliability and performance</li>
                      <li>Reduced maintenance and downtime</li>
                      <li>Enhanced safety in critical avionics operations</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Organized wiring for easy installation and upgrades</li>
                      <li>Long service life under harsh aerospace conditions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Avionics Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Avionics Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Commercial aircraft avionics systems</li>
                      <li>Military and defence aircraft systems</li>
                      <li>UAV and drone avionics integration</li>
                      <li>Navigation and communication modules</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Radar and surveillance systems</li>
                      <li>Flight control and cockpit instrumentation</li>
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
                        Our avionics wiring system supports advanced diagnostics and monitoring:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Fault detection and isolation</li>
                        <li>Signal integrity testing</li>
                        <li>Integrated test points for maintenance</li>
                        <li>Compatibility with aircraft diagnostic tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Avionics Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Avionics Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Trusted avionics wiring harness manufacturer</li>
                      <li>Expertise in aerospace avionics harness supplier solutions</li>
                      <li>Custom-built designs for defence and aviation sectors</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Strict quality control and testing procedures</li>
                      <li>Scalable production capabilities</li>
                      <li>Competitive avionics wiring harness price</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Avionics Wiring Harness System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black font-semibold">
                        Looking for a reliable aircraft avionics harness supplier?
                      </p>
                      <p className="text-black">
                        Choose Jetsys Defence for high-performance avionics cable harness manufacturer solutions tailored to your aircraft requirements.
                      </p>
                      <p className="text-black">
                        Contact us today to get:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom design consultation</li>
                        <li>Technical support</li>
                        <li>Fast delivery and deployment</li>
                      </ul>
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