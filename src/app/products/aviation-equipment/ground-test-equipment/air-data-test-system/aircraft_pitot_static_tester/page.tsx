import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Aircraft Pitot Static Tester | Jetsys Defence Aviation Equipment",
  description:
    "Discover aircraft pitot static tester by Jetsys Defence for accurate air data calibration, pressure testing, and reliable aircraft pitot static test equipment solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/air-data-test-system/aircraft_pitot_static_tester",
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
                Aircraft Pitot Static Tester – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Pitot Static Tester by Jetsys Defence is a
                high-precision aviation testing solution designed to calibrate
                and validate aircraft air data systems including altitude,
                airspeed, and pressure measurements. Engineered with advanced
                digital controls and robust construction, this equipment ensures
                accurate performance and compliance with aviation safety
                standards.
              </p>
              <p className="font-medium text-base mt-4">
                Our aircraft pitot static tester is ideal for MRO facilities,
                aircraft manufacturers, and defence aviation operations where
                precision, reliability, and safety are critical.
              </p>

              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft_pitot_static_tester.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Pitot Static Tester by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Pitot Static Tester?
                  </h2>
                  <p className="text-black mb-6">
                    An aircraft pitot static tester is specialized aviation
                    equipment used to test and calibrate pitot and static
                    systems in aircraft. These systems measure critical flight
                    parameters such as airspeed, altitude, and atmospheric
                    pressure.
                  </p>
                  <p className="text-black">
                    This aircraft pitot static test equipment ensures that all
                    air data instruments function accurately and meet aviation
                    regulatory standards.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Pitot Static Tester
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence provides advanced testing solutions for
                    aviation applications:
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    1. Digital Aircraft Pitot Static Tester
                  </h3>
                  <p className="text-black mb-3">
                    A high-precision aircraft pitot static tester designed for
                    accurate pressure simulation and system calibration.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    2. Portable Aircraft Pitot Static Test Equipment
                  </h3>
                  <p className="text-black mb-3">
                    Compact and easy-to-use aircraft pitot static test equipment
                    for on-site aircraft maintenance and field operations.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    3. Pitot Static System Tester
                  </h3>
                  <p className="text-black mb-3">
                    A comprehensive system for full air data system validation
                    and performance testing.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    4. Integrated Testing & Leak Detection System
                  </h3>
                  <p className="text-black mb-3">
                    Advanced systems combining calibration and leak detection
                    for complete testing solutions.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Pitot Static Tester
                  </h2>
                  <p className="text-black mb-6">
                    The aircraft pitot static tester from Jetsys Defence is
                    widely used in:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>
                      Aircraft maintenance, repair, and overhaul (MRO)
                    </li>
                    <li>Aircraft calibration and certification processes</li>
                    <li>Aviation ground testing operations</li>
                    <li>Air data system validation and troubleshooting</li>
                    <li>Defence aviation testing facilities</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our aircraft pitot static test equipment ensures accurate
                    and reliable testing in mission-critical environments.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Pitot Static Tester
                  </h2>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>High-precision pressure and altitude simulation</li>
                    <li>Real-time digital monitoring and control</li>
                    <li>Portable and user-friendly design</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Designed to meet global aviation safety standards</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our aircraft pitot static tester ensures consistent and
                    repeatable testing performance.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation
                    equipment, delivering advanced testing solutions for
                    mission-critical operations.
                  </p>
                  <p className="text-black mb-4">We provide:</p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>High-performance aircraft pitot static tester systems</li>
                    <li>Reliable aircraft pitot static test equipment</li>
                    <li>Advanced air data testing and calibration solutions</li>
                    <li>Custom-built systems for aviation and defence</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Pitot Static Tester Price & Availability
                  </h2>
                  <p className="text-black">
                    The price of an aircraft pitot static tester depends on
                    features such as pressure range, automation level, and
                    portability. Jetsys Defence offers customized solutions
                    including:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2 mt-3">
                    <li>Digital aircraft pitot static tester</li>
                    <li>Portable aircraft pitot static test equipment</li>
                    <li>Integrated testing systems</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h2>
                  <p className="text-black">
                    The Aircraft Pitot Static Tester by Jetsys Defence is an
                    essential tool for ensuring aircraft safety and performance.
                    With advanced features like precision pressure simulation,
                    real-time monitoring, and integrated testing capabilities,
                    our equipment delivers accurate and reliable air data system
                    validation for aviation applications.
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