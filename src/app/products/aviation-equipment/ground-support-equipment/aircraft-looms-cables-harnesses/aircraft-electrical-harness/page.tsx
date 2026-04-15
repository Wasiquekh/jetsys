import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Electrical Harness Manufacturer | Aviation Wiring Harness | Jetsys Defence",
  description:
    "Jetsys Defence is a leading aircraft electrical harness manufacturer offering aviation wiring harness, aerospace electrical harness, and custom aircraft cable harness assemblies for defence and commercial aircraft systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/aircraft-electrical-harness",
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
                Aircraft Electrical Harness – High-Performance Aviation Wiring Solutions by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence delivers advanced aviation cable harness solutions engineered for modern aircraft systems. Our precision-built aircraft cable harness assemblies ensure reliable signal transmission, power distribution, and avionics integration across defence and aerospace platforms.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/aircraft-electrical-harness.png"
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
                        Jetsys Defence specializes in manufacturing Aircraft Electrical Harness solutions designed for high-reliability aviation and defence applications. Our aircraft wiring harness, aviation electrical harness, and aerospace electrical cable assembly products ensure efficient power and signal transmission across complex aircraft systems.
                      </p>
                      <p className="text-black">
                        We deliver precision-engineered aircraft electrical wiring harness systems that meet stringent aerospace standards for performance, durability, and safety.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Aircraft Electrical Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Aircraft Electrical Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An Aircraft Electrical Harness is an integrated assembly of wires, cables, connectors, and protective components used to transmit electrical power and signals within aircraft systems.
                      </p>
                      <p className="text-black font-semibold">Also known as:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>aircraft wiring harness</li>
                        <li>airplane wiring harness</li>
                        <li>avionics wiring harness</li>
                        <li>aircraft electrical system harness</li>
                      </ul>
                      <p className="text-black font-semibold">It plays a critical role in:</p>
                      <ul className="list-disc pl-5 space-y-1 text-black">
                        <li>avionics systems</li>
                        <li>engine control systems</li>
                        <li>navigation and communication</li>
                        <li>flight control systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Aircraft Electrical Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Electrical Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Reliability & Safety</h3>
                        <p className="text-black pl-5">Engineered for mission-critical applications such as fighter aircraft electrical harness and military aircraft wiring harness.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Lightweight & Compact Design</h3>
                        <p className="text-black pl-5">Optimized aircraft cable harness assembly reduces aircraft weight while maintaining performance.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">High Temperature & Vibration Resistance</h3>
                        <p className="text-black pl-5">Suitable for harsh aerospace environments including aerospace electrical wiring harness systems.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Configuration</h3>
                        <p className="text-black pl-5">Available as custom aircraft electrical harness manufacturer solutions for specific aircraft needs.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">EMI/RFI Shielding</h3>
                        <p className="text-black pl-5">Ensures clean signal transmission in aircraft avionics electrical harness systems.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications of Aircraft Electrical Harness */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Aircraft Electrical Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Aircraft Electrical Harnesses to your environmental, electrical, and routing requirements.
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
                          <td className="px-4 py-2 border-b">Insulation Type</td>
                          <td className="px-4 py-2 border-b">PTFE / ETFE / XLPE</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Shielding</td>
                          <td className="px-4 py-2 border-b">Braided / Foil Shielded</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Connector Type</td>
                          <td className="px-4 py-2 border-b">Aerospace-grade connectors</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance</td>
                          <td className="px-4 py-2 border-b">Aviation & Defence Standards</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Assembly Type</td>
                          <td className="px-4 py-2 border-b">Modular aircraft electrical cable assembly aerospace</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Aircraft Electrical Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aircraft Electrical Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Aircraft Wiring Harness</li>
                      <li>Aviation Wiring Harness</li>
                      <li>Aircraft Electrical Cable Harness</li>
                      <li>Aerospace Electrical Harness</li>
                      <li>Aircraft Signal Wiring Harness</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Avionics Wiring Harness</li>
                      <li>Defence Aircraft Electrical Harness</li>
                      <li>Military Aircraft Wiring Harness</li>
                      <li>Fighter Aircraft Electrical Harness</li>
                      <li>Electrical Harness for Aircraft Systems</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits of Aircraft Electrical Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Electrical Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Ensures safe and reliable electrical connectivity</li>
                      <li>Reduces installation complexity</li>
                      <li>Improves aircraft system performance</li>
                      <li>Minimizes maintenance requirements</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Enhances durability in extreme conditions</li>
                      <li>Supports efficient aircraft electrical wiring system integration</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications of Aircraft Electrical Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Electrical Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Commercial Aircraft Systems</li>
                      <li>Military & Defence Aircraft</li>
                      <li>Fighter Jets & Helicopters</li>
                      <li>UAV & Drone Systems</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Avionics and Navigation Systems</li>
                      <li>Engine & Fuel Control Systems</li>
                    </ul>
                  </div>
                  <p className="text-black mt-4">
                    Widely used in: aerospace electrical harness supplier networks, aviation electrical harness supplier applications.
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
                        Our aircraft electrical harness systems support:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Fault detection & isolation</li>
                        <li>Signal integrity monitoring</li>
                        <li>Integrated diagnostic interfaces</li>
                        <li>Compatibility with onboard aircraft systems</li>
                        <li>Easy maintenance and inspection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Aircraft Electrical Harness */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aircraft Electrical Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Leading aircraft electrical harness manufacturer</li>
                      <li>Expertise in aerospace electrical cable assembly</li>
                      <li>Custom-engineered solutions</li>
                      <li>High-quality materials & testing standards</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-black">
                      <li>Trusted aircraft cable harness manufacturer</li>
                      <li>Competitive aircraft electrical wiring harness price</li>
                      <li>Reliable global supply for aviation & defence sectors</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Aircraft Electrical Harness from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black font-semibold">
                        Looking for a reliable aviation electrical harness supplier?
                      </p>
                      <p className="text-black">
                        Jetsys Defence offers:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        <li>Custom design & development</li>
                        <li>Bulk manufacturing capabilities</li>
                        <li>Fast delivery timelines</li>
                        <li>End-to-end support</li>
                      </ul>
                      <p className="text-black font-medium mt-4">
                        Contact us today to get the best aircraft electrical harness solutions tailored to your aerospace requirements.
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