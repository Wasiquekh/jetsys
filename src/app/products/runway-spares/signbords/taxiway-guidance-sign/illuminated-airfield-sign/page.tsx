import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Illuminated Airfield Sign | Jetsys Defence Airport Signboards",
  description:
    "Explore illuminated airfield signs by Jetsys Defence including LED airfield signage, illuminated airport signs, and taxiway guidance signs for safe aircraft navigation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/illuminated-airfield-sign",
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
                Illuminated Airfield Sign – Runway Signboards by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Illuminated Airfield Sign by Jetsys Defence is a high-performance aviation signboard designed to provide
                clear, visible guidance for pilots during day, night, and low-visibility operations. Built with advanced
                illumination technology, these signs ensure accurate navigation across taxiways, runways, and apron areas.
                Our illuminated airfield signs are widely used in airports, defence airbases, and aerodrome infrastructure
                to enhance safety and operational efficiency.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/illuminated-airfield-sign.png"
                  width={500}
                  height={1000}
                  alt="Illuminated Airfield Sign by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Illuminated Airfield Sign? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Illuminated Airfield Sign?
                  </h2>
                  <p className="text-black mb-4">
                    An illuminated airfield sign is a lighting-integrated signboard that provides essential guidance, direction,
                    and information to pilots during aircraft ground movement. These signs are designed to maintain high
                    visibility in all operational conditions.
                  </p>
                  <p className="text-black mb-4">
                    They include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Illuminated airport signs for navigation</li>
                        <li>LED airfield signage systems for enhanced visibility</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airfield guidance signs illuminated for operational safety</li>
                        <li>Airport taxiway illuminated signs for directional control</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our illuminated airfield signage systems ensure clear communication and accurate navigation.
                  </p>
                </div>
              </section>

              {/* Types of Illuminated Airfield Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Illuminated Airfield Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of illuminated signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Illuminated Taxiway Guidance Signs</h4>
                          Provide directional information for aircraft movement across taxiways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Illuminated Runway Signs</h4>
                          Includes runway entry, holding position, and safety instruction signs.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Illuminated Location and Direction Signs</h4>
                          Help pilots identify their current position and route across the airfield.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. LED Illuminated Airfield Signs</h4>
                          Energy-efficient LED airfield signage designed for long life and low maintenance.
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
                    Applications of Illuminated Airfield Signs
                  </h2>
                  <p className="text-black mb-4">
                    The illuminated airfield signs from Jetsys Defence are widely used in:
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
                    Our airport illuminated signage systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Illuminated Airfield Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility illuminated airfield signboards</li>
                        <li>Advanced LED airfield signage systems</li>
                        <li>Energy-efficient lighting technology</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and long-lasting performance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our illuminated airport signage systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation signage solutions, offering advanced illuminated airfield
                    sign systems for airport and defence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality illuminated airport signs</li>
                        <li>Reliable LED airfield signage solutions</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built runway and taxiway signboards</li>
                        <li>End-to-end aviation signage systems</li>
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
                    Illuminated Airfield Sign Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of illuminated airfield signs depends on size, configuration, and lighting technology.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom LED airfield signage systems</li>
                    <li>Advanced illuminated airport signage solutions</li>
                    <li>Complete runway and taxiway signage systems</li>
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
                    The Illuminated Airfield Sign by Jetsys Defence is essential for modern aviation infrastructure. With
                    advanced LED airfield signage, illuminated airport signs, and high-visibility design, our solutions
                    ensure safe, efficient, and reliable aircraft ground operations.
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