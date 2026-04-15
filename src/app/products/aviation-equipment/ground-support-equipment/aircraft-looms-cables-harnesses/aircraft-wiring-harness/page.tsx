import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Wiring Harness Manufacturer | Aerospace Cable Assembly – Jetsys Defence",
  description:
    "High-quality Aircraft Wiring Harness by Jetsys Defence. Trusted aerospace wiring harness manufacturer offering custom aircraft cable assemblies, avionics harness & defence solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses/aircraft-wiring-harness",
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
                Aircraft Wiring Harness – Advanced Aerospace Cable Assembly by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence is a leading aircraft wiring harness manufacturer delivering high-performance aerospace wiring harness and aircraft cable assembly solutions for aviation and defence applications. Our aircraft wiring harness systems are engineered to meet strict aerospace standards, ensuring reliability, durability, and optimal signal transmission across critical aircraft systems.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/aircraft-wiring-harness.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Wiring Harness by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Aircraft Looms, Cables & Harnesses Solutions */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Aircraft Looms, Cables & Harnesses Solutions</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        As one of the trusted aviation wire harness manufacturers, Jetsys Defence specializes in custom aircraft wiring harness, aircraft wire harness assembly, and aerospace cable assembly solutions tailored for modern aircraft and defence platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Company Product by Jetsys Defence */}
              <section>
                <br />
                <div>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <h3 className="font-bold text-2xl text-[#5C5649] mb-3">Aircraft Wiring Harness System</h3>
                      <p className="text-black">
                        Jetsys Defence offers a complete range of aircraft electrical wiring harness, avionics wire harness, and aircraft signal wiring harness designed for high-performance aerospace environments.
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
                        Our aircraft wiring harness solutions are designed to support complex aircraft electrical systems wiring, ensuring seamless integration between avionics, engines, and control systems. Built with precision, these harnesses provide efficient power and signal distribution.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is Aircraft Wiring Harness? */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What is Aircraft Wiring Harness?</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        An aircraft wiring harness is a structured assembly of wires, connectors, and protective materials used to transmit electrical signals and power throughout an aircraft. It plays a critical role in the aircraft wiring system, connecting avionics, engines, sensors, and communication systems.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features of Aircraft Wiring Harness - Split Left & Right */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> High-quality aerospace construction</h3>
                        <p className="text-gray-600 pl-5">Premium materials and precision engineering for superior performance in demanding aviation environments.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Custom-built cable harness assembly</h3>
                        <p className="text-gray-600 pl-5">Tailored solutions designed to meet specific aircraft requirements and installation constraints.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> EMI/EMC shielding for avionics</h3>
                        <p className="text-gray-600 pl-5">Advanced electromagnetic protection ensures clean signal transmission and system reliability.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Precision-engineered engine harness</h3>
                        <p className="text-gray-600 pl-5">Specialized designs capable of withstanding extreme temperatures and vibrations near engine compartments.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Lightweight & durable wire loom</h3>
                        <p className="text-gray-600 pl-5">Optimized weight-to-strength ratio contributing to overall aircraft fuel efficiency and performance.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> High-temperature & vibration resistance</h3>
                        <p className="text-gray-600 pl-5">Robust construction ensures reliable operation under extreme thermal and mechanical stress.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Reliable avionics wiring harness</h3>
                        <p className="text-gray-600 pl-5">Mission-critical connectivity for navigation, communication, and flight control systems.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Flexible routing for complex layouts</h3>
                        <p className="text-gray-600 pl-5">Adaptable designs that navigate tight spaces and intricate airframe geometries with ease.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications - Keep as Table */}
              <section>
                <br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">Technical Specifications of Aircraft Wiring Harness</h2>
                  <p className="text-gray-700 mb-4">
                    Representative values. Jetsys Defence custom-engineers Aircraft Wiring Harnesses to your environmental, electrical, and routing requirements.
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
                        <tr><td className="px-4 py-2 border-b">Voltage Range</td><td className="px-4 py-2 border-b">As per aircraft system requirements</td></tr>
                        <tr><td className="px-4 py-2 border-b">Temperature Range</td><td className="px-4 py-2 border-b">-55°C to +200°C</td></tr>
                        <tr><td className="px-4 py-2 border-b">Insulation</td><td className="px-4 py-2 border-b">Aerospace-grade materials</td></tr>
                        <tr><td className="px-4 py-2 border-b">Shielding</td><td className="px-4 py-2 border-b">EMI/RFI protected</td></tr>
                        <tr><td className="px-4 py-2 border-b">Connector Type</td><td className="px-4 py-2 border-b">MIL-spec connectors</td></tr>
                        <tr><td className="px-4 py-2 border-b">Compliance</td><td className="px-4 py-2 border-b">Aviation & defence standards</td></tr>
                        <tr><td className="px-4 py-2 border-b">Assembly Type</td><td className="px-4 py-2 border-b">Custom aircraft wire harness assembly</td></tr>
                        <tr><td className="px-4 py-2 border-b">Application</td><td className="px-4 py-2 border-b">Aircraft electrical system wiring, avionics, engine systems</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants of Aircraft Wiring Harness - Split Left & Right */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Avionics Wire Harness</h3>
                        <p className="text-gray-600 pl-5">Specialized wiring solutions for navigation, communication, and mission computer systems.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Aircraft Engine Harness</h3>
                        <p className="text-gray-600 pl-5">High-temperature resistant harnesses for engine controls, FADEC, and monitoring systems.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Fighter Aircraft Wiring Harness</h3>
                        <p className="text-gray-600 pl-5">Mil-spec ruggedized harnesses for high-performance combat aircraft applications.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">Custom Aircraft Wiring Harness</h3>
                        <p className="text-gray-600 pl-5">Bespoke solutions designed to your exact specifications and platform requirements.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Aircraft Signal Wiring Harness</h3>
                        <p className="text-gray-600 pl-5">Precision-engineered for clean data transmission and sensor integration.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Military Aircraft Wiring Harness</h3>
                        <p className="text-gray-600 pl-5">Tactical-grade harnesses built for defence and military aviation platforms.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Defence Aircraft Wiring Harness</h3>
                        <p className="text-gray-600 pl-5">Robust solutions for surveillance, transport, and special mission aircraft.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Aircraft Cable Assembly Solutions</h3>
                        <p className="text-gray-600 pl-5">Complete aerospace-grade cable assemblies for various onboard systems.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits of Aircraft Wiring Harness - Split Left & Right */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Enhanced system reliability & safety</h3>
                        <p className="text-gray-600 pl-5">Reduces risk of electrical failures and ensures consistent performance across all flight conditions.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Improved electrical performance</h3>
                        <p className="text-gray-600 pl-5">Optimized signal integrity and power distribution with minimal interference or loss.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Optimized aircraft electrical harness</h3>
                        <p className="text-gray-600 pl-5">Streamlined design reduces complexity and improves overall system efficiency.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Reduced installation complexity</h3>
                        <p className="text-gray-600 pl-5">Pre-assembled, plug-and-play solutions minimize aircraft downtime during installation.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Long service life in harsh environments</h3>
                        <p className="text-gray-600 pl-5">Durable materials and construction ensure decades of reliable operation.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Lightweight design for fuel efficiency</h3>
                        <p className="text-gray-600 pl-5">Advanced materials reduce weight without compromising strength or durability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Aircraft Wiring Harness - Split Left & Right */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Commercial aircraft systems</h3>
                        <p className="text-gray-600 pl-5">Passenger and cargo aircraft requiring high-reliability electrical distribution.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Fighter aircraft electronics</h3>
                        <p className="text-gray-600 pl-5">High-performance combat platforms demanding ruggedized wiring solutions.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Avionics & communication systems</h3>
                        <p className="text-gray-600 pl-5">Critical data and power connections for onboard electronic systems.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2">
                          
                             Ground support aerospace equipment
                        
                        </h3>
                        <p className="text-gray-600 pl-5">Durable harnesses for testing, maintenance, and ground handling equipment.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Defence & military aviation</h3>
                        <p className="text-gray-600 pl-5">Tactical and strategic military platforms including transport and surveillance.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Aircraft engine systems</h3>
                        <p className="text-gray-600 pl-5">High-temperature harnesses for engine controls, sensors, and FADEC systems.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Aerospace cable assembly integration</h3>
                        <p className="text-gray-600 pl-5">Complete integration with existing aircraft wiring and electrical systems.</p>
                      </div>
                    </div>
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
                        Jetsys Defence aircraft wiring harness systems support advanced diagnostics, ensuring easy fault detection and maintenance. Our harnesses are designed for compatibility with modern aircraft monitoring systems.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence - Split Left & Right */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Aircraft Wiring Harness</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Trusted aircraft harness manufacturers</h3>
                        <p className="text-gray-600 pl-5">Decades of experience serving defence and commercial aviation sectors.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Custom-built aviation cable harness</h3>
                        <p className="text-gray-600 pl-5">Tailored solutions for unique aircraft platforms and mission requirements.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Reliable aircraft wiring harness supplier</h3>
                        <p className="text-gray-600 pl-5">Consistent quality and on-time delivery for projects of any scale.</p>
                      </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Expertise in aerospace cable assembly</h3>
                        <p className="text-gray-600 pl-5">Specialized knowledge of aviation standards and certification requirements.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> High-quality production standards</h3>
                        <p className="text-gray-600 pl-5">ISO-certified processes with rigorous quality control and testing.</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#5C5649] mb-2"> Competitive pricing & proven performance</h3>
                        <p className="text-gray-600 pl-5">Cost-effective solutions without compromising on quality or reliability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Aircraft Wiring Harness System from Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Partner with Jetsys Defence for advanced aircraft wiring harness solutions tailored to your aerospace requirements. Whether you need custom aircraft wiring harness manufacturer services or bulk production, we deliver precision-engineered systems with unmatched quality.
                      </p>
                      <p className="text-black font-medium mt-4">
                        Contact Jetsys Defence today to get the best aviation wiring harness supplier solutions for your aircraft systems.
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