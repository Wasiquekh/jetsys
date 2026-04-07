import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Runway Lighting Base System | Jetsys Defence Runway Spares",
  description:
    "Explore runway lighting base system by Jetsys Defence for airport lighting with durable construction, precise mounting, and reliable runway lighting performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/runway-lighting-base-system",
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
                Runway Lighting Base System – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Runway Lighting Base System by Jetsys Defence is a high-performance runway spares solution designed to
                support and secure airfield lighting installations. Engineered with precision and aviation-grade materials,
                our systems ensure reliable mounting, efficient cable management, and long-term durability in demanding
                airport environments. Our runway lighting base system is ideal for modern airport infrastructure, providing
                stability and safety for runway, taxiway, and apron lighting applications.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/runway-lighting-base-system.png"
                  width={500}
                  height={1000}
                  alt="Runway Lighting Base System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Runway Lighting Base System? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Runway Lighting Base System?
                  </h3>
                  <p className="text-black mb-4">
                    A runway lighting base system is a structural and functional assembly used to install and support
                    airfield lighting fixtures, including inset and elevated lights. It provides housing for electrical
                    connections, cable routing, and ensures proper fixture alignment.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Runway lighting base system installation, Airfield lighting base systems,
                    Airport lighting foundation systems, Runway light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of Runway Lighting Base Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Runway Lighting Base Systems
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a wide range of advanced runway spares:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Runway Lighting Base System</h4>
                          A shallow runway lighting base system designed for installations with limited pavement depth,
                          ensuring easy and efficient integration.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can System</h4>
                          A robust runway lighting base can system used for heavy-duty runway lighting installations
                          requiring deeper structural support.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Inset Lighting Base System</h4>
                          Specialized runway lighting base systems designed for inset light installations in runways and
                          taxiways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Runway Lighting Base Systems</h4>
                          Tailor-made airport lighting base systems designed to meet specific runway and airfield
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
                    Applications of Runway Lighting Base System
                  </h3>
                  <p className="text-black mb-4">
                    The runway lighting base system from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway edge and centreline lighting systems</li>
                        <li>Taxiway and apron lighting installations</li>
                        <li>Approach lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport infrastructure development projects</li>
                        <li>Airfield maintenance and modernization</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield lighting base systems ensure safe and efficient airport operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Runway Lighting Base System
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Precision-engineered design for accurate fixture alignment</li>
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
                    Our runway lighting base systems deliver consistent and reliable performance in all operational environments.
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
                    for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable runway lighting base systems</li>
                        <li>Reliable airfield lighting base system solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airport lighting foundation systems</li>
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
                    Runway Lighting Base System Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a runway lighting base system depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow runway lighting base systems</li>
                    <li>Deep base can runway systems</li>
                    <li>Inset lighting base systems</li>
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
                    The Runway Lighting Base System by Jetsys Defence is an essential runway spares solution for ensuring
                    stable, safe, and efficient airfield lighting installations. With durable construction, precision design,
                    and reliable performance, our systems support modern airport lighting infrastructure with long service life.
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