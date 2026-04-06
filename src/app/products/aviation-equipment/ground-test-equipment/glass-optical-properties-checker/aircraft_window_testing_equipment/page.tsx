import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Window Testing Equipment | Jetsys Defence Aviation",
  description:
    "Explore aircraft window testing equipment by Jetsys Defence for pressure, impact, and transparency testing ensuring safety, durability, and aviation compliance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/aircraft_window_testing_equipment",
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
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Aircraft Window Testing Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Window Testing Equipment by Jetsys Defence is a high-precision aviation testing solution
                designed to evaluate the strength, durability, and safety of aircraft windows and transparencies.
                Engineered with advanced testing technology and robust construction, this equipment ensures compliance
                with strict aviation safety standards.
              </p>
              <br />
              <p className="font-medium text-base">
                Our aircraft window testing equipment is ideal for MRO facilities, aircraft manufacturers, and defence
                aviation sectors where structural integrity and passenger safety are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft_window_testing_equipment.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Window Testing Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Aircraft Window Testing Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Aircraft Window Testing Equipment?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    Aircraft window testing equipment refers to specialized systems used to test aircraft windows for
                    pressure resistance, impact strength, optical clarity, and structural durability. These systems
                    ensure that aircraft windows can withstand extreme flight conditions.
                  </p>
                  <p className="font-medium text-base">This equipment is widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Aircraft window pressure testing</li>
                    <li>Aircraft transparency testing equipment</li>
                    <li>Aircraft window strength testing</li>
                    <li>Aircraft window impact testing</li>
                    <li>Aviation window inspection systems</li>
                  </ul>
                </div>
              </section>

              {/* Types of Aircraft Window Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Window Testing Equipment
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers advanced solutions for aviation testing:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Window Pressure Test Equipment</h4>
                          High-precision systems designed for aircraft window pressure testing to simulate high-altitude
                          conditions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Impact Testing Equipment</h4>
                          Used for aircraft window impact testing to evaluate resistance against bird strikes and
                          external forces.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Optical Clarity Testing Systems</h4>
                          Advanced aircraft transparency testing equipment for evaluating optical performance and
                          visibility.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Structural Strength Testing Equipment</h4>
                          Equipment designed for aircraft window strength testing and durability analysis under stress
                          conditions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Inspection & Quality Testing Systems</h4>
                          Comprehensive aviation window inspection systems used for defect detection and quality
                          control.
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
                    Applications of Aircraft Window Testing Equipment
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The aircraft window testing equipment from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Aircraft manufacturing and quality control</li>
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Defence aviation testing facilities</li>
                    <li>Structural and safety testing operations</li>
                    <li>Aviation research and development</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our systems ensure accurate and reliable testing in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Window Testing Equipment
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-precision pressure and impact simulation</li>
                    <li>Advanced optical testing capabilities</li>
                    <li>Real-time monitoring and data analysis</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Designed to meet global aviation safety standards</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our aircraft window testing equipment ensures consistent and repeatable testing results.
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
                  <p className="font-medium text-base mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing
                    solutions for critical applications.
                  </p>
                  <p className="font-medium text-base">We provide:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>High-performance aircraft window testing equipment systems</li>
                    <li>Reliable aircraft transparency testing equipment</li>
                    <li>Advanced aircraft window inspection systems</li>
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
                    Aircraft Window Testing Equipment Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of aircraft window testing equipment depends on testing type, automation level, and
                    system configuration. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Aircraft window pressure testing systems</li>
                    <li>Impact and structural testing equipment</li>
                    <li>Optical clarity testing systems</li>
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
                  <p className="font-medium text-base">
                    The Aircraft Window Testing Equipment by Jetsys Defence is an essential solution for ensuring the
                    safety, durability, and performance of aircraft windows. With advanced capabilities such as
                    pressure testing, impact resistance analysis, and optical evaluation, our equipment delivers
                    accurate and reliable testing results for aviation applications.
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