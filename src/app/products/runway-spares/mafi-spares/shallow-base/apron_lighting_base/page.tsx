import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Apron Lighting Base | Jetsys Defence Runway Spares",
  description:
    "Explore apron lighting base by Jetsys Defence for airport apron lighting systems with durable construction, secure mounting, and reliable performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/apron_lighting_base",
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
                Apron Lighting Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Apron Lighting Base by Jetsys Defence is a high-performance runway spares solution designed for secure
                installation and long-term durability of apron lighting systems. Engineered with precision and aviation-grade
                materials, our bases ensure reliable mounting, accurate alignment, and efficient cable management for lighting
                fixtures in apron and parking areas. Our apron lighting base supports safe and efficient aircraft ground
                operations in busy airport environments.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/apron_lighting_base.png"
                  width={500}
                  height={1000}
                  alt="Apron Lighting Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Apron Lighting Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Apron Lighting Base?
                  </h3>
                  <p className="text-black mb-4">
                    An apron lighting base is a structural mounting system used to support lighting fixtures installed in
                    aircraft parking, loading, and service areas. It provides housing for electrical connections and ensures
                    proper positioning of lighting equipment.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Apron lighting base installation, Airport apron light base systems,
                    Airfield apron lighting foundation systems, Apron light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of Apron Lighting Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Apron Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced runway spares solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Apron Lighting Base</h4>
                          A shallow apron lighting base designed for installations with limited pavement depth, ensuring
                          quick and easy integration.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can for Apron Lighting</h4>
                          A durable apron lighting base can used for heavy-duty apron lighting installations requiring
                          deeper structural support.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Inset Apron Lighting Base</h4>
                          Specialized apron lighting base systems designed for inset lighting applications in apron areas.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Apron Lighting Base Systems</h4>
                          Tailor-made airport apron lighting base systems designed to meet specific infrastructure and
                          operational requirements.
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
                    Applications of Apron Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    The apron lighting base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft parking and stand lighting systems</li>
                        <li>Cargo handling and ground service areas</li>
                        <li>Apron floodlighting and guidance systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport infrastructure development projects</li>
                        <li>Maintenance and upgrade of apron lighting systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield apron lighting base systems ensure safe and efficient ground operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Apron Lighting Base
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Precision-engineered design for accurate fixture alignment</li>
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
                    Our apron light base systems deliver reliable performance in all operational conditions.
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
                        <li>Durable apron lighting base systems</li>
                        <li>Reliable airfield apron light base solutions</li>
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
                    Apron Lighting Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of an apron lighting base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow apron lighting bases</li>
                    <li>Deep base can apron lighting systems</li>
                    <li>Custom airport apron lighting base systems</li>
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
                    The Apron Lighting Base by Jetsys Defence is an essential runway spares solution for ensuring stable,
                    safe, and efficient apron lighting installations. With durable construction, precision design, and
                    reliable performance, our bases support modern airport lighting systems with long service life.
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