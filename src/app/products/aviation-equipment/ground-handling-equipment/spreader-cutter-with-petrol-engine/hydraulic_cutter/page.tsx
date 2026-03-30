import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Hydraulic Cutter Aviation Equipment | Jetsys Defence Tools",
  description:
    "Explore high-performance hydraulic cutter solutions by Jetsys Defence including cable, bolt, hose, and press cutting machines for aviation and industrial use.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/spreader-cutter-with-petrol-engine/hydraulic_cutter",
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
                Hydraulic Cutter – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Hydraulic Cutter by Jetsys Defence is a high-performance
                aviation-grade tool designed for precision cutting in demanding
                environments. Whether used in aircraft maintenance, emergency
                rescue, or industrial operations, our hydraulic cutting solutions
                deliver unmatched strength, reliability, and efficiency.
              </p>
              <p className="font-medium text-base">
                Engineered with advanced technology, this hydraulic cutting
                machine ensures smooth operation, high durability, and superior
                cutting performance across multiple applications.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/hyrolic cutter.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Cutter Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Hydraulic Cutter?
                  </h3>

                  <p className="text-black mb-4">
                    A hydraulic cutter is a powerful tool that uses hydraulic
                    pressure to cut through tough materials such as steel, cables,
                    rods, pipes, and aircraft components. Unlike manual tools, it
                    provides high force with minimal effort.
                  </p>

                  <p className="text-black mb-4">
                    It is widely used as:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic cable cutter for cutting thick cables</li>
                    <li>Hydraulic bolt cutter / hydraulic bolt croppers for heavy-duty bolts</li>
                    <li>Hydraulic chain cutter tool for chains and structural elements</li>
                    <li>Hydraulic rope cutter for aviation and rescue operations</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Hydraulic Cutting Machines
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of hydraulic cutting solutions:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            1. Hydraulic Cable Cutter
                          </h4>
                          Used for electrical and aviation wiring systems. Also
                          available as a battery hydraulic cable cutter for
                          portable operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            2. Hydraulic Bolt Cutter
                          </h4>
                          Heavy-duty hydraulic bolt cutters designed for cutting
                          hardened steel bolts, rods, and fasteners.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            3. Hydraulic Cutter and Spreader
                          </h4>
                          Dual-purpose hydraulic cutter spreader tool used in
                          emergency rescue and aviation safety.
                        </li>
                      </ul>
                    </div>

                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            4. Hydraulic Hose Cutting Machine
                          </h4>
                          Includes automatic hydraulic hose cutting machine for
                          precise and fast hose cutting.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            5. Hydraulic Press Cutting Machine
                          </h4>
                          Advanced hydraulic press die cutting machine used for
                          sheet and component shaping.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            6. Hydraulic Sheet & Steel Cutting Machine
                          </h4>
                          High-performance hydraulic sheet cutting machine,
                          hydraulic steel cutting machine, and hydraulic shear
                          cutting machine for industrial applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Hydraulic Cutter in Aviation & Industry
                  </h3>

                  <p className="text-black mb-4">
                    The cutter hydraulic systems from Jetsys Defence are widely
                    used in:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>Aircraft maintenance and repair</li>
                    <li>Emergency rescue operations</li>
                    <li>Industrial manufacturing</li>
                    <li>Construction and heavy engineering</li>
                    <li>Cutting rods, pipes, and structural materials</li>
                  </ul>

                  <p className="text-black">
                    Our tools like hydraulic rod cutter, hydraulic pipe cutting
                    machine, and hydraulic rebar cutter are specifically designed
                    for high-load environments.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Hydraulic Cutter
                  </h3>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>High cutting force with precision</li>
                    <li>Durable aviation-grade build quality</li>
                    <li>Portable and battery-operated options available</li>
                    <li>Suitable for heavy-duty applications</li>
                    <li>Low maintenance and long operational life</li>
                  </ul>

                  <p className="text-black">
                    Our hydraulic hole cutter, hydraulic lock cutter, and
                    hydraulic cutter cable systems are built for reliability in
                    critical situations.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h3>

                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted name in aviation equipment
                    manufacturing. Our hydraulic tools are designed for performance,
                    safety, and long-term use.
                  </p>

                  <p className="text-black mb-4">
                    We provide:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Advanced cutting machine hydraulic solutions</li>
                    <li>Competitive hydraulic cutting machine price options</li>
                    <li>Reliable after-sales support</li>
                    <li>Custom solutions for aviation and industrial needs</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Hydraulic Cutter Price & Availability
                  </h3>

                  <p className="text-black mb-4">
                    The hydraulic cutting machine price depends on specifications
                    such as capacity, portability, and automation level. Jetsys
                    Defence offers cost-effective solutions across all categories
                    including:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic wood cutter machine</li>
                    <li>Hydraulic press die cutting machine</li>
                    <li>Hydraulic cutter spreader</li>
                    <li>Hydraulic chain cutter tool</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h3>

                  <p className="text-black">
                    The Hydraulic Cutter by Jetsys Defence is a must-have tool for
                    aviation professionals, rescue teams, and industrial operators.
                    With a wide range of options like hydraulic cable cutter,
                    hydraulic bolt cutter, and hydraulic cutting machine, we ensure
                    maximum efficiency and safety in every operation.
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