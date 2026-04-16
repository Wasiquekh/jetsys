import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Defence Aircraft Wiring Harness | Military Aviation Harness Jetsys Defence",
  description:
    "High-performance defence aircraft wiring harness for military aviation systems. Durable aerospace wiring harness solutions by Jetsys Defence.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/defence-aircraft-wiring-harness",
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
                Defence Aircraft Wiring Harness – High Reliability Military Aviation Electrical Systems | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Defence Aircraft Wiring Harness by Jetsys Defence is engineered for mission-critical military and aerospace applications. Designed for extreme environments, our military aircraft wiring harness ensures secure electrical connectivity, signal integrity, and long-term durability in defence aviation systems.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/defence-aircraft-wiring-harness.png"
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
                        Jetsys Defence is a trusted defence aircraft wiring harness manufacturer specializing in advanced defence aviation wiring harness and aerospace wiring harness solutions. Our expertise ensures precision-engineered harness systems tailored for military aircraft and defence-grade performance.
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
                        The defence aircraft wiring harness is a high-performance electrical interconnect system designed to support military aircraft operations. Our defence aircraft cable harness solutions ensure efficient power distribution and signal transmission across avionics, control systems, and mission equipment.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Defence Aircraft Wiring Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Defence Aircraft Wiring Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        A defence aircraft wiring harness is a structured assembly of wires, connectors, and protective materials designed to transmit electrical signals and power within military aircraft systems.
                      </p>
                      <p className="text-black font-semibold">This aircraft wiring system for defence ensures:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>Reliable communication between systems</li>
                        <li>Safe power distribution</li>
                        <li>Protection from harsh operational environments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Defence Aircraft Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Defence Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Military-Grade Reliability</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Designed for military aviation wiring harness applications</li>
                          <li>Ensures consistent performance in combat environments</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">EMI/RFI Shielding</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Protects sensitive signals in aircraft signal wiring harness</li>
                          <li>Reduces interference in avionics systems</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Durability</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Resistant to vibration, heat, and environmental stress</li>
                          <li>Suitable for long-duration missions</li>
                        </ul>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Engineering</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Developed by custom defence aircraft wiring harness manufacturer</li>
                          <li>Tailored for specific aircraft configurations</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight & Optimized Design</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Supports aircraft efficiency and performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Defence Aircraft Wiring Harness */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Defence Aircraft Wiring Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Defence Aircraft Wiring Harnesses to your environmental, electrical, and routing requirements.
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
                          <td className="px-4 py-2 border-b">As per military aircraft requirements</td>
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
                          <td className="px-4 py-2 border-b">Aerospace-grade / MIL-spec connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance</td>
                          <td className="px-4 py-2 border-b">Defence and aerospace standards</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Type</td>
                          <td className="px-4 py-2 border-b">Aircraft electrical wiring harness / aerospace electrical cable assembly</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Defence Aircraft Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Defence Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Military Aircraft Wiring Harness</li>
                      <li>Defence Aviation Wiring Harness</li>
                      <li>Aircraft Wiring Harness Defence Systems</li>
                      <li>Aerospace Wiring Harness Assembly</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Avionics Cable Harness for Defence Aircraft</li>
                      <li>Aircraft Cable Harness Assembly for Military Use</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Defence Aircraft Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Defence Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>High reliability in mission-critical defence operations</li>
                      <li>Enhanced safety and system performance</li>
                      <li>Reduced maintenance and operational downtime</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Long lifecycle under extreme conditions</li>
                      <li>Efficient electrical harness for aircraft systems</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Defence Aircraft Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Defence Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Military and defence aircraft systems</li>
                      <li>Fighter aircraft avionics and control systems</li>
                      <li>UAV and unmanned defence platforms</li>
                      <li>Radar and surveillance systems</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft electrical wiring system integration</li>
                      <li>Mission-critical communication systems</li>
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
                        The defence aircraft wiring harness supports advanced monitoring and diagnostics:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Real-time signal monitoring</li>
                        <li>Fault detection and isolation</li>
                        <li>Compatibility with avionics systems</li>
                        <li>Integrated maintenance test points</li>
                        <li>Supports avionics wiring harness integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Defence Aircraft Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Defence Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Leading defence cable harness manufacturer</li>
                      <li>Expertise as aerospace wiring harness supplier</li>
                      <li>Custom-built solutions for defence aviation</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Strict quality control and testing standards</li>
                      <li>Competitive defence aircraft wiring harness price</li>
                      <li>Reliable supply and technical support</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Defence Aircraft Wiring Harness System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Choose Jetsys Defence, your trusted military aircraft wiring harness supplier, for high-performance and reliable harness systems.
                      </p>
                      <p className="text-black">
                        We offer:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom design and engineering</li>
                        <li>Fast production and delivery</li>
                        <li>Complete technical assistance</li>
                      </ul>
                      <p className="text-black font-medium mt-4">
                        Contact us today to get your aircraft wiring harness defence solution tailored to your mission requirements.
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