import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Halogen Taxiway Lights | Jetsys Defence Runway Spares Equipments",
  description:
    "Explore halogen taxiway lights by Jetsys Defence including taxiway edge lights, taxiway lighting systems, and airport taxiway lights for safe aircraft operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/halogen-taxiway-lights",
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
                Halogen Taxiway Lights – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Halogen Taxiway Lights by Jetsys Defence are reliable aviation lighting solutions designed to provide
                clear and consistent illumination for aircraft movement on taxiways. Built using proven halogen technology,
                these lights ensure high-intensity brightness and dependable performance in demanding airfield environments.
                Our halogen taxiway lights are widely used in airports, defence airbases, and aviation infrastructure where
                traditional lighting systems are preferred.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/Halogen Taxiway Lights.png"
                  width={500}
                  height={1000}
                  alt="Halogen Taxiway Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are Halogen Taxiway Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are Halogen Taxiway Lights?
                  </h2>
                  <p className="text-black mb-4">
                    Halogen taxiway lights are lighting fixtures used to guide aircraft safely along taxiways. These lights
                    are a key component of taxiway edge lighting systems, providing visible boundaries and navigation cues
                    during ground operations.
                  </p>
                  <p className="text-black mb-4">
                    They include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Taxiway light systems for aircraft guidance</li>
                    <li>Taxiway edge lights for boundary marking</li>
                    <li>Edge lights runway systems for integrated airfield lighting</li>
                    <li>Taxiway edge lighting solutions for operational safety</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our systems deliver dependable airport taxiway lighting solutions using halogen technology.
                  </p>
                </div>
              </section>

              {/* Types of Halogen Taxiway Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Halogen Taxiway Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a range of halogen-based taxiway lighting solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Halogen Taxiway Edge Lights</h4>
                          Used for defining taxiway boundaries with high visibility and consistent illumination.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Halogen Taxiway Centreline Lights</h4>
                          Installed along taxiway centerlines to guide aircraft direction during movement.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Integrated Taxiway Lighting Systems</h4>
                          Includes taxiway edge lighting, runway edge lights, and combined airfield lighting systems.
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
                    Applications of Halogen Taxiway Lights
                  </h2>
                  <p className="text-black mb-4">
                    The halogen taxiway lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airport taxiways</li>
                        <li>Military airbases</li>
                        <li>Aircraft ground navigation systems</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Night and low-visibility operations</li>
                        <li>Airfield infrastructure projects</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway light systems ensure safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Halogen Taxiway Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-intensity illumination for clear visibility</li>
                        <li>Proven and reliable halogen lighting technology</li>
                        <li>Durable aviation-grade construction</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Weather-resistant design for long-term performance</li>
                        <li>Easy maintenance and replacement</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our taxiway edge lighting systems provide consistent and dependable output.
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
                    Jetsys Defence is a trusted provider of aviation lighting solutions, offering high-quality halogen
                    taxiway lights systems for airport and defence applications.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reliable taxiway lights systems</li>
                        <li>Advanced taxiway edge lighting products</li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built airport taxiway lighting solutions</li>
                        <li>End-to-end aviation lighting systems</li>
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
                    Halogen Taxiway Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of halogen taxiway lights depends on configuration, installation requirements, and system
                    specifications. Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom taxiway lights for sale solutions</li>
                    <li>Complete taxiway edge lighting systems</li>
                    <li>Integrated airport taxiway lighting systems</li>
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
                    The Halogen Taxiway Lights by Jetsys Defence are essential aviation lighting solutions for safe aircraft
                    ground movement. With reliable taxiway edge lights, durable construction, and high-intensity performance,
                    these systems support efficient airport operations.
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