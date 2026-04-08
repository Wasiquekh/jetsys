import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Direction Sign | Jetsys Defence Airport Signboards",
  description:
    "Explore taxiway direction signs by Jetsys Defence integrated with surface painted taxiway direction signs for accurate aircraft navigation and safe airfield operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/signbords/taxiway-guidance-sign/taxiway-direction-sign",
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
                Taxiway Direction Sign – Runway Signboards by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Direction Sign by Jetsys Defence is a vital aviation signboard designed to guide pilots along
                correct taxi routes across airfields. These signs provide clear directional information, ensuring safe and
                efficient aircraft movement between runways, taxiways, and apron areas. Our taxiway direction signs are
                widely used in airports, defence airbases, and aerodrome environments to enhance navigation accuracy and
                operational safety.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Taxiway Direction.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Direction Sign by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Taxiway Direction Sign? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Taxiway Direction Sign?
                  </h2>
                  <p className="text-black mb-4">
                    A taxiway direction sign is an airfield signboard that provides directional guidance to pilots, indicating
                    routes toward specific taxiways, runways, or terminal areas.
                  </p>
                  <p className="text-black mb-4">
                    These signs work alongside:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Surface painted taxiway direction signs for additional ground-level guidance</li>
                        <li>Airfield navigation systems for accurate routing</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airport signage systems for safe aircraft movement</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway direction signage systems ensure clear and precise navigation across complex airfield layouts.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Direction Signs */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Direction Signs
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of taxiway direction signage solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Standard Taxiway Direction Signs</h4>
                          Used to indicate directional paths toward taxiways and runways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Intersection Direction Signs</h4>
                          Installed at taxiway intersections to guide aircraft toward multiple destinations.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Illuminated Taxiway Direction Signs</h4>
                          Advanced LED taxiway direction signs designed for high visibility in night and low-visibility conditions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Integrated Direction Signage Systems</h4>
                          Combined with surface painted taxiway direction signs and other airfield markings for complete
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
                    Applications of Taxiway Direction Signs
                  </h2>
                  <p className="text-black mb-4">
                    The taxiway direction signs from Jetsys Defence are widely used in:
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
                        <li>Complex taxiway intersections and routing zones</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport taxiway direction signage systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Direction Signs
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility taxiway direction signboards for accurate guidance</li>
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
                    Our taxiway direction signage systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation signage solutions, offering advanced taxiway direction
                    sign systems for airport and defence infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality taxiway direction signs</li>
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
                    Taxiway Direction Sign Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of taxiway direction signs depends on size, configuration, and lighting requirements.
                    Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom taxiway direction signage systems</li>
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
                    The Taxiway Direction Sign by Jetsys Defence is essential for guiding aircraft safely across airfields.
                    Integrated with surface painted taxiway direction signs, our signage systems ensure precise navigation,
                    improved efficiency, and enhanced operational safety in modern aviation environments.
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