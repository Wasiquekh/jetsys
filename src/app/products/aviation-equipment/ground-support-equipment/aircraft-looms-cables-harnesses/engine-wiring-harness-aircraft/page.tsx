import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Engine Wiring Harness Aircraft | Aerospace Engine Harness Jetsys Defence",
  description:
    "Premium engine wiring harness aircraft solutions for aviation and defence. Durable, high-temperature aerospace engine wiring harness by Jetsys Defence.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/engine-wiring-harness-aircraft",
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
                Engine Wiring Harness Aircraft – High Performance Aircraft Engine Electrical Systems | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Engine Wiring Harness Aircraft solutions by Jetsys Defence are engineered for high-performance aviation and defence applications. Designed to handle extreme temperatures, vibration, and mission-critical operations, our aircraft engine wiring harness systems ensure seamless electrical connectivity and signal transmission across aircraft engines.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/Engine Wiring Harness Aircraft.png"
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
                        Jetsys Defence specializes in manufacturing advanced aircraft engine wiring harness systems for commercial aviation, defence aircraft, and aerospace applications. Our expertise in aerospace electrical cable assembly ensures reliable, high-quality harnesses tailored to complex engine systems.
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
                        The engine wiring harness aircraft is a critical electrical system designed to interconnect engine components, sensors, actuators, and control units. Our aviation engine wiring harness solutions are built to deliver high durability, safety, and efficiency in demanding flight conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Engine Wiring Harness Aircraft? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Engine Wiring Harness Aircraft?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An engine wiring harness for aircraft is a structured assembly of wires, connectors, terminals, and insulation materials used to distribute power and transmit signals within the aircraft engine system.
                      </p>
                      <p className="text-black font-semibold">This aircraft engine wiring system ensures:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>Efficient power distribution</li>
                        <li>Reliable communication between engine components</li>
                        <li>Protection against environmental stress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Engine Wiring Harness Aircraft */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Engine Wiring Harness Aircraft</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Temperature Resistance</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Designed for extreme engine environments</li>
                          <li>Suitable for aerospace engine wiring harness applications</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Vibration & Mechanical Durability</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Withstands continuous engine vibration</li>
                          <li>Ideal for fighter aircraft engine harness and defence systems</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">EMI/RFI Shielding</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Ensures signal integrity in aircraft signal wiring harness</li>
                          <li>Reduces interference in avionics and engine systems</li>
                        </ul>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Engineering Design</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Tailored solutions by custom aircraft engine wiring harness manufacturer</li>
                          <li>Supports complex routing in engine compartments</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight Construction</h3>
                        <ul className="text-black pl-5 space-y-1 list-disc">
                          <li>Optimized for aircraft performance and fuel efficiency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Engine Wiring Harness Aircraft */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Engine Wiring Harness Aircraft</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Engine Wiring Harnesses to your environmental, electrical, and routing requirements.
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
                          <td className="px-4 py-2 border-b">-55°C to +250°C</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Voltage Rating</td>
                          <td className="px-4 py-2 border-b">As per engine system requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding</td>
                          <td className="px-4 py-2 border-b">Braided / Foil / Hybrid shielding</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Insulation</td>
                          <td className="px-4 py-2 border-b">PTFE / ETFE / Silicone-based materials</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Connectors</td>
                          <td className="px-4 py-2 border-b">Aerospace-grade MIL connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance</td>
                          <td className="px-4 py-2 border-b">Aviation and defence standards</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Type</td>
                          <td className="px-4 py-2 border-b">Engine electrical harness system / aircraft engine cable assembly</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Engine Wiring Harness Aircraft */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Engine Wiring Harness Aircraft</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft Engine Cable Assembly Aerospace</li>
                      <li>Military Aircraft Engine Wiring Harness</li>
                      <li>Defence Aircraft Engine Wiring Harness</li>
                      <li>Aerospace Engine Wiring Harness</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft Engine Avionics Wiring Harness</li>
                      <li>Aircraft Cable Harness Assembly for Engine Systems</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Engine Wiring Harness Aircraft */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Engine Wiring Harness Aircraft</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>High reliability in mission-critical operations</li>
                      <li>Reduced maintenance and improved lifecycle</li>
                      <li>Enhanced safety for engine electrical systems</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Efficient signal transmission and power distribution</li>
                      <li>Resistance to heat, vibration, and harsh environments</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Engine Wiring Harness Aircraft */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Engine Wiring Harness Aircraft</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Commercial aircraft engine systems</li>
                      <li>Military and defence aircraft engines</li>
                      <li>Fighter aircraft propulsion systems</li>
                      <li>UAV and aerospace engine platforms</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft electrical wiring system integration</li>
                      <li>Engine control and monitoring systems</li>
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
                        The aircraft engine wiring harness supports advanced control and diagnostics:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Real-time signal monitoring</li>
                        <li>Fault detection and isolation</li>
                        <li>Compatibility with onboard diagnostic systems</li>
                        <li>Support for avionics wiring harness integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Engine Wiring Harness Aircraft */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Engine Wiring Harness Aircraft</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Leading aircraft engine wiring harness manufacturer</li>
                      <li>Expertise in aerospace engine harness supplier solutions</li>
                      <li>Custom-built harness systems for aviation and defence</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Strict quality testing and certification processes</li>
                      <li>Scalable production with competitive aircraft engine wiring harness price</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Engine Wiring Harness Aircraft System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Partner with Jetsys Defence, your trusted aviation engine wiring harness supplier, for high-performance and reliable engine harness systems.
                      </p>
                      <p className="text-black">
                        We offer:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom design and engineering</li>
                        <li>Fast production and delivery</li>
                        <li>End-to-end technical support</li>
                      </ul>
                      <p className="text-black font-medium mt-4">
                        Contact us today to get your aircraft engine cable harness manufacturer solution tailored to your needs.
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