import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Pitot Static Test Equipment | Jetsys Defence Aviation Systems",
  description:
    "Explore pitot static test equipment by Jetsys Defence including pitot static testers, test boxes, and leak testers for accurate aircraft air data system calibration.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_test_equipment",
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
                Pitot Static Test Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Pitot Static Test Equipment by Jetsys Defence is a
                high-precision aviation testing solution designed to calibrate
                and validate aircraft air data systems including altitude,
                airspeed, and pressure measurements. Engineered with advanced
                digital controls and robust construction, this equipment ensures
                accurate performance and compliance with aviation safety
                standards.
              </p>
              <p className="font-medium text-base mt-4">
                Our pitot static test equipment is ideal for MRO facilities,
                aircraft manufacturers, and defence aviation operations where
                precision and reliability are critical.
              </p>

              <br />
              <br />
              <div>
                <Image
                  src="/images/pitot_static_test_equipment.png"
                  width={500}
                  height={1000}
                  alt="Pitot Static Test Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Pitot Static Test Equipment?
                  </h2>
                  <p className="text-black mb-6">
                    Pitot static test equipment is specialized aviation testing
                    equipment used to check and calibrate pitot and static
                    systems in aircraft. These systems are responsible for
                    measuring airspeed, altitude, and atmospheric pressure.
                  </p>
                  <p className="text-black mb-6">
                    These systems include advanced tools such as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>
                      Pitot static system test equipment for full system
                      validation
                    </li>
                    <li>
                      Pitot static tester for pressure simulation and
                      calibration
                    </li>
                    <li>Pitot tester for quick field testing</li>
                    <li>
                      Aircraft pitot static test equipment for aviation
                      applications
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Pitot Static Test Equipment
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of advanced solutions:
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    1. Digital Pitot Static Tester
                  </h3>
                  <p className="text-black mb-3">
                    High-precision pitot static tester systems designed for
                    accurate air data system calibration.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    2. Portable Pitot Static Test Box
                  </h3>
                  <p className="text-black mb-3">
                    Compact pitot static test box for on-site aircraft
                    maintenance and field testing.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    3. Pitot Static System Tester
                  </h3>
                  <p className="text-black mb-3">
                    Comprehensive pitot static system tester used for full
                    system validation and diagnostics.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    4. Pitot Static Leak Tester
                  </h3>
                  <p className="text-black mb-3">
                    Advanced pitot static leak tester for detecting pressure
                    leaks and ensuring system integrity.
                  </p>

                  <h3 className="font-bold text-xl text-[#5C5649] mt-4 mb-2">
                    5. Pitot Static Test Adapters
                  </h3>
                  <p className="text-black mb-3">
                    Reliable pitot static test adapters designed for secure and
                    accurate system connections.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Industry-Standard Compatibility
                  </h2>
                  <p className="text-black mb-6">
                    Jetsys Defence systems are designed to match or exceed the
                    performance of widely known solutions such as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Druck pitot static tester</li>
                    <li>DPS 1000 pitot static tester</li>
                    <li>DPS 500 pitot static tester</li>
                    <li>ADTS 500 pitot static tester</li>
                    <li>ATEQ pitot static tester</li>
                    <li>Barfield pitot static tester</li>
                    <li>Laversab pitot static tester</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our equipment delivers equivalent or enhanced accuracy for
                    aviation testing requirements.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Pitot Static Test Equipment
                  </h2>
                  <p className="text-black mb-6">
                    The pitot static test equipment from Jetsys Defence is
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
                    Our pitot static system test equipment ensures accurate and
                    reliable testing in mission-critical environments.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Pitot Static Test Equipment
                  </h2>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>High-precision pressure and altitude simulation</li>
                    <li>Real-time digital monitoring and control</li>
                    <li>Portable and user-friendly design</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Designed to meet global aviation safety standards</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our pitot static tester ensures consistent and repeatable
                    testing performance.
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
                    <li>High-performance pitot static test equipment</li>
                    <li>Reliable pitot static system tester solutions</li>
                    <li>Advanced pitot static leak tester systems</li>
                    <li>Custom-built solutions for aviation and defence</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Pitot Static Tester Price & Availability
                  </h2>
                  <p className="text-black">
                    The price of a pitot static tester depends on features such
                    as pressure range, automation, and portability. Jetsys
                    Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2 mt-3">
                    <li>Digital pitot static tester</li>
                    <li>Portable pitot static test box</li>
                    <li>Pitot static test adapters and accessories</li>
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
                    The Pitot Static Test Equipment by Jetsys Defence is an
                    essential solution for ensuring aircraft safety and
                    performance. With advanced features like precision pressure
                    simulation, leak detection systems, and portable testing
                    capabilities, our equipment delivers accurate and reliable
                    air data system validation for aviation applications.
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