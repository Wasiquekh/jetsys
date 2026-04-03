import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Air Data Test Equipment | Jetsys Defence Aviation Systems",
  description:
    "Discover air data test equipment by Jetsys Defence including air data test set, pitot static testing systems, and aviation calibration tools for accurate aircraft validation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/air-data-test-system/air_data_test_equipment",
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
                Air Data Test Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Air Data Test Equipment by Jetsys Defence is a high-precision
                aviation testing solution designed to simulate, calibrate, and
                validate aircraft air data systems including altitude, airspeed,
                and pressure measurements. Engineered with advanced digital
                controls and aviation-grade components, this equipment ensures
                accurate performance and compliance with global aviation safety
                standards.
              </p>
              <p className="font-medium text-base mt-4">
                Our air data test equipment is ideal for MRO facilities, aircraft
                manufacturers, and defence aviation operations where precision,
                reliability, and efficiency are critical.
              </p>

              <br />
              <br />
              <div>
                <Image
                  src="/images/Air Data Test Equipmentss.png"
                  width={500}
                  height={1000}
                  alt="Air Data Test Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Air Data Test Equipment?
                  </h2>
                  <p className="text-black mb-6">
                    Air data test equipment is specialized aviation equipment
                    used to test and calibrate aircraft air data systems such as
                    pitot-static systems, altimeters, and airspeed indicators.
                  </p>
                  <p className="text-black mb-4">
                    This equipment is commonly used for:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>
                      Air data test set operations for system calibration
                    </li>
                    <li>Pressure and altitude simulation</li>
                    <li>Airspeed and instrument validation</li>
                    <li>Complete air data system testing</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Air Data Test Equipment
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced testing solutions for
                    aviation applications:
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    1. Digital Air Data Test Set
                  </h3>
                  <p className="text-black mb-3">
                    A high-precision air data test set designed for accurate
                    pressure simulation and system calibration.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    2. Portable Air Data Test Equipment
                  </h3>
                  <p className="text-black mb-3">
                    Compact and lightweight air data test equipment for on-site
                    aircraft maintenance and field operations.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    3. Integrated Air Data Testing System
                  </h3>
                  <p className="text-black mb-3">
                    Advanced systems combining calibration, validation, and leak
                    detection capabilities.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    4. Automated Air Data Calibration Systems
                  </h3>
                  <p className="text-black mb-3">
                    High-end systems designed for complete air data system
                    analysis and performance testing.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Industry Compatibility & Benchmark Systems
                  </h2>
                  <p className="text-black mb-6">
                    Jetsys Defence systems are engineered to match or exceed
                    industry-standard performance similar to:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Druck pitot static tester</li>
                    <li>ADTS 500 pitot static tester</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our equipment delivers high accuracy and reliability for all
                    aviation testing requirements.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Air Data Test Equipment
                  </h2>
                  <p className="text-black mb-6">
                    The air data test equipment from Jetsys Defence is widely
                    used in:
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
                    Our air data test set ensures accurate and reliable testing
                    in mission-critical environments.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Air Data Test Equipment
                  </h2>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>High-precision pressure and altitude simulation</li>
                    <li>Real-time monitoring and digital control</li>
                    <li>Portable and user-friendly design</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Designed to meet global aviation safety standards</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our air data test equipment ensures consistent and
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
                    <li>High-performance air data test equipment systems</li>
                    <li>Reliable air data test set solutions</li>
                    <li>Advanced air data calibration and testing systems</li>
                    <li>Custom-built equipment for aviation and defence</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Air Data Test Equipment Price & Availability
                  </h2>
                  <p className="text-black">
                    The price of air data test equipment depends on features
                    such as pressure range, automation level, and portability.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2 mt-3">
                    <li>Digital air data test set</li>
                    <li>Portable air data testing systems</li>
                    <li>Integrated air data calibration equipment</li>
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
                    The Air Data Test Equipment by Jetsys Defence is an essential
                    solution for ensuring aircraft safety and performance. With
                    advanced features like precision pressure simulation,
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