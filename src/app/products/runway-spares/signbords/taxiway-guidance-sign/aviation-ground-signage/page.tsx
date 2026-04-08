import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Aviation Ground Signage | Jetsys Defence Runway Spares",
  description:
    "Explore aviation ground signage by Jetsys Defence including airfield signage systems, taxiway signs, and runway signage solutions for safe aircraft navigation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/aviation-ground-signage",
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
                Aviation Ground Signage – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Aviation Ground Signage by Jetsys Defence is a critical component of modern airport infrastructure,
                designed to provide clear visual guidance for aircraft movement across taxiways, runways, and apron areas.
                Engineered with high-visibility materials and precision design, our signage systems ensure safe and efficient
                airfield operations. Our aviation ground signage systems are widely used in airports, defence airbases,
                and aerodrome environments to support accurate navigation and operational safety.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/aviation-ground-signage.png"
                  width={500}
                  height={1000}
                  alt="Aviation Ground Signage by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is Aviation Ground Signage? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Aviation Ground Signage?
                  </h2>
                  <p className="text-black mb-4">
                    Aviation ground signage refers to a range of visual guidance systems installed across airfields to direct
                    aircraft during taxiing and ground operations. These signage systems provide pilots with essential
                    navigation, location, and instruction information.
                  </p>
                  <p className="text-black mb-4">
                    This includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport ground signage systems for navigation</li>
                        <li>Airfield signage systems for operational safety</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway signage systems for controlled aircraft movement</li>
                        <li>Taxiway signage systems for directional guidance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our aviation ground signage systems ensure clarity and compliance with aviation standards.
                  </p>
                </div>
              </section>

              {/* Types of Aviation Ground Signage */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Aviation Ground Signage
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of aviation signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Taxiway Guidance Signage</h4>
                          Includes taxiway guidance signs, taxiway direction signs, and navigation signage for aircraft movement.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Runway Signage Systems</h4>
                          Includes runway holding position signs, runway location signs, and runway guidance signage.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Airfield Direction & Location Signs</h4>
                          Includes airfield direction signs, airfield location signage, and airport navigation signs.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Illuminated Aviation Signage</h4>
                          Advanced LED airfield signage systems designed for high visibility in night and low-visibility conditions.
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
                    Applications of Aviation Ground Signage
                  </h2>
                  <p className="text-black mb-4">
                    The aviation ground signage systems from Jetsys Defence are widely used in:
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
                        <li>Aircraft ground navigation systems</li>
                        <li>Low-visibility and night operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport ground signage systems ensure safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Aviation Ground Signage
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility aviation signage systems for accurate navigation</li>
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
                    Our airfield signage solutions deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation infrastructure solutions, offering advanced aviation
                    ground signage systems for airport and defence sectors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality airport ground signage systems</li>
                        <li>Reliable airfield signage products</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built runway and taxiway signage systems</li>
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
                    Aviation Ground Signage Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of aviation ground signage depends on size, configuration, and lighting requirements.
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
                    The Aviation Ground Signage by Jetsys Defence is essential for ensuring safe and efficient aircraft
                    ground operations. With advanced airfield signage systems, runway signage systems, and taxiway signage
                    solutions, our products support modern aviation infrastructure with precision and reliability.
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