import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Inset Lights | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore taxiway inset lights by Jetsys Defence including L-861T LED taxiway lights, blue taxiway lights, and airport taxiway lighting systems for safe operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/taxiway-inset-lights",
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
                Taxiway Inset Lights – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Inset Lights by Jetsys Defence are advanced aviation lighting solutions designed to provide
                precise guidance for aircraft movement on taxiways. Installed flush with the pavement, these lights ensure
                safe and unobstructed aircraft operations while delivering high visibility in all weather and lighting
                conditions. Our taxiway inset lights are ideal for modern airports, defence airbases, and airfield
                infrastructure requiring precision lighting systems.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/taxiway-inset-lights.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Inset Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are Taxiway Inset Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are Taxiway Inset Lights?
                  </h2>
                  <p className="text-black mb-4">
                    Taxiway inset lights are flush-mounted lighting fixtures embedded into taxiway surfaces to guide aircraft
                    during taxiing operations. These lights provide clear visual cues without interfering with aircraft movement.
                  </p>
                  <p className="text-black mb-4">
                    This system is widely used for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Airport taxiway lights for aircraft navigation</li>
                    <li>Taxi centerline lights for directional guidance</li>
                    <li>Taxiway edge lighting systems for boundary visibility</li>
                    <li>Airfield taxiway inset lighting systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our taxiway inset lights systems ensure safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Inset Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Inset Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of inset lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. Taxiway Centreline Inset Lights</h3>
                    <p className="text-black">
                      Includes taxi centerline lights used for guiding aircraft along taxiway paths.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. Taxiway Edge Inset Lights</h3>
                    <p className="text-black">
                      Includes airport taxiway edge lights and taxiway edge lighting for defining taxiway boundaries.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. L-861T Taxiway Inset Lights</h3>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>L 861T taxiway edge light</li>
                      <li>L 861T taxiway light</li>
                      <li>L861T / L 861T / L 861T LED</li>
                    </ul>
                    <p className="text-black mt-2">
                      Standard aviation lighting fixtures used in taxiway systems.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. LED Taxiway Inset Lights</h3>
                    <p className="text-black">
                      Energy-efficient LED taxiway inset lights designed for long life and high performance.
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
                    Applications of Taxiway Inset Lights
                  </h2>
                  <p className="text-black mb-4">
                    The taxiway inset lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways</li>
                        <li>Military airbases</li>
                        <li>Aircraft ground movement systems</li>
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
                    Our airport taxiway lighting systems ensure safe and efficient operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Inset Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Flush-mounted design for safe aircraft movement</li>
                        <li>High-visibility blue taxiway lights for clear guidance</li>
                        <li>Energy-efficient LED options</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable aviation-grade construction</li>
                        <li>Weather-resistant and long-lasting performance</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway inset lighting systems deliver reliable and consistent performance.
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
                        <li>High-performance taxiway inset lights systems</li>
                        <li>Reliable airport taxiway lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced L-861T taxiway lighting systems</li>
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
                    Taxiway Inset Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of taxiway inset lights depends on lighting type, configuration, and system requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>L 861T LED taxiway inset lights</li>
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
                    The Taxiway Inset Lights by Jetsys Defence are essential aviation lighting solutions for ensuring safe
                    and efficient aircraft ground movement. With advanced technologies such as L-861T taxiway inset lights,
                    LED taxiway lighting, and precision inset lighting systems, our solutions support modern airport
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