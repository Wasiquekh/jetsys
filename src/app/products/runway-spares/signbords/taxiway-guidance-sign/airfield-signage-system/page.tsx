import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Blue Airfield Signage System | Jetsys Defence Runway Spares",
  description:
    "Explore blue airfield signage systems by Jetsys Defence including taxiway signs, airport signage systems, and aviation signage solutions for safe aircraft navigation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/airfield-signage-system",
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
                Blue Airfield Signage System – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Blue Airfield Signage System by Jetsys Defence is a critical component of modern airport infrastructure,
                designed to provide clear visual guidance for pilots during ground operations. Built with high-visibility
                materials and aviation-grade standards, these signage systems ensure accurate navigation across taxiways
                and airfield zones. Our blue airfield signage systems are widely used in airports, defence airbases, and
                aerodrome environments for safe and efficient aircraft movement.
              </p>
              <br />
              <br />
              <div>
                <Image
                  width={500}
                  src="/images/airfield-signage-system.png"
                  height={1000}
                  alt="Blue Airfield Signage System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Blue Airfield Signage System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Blue Airfield Signage System?
                  </h2>
                  <p className="text-black mb-4">
                    A blue airfield signage system consists of illuminated and non-illuminated signs used to guide aircraft
                    on taxiways and airfield surfaces. These signs provide essential information such as directions,
                    locations, and operational instructions.
                  </p>
                  <p className="text-black mb-4">
                    These include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Taxiway guidance signs for aircraft navigation</li>
                        <li>Airport taxiway signs for directional control</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airfield signage systems for ground operations</li>
                        <li>Aviation signage systems for safety and compliance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our blue airfield signage systems ensure clear communication and operational safety on airfields.
                  </p>
                </div>
              </section>

              {/* Types of Blue Airfield Signage Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Blue Airfield Signage Systems
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of airfield signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Taxiway Direction Signs</h4>
                          Used to indicate taxi routes and directions for aircraft movement.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Location Signs</h4>
                          Provide identification of current aircraft position on taxiways.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Mandatory Instruction Signs</h4>
                          Ensure compliance with airfield rules and safety regulations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Illuminated Airfield Signage</h4>
                          Includes LED airfield signage systems for enhanced visibility in night and low-visibility conditions.
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
                    Applications of Blue Airfield Signage System
                  </h2>
                  <p className="text-black mb-4">
                    The blue airfield signage system from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airports and international terminals</li>
                        <li>Military airbases and defence airfields</li>
                        <li>Aerodrome and regional airstrips</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Taxiway navigation and ground control systems</li>
                        <li>Low-visibility and night operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport signage systems ensure safe and efficient aircraft guidance.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Blue Airfield Signage System
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility blue airfield signage for accurate navigation</li>
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and long-lasting performance</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>LED and non-LED signage options</li>
                        <li>Designed to meet global aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield signage systems provide reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation infrastructure solutions, delivering advanced airfield
                    signage systems for airports and defence sectors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality airport taxiway signage systems</li>
                        <li>Reliable aviation signage systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built airfield signage products</li>
                        <li>End-to-end runway and taxiway solutions</li>
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
                    Blue Airfield Signage System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a blue airfield signage system depends on configuration, size, and lighting requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom airport signage systems</li>
                    <li>LED-based airfield signage solutions</li>
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
                    The Blue Airfield Signage System by Jetsys Defence is an essential component of modern aviation
                    infrastructure. With advanced airfield signage systems, taxiway guidance signs, and high-visibility
                    design, our solutions ensure safe and efficient aircraft ground operations.
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