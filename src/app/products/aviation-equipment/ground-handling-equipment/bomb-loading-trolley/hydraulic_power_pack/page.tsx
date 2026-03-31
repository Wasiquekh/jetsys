import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Hydraulic Power Pack for Aviation | Jetsys Defence Equipment",
  description:
    "Explore Jetsys Defence Hydraulic Power Pack solutions including mini, portable, 12V, and diesel units. High performance hydraulic power units at competitive price.",
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
                Hydraulic Power Pack – High Performance Aviation Equipment | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Hydraulic Power Pack by Jetsys Defence is a high-efficiency, precision-engineered solution designed for aviation, industrial, and heavy-duty applications. Built with advanced technology, our hydraulic power unit delivers reliable performance, smooth operation, and long-lasting durability in demanding environments.
              </p>
              <p className="font-medium text-base">
                Whether you need a mini hydraulic power pack, portable hydraulic power unit, or a diesel hydraulic power pack, Jetsys Defence offers customized solutions tailored to your operational needs.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/gemini.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Power Pack Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Hydraulic Power Pack? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Hydraulic Power Pack?
                  </h2>
                  <p className="text-black mb-4">
                    A hydraulic power pack (also known as a hyd power pack or power pack hydraulic system) is a self-contained system that generates hydraulic power to drive machinery and equipment.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It consists of:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic pump</li>
                    <li>Motor (AC, DC, or diesel)</li>
                    <li>Oil reservoir</li>
                    <li>Control valves</li>
                    <li>Pressure regulators</li>
                  </ul>
                  <p className="text-black mt-4">
                    The power pack in hydraulic system converts mechanical energy into hydraulic energy, enabling smooth and controlled movement of machinery components.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Hydraulic Power Packs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">High Efficiency Performance</h3>
                          Our hydraulic power pack pump ensures consistent pressure output and energy-efficient operation.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Compact & Portable Design</h3>
                          Available in mini hydraulic power pack and portable hydraulic power unit variants for easy transport and installation.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Multiple Power Options</h3>
                          12V hydraulic power pack, 12 volt electric hydraulic pump, DC hydraulic power pack, diesel hydraulic power pack
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Durable Construction</h3>
                          Engineered for harsh aviation and industrial environments with corrosion-resistant materials.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Custom Manufacturing</h3>
                          We specialize in hydraulic power pack manufacturing tailored to specific industry requirements.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Hydraulic Power Packs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Hydraulic Power Packs We Offer
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Mini Hydraulic Power Pack</h3>
                          Compact and efficient, ideal for small-scale applications and limited spaces. Also known as mini power pack hydraulic or small hydraulic power pack.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Portable Hydraulic Power Unit</h3>
                          Designed for mobility and field operations where flexibility is required.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">DC & 12V Hydraulic Power Pack</h3>
                          Includes 12v double acting hydraulic pump and mini hydraulic pump 12v options for battery-powered applications.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Diesel Hydraulic Power Pack</h3>
                          Suitable for heavy-duty operations requiring high power output without electrical dependency.
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
                    Applications of Hydraulic Power Pack
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence hydraulic power unit is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance systems</li>
                    <li>Ground support equipment</li>
                    <li>Hydraulic cylinder operations</li>
                    <li>Industrial machinery</li>
                    <li>Lifting and loading systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    It is ideal for powering hydraulic cylinder and power pack combinations for precise and controlled motion.
                  </p>
                </div>
              </section>

              {/* Hydraulic Cylinder & Power Pack Integration */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Hydraulic Cylinder & Power Pack Integration
                  </h2>
                  <p className="text-black mb-4">
                    Our systems are compatible with:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic cylinder power pack setups</li>
                    <li>Single and double-acting cylinders</li>
                    <li>High-pressure industrial applications</li>
                  </ul>
                  <p className="text-black mt-4">
                    This ensures seamless operation in aviation and heavy engineering environments.
                  </p>
                </div>
              </section>

              {/* Price & Cost Factors */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Hydraulic Power Pack Price & Cost Factors
                  </h2>
                  <p className="text-black mb-4">
                    The hydraulic power pack price depends on several factors:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Power capacity (HP / kW)</li>
                    <li>Type (AC, DC, diesel)</li>
                    <li>Pump specifications</li>
                    <li>Customization requirements</li>
                    <li>Application type</li>
                  </ul>
                  <p className="text-black mt-4">
                    We provide competitive hydraulic power pack cost with premium quality and performance assurance.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence Hydraulic Power Pack?
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Trusted hydraulic power pack suppliers</li>
                    <li>Precision-engineered aviation-grade equipment</li>
                    <li>Custom-built solutions</li>
                    <li>Long operational life</li>
                    <li>Cost-effective pricing</li>
                  </ul>
                  <p className="text-black mt-4">
                    Jetsys Defence ensures that every power pack hydraulic price reflects unmatched quality and reliability.
                  </p>
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
                    The Hydraulic Power Pack from Jetsys Defence is a reliable, efficient, and versatile solution for aviation and industrial applications. From mini hydraulic power packs to diesel-powered systems, we deliver performance-driven equipment designed to meet the highest standards.
                  </p>
                  <p className="text-black">
                    If you are looking for a dependable hydraulic power unit, Jetsys Defence is your trusted partner.
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