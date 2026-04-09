import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Ground Power Unit | Aviation GPU Systems – Jetsys Defence",
  description:
    "Explore high-performance Aircraft Ground Power Units by Jetsys Defence. Reliable aviation GPU systems for airports, military, and ground operations with efficient power supply solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit/aircraft-ground-power-unit",
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
                Aircraft Ground Power Unit – Reliable Aviation GPU Systems by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence offers advanced Aircraft Ground Power Unit (GPU) systems designed to deliver reliable
                electrical power to aircraft during ground operations. Our aviation-grade solutions ensure efficient energy
                supply for commercial, military, and airport applications, supporting safe and uninterrupted aircraft
                servicing.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aircraft-ground-power-unit.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Ground Power Unit by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Ground Power Unit? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Ground Power Unit?
                  </h2>
                  <p className="text-black mb-4">
                    An Aircraft Ground Power Unit is a critical system used to supply electrical power to an aircraft when
                    its engines are turned off. Also known as a ground power unit, airplane ground power unit, or aviation GPU,
                    it supports aircraft systems such as lighting, avionics, and air conditioning during maintenance and
                    turnaround operations.
                  </p>
                  <p className="text-black">
                    Jetsys Defence delivers high-efficiency aircraft ground power supply systems, including 28V GPU, 400Hz
                    ground power unit, and electric ground power unit solutions.
                  </p>
                </div>
              </section>

              {/* Key Features of Jetsys Defence Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Ground Power Units
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Performance Power Output</h4>
                          Our aircraft GPU systems provide stable and continuous power, ensuring compatibility with modern
                          aviation requirements including 400Hz ground power supply and 28V ground power unit systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Portable and Mobile Design</h4>
                          We offer portable GPU for aircraft, mobile ground power unit, and ground power cart configurations
                          for flexible deployment across airport environments.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Energy Efficient and Durable</h4>
                          Designed for long-term use, our diesel ground power unit and electric ground power unit options
                          reduce operational costs while maintaining high efficiency.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Wide Compatibility</h4>
                          Compatible with commercial aircraft, helicopters, and military aviation, including helicopter
                          ground power unit and aircraft AC power cart applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Aircraft Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Ground Power Units
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Electric Ground Power Units</h4>
                          Clean and efficient electrical ground power unit systems ideal for modern airports and fixed
                          installations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Diesel Ground Power Units</h4>
                          Heavy-duty diesel ground power unit solutions for rugged environments and military applications.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fixed Ground Power Units</h4>
                          Installed systems such as in ground power unit and airport ground power supply for permanent
                          infrastructure.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile Ground Power Units</h4>
                          Flexible ground power cart and aircraft ground power cart systems for easy movement across runways
                          and hangars.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications of Aviation Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aviation Ground Power Units
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport operations</li>
                        <li>Military airbases and defense aviation</li>
                        <li>Aircraft maintenance and repair operations (MRO)</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Ground handling services</li>
                        <li>Helicopter and specialized aircraft support</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Jetsys Defence solutions are widely used in airport ground power unit systems, aviation ground power
                    applications, and external power unit aircraft setups.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence for Aircraft GPU Systems? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Aircraft GPU Systems?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Engineering</h4>
                          We are among trusted aircraft ground power unit manufacturers, delivering precision-engineered
                          solutions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Configurations</h4>
                          Available in multiple capacities including ground power unit 90 kVA, tailored to specific aviation needs.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Proven Reliability</h4>
                          Our systems are built for consistent performance in demanding airport and defense environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Competitive Pricing</h4>
                          Jetsys Defence provides optimized aircraft ground power unit price solutions without compromising
                          on quality.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Aircraft Ground Power Unit Specifications & Options */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Ground Power Unit Specifications & Options
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>400Hz Ground Power Unit for modern aircraft systems</li>
                        <li>28V GPU for smaller aircraft and helicopters</li>
                        <li>Aircraft AC Power Cart and ground aircraft power systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Auxiliary ground power unit options for backup support</li>
                        <li>Fixed and mobile GPU configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Global Demand for Aircraft Ground Power Units */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Global Demand for Aircraft Ground Power Units
                  </h2>
                  <p className="text-black">
                    The demand for airport ground power supply systems, aviation GPU, and ground power unit aircraft solutions
                    is rapidly increasing with the growth of global aviation infrastructure. Jetsys Defence is positioned to
                    deliver scalable solutions for both civil and defense aviation sectors.
                  </p>
                </div>
              </section>

              {/* Order Aircraft Ground Power Unit from Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Aircraft Ground Power Unit from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Whether you are looking for aircraft ground power unit for sale, used aircraft GPU, or custom-built
                    aviation ground power unit systems, Jetsys Defence provides reliable and performance-driven solutions
                    for all aviation needs.
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