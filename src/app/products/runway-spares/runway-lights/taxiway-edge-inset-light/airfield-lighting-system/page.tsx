import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Airfield Lighting System | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore airfield lighting systems by Jetsys Defence including runway lighting, taxiway lights, PAPI lights, LED and solar airfield lighting for safe airport operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/airfield-lighting-system",
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
                Airfield Lighting System – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Airfield Lighting System by Jetsys Defence is a complete aviation lighting solution designed to ensure
                safe aircraft operations during takeoff, landing, and taxiing. Our systems integrate advanced technologies
                to deliver high visibility, precision guidance, and reliable performance across all airfield environments.
                Engineered for modern airports and defence airbases, our airfield lighting systems support critical
                operations in low visibility and night conditions.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/airfield-lighting-system.png"
                  width={500}
                  height={1000}
                  alt="Airfield Lighting System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Airfield Lighting System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Airfield Lighting System?
                  </h2>
                  <p className="text-black mb-4">
                    An airfield lighting system is a network of lighting equipment used across runways, taxiways, and aprons
                    to guide aircraft safely on the ground and during approach.
                  </p>
                  <p className="text-black mb-4">
                    This includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Runway lighting system for takeoff and landing</li>
                    <li>Airport taxiway lights for aircraft ground movement</li>
                    <li>Airport apron lighting for parking and service areas</li>
                    <li>PAPI lights runway for approach angle guidance</li>
                    <li>REIL lights airport for runway identification</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our airfield ground lighting system ensures accurate navigation and operational safety.
                  </p>
                </div>
              </section>

              {/* Components of Airfield Lighting System */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Components of Airfield Lighting System
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence provides complete airfield lighting equipment including:
                  </p>

                  {/* Component 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. Runway Lighting Systems</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Airport runway lighting system</li>
                      <li>Runway edge lighting and runway edge light system</li>
                      <li>Touchdown zone lights</li>
                      <li>Elevated runway edge light</li>
                      <li>Yellow runway edge lights</li>
                    </ul>
                  </div>

                  {/* Component 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. Taxiway Lighting Systems</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Airfield taxiway lighting</li>
                      <li>Runway taxiway lights</li>
                      <li>Airport taxiway lights for guidance</li>
                    </ul>
                  </div>

                  {/* Component 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. Approach & Guidance Lighting</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>PAPI airfield lighting</li>
                      <li>Airport PAPI lights</li>
                      <li>PAPI in airport systems</li>
                      <li>REIL lights airport systems</li>
                    </ul>
                  </div>

                  {/* Component 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. Advanced Lighting Systems</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>LED airfield lighting and LED runway edge lights</li>
                      <li>Solar airfield lighting and solar runway edge lights</li>
                      <li>Portable airfield lighting systems</li>
                      <li>Emergency airfield lighting system</li>
                      <li>Expeditionary airfield lighting system</li>
                    </ul>
                  </div>

                  {/* Component 5 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">5. Control & Monitoring Systems</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Airfield lighting control system</li>
                      <li>Runway light controller</li>
                      <li>ALCMS system (Airfield Lighting Control and Monitoring System)</li>
                      <li>Remote airfield lighting system</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Airfield Lighting Systems
                  </h2>
                  <p className="text-black mb-4">
                    The airfield lighting systems by Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airports and international terminals</li>
                        <li>Military airbases and defence airfields</li>
                        <li>Aerodrome lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Temporary and portable airfield setups</li>
                        <li>Emergency and remote airfield operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport ground lighting system ensures safety and operational efficiency.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Airfield Lighting Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance AGL airfield ground lighting systems</li>
                        <li>Advanced LED airfield lighting solutions</li>
                        <li>Durable and weather-resistant construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Integration with airfield lighting control systems</li>
                        <li>Energy-efficient and long-lasting performance</li>
                        <li>Designed for compliance with global aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield lighting solutions deliver precision and reliability.
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
                    Jetsys Defence is a trusted airfield lighting company offering complete aviation lighting solutions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>End-to-end airfield lighting products</li>
                        <li>Advanced AGL lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reliable airport lighting equipment</li>
                        <li>Custom-built airfield solutions for aviation and defence</li>
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
                    Airfield Lighting System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of an airfield lighting system depends on system size, configuration, and technology
                    (LED, solar, portable, or integrated systems). Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom airport runway lighting systems</li>
                    <li>Complete airfield lighting equipment solutions</li>
                    <li>Advanced portable airfield lighting systems</li>
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
                    The Airfield Lighting System by Jetsys Defence provides a comprehensive solution for modern aviation
                    infrastructure. From runway lighting systems and taxiway lighting to PAPI lights runway and advanced
                    control systems, our solutions ensure safe, efficient, and reliable airfield operations.
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