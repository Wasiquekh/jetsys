import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Inset Light Base | Jetsys Defence Runway Spares",
  description:
    "Explore inset light base by Jetsys Defence for runway, taxiway, and airport lighting systems with durable design, secure mounting, and reliable performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/inset-light-base",
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
                Inset Light Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Inset Light Base by Jetsys Defence is a high-quality runway spares solution designed for secure
                installation and long-term performance of inset airfield lighting systems. Built with precision engineering
                and durable materials, our bases ensure proper fixture alignment, cable protection, and reliable operation
                in demanding airport environments. Our inset light base is ideal for runway, taxiway, and apron lighting
                applications where flush-mounted lighting systems are required.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Inset Light Base.png"
                  width={500}
                  height={1000}
                  alt="Inset Light Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Inset Light Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Inset Light Base?
                  </h3>
                  <p className="text-black mb-4">
                    An inset light base is a structural mounting unit used to install inset lights within the pavement of
                    runways, taxiways, and aprons. It provides housing for electrical connections and ensures stable
                    positioning of lighting fixtures.
                  </p>
                  <p className="text-black">
                    This component is widely used for: Inset runway light base installation, Airfield inset light base systems,
                    Airport inset lighting base housing, Flush mounted runway light base systems.
                  </p>
                </div>
              </section>

              {/* Types of Inset Light Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Inset Light Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced runway spares for inset lighting systems:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Inset Light Base</h4>
                          A shallow inset light base designed for installations with limited depth, ensuring easy
                          integration with existing pavement structures.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Inset Light Base Can</h4>
                          A robust inset light base can used for heavy-duty airfield lighting applications requiring deeper
                          installation.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Frangible Inset Light Base</h4>
                          Specialized inset light base systems designed to meet aviation safety standards with breakaway
                          functionality.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Inset Light Base Systems</h4>
                          Tailor-made airfield inset lighting base systems designed for specific runway and airport
                          infrastructure requirements.
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
                    Applications of Inset Light Base
                  </h3>
                  <p className="text-black mb-4">
                    The inset light base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway centreline lighting systems</li>
                        <li>Taxiway centreline and edge lighting</li>
                        <li>Apron and threshold lighting systems</li>
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
                    Our airfield inset light base systems ensure safe and efficient airport operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Inset Light Base
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
                    Our inset runway light base systems ensure reliable and consistent performance.
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
                        <li>Durable inset light base systems</li>
                        <li>Reliable airfield inset lighting base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced runway inset light base systems</li>
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
                    Inset Light Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of an inset light base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow inset light bases</li>
                    <li>Deep inset light base can systems</li>
                    <li>Custom airport inset lighting base systems</li>
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
                    The Inset Light Base by Jetsys Defence is an essential runway spares solution for ensuring safe,
                    stable, and efficient inset lighting installations. With durable construction, precision engineering,
                    and reliable performance, our bases support critical airfield lighting systems with long service life.
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