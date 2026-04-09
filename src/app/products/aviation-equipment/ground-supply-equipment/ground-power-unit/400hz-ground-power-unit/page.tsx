import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "400Hz Ground Power Unit | Aviation GPU Systems – Jetsys Defence",
  description:
    "High-performance 400Hz Ground Power Unit by Jetsys Defence. Reliable aviation GPU systems with stable 400Hz power supply for airports, hangars, and military aircraft operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/400hz-ground-power-unit",
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
                400Hz Ground Power Unit – Advanced Aviation GPU Systems by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence delivers high-efficiency 400Hz Ground Power Unit systems engineered to provide stable and
                reliable electrical power for aircraft during ground operations. Our aviation-grade 400Hz GPU systems are
                designed for modern aircraft requirements, ensuring seamless performance across airports, hangars, and
                defense environments.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/400Hz Ground Power Unit.png"
                  width={500}
                  height={1000}
                  alt="400Hz Ground Power Unit by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a 400Hz Ground Power Unit? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a 400Hz Ground Power Unit?
                  </h2>
                  <p className="text-black mb-4">
                    A 400Hz Ground Power Unit is a specialized aviation system that supplies electrical power at 400Hz
                    frequency to aircraft while on the ground. Also known as 400Hz ground power supply, 400Hz GPU, or GPU 400 Hz,
                    it replaces onboard power systems when engines are off, enabling safe maintenance, servicing, and
                    boarding operations.
                  </p>
                  <p className="text-black">
                    Jetsys Defence provides precision-engineered aviation GPU systems that meet global aviation standards
                    for consistent and efficient power delivery.
                  </p>
                </div>
              </section>

              {/* Key Features of Jetsys Defence 400Hz GPU Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence 400Hz GPU Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Stable 400Hz Power Output</h4>
                          Our systems deliver precise 400Hz ground power supply, ensuring compatibility with modern aircraft
                          avionics and onboard systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Efficiency Performance</h4>
                          Designed for optimized energy consumption, our 400Hz GPU systems reduce operational costs while
                          maintaining superior output stability.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fixed and Mobile Configurations</h4>
                          Available in fixed GPU 400Hz setups and mobile units to suit airport infrastructure and operational
                          flexibility.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged and Reliable Design</h4>
                          Built for continuous use in demanding aviation environments, ensuring long service life and minimal
                          downtime.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of 400Hz Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of 400Hz Ground Power Units
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fixed 400Hz Ground Power Unit</h4>
                          Permanent installation systems such as fixed GPU 400Hz designed for airport terminals and hangars.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile 400Hz GPU Systems</h4>
                          Flexible and portable 400Hz GPU units for easy deployment across different aircraft positions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of 400Hz Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of 400Hz Ground Power Units
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport operations</li>
                        <li>Aircraft maintenance and servicing (MRO)</li>
                        <li>Military and defense aviation</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Hangars and ground handling operations</li>
                        <li>Aircraft turnaround and boarding support</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence solutions are widely used in aviation ground power applications, ensuring reliable 400Hz
                    ground power supply systems across critical operations.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence 400Hz Ground Power Units? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence 400Hz Ground Power Units?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation-Grade Engineering</h4>
                          We design advanced 400Hz GPU systems that meet strict aviation performance standards.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Customizable Solutions</h4>
                          Available in multiple configurations including fixed GPU 400Hz and mobile units tailored to
                          operational needs.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable Power Delivery</h4>
                          Consistent GPU 400 Hz output ensures uninterrupted aircraft support during ground operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Optimized Cost Efficiency</h4>
                          Jetsys Defence provides high-value solutions with competitive performance and long-term durability.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Capabilities of 400Hz GPU Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Capabilities of 400Hz GPU Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Precision 400Hz ground power supply output</li>
                        <li>Advanced control and monitoring systems</li>
                        <li>Scalable configurations for airport infrastructure</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Compatibility with a wide range of aircraft systems</li>
                        <li>Efficient thermal management for continuous operation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Demand for 400Hz Ground Power Units in Aviation */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Demand for 400Hz Ground Power Units in Aviation
                  </h2>
                  <p className="text-black">
                    With the rapid growth of global aviation, the need for reliable 400Hz GPU systems, ground power supply
                    solutions, and aviation GPU infrastructure continues to increase. Jetsys Defence is committed to
                    delivering advanced power solutions that support modern airport and defense requirements.
                  </p>
                </div>
              </section>

              {/* Order 400Hz Ground Power Unit from Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order 400Hz Ground Power Unit from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Jetsys Defence offers high-performance 400Hz Ground Power Unit systems designed for efficiency,
                    durability, and precision. Whether for fixed installations or mobile operations, our aviation GPU
                    solutions ensure reliable power for every aircraft ground operation.
                  </p>
                  <p className="text-black mt-4">
                    To receive a quote or locate the nearest service branch, contact Jetsys Defence today.
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