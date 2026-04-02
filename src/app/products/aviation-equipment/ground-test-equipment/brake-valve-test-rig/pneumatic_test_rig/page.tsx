import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pneumatic Test Rig Aviation Equipment | Jetsys Defence",
  description:
    "Discover pneumatic test rig by Jetsys Defence including air pressure test rigs, pneumatic valve testing systems, and compressed air testing solutions for aviation use.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig/pneumatic_test_rig",
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
                Pneumatic Test Rig – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Pneumatic Test Rig by Jetsys Defence is a high-precision aviation testing solution designed to evaluate, simulate, and validate pneumatic systems with superior accuracy. Built with advanced control systems and durable construction, this equipment ensures reliable testing of air-based systems used in aircraft and defence operations.
              </p>
              <p className="font-medium text-base">
                Our pneumatic test rig is ideal for MRO facilities, aircraft manufacturers, and defence organizations that require accurate and efficient pneumatic system validation.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Pneumatic Test Rig.png"
                  width={500}
                  height={1000}
                  alt="Pneumatic Test Rig Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Pneumatic Test Rig? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Pneumatic Test Rig?
                  </h2>
                  <p className="text-black mb-4">
                    A pneumatic test rig is specialized equipment used to test air pressure systems, pneumatic components, and control systems under controlled conditions. It replicates real-world operating environments to ensure safety, performance, and compliance.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    These systems are widely used in aviation and industrial applications for testing and validation, including:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Pneumatic system test rig for complete system evaluation</li>
                    <li>Air pressure test rig for precise pressure testing</li>
                    <li>Pneumatic testing machine for automated validation</li>
                    <li>Pneumatic test bench for controlled lab testing</li>
                    <li>Compressed air test rig for high-pressure simulation</li>
                  </ul>
                </div>
              </section>

              {/* Types of Pneumatic Test Rigs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Pneumatic Test Rigs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced configurations for various applications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Pneumatic System Test Rig</h3>
                          A complete pneumatic system test rig used for testing full air-based systems in aviation and industrial setups.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Air Pressure Test Rig</h3>
                          Designed for precise air pressure testing equipment, ensuring accurate pressure measurement and validation.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Pneumatic Valve Test Rig</h3>
                          A pneumatic valve test rig used to test valve performance, leakage, and pressure response.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Pneumatic Actuator Test Rig</h3>
                          Used for evaluating actuator performance in aircraft pneumatic systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">5. Compressed Air Test Rig</h3>
                          A compressed air test rig designed for high-pressure testing and simulation of real operating conditions.
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
                    Applications of Pneumatic Test Rig
                  </h2>
                  <p className="text-black mb-4">
                    The pneumatic test rig from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Aircraft manufacturing and system validation</li>
                    <li>Defence aviation testing facilities</li>
                    <li>Testing of pneumatic valves, actuators, and air systems</li>
                    <li>Aerospace and industrial engineering applications</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our pneumatic testing machine ensures accurate results in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Pneumatic Test Rig
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision air pressure control system</li>
                        <li>Real-time monitoring and data analysis</li>
                        <li>PLC-based automation for efficient testing</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable and heavy-duty construction</li>
                        <li>Designed to meet aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our pneumatic test bench ensures consistent and repeatable testing performance.
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
                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted name in aviation equipment manufacturing, delivering advanced testing solutions for critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>High-performance pneumatic test rigs</li>
                    <li>Reliable air pressure test rig systems</li>
                    <li>Custom-built solutions for aviation and defence</li>
                    <li>Long-lasting and efficient equipment</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Pneumatic Test Rig Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a pneumatic test rig depends on specifications such as pressure capacity, automation level, and customization. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Pneumatic valve test rig</li>
                    <li>Pneumatic actuator test rig</li>
                    <li>Compressed air test rig systems</li>
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
                  <p className="text-black mb-4">
                    The Pneumatic Test Rig by Jetsys Defence is an essential solution for aviation and defence testing applications. With advanced features like precision air pressure control, automated systems, and real-time monitoring, our equipment ensures accurate, efficient, and reliable testing of pneumatic systems.
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