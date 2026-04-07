import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Halogen Runway Lights | Jetsys Defence Aviation Lighting",
  description:
    "Explore halogen runway lights by Jetsys Defence including runway edge lights, taxiway lights, and airfield lighting systems for reliable aviation operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/touchdown-zone-light/halogen-runway-lights",
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
                Halogen Runway Lights – Runway Lights by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Halogen Runway Lights by Jetsys Defence are reliable aviation lighting solutions designed to deliver
                consistent brightness and proven performance for runway, taxiway, and airfield operations. Built with durable
                materials and precision engineering, our halogen lighting systems ensure safe aircraft takeoff, landing, and
                ground movement under all operational conditions. Our halogen runway lights are widely used in airports,
                airstrips, and defence airbases where dependable lighting systems are required.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Halogen Runway Lights – Runway Lights by Jetsys Defence.png"
                  width={500}
                  height={1000}
                  alt="Halogen Runway Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are Halogen Runway Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are Halogen Runway Lights?
                  </h2>
                  <p className="text-black mb-4">
                    Halogen runway lights are traditional aviation lighting systems that use halogen lamps to provide
                    high-intensity illumination for runways and taxiways. These systems are known for their stable light
                    output and compatibility with existing airfield lighting infrastructure.
                  </p>
                  <p className="text-black mb-4">
                    This system is widely used for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Runway light systems for runway visibility</li>
                    <li>Taxiway light systems for aircraft ground movement</li>
                    <li>Halogen runway edge lights for runway boundary marking</li>
                    <li>Airfield halogen lighting systems for airport operations</li>
                  </ul>
                </div>
              </section>

              {/* Types of Halogen Runway Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Halogen Runway Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of halogen lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. Halogen Runway Edge Lights</h3>
                    <p className="text-black">
                      Includes halogen runway edge lights used to clearly define runway boundaries.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. Halogen Taxiway Lights</h3>
                    <p className="text-black">
                      Includes halogen taxiway lights and taxiway edge lights for safe aircraft navigation.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. Halogen Airfield Lights</h3>
                    <p className="text-black">
                      Includes airfield halogen lights used in runways, taxiways, and apron areas.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. Halogen MIRL Lighting Systems</h3>
                    <p className="text-black">
                      Includes MIRL runway lights and medium intensity runway lighting systems for standard airport operations.
                    </p>
                  </div>

                  {/* Type 5 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">5. Portable Halogen Airfield Lighting</h3>
                    <p className="text-black">
                      Includes portable airfield lighting systems for temporary and remote airfield applications.
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
                    Applications of Halogen Runway Lights
                  </h2>
                  <p className="text-black mb-4">
                    The halogen runway lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial and regional airports</li>
                        <li>Military airbases</li>
                        <li>Airstrips and private aviation facilities</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Temporary and portable airfield lighting setups</li>
                        <li>Low-visibility and night operations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airplane runway lights ensure safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Halogen Runway Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Stable and consistent light output</li>
                        <li>High-intensity illumination for clear visibility</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Compatible with existing airfield systems</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our halogen airfield lighting systems deliver reliable performance in all environments.
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
                    Jetsys Defence is a trusted provider of aviation lighting systems, delivering high-quality solutions
                    for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance halogen runway lights systems</li>
                        <li>Reliable halogen taxiway lights solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airfield halogen lighting systems</li>
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
                    Halogen Runway Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of halogen runway lights depends on lighting type, intensity, and system configuration.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Halogen runway edge lights</li>
                    <li>Halogen taxiway lighting systems</li>
                    <li>Portable halogen airfield lighting systems</li>
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
                    The Halogen Runway Lights by Jetsys Defence are a trusted and proven solution for aviation lighting.
                    With consistent illumination, durable construction, and compatibility with traditional systems, our
                    halogen lighting solutions ensure safe and efficient aircraft operations across all types of airfields.
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