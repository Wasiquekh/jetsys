import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Canopy Testing System | Jetsys Defence Aviation",
  description:
    "Explore aircraft canopy testing system by Jetsys Defence for pressure, impact, and optical testing ensuring canopy safety, durability, and aviation compliance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/aircraft_canopy_testing_system",
  },
};

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Aircraft Canopy Testing System – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Canopy Testing System by Jetsys Defence is a high-precision aviation testing solution
                designed to evaluate the strength, durability, and performance of aircraft canopies. Engineered with
                advanced testing technology and aviation-grade construction, this system ensures compliance with strict
                safety and operational standards.
              </p>
              <br />
              <p className="font-medium text-base">
                Our aircraft canopy testing system is ideal for fighter aircraft, defence aviation, MRO facilities,
                and aircraft manufacturers where canopy integrity and pilot safety are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft_canopy_testing_system.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Canopy Testing System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Canopy Testing System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Canopy Testing System?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    An aircraft canopy testing system is specialized equipment used to test aircraft canopies for
                    pressure resistance, structural strength, optical clarity, and impact performance. These systems
                    simulate real flight conditions to validate canopy safety and performance.
                  </p>
                  <p className="font-medium text-base">This system is widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Aircraft canopy pressure testing</li>
                    <li>Aircraft canopy impact testing</li>
                    <li>Aircraft canopy strength testing</li>
                    <li>Aircraft transparency testing system</li>
                    <li>Aviation canopy inspection system</li>
                  </ul>
                </div>
              </section>

              {/* Types of Aircraft Canopy Testing Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Canopy Testing Systems
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers advanced solutions for canopy testing:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Canopy Pressure Testing System</h4>
                          High-precision systems designed for aircraft canopy pressure testing to simulate high-altitude
                          conditions and pressure differentials.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Canopy Impact Testing Equipment</h4>
                          Advanced systems for aircraft canopy impact testing to evaluate resistance against bird
                          strikes and external impacts.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Optical Clarity Testing System</h4>
                          Precision aircraft transparency testing system used to assess visibility and optical
                          performance of canopies.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Structural Strength Testing System</h4>
                          Equipment designed for aircraft canopy strength testing and durability under stress
                          conditions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Canopy Inspection & Validation System</h4>
                          Comprehensive aviation canopy inspection system for defect detection and quality assurance.
                        </li>
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
                    Applications of Aircraft Canopy Testing System
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The aircraft canopy testing system from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Fighter aircraft canopy testing and validation</li>
                    <li>Aircraft manufacturing and quality control</li>
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Defence aviation testing facilities</li>
                    <li>Aviation research and development</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our systems ensure accurate and reliable canopy testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Canopy Testing System
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-precision pressure and impact simulation</li>
                    <li>Advanced optical testing capabilities</li>
                    <li>Real-time monitoring and data analysis</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Designed to meet global aviation safety standards</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our aircraft canopy testing system ensures consistent and repeatable testing results.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing
                    solutions for critical applications.
                  </p>
                  <p className="font-medium text-base">We provide:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>High-performance aircraft canopy testing systems</li>
                    <li>Reliable aircraft transparency testing systems</li>
                    <li>Advanced aviation canopy inspection systems</li>
                    <li>Custom-built solutions for aviation and defence</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Canopy Testing System Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of an aircraft canopy testing system depends on testing type, automation level, and
                    system configuration. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Aircraft canopy pressure testing systems</li>
                    <li>Impact and structural testing equipment</li>
                    <li>Optical clarity testing systems</li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h2>
                  <p className="font-medium text-base">
                    The Aircraft Canopy Testing System by Jetsys Defence is an essential solution for ensuring the
                    safety, durability, and performance of aircraft canopies. With advanced capabilities such as
                    pressure testing, impact resistance analysis, and optical evaluation, our system delivers accurate
                    and reliable testing results for aviation and defence applications.
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

export default Page;