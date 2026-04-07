import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "High Intensity Runway Lights | Jetsys Defence Aviation",
  description:
    "Explore high intensity runway lights by Jetsys Defence including HIRL systems, runway edge lights, and high intensity approach lighting for safe aviation operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/runway-lights/touchdown-zone-light/high-intensity-runway-lights",
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
                High Intensity Runway Lights – Runway Lights by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The High Intensity Runway Lights by Jetsys Defence are advanced aviation lighting solutions designed to
                provide maximum visibility and precision guidance for aircraft during landing, takeoff, and taxiing operations.
                Engineered with high-performance technology and aviation-grade durability, our lighting systems ensure safe
                operations even in low-visibility and adverse weather conditions. Our high intensity runway lights are ideal
                for international airports, military airbases, and high-traffic runways requiring superior illumination.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/high-intensity-runway-lights.png"
                  width={500}
                  height={1000}
                  alt="High Intensity Runway Lights by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What are High Intensity Runway Lights? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What are High Intensity Runway Lights?
                  </h2>
                  <p className="text-black mb-4">
                    High intensity runway lights are powerful lighting systems used to enhance runway visibility for pilots,
                    especially during night operations, fog, rain, or low-visibility conditions. These systems provide bright,
                    focused illumination for accurate runway alignment and safe aircraft movement.
                  </p>
                  <p className="text-black mb-4">
                    This system includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>High intensity runway edge lights for clear runway boundaries</li>
                    <li>High intensity approach lighting system for landing guidance</li>
                    <li>High intensity runway lights HIRL for enhanced visibility</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our high intensity runway lights ensure safe and precise aircraft operations.
                  </p>
                </div>
              </section>

              {/* Types of High Intensity Runway Lights */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of High Intensity Runway Lights
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers a complete range of high-intensity lighting systems:
                  </p>

                  {/* Type 1 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">1. High Intensity Runway Edge Lights</h3>
                    <p className="text-black">
                      Includes high intensity runway edge lights used to define runway edges with maximum clarity.
                    </p>
                  </div>

                  {/* Type 2 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">2. High Intensity Approach Lighting System</h3>
                    <p className="text-black mb-2">Includes:</p>
                    <ul className="list-disc pl-5 text-black">
                      <li>High intensity approach lighting system</li>
                      <li>High intensity approach lighting</li>
                    </ul>
                    <p className="text-black mt-2">
                      Designed to provide visual guidance during aircraft approach and landing.
                    </p>
                  </div>

                  {/* Type 3 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">3. High Intensity Runway Lights (HIRL)</h3>
                    <p className="text-black">
                      Includes high intensity runway lights HIRL systems used in major airports for high-performance
                      runway lighting.
                    </p>
                  </div>

                  {/* Type 4 */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-[#5C5649] mb-2">4. Integrated High Intensity Lighting Systems</h3>
                    <p className="text-black">
                      Complete systems combining runway edge lights, approach lights, and landing guidance lighting.
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
                    Applications of High Intensity Runway Lights
                  </h2>
                  <p className="text-black mb-4">
                    The high intensity runway lights from Jetsys Defence are widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>International and commercial airports</li>
                        <li>Military airbases</li>
                        <li>Low-visibility and night landing operations</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-traffic and precision runway environments</li>
                        <li>Instrument landing system (ILS) supported runways</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our high intensity runway lighting systems ensure safe and efficient aviation operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence High Intensity Runway Lights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-brightness illumination for maximum visibility</li>
                        <li>Advanced optical design for precise light distribution</li>
                        <li>Energy-efficient and long-lasting performance</li>
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
                    Our high intensity runway lights HIRL systems deliver reliable and consistent performance.
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
                        <li>Advanced high intensity runway lights systems</li>
                        <li>Reliable high intensity runway edge lights solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-performance high intensity approach lighting systems</li>
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
                    High Intensity Runway Lights Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of high intensity runway lights depends on lighting type, intensity level, and system configuration.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>High intensity runway edge lights</li>
                    <li>High intensity approach lighting systems</li>
                    <li>HIRL runway lighting systems</li>
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
                    The High Intensity Runway Lights by Jetsys Defence are essential for ensuring safe, precise, and efficient
                    aircraft operations under all visibility conditions. With advanced technologies such as high intensity
                    approach lighting systems, runway edge lights, and HIRL systems, our solutions deliver superior
                    performance for modern aviation infrastructure.
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