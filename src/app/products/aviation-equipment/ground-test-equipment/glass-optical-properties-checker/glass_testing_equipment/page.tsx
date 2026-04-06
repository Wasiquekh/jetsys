import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Glass Testing Equipment | Jetsys Defence Aviation Solutions",
  description:
    "Explore glass testing equipment by Jetsys Defence including glass hydrometer, viscometer, and spark testing systems for accurate glass material analysis and validation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/glass_testing_equipment",
  },
};

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Glass Testing Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Glass Testing Equipment by Jetsys Defence is a high-precision solution designed for testing,
                analyzing, and validating glass materials used in aviation, defence, and industrial applications.
                Engineered with advanced technology and durable construction, this equipment ensures accurate
                measurement of physical and chemical properties of glass components.
              </p>
              <br />
              <p className="font-medium text-base">
                Our glass testing equipment is ideal for laboratories, manufacturing facilities, and aviation
                environments where precision, safety, and reliability are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/glass_testing_equipment.png"
                  width={500}
                  height={1000}
                  alt="Glass Testing Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Glass Testing Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Glass Testing Equipment?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    Glass testing equipment refers to specialized tools used to evaluate the quality, strength,
                    viscosity, and chemical properties of glass materials. These systems ensure that glass components
                    meet strict performance and safety standards required in aviation and industrial applications.
                  </p>
                  <p className="font-medium text-base">These systems are widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Density measurement using glass hydrometer</li>
                    <li>Viscosity analysis using glass viscometer</li>
                    <li>Surface and structural testing including spark testing glass lined vessels</li>
                    <li>Laboratory-grade analysis with GED glass equipment</li>
                  </ul>
                </div>
              </section>

              {/* Types of Glass Testing Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Glass Testing Equipment
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers a range of advanced testing solutions:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Glass Hydrometer</h4>
                          A glass hydrometer is used to measure the density and specific gravity of liquids, ensuring
                          accurate testing in laboratory environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Glass Viscometer</h4>
                          The glass viscometer is designed to measure the viscosity of fluids, helping determine flow
                          characteristics and material consistency.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Spark Testing Equipment for Glass Lined Vessels</h4>
                          Specialized systems for spark testing glass lined vessels are used to detect cracks, defects,
                          and coating failures in glass-lined equipment.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">GED Glass Equipment</h4>
                          Advanced GED glass equipment provides high-precision testing solutions for laboratory and
                          industrial applications.
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
                    Applications of Glass Testing Equipment
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The glass testing equipment from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Aviation component testing and validation</li>
                    <li>Defence and industrial material inspection</li>
                    <li>Laboratory testing and research applications</li>
                    <li>Quality control in glass manufacturing</li>
                    <li>Chemical and process industries</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our equipment ensures accurate and reliable glass material testing in critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Glass Testing Equipment
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-precision measurement and analysis</li>
                    <li>Advanced testing for density, viscosity, and defects</li>
                    <li>Durable and corrosion-resistant construction</li>
                    <li>Easy-to-use and reliable systems</li>
                    <li>Designed to meet industry and aviation standards</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our glass testing equipment delivers consistent and repeatable testing results.
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
                  <p className="font-medium text-base mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing
                    solutions for mission-critical operations.
                  </p>
                  <p className="font-medium text-base">We provide:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>High-performance glass testing equipment systems</li>
                    <li>Reliable glass hydrometer and viscometer solutions</li>
                    <li>Advanced spark testing systems for glass lined vessels</li>
                    <li>Custom-built solutions for aviation and industrial use</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Glass Testing Equipment Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of glass testing equipment depends on the type of equipment, accuracy level, and
                    application requirements. Jetsys Defence offers a wide range of solutions including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Glass hydrometer systems</li>
                    <li>Glass viscometer equipment</li>
                    <li>Spark testing systems for glass lined vessels</li>
                    <li>GED glass equipment solutions</li>
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
                  <p className="font-medium text-base">
                    The Glass Testing Equipment by Jetsys Defence is an essential solution for ensuring the quality,
                    durability, and performance of glass materials in aviation and industrial applications. With
                    advanced tools like glass hydrometers, glass viscometers, and spark testing systems, our equipment
                    delivers precise and reliable testing results.
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

export default Page;