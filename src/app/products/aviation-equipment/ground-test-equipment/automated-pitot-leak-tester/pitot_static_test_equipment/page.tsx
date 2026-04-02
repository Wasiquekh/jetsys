import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pitot Static Test Equipment | Jetsys Defence Aviation Tools",
  description:
    "Explore pitot static test equipment by Jetsys Defence including pitot static testers, leak testers, and test boxes for accurate aircraft air data system validation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/pitot_static_test_equipment",
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
                The Pitot Static Test Equipment by Jetsys Defence is a high-precision aviation testing solution designed to validate aircraft air data systems including altitude, airspeed, and pressure measurements. Built with advanced technology and robust engineering, this equipment ensures accurate calibration and reliable performance for critical flight parameters.
              </p>
              <p className="font-medium text-base">
                Our pitot static test equipment is ideal for MRO facilities, aircraft manufacturers, and defence aviation operations where precision and compliance are essential.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Pitot Static Test Equipment.png"
                  width={500}
                  height={1000}
                  alt="Pitot Static Test Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Pitot Static Test Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Pitot Static Test Equipment?
                  </h2>
                  <p className="text-black mb-4">
                    Pitot static test equipment is specialized aviation testing equipment used to check and calibrate pitot and static systems in aircraft. These systems are responsible for measuring airspeed, altitude, and atmospheric pressure, making them critical for flight safety.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    These systems include advanced tools such as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft pitot static test equipment for aviation applications</li>
                    <li>Pitot static system test equipment for complete system validation</li>
                    <li>Pitot static tester for accurate pressure simulation</li>
                    <li>Pitot tester for field and maintenance use</li>
                  </ul>
                </div>
              </section>

              {/* Types of Pitot Static Test Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Pitot Static Test Equipment
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of testing solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Digital Pitot Static Tester</h3>
                          Advanced pitot static tester systems designed for precise measurement and calibration of air data systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Portable Pitot Static Test Box</h3>
                          A compact pitot static test box used for on-site aircraft maintenance and quick testing.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Pitot Static Leak Tester</h3>
                          A pitot static leak tester used to detect leaks and ensure system integrity.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Pitot Static System Tester</h3>
                          Comprehensive pitot static system tester for full system evaluation and validation.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">5. Pitot Static Test Adapters</h3>
                          High-quality pitot static test adapters designed for secure and accurate connections during testing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advanced Pitot Static Tester Variants */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Advanced Pitot Static Tester Variants
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence solutions are compatible with industry-standard testing requirements similar to:
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
                    Our systems provide equivalent or enhanced performance for aviation testing applications.
                  </p>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Pitot Static Test Equipment
                  </h2>
                  <p className="text-black mb-4">
                    The pitot static test equipment from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Aircraft manufacturing and calibration</li>
                    <li>Aviation ground testing operations</li>
                    <li>Air data system validation and inspection</li>
                    <li>Leak detection and performance testing</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our pitot static system test equipment ensures accurate and reliable testing in critical aviation environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Pitot Static Test Equipment
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision pressure and altitude simulation</li>
                        <li>Real-time monitoring and digital display</li>
                        <li>Portable and easy-to-use design</li>
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
                    Our pitot static tester ensures consistent and repeatable testing performance.
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
                    <li>High-performance pitot static test equipment</li>
                    <li>Reliable pitot static system tester solutions</li>
                    <li>Advanced pitot static leak tester systems</li>
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
                    Pitot Static Tester Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a pitot static tester depends on features such as pressure range, automation, and portability. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Pitot static test box</li>
                    <li>Digital pitot static tester systems</li>
                    <li>Pitot static test adapters and accessories</li>
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
                    The Pitot Static Test Equipment by Jetsys Defence is an essential solution for ensuring aircraft safety and performance. With advanced features like precision pressure simulation, leak detection systems, and portable testing options, our equipment delivers accurate and reliable air data system validation.
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