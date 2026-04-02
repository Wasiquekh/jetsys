import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Testing Equipment | Jetsys Defence Aviation Solutions",
  description:
    "Explore aircraft testing equipment by Jetsys Defence including hydraulic test rigs, pitot static testers, avionics and EMI EMC testing systems for aviation safety.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig/aircraft_testing_equipment",
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
                Aircraft Testing Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Testing Equipment by Jetsys Defence is a comprehensive range of high-precision aviation testing solutions designed to ensure safety, performance, and compliance of aircraft systems. Engineered with advanced technology and robust construction, our equipment supports accurate testing across hydraulic, pneumatic, electrical, and structural systems.
              </p>
              <p className="font-medium text-base">
                Our aircraft testing equipment is ideal for MRO facilities, aircraft manufacturers, and defence aviation operations where reliability and precision are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Aircraft Testing Equipment.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Testing Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Aircraft Testing Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Aircraft Testing Equipment?
                  </h2>
                  <p className="text-black mb-4">
                    Aircraft testing equipment refers to specialized tools and systems used to evaluate, inspect, and validate aircraft components and systems under real-world and simulated conditions. These systems ensure that all aircraft parts meet strict aviation safety standards.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    These solutions include advanced systems such as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic test rig for aircraft for pressure and flow testing</li>
                    <li>Aircraft pitot static test equipment for air data system validation</li>
                    <li>Aircraft transponder test equipment for communication system checks</li>
                    <li>Aircraft engine test equipment for performance evaluation</li>
                  </ul>
                </div>
              </section>

              {/* Types of Aircraft Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Testing Equipment
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence provides a wide range of aviation testing solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Hydraulic & Pressure Testing Equipment</h3>
                          Includes: Hydraulic test stand for aircraft, Hydraulic test rig for aircraft. Used for testing hydraulic systems, actuators, and fluid circuits.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Avionics Testing Equipment</h3>
                          Includes: Aircraft transponder tester, Aircraft transponder test equipment. Used for validating communication and navigation systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Pitot Static Testing Equipment</h3>
                          The aircraft pitot static test equipment ensures accurate airspeed, altitude, and pressure readings.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. EMI/EMC Testing Systems</h3>
                          Includes: Aircraft EMI testing, Aircraft EMC testing, Aircraft EMI EMC testing. Used for ensuring electromagnetic compatibility and system integrity.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">5. Engine & System Testing Equipment</h3>
                          The aircraft engine test equipment is used for performance analysis and validation of aircraft engines and systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">6. Non-Destructive Testing (NDT) Equipment</h3>
                          Includes: Ultrasonic testing aircraft, Aircraft eddy current testing near me. Used for structural inspection without damaging components.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">7. Oxygen System Testing Equipment</h3>
                          Includes: Aircraft oxygen bottle hydrostatic test, Aircraft oxygen bottle hydrostatic test near me. Used for safety testing of oxygen cylinders and systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">8. Aircraft Ground Test Equipment</h3>
                          Comprehensive aircraft ground test equipment used for on-ground inspection and validation of aircraft systems.
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
                    Applications of Aircraft Testing Equipment
                  </h2>
                  <p className="text-black mb-4">
                    The aircraft testing equipment from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Aircraft manufacturing and quality control</li>
                    <li>Defence aviation testing facilities</li>
                    <li>Avionics and communication system validation</li>
                    <li>Structural and safety inspections</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our solutions support complete aircraft testing processes across all critical systems.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Testing Equipment
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision testing and measurement systems</li>
                        <li>Real-time monitoring and data analysis</li>
                        <li>Advanced automation with PLC-based control</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable and aviation-grade construction</li>
                        <li>Designed to meet global aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our aircraft ground test equipment ensures accurate and reliable performance in demanding environments.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing solutions for mission-critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Complete range of aircraft testing equipment</li>
                    <li>Reliable hydraulic test rig for aircraft solutions</li>
                    <li>Advanced aircraft transponder tester systems</li>
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
                    Aircraft Testing Equipment Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of aircraft testing equipment depends on system type, testing capacity, and automation level. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic test stand for aircraft</li>
                    <li>Aircraft pitot static test equipment</li>
                    <li>Aircraft engine test equipment</li>
                    <li>Aircraft ground test equipment systems</li>
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
                    The Aircraft Testing Equipment by Jetsys Defence is an essential solution for ensuring aircraft safety, reliability, and performance. With advanced systems such as hydraulic test rigs, avionics testing tools, and EMI/EMC testing equipment, our products deliver precise, efficient, and reliable testing across all aviation applications.
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