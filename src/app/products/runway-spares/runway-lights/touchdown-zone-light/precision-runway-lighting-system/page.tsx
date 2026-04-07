import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Precision Runway Lighting System | Jetsys Defence Aviation",
  description:
    "Explore precision runway lighting system by Jetsys Defence including ILS approach lighting, PAPI lights system, and precision approach lighting systems for aviation.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/touchdown-zone-light/precision-runway-lighting-system",
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
                Precision Runway Lighting System – Runway Lights by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Precision Runway Lighting System by Jetsys Defence is an advanced aviation lighting solution designed to
                provide accurate visual guidance for aircraft during landing and takeoff, especially under low-visibility
                conditions. Engineered with high-performance components and aviation-grade reliability, our systems ensure
                safe, precise, and efficient runway operations. Our precision runway lighting system integrates multiple
                lighting technologies including ILS approach lighting system, PAPI lights system, and advanced approach
                lighting configurations for modern airport infrastructure.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/precision-runway-lighting-system.png"
                  width={500}
                  height={1000}
                  alt="Precision Runway Lighting System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Precision Runway Lighting System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Precision Runway Lighting System?
                  </h2>
                  <p className="text-black mb-4">
                    A precision runway lighting system is a combination of lighting systems used to guide pilots during
                    critical phases of flight, especially during instrument landing operations. These systems provide visual
                    cues for alignment, glide path, and touchdown accuracy.
                  </p>
                  <p className="text-black mb-4">
                    This system includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Precision approach lighting system for runway alignment</li>
                    <li>ILS approach lighting system for instrument landing support</li>
                    <li>PAPI lights system for glide slope guidance</li>
                    <li>Precision approach lights for enhanced visibility</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our precision runway lighting ensures accurate aircraft navigation in all weather conditions.
                  </p>
                </div>
              </section>

              {/* Types of Precision Runway Lighting Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Precision Runway Lighting Systems
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of precision lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. Precision Approach Lighting System (PALS)</h3>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Precision approach lighting system</li>
                      <li>Precision approach lighting system CAT 1</li>
                      <li>Precision approach CAT 1 lighting system</li>
                    </ul>
                    <p className="text-black mt-2">
                      Designed for accurate runway alignment and safe landing.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. ILS Approach Lighting System</h3>
                    <p className="text-black">
                      Advanced ILS approach lighting system integrated with instrument landing systems for precision guidance.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. PAPI Lighting System</h3>
                    <p className="text-black">
                      Includes PAPI lights system providing visual glide slope indication for pilots.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. Precision Runway Lighting Systems</h3>
                    <p className="text-black">
                      Complete precision runway lighting solutions combining approach lights, touchdown zone lights, and
                      alignment indicators.
                    </p>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Precision Runway Lighting System
                  </h2>
                  <p className="text-black mb-4">
                    The precision runway lighting system from Jetsys Defence is widely used in:
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
                        <li>High-traffic and international airports</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our precision approach lighting systems ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Precision Runway Lighting System
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-intensity and energy-efficient lighting</li>
                        <li>Precision alignment and visual guidance</li>
                        <li>Integration with ILS approach lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced runway light controller compatibility</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our precision runway lighting systems deliver reliable and consistent performance.
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
                    Jetsys Defence is a trusted provider of aviation lighting systems, delivering high-performance solutions
                    for global airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced precision runway lighting systems</li>
                        <li>Reliable precision approach lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance PAPI lights systems</li>
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
                    Precision Runway Lighting System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a precision runway lighting system depends on system configuration, lighting type, and
                    installation requirements. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Precision approach lighting systems CAT 1</li>
                    <li>ILS approach lighting systems</li>
                    <li>Integrated precision runway lighting systems</li>
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
                    The Precision Runway Lighting System by Jetsys Defence is an essential aviation solution for ensuring safe,
                    precise, and efficient aircraft operations. With advanced technologies such as ILS approach lighting system,
                    PAPI lights system, and precision approach lighting systems, our solutions deliver superior performance
                    for modern airport infrastructure.
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