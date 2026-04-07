import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Helipad Lighting Base | Jetsys Defence Runway Spares",
  description:
    "Explore helipad lighting base by Jetsys Defence for helicopter landing systems with durable construction, secure mounting, and reliable lighting performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/helipad-lighting-base",
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
                Helipad Lighting Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Helipad Lighting Base by Jetsys Defence is a precision-engineered runway spares solution designed for
                secure installation and long-term durability of helipad lighting systems. Built with aviation-grade materials
                and robust construction, our bases ensure accurate fixture alignment, efficient cable management, and
                reliable performance in critical helicopter landing environments. Our helipad lighting base supports safe
                and efficient helicopter operations across commercial, defence, and offshore helipad facilities.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/helipad-lighting-base.png"
                  width={500}
                  height={1000}
                  alt="Helipad Lighting Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Helipad Lighting Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Helipad Lighting Base?
                  </h3>
                  <p className="text-black mb-4">
                    A helipad lighting base is a structural mounting unit used to install and support helipad lighting fixtures
                    such as perimeter lights, floodlights, and guidance lighting systems. It provides housing for electrical
                    connections and ensures stable positioning of lighting equipment.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Helipad lighting base installation, Helipad light base systems,
                    Helipad lighting foundation systems, Helipad light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of Helipad Lighting Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Helipad Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced runway spares solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Helipad Lighting Base</h4>
                          A shallow helipad lighting base designed for installations with limited depth, ensuring easy
                          integration with helipad surfaces.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can for Helipad Lighting</h4>
                          A durable helipad lighting base can used for heavy-duty installations requiring enhanced strength
                          and deeper mounting.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Inset Helipad Lighting Base</h4>
                          Specialized helipad lighting base systems designed for flush-mounted lighting applications on
                          helipad surfaces.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Helipad Lighting Base Systems</h4>
                          Tailor-made helipad lighting base systems designed to meet specific infrastructure and operational
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
                    Applications of Helipad Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    The helipad lighting base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Helipad perimeter lighting systems</li>
                        <li>Helicopter landing and take-off guidance systems</li>
                        <li>Offshore helipad lighting installations</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Defence and emergency landing zones</li>
                        <li>Hospital and rooftop helipad lighting systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our helipad light base systems ensure safe and efficient helicopter operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Helipad Lighting Base
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
                    Our helipad lighting base systems deliver reliable performance in all operational conditions.
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
                    for airport and helipad infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable helipad lighting base systems</li>
                        <li>Reliable helipad light base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced helipad lighting foundation systems</li>
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
                    Helipad Lighting Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a helipad lighting base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow helipad lighting bases</li>
                    <li>Deep base can helipad lighting systems</li>
                    <li>Custom helipad lighting base systems</li>
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
                    The Helipad Lighting Base by Jetsys Defence is an essential runway spares solution for ensuring stable,
                    safe, and efficient helipad lighting installations. With durable construction, precision design, and
                    reliable performance, our bases support critical helicopter landing systems with long service life.
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