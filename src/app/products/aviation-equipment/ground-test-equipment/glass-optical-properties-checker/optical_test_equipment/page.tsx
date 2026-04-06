import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Optical Test Equipment | Jetsys Defence Fiber Testing Solutions",
  description:
    "Explore optical test equipment by Jetsys Defence including optical power meter, OTDR tester, fiber optic cable tester, and spectrum analyzer for precise testing.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker/optical_test_equipment",
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
                Optical Test Equipment – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Optical Test Equipment by Jetsys Defence is a high-precision solution designed for testing,
                measuring, and validating fiber optic and optical communication systems in aviation and defence
                environments. Engineered with advanced technology and durable construction, this equipment ensures
                accurate signal analysis, fault detection, and system reliability.
              </p>
              <br />
              <p className="font-medium text-base">
                Our optical test equipment is ideal for aviation communication systems, defence networks, and
                high-performance fiber optic infrastructure where precision and performance are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Optical Test Equipment.png"
                  width={500}
                  height={1000}
                  alt="Optical Test Equipment by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Optical Test Equipment? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Optical Test Equipment?
                  </h2>
                  <p className="font-medium text-base mb-4">
                    Optical test equipment refers to specialized tools used to measure, analyze, and troubleshoot
                    fiber optic systems and optical communication networks.
                  </p>
                  <p className="font-medium text-base">These systems are widely used for:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Signal strength measurement using optical power meter</li>
                    <li>Fault detection using time domain reflectometer (OTDR tester)</li>
                    <li>Spectrum analysis using optical spectrum analyzer</li>
                    <li>Cable testing using fiber optic cable tester</li>
                  </ul>
                </div>
              </section>

              {/* Types of Optical Test Equipment */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Optical Test Equipment
                  </h2>
                  <p className="font-medium text-base mb-5">
                    Jetsys Defence offers a wide range of advanced testing tools:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Optical Power Meter</h4>
                          A high-precision optical power meter used to measure optical signal strength in fiber
                          networks. Also available as: Fibre optic power meter, PON power meter, Optical power meter
                          with laser.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">OTDR Tester (Time Domain Reflectometer)</h4>
                          An advanced time domain reflectometer or OTDR tester used for locating faults, breaks, and
                          signal losses in fiber optic cables.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Optical Spectrum Analyzer</h4>
                          A powerful optical spectrum analyzer used to measure signal wavelengths and spectral
                          distribution in optical systems.
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fiber Optic Cable Tester</h4>
                          Reliable fiber optic cable tester and fiber cable tester solutions used for checking fiber
                          optic cable integrity and performance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Visual Fault Locator (VFL Fiber Tester)</h4>
                          A compact VFL fiber tester or fiber optic light tester used for quick fault detection and
                          troubleshooting.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fiber Testing Tools</h4>
                          Complete fiber testing tools including: Fiber tester, Fluke fiber tester compatible
                          solutions, Fiber optic tester for advanced diagnostics.
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
                    Applications of Optical Test Equipment
                  </h2>
                  <p className="font-medium text-base mb-4">
                    The optical test equipment from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Aircraft communication system testing</li>
                    <li>Defence communication networks</li>
                    <li>Fiber optic cable installation and maintenance</li>
                    <li>Signal performance validation and troubleshooting</li>
                    <li>Aviation ground testing systems</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our equipment supports accurate checking fiber optic cable performance in critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Optical Test Equipment
                  </h2>
                  <ul className="list-disc pl-8 space-y-3">
                    <li>High-precision optical signal measurement</li>
                    <li>Advanced fault detection and diagnostics</li>
                    <li>Portable and user-friendly design</li>
                    <li>Durable construction for aviation and defence use</li>
                    <li>Real-time monitoring and analysis</li>
                  </ul>
                  <p className="font-medium text-base mt-4">
                    Our optical tester solutions ensure consistent and reliable performance.
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
                    testing solutions for mission-critical operations.
                  </p>
                  <p className="font-medium text-base">We provide:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>High-performance optical test equipment systems</li>
                    <li>Reliable fiber optic tester solutions</li>
                    <li>Advanced optical power meter systems</li>
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
                    Optical Test Equipment Price & Availability
                  </h2>
                  <p className="font-medium text-base">
                    The price of optical test equipment depends on features such as measurement range, accuracy, and
                    functionality. Jetsys Defence offers a wide range of solutions including:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-3">
                    <li>Optical power meter price-based solutions</li>
                    <li>Optical spectrum analyzer price options</li>
                    <li>Fiber optic cable tester systems</li>
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
                    The Optical Test Equipment by Jetsys Defence is an essential solution for ensuring reliable and
                    high-performance fiber optic communication systems in aviation and defence. With advanced tools
                    like optical power meters, OTDR testers, and optical spectrum analyzers, our equipment delivers
                    accurate and efficient testing for modern optical networks.
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