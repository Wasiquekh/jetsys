import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Component Test Bench | Jetsys Defence Aviation",
  description:
    "Explore aircraft component test bench by Jetsys Defence for precise testing of hydraulic, pneumatic, and avionics components ensuring performance and safety.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/sasd-test-rig/aircraft-component-test-bench",
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
                Aircraft Component Test Bench – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Component Test Bench by Jetsys Defence is a high-precision aviation testing solution designed
                to test, calibrate, and validate individual aircraft components under controlled conditions. Engineered
                with advanced automation and aviation-grade construction, this system ensures accurate performance,
                reliability, and compliance with global aviation standards. Our aircraft component test bench is ideal
                for MRO facilities, aircraft manufacturers, and defence aviation sectors where precise component testing
                is critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft-component-test-bench.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Component Test Bench by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Component Test Bench? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Component Test Bench?
                  </h3>
                  <p className="text-black mb-4">
                    An aircraft component test bench is specialized equipment used to test and evaluate the performance of
                    aircraft components such as hydraulic units, pneumatic systems, valves, actuators, and avionics modules.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Aircraft component testing equipment for performance validation,
                    Aviation test bench systems for controlled testing, Aircraft system test bench for integrated component
                    analysis, Aerospace component testing systems.
                  </p>
                </div>
              </section>

              {/* Types of Aircraft Component Test Benches */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Component Test Benches
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced testing solutions for various aviation components:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Hydraulic Component Test Bench</h4>
                          Designed for testing hydraulic systems, pumps, valves, and actuators with high precision.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Pneumatic Component Test Bench</h4>
                          Used for testing compressed air systems and pneumatic components in aircraft.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Avionics Test Bench</h4>
                          Advanced aircraft component test bench systems for testing avionics modules and communication systems.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Electrical & Electronic Test Bench</h4>
                          Used for testing electrical circuits, control units, and aircraft electronic systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">5. Integrated Aircraft Component Test Bench</h4>
                          A complete aircraft system test bench combining multiple testing capabilities in a single system.
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Component Test Bench
                  </h3>
                  <p className="text-black mb-4">
                    The aircraft component test bench from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                        <li>Aircraft manufacturing and quality control</li>
                        <li>Defence aviation testing facilities</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Component performance validation and calibration</li>
                        <li>Aerospace research and development</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our systems ensure accurate and reliable testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Component Test Bench
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision testing and measurement systems</li>
                        <li>Real-time monitoring and data analysis</li>
                        <li>Advanced automation and control systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Modular and customizable design</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our aircraft component test bench ensures consistent and repeatable testing performance.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing solutions
                    for critical applications.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance aircraft component test bench systems</li>
                        <li>Reliable aerospace component testing equipment</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced aviation test bench systems</li>
                        <li>Custom-built solutions for aviation and defence</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Component Test Bench Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of an aircraft component test bench depends on system configuration, testing capability,
                    and automation level. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic component test benches</li>
                    <li>Pneumatic component test systems</li>
                    <li>Integrated aircraft system test benches</li>
                  </ul>
                  <p className="text-black mt-4">
                    To receive a quote or locate the nearest service branch, contact Jetsys Defence today.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h3>
                  <p className="text-black">
                    The Aircraft Component Test Bench by Jetsys Defence is an essential solution for ensuring the performance,
                    safety, and reliability of aircraft components. With advanced features like precision testing, real-time
                    monitoring, and modular design, our systems deliver accurate and efficient testing results for aviation
                    and defence applications.
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