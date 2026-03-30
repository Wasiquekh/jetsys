import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Door Opening Tool | Jetsys Defence Aviation Equipment",
  description:
    "Discover aircraft door opening tools by Jetsys Defence including hydraulic door openers and rescue tools for safe, fast aircraft access in emergency and maintenance operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/spreader-cutter-with-petrol-engine/aircraft_door_opening_tool",
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
                Aircraft Door Opening Tool – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Door Opening Tool by Jetsys Defence is a specialized
                aviation-grade solution designed for safe, fast, and efficient
                access to aircraft doors during emergency and maintenance
                operations. Engineered with precision and durability, this tool
                ensures reliable performance in critical situations such as rescue
                missions, aircraft servicing, and airport emergency response.
              </p>
              <p className="font-medium text-base">
                Whether used by aviation professionals or emergency teams, our
                aircraft door opening tool delivers maximum control, safety, and
                efficiency.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aviation_tool_door.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Door Opening Tool Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Door Opening Tool?
                  </h3>

                  <p className="text-black mb-4">
                    An aircraft door opening tool is a specialized device used to
                    open jammed, locked, or damaged aircraft doors quickly and
                    safely. It is commonly used in rescue operations, aircraft
                    maintenance, and emergency access scenarios.
                  </p>

                  <p className="text-black mb-4">
                    These tools are often part of:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft emergency tools kits</li>
                    <li>Aviation rescue tools systems</li>
                    <li>Aircraft emergency access equipment</li>
                    <li>Aircraft rescue equipment</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Door Opening Tools
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence provides a range of tools designed for different
                    operational needs:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            1. Hydraulic Door Opening Tool
                          </h4>
                          A powerful hydraulic door opening tool designed to
                          generate high force for opening jammed aircraft doors.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            2. Aircraft Emergency Door Opener
                          </h4>
                          Used during emergency situations where immediate access
                          to aircraft interiors is required.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            3. Portable Door Opening Tool
                          </h4>
                          Lightweight and easy-to-use portable aircraft door opener
                          tools for quick deployment.
                        </li>
                      </ul>
                    </div>

                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            4. Hydraulic Spreader for Door Opening
                          </h4>
                          A hydraulic spreader can also be used as an aircraft door
                          opening tool to create gaps and force open doors safely.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            5. Rescue Door Opening Tools
                          </h4>
                          Multi-functional aircraft rescue tools that combine
                          cutting, spreading, and prying capabilities.
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
                    Applications of Aircraft Door Opening Tool
                  </h3>

                  <p className="text-black mb-4">
                    The aircraft door opening tool from Jetsys Defence is widely
                    used in:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>Aircraft emergency rescue operations</li>
                    <li>Airport fire and rescue services</li>
                    <li>Aircraft maintenance and servicing</li>
                    <li>Emergency evacuation scenarios</li>
                    <li>Aviation safety and rapid response teams</li>
                  </ul>

                  <p className="text-black">
                    Our aviation emergency equipment ensures fast access without
                    causing unnecessary damage to aircraft structures.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Door Opening Tool
                  </h3>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>High-force hydraulic mechanism</li>
                    <li>Precision control for safe operations</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Portable and easy-to-handle design</li>
                    <li>Suitable for emergency and maintenance use</li>
                  </ul>

                  <p className="text-black">
                    Our aircraft emergency access tools are designed for maximum
                    efficiency in critical situations.
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
                    Jetsys Defence is a leading provider of aviation equipment,
                    offering high-performance tools designed for safety and
                    reliability.
                  </p>

                  <p className="text-black mb-4">
                    We provide:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Advanced aircraft door opening tools</li>
                    <li>Reliable aviation rescue tools</li>
                    <li>Durable aircraft emergency equipment</li>
                    <li>Long-lasting and cost-effective solutions</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Door Opening Tool Price & Availability
                  </h3>

                  <p className="text-black mb-4">
                    The price of an aircraft door opening tool depends on features
                    such as hydraulic capacity, portability, and functionality.
                    Jetsys Defence offers a wide range of options including:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic door opening tools</li>
                    <li>Portable aircraft door opener tools</li>
                    <li>Aircraft emergency rescue equipment kits</li>
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
                    The Aircraft Door Opening Tool by Jetsys Defence is an essential
                    solution for aviation safety and emergency response. With
                    advanced features like hydraulic door opening tools, portable
                    aircraft door opener systems, and integrated aircraft rescue
                    tools, our products ensure fast, safe, and efficient operations
                    in every situation.
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