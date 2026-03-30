import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Hydraulic Spreader Aviation Equipment | Jetsys Defence Tools",
  description:
    "Discover high-performance hydraulic spreader solutions by Jetsys Defence including flange spreaders, wedge tools, and cutter spreaders for aviation and industrial use.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/spreader-cutter-with-petrol-engine/hydraulic_spreader",
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
                Hydraulic Spreader – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Hydraulic Spreader by Jetsys Defence is a powerful and
                precision-engineered tool designed for aviation, rescue, and
                industrial applications. Built for high-force separation tasks,
                this hydraulic spreader ensures efficient performance in critical
                operations such as aircraft maintenance, emergency access, and
                heavy-duty industrial work.
              </p>
              <p className="font-medium text-base">
                With robust construction and advanced hydraulic technology, our
                spreaders deliver reliability, safety, and superior performance in
                demanding environments.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/hydronic_spreader.png"
                  width={500}
                  height={1000}
                  alt="Hydraulic Spreader Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Hydraulic Spreader?
                  </h3>

                  <p className="text-black mb-4">
                    A hydraulic spreader is a tool that uses hydraulic pressure to
                    create force for separating, lifting, or spreading materials.
                    It is commonly used in aviation rescue, flange maintenance, and
                    industrial dismantling tasks.
                  </p>

                  <p className="text-black mb-4">
                    It is widely used as:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Portable hydraulic spreader for field operations</li>
                    <li>Spreader wedge / wedge spreader for tight gap expansion</li>
                    <li>Hydraulic cutter and spreader for dual cutting and spreading functions</li>
                    <li>Hydraulic cutter spreader in rescue and emergency systems</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Hydraulic Spreaders
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of spreaders for different
                    applications:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            1. Hydraulic Flange Spreader
                          </h4>
                          The hydraulic flange spreader is used for separating pipe
                          flanges safely without causing damage. It is widely used
                          in aviation fuel systems and industrial pipelines.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            2. Flange Splitter Tool
                          </h4>
                          Also known as a flange splitter tool, this device helps
                          in maintenance and repair of tightly joined flanges.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            3. Hydraulic Flange Splitter
                          </h4>
                          The hydraulic flange splitter is designed for heavy-duty
                          flange separation with high precision and control.
                        </li>
                      </ul>
                    </div>

                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            4. Portable Hydraulic Spreader
                          </h4>
                          A compact and lightweight portable hydraulic spreader for
                          easy handling in field operations and emergency rescue.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            5. Wedge Spreader Systems
                          </h4>
                          Includes spreader wedge and wedge spreader tools designed
                          for inserting into narrow gaps and expanding space
                          efficiently.
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
                    Applications of Hydraulic Spreader in Aviation & Industry
                  </h3>

                  <p className="text-black mb-4">
                    The hydraulic spreader from Jetsys Defence is widely used in:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>Aircraft maintenance and structural separation</li>
                    <li>Emergency rescue and disaster response</li>
                    <li>Pipeline and flange maintenance</li>
                    <li>Industrial assembly and dismantling</li>
                    <li>Heavy machinery servicing</li>
                  </ul>

                  <p className="text-black">
                    Our tools such as hydraulic cutter spreader and hydraulic
                    cutter and spreader are ideal for combined operations where
                    cutting and spreading are required simultaneously.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Hydraulic Spreader
                  </h3>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>High-force spreading capability</li>
                    <li>Precision-controlled hydraulic system</li>
                    <li>Durable aviation-grade construction</li>
                    <li>Compact and portable designs</li>
                    <li>Suitable for extreme working conditions</li>
                  </ul>

                  <p className="text-black">
                    Our hydraulic flange spreader and hydraulic flange splitter
                    tools are engineered for safety, efficiency, and long-term
                    durability.
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
                    Jetsys Defence is a trusted manufacturer of aviation equipment,
                    delivering high-performance hydraulic tools for critical
                    operations.
                  </p>

                  <p className="text-black mb-4">
                    We provide:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Advanced hydraulic spreader solutions</li>
                    <li>Reliable portable hydraulic spreader options</li>
                    <li>Competitive hydraulic flange spreader price range</li>
                    <li>Custom-built solutions for aviation and industrial needs</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Hydraulic Spreader Price & Availability
                  </h3>

                  <p className="text-black mb-4">
                    The hydraulic flange spreader price depends on specifications
                    such as capacity, size, and application type. Jetsys Defence
                    offers cost-effective solutions across all categories,
                    including:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Hydraulic flange splitter</li>
                    <li>Flange splitter tool</li>
                    <li>Hydraulic cutter spreader systems</li>
                    <li>Spreader wedge tools</li>
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
                    The Hydraulic Spreader by Jetsys Defence is an essential tool
                    for aviation professionals, maintenance teams, and industrial
                    operators. With options like hydraulic flange spreader,
                    portable hydraulic spreader, and hydraulic cutter and spreader,
                    our solutions ensure maximum efficiency, safety, and performance
                    in every operation.
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