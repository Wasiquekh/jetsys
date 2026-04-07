import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Testing Equipment | Jetsys Defence Aviation Systems",
  description:
    "Explore aircraft testing equipment by Jetsys Defence including hydraulic test rigs, pitot static testers, avionics and EMI EMC testing systems for aviation safety.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/sasd-test-rig/aircraft-testing-equipment",
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
                The Aircraft Testing Equipment by Jetsys Defence is a comprehensive range of high-precision aviation testing
                solutions designed to ensure safety, performance, and compliance of aircraft systems. Engineered with advanced
                technology and aviation-grade construction, our equipment delivers accurate testing across hydraulic,
                pneumatic, avionics, and structural systems. Our aircraft testing equipment is ideal for MRO facilities,
                aircraft manufacturers, and defence aviation sectors where reliability and precision are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft-testing-equipment.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Testing Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Aircraft Testing Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Aircraft Testing Equipment?
                  </h3>
                  <p className="text-black mb-4">
                    Aircraft testing equipment refers to specialized tools and systems used to test, inspect, and validate
                    aircraft components and systems under controlled and real-world conditions. These systems ensure that
                    aircraft meet strict safety and operational standards.
                  </p>
                  <p className="text-black">
                    This equipment is widely used for: Aircraft ground test equipment for system validation,
                    Hydraulic test stand for aircraft for pressure testing, Aircraft pitot static test equipment for
                    air data system calibration, Aircraft transponder test equipment for avionics testing.
                  </p>
                </div>
              </section>

              {/* Types of Aircraft Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Testing Equipment
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of advanced testing systems:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">1. Hydraulic & Mechanical Testing Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Hydraulic test stand for aircraft</li>
                      <li>Hydraulic test rig for aircraft</li>
                      <li>Used for testing hydraulic systems, actuators, and pressure performance.</li>
                    </ul>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">2. Avionics Testing Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Aircraft transponder tester</li>
                      <li>Aircraft transponder test equipment</li>
                      <li>Used for communication and navigation system validation.</li>
                    </ul>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">3. Pitot Static & Air Data Testing Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Aircraft pitot static test equipment</li>
                      <li>Used for accurate airspeed, altitude, and pressure system testing.</li>
                    </ul>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">4. EMI / EMC Testing Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Aircraft EMI testing</li>
                      <li>Aircraft EMC testing</li>
                      <li>Aircraft EMI EMC testing</li>
                      <li>Used for electromagnetic compatibility and system reliability.</li>
                    </ul>
                  </div>

                  {/* Type 5 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">5. Engine Testing Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Aircraft engine test equipment</li>
                      <li>Used for performance evaluation and system validation.</li>
                    </ul>
                  </div>

                  {/* Type 6 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">6. Non-Destructive Testing (NDT) Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Ultrasonic testing aircraft</li>
                      <li>Aircraft eddy current testing near me</li>
                      <li>Used for structural inspection without damaging components.</li>
                    </ul>
                  </div>

                  {/* Type 7 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">7. Oxygen System Testing Equipment</h4>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Aircraft oxygen bottle hydrostatic test</li>
                      <li>Aircraft oxygen bottle hydrostatic test near me</li>
                      <li>Used for safety testing of oxygen cylinders and systems.</li>
                    </ul>
                  </div>

                  {/* Type 8 */}
                  <div className="mb-6">
                    <h4 className="font-bold text-xl text-[#5C5649] mb-2">8. Aircraft Ground Test Equipment</h4>
                    <p className="text-black">
                      Comprehensive aircraft ground test equipment for complete system inspection and validation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Testing Equipment
                  </h3>
                  <p className="text-black mb-4">
                    The aircraft testing equipment from Jetsys Defence is widely used in:
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
                        <li>Avionics and communication system validation</li>
                        <li>Structural and safety inspection processes</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our systems support complete aircraft testing across all critical systems.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Testing Equipment
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision testing and measurement systems</li>
                        <li>Real-time monitoring and advanced data analysis</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced automation and control systems</li>
                        <li>Designed to meet global aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our aircraft ground test equipment ensures consistent and reliable performance.
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
                        <li>High-performance aircraft testing equipment systems</li>
                        <li>Reliable hydraulic test rig for aircraft solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced aircraft transponder tester systems</li>
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
                    Aircraft Testing Equipment Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of aircraft testing equipment depends on system type, capacity, and automation level.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic test stand for aircraft</li>
                    <li>Aircraft pitot static test equipment</li>
                    <li>Aircraft engine test equipment</li>
                    <li>Aircraft ground test equipment systems</li>
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
                    The Aircraft Testing Equipment by Jetsys Defence is an essential solution for ensuring aircraft safety,
                    performance, and compliance. With advanced systems such as hydraulic test rigs, avionics testing equipment,
                    EMI/EMC testing systems, and NDT solutions, our equipment delivers accurate and reliable testing for
                    aviation applications.
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