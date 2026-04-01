import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Payload Trolley Aviation Equipment | Jetsys Defence",
  description:
    "Explore aircraft payload trolley by Jetsys Defence including hydraulic payload handling systems and aviation ground support equipment for safe, efficient operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/ldp-trolley/aircraft_payload_trolley",
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
                Aircraft Payload Trolley – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Payload Trolley by Jetsys Defence is a high-performance aviation ground support solution designed for safe, efficient, and precise handling of aircraft payloads. Built with advanced engineering and rugged construction, this trolley ensures smooth transportation, positioning, and loading of various payloads including weapons, fuel tanks, and external stores.
              </p>
              <p className="font-medium text-base">
                Our aircraft payload trolley is engineered for defence aviation operations where precision, safety, and operational efficiency are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/airload-trolley.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Payload Trolley Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Payload Trolley? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Payload Trolley?
                  </h2>
                  <p className="text-black mb-4">
                    An aircraft payload trolley is specialized aviation ground support equipment used to transport, lift, and position payloads onto aircraft systems. It plays a crucial role in aircraft maintenance, servicing, and weapon loading operations.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft payload handling trolley</li>
                    <li>Payload transport trolley aircraft</li>
                    <li>Aircraft loading trolley</li>
                    <li>Aircraft ground support trolley</li>
                  </ul>
                </div>
              </section>

              {/* Types of Aircraft Payload Trolleys */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Payload Trolleys
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers multiple configurations based on operational requirements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Hydraulic Aircraft Payload Trolley</h3>
                          A hydraulic aircraft payload trolley provides controlled lifting and precise positioning of payloads.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Aircraft Weapon Payload Trolley</h3>
                          Designed for handling and loading weapons and defence payloads safely onto aircraft.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Heavy Duty Payload Trolley</h3>
                          Built for transporting large and heavy payloads in demanding aviation environments.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Aviation Ground Support Payload Trolley</h3>
                          Multi-purpose aviation ground support equipment used for payload handling and aircraft servicing.
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
                    Applications of Aircraft Payload Trolley
                  </h2>
                  <p className="text-black mb-4">
                    The aircraft payload trolley from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Military airbases and defence operations</li>
                    <li>Aircraft payload loading and unloading</li>
                    <li>Aviation ground support systems</li>
                    <li>Maintenance and servicing of aircraft systems</li>
                    <li>Transport and positioning of weapons and equipment</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our aircraft payload handling trolley ensures safe and efficient operations in high-risk environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Payload Trolley
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High load capacity for heavy payloads</li>
                        <li>Precision hydraulic lifting system</li>
                        <li>Durable and rugged construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Easy maneuverability and control</li>
                        <li>Designed to meet aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our payload transport trolley aircraft systems ensure smooth and reliable handling during critical operations.
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
                    Jetsys Defence is a trusted manufacturer of aviation and defence equipment, delivering high-quality solutions for mission-critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Advanced aircraft payload trolley systems</li>
                    <li>High-quality aircraft loading trolley solutions</li>
                    <li>Durable and field-tested equipment</li>
                    <li>Custom-built designs for aviation and defence needs</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Payload Trolley Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of an aircraft payload trolley depends on specifications such as load capacity, hydraulic features, and customization. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic aircraft payload trolley</li>
                    <li>Heavy duty payload trolley</li>
                    <li>Aircraft ground support trolley systems</li>
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
                    The Aircraft Payload Trolley by Jetsys Defence is an essential solution for aviation ground support and defence operations. With advanced features like hydraulic lifting systems, heavy-duty construction, and precise handling capabilities, our equipment ensures safe, efficient, and reliable payload handling for aircraft.
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