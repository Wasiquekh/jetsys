import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Military Ground Power Unit | Aviation Pneumatic Control Panel System | Jetsys Defence",
  description:
    "Military Ground Power Unit with aviation pneumatic control panel system by Jetsys Defence. Advanced aircraft pneumatic control system for reliable ground operations and defense aviation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/aircraft-pneumatic-control-panel",
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
                Military Ground Power Unit with Aviation Pneumatic Control Panel System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence delivers a high-performance Military Ground Power Unit integrated with an advanced aviation
                pneumatic control panel system, designed under the Aviation Equipment – Pneumatic Control Panel category.
                This solution combines electrical power and pneumatic control for efficient aircraft ground support. As a
                trusted aircraft pneumatic control panel manufacturer, Jetsys Defence provides robust and customizable
                systems for military and civil aviation applications.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/equipment.png"
                  width={500}
                  height={1000}
                  alt="Military Ground Power Unit with Aviation Pneumatic Control Panel by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Product Overview
                  </h2>
                  <p className="text-black mb-4">
                    The Military Ground Power Unit with an integrated aircraft pneumatic control panel system is a dual-purpose
                    solution that delivers both electrical power and controlled compressed air for aircraft operations.
                  </p>
                  <p className="text-black">
                    This system supports a complete aircraft pneumatic distribution system, ensuring efficient and safe ground
                    handling, maintenance, and testing operations in aviation environments.
                  </p>
                </div>
              </section>

              {/* What is Military Ground Power Unit with Pneumatic Control Panel? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Military Ground Power Unit with Pneumatic Control Panel?
                  </h2>
                  <p className="text-black mb-4">
                    A Military Ground Power Unit combined with an aviation pneumatic control panel is a ground support system
                    that supplies electrical power along with regulated compressed air to aircraft systems.
                  </p>
                  <p className="text-black">
                    It functions as a comprehensive aircraft compressed air control system, enabling operations such as engine
                    support, system testing, and maintenance through a precise aircraft air pressure control system.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Military Ground Power Unit with Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Integrated Power & Pneumatic System</h4>
                          Combines Military Ground Power Unit with aircraft pneumatic control system for complete ground support.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Precision Air Pressure Regulation</h4>
                          Ensures accurate and stable output through an advanced aircraft air pressure control system.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Control Panel Design</h4>
                          Equipped with a high-performance aircraft pneumatic control panel system for easy operation.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged Aviation-Grade Build</h4>
                          Designed for durability in demanding aviation and defense environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Customizable Configurations</h4>
                          Supports custom aircraft pneumatic control panel solutions for different aircraft needs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Specifications of Military Ground Power Unit
                  </h2>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="px-4 py-2 border-b">Electrical Output</td><td className="px-4 py-2 border-b">400 Hz AC / 28.5V DC (configurable)</td></tr>
                        <tr><td className="px-4 py-2 border-b">Pneumatic Output</td><td className="px-4 py-2 border-b">Controlled compressed air supply</td></tr>
                        <tr><td className="px-4 py-2 border-b">Pressure Range</td><td className="px-4 py-2 border-b">Adjustable as per aircraft systems</td></tr>
                        <tr><td className="px-4 py-2 border-b">Control Interface</td><td className="px-4 py-2 border-b">Digital / Analog control panel</td></tr>
                        <tr><td className="px-4 py-2 border-b">Cooling System</td><td className="px-4 py-2 border-b">Air-cooled</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mobility</td><td className="px-4 py-2 border-b">Portable / Towable / Fixed</td></tr>
                        <tr><td className="px-4 py-2 border-b">Protection</td><td className="px-4 py-2 border-b">Overload, Overpressure, Short Circuit</td></tr>
                        <tr><td className="px-4 py-2 border-b">Construction</td><td className="px-4 py-2 border-b">Aviation-grade rugged design</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Variants of Military Ground Power Unit with Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Portable Aircraft Pneumatic Control Panel Systems</li>
                        <li>Fixed Aviation Compressed Air Distribution Panel Units</li>
                        <li>Aircraft Bleed Air Control Panel Systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Military Aircraft Pneumatic Control Panel Units</li>
                        <li>Custom Aircraft Pneumatic Control Panel Systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    These variants ensure flexibility for diverse aviation equipment requirements.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Military Ground Power Unit with Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Dual functionality: electrical power + pneumatic control</li>
                        <li>Reliable aircraft pneumatic distribution system</li>
                        <li>Enhances aircraft maintenance and testing efficiency</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reduces reliance on onboard aircraft systems</li>
                        <li>Improves operational readiness in aviation environments</li>
                        <li>Durable and cost-effective long-term solution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Military Ground Power Unit with Pneumatic Control Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft ground operations and servicing</li>
                        <li>Engine start support using pneumatic systems</li>
                        <li>Avionics and system testing</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft pneumatic control panel for ground operations</li>
                        <li>Maintenance and inspection of aircraft systems</li>
                        <li>Military and civil aviation environments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Control & Diagnostics
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Digital interface for real-time monitoring</li>
                        <li>Pressure and voltage display systems</li>
                        <li>Fault detection and alert mechanisms</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Performance diagnostics for aircraft pneumatic control panel system</li>
                        <li>Optional remote monitoring capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Military Ground Power Unit
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Trusted aircraft pneumatic control panel supplier</li>
                        <li>Expertise in aviation pneumatic and power systems</li>
                        <li>High-quality and durable aviation-grade products</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built solutions for various aircraft types</li>
                        <li>Proven performance in aviation and defence sectors</li>
                        <li>Dedicated technical support and service</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence is a reliable aircraft pneumatic control panel manufacturer delivering advanced aviation equipment solutions.
                  </p>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Our Military Ground Power Unit System from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Upgrade your aviation operations with Jetsys Defence&apos;s Military Ground Power Unit integrated with aircraft
                    pneumatic control panel system. Whether you need a custom aircraft pneumatic control panel or a complete
                    integrated system, we provide tailored solutions for maximum efficiency and performance.
                  </p>
                  <p className="text-black mt-4">
                    Contact Jetsys Defence today to enhance your aviation ground support systems.
                  </p>
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