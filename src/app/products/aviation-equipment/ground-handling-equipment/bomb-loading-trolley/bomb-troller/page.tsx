import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Bomb Roller Aviation Equipment | Jetsys Defence",
  description:
    "Discover bomb roller by Jetsys Defence including aircraft bomb roller systems and payload handling rollers for safe, efficient defence aviation operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/spreader-cutter-with-petrol-engine/replacement_blades",
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
                Bomb Roller – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Bomb Roller by Jetsys Defence is a precision-engineered aviation ground support tool designed for smooth, safe, and efficient movement of bombs and heavy payloads. Built with rugged materials and advanced design, this equipment ensures controlled handling during aircraft loading and maintenance operations.
              </p>
              <p className="font-medium text-base">
                Our bomb roller is essential for defence aviation environments where accuracy, safety, and efficiency are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/bomb-troller.png"
                  width={500}
                  height={1000}
                  alt="Bomb Roller Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Bomb Roller? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Bomb Roller?
                  </h2>
                  <p className="text-black mb-4">
                    A bomb roller is specialized aviation equipment used to roll, position, and align bombs or payloads during loading and unloading operations. It minimizes manual effort while ensuring safe handling of heavy munitions.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft bomb roller system</li>
                    <li>Bomb handling roller</li>
                    <li>Aircraft weapon roller</li>
                    <li>Payload rolling system aircraft</li>
                  </ul>
                </div>
              </section>

              {/* Types of Bomb Rollers */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Bomb Rollers
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers multiple configurations based on operational needs:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Aircraft Bomb Roller</h3>
                          Designed specifically for aircraft integration, allowing smooth rolling and positioning of bombs.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Heavy Duty Bomb Roller</h3>
                          Built for handling large and high-weight payloads in demanding defence environments.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Bomb Roller Conveyor System</h3>
                          A bomb roller conveyor system used for continuous movement and efficient loading operations.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Aviation Ground Support Roller</h3>
                          Multi-functional aviation ground support equipment used for payload handling and aircraft servicing.
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
                    Applications of Bomb Roller
                  </h2>
                  <p className="text-black mb-4">
                    The bomb roller from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Military airbases and defence operations</li>
                    <li>Aircraft bomb loading and unloading</li>
                    <li>Aviation ground handling systems</li>
                    <li>Maintenance and servicing of aircraft payload systems</li>
                    <li>Safe transport and positioning of heavy munitions</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our aircraft bomb roller system ensures efficient and controlled operations in high-risk environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Bomb Roller
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Smooth rolling mechanism for easy movement</li>
                        <li>High load-bearing capacity</li>
                        <li>Durable and rugged construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Low maintenance and long service life</li>
                        <li>Designed for aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our bomb handling roller systems are engineered for reliability and efficiency in critical operations.
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
                    Jetsys Defence is a trusted manufacturer of aviation and defence equipment, delivering high-performance solutions for mission-critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Advanced bomb roller systems</li>
                    <li>High-quality aircraft weapon roller solutions</li>
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
                    Bomb Roller Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a bomb roller depends on specifications such as load capacity, design type, and customization. Jetsys Defence offers a range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Heavy duty bomb roller</li>
                    <li>Bomb roller conveyor systems</li>
                    <li>Aircraft payload rolling systems</li>
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
                    The Bomb Roller by Jetsys Defence is an essential aviation ground support tool for defence operations. With features like smooth rolling systems, heavy-duty construction, and precise handling capabilities, our equipment ensures safe, efficient, and reliable bomb positioning and movement.
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