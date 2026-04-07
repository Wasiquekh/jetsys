import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pneumatic Test Rig | Jetsys Defence Aviation Equipment",
  description:
    "Explore pneumatic test rig by Jetsys Defence including pneumatic system test rig, air pressure testing equipment, and compressed air testing systems for aviation use.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/sasd-test-rig/pneumatic-test-rig",
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
                The Pneumatic Test Rig by Jetsys Defence is a high-performance aviation testing solution designed to test,
                calibrate, and validate pneumatic systems used in aircraft and defence applications. Engineered with
                advanced pressure control technology and robust construction, this equipment ensures accurate performance,
                safety, and compliance with aviation standards. Our pneumatic test rig is ideal for MRO facilities,
                aircraft manufacturers, and defence aviation operations where precise air pressure testing and system
                validation are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/pneumatic-test-rig.png"
                  width={500}
                  height={1000}
                  alt="Pneumatic Test Rig by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Pneumatic Test Rig? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Pneumatic Test Rig?
                  </h3>
                  <p className="text-black mb-4">
                    A pneumatic test rig is specialized equipment used to test and simulate compressed air systems under
                    controlled conditions. It evaluates system performance, pressure levels, flow rates, and leakage to
                    ensure reliable operation.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Pneumatic system test rig for complete system validation, Air pressure
                    test rig for controlled pressure testing, Pneumatic testing machine for automated system evaluation,
                    Compressed air test rig for high-pressure simulation.
                  </p>
                </div>
              </section>

              {/* Types of Pneumatic Test Rigs */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Pneumatic Test Rigs
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced pneumatic testing solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Digital Pneumatic Test Rig</h4>
                          A high-precision pneumatic test rig with digital controls for accurate pressure and flow
                          measurement.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Portable Pneumatic Testing Equipment</h4>
                          Compact and easy-to-use pneumatic testing equipment designed for on-site aircraft maintenance
                          and field operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Aircraft Pneumatic Test Rig</h4>
                          Advanced pneumatic test rig for aircraft designed specifically for aviation pneumatic system
                          testing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Automated Pneumatic Testing System</h4>
                          Fully automated pneumatic testing machine for high-efficiency and repeatable testing processes.
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
                    Applications of Pneumatic Test Rig
                  </h3>
                  <p className="text-black mb-4">
                    The pneumatic test rig from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft pneumatic system testing and validation</li>
                        <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                        <li>Defence aviation testing facilities</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Pneumatic component manufacturing and quality control</li>
                        <li>Pressure and leak testing operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our systems ensure accurate and reliable pneumatic testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Pneumatic Test Rig
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
                    Our pneumatic test rig ensures consistent and repeatable testing performance.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced pneumatic testing
                    solutions for mission-critical applications.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance pneumatic test rig systems</li>
                        <li>Reliable pneumatic system test rig solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced air pressure test rig equipment</li>
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
                    Pneumatic Test Rig Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a pneumatic test rig depends on system capacity, pressure range, and automation level.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Digital pneumatic test rigs</li>
                    <li>Portable pneumatic testing equipment</li>
                    <li>Automated pneumatic testing systems</li>
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
                    The Pneumatic Test Rig by Jetsys Defence is an essential solution for ensuring the safety, efficiency,
                    and performance of pneumatic systems in aviation and defence applications. With advanced features like
                    precision pressure control, real-time monitoring, and robust construction, our equipment delivers
                    accurate and reliable testing results.
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