import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Airport Guidance Signs | Jetsys Defence Runway Spares",
  description:
    "Explore airport guidance signs by Jetsys Defence including taxiway guidance signs, runway guidance signs, and airfield signage systems for safe aircraft navigation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/airport-guidance_signs",
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
                Airport Guidance Signs – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Airport Guidance Signs by Jetsys Defence are essential aviation signage solutions designed to provide
                clear and accurate navigation instructions for pilots during ground operations. Built with high-visibility
                materials and precision engineering, these signs ensure safe aircraft movement across taxiways, runways,
                and airfield zones. Our airport guidance signs are widely used in commercial airports, defence airbases,
                and aerodrome infrastructure for efficient and secure operations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/airport-guidance_signs.png"
                  width={500}
                  height={1000}
                  alt="Airport Guidance Signs by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are Airport Guidance Signs? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are Airport Guidance Signs?
                  </h2>
                  <p className="text-black mb-4">
                    Airport guidance signs are visual navigation systems installed across airfields to guide aircraft during
                    taxiing and ground movement. These signs provide directional, location-based, and safety-related
                    information to pilots.
                  </p>
                  <p className="text-black mb-4">
                    They include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Guidance sign systems for aircraft navigation</li>
                        <li>Airfield guidance signs for airport operations</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway guidance signs for safe runway access</li>
                        <li>Taxiway guidance signs for directional control</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport guidance signage systems ensure clear communication and operational safety.
                  </p>
                </div>
              </section>

              {/* Types of Airport Guidance Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Airport Guidance Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of aviation signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Taxiway Guidance Signs</h4>
                          Includes taxi guidance sign and taxiway guidance sign systems used to direct aircraft movement on
                          taxiways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Runway Guidance Signs</h4>
                          Includes runway guidance signs that provide critical instructions for runway entry, exit, and
                          positioning.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Airfield Direction Signs</h4>
                          Includes airfield guidance signs for navigation across complex airfield layouts.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Illuminated Guidance Signs</h4>
                          Advanced LED airport guidance signs designed for high visibility in night and low-visibility conditions.
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
                    Applications of Airport Guidance Signs
                  </h2>
                  <p className="text-black mb-4">
                    The airport guidance signs from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways and runways</li>
                        <li>Military airbases and defence airfields</li>
                        <li>Aerodrome and regional airports</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft ground navigation systems</li>
                        <li>Low-visibility and night operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield guidance signage systems ensure safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Airport Guidance Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility guidance sign systems for accurate navigation</li>
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and long-lasting performance</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>LED and non-LED signage options</li>
                        <li>Designed for compliance with global aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport guidance signage systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted airfield guidance sign manufacturer, delivering advanced aviation signage
                    solutions for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality airport guidance signs systems</li>
                        <li>Reliable airfield guidance signage solutions</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built runway and taxiway signage systems</li>
                        <li>End-to-end aviation infrastructure solutions</li>
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
                    Airport Guidance Signs Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of airport guidance signs depends on size, configuration, and lighting requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom taxiway guidance sign systems</li>
                    <li>LED-based airport guidance signage solutions</li>
                    <li>Complete runway and airfield signage systems</li>
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
                    The Airport Guidance Signs by Jetsys Defence are critical components of aviation safety and navigation.
                    With advanced airfield guidance signs, runway guidance signs, and taxiway guidance signage systems,
                    our solutions ensure efficient and safe aircraft operations across modern airfields.
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