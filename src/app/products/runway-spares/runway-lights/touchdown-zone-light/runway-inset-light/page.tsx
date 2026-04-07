import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Runway Inset Light | Jetsys Defence Runway Lights",
  description:
    "Explore runway inset light by Jetsys Defence for airfield lighting systems including LED inset lights, taxiway inset lights, and precision runway lighting solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/touchdown-zone-light/runway-inset-light",
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
                Runway Inset Light – Runway Lights by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Runway Inset Light by Jetsys Defence is a high-performance aviation lighting solution designed for precision
                guidance and enhanced visibility on runways and taxiways. Engineered for durability and accuracy, our inset
                lights are installed flush with the pavement, ensuring safe aircraft operations even under extreme weather
                and low-visibility conditions. Our runway inset light systems are ideal for modern airport infrastructure,
                supporting safe takeoff, landing, and taxiing operations.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/runway-inset-light.png"
                  width={500}
                  height={1000}
                  alt="Runway Inset Light by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Runway Inset Light? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Runway Inset Light?
                  </h2>
                  <p className="text-black mb-4">
                    A runway inset light is a flush-mounted lighting fixture installed within the runway or taxiway surface.
                    These lights provide critical visual guidance to pilots without obstructing aircraft movement.
                  </p>
                  <p className="text-black mb-4">
                    This system is widely used for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Inset runway lighting systems</li>
                    <li>Airfield inset lights for runways and taxiways</li>
                    <li>Flush mounted runway lights</li>
                    <li>Airport inset lighting systems</li>
                  </ul>
                </div>
              </section>

              {/* Types of Runway Inset Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Runway Inset Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced inset lighting solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Runway Centreline Inset Lights</h4>
                          Used for precise aircraft alignment during landing and takeoff.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Touchdown Zone Inset Lights</h4>
                          Installed in the touchdown area to guide pilots during landing.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Taxiway Inset Lights</h4>
                          Includes taxiway inset lights for safe aircraft ground navigation.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Runway Edge Inset Lights</h4>
                          Provides clear runway boundary visibility using inset runway edge lights.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">5. LED Runway Inset Lights</h4>
                          Energy-efficient LED runway inset light systems designed for long life and high performance.
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
                    Applications of Runway Inset Light
                  </h2>
                  <p className="text-black mb-4">
                    The runway inset light from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Runway centreline lighting systems</li>
                        <li>Touchdown zone lighting systems</li>
                        <li>Taxiway and apron lighting installations</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Low-visibility airport operations</li>
                        <li>Precision runway lighting systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield inset lighting systems ensure safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Runway Inset Light
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Flush-mounted design for safe aircraft movement</li>
                        <li>High-intensity and energy-efficient lighting</li>
                        <li>Durable, corrosion-resistant construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Precision-engineered for accurate alignment</li>
                        <li>Designed to meet international aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our runway inset lighting systems deliver reliable performance in all conditions.
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
                        <li>Advanced runway inset light systems</li>
                        <li>Reliable airfield inset lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance LED runway inset lights</li>
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
                    Runway Inset Light Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a runway inset light depends on lighting type, intensity, and system configuration.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>LED runway inset lights</li>
                    <li>Taxiway inset lighting systems</li>
                    <li>Precision runway inset lighting systems</li>
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
                    The Runway Inset Light by Jetsys Defence is an essential aviation lighting solution for ensuring safe,
                    precise, and efficient aircraft operations. With advanced design, durable construction, and high-performance
                    illumination, our inset lights support modern airport lighting infrastructure.
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