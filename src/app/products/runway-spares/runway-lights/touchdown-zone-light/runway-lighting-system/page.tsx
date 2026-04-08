import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Runway Lighting System | Jetsys Defence Runway Lights",
  description:
    "Explore runway lighting system by Jetsys Defence including runway edge lights, approach lighting, REIL lights, taxiway lights, and airport lighting systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/touchdown-zone-light/runway-lighting-system",
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
                Runway Lighting System – Runway Lights by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Runway Lighting System by Jetsys Defence is a complete aviation lighting solution designed to ensure safe
                aircraft takeoff, landing, and ground movement in all visibility conditions. Engineered with advanced technology
                and aviation-grade components, our systems provide high-performance illumination, precision guidance, and
                reliable operation across modern airport infrastructure. Our runway lighting system includes a full range of
                runway lights, taxiway lights, and approach lighting systems, making it ideal for commercial, military, and
                remote airfields.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Runway Lighting System –.png"
                  width={500}
                  height={1000}
                  alt="Runway Lighting System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Runway Lighting System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Runway Lighting System?
                  </h2>
                  <p className="text-black mb-4">
                    A runway lighting system is an integrated network of lighting components used to guide aircraft during
                    landing, takeoff, and taxiing operations, especially during night or low-visibility conditions.
                  </p>
                  <p className="text-black mb-4">
                    This system includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Runway edge lights for runway boundary visibility</li>
                    <li>Approach lighting system for safe landing alignment</li>
                    <li>Taxiway lights for ground navigation</li>
                    <li>Runway guard lights for runway entry safety</li>
                    <li>Runway end identifier lights (REIL lights) for runway threshold identification</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our airport runway light system ensures accurate guidance and operational safety.
                  </p>
                </div>
              </section>

              {/* Types of Runway Lighting Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Runway Lighting Systems
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of aviation lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. Runway Edge Lighting System</h3>
                    <p className="text-black">
                      Includes airport runway edge lights, runway edge light system, and runway edge identifier lights for
                      clear runway boundaries.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. Approach Lighting Systems</h3>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>ALSF 1 lighting system</li>
                      <li>ALSF 2 approach lighting system</li>
                      <li>MALSR lighting system</li>
                      <li>ODALS approach lighting system</li>
                      <li>SSALR approach lighting system</li>
                      <li>Medium intensity approach lighting system</li>
                    </ul>
                    <p className="text-black mt-2">
                      These systems provide precision approach lights and visual guidance during landing.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. PAPI Lighting System</h3>
                    <p className="text-black">
                      Includes PAPI lights on runway, PAPI lights runway, and aviation PAPI lights used for glide path guidance.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. REIL Lighting System</h3>
                    <p className="text-black">
                      Includes REIL runway, REIL runway end identifier lights, airport REIL lights, and REIL lights airport
                      for runway threshold visibility.
                    </p>
                  </div>

                  {/* Type 5 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">5. Taxiway Lighting System</h3>
                    <p className="text-black">
                      Includes blue taxiway lights and taxiway lights for safe aircraft ground movement.
                    </p>
                  </div>

                  {/* Type 6 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">6. Runway Status Lighting System</h3>
                    <p className="text-black">
                      Includes runway status light, runway status lighting system, and RWSL lights for real-time runway
                      safety alerts.
                    </p>
                  </div>

                  {/* Type 7 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">7. Touchdown Zone & Alignment Lighting</h3>
                    <p className="text-black">
                      Includes touchdown zone light, runway alignment indicator, and runway alignment indicator light for
                      precision landing.
                    </p>
                  </div>

                  {/* Type 8 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">8. Portable & Remote Lighting Systems</h3>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>Portable airfield lighting systems</li>
                      <li>Portable airfield lighting</li>
                      <li>Remote airfield lighting system</li>
                    </ul>
                    <p className="text-black mt-2">
                      Used for temporary, military, and remote airfield operations.
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
                    Applications of Runway Lighting System
                  </h2>
                  <p className="text-black mb-4">
                    The runway lighting system from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport runway lighting</li>
                        <li>Military runway lighting systems</li>
                        <li>Remote and temporary airfield operations</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Night and low-visibility runway lighting</li>
                        <li>Precision runway lighting systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport lighting systems ensure safe and efficient aviation operations in all environments.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Runway Lighting System
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-intensity and energy-efficient lighting</li>
                        <li>Precision alignment and visibility enhancement</li>
                        <li>Advanced runway light controller integration</li>
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
                    Our runway lighting at night ensures maximum visibility and safety.
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
                        <li>Complete runway lighting systems</li>
                        <li>Reliable airport runway light system solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced precision runway lighting systems</li>
                        <li>Custom-built solutions for civil and military aviation</li>
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
                    Runway Lighting System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a runway lighting system depends on system type, lighting configuration, and installation
                    requirements. Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Approach lighting systems (ALSF, MALSR, ODALS)</li>
                    <li>Runway edge lighting systems (MIRL runway lights)</li>
                    <li>Portable and remote airfield lighting systems</li>
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
                    The Runway Lighting System by Jetsys Defence is an essential solution for ensuring safe, precise, and
                    efficient aircraft operations. With advanced systems such as approach lighting, PAPI lights, REIL lights,
                    and runway status lighting systems, our solutions deliver superior performance for modern aviation
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