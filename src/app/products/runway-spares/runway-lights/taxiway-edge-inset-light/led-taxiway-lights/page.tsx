import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "LED Taxiway Lights | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore LED taxiway lights by Jetsys Defence including taxiway edge lights, taxiway lighting systems, and airport taxiway lights for safe aircraft ground operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/led-taxiway-lights",
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
                LED Taxiway Lights – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The LED Taxiway Lights by Jetsys Defence are advanced aviation lighting solutions designed to provide clear
                guidance for aircraft movement on taxiways. Engineered for high visibility, durability, and energy efficiency,
                our systems ensure safe operations in all weather and lighting conditions. Our LED taxiway lights are widely
                used in airports, airbases, and airfield infrastructure for reliable and precise aircraft navigation.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/LED Taxiway Lights – Aviation Equipment by Jetsys Defence.png"
                  width={500}
                  height={1000}
                  alt="LED Taxiway Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are LED Taxiway Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are LED Taxiway Lights?
                  </h2>
                  <p className="text-black mb-4">
                    LED taxiway lights are energy-efficient lighting systems installed along taxiways to guide aircraft safely
                    during ground movement. These lights are a critical part of taxiway edge lighting and overall airfield
                    lighting systems.
                  </p>
                  <p className="text-black mb-4">
                    They include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Taxiway light systems for aircraft navigation</li>
                    <li>Taxiway edge lights for boundary marking</li>
                    <li>Edge lights runway systems for integrated lighting</li>
                    <li>Taxiway edge lighting solutions for safe aircraft movement</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our systems provide advanced and efficient airport taxiway lighting solutions.
                  </p>
                </div>
              </section>

              {/* Types of LED Taxiway Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of LED Taxiway Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of LED taxiway lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. LED Taxiway Edge Lights</h3>
                    <p className="text-black">
                      Used for defining taxiway boundaries with high visibility and precision.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. LED Taxiway Centreline Lights</h3>
                    <p className="text-black">
                      Installed along taxiway centerlines to guide aircraft direction.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. Integrated Taxiway Lighting Systems</h3>
                    <p className="text-black">
                      Includes taxiway edge lighting, runway edge lights, and combined airfield lighting systems.
                    </p>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of LED Taxiway Lights
                  </h2>
                  <p className="text-black mb-4">
                    The LED taxiway lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways</li>
                        <li>Military airbases</li>
                        <li>Aircraft ground movement systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Low-visibility and night operations</li>
                        <li>Airfield infrastructure development</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway lights systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence LED Taxiway Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility taxiway edge lights for clear guidance</li>
                        <li>Energy-efficient LED technology for reduced power consumption</li>
                        <li>Long operational life with minimal maintenance</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and reliable performance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway edge lighting systems deliver consistent and high-performance output.
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
                    Jetsys Defence is a trusted provider of aviation lighting solutions, delivering advanced LED taxiway
                    lighting systems for airports and defence sectors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance LED taxiway lights systems</li>
                        <li>Reliable airport taxiway lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced taxiway edge lighting products</li>
                        <li>Custom-built aviation lighting systems</li>
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
                    LED Taxiway Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of LED taxiway lights depends on configuration, system requirements, and lighting specifications.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom taxiway lights for sale solutions</li>
                    <li>Complete taxiway edge lighting systems</li>
                    <li>Integrated airport taxiway lighting systems</li>
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
                    The LED Taxiway Lights by Jetsys Defence are essential aviation lighting solutions for safe and efficient
                    aircraft ground movement. With advanced taxiway edge lights, energy-efficient LED systems, and durable
                    construction, our solutions support modern airport infrastructure.
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