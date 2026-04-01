import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Hydraulic Test Rig Aviation Equipment | Jetsys Defence",
  description:
    "Explore hydraulic test rig by Jetsys Defence including hydraulic pump test rig, cylinder test rig, and aircraft hydraulic testing systems for precise performance validation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/brake-valve-test-rig/hydraulic_test_rig",
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
                Hydraulic Test Rig – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Hydraulic Test Rig by Jetsys Defence is a high-performance aviation testing solution designed to evaluate, simulate, and validate hydraulic systems with precision. Engineered for reliability and accuracy, this advanced equipment ensures optimal performance of hydraulic components used in aircraft and defence systems.
              </p>
              <p className="font-medium text-base">
                Our hydraulic test rig is ideal for MRO facilities, aircraft manufacturers, and defence organizations requiring accurate and efficient hydraulic system testing.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Hydraulic Test Rig.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Test Rig Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Hydraulic Test Rig? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Hydraulic Test Rig?
                  </h2>
                  <p className="text-black mb-4">
                    A hydraulic test rig is specialized equipment used to test hydraulic systems, components, and assemblies under controlled pressure and flow conditions. It replicates real-world operating environments to ensure performance, safety, and compliance.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic pump test rig</li>
                    <li>Hydro test rig</li>
                    <li>Hydraulic test rig for aircraft</li>
                    <li>Hydraulic cylinder test rig</li>
                  </ul>
                </div>
              </section>

              {/* Types of Hydraulic Test Rigs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Hydraulic Test Rigs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers multiple configurations for different testing applications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Hydraulic Pump Test Rig</h3>
                          A hydraulic pump test rig is used to evaluate pump efficiency, pressure output, and flow characteristics.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Hydraulic Cylinder Test Rig</h3>
                          The hydraulic cylinder test rig is designed to test cylinder performance, sealing, and load-bearing capacity.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Aircraft Hydraulic Test Rig</h3>
                          A specialized hydraulic test rig for aircraft used for testing aviation hydraulic systems under real operational conditions.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Hydro Test Rig</h3>
                          A hydro test rig is used for pressure testing and leak detection in hydraulic components and pipelines.
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
                    Applications of Hydraulic Test Rig
                  </h2>
                  <p className="text-black mb-4">
                    The hydraulic test rig from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance, repair, and overhaul (MRO)</li>
                    <li>Aircraft manufacturing and system validation</li>
                    <li>Defence aviation testing facilities</li>
                    <li>Hydraulic component testing and calibration</li>
                    <li>Industrial and aerospace engineering applications</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our hydraulic cylinder test rig and hydraulic pump test rig ensure accurate testing in critical environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Hydraulic Test Rig
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-precision pressure and flow control</li>
                        <li>Real-time data monitoring and analysis</li>
                        <li>PLC-based automated operation</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable and robust construction</li>
                        <li>Designed for aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our hydraulic test rig for aircraft ensures reliable and repeatable testing results.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment, delivering advanced testing solutions for mission-critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>High-performance hydraulic test rigs</li>
                    <li>Reliable hydraulic pump test rig and hydraulic cylinder test rig solutions</li>
                    <li>Custom-built systems for aviation and defence</li>
                    <li>Long-lasting and efficient equipment</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Hydraulic Test Rig Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a hydraulic test rig depends on testing capacity, automation level, and customization. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic pump test rig</li>
                    <li>Hydraulic cylinder test rig</li>
                    <li>Hydraulic test rig for aircraft</li>
                    <li>Hydro test rig systems</li>
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
                    The Hydraulic Test Rig by Jetsys Defence is an essential solution for aviation and defence testing applications. With advanced features like precision hydraulic control, automated systems, and real-time monitoring, our equipment ensures accurate, efficient, and reliable testing of hydraulic systems.
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