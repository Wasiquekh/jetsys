import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Pitot Static Tester | Jetsys Defence Aviation Equipment",
  description:
    "Explore aircraft pitot static tester by Jetsys Defence including digital and portable pitot static test equipment for accurate air data system calibration and testing.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/air_data_test_equipment",
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
                The Aircraft Pitot Static Tester by Jetsys Defence is a high-precision aviation testing solution designed to calibrate and validate aircraft air data systems including altitude, airspeed, and pressure measurements. Built with advanced digital control and robust engineering, this equipment ensures accurate and reliable performance in critical aviation environments.
              </p>
              <p className="font-medium text-base">
                Our aircraft pitot static tester is ideal for MRO facilities, aircraft manufacturers, and defence aviation operations where safety, compliance, and precision are essential.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Air Data Test Equipment.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Pitot Static Tester Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Pitot Static Tester? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Pitot Static Tester?
                  </h2>
                  <p className="text-black mb-4">
                    An aircraft pitot static tester is specialized equipment used to test and calibrate pitot and static systems in aircraft. These systems are essential for measuring altitude, airspeed, and atmospheric pressure, making them critical for safe flight operations.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    These systems are widely used for:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Pitot static system testing for complete validation</li>
                    <li>Air data system calibration in aircraft</li>
                    <li>Pitot static leak testing and pressure simulation</li>
                  </ul>
                </div>
              </section>

              {/* Types of Aircraft Pitot Static Testers */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Pitot Static Testers
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a range of advanced testing solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Digital Pitot Static Tester</h3>
                          A high-precision digital pitot static tester designed for accurate pressure simulation and calibration.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Portable Pitot Static Tester</h3>
                          A compact and lightweight portable pitot static tester ideal for on-site aircraft maintenance and field operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Pitot Static Test Box</h3>
                          A reliable pitot static test box used for quick and efficient testing of air data systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Integrated Pitot Static System Tester</h3>
                          A complete pitot static system tester that combines testing, calibration, and leak detection capabilities.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Aircraft Pitot Static Tester */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Pitot Static Tester
                  </h2>
                  <p className="text-black mb-4">
                    The aircraft pitot static tester from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Aircraft calibration and certification processes</li>
                    <li>Aviation ground testing operations</li>
                    <li>Air data system validation and troubleshooting</li>
                    <li>Defence aviation testing facilities</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our pitot static tester ensures accurate and reliable testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Pitot Static Tester
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision pressure and altitude simulation</li>
                        <li>Real-time digital monitoring and control</li>
                        <li>Portable and user-friendly design</li>
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
                    Our aircraft pitot static tester ensures consistent and repeatable testing performance.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing solutions for critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>High-performance aircraft pitot static tester systems</li>
                    <li>Reliable pitot static system tester solutions</li>
                    <li>Advanced air data testing equipment</li>
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
                    Aircraft Pitot Static Tester Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of an aircraft pitot static tester depends on features such as pressure range, automation, and portability. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Digital pitot static tester</li>
                    <li>Portable pitot static tester</li>
                    <li>Pitot static test box systems</li>
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
                    The Aircraft Pitot Static Tester by Jetsys Defence is an essential tool for ensuring aircraft safety and performance. With advanced features like precision pressure simulation, real-time monitoring, and integrated testing capabilities, our equipment delivers accurate and reliable air data system validation for aviation applications.
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