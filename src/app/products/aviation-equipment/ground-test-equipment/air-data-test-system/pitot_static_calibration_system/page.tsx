import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Pitot Static Calibration System | Jetsys Defence Aviation",
  description:
    "Explore pitot static calibration system by Jetsys Defence for accurate air data calibration, pressure simulation, and reliable aircraft testing solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_calibration_system",
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
                Pitot Static Calibration System – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Pitot Static Calibration System by Jetsys Defence is a
                high-precision aviation testing solution designed to calibrate
                and validate aircraft air data systems, including altitude,
                airspeed, and pressure measurements. Built with advanced
                digital controls and aviation-grade components, this system
                ensures accurate performance and compliance with global safety
                standards.
              </p>
              <p className="font-medium text-base mt-4">
                Our pitot static calibration system is ideal for MRO facilities,
                aircraft manufacturers, and defence aviation operations where
                reliability and precision are critical.
              </p>

              <br />
              <br />
              <div>
                <Image
                  src="/images/pitot_static_calibration_system.png"
                  width={500}
                  height={1000}
                  alt="Pitot Static Calibration System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Pitot Static Calibration System?
                  </h2>
                  <p className="text-black mb-6">
                    A pitot static calibration system is specialized equipment
                    used to calibrate pitot and static systems in aircraft.
                    These systems are responsible for measuring key flight
                    parameters such as altitude, airspeed, and atmospheric
                    pressure.
                  </p>
                  <p className="text-black mb-4">
                    This system is commonly used for:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Pitot static system calibration</li>
                    <li>Aircraft air data calibration</li>
                    <li>Pitot static tester calibration</li>
                    <li>Air data system testing and validation</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Pitot Static Calibration Systems
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced calibration solutions:
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    1. Digital Pitot Static Calibration System
                  </h3>
                  <p className="text-black mb-3">
                    A high-precision pitot static calibration system with
                    digital control for accurate pressure and altitude
                    simulation.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    2. Portable Calibration System
                  </h3>
                  <p className="text-black mb-3">
                    Compact and lightweight pitot static calibration equipment
                    for on-site aircraft maintenance and field operations.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    3. Integrated Pitot Static Testing & Calibration System
                  </h3>
                  <p className="text-black mb-3">
                    A complete pitot static system calibration system combining
                    testing, validation, and leak detection.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    4. Advanced Air Data Calibration System
                  </h3>
                  <p className="text-black mb-3">
                    High-end systems designed for full air data calibration
                    system aviation applications.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Pitot Static Calibration System
                  </h2>
                  <p className="text-black mb-6">
                    The pitot static calibration system from Jetsys Defence is
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
                    Our aircraft pitot static calibration system ensures
                    accurate and reliable performance in mission-critical
                    environments.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Pitot Static Calibration System
                  </h2>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>High-precision pressure and altitude simulation</li>
                    <li>Real-time digital monitoring and control</li>
                    <li>Portable and user-friendly design</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Designed to meet global aviation safety standards</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our pitot static system calibration equipment ensures
                    consistent and repeatable calibration results.
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
                    equipment, delivering advanced calibration and testing
                    solutions for mission-critical operations.
                  </p>
                  <p className="text-black mb-4">We provide:</p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>High-performance pitot static calibration systems</li>
                    <li>Reliable air data calibration equipment</li>
                    <li>Advanced pitot static testing systems</li>
                    <li>Custom-built solutions for aviation and defence</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Pitot Static Calibration System Price & Availability
                  </h2>
                  <p className="text-black">
                    The price of a pitot static calibration system depends on
                    factors such as pressure range, automation level, and
                    portability. Jetsys Defence offers customized solutions
                    including:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2 mt-3">
                    <li>Digital pitot static calibration system</li>
                    <li>Portable pitot static calibration equipment</li>
                    <li>Integrated air data calibration systems</li>
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
                    The Pitot Static Calibration System by Jetsys Defence is an
                    essential solution for ensuring aircraft safety and
                    performance. With advanced features like precision pressure
                    simulation, real-time monitoring, and integrated calibration
                    capabilities, our system delivers accurate and reliable air
                    data system validation for aviation applications.
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