import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Wavefront Measurement System | Jetsys Defence Optical Equipment",
  description:
    "Explore wavefront measurement system by Jetsys Defence for optical wavefront analysis, aberration detection, and precise testing in aviation and defence applications.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/wavefront_measurement_system",
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
                Wavefront Measurement System – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Wavefront Measurement System by Jetsys Defence is a high-precision optical testing solution
                designed to analyze wavefront distortions, optical performance, and surface accuracy in aviation and
                defence components. Engineered with advanced optical sensing technology and robust construction, this
                system ensures accurate measurement and validation of optical systems.
              </p>
              <br />
              <p className="font-medium text-base">
                Our wavefront measurement system is ideal for aircraft manufacturers, optical laboratories, and
                defence research facilities where precision and optical performance are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Gemini_Generated_Image_4vu7wv4vu7wv4vu7-Photoroom.png"
                  width={500}
                  height={1000}
                  alt="Wavefront Measurement System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Wavefront Measurement System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Wavefront Measurement System?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    A wavefront measurement system is specialized equipment used to measure the shape and distortion
                    of light waves as they pass through optical components. It is essential for evaluating optical
                    quality, alignment, and performance in high-precision systems.
                  </p>
                  <p className="font-medium text-base">This system is widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Wavefront analysis system for optical testing</li>
                    <li>Optical wavefront sensor measurement</li>
                    <li>Laser wavefront measurement system</li>
                    <li>Optical aberration measurement equipment</li>
                  </ul>
                </div>
              </section>

              {/* Types of Wavefront Measurement Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Wavefront Measurement Systems
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers advanced optical measurement solutions:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Shack-Hartmann Wavefront Sensor System</h3>
                          A high-precision wavefront measurement system using Shack-Hartmann technology for accurate
                          wavefront analysis.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Laser Wavefront Measurement System</h3>
                          Advanced systems designed for laser wavefront measurement and optical beam quality analysis.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Optical Aberration Measurement System</h3>
                          Specialized optical aberration measurement equipment used to detect distortions and
                          imperfections in optical systems.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649] text-xl mb-1">Laboratory Wavefront Analysis Equipment</h3>
                          High-accuracy wavefront analysis system designed for controlled laboratory testing and
                          research applications.
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
                    Applications of Wavefront Measurement System
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The wavefront measurement system from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Aircraft optical system testing and validation</li>
                    <li>Optical component manufacturing and inspection</li>
                    <li>Defence and aerospace research laboratories</li>
                    <li>Laser system performance evaluation</li>
                    <li>Optical alignment and calibration</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our systems ensure accurate and reliable optical measurements in mission-critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Wavefront Measurement System
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-resolution wavefront sensing technology</li>
                    <li>Real-time data analysis and visualization</li>
                    <li>Advanced optical aberration detection</li>
                    <li>Durable and laboratory-grade construction</li>
                    <li>Designed to meet aviation and industry standards</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our wavefront measurement system ensures consistent and repeatable testing performance.
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
                    <li>High-performance wavefront measurement systems</li>
                    <li>Reliable optical wavefront sensor systems</li>
                    <li>Advanced optical aberration measurement equipment</li>
                    <li>Custom-built solutions for aviation and defence</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Wavefront Measurement System Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of a wavefront measurement system depends on measurement accuracy, automation level,
                    and application requirements. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Shack-Hartmann wavefront sensor systems</li>
                    <li>Laser wavefront measurement systems</li>
                    <li>Optical analysis and testing equipment</li>
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
                    The Wavefront Measurement System by Jetsys Defence is an essential solution for precise optical
                    analysis and performance validation in aviation and defence applications. With advanced features
                    like high-resolution sensing, real-time analysis, and optical aberration detection, our system
                    delivers accurate and reliable results for modern optical systems.
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