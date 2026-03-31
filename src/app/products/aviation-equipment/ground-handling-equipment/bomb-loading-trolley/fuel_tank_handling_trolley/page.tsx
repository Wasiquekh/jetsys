import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Fuel Tank Handling Trolley Aviation Equipment | Jetsys Defence",
  description:
    "Explore fuel tank handling trolley by Jetsys Defence including hydraulic lifting systems and aircraft fuel tank transport equipment for safe aviation operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/bomb-loading-trolley/fuel_tank_handling_trolley",
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
                Fuel Tank Handling Trolley – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Fuel Tank Handling Trolley by Jetsys Defence is a high-performance aviation ground support solution designed for safe, efficient, and precise handling of aircraft fuel tanks. Built with advanced engineering and durable construction, this trolley ensures smooth transportation, positioning, and installation of fuel tanks in aviation and defence environments.
              </p>
              <p className="font-medium text-base">
                Our fuel tank handling trolley is engineered to deliver maximum safety, control, and operational efficiency in critical applications.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/fuel_tank.png"
                  width={500}
                  height={1000}
                  alt="Fuel Tank Handling Trolley Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Fuel Tank Handling Trolley? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Fuel Tank Handling Trolley?
                  </h2>
                  <p className="text-black mb-4">
                    A fuel tank handling trolley is specialized equipment used for lifting, transporting, and positioning aircraft fuel tanks during maintenance, servicing, and installation processes. It plays a crucial role in aviation ground support operations where safety and precision are essential.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft fuel tank trolley</li>
                    <li>Fuel tank transport trolley</li>
                    <li>Aircraft fuel tank handling equipment</li>
                    <li>Fuel tank lifting trolley</li>
                  </ul>
                </div>
              </section>

              {/* Types of Fuel Tank Handling Trolleys */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Fuel Tank Handling Trolleys
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers multiple configurations to suit operational needs:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Hydraulic Fuel Tank Handling Trolley</h3>
                          A hydraulic fuel tank handling trolley provides controlled lifting and precise positioning of fuel tanks.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Aircraft Fuel Tank Trolley</h3>
                          Designed specifically for aircraft integration, ensuring safe alignment during installation and removal.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Heavy Duty Fuel Tank Trolley</h3>
                          Built for handling large and heavy fuel tanks in demanding aviation environments.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Aviation Ground Support Trolley</h3>
                          Multi-functional aviation ground support equipment used for fuel tank handling and aircraft servicing.
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
                    Applications of Fuel Tank Handling Trolley
                  </h2>
                  <p className="text-black mb-4">
                    The fuel tank handling trolley from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance and servicing</li>
                    <li>Fuel tank installation and removal</li>
                    <li>Aviation ground support operations</li>
                    <li>Military airbases and defence operations</li>
                    <li>Handling and transport of aircraft fuel systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our aircraft fuel tank handling equipment ensures safe and efficient operations in high-risk environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Fuel Tank Handling Trolley
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High load capacity for heavy fuel tanks</li>
                        <li>Precision hydraulic lifting system</li>
                        <li>Durable and rugged construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Easy maneuverability and control</li>
                        <li>Designed to meet aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our hydraulic fuel tank handling trolley ensures smooth and controlled handling during critical operations.
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
                    Jetsys Defence is a trusted manufacturer of aviation and defence equipment, offering reliable solutions for mission-critical operations.
                  </p>
                  <p className="text-black mb-4">
                    We provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Advanced fuel tank handling trolley systems</li>
                    <li>High-quality aircraft fuel tank trolley solutions</li>
                    <li>Durable and field-tested equipment</li>
                    <li>Custom-built designs for aviation and defence needs</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Fuel Tank Handling Trolley Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a fuel tank handling trolley depends on specifications such as load capacity, hydraulic features, and customization. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic fuel tank handling trolley</li>
                    <li>Heavy duty fuel tank trolley</li>
                    <li>Aircraft fuel tank transport trolley systems</li>
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
                    The Fuel Tank Handling Trolley by Jetsys Defence is an essential solution for aviation maintenance and ground support operations. With advanced features like hydraulic lifting systems, heavy-duty construction, and precise handling capabilities, our equipment ensures safe, efficient, and reliable fuel tank operations.
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