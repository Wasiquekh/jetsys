import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Taxiway Lighting Base | Jetsys Defence Runway Spares",
  description:
    "Explore taxiway lighting base by Jetsys Defence for airport lighting systems with durable construction, secure mounting, and reliable taxiway lighting performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base/taxiway-lighting-base",
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
                Taxiway Lighting Base – Runway Spares by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Taxiway Lighting Base by Jetsys Defence is a precision-engineered runway spares solution designed for
                secure installation and long-term performance of taxiway lighting systems. Built with high-strength materials
                and aviation-grade standards, our bases ensure accurate fixture alignment, reliable cable protection, and
                durability in demanding airport environments. Our taxiway lighting base is ideal for modern airport
                infrastructure, supporting safe and efficient aircraft ground movement.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/taxiway-lighting-base.png"
                  width={500}
                  height={1000}
                  alt="Taxiway Lighting Base by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Taxiway Lighting Base? */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Taxiway Lighting Base?
                  </h3>
                  <p className="text-black mb-4">
                    A taxiway lighting base is a structural component used to mount and support taxiway lighting fixtures,
                    including inset and elevated lights. It also houses electrical connections and ensures proper cable routing.
                  </p>
                  <p className="text-black">
                    This system is widely used for: Taxiway lighting base installation, Airfield taxiway light base systems,
                    Airport taxiway lighting foundation systems, Taxiway light base can systems.
                  </p>
                </div>
              </section>

              {/* Types of Taxiway Lighting Base */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Taxiway Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    Jetsys Defence offers advanced runway spares solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">1. Shallow Taxiway Lighting Base</h4>
                          A shallow taxiway lighting base designed for installations with limited pavement depth, ensuring
                          quick and efficient setup.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">2. Deep Base Can for Taxiway Lighting</h4>
                          A durable taxiway lighting base can used for heavy-duty applications requiring deeper installation
                          and enhanced protection.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">3. Inset Taxiway Lighting Base</h4>
                          Specialized taxiway lighting base systems for inset light installations in taxiways and apron areas.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">4. Custom Taxiway Lighting Base Systems</h4>
                          Tailor-made airport taxiway lighting base systems designed for specific infrastructure requirements.
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
                    Applications of Taxiway Lighting Base
                  </h3>
                  <p className="text-black mb-4">
                    The taxiway lighting base from Jetsys Defence is widely used in:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Taxiway edge and centreline lighting systems</li>
                        <li>Apron and holding point lighting installations</li>
                        <li>Airport ground movement guidance systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Airfield infrastructure development projects</li>
                        <li>Maintenance and upgrade of taxiway lighting systems</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our airfield taxiway lighting base systems ensure safe and efficient aircraft movement.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Taxiway Lighting Base
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-strength and corrosion-resistant construction</li>
                        <li>Precision-engineered design for accurate fixture mounting</li>
                        <li>Efficient cable routing and protection</li>
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
                    Our taxiway light base systems deliver reliable performance in all operational conditions.
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
                    Jetsys Defence is a trusted manufacturer of aviation and runway spares, delivering high-quality solutions
                    for airport infrastructure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Durable taxiway lighting base systems</li>
                        <li>Reliable airfield taxiway light base solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Advanced airport lighting foundation systems</li>
                        <li>Custom-built solutions for aviation applications</li>
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
                    Taxiway Lighting Base Price & Availability
                  </h3>
                  <p className="text-black mb-4">
                    The price of a taxiway lighting base depends on size, material, and application requirements.
                    Jetsys Defence offers customized solutions including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Shallow taxiway lighting bases</li>
                    <li>Deep base can taxiway lighting systems</li>
                    <li>Custom airport taxiway lighting base systems</li>
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
                    The Taxiway Lighting Base by Jetsys Defence is an essential runway spares solution for ensuring stable,
                    safe, and efficient taxiway lighting installations. With durable construction, precision design, and
                    reliable performance, our bases support modern airport lighting systems with long service life.
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