import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Windshield Testing Equipment | Jetsys Defence Aviation Testing Solutions",
  description:
    "Jetsys Defence offers advanced aircraft windshield testing equipment for impact resistance, pressure testing, optical clarity & structural durability. Trusted aviation testing solutions for MRO & defence.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/aircraft_windshield_testing_equipment",
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
              {/* H1 Tag - Primary Keyword */}
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Aircraft Windshield Testing Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Windshield Testing Equipment by Jetsys Defence is a high-precision aviation testing
                solution designed to evaluate the strength, durability, and safety of aircraft windshields and
                transparencies. Engineered with advanced testing technology and robust construction, this equipment
                ensures compliance with strict aviation safety standards for commercial and defence aircraft.
              </p>
              <br />
              <p className="font-medium text-base">
                Our aircraft windshield testing equipment is ideal for MRO facilities, aircraft manufacturers, airlines,
                and defence aviation sectors where windshield integrity, pilot visibility, and passenger safety are
                critical for flight operations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Gemini_Generated_Image_91lkts91lkts91lk-Photoroom.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Windshield Testing Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* H2: What is Aircraft Windshield Testing Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Aircraft Windshield Testing Equipment?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    Aircraft windshield testing equipment refers to specialized systems used to test aircraft
                    windshields for impact resistance, pressure tolerance, optical clarity, bird strike resistance,
                    and structural durability. These systems simulate extreme flight conditions to validate windshield
                    safety and performance.
                  </p>
                  <p className="font-medium text-base">This equipment is widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Aircraft windshield impact test</li>
                    <li>Aircraft windshield pressure testing</li>
                    <li>Aviation windshield testing for optical clarity</li>
                    <li>Aircraft transparency tester validation</li>
                    <li>Cockpit windshield inspection for defects</li>
                    <li>Aviation glass testing equipment evaluation</li>
                    <li>Windshield bird strike test simulation</li>
                  </ul>
                </div>
              </section>

              {/* H2: Types of Aircraft Windshield Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Windshield Testing Equipment
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers advanced solutions for aviation windshield testing:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Aircraft Windshield Impact Test Equipment</h3>
                          High-precision systems designed for aircraft windshield impact testing to evaluate resistance
                          against bird strikes, hail, and foreign object debris at various velocities.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Aircraft Windshield Pressure Test System</h3>
                          Advanced equipment for aircraft windshield pressure testing to simulate high-altitude
                          conditions, cabin pressurization, and extreme aerodynamic loads.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Optical Clarity & Distortion Tester</h3>
                          Precision aviation windshield testing equipment for evaluating optical performance,
                          visibility, haze, and distortion-free pilot vision.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Structural Strength Testing Machine</h3>
                          Equipment designed for windshield structural strength testing, durability analysis, and
                          fatigue resistance under cyclic stress conditions.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Cockpit Windshield Inspection System</h3>
                          Comprehensive aviation window inspection system for defect detection, delamination,
                          scratches, and quality assurance of laminated windshields.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Aircraft Transparency Tester</h3>
                          Multi-parameter testing system for evaluating transmittance, reflectance, and overall
                          optical performance of aircraft transparencies.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* H2: Applications of Aircraft Windshield Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Windshield Testing Equipment
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The aircraft windshield testing equipment from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Commercial and military aircraft manufacturing quality control</li>
                    <li>Aircraft maintenance, repair, and overhaul (MRO) facilities</li>
                    <li>Defence aviation testing and certification laboratories</li>
                    <li>Windshield bird strike test certification programs</li>
                    <li>Aviation research and development centers</li>
                    <li>Airlines windshield inspection and validation</li>
                    <li>Helicopter windshield testing operations</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our systems ensure accurate and reliable windshield testing in mission-critical aviation
                    environments.
                  </p>
                </div>
              </section>

              {/* H2: Key Features of Jetsys Defence Aircraft Windshield Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Windshield Testing Equipment
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-precision impact simulation for bird strike and debris testing</li>
                    <li>Advanced pressure testing capabilities up to extreme altitudes</li>
                    <li>Real-time optical clarity and distortion measurement</li>
                    <li>Durable aviation-grade construction for harsh environments</li>
                    <li>Automated data logging and compliance reporting</li>
                    <li>Designed to meet FAA, EASA, and global aviation safety standards</li>
                    <li>Compatible with flat and curved aircraft windshields</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our aircraft windshield testing equipment ensures consistent, repeatable, and certified testing
                    results for aviation safety compliance.
                  </p>
                </div>
              </section>

              {/* H2: Why Choose Jetsys Defence for Aircraft Windshield Testing? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Aircraft Windshield Testing?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing
                    solutions for mission-critical applications worldwide.
                  </p>
                  <p className="font-medium text-base">We provide:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>High-performance aircraft windshield testing equipment systems</li>
                    <li>Reliable aircraft transparency tester solutions</li>
                    <li>Advanced cockpit windshield inspection systems</li>
                    <li>Custom-built solutions for specific aircraft types</li>
                    <li>In-house design, development, and support in India</li>
                    <li>Quick calibration and after-sales service</li>
                  </ul>
                </div>
              </section>

              {/* H2: Aircraft Windshield Testing Equipment Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Windshield Testing Equipment Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of aircraft windshield testing equipment depends on testing parameters, automation level,
                    system configuration, and compliance requirements. Jetsys Defence offers customized solutions
                    including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Aircraft windshield impact test systems</li>
                    <li>Windshield pressure testing equipment</li>
                    <li>Optical clarity and distortion testers</li>
                    <li>Structural strength testing machines</li>
                    <li>Cockpit windshield inspection systems</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Contact Jetsys Defence for a customized quote based on your specific aircraft windshield testing
                    requirements.
                  </p>
                </div>
              </section>

              {/* H2: Conclusion */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h2>
                  <p className="font-medium text-base">
                    The Aircraft Windshield Testing Equipment by Jetsys Defence is an essential solution for ensuring
                    the safety, durability, and performance of aircraft windshields. With advanced capabilities such as
                    impact testing, pressure analysis, optical clarity evaluation, and structural strength validation,
                    our equipment delivers accurate and reliable testing results for aviation and defence applications.
                    Trust Jetsys Defence for all your aircraft windshield testing equipment needs.
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