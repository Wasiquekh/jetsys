import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Power Supply System | Portable GPU – Jetsys Defence",
  description:
    "Discover Aircraft Power Supply Systems by Jetsys Defence. High-performance portable aircraft ground power units for reliable aviation power in airports and field operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/mobile_ground_power_unit",
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
                Aircraft Power Supply System – Portable Ground Power Solutions by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence provides advanced Aircraft Power Supply System solutions with a strong focus on portable
                aircraft ground power unit systems. Designed for flexibility and efficiency, our aviation power solutions
                ensure reliable electrical supply for aircraft during ground handling, maintenance, and remote operations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/mobile_ground_power_unit.png"
                  width={500}
                  height={1000}
                  alt="Portable Aircraft Power Supply System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Power Supply System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Power Supply System?
                  </h2>
                  <p className="text-black mb-4">
                    An Aircraft Power Supply System is used to deliver electrical power to aircraft when onboard engines
                    are not running. Also known as aircraft ground power supply or external aircraft power system, it plays
                    a critical role in supporting avionics, lighting, and onboard systems.
                  </p>
                  <p className="text-black">
                    Portable systems such as portable aircraft ground power unit are widely used for their mobility and
                    ease of deployment across airports and remote aviation environments.
                  </p>
                </div>
              </section>

              {/* Key Features of Portable Aircraft Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Portable Aircraft Ground Power Units
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobility and Flexibility</h4>
                          Our portable aircraft ground power units are designed for easy transport, making them ideal for
                          runway operations, hangars, and remote airfields.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable Power Output</h4>
                          Delivers stable and efficient aircraft electrical power supply, ensuring smooth aircraft servicing
                          and operations.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Compact and Efficient Design</h4>
                          Optimized for space and performance, these portable aviation power units provide high output with
                          minimal footprint.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Versatile Applications</h4>
                          Supports a wide range of aircraft systems including external aircraft power supply and ground
                          servicing equipment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Portable Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Portable Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Portable Ground Power Units (GPU)</h4>
                          Flexible portable aircraft ground power unit solutions for mobile airport operations and field
                          deployment.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile Ground Power Carts</h4>
                          Easy-to-move ground power cart aircraft systems for efficient aircraft turnaround.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Compact External Power Units</h4>
                          Portable external aircraft power units designed for quick connection and reliable output.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Portable Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Portable Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport ground handling and aircraft turnaround</li>
                        <li>Aircraft maintenance and repair operations (MRO)</li>
                        <li>Remote airfield and field operations</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Military and defense aviation</li>
                        <li>Emergency backup aircraft power</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence systems are widely used in aviation ground power systems, portable aircraft power units,
                    and airport ground power operations.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Portable Aircraft Power Systems? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence Portable Aircraft Power Systems?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Engineering</h4>
                          High-performance aircraft power supply systems built for aviation-grade reliability.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Easy Deployment</h4>
                          Portable and mobile solutions ensure quick setup and operation across multiple aircraft positions.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Wide Compatibility</h4>
                          Compatible with various aircraft types including commercial, military, and light aircraft.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Durable and Cost-Effective</h4>
                          Designed for long-term use with optimized performance and operational efficiency.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Capabilities */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Capabilities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Efficient portable aircraft ground power unit systems</li>
                        <li>Advanced aircraft ground power supply solutions</li>
                        <li>Compact and mobile aviation power systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Designed for continuous and reliable operation</li>
                        <li>Suitable for diverse aviation environments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Growing Demand for Portable Aircraft Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Growing Demand for Portable Aircraft Ground Power Units
                  </h2>
                  <p className="text-black">
                    With increasing aviation activity and demand for flexible operations, portable aircraft ground power
                    units, mobile ground power systems, and external aircraft power supply solutions are becoming essential
                    across airports and defense sectors. Jetsys Defence delivers scalable solutions for modern aviation needs.
                  </p>
                </div>
              </section>

              {/* Order Aircraft Power Supply System from Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Aircraft Power Supply System from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Jetsys Defence offers high-quality Aircraft Power Supply System solutions, including advanced portable
                    aircraft ground power unit systems. Our solutions are engineered for reliability, flexibility, and
                    performance in all aviation environments.
                  </p>
                  <p className="text-black mt-4">
                    To receive a quote or locate the nearest service branch, contact Jetsys Defence today.
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