import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Edge Lights | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore taxiway edge lights by Jetsys Defence including L-861T LED taxiway lights, blue taxiway lights, and airport taxiway lighting systems for safe operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/taxiway-edge-lights",
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
                Taxiway Edge Lights – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Edge Lights by Jetsys Defence are high-performance aviation lighting solutions designed to clearly
                define taxiway boundaries and ensure safe aircraft movement on the ground. Engineered with precision and
                aviation-grade materials, our lighting systems provide reliable visibility in all weather and lighting
                conditions. Our taxiway edge lights are widely used in airports, airbases, and airfield infrastructure to
                support efficient and safe aircraft navigation.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/taxiway-edge-lights.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Edge Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are Taxiway Edge Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are Taxiway Edge Lights?
                  </h2>
                  <p className="text-black mb-4">
                    Taxiway edge lights are lighting fixtures installed along the edges of taxiways to guide aircraft during
                    taxiing operations. These lights are typically blue in color and provide clear visual boundaries for pilots.
                  </p>
                  <p className="text-black mb-4">
                    This system includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Airport taxiway lights for ground navigation</li>
                    <li>Airport taxiway edge lights for boundary definition</li>
                    <li>Blue taxiway lights for standard taxiway marking</li>
                    <li>Taxiway edge lighting systems for safe aircraft movement</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our airfield taxiway edge lights ensure accurate guidance and operational safety.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Edge Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Edge Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of taxiway edge lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. L-861T Taxiway Edge Lights</h3>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>L 861T taxiway edge light</li>
                      <li>L 861T taxiway light</li>
                      <li>L861T / L 861T / L 861T LED</li>
                    </ul>
                    <p className="text-black mt-2">
                      These are standard aviation-grade lights used in airport taxiway systems.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. LED Taxiway Edge Lights</h3>
                    <p className="text-black">
                      Energy-efficient LED taxiway edge lights designed for long operational life and reduced maintenance.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. Elevated Taxiway Edge Lights</h3>
                    <p className="text-black">
                      Used in areas requiring elevated visibility for enhanced guidance.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. Integrated Taxiway Lighting Systems</h3>
                    <p className="text-black">
                      Includes taxiway edge lighting, taxi centerline lights, and runway and taxiway lighting for complete
                      airfield illumination.
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
                    Applications of Taxiway Edge Lights
                  </h2>
                  <p className="text-black mb-4">
                    The taxiway edge lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways</li>
                        <li>Military airbases</li>
                        <li>Aircraft ground movement and navigation systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Low-visibility and night operations</li>
                        <li>Airfield infrastructure development projects</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport taxiway edge lights ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Edge Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility blue taxiway lights for clear boundary marking</li>
                        <li>Energy-efficient LED and traditional lighting options</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Weather-resistant and long-lasting performance</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway edge lighting systems deliver reliable and consistent performance.
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
                        <li>High-performance taxiway edge lights systems</li>
                        <li>Reliable airport taxiway lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced L-861T taxiway edge light systems</li>
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
                    Taxiway Edge Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of taxiway edge lights depends on lighting type, configuration, and system requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>L 861T LED taxiway edge lights</li>
                    <li>Airport taxiway lighting systems</li>
                    <li>Integrated taxiway and runway lighting solutions</li>
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
                    The Taxiway Edge Lights by Jetsys Defence are essential aviation lighting solutions for ensuring safe
                    and efficient aircraft ground movement. With advanced technologies such as L-861T taxiway edge lights,
                    LED taxiway lighting, and blue taxiway lights, our systems deliver superior performance for modern
                    airport infrastructure.
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