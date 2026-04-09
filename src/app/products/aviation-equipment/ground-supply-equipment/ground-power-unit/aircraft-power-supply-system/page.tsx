import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Power Supply System | Aviation Ground Power – Jetsys Defence",
  description:
    "Advanced Aircraft Power Supply Systems by Jetsys Defence. Reliable 400Hz, 28V DC, and external power solutions for aviation, UAV, and ground support operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/aircraft-power-supply-system",
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
                Aircraft Power Supply System – Advanced Aviation Power Solutions by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers high-performance Aircraft Power Supply System solutions designed to deliver reliable
                electrical power for aircraft during ground operations and maintenance. Our systems support a wide range
                of aviation requirements, including 400Hz ground power supply, 28V DC aircraft power supply, and advanced
                external power configurations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft-power-supply-system.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Power Supply System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Power Supply System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Power Supply System?
                  </h2>
                  <p className="text-black mb-4">
                    An Aircraft Power Supply System is a critical solution that provides electrical power to aircraft systems
                    when engines are not running. Also known as aircraft ground power supply or aircraft external power supply,
                    it ensures smooth operation of onboard electronics, lighting, and avionics.
                  </p>
                  <p className="text-black">
                    These systems include multiple configurations such as 400Hz power supply aircraft, 28 volt aircraft
                    power supply, and 270 VDC aircraft power supply, making them essential for modern aviation environments.
                  </p>
                </div>
              </section>

              {/* Key Features of Jetsys Defence Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Voltage Power Output</h4>
                          Our systems support diverse requirements including 28V DC power supply for aircraft, 28 volt power
                          supply for aircraft, and high-frequency 400Hz ground power unit solutions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Stability and Precision</h4>
                          Designed for aviation-grade performance, our aircraft electrical supply systems ensure stable voltage
                          and frequency for sensitive onboard equipment.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Flexible Configurations</h4>
                          Available as aircraft external power supply, 28V ground power unit, and 400Hz ground power supply
                          systems for both fixed and mobile operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Durable and Reliable Build</h4>
                          Engineered for continuous operation in demanding airport and defense environments, ensuring
                          long-term reliability.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">400Hz Aircraft Power Supply Systems</h4>
                          High-frequency 400Hz ground power supply and 400Hz ground power unit solutions designed for modern
                          aircraft systems including aircraft 115V 400Hz requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">28V DC Aircraft Power Supply Systems</h4>
                          Reliable 28V aircraft power supply, including 28V DC power supply for aircraft and 28 volt aircraft
                          power supply for smaller aircraft and helicopters.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">External Aircraft Power Supply Systems</h4>
                          Efficient aircraft external power supply systems that replace onboard power during ground operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced DC Power Systems</h4>
                          Includes 270 VDC aircraft power supply and specialized systems for modern aviation and UAV applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Power Supply Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport ground operations and aircraft servicing</li>
                        <li>Aircraft maintenance and repair (MRO)</li>
                        <li>Military and defense aviation</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>UAV and unmanned aircraft systems</li>
                        <li>Emergency and backup power systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence systems are widely used in aircraft ground power supply, aviation electrical supply,
                    and emergency power supply unit aircraft applications.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Aircraft Power Supply Systems? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence Aircraft Power Supply Systems?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation-Grade Engineering</h4>
                          We deliver high-quality aircraft power supply systems designed to meet modern aviation standards.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Wide Compatibility</h4>
                          Supports various aircraft systems including aircraft strobe light power supply, avionics, and
                          auxiliary systems.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Solutions</h4>
                          Flexible configurations including 28V ground power unit, 400Hz ground power supply, and advanced DC systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Proven Performance</h4>
                          Reliable solutions for continuous power delivery in airport and defense operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Capabilities */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Capabilities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>400Hz ground power supply systems for modern aircraft</li>
                        <li>28V DC aircraft power supply for light aircraft and helicopters</li>
                        <li>Aircraft 115V 400Hz compatibility</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced aircraft electrical supply systems</li>
                        <li>Support for UAV power supply and specialized aviation equipment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Growing Demand for Aircraft Power Supply Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Growing Demand for Aircraft Power Supply Systems
                  </h2>
                  <p className="text-black">
                    With the expansion of global aviation infrastructure, the demand for efficient aircraft power supply
                    systems, aircraft ground power supply, and aviation electrical systems continues to grow. Jetsys Defence
                    provides scalable and future-ready solutions for both civil and defense aviation sectors.
                  </p>
                </div>
              </section>

              {/* Order Aircraft Power Supply System from Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Aircraft Power Supply System from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Jetsys Defence offers advanced Aircraft Power Supply System solutions tailored for reliability,
                    efficiency, and performance. From 400Hz ground power units to 28V aircraft power supply systems,
                    we provide complete aviation power solutions for modern aircraft operations.
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