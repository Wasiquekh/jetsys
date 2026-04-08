import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Runway Distance Remaining Sign | Jetsys Defence Signboards",
  description:
    "Explore runway distance remaining signs by Jetsys Defence integrated with runway distance remaining lights for accurate runway distance indication and safe aircraft operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/runway-distance-remaining-sign",
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
                Runway Distance Remaining Sign – Runway Signboards by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Runway Distance Remaining Sign by Jetsys Defence is a critical aviation signboard designed to provide
                pilots with real-time information about the remaining runway length during landing or takeoff. These signs
                enhance situational awareness, enabling safer aircraft operations on runways. Our runway distance remaining
                signs are widely used in airports, defence airbases, and aerodrome environments to ensure accurate distance
                indication and operational safety.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/runway-distance-remaining-sign.png"
                  width={500}
                  height={1000}
                  alt="Runway Distance Remaining Sign by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Runway Distance Remaining Sign? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Runway Distance Remaining Sign?
                  </h2>
                  <p className="text-black mb-4">
                    A runway distance remaining sign is an airfield signboard placed alongside runways to indicate the
                    remaining distance available for aircraft operations. These signs are essential for pilot decision-making
                    during landing rollout and aborted takeoff scenarios.
                  </p>
                  <p className="text-black mb-4">
                    They work alongside:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway distance remaining lights for enhanced visibility</li>
                        <li>Airfield lighting systems for integrated runway guidance</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport signage systems for operational safety</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway distance remaining signage systems ensure accurate and reliable information delivery.
                  </p>
                </div>
              </section>

              {/* Types of Runway Distance Remaining Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Runway Distance Remaining Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of runway distance signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Standard Runway Distance Remaining Signs</h4>
                          Provide clear distance indications at regular intervals along the runway.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Illuminated Runway Distance Remaining Signs</h4>
                          Includes LED runway distance remaining signs for visibility during night and low-visibility conditions.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Integrated Signage and Lighting Systems</h4>
                          Combined with runway distance remaining lights and runway lighting systems for complete operational support.
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
                    Applications of Runway Distance Remaining Signs
                  </h2>
                  <p className="text-black mb-4">
                    The runway distance remaining signs from Jetsys Defence are widely used in:
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
                        <li>Aircraft landing and takeoff operations</li>
                        <li>Runway safety and navigation systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport runway signage systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Runway Distance Remaining Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility runway distance remaining signboards</li>
                        <li>Accurate distance marking for pilot awareness</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Weather-resistant and long-lasting performance</li>
                        <li>LED and non-LED signage options</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway distance signage systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation signage solutions, offering advanced runway distance
                    remaining sign systems for airport and defence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality runway distance remaining signs</li>
                        <li>Reliable airport runway signage systems</li>
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
                    Runway Distance Remaining Sign Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of runway distance remaining signs depends on size, configuration, and lighting requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom runway distance signage systems</li>
                    <li>LED-based airport signage solutions</li>
                    <li>Integrated runway distance remaining lights and signs systems</li>
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
                    The Runway Distance Remaining Sign by Jetsys Defence is essential for enhancing runway safety and pilot
                    awareness. Integrated with runway distance remaining lights and advanced signage systems, our solutions
                    support safe and efficient aircraft operations in modern aviation environments.
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