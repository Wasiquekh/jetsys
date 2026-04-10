import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Pneumatic Filtration Panel for Aviation | Jetsys Defence Systems",
  description:
    "High efficiency pneumatic filtration panel by Jetsys Defence for aviation and defence. Reliable compressed air filtration system with multi-stage industrial performance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/pneumatic-control-panel/pneumatic-filtration-panel",
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
                Pneumatic Filtration Panel – Aviation Grade by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence introduces a high-performance Pneumatic Filtration Panel designed for aviation, aerospace, and defence applications. Our advanced compressed air filtration system ensures clean, dry, and contaminant-free air for critical pneumatic operations in aircraft and ground support systems.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/pneumatic-filtration-panel.png"
                  width={500}
                  height={1000}
                  alt="Pneumatic Filtration Panel – Aviation Grade by Jetsys Defence"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Product Overview
                  </h2>
                  <p className="text-black mb-4">
                    The Pneumatic Filtration Panel is a robust industrial air filtration panel engineered to deliver reliable air purification in demanding environments. Built with precision, this air filtration control panel supports high-pressure pneumatic systems across aviation and military sectors.
                  </p>
                </div>
              </section>

              {/* What is Pneumatic Filtration Panel? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is Pneumatic Filtration Panel?
                  </h2>
                  <p className="text-black mb-4">
                    A Pneumatic Filtration Panel is an integrated pneumatic air filter system that removes moisture, oil, and particulates from compressed air. It is a vital component in any air filter panel system used in aircraft pneumatic systems and defence equipment.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Pneumatic Filtration Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* LEFT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Stage Filtration System</h4>
                          Advanced multi stage pneumatic filtration system for superior air purity.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Efficiency Performance</h4>
                          Designed as a high efficiency pneumatic filtration system for critical aviation use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy Duty Construction</h4>
                          Rugged heavy duty air filtration panel for long operational life.
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Customizable Design</h4>
                          Available as custom pneumatic filtration panel to meet specific mission requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace & Defence Ready</h4>
                          Optimized for aerospace pneumatic filtration system and military air filtration system applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Specifications of Pneumatic Filtration Panel
                  </h2>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="px-4 py-2 border-b">Filtration Type</td><td className="px-4 py-2 border-b">Multi-stage filtration</td></tr>
                        <tr><td className="px-4 py-2 border-b">Flow Capacity</td><td className="px-4 py-2 border-b">Customizable as per requirement</td></tr>
                        <tr><td className="px-4 py-2 border-b">Operating Pressure</td><td className="px-4 py-2 border-b">High-pressure compatible</td></tr>
                        <tr><td className="px-4 py-2 border-b">Filtration Efficiency</td><td className="px-4 py-2 border-b">Up to 99.9% contaminant removal</td></tr>
                        <tr><td className="px-4 py-2 border-b">Material</td><td className="px-4 py-2 border-b">Corrosion-resistant industrial-grade metal</td></tr>
                        <tr><td className="px-4 py-2 border-b">Mounting Type</td><td className="px-4 py-2 border-b">Panel-mounted / modular</td></tr>
                        <tr><td className="px-4 py-2 border-b">Application</td><td className="px-4 py-2 border-b">Aircraft pneumatic filtration system, defence, industrial</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Variants of Pneumatic Filtration Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Industrial Pneumatic Filtration Panel</li>
                        <li>Defence Pneumatic Filtration System</li>
                        <li>Aircraft Pneumatic Filtration System</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Compressed Air Filter Panel</li>
                        <li>Aviation Pneumatic Filter Panel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Pneumatic Filtration Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Ensures clean and dry compressed air</li>
                        <li>Enhances lifespan of pneumatic equipment</li>
                        <li>Reduces maintenance costs</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Improves system reliability and safety</li>
                        <li>Ideal for compressed air filtration panel for industry</li>
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
                    Applications of Pneumatic Filtration Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Aircraft pneumatic systems</li>
                        <li>Aerospace ground support equipment</li>
                        <li>Military air systems</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Industrial compressed air filtration</li>
                        <li>Defence pneumatic control panels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Control & Diagnostics
                  </h2>
                  <p className="text-black">
                    The air filtration control panel includes advanced monitoring systems for pressure, flow, and filtration status. Integrated diagnostics ensure real-time performance tracking and preventive maintenance alerts.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence for Pneumatic Filtration Panel
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Leading pneumatic filtration panel manufacturer</li>
                        <li>Trusted pneumatic filtration panel supplier</li>
                        <li>Custom-built solutions for defence and aviation</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High-quality and tested industrial systems</li>
                        <li>Expertise in industrial pneumatic filter system</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Order Pneumatic Filtration Panel from Jetsys Defence
                  </h2>
                  <p className="text-black">
                    Get high-performance pneumatic filtration system tailored to your requirements. Contact Jetsys Defence today for reliable industrial pneumatic filtration panel solutions designed for aviation and defence sectors.
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