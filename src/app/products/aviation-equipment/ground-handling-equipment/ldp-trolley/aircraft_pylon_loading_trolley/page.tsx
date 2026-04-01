import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aircraft Pylon Loading Trolley | Jetsys Defence Aviation Equipment",
  description:
    "Explore aircraft pylon loading trolley by Jetsys Defence including hydraulic lifting systems and aviation ground support equipment for safe, precise aircraft payload handling.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/ldp-trolley/aircraft_pylon_loading_trolley",
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
                Aircraft Pylon Loading Trolley – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aircraft Pylon Loading Trolley by Jetsys Defence is a high-performance aviation ground support solution designed for safe, precise, and efficient loading of payloads onto aircraft pylons. Engineered with advanced hydraulic systems and durable construction, this trolley ensures accurate positioning of weapons, fuel tanks, and external stores.
              </p>
              <p className="font-medium text-base">
                Our aircraft pylon loading trolley is built for defence aviation operations where precision, safety, and operational efficiency are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Aircraft Pylon Loading Trolley.png"
                  width={500}
                  height={1000}
                  alt="Aircraft Pylon Loading Trolley Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Aircraft Pylon Loading Trolley? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Aircraft Pylon Loading Trolley?
                  </h2>
                  <p className="text-black mb-4">
                    An aircraft pylon loading trolley is specialized equipment used to transport, lift, and align payloads onto aircraft pylons. These pylons are external mounting points used for weapons, fuel tanks, and mission equipment.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft pylon loader trolley</li>
                    <li>Pylon loading system aircraft</li>
                    <li>Aircraft payload pylon trolley</li>
                    <li>Aircraft weapon loading trolley</li>
                  </ul>
                </div>
              </section>

              {/* Types of Aircraft Pylon Loading Trolleys */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aircraft Pylon Loading Trolleys
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers multiple configurations to meet operational needs:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Hydraulic Aircraft Pylon Loading Trolley</h3>
                          A hydraulic aircraft pylon loading trolley provides smooth and controlled lifting for precise alignment.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Aircraft Weapon Pylon Trolley</h3>
                          Designed specifically for loading and mounting weapons onto aircraft pylons.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Heavy Duty Pylon Loading Trolley</h3>
                          Built for handling large and heavy payloads in demanding defence aviation environments.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Aviation Ground Support Trolley</h3>
                          Multi-functional aviation ground support equipment used for pylon loading and aircraft servicing.
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
                    Applications of Aircraft Pylon Loading Trolley
                  </h2>
                  <p className="text-black mb-4">
                    The aircraft pylon loading trolley from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Military airbases and defence operations</li>
                    <li>Aircraft weapon mounting and loading</li>
                    <li>Installation of fuel tanks and external payloads</li>
                    <li>Aviation ground support systems</li>
                    <li>Maintenance and servicing of aircraft systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our aircraft weapon loading trolley ensures safe and accurate operations in high-risk environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aircraft Pylon Loading Trolley
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
                    Our hydraulic aircraft pylon loading trolley ensures smooth and reliable handling during critical operations.
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
                    Jetsys Defence is a trusted manufacturer of aviation and defence equipment, delivering high-quality and reliable solutions.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Advanced aircraft pylon loading trolley systems</li>
                    <li>High-quality pylon loader trolley solutions</li>
                    <li>Durable and field-tested equipment</li>
                    <li>Custom-built designs for defence aviation</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Aircraft Pylon Loading Trolley Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of an aircraft pylon loading trolley depends on specifications such as load capacity, hydraulic features, and customization. Jetsys Defence offers a range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic aircraft pylon loading trolley</li>
                    <li>Heavy duty pylon loading trolley</li>
                    <li>Aircraft payload loading trolley systems</li>
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
                    The Aircraft Pylon Loading Trolley by Jetsys Defence is an essential solution for defence aviation operations. With advanced features like hydraulic lifting systems, heavy-duty construction, and precise alignment capabilities, our equipment ensures safe, efficient, and reliable payload loading onto aircraft pylons.
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