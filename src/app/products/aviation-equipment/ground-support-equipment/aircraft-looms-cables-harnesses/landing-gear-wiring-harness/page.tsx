import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Landing Gear Wiring Harness Aircraft | Aerospace Harness Jetsys Defence",
  description:
    "High-performance landing gear wiring harness for aircraft and defence systems. Durable aerospace landing gear electrical harness by Jetsys Defence.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/landing-gear-wiring-harness",
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
                Landing Gear Wiring Harness – High Reliability Aircraft Landing Gear Electrical Systems | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Landing Gear Wiring Harness by Jetsys Defence is engineered to deliver superior performance, durability, and safety for aircraft landing gear systems. Designed for extreme operational conditions, our aircraft landing gear wiring harness ensures seamless electrical connectivity for landing gear deployment, retraction, braking, and monitoring systems.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/landing-gear-wiring-harness.png"
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
                        Jetsys Defence is a trusted landing gear wiring harness manufacturer delivering precision-engineered landing gear electrical harness solutions for aviation and defence industries. Our expertise in aircraft cable harness assembly ensures high reliability, safety, and performance in critical aircraft systems.
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
                        The landing gear wiring harness is a specialized electrical system that connects sensors, actuators, control units, and braking systems within the aircraft landing gear mechanism. Our landing gear cable harness solutions are designed for rugged environments and ensure smooth aircraft landing operations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Landing Gear Wiring Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Landing Gear Wiring Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        A landing gear wiring harness is an integrated assembly of wires, connectors, and protective components that facilitate electrical power and signal transmission within the landing gear system.
                      </p>
                      <p className="text-black font-semibold">This aircraft landing gear wiring system is essential for:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>Landing gear extension and retraction</li>
                        <li>Brake system control</li>
                        <li>Sensor and feedback systems</li>
                        <li>Safety and monitoring operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Landing Gear Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Landing Gear Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Mechanical Strength</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Built for heavy-duty landing operations</li>
                          <li>Suitable for fighter aircraft landing gear wiring system</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Environmental Resistance</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Resistant to moisture, oil, and contaminants</li>
                          <li>Ideal for harsh runway conditions</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">EMI/RFI Shielding</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Protects signal integrity in aircraft signal wiring harness</li>
                          <li>Reduces interference with avionics systems</li>
                        </ul>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Design Capability</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Engineered by custom landing gear wiring harness manufacturer</li>
                          <li>Supports complex landing gear architectures</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Long Lifecycle Performance</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Reduced wear and maintenance costs</li>
                          <li>Enhanced durability for defence applications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Landing Gear Wiring Harness */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Landing Gear Wiring Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Landing Gear Wiring Harnesses to your environmental, electrical, and routing requirements.
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
                          <td className="px-4 py-2 border-b">As per aircraft requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding</td>
                          <td className="px-4 py-2 border-b">Braided / Foil / Combination</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Insulation Material</td>
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
                          <td className="px-4 py-2 border-b">Landing gear electrical wiring system / landing gear cable assembly aircraft</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Landing Gear Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Landing Gear Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft Landing Gear Wiring Harness</li>
                      <li>Military Aircraft Landing Gear Harness</li>
                      <li>Defence Landing Gear Wiring Harness</li>
                      <li>Aerospace Landing Gear Wiring Harness</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Landing Gear Cable Assembly Aerospace</li>
                      <li>Aircraft Landing Gear Avionics Harness</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Landing Gear Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Landing Gear Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Ensures safe landing gear operation</li>
                      <li>High durability under mechanical stress</li>
                      <li>Improved electrical reliability</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Reduced system failures and downtime</li>
                      <li>Long service life in demanding environments</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Landing Gear Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Landing Gear Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Commercial aircraft landing systems</li>
                      <li>Military and defence aircraft</li>
                      <li>Fighter aircraft landing gear systems</li>
                      <li>UAV and aerospace landing mechanisms</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft electrical wiring system integration</li>
                      <li>Brake and actuator control systems</li>
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
                        The landing gear wiring harness assembly supports advanced diagnostics and monitoring:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Real-time system monitoring</li>
                        <li>Fault detection and isolation</li>
                        <li>Compatibility with onboard avionics systems</li>
                        <li>Integrated test points for maintenance</li>
                        <li>Supports avionics wiring harness integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Landing Gear Wiring Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Landing Gear Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Leading landing gear cable harness manufacturer</li>
                      <li>Expertise in aerospace landing gear harness supplier solutions</li>
                      <li>Custom-built designs for aviation and defence systems</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Strict quality assurance and testing procedures</li>
                      <li>Competitive landing gear wiring harness price</li>
                      <li>Reliable supply and technical support</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Landing Gear Wiring Harness System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Partner with Jetsys Defence, your trusted aircraft landing gear harness supplier, for high-performance and durable harness solutions.
                      </p>
                      <p className="text-black">
                        We provide:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom engineering solutions</li>
                        <li>Fast manufacturing and delivery</li>
                        <li>End-to-end support for aviation projects</li>
                      </ul>
                      <p className="text-black font-medium mt-4">
                        Contact us today to get your landing gear cable assembly aircraft solution tailored to your requirements.
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