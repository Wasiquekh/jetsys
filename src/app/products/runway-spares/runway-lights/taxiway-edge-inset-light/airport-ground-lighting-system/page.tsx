import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Airport Ground Lighting System | Jetsys Defence AGL Solutions",
  description:
    "Explore airport ground lighting systems by Jetsys Defence including AGL lighting systems, airfield ground lighting, and advanced airport lighting solutions for safe operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/taxiway-edge-inset-light/airport-ground-lighting-system",
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
                Airport Ground Lighting System – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Airport Ground Lighting System by Jetsys Defence is a complete aviation lighting solution designed to
                ensure safe and efficient aircraft movement across runways, taxiways, and apron areas. Engineered with
                precision and reliability, our systems deliver high visibility and operational safety in all weather and
                lighting conditions. Our airport ground lighting systems are ideal for modern airports, defence airbases,
                and aerodrome infrastructure.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/airport-ground-lighting-system.png"
                  width={500}
                  height={1000}
                  alt="Airport Ground Lighting System by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is an Airport Ground Lighting System? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is an Airport Ground Lighting System?
                  </h2>
                  <p className="text-black mb-4">
                    An airport ground lighting system is a network of lighting installations that guide aircraft during
                    taxiing, takeoff, and landing operations. It forms a critical part of airfield ground lighting, ensuring
                    safe navigation on the ground.
                  </p>
                  <p className="text-black mb-4">
                    This includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>AGL system airport for complete airfield lighting</li>
                    <li>Airfield ground lighting system for runway and taxiway guidance</li>
                    <li>AGL airfield ground lighting for precise aircraft movement</li>
                    <li>AGL lighting systems for operational safety and efficiency</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our systems provide advanced airfield ground lighting solutions for aviation infrastructure.
                  </p>
                </div>
              </section>

              {/* Components of Airport Ground Lighting System */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Components of Airport Ground Lighting System
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of AGL lighting systems including:
                  </p>

                  {/* Component 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. Runway Ground Lighting</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Runway edge lighting systems</li>
                      <li>Runway centerline lighting</li>
                      <li>Touchdown zone lighting</li>
                    </ul>
                  </div>

                  {/* Component 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. Taxiway Ground Lighting</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Taxiway edge lighting</li>
                      <li>Taxiway centerline lights</li>
                      <li>Guidance lighting for aircraft movement</li>
                    </ul>
                  </div>

                  {/* Component 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. Apron & Parking Area Lighting</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Apron floodlighting systems</li>
                      <li>Aircraft stand guidance lighting</li>
                    </ul>
                  </div>

                  {/* Component 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. Advanced AGL Systems</h3>
                    <ul className="list-disc pl-5 text-black">
                      <li>Integrated AGL system airport solutions</li>
                      <li>Smart airfield ground lighting system</li>
                      <li>Automated lighting control and monitoring</li>
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
                    Applications of Airport Ground Lighting Systems
                  </h2>
                  <p className="text-black mb-4">
                    The airport ground lighting system by Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Commercial airports</li>
                        <li>Defence and military airbases</li>
                        <li>Aerodrome and regional airstrips</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Night and low-visibility operations</li>
                        <li>Advanced airport infrastructure projects</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield ground lighting systems ensure safe and reliable operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Airport Ground Lighting System
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance AGL lighting systems</li>
                        <li>Durable and weather-resistant construction</li>
                        <li>Energy-efficient lighting solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced AGL airfield ground lighting technology</li>
                        <li>Seamless integration with control systems</li>
                        <li>Designed for global aviation standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airport ground lighting systems deliver consistent and high-performance output.
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
                    Jetsys Defence is a trusted provider of aviation lighting solutions, offering complete airfield ground
                    lighting systems for airports and defence sectors.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Reliable AGL system airport solutions</li>
                        <li>Advanced airfield ground lighting products</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Custom-built airport ground lighting systems</li>
                        <li>End-to-end aviation lighting solutions</li>
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
                    Airport Ground Lighting System Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of an airport ground lighting system depends on system size, configuration, and technology
                    requirements. Jetsys Defence offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Custom AGL lighting systems</li>
                    <li>Scalable airfield ground lighting solutions</li>
                    <li>Complete airport lighting equipment packages</li>
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
                    The Airport Ground Lighting System by Jetsys Defence is essential for modern aviation infrastructure.
                    With advanced AGL lighting systems, airfield ground lighting, and integrated control solutions, our
                    systems ensure safe, efficient, and reliable aircraft operations on the ground.
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