import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "LED Airfield Light Base | Jetsys Defence Runway Spares",
  description:
    "Explore LED airfield light base by Jetsys Defence for runway, taxiway, and airport LED lighting systems with durable design and reliable performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/led-airfield-light-base",
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
                LED Airfield Light Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The LED Airfield Light Base by Jetsys Defence is a precision-engineered runway spares solution designed to
                support modern LED airfield lighting systems. Built with high-strength materials and optimized for LED fixtures,
                our bases ensure secure installation, efficient heat dissipation, and long-term durability in demanding airport
                environments. Our LED airfield light base is ideal for runway, taxiway, apron, and helipad lighting systems
                where energy-efficient LED technology is used.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/led-airfield-light-base.png"
                  width={500}
                  height={1000}
                  alt="LED Airfield Light Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an LED Airfield Light Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an LED Airfield Light Base?
                  </h3>
                  <p className="text-black mb-4">
                    An LED airfield light base is a structural mounting system specifically designed to support LED airfield
                    lighting fixtures. It provides stable housing for lighting units, electrical connections, and cable routing
                    while ensuring optimal performance of LED systems.
                  </p>
                  <p className="text-black">
                    This system is widely used for: LED runway light base installation, LED airfield lighting base systems,
                    Airport LED lighting foundation systems, LED airfield light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of LED Airfield Light Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of LED Airfield Light Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced runway spares solutions for LED lighting:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow LED Airfield Light Base</h4>
                          A shallow LED airfield light base designed for installations with limited pavement depth, ensuring
                          easy integration with modern LED systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can for LED Airfield Lighting</h4>
                          A robust LED airfield light base can used for heavy-duty LED lighting installations requiring deeper
                          structural support.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Inset LED Airfield Light Base</h4>
                          Specialized LED airfield light base systems designed for inset LED lighting applications in runways
                          and taxiways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom LED Airfield Light Base Systems</h4>
                          Tailor-made LED airport lighting base systems designed to meet specific infrastructure and performance
                          requirements.
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of LED Airfield Light Base
                  </h3>
                  <p className="text-black mb-4">
                    The LED airfield light base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>LED runway edge and centreline lighting systems</li>
                        <li>LED taxiway and apron lighting installations</li>
                        <li>LED helipad lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport modernization and LED upgrade projects</li>
                        <li>Airfield maintenance and infrastructure development</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our LED airfield lighting base systems ensure efficient and reliable airport operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence LED Airfield Light Base
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Optimized design for LED fixture compatibility</li>
                        <li>Efficient heat dissipation for extended LED life</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Precision-engineered mounting and alignment</li>
                        <li>Weather-resistant and long-lasting performance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our LED runway light base systems ensure consistent and reliable performance.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation and runway spares, delivering advanced solutions
                    for modern airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable LED airfield light base systems</li>
                        <li>Reliable LED runway lighting base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airport LED lighting foundation systems</li>
                        <li>Custom-built solutions for aviation and defence</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    LED Airfield Light Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of an LED airfield light base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow LED airfield light bases</li>
                    <li>Deep base can LED lighting systems</li>
                    <li>Custom LED airport lighting base systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    To receive a quote or locate the nearest service branch, contact Jetsys Defence today.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h3>
                  <p className="text-black">
                    The LED Airfield Light Base by Jetsys Defence is an essential runway spares solution for supporting modern
                    LED lighting systems in aviation infrastructure. With durable construction, optimized design for LED
                    compatibility, and reliable performance, our bases ensure efficient and long-lasting airfield lighting
                    installations.
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