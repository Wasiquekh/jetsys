import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Solar Airfield Light Base | Jetsys Defence Runway Spares",
  description:
    "Explore solar airfield light base by Jetsys Defence for runway and airport solar lighting systems with durable design, secure mounting, and reliable performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/solar-airfield-light-base",
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
                Solar Airfield Light Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Solar Airfield Light Base by Jetsys Defence is a next-generation runway spares solution designed to support
                solar-powered airfield lighting systems. Engineered for energy efficiency and durability, our bases provide
                secure installation, optimal alignment, and long-lasting performance in modern airport environments. Our
                solar airfield light base is ideal for sustainable runway, taxiway, apron, and helipad lighting systems
                where solar technology is integrated.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/solar-airfield-light-base.png"
                  width={500}
                  height={1000}
                  alt="Solar Airfield Light Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Solar Airfield Light Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Solar Airfield Light Base?
                  </h3>
                  <p className="text-black mb-4">
                    A solar airfield light base is a structural mounting system designed to support solar-powered airfield
                    lighting fixtures. It ensures stable positioning, proper cable management, and protection of electrical
                    components while enabling efficient solar lighting operation.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Solar runway light base installation, Solar airfield lighting base systems,
                    Airport solar lighting foundation systems, Solar airfield light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of Solar Airfield Light Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Solar Airfield Light Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced runway spares solutions for solar lighting systems:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Solar Airfield Light Base</h4>
                          A shallow solar airfield light base designed for installations with limited pavement depth and
                          easy deployment.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can for Solar Airfield Lighting</h4>
                          A durable solar airfield light base can used for heavy-duty solar lighting installations requiring
                          enhanced structural support.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Inset Solar Airfield Light Base</h4>
                          Specialized solar airfield light base systems designed for inset solar lighting applications in
                          runways and taxiways.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Solar Airfield Light Base Systems</h4>
                          Tailor-made solar airport lighting base systems designed to meet specific infrastructure and
                          environmental requirements.
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Solar Airfield Light Base
                  </h3>
                  <p className="text-black mb-4">
                    The solar airfield light base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Solar runway edge and centreline lighting systems</li>
                        <li>Solar taxiway and apron lighting installations</li>
                        <li>Solar helipad lighting systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Remote and off-grid airport lighting projects</li>
                        <li>Airport sustainability and energy-efficient upgrades</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our solar airfield lighting base systems ensure reliable and eco-friendly airport operations.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Solar Airfield Light Base
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Optimized for solar-powered lighting systems</li>
                        <li>Efficient cable routing and component protection</li>
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
                    Our solar runway light base systems deliver reliable performance in all operational conditions.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted manufacturer of aviation and runway spares, delivering advanced solutions
                    for modern and sustainable airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable solar airfield light base systems</li>
                        <li>Reliable solar runway lighting base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airport solar lighting foundation systems</li>
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Solar Airfield Light Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a solar airfield light base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow solar airfield light bases</li>
                    <li>Deep base can solar lighting systems</li>
                    <li>Custom solar airport lighting base systems</li>
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
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h3>
                  <p className="text-black">
                    The Solar Airfield Light Base by Jetsys Defence is an essential runway spares solution for supporting
                    modern solar-powered lighting systems. With durable construction, optimized design for solar integration,
                    and reliable performance, our bases ensure efficient and sustainable airfield lighting installations.
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