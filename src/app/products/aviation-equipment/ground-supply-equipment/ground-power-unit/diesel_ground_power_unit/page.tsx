import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Power Supply System | Aviation Ground Power – Jetsys Defence",
  description:
    "Explore Aircraft Power Supply Systems by Jetsys Defence. Reliable aviation power solutions including 400Hz GPU, 28V DC supply, and external aircraft power systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/diesel_ground_power_unit",
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
                Aircraft Power Supply System – Advanced Aviation Power Solutions by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers high-performance Aircraft Power Supply System solutions designed for reliable and
                efficient aircraft ground operations. Our aviation-grade systems ensure uninterrupted electrical power
                supply for commercial, military, and maintenance applications.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/diesel_ground_power_unit.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Power Supply System by Jetsys Defence"
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
                    An Aircraft Power Supply System is used to provide electrical power to aircraft when engines are off.
                    Also known as aircraft ground power supply or aircraft external power supply, it supports onboard
                    systems such as avionics, lighting, and communication equipment.
                  </p>
                  <p className="text-black">
                    These systems are widely used in airports, hangars, and defense operations to ensure smooth aircraft
                    servicing and operational readiness.
                  </p>
                </div>
              </section>

              {/* Key Features of Jetsys Defence Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Application Power Output</h4>
                          Our systems support various aviation requirements including 400Hz ground power supply, 28V DC
                          aircraft power supply, and external aircraft power systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Stability and Precision</h4>
                          Designed to deliver stable and efficient aircraft electrical power supply, ensuring compatibility
                          with modern aircraft systems.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Flexible Configurations</h4>
                          Available in mobile ground power units, fixed aircraft power supply systems, and portable aviation
                          power units.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged and Durable Design</h4>
                          Built for demanding environments, ensuring long-term reliability in airport and military operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">400Hz Ground Power Systems</h4>
                          High-frequency 400Hz ground power units designed for modern aircraft requiring stable AC power.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">28V DC Aircraft Power Systems</h4>
                          Reliable 28V aircraft power supply systems used for smaller aircraft, helicopters, and ground
                          support equipment.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">External Aircraft Power Systems</h4>
                          Efficient aircraft external power supply systems for ground operations and maintenance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile and Fixed Power Units</h4>
                          Includes mobile ground power units, ground power carts, and fixed ground power systems for
                          flexible deployment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport ground operations and aircraft turnaround</li>
                        <li>Aircraft maintenance and repair (MRO)</li>
                        <li>Military and defense aviation</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Hangar and ground handling services</li>
                        <li>Emergency and backup aircraft power supply</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence solutions are widely used in aviation ground power systems, airport power supply systems,
                    and aircraft servicing operations.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Aircraft Power Supply Systems? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence Aircraft Power Supply Systems?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Engineering Expertise</h4>
                          We design high-quality aircraft power supply systems tailored for aviation industry standards.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Wide Compatibility</h4>
                          Compatible with commercial aircraft, helicopters, and advanced aviation systems.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Customizable Solutions</h4>
                          Available in multiple configurations including 400Hz GPU, 28V DC systems, and portable power units.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable Performance</h4>
                          Ensures consistent power delivery for uninterrupted aircraft operations.
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
                        <li>High-efficiency aircraft ground power supply systems</li>
                        <li>Advanced aviation electrical power systems</li>
                        <li>Support for portable and fixed aircraft power units</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Designed for continuous and safe operation</li>
                        <li>Scalable solutions for airport infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Growing Demand for Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Growing Demand for Aircraft Power Supply Systems
                  </h2>
                  <p className="text-black">
                    With increasing global air traffic and aviation infrastructure, the demand for efficient aircraft power
                    supply systems, aviation ground power units, and external aircraft power solutions continues to grow.
                    Jetsys Defence provides reliable and scalable systems to meet evolving aviation needs.
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
                    Jetsys Defence offers advanced Aircraft Power Supply System solutions designed for performance,
                    durability, and efficiency. Whether for airport operations or defense applications, our systems
                    deliver dependable power for every aircraft requirement.
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