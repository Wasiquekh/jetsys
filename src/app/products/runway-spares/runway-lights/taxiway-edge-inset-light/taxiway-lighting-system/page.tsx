import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Lighting System | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore taxiway lighting system by Jetsys Defence including taxiway lights, LED and solar taxiway lights, and airport taxiway lighting systems for safe operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/taxiway-lighting-system",
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
                Taxiway Lighting System – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Lighting System by Jetsys Defence is an advanced aviation lighting solution designed to ensure
                safe and efficient aircraft ground movement across taxiways, aprons, and runway connections. Engineered with
                precision and aviation-grade components, our systems provide clear visual guidance for pilots during day,
                night, and low-visibility conditions. Our taxiway lighting system is ideal for modern airports, defence
                airbases, and airfield infrastructure requiring reliable and high-performance lighting solutions.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/runway-lights.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Lighting System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Taxiway Lighting System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Taxiway Lighting System?
                  </h2>
                  <p className="text-black mb-4">
                    A taxiway lighting system is a network of lighting fixtures used to guide aircraft safely along taxiways
                    and connect runways, aprons, and terminals. These systems play a critical role in ensuring smooth and
                    safe aircraft movement on the ground.
                  </p>
                  <p className="text-black mb-4">
                    This system includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Taxiway lights for navigation guidance</li>
                    <li>Taxiway edge lights for defining taxiway boundaries</li>
                    <li>Blue taxiway lights for edge marking</li>
                    <li>Green taxiway lights for centreline guidance</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our airfield taxiway lighting systems ensure safe and efficient airport operations.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Lighting Systems */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Lighting Systems
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of taxiway lighting solutions:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. LED Taxiway Lighting System</h3>
                    <p className="text-black">
                      Includes LED taxiway lights designed for energy efficiency and long operational life.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. Solar Taxiway Lighting System</h3>
                    <p className="text-black">
                      Includes solar taxiway lights and solar powered taxiway lights for remote and energy-efficient
                      airfield operations.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. Airport Taxiway Lighting System</h3>
                    <p className="text-black">
                      Includes airport taxiway lights designed for high-traffic commercial airport environments.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. L-861T Taxiway Light Systems</h3>
                    <p className="text-black">
                      Includes L 861T taxiway light solutions used for standard taxiway edge lighting applications.
                    </p>
                  </div>

                  {/* Type 5 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">5. Integrated Runway and Taxiway Lighting</h3>
                    <p className="text-black">
                      Includes runway and taxiway lighting, runway taxiway lights, and taxiway and runway lighting systems
                      for complete airfield illumination.
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
                    Applications of Taxiway Lighting System
                  </h2>
                  <p className="text-black mb-4">
                    The taxiway lighting system from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways</li>
                        <li>Military airbases and defence airfields</li>
                        <li>Aircraft ground movement and navigation systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Low-visibility and night operations</li>
                        <li>Airfield infrastructure development and upgrades</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway lighting in airport systems ensures safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Lighting System
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-visibility lighting for precise aircraft guidance</li>
                        <li>Energy-efficient LED and solar lighting options</li>
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
                    Our airport taxiway lighting systems deliver reliable and consistent performance.
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
                    for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced taxiway lighting systems</li>
                        <li>Reliable airfield taxiway lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance LED taxiway lights systems</li>
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
                    Taxiway Lighting System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a taxiway lighting system depends on lighting type, intensity, and system configuration.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Taxiway lights for sale</li>
                    <li>Solar powered taxiway lights</li>
                    <li>Used taxiway lights for sale (replacement solutions)</li>
                    <li>LED taxiway lighting systems</li>
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
                    The Taxiway Lighting System by Jetsys Defence is an essential aviation solution for ensuring safe,
                    efficient, and reliable aircraft ground movement. With advanced lighting technologies such as LED
                    taxiway lights, solar taxiway lights, and airport taxiway lighting systems, our solutions support
                    modern aviation infrastructure across all environments.
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