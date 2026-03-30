import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Replacement Blades for Aviation Equipment | Jetsys Defence",
  description:
    "Buy high-quality replacement blades for aviation equipment from Jetsys Defence. Durable, precision-engineered blades for aircraft maintenance and safety tools.",
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
                Replacement Blades for Aviation Equipment – Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Replacement Blades from Jetsys Defence are designed to deliver precision cutting performance in aviation, rescue, and industrial environments. Built with high-grade materials, these blades ensure durability, safety, and efficiency in critical operations.
              </p>
              <p className="font-medium text-base">
                Whether you are maintaining aircraft rescue tools or upgrading your aviation cutting systems, our replacement blades provide unmatched reliability and long service life.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/replacement_blades.png"
                  width={500}
                  height={1000}
                  alt="Replacement Blades for Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What Are Replacement Blades */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What Are Replacement Blades in Aviation Equipment?
                  </h2>
                  <p className="text-black mb-4">
                    Replacement blades are specialized cutting components used in aviation rescue tools such as cutters, spreaders, and hydraulic equipment. These blades are engineered to cut through high-strength aircraft materials, including aluminum alloys, reinforced panels, and structural components.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    They play a critical role in:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft rescue operations</li>
                    <li>Emergency response situations</li>
                    <li>Maintenance and repair tasks</li>
                    <li>Industrial aviation support</li>
                  </ul>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Replacement Blades
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">High-Strength Material Construction</h3>
                          Manufactured using premium-grade steel for superior strength and wear resistance.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Precision Engineering</h3>
                          Designed for accurate and clean cuts, ensuring operational efficiency.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Long Service Life</h3>
                          Optimized blade design reduces frequent replacements and downtime.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Compatibility with Aviation Tools</h3>
                          Suitable for hydraulic cutters and aviation rescue equipment.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Corrosion Resistance</h3>
                          Built to withstand harsh environments and extreme conditions.
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
                    Applications of Replacement Blades
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Aircraft Emergency Rescue</h3>
                          Cutting through damaged aircraft structures during rescue operations.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Aviation Maintenance</h3>
                          Used in repair and dismantling of aircraft components.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Industrial Cutting Operations</h3>
                          Applicable in heavy-duty cutting tasks beyond aviation.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Hydraulic Cutter Systems</h3>
                          Essential component for high-performance cutting tools.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Replacement Blades?
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence stands out as a trusted provider of aviation equipment components due to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Reliable product quality</li>
                    <li>Industry-grade manufacturing standards</li>
                    <li>Consistent performance in critical environments</li>
                    <li>Support for aviation and defence sectors</li>
                    <li>Durable and cost-effective solutions</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our replacement blades are tested to meet demanding operational requirements, making them ideal for aviation professionals.
                  </p>
                </div>
              </section>

              {/* Types of Replacement Blades */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Replacement Blades Available
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-black">
                      <h3 className="font-bold text-[#5C5649]">Straight Cutting Blades</h3>
                      <p>Ideal for general-purpose cutting tasks.</p>
                    </div>
                    <div className="text-black">
                      <h3 className="font-bold text-[#5C5649]">Curved Blades</h3>
                      <p>Designed for precision cutting in tight or complex areas.</p>
                    </div>
                    <div className="text-black">
                      <h3 className="font-bold text-[#5C5649]">Heavy-Duty Blades</h3>
                      <p>Used for cutting thick and reinforced materials.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Maintenance Tips */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Maintenance Tips for Replacement Blades
                  </h2>
                  <p className="text-black mb-4">
                    To ensure maximum efficiency and lifespan:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Regularly inspect blades for wear and damage</li>
                    <li>Keep blades clean and free from debris</li>
                    <li>Store in dry and protected environments</li>
                    <li>Replace blades when cutting performance declines</li>
                  </ul>
                </div>
              </section>

              {/* Buy High-Quality Replacement Blades */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Buy High-Quality Replacement Blades from Jetsys Defence
                  </h2>
                  <p className="text-black mb-4">
                    If you are looking for reliable replacement blades for aviation equipment, Jetsys Defence offers high-performance solutions tailored for safety and precision.
                  </p>
                  <p className="text-black">
                    Our products are designed to meet the needs of aviation professionals, ensuring performance when it matters most.
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