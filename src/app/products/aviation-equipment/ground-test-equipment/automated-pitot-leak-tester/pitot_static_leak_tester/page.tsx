import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pitot Static Leak Tester | Jetsys Defence Aviation Equipment",
  description:
    "Discover pitot static leak tester by Jetsys Defence for accurate pitot static leak check and aircraft air data system validation in aviation maintenance operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/pitot_static_leak_tester",
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
                Pitot Static Leak Tester – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Pitot Static Leak Tester by Jetsys Defence is a high-precision aviation testing solution designed to detect leaks and ensure the integrity of aircraft pitot-static systems. Built with advanced pressure control technology and robust engineering, this equipment guarantees accurate and reliable performance for critical air data systems.
              </p>
              <p className="font-medium text-base">
                Our pitot static leak tester is ideal for MRO facilities, aircraft manufacturers, and defence aviation operations where safety, compliance, and precision are essential.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Pitot Static Leak Tester.png"
                  width={500}
                  height={1000}
                  alt="Pitot Static Leak Tester Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Pitot Static Leak Tester? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Pitot Static Leak Tester?
                  </h2>
                  <p className="text-black mb-4">
                    A pitot static leak tester is specialized equipment used to perform leak detection in aircraft pitot and static systems. These systems are responsible for measuring airspeed, altitude, and pressure, making leak-free operation crucial for flight safety.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    This testing process is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Pitot static leak check</li>
                    <li>Aircraft pitot static leak testing</li>
                    <li>Pitot static system leak testing</li>
                  </ul>
                </div>
              </section>

              {/* Importance of Pitot Static Leak Testing */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Importance of Pitot Static Leak Testing
                  </h2>
                  <p className="text-black mb-4">
                    A proper pitot static leak check ensures that there are no pressure losses or system faults that could affect aircraft performance and safety.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    Key benefits include:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Accurate airspeed and altitude readings</li>
                    <li>Enhanced flight safety and compliance</li>
                    <li>Early detection of leaks and system faults</li>
                    <li>Reliable performance of air data systems</li>
                  </ul>
                </div>
              </section>

              {/* Types of Pitot Static Leak Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Pitot Static Leak Testing Equipment
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced solutions for leak detection:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Portable Pitot Static Leak Tester</h3>
                          Compact and easy-to-use pitot static leak tester for on-site aircraft maintenance.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Digital Leak Testing System</h3>
                          Advanced systems with real-time monitoring for accurate pitot static leak check operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Integrated Pitot Static Test Equipment</h3>
                          Multi-functional equipment combining full system testing with leak detection capabilities.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Pitot Static Leak Tester */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Pitot Static Leak Tester
                  </h2>
                  <p className="text-black mb-4">
                    The pitot static leak tester from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Aircraft inspection and certification processes</li>
                    <li>Aviation ground testing operations</li>
                    <li>Air data system validation and troubleshooting</li>
                    <li>Defence aviation testing facilities</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our pitot static leak check systems ensure accurate and reliable testing in critical aviation environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Pitot Static Leak Tester
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision pressure control and monitoring</li>
                        <li>Accurate leak detection capability</li>
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
                    Our pitot static leak tester ensures consistent and repeatable testing performance.
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
                    <li>High-performance pitot static leak tester systems</li>
                    <li>Reliable pitot static leak check solutions</li>
                    <li>Custom-built equipment for aviation and defence</li>
                    <li>Durable and long-lasting systems</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Pitot Static Leak Tester Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a pitot static leak tester depends on features such as pressure range, automation, and portability. Jetsys Defence offers a range of solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Portable pitot static leak tester</li>
                    <li>Digital leak testing systems</li>
                    <li>Integrated pitot static test equipment</li>
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
                    The Pitot Static Leak Tester by Jetsys Defence is an essential tool for ensuring the safety and performance of aircraft air data systems. With advanced features like precision leak detection, real-time monitoring, and robust construction, our equipment delivers accurate and reliable pitot static leak check results for aviation applications.
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