import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Refractive Index Measurement System | Jetsys Defence Aviation Equipment",
  description:
    "Explore refractive index measurement system by Jetsys Defence for accurate optical testing, refractometer analysis, and material validation in aviation applications.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/refractive_index_measurement_system",
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
                Refractive Index Measurement System – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Refractive Index Measurement System by Jetsys Defence is a high-precision testing solution designed
                to measure and analyze the refractive index of materials used in aviation, defence, and optical
                applications. Engineered with advanced optical technology and robust construction, this system ensures
                accurate material characterization and performance validation.
              </p>
              <br />
              <p className="font-medium text-base">
                Our refractive index measurement system is ideal for laboratories, aircraft manufacturing, and
                research facilities where precision and optical accuracy are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/glass-optical-properties-checker.png"
                  width={500}
                  height={1000}
                  alt="Refractive Index Measurement System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Refractive Index Measurement System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Refractive Index Measurement System?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    A refractive index measurement system is specialized equipment used to determine how light
                    propagates through a material. It is essential for evaluating optical properties of materials such
                    as glass, polymers, and coatings used in aviation components.
                  </p>
                  <p className="font-medium text-base">This system is widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Refractive index measurement equipment for optical materials</li>
                    <li>Digital refractometer system for precise readings</li>
                    <li>Optical refractive index testing</li>
                    <li>Refractive index analyzer systems</li>
                  </ul>
                </div>
              </section>

              {/* Types of Refractive Index Measurement Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Refractive Index Measurement Systems
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers advanced solutions for optical measurement:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Digital Refractometer System</h3>
                          A high-precision digital refractometer system used for accurate and repeatable refractive
                          index measurement.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Optical Refractive Index Analyzer</h3>
                          Advanced refractive index analyzer systems designed for detailed optical analysis and
                          material testing.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Laboratory Refractive Index Measurement Equipment</h3>
                          Specialized refractive index measurement equipment for controlled laboratory environments.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Automated Refractive Index Testing System</h3>
                          Fully automated systems designed for high-efficiency and consistent measurement results.
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
                    Applications of Refractive Index Measurement System
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The refractive index measurement system from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Aircraft glass and transparency testing</li>
                    <li>Optical component manufacturing</li>
                    <li>Defence and aviation research laboratories</li>
                    <li>Material quality control and validation</li>
                    <li>Optical coating and lens testing</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our systems ensure accurate and reliable optical measurements in critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Refractive Index Measurement System
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-precision optical measurement technology</li>
                    <li>Real-time data analysis and monitoring</li>
                    <li>Automated and user-friendly operation</li>
                    <li>Durable and laboratory-grade construction</li>
                    <li>Designed to meet global testing standards</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our refractive index measurement system ensures consistent and repeatable testing performance.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced optical and
                    testing solutions for mission-critical applications.
                  </p>
                  <p className="font-medium text-base">We provide:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>High-performance refractive index measurement systems</li>
                    <li>Reliable optical refractometer systems</li>
                    <li>Advanced refractive index analyzer solutions</li>
                    <li>Custom-built systems for aviation and defence</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Refractive Index Measurement System Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of a refractive index measurement system depends on measurement accuracy, automation
                    level, and application requirements. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Digital refractometer systems</li>
                    <li>Optical refractive index analyzers</li>
                    <li>Laboratory refractive index measurement equipment</li>
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
                    The Refractive Index Measurement System by Jetsys Defence is an essential solution for precise
                    optical material analysis in aviation and defence industries. With advanced features like
                    high-accuracy measurement, automated analysis, and robust construction, our system delivers
                    reliable and consistent refractive index testing results.
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