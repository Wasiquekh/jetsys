import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Information Sign | Jetsys Defence Airport Signboards",
  description:
    "Explore taxiway information signs by Jetsys Defence including airport information signs and airfield signage systems for safe and efficient aircraft navigation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/taxiway-information-sign",
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
                Taxiway Information Sign – Runway Signboards by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Information Sign by Jetsys Defence is a vital aviation signboard designed to provide pilots with
                essential operational information during ground movement. These signs enhance situational awareness and
                support safe aircraft navigation across taxiways, aprons, and airfield zones. Our taxiway information signs
                are widely used in airports, defence airbases, and aerodrome infrastructure to ensure clear communication
                and efficient aircraft operations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/taxiway-information-sign.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Information Sign by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Taxiway Information Sign? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Taxiway Information Sign?
                  </h2>
                  <p className="text-black mb-4">
                    A taxiway information sign is an airfield signboard that provides non-mandatory yet important information
                    to pilots, helping them navigate safely and efficiently across the airfield.
                  </p>
                  <p className="text-black mb-4">
                    These signs include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Taxiway information signage systems for operational awareness</li>
                        <li>Airport information signs for navigation guidance</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airfield information signs for enhanced pilot visibility</li>
                        <li>Taxiway guidance and information signs for route clarity</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway information signage systems ensure smooth and safe aircraft movement.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Information Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Information Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of taxiway information signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Directional Information Signs</h4>
                          Provide routing information to guide aircraft toward taxiways, runways, and terminals.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Location Information Signs</h4>
                          Help identify aircraft position along taxiways and intersections.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Distance & Advisory Signs</h4>
                          Offer operational information such as distance markers and safety guidance.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Illuminated Taxiway Information Signs</h4>
                          Advanced LED taxiway information signs designed for high visibility in night and low-visibility conditions.
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
                    Applications of Taxiway Information Signs
                  </h2>
                  <p className="text-black mb-4">
                    The taxiway information signs from Jetsys Defence are widely used in:
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
                        <li>Taxiway intersections and operational zones</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport taxiway information signage systems ensure efficient and safe aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Information Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility taxiway information signboards for clear communication</li>
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
                    Our taxiway information signage systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation signage solutions, offering advanced taxiway information
                    sign systems for airport and defence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality airport information signs</li>
                        <li>Reliable airfield information signage systems</li>
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
                    Taxiway Information Sign Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of taxiway information signs depends on size, configuration, and lighting requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom taxiway information signage systems</li>
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
                    The Taxiway Information Sign by Jetsys Defence is essential for providing clear operational guidance and
                    enhancing pilot awareness across airfields. With advanced airport information signs, airfield information
                    signage systems, and high-visibility design, our solutions ensure safe and efficient aircraft ground
                    operations.
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