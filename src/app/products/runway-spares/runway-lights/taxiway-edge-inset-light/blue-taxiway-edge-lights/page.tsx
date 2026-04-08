import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Blue Taxiway Edge Lights | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore blue taxiway edge lights by Jetsys Defence including blue taxiway lights and airport taxiway lighting systems for safe and efficient aircraft ground operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/blue-taxiway-edge-lights",
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
                Blue Taxiway Edge Lights – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Blue Taxiway Edge Lights by Jetsys Defence are high-performance aviation lighting solutions designed to
                clearly define taxiway boundaries and ensure safe aircraft movement. Engineered for precision and visibility,
                these lights provide consistent illumination in low-visibility and night operations. Our blue taxiway edge
                lights are essential components of modern airport lighting systems, widely used across commercial airports
                and defence airbases.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Blue Taxiway Edge Lights.png"
                  width={500}
                  height={1000}
                  alt="Blue Taxiway Edge Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are Blue Taxiway Edge Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are Blue Taxiway Edge Lights?
                  </h2>
                  <p className="text-black mb-4">
                    Blue taxiway edge lights are specialized aviation lights used to mark the edges of taxiways. The blue
                    color is internationally standardized to guide pilots during ground movement and prevent deviation from
                    designated taxi paths.
                  </p>
                  <p className="text-black mb-4">
                    These include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Blue taxiway lights for clear boundary visibility</li>
                    <li>Taxiway edge lighting systems for aircraft navigation</li>
                    <li>Airport taxiway edge lights for safe operations</li>
                    <li>Integrated airfield taxiway lighting systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our blue taxiway edge lights systems ensure accurate guidance and operational safety.
                  </p>
                </div>
              </section>

              {/* Types of Blue Taxiway Edge Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Blue Taxiway Edge Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of blue taxiway lighting solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. LED Blue Taxiway Edge Lights</h4>
                          Energy-efficient lighting with long operational life and high brightness.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Halogen Blue Taxiway Edge Lights</h4>
                          Reliable traditional lighting systems with consistent illumination.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Elevated Blue Taxiway Lights</h4>
                          Installed above ground level for enhanced visibility in complex airfield layouts.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Inset Blue Taxiway Lights</h4>
                          Flush-mounted lighting solutions for seamless aircraft movement.
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
                    Applications of Blue Taxiway Edge Lights
                  </h2>
                  <p className="text-black mb-4">
                    The blue taxiway edge lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways</li>
                        <li>Military and defence airbases</li>
                        <li>Aircraft ground navigation systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Night and low-visibility operations</li>
                        <li>Airfield infrastructure projects</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our blue taxiway lights systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Blue Taxiway Edge Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility blue taxiway edge lights for precise guidance</li>
                        <li>Energy-efficient LED and halogen options</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Weather-resistant and long-lasting performance</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our blue taxiway lighting systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation lighting solutions, offering advanced blue taxiway
                    edge lights systems for airport and defence sectors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance blue taxiway lights systems</li>
                        <li>Reliable airport taxiway lighting solutions</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built aviation lighting products</li>
                        <li>End-to-end airfield lighting systems</li>
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
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Blue Taxiway Edge Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of blue taxiway edge lights depends on configuration, technology (LED or halogen), and system
                    requirements. Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom blue taxiway lights solutions</li>
                    <li>Complete taxiway edge lighting systems</li>
                    <li>Integrated airport lighting systems</li>
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
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h2>
                  <p className="text-black">
                    The Blue Taxiway Edge Lights by Jetsys Defence are essential aviation lighting solutions for safe and
                    efficient aircraft ground movement. With advanced blue taxiway lights, durable construction, and high
                    visibility, our systems support modern airport infrastructure and operational safety.
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