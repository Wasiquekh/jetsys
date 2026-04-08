import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Location Sign | Jetsys Defence Airport Signboards",
  description:
    "Explore taxiway location signs by Jetsys Defence integrated with runway holding position markings on taxiways for accurate aircraft positioning and safe airfield operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/taxiway-location-sign",
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
                Taxiway Location Sign – Runway Signboards by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Location Sign by Jetsys Defence is a critical aviation signboard used to identify the current
                position of an aircraft on taxiways. Designed for high visibility and precision, these signs help pilots
                confirm their exact location, ensuring safe and efficient ground movement across airfields. Our taxiway
                location signs are widely used in airports, defence airbases, and aerodrome infrastructure to enhance
                situational awareness and navigation accuracy.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Taxiway Location Sign.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Location Sign by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Taxiway Location Sign? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Taxiway Location Sign?
                  </h2>
                  <p className="text-black mb-4">
                    A taxiway location sign is an airfield signboard that provides aircraft with clear identification of their
                    current taxiway position. These signs are typically placed along taxiways and intersections to support
                    safe navigation.
                  </p>
                  <p className="text-black mb-4">
                    They work in coordination with:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway holding position markings on taxiways for controlled aircraft movement</li>
                        <li>Airfield navigation systems for accurate positioning</li>
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
                    Our taxiway location signage systems ensure clear communication and efficient aircraft guidance.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Location Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Location Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of taxiway location signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Standard Taxiway Location Signs</h4>
                          Used to identify taxiway positions clearly for pilots during ground operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Intersection Location Signs</h4>
                          Installed at taxiway intersections to indicate multiple taxiway identifiers.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Illuminated Taxiway Location Signs</h4>
                          Advanced LED taxiway location signs designed for visibility in night and low-visibility conditions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Integrated Signage Systems</h4>
                          Combined with runway holding position markings on taxiways and other airfield signage for complete
                          navigation support.
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
                    Applications of Taxiway Location Signs
                  </h2>
                  <p className="text-black mb-4">
                    The taxiway location signs from Jetsys Defence are widely used in:
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
                        <li>Taxiway intersections and holding points</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport taxiway signage systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Location Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility taxiway location signboards for accurate positioning</li>
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and long-lasting performance</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>LED and non-LED signage options</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway location signage systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation signage solutions, offering advanced taxiway location
                    sign systems for airport and defence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality taxiway location signs</li>
                        <li>Reliable airport signage systems</li>
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
                    Taxiway Location Sign Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of taxiway location signs depends on size, configuration, and lighting requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom taxiway location signage systems</li>
                    <li>LED-based airport signage solutions</li>
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
                    The Taxiway Location Sign by Jetsys Defence is essential for accurate aircraft positioning and safe
                    airfield operations. Integrated with runway holding position markings on taxiways, our signage systems
                    ensure precise navigation and improved operational safety across modern airfields.
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