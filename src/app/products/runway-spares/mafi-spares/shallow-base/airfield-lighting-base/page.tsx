import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Airfield Lighting Base | Jetsys Defence Runway Spares",
  description:
    "Explore airfield lighting base by Jetsys Defence for runway, taxiway, and airport lighting systems with durable design, secure mounting, and long-lasting performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/airfield-lighting-base",
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
                Airfield Lighting Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Airfield Lighting Base by Jetsys Defence is a high-quality runway spares solution designed for the secure
                installation and long-term performance of airfield lighting systems. Engineered with precision and durability,
                our bases support runway, taxiway, and apron lighting fixtures under demanding aviation conditions. Our
                airfield lighting base ensures proper alignment, cable management, and structural stability, making it
                essential for modern airport infrastructure.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/airfield-lighting-base.png"
                  width={500}
                  height={1000}
                  alt="Airfield Lighting Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Airfield Lighting Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Airfield Lighting Base?
                  </h3>
                  <p className="text-black mb-4">
                    An airfield lighting base is a structural component used to mount and support airfield lighting fixtures
                    such as runway lights, taxiway lights, and approach lighting systems. It also provides housing for
                    electrical connections and cable routing.
                  </p>
                  <p className="text-black">
                    This component is widely used for: Runway lighting base installation, Airfield lighting base can systems,
                    Airport lighting foundation systems, Airfield light base housing and cable protection.
                  </p>
                </div>
              </section>

              {/* Types of Airfield Lighting Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Airfield Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a range of high-performance runway spares:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Base for Airfield Lighting</h4>
                          A shallow airfield lighting base designed for installations where depth is limited, ensuring easy
                          integration with existing infrastructure.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can</h4>
                          A robust airfield lighting base can used for heavy-duty runway lighting applications requiring deeper
                          installation.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Frangible Mount Base</h4>
                          Specialized bases designed to meet aviation safety standards with breakaway functionality.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Airfield Lighting Base Systems</h4>
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
                    Applications of Airfield Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    The airfield lighting base from Jetsys Defence is widely used in:
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
                        <li>Airport infrastructure development projects</li>
                        <li>Airfield maintenance and upgrade operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway lighting base systems ensure reliable and safe operation in critical aviation environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Airfield Lighting Base
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Precision-machined design for secure fixture mounting</li>
                        <li>Efficient cable management and routing</li>
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
                    Our airfield lighting base can systems ensure consistent and reliable performance in all weather conditions.
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
                        <li>Durable airfield lighting base systems</li>
                        <li>Reliable runway lighting base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airport lighting foundation systems</li>
                        <li>Custom-built solutions for global aviation requirements</li>
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
                    Airfield Lighting Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of an airfield lighting base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow airfield lighting bases</li>
                    <li>Deep base cans for runway lighting</li>
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
                    The Airfield Lighting Base by Jetsys Defence is an essential runway spares solution for ensuring safe,
                    stable, and efficient airfield lighting installations. With advanced design features, durable construction,
                    and reliable performance, our bases support modern airport lighting systems with precision and long
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