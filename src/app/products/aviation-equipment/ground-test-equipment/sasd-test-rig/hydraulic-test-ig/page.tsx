import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Hydraulic Test Rig | Jetsys Defence Aviation Equipment",
  description:
    "Explore hydraulic test rig by Jetsys Defence including hydraulic pump test rig, cylinder test rig, and aircraft hydraulic testing systems for precise performance validation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/sasd-test-rig/hydraulic-test-ig",
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
                Hydraulic Test Rig – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Hydraulic Test Rig by Jetsys Defence is a high-performance aviation testing solution designed to test,
                calibrate, and validate hydraulic systems used in aircraft and defence applications. Engineered with
                advanced control systems and durable construction, this equipment ensures accurate performance,
                reliability, and compliance with aviation standards. Our hydraulic test rig is ideal for MRO facilities,
                aircraft manufacturers, and defence aviation sectors where precision hydraulic testing is critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/sasd-test-rig.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Test Rig by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Hydraulic Test Rig? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Hydraulic Test Rig?
                  </h3>
                  <p className="text-black mb-4">
                    A hydraulic test rig is specialized equipment used to simulate and test hydraulic systems under
                    controlled conditions. It evaluates performance, pressure, flow, and system integrity to ensure
                    safe and efficient operation.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Hydraulic pump test rig for pump performance evaluation,
                    Hydraulic cylinder test rig for actuator testing, Hydraulic test rig for aircraft for aviation
                    applications, Hydro test rig for pressure and leak testing.
                  </p>
                </div>
              </section>

              {/* Types of Hydraulic Test Rigs */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Hydraulic Test Rigs
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced hydraulic testing solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Hydraulic Pump Test Rig</h4>
                          A high-precision hydraulic pump test rig designed to evaluate pump efficiency, pressure
                          output, and performance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Hydraulic Cylinder Test Rig</h4>
                          Specialized hydraulic cylinder test rig used for testing actuators and cylinder performance
                          under load conditions.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Aircraft Hydraulic Test Rig</h4>
                          Advanced hydraulic test rig for aircraft designed for testing aviation hydraulic systems with
                          high accuracy.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Hydro Test Rig</h4>
                          Reliable hydro test rig used for pressure testing, leak detection, and system validation.
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
                    Applications of Hydraulic Test Rig
                  </h3>
                  <p className="text-black mb-4">
                    The hydraulic test rig from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft hydraulic system testing and validation</li>
                        <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                        <li>Defence aviation testing facilities</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Hydraulic component manufacturing and quality control</li>
                        <li>Pressure and performance testing operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our systems ensure accurate and reliable hydraulic testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Hydraulic Test Rig
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision pressure and flow control</li>
                        <li>Real-time monitoring and data analysis</li>
                        <li>Advanced automation and control systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable aviation-grade construction</li>
                        <li>Designed to meet global aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our hydraulic test rig ensures consistent and repeatable testing performance.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced hydraulic
                    testing solutions for mission-critical applications.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance hydraulic test rig systems</li>
                        <li>Reliable hydraulic pump and cylinder test rigs</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced hydraulic test rig for aircraft solutions</li>
                        <li>Custom-built systems for aviation and defence</li>
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
                    Hydraulic Test Rig Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a hydraulic test rig depends on system capacity, pressure range, and automation level.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic pump test rig systems</li>
                    <li>Hydraulic cylinder test rig equipment</li>
                    <li>Aircraft hydraulic testing systems</li>
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
                    The Hydraulic Test Rig by Jetsys Defence is an essential solution for ensuring the safety,
                    efficiency, and performance of hydraulic systems in aviation and defence applications. With
                    advanced features like precision pressure control, real-time monitoring, and robust construction,
                    our equipment delivers accurate and reliable testing results.
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