import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Hydraulic & Pneumatic Test System | Jetsys Defence Aviation",
  description:
    "Explore hydraulic & pneumatic test system by Jetsys Defence including hydro pneumatic test solutions for accurate aircraft system testing and validation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/sasd-test-rig/hydraulic-&-pneumatic-test-system",
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
                Hydraulic & Pneumatic Test System – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Hydraulic & Pneumatic Test System by Jetsys Defence is a high-performance aviation testing solution designed
                to test, calibrate, and validate both hydraulic and pneumatic systems used in aircraft and defence applications.
                Engineered with advanced control systems and robust construction, this equipment ensures accurate performance,
                safety, and compliance with global aviation standards. Our hydraulic & pneumatic test system is ideal for
                MRO facilities, aircraft manufacturers, and defence aviation operations where integrated system testing is critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/hydraulic-&-pneumatic-test-system.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic & Pneumatic Test System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Hydraulic & Pneumatic Test System? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Hydraulic & Pneumatic Test System?
                  </h3>
                  <p className="text-black mb-4">
                    A hydraulic & pneumatic test system is specialized equipment used to simulate and evaluate both fluid-based
                    (hydraulic) and air-based (pneumatic) systems under controlled conditions. It ensures proper system
                    performance, pressure stability, and leak detection.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Hydraulic & pneumatic test system for combined system validation,
                    Hydro pneumatic test for pressure and performance testing, Aircraft system testing and calibration,
                    Integrated hydraulic and pneumatic performance evaluation.
                  </p>
                </div>
              </section>

              {/* Types of Hydraulic & Pneumatic Test Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Hydraulic & Pneumatic Test Systems
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced integrated testing solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Combined Hydraulic & Pneumatic Test System</h4>
                          A high-precision hydraulic & pneumatic test system designed for simultaneous testing of hydraulic
                          and pneumatic systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Hydro Pneumatic Test System</h4>
                          Advanced hydro pneumatic test equipment used for pressure testing, leak detection, and system validation.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Aircraft Hydraulic & Pneumatic Test System</h4>
                          Specialized systems designed for aircraft hydraulic & pneumatic testing with aviation-grade accuracy.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Automated Test System</h4>
                          Fully automated systems with advanced monitoring and control for efficient and repeatable testing processes.
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
                    Applications of Hydraulic & Pneumatic Test System
                  </h3>
                  <p className="text-black mb-4">
                    The hydraulic & pneumatic test system from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft system testing and validation</li>
                        <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                        <li>Defence aviation testing facilities</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Hydraulic and pneumatic component manufacturing</li>
                        <li>Pressure testing and leak detection operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our systems ensure accurate and reliable performance testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Hydraulic & Pneumatic Test System
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision pressure and flow control</li>
                        <li>Real-time monitoring and data analysis</li>
                        <li>Integrated hydraulic and pneumatic testing capability</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced automation and control systems</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our hydraulic & pneumatic test system ensures consistent and repeatable testing performance.
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
                    for mission-critical applications.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance hydraulic & pneumatic test systems</li>
                        <li>Reliable hydro pneumatic test solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced integrated testing systems for aviation</li>
                        <li>Custom-built solutions for defence and aerospace</li>
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
                    Hydraulic & Pneumatic Test System Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a hydraulic & pneumatic test system depends on system capacity, pressure range, and automation level.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Combined hydraulic & pneumatic test systems</li>
                    <li>Hydro pneumatic test equipment</li>
                    <li>Aircraft testing systems</li>
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
                    The Hydraulic & Pneumatic Test System by Jetsys Defence is an essential solution for ensuring the safety,
                    efficiency, and performance of integrated aircraft systems. With advanced features like precision pressure
                    control, real-time monitoring, and dual-system testing capability, our equipment delivers accurate and
                    reliable testing results for aviation and defence applications.
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