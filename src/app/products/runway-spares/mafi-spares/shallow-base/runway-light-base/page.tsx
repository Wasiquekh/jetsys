import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Runway Light Base | Jetsys Defence Runway Spares",
  description:
    "Explore runway light base by Jetsys Defence for airfield lighting systems with durable construction, precise mounting, and reliable runway lighting performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/runway-light-base",
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
                Runway Light Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Runway Light Base by Jetsys Defence is a high-performance runway spares solution designed for secure
                installation and long-term durability of airfield lighting systems. Engineered with precision and
                aviation-grade materials, our bases ensure proper mounting, alignment, and protection of runway lighting
                fixtures in demanding airport environments. Our runway light base is ideal for modern airport infrastructure,
                ensuring reliability, safety, and efficient lighting system performance.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/airfield-lighting-base (2).png"
                  width={500}
                  height={1000}
                  alt="Runway Light Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Runway Light Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Runway Light Base?
                  </h3>
                  <p className="text-black mb-4">
                    A runway light base is a structural component used to support and house runway lighting fixtures,
                    electrical connections, and cable routing systems. It plays a critical role in maintaining the stability
                    and functionality of airfield lighting systems.
                  </p>
                  <p className="text-black">
                    This component is widely used for: Runway lighting base installation, Airfield light base housing,
                    Airport lighting base systems, Runway light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of Runway Light Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Runway Light Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a range of advanced runway spares solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Runway Light Base</h4>
                          A shallow runway light base designed for installations with limited depth, ensuring easy and
                          efficient setup.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can for Runway Lighting</h4>
                          A robust runway light base can designed for heavy-duty applications requiring deeper installation
                          and enhanced protection.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Frangible Runway Light Base</h4>
                          Specialized runway light base systems designed to meet aviation safety standards with breakaway
                          functionality.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Runway Light Base Systems</h4>
                          Tailor-made airport lighting base systems designed for specific runway and taxiway requirements.
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
                    Applications of Runway Light Base
                  </h3>
                  <p className="text-black mb-4">
                    The runway light base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway edge lighting systems</li>
                        <li>Taxiway and apron lighting installations</li>
                        <li>Approach lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport construction and infrastructure projects</li>
                        <li>Airfield maintenance and upgrade operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway lighting base systems ensure safe and efficient airport operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Runway Light Base
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Precision-machined design for accurate fixture alignment</li>
                        <li>Efficient cable routing and protection</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Weather-resistant and long-lasting performance</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield light base systems ensure reliable performance in all operational conditions.
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
                    Jetsys Defence is a trusted manufacturer of aviation and runway spares, delivering high-quality solutions
                    for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable runway light base systems</li>
                        <li>Reliable airfield lighting base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airport lighting foundation systems</li>
                        <li>Custom-built solutions for aviation applications</li>
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
                    Runway Light Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a runway light base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow runway light bases</li>
                    <li>Deep base can runway lighting systems</li>
                    <li>Custom airport lighting base systems</li>
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
                    The Runway Light Base by Jetsys Defence is an essential runway spares solution for ensuring stable,
                    safe, and efficient airfield lighting installations. With durable construction, precision design,
                    and reliable performance, our bases support critical runway and airport lighting systems with long
                    service life.
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