import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "LED Taxiway Guidance Sign | Jetsys Defence Airport Signboards",
  description:
    "Explore LED taxiway guidance signs by Jetsys Defence including illuminated taxiway signs, airport taxiway signage systems, and airfield LED guidance solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/led-taxiway-guidance-sign",
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
                LED Taxiway Guidance Sign – Runway Signboards by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The LED Taxiway Guidance Sign by Jetsys Defence is an advanced aviation signboard designed to provide clear
                and illuminated directional guidance for aircraft during taxiing operations. Built with high-efficiency LED
                technology, these signs ensure superior visibility, energy efficiency, and reliable performance in all weather
                and lighting conditions. Our LED taxiway guidance signs are widely used in airports, defence airbases, and
                aerodrome infrastructure to enhance aircraft navigation and operational safety.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/LED Taxiway Guidance Sign.png"
                  width={500}
                  height={1000}
                  alt="LED Taxiway Guidance Sign by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an LED Taxiway Guidance Sign? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an LED Taxiway Guidance Sign?
                  </h2>
                  <p className="text-black mb-4">
                    An LED taxiway guidance sign is an illuminated airfield signboard that provides directional and operational
                    guidance to pilots on taxiways. These signs are designed to ensure clear visibility during night operations
                    and low-visibility conditions.
                  </p>
                  <p className="text-black mb-4">
                    They include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Taxiway guidance sign systems for aircraft navigation</li>
                        <li>Airport taxiway guidance signs for directional control</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airfield LED signage systems for enhanced visibility</li>
                        <li>Illuminated taxiway signs for safe aircraft movement</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our LED taxiway guidance signage systems ensure accurate and efficient aircraft routing.
                  </p>
                </div>
              </section>

              {/* Types of LED Taxiway Guidance Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of LED Taxiway Guidance Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of LED taxiway guidance signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Directional Guidance Signs</h4>
                          Provide routing information for aircraft movement across taxiways and runways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Location and Position Signs</h4>
                          Help pilots identify their current position on the airfield.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Mandatory and Information Signs</h4>
                          Integrated signage systems that provide operational instructions and guidance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom LED Taxiway Signboards</h4>
                          Tailored signage solutions designed for specific airport layouts and requirements.
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
                    Applications of LED Taxiway Guidance Signs
                  </h2>
                  <p className="text-black mb-4">
                    The LED taxiway guidance signs from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airports and international terminals</li>
                        <li>Military airbases and defence airfields</li>
                        <li>Aerodrome and regional airports</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft ground navigation systems</li>
                        <li>Night and low-visibility operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport taxiway guidance signage systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence LED Taxiway Guidance Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility LED taxiway guidance signboards</li>
                        <li>Energy-efficient LED technology</li>
                        <li>Long operational life with minimal maintenance</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and reliable performance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our illuminated taxiway signage systems deliver consistent and high-performance output.
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
                    Jetsys Defence is a trusted provider of aviation signage solutions, offering advanced LED taxiway guidance
                    sign systems for airport and defence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality airport taxiway guidance signs</li>
                        <li>Reliable LED airfield signage systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built runway and taxiway signboards</li>
                        <li>End-to-end aviation signage solutions</li>
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
                    LED Taxiway Guidance Sign Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of LED taxiway guidance signs depends on size, configuration, and customization requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom LED taxiway signage systems</li>
                    <li>Advanced illuminated airport signage solutions</li>
                    <li>Complete runway and taxiway guidance systems</li>
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
                    The LED Taxiway Guidance Sign by Jetsys Defence is essential for modern aviation infrastructure. With
                    advanced LED taxiway guidance signage, illuminated taxiway signs, and high-performance design, our
                    solutions ensure safe, efficient, and reliable aircraft ground operations.
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