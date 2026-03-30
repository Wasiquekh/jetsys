import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Rescue Tool Aviation Equipment | Jetsys Defence",
  description:
    "Explore aircraft rescue tools by Jetsys Defence including hydraulic cutters, spreaders, and emergency kits for aviation safety and rapid response operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/spreader-cutter-with-petrol-engine/aviation_tool",
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
                Aircraft Rescue Tool – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Rescue Tool by Jetsys Defence is a high-performance,
                aviation-grade solution designed for emergency response, aircraft
                access, and rescue operations. Built with precision engineering and
                advanced hydraulic technology, our tools ensure fast, safe, and
                efficient rescue in critical situations.
              </p>
              <p className="font-medium text-base">
                Whether used by airport emergency teams, fire departments, or
                aviation maintenance crews, this aircraft rescue tool is essential
                for handling high-risk operations with reliability and control.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aviation_tool.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Rescue Tool Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Rescue Tool?
                  </h3>

                  <p className="text-black mb-4">
                    An aircraft rescue tool is specialized equipment designed to
                    assist in emergency situations such as aircraft accidents, fire
                    rescue, and rapid access operations. These tools are built to
                    cut, spread, pry, and break through aircraft structures
                    efficiently.
                  </p>

                  <p className="text-black mb-4">
                    Commonly used tools include:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic rescue tool for cutting and spreading</li>
                    <li>Aircraft emergency rescue equipment for rapid response</li>
                    <li>Aviation rescue tools for structural access</li>
                    <li>Aircraft crash rescue tools for emergency extraction</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Rescue Tools
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence provides a complete range of rescue solutions:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            1. Hydraulic Cutter and Spreader
                          </h4>
                          Dual-function hydraulic cutter and spreader tools are
                          widely used in aircraft rescue operations for cutting
                          metal and spreading structures simultaneously.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            2. Hydraulic Rescue Cutter
                          </h4>
                          A powerful hydraulic rescue cutter designed to cut
                          through aircraft panels, cables, and metal components.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            3. Hydraulic Spreader
                          </h4>
                          Used for separating aircraft parts, opening jammed doors,
                          and creating safe access points.
                        </li>
                      </ul>
                    </div>

                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            4. Portable Rescue Tools
                          </h4>
                          Compact and lightweight portable rescue tools designed
                          for quick deployment in emergency situations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            5. Aircraft Emergency Tools Kit
                          </h4>
                          Complete aircraft emergency tools kit including cutting,
                          spreading, and prying tools for full rescue capability.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Aircraft Rescue Tools
                  </h3>

                  <p className="text-black mb-4">
                    The aircraft rescue tool from Jetsys Defence is used in:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>Aircraft accident and crash rescue operations</li>
                    <li>Airport emergency response teams</li>
                    <li>Fire and rescue departments</li>
                    <li>Aircraft maintenance and emergency access</li>
                    <li>Industrial and disaster rescue scenarios</li>
                  </ul>

                  <p className="text-black">
                    Our aviation rescue tools are designed for high-pressure
                    environments where speed and precision are critical.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Rescue Tool
                  </h3>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>High-strength hydraulic performance</li>
                    <li>Multi-functional cutting and spreading capability</li>
                    <li>Durable aviation-grade materials</li>
                    <li>Fast deployment for emergency response</li>
                    <li>Portable and easy-to-operate design</li>
                  </ul>

                  <p className="text-black">
                    Our hydraulic rescue tools are engineered to deliver maximum
                    efficiency in life-saving operations.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h3>

                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted name in aviation equipment,
                    offering reliable and advanced rescue tools tailored for
                    critical operations.
                  </p>

                  <p className="text-black mb-4">
                    We provide:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Industry-leading aircraft rescue tools</li>
                    <li>Advanced hydraulic rescue equipment</li>
                    <li>Durable and field-tested solutions</li>
                    <li>Competitive pricing and long-term reliability</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Rescue Tool Price & Availability
                  </h3>

                  <p className="text-black mb-4">
                    The cost of an aircraft rescue tool depends on specifications
                    such as capacity, functionality, and portability. Jetsys
                    Defence offers a wide range of options including:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic cutter and spreader tools</li>
                    <li>Aircraft emergency rescue equipment kits</li>
                    <li>Portable aviation rescue tools</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h3>

                  <p className="text-black">
                    The Aircraft Rescue Tool by Jetsys Defence is an essential
                    solution for aviation safety and emergency response teams. With
                    advanced features like hydraulic rescue cutter, hydraulic
                    cutter and spreader, and complete aircraft emergency tools
                    kits, our products ensure safety, efficiency, and reliability
                    in every operation.
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