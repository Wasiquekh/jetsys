import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Metal Cutting Tool Aviation Equipment | Jetsys Defence",
  description:
    "Explore high-performance metal cutting tools by Jetsys Defence including steel cutting machines, sheet metal cutters, and laser cutting solutions for aviation and industrial use.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/spreader-cutter-with-petrol-engine/metal_cutting_tool",
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
                Metal Cutting Tool – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Metal Cutting Tool by Jetsys Defence is a high-performance
                solution designed for precision cutting in aviation, industrial,
                and heavy-duty applications. Built with advanced engineering and
                durable materials, our tools ensure efficient and accurate cutting
                of steel, aluminum, and other metals.
              </p>
              <p className="font-medium text-base">
                From manual tools to advanced machines like steel cutting machine
                and laser steel cutting machine, Jetsys Defence delivers reliable
                solutions for every cutting requirement.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/metal_cutting_tool.png"
                  width={500}
                  height={1000}
                  alt="Metal Cutting Tool Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Metal Cutting Tool?
                  </h3>

                  <p className="text-black mb-4">
                    A metal cutting tool is used to cut, shape, or trim metal
                    components with high precision. These tools are essential in
                    aviation maintenance, manufacturing, and fabrication industries.
                  </p>

                  <p className="text-black mb-4">
                    Common tools include:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Metal cutters for manual cutting tasks</li>
                    <li>Metal cutting blade and steel cutting blade for precision cuts</li>
                    <li>Sheet metal cutter for thin metal sheets</li>
                    <li>Metal saw / metal cutting saw for heavy-duty cutting</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Metal Cutting Tools & Machines
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of cutting solutions:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            1. Steel & Iron Cutting Machines
                          </h4>
                          High-performance steel cutting machine and iron cutting
                          machine designed for heavy-duty applications. These
                          machines ensure fast and precise cutting of structural
                          metals.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            2. Aluminium Cutting Machines
                          </h4>
                          Specialized aluminium cutting machine and CNC aluminum
                          cutting solutions for lightweight yet precise operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            3. Sheet Cutting & Shearing Machines
                          </h4>
                          Includes sheet cutting machine, sheet shearing machine,
                          and sheet cutters for industrial fabrication and aviation
                          components.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            4. Saw-Based Cutting Tools
                          </h4>
                          Advanced tools like metal chop saw, metal cutting circular
                          saw, metal cutting band saw / metal band saw, and cutting
                          saws for precision and heavy-duty cutting.
                        </li>
                      </ul>
                    </div>

                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            5. Blade-Based Cutting Tools
                          </h4>
                          High-quality blades such as cutting blade for metal, iron
                          cutting blade, steel blade cutter, and tile cutter blades
                          for multi-purpose use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            6. Specialized Cutting Tools
                          </h4>
                          Includes nibbler tool for precise sheet cutting, straight
                          tin snips for manual sheet trimming, steel pipe cutter for
                          pipes and tubes, and sheet metal cutting tools for
                          detailed work.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">
                            7. Advanced Laser Cutting Machines
                          </h4>
                          Modern solutions like laser steel cutting machine and
                          Bodor laser cutting machine for high-precision automated
                          cutting.
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
                    Applications of Metal Cutting Tools in Aviation & Industry
                  </h3>

                  <p className="text-black mb-4">
                    The metal cutting tool from Jetsys Defence is widely used in:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>Aircraft component manufacturing</li>
                    <li>Aviation maintenance and repair</li>
                    <li>Industrial fabrication and machining</li>
                    <li>Construction and heavy engineering</li>
                    <li>Cutting pipes, sheets, and structural metals</li>
                  </ul>

                  <p className="text-black">
                    Our tools such as metal cutting band saw, sheet metal cutter,
                    and steel pipe cutter are ideal for precision and heavy-duty
                    environments.
                  </p>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Metal Cutting Tools
                  </h3>

                  <ul className="list-disc pl-5 text-black space-y-2 mb-4">
                    <li>High precision and cutting accuracy</li>
                    <li>Durable and long-lasting cutting blades</li>
                    <li>Suitable for multiple metals including steel and aluminum</li>
                    <li>Advanced automation options available</li>
                    <li>Designed for aviation-grade performance</li>
                  </ul>

                  <p className="text-black">
                    Our metal cutting circular saw, metal chop saw, and sheet metal
                    cutting tools ensure efficient and reliable operation.
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
                    manufacturing, offering high-quality metal cutting solutions.
                  </p>

                  <p className="text-black mb-4">
                    We provide:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Advanced metal cutting tools and machines</li>
                    <li>Reliable steel cutting machine solutions</li>
                    <li>High-performance cutting blade for metal options</li>
                    <li>Cost-effective and durable equipment</li>
                  </ul>
                </div>
              </section>

              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Metal Cutting Tool Price & Availability
                  </h3>

                  <p className="text-black mb-4">
                    The cost of a metal cutting tool depends on its type, capacity,
                    and technology. Jetsys Defence offers a wide range of solutions
                    including:
                  </p>

                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Laser steel cutting machine</li>
                    <li>Sheet cutting machine</li>
                    <li>Metal cutting band saw</li>
                    <li>Aluminium cutting machine</li>
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
                    The Metal Cutting Tool by Jetsys Defence is an essential
                    solution for aviation professionals and industrial users. With
                    advanced options like metal cutting saw, laser steel cutting
                    machine, and sheet metal cutter, our tools deliver precision,
                    durability, and efficiency for every cutting task.
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