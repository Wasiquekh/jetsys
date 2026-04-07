import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Runway Landing Lights System | Jetsys Defence Aviation",
  description:
    "Explore runway landing lights system by Jetsys Defence including runway landing lights and ILS approach lights for safe and precise aircraft landing operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/touchdown-zone-light/Rrunway-landing-lights-system",
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
                Runway Landing Lights System – Runway Lights by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Runway Landing Lights System by Jetsys Defence is a high-performance aviation lighting solution designed
                to provide clear visual guidance for aircraft during landing operations. Engineered with advanced lighting
                technology and aviation-grade reliability, our systems ensure safe, precise, and efficient landings in both
                day and night conditions. Our runway landing lights system is ideal for modern airport infrastructure,
                supporting safe aircraft approach, alignment, and touchdown.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Gemini_Generated_Image_vfan3wvfan3wvfan.png"
                  width={500}
                  height={1000}
                  alt="Runway Landing Lights System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Runway Landing Lights System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Runway Landing Lights System?
                  </h2>
                  <p className="text-black mb-4">
                    A runway landing lights system is an integrated lighting setup that helps pilots identify the runway,
                    align correctly, and safely land aircraft under various visibility conditions.
                  </p>
                  <p className="text-black mb-4">
                    This system includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Runway landing lights for runway visibility</li>
                    <li>ILS approach lights for precision landing guidance</li>
                    <li>Visual alignment and approach lighting components</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our runway landing lights system enhances pilot visibility and landing accuracy.
                  </p>
                </div>
              </section>

              {/* Components of Runway Landing Lights System */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Components of Runway Landing Lights System
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers complete landing lighting solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Runway Landing Lights</h4>
                          High-intensity runway landing lights designed to illuminate the runway surface and improve visibility
                          during landing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. ILS Approach Lights</h4>
                          Advanced ILS approach lights that provide precision guidance during aircraft descent and approach.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Approach Lighting Integration</h4>
                          Integrated systems combining runway landing lights and ILS approach lights for seamless landing support.
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
                    Applications of Runway Landing Lights System
                  </h2>
                  <p className="text-black mb-4">
                    The runway landing lights system from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport runways</li>
                        <li>Military airbases</li>
                        <li>Low-visibility and night landing operations</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Instrument landing system (ILS) supported runways</li>
                        <li>High-traffic airport environments</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway landing lights ensure safe and efficient aircraft landing operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Runway Landing Lights System
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-intensity illumination for clear runway visibility</li>
                        <li>Integration with ILS approach lights systems</li>
                        <li>Energy-efficient and long-lasting lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable aviation-grade construction</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway landing lights system delivers reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation lighting systems, delivering advanced solutions
                    for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance runway landing lights systems</li>
                        <li>Reliable runway landing lights solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced ILS approach lights systems</li>
                        <li>Custom-built solutions for aviation and defence</li>
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
                    Runway Landing Lights System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a runway landing lights system depends on configuration, lighting intensity, and system
                    requirements. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Runway landing lights</li>
                    <li>ILS approach lights systems</li>
                    <li>Integrated landing lighting systems</li>
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
                    The Runway Landing Lights System by Jetsys Defence is an essential aviation solution for ensuring safe,
                    precise, and efficient aircraft landing operations. With advanced lighting technologies such as runway
                    landing lights and ILS approach lights, our systems deliver superior performance for modern airport
                    infrastructure.
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