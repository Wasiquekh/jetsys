import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Mobile Hydraulic Servicing Trolley for Aircraft & Industry | Jetsys Defence",
  description:
    "Mobile hydraulic servicing trolley by Jetsys Defence for aviation, industrial, and defence use. Portable hydraulic service unit for maintenance, repair, and fluid handling systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/hydraulic-servicing-trolley/mobile-hydraulic-servicing-trolley",
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
                Mobile Hydraulic Servicing Trolley – Portable Hydraulic Service System by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Jetsys Defence presents a high-performance Mobile Hydraulic Servicing Trolley designed for aviation, aerospace, defence, and industrial applications. This advanced mobile hydraulic servicing trolley delivers reliable hydraulic system servicing with portability and efficiency.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/mobile-hydraulic-servicing-trolley.png"
                  width={500}
                  height={1000}
                  alt="Mobile Hydraulic Servicing Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The mobile hydraulic service unit is a compact and efficient solution for hydraulic servicing, testing, and maintenance. It is widely used as hydraulic mobile service equipment in aviation ground support, industrial plants, and defence environments where mobility is essential.
                  </p>
                </div>
              </section>

              {/* What is Mobile Hydraulic Servicing Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is Mobile Hydraulic Servicing Trolley?</h3>
                  <p className="text-black">
                    A mobile hydraulic servicing trolley is a portable hydraulic service unit designed for on-site hydraulic maintenance, fluid transfer, testing, and repair. It functions as a complete mobile hydraulic maintenance system for efficient servicing operations.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Mobile Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fully Mobile & Portable Design</h4>
                          Engineered as a portable hydraulic servicing trolley for easy movement and on-site operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Multi-Function Hydraulic Service Unit</h4>
                          Works as a hydraulic servicing unit mobile for testing, maintenance, and repair.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty Construction</h4>
                          Built as a heavy duty mobile hydraulic trolley for industrial and defence use.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Advanced Filtration System</h4>
                          Ensures contamination-free fluid handling in hydraulic oil servicing trolley mobile operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Compact & Efficient Operation</h4>
                          Optimized as a mobile hydraulic system servicing trolley for fast deployment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Mobile Hydraulic Servicing Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Representative configuration. We tailor each Mobile Hydraulic Servicing Trolley to your operational needs, fluids, and environmental envelope.
                  </p>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">Operating Pressure</td>
                          <td className="px-4 py-2 border-b">Suitable for industrial and aviation hydraulic systems</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Flow Rate</td>
                          <td className="px-4 py-2 border-b">Adjustable hydraulic flow control</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Filtration</td>
                          <td className="px-4 py-2 border-b">Multi-stage filtration system</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Reservoir Capacity</td>
                          <td className="px-4 py-2 border-b">Customizable hydraulic tank</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Power Source</td>
                          <td className="px-4 py-2 border-b">Electric / engine-driven options</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Mobility</td>
                          <td className="px-4 py-2 border-b">Wheeled trolley with locking mechanism</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compatibility</td>
                          <td className="px-4 py-2 border-b">Supports various hydraulic systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Mobile Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Mobile Hydraulic Servicing Trolley</h4>
                          Designed for fighter aircraft hydraulic servicing trolley mobile applications.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Mobile Hydraulic Service Unit</h4>
                          Used in heavy industrial hydraulic servicing operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Mobile Hydraulic Servicing Trolley</h4>
                          Tailored solutions based on operational requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aerospace Hydraulic Mobile Service Equipment</h4>
                          Advanced systems for aerospace and defence environments.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Mobile Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">On-Site Maintenance Flexibility</h4>
                          Allows hydraulic servicing at multiple locations without fixed setup.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reduced Downtime</h4>
                          Improves maintenance efficiency with quick deployment.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Cost-Effective Solution</h4>
                          Eliminates the need for multiple fixed servicing systems.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Versatile Application</h4>
                          Suitable for aviation, industrial, and defence hydraulic systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Mobile Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation & Aircraft Maintenance</h4>
                          Used in aircraft mobile hydraulic servicing trolley operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence & Military Systems</h4>
                          Supports defence mobile hydraulic servicing system applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Industrial Hydraulic Systems</h4>
                          Ideal for industrial mobile hydraulic service unit environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ground Support Equipment</h4>
                          Used in hydraulic ground support mobile system operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Control & Diagnostics Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Pressure monitoring gauges</li>
                        <li>Flow control valves</li>
                        <li>Hydraulic testing modules</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Diagnostic interface for system performance</li>
                        <li>Safety shut-off and overload protection</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">Ensures accuracy in mobile hydraulic repair trolley operations.</p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Mobile Hydraulic Servicing Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Leading mobile hydraulic servicing trolley manufacturer</li>
                        <li>High-quality engineering for aviation and industrial systems</li>
                        <li>Custom-built hydraulic mobile service unit solutions</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Proven reliability in defence and aerospace sectors</li>
                        <li>Trusted mobile hydraulic servicing trolley supplier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Mobile Hydraulic Servicing Trolley from Jetsys Defence</h3>
                  <p className="text-black mb-6">
                    Choose Jetsys Defence for advanced portable hydraulic servicing trolley solutions. Designed for mobility, precision, and durability in hydraulic system servicing, maintenance, and repair operations.
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