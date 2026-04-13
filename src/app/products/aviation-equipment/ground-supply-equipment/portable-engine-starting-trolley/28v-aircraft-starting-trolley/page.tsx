import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "28V Aircraft Starting Trolley | Aircraft GPU by Jetsys Defence",
  description:
    "Explore the 28V Aircraft Starting Trolley by Jetsys Defence for reliable aircraft engine starting, mobile ground support, rugged 28V DC power delivery, and custom aviation GPU solutions.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/28v-aircraft-starting-trolley",
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
                28V Aircraft Starting Trolley – High-Performance Aircraft Start-Up by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The 28V Aircraft Starting Trolley by Jetsys Defence is a high-performance aviation ground support solution engineered for dependable aircraft engine starting and airside operational efficiency. Built for demanding aviation and defence environments, this 28V aircraft engine starting trolley combines rugged construction, mobile usability, and reliable power support for modern aircraft operations. Jetsys Defence delivers dependable aviation equipment designed for hangars, ramps, maintenance facilities, and mission-critical air support requirements.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/28V Aircraft Starting Trolley.png"
                  width={500}
                  height={1000}
                  alt="28V Aircraft Starting Trolley"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Product Overview Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                  <p className="text-black">
                    The 28V Aircraft Starting Trolley is designed to provide reliable external starting support for aircraft that require stable 28V DC aircraft power system performance during engine start procedures. This heavy-duty 28V aircraft start trolley supports faster turnaround, better operational readiness, and reduced stress on onboard aircraft power systems. Whether used as a 28V aircraft start unit, 28V aircraft starting cart, or 28V engine starting power unit, this trolley is built to deliver practical mobility and dependable aviation support.
                  </p>
                </div>
              </section>

              {/* What is 28V Aircraft Starting Trolley Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What is 28V Aircraft Starting Trolley?</h3>
                  <p className="text-black">
                    A 28V Aircraft Starting Trolley is a portable external aircraft starting and power support system used to assist engine starting and ground operations for aircraft requiring 28V electrical support. It is commonly positioned within aviation ground handling and maintenance operations as a 28V aviation starting trolley, aircraft 28V start trolley, engine starting trolley aircraft, or 28V aircraft ground power unit.
                  </p>
                  <p className="text-black mt-4">
                    In industry usage, related product pages also frame these systems as 28V DC start units, 28V aircraft GPU, ground power unit aircraft, and mobile aircraft start units for hangars, congested ramps, and gate support.
                  </p>
                </div>
              </section>

              {/* Key Features Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of 28V Aircraft Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable 28V Starting Performance</h4>
                          Provides dependable power output for aircraft engine start procedures requiring stable 28V support.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Mobile Trolley-Mounted Design</h4>
                          Built on a rugged wheeled platform for easy movement across hangars, aprons, ramps, and maintenance zones.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation-Grade Construction</h4>
                          Designed for repeated operational use in demanding civil, defence, and military environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fast Aircraft Start Support</h4>
                          Helps ground crews perform smoother and more efficient aircraft start operations.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty Electrical Connections</h4>
                          Equipped for secure connection handling and consistent operational reliability.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Suitable for Defence Operations</h4>
                          An excellent fit for defence 28V aircraft starting trolley, military 28V aircraft start unit, and fighter aircraft 28V starting trolley requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Build Capability</h4>
                          Available as a custom 28V aircraft starting trolley based on aircraft type, connector requirement, and operating environment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications Section - Table Format */}
              <section><br></br><br></br>
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of 28V Aircraft Starting Trolley</h2>
                  <p className="text-gray-700 mb-6">
                    Jetsys Defence can provide the 28V Aircraft Starting Trolley in different configurations based on customer application and aircraft support requirements.
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
                          <td className="px-4 py-2 border-b">Electrical Configuration</td>
                          <td className="px-4 py-2 border-b">System Type: 28V Aircraft Starting Trolley; Power Class: 28V engine starting power unit; Support Category: 28V DC aircraft power system; Application: Aircraft engine starting and external ground power support; Use Case: Aircraft electrical starting system 28V</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Structure and Mobility</td>
                          <td className="px-4 py-2 border-b">Trolley-mounted portable design; Heavy-duty wheelbase for airside maneuverability; Compact layout for easier handling in operational areas; Suitable for hangar, ramp, gate, and maintenance use</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Build and Safety</td>
                          <td className="px-4 py-2 border-b">Aviation-focused rugged construction; Secure cable and connector arrangement; Operator-friendly control layout; Built for repeated deployment cycles</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Configuration Options</td>
                          <td className="px-4 py-2 border-b">Cable length options available; Connector customization available; Platform-specific adaptation possible; Suitable for civil, defence, and mission-based operations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Variants Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of 28V Aircraft Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Standard 28V Aircraft Start Trolley</h4>
                          Designed for regular aircraft engine start support in routine aviation operations.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Heavy-Duty 28V Aircraft Engine Starting Trolley</h4>
                          Built for intensive duty cycles and frequent operational use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Compact 28V Aviation Starting Trolley</h4>
                          A smaller-footprint option for easier storage and maneuverability.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom 28V Aircraft Starting Cart</h4>
                          Configured according to aircraft compatibility, cable specification, and mission requirements.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence and Military 28V Aircraft Start Unit</h4>
                          Developed for rugged operating conditions and field-readiness.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of 28V Aircraft Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Improves Aircraft Readiness</h4>
                          Supports reliable pre-flight preparation and faster aircraft turnaround.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reduces Load on Aircraft Power Systems</h4>
                          Provides external start assistance that helps reduce dependency on onboard electrical reserves.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Enhances Ground Crew Efficiency</h4>
                          Portable design makes movement, positioning, and operation simpler and faster.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Supports Demanding Aviation Use</h4>
                          Suitable for civil aviation, maintenance operations, defence facilities, and specialized aircraft support tasks.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Delivers Practical Mobility</h4>
                          The trolley-based structure supports convenient deployment across multiple ground handling zones.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of 28V Aircraft Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Engine Start Support</h4>
                          Used for engine starting on aircraft requiring dependable 28V external support.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation Ground Support Equipment</h4>
                          A valuable part of 28V aviation ground support equipment for daily operational use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft Ground Power Operations</h4>
                          Useful where a 28V aircraft ground power unit or 28V aircraft GPU is needed for aircraft support.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Defence and Military Aviation</h4>
                          Suitable for defence air operations, military fleets, and field aviation support.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Maintenance and Overhaul Facilities</h4>
                          Supports aircraft service, inspection, testing, and readiness functions in MRO environments.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Ramp, Apron, and Hangar Use</h4>
                          Designed for convenient use in active aircraft handling and ground service zones.
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
                  <p className="text-black">
                    The 28V Aircraft Starting Trolley from Jetsys Defence is designed with a practical control interface for better operator visibility and smoother equipment handling. The system can be configured for easy monitoring, efficient connection checks, and dependable operational control during aircraft start support. This helps improve safety, simplify troubleshooting, and maintain stable support during demanding aircraft ground operations. Industry product language around 28V GPUs also emphasizes continuous DC power support, aircraft system simulation voltage, and operation in hangars, ramps, and busy gate areas, which aligns well with this positioning.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for 28V Aircraft Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aviation-Focused Engineering</h4>
                          Jetsys Defence develops aviation equipment with a focus on reliability, durability, and field usability.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Strong Product Quality</h4>
                          Each 28V aircraft engine starting trolley is built for demanding operational conditions and dependable long-term use.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Manufacturing Support</h4>
                          As a trusted 28V aircraft starting trolley manufacturer, Jetsys Defence offers tailored solutions for specific aircraft and use cases.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Practical Industry Understanding</h4>
                          We understand the needs of aircraft operators, maintenance teams, aviation support crews, and defence users.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Complete Solution Support</h4>
                          From product selection to configuration planning, Jetsys Defence helps customers choose the right system for their operation.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Trusted Supply Partner</h4>
                          If you need a 28V aircraft start trolley supplier, 28V aircraft GPU supplier, or aviation 28V ground power unit manufacturer, Jetsys Defence is ready to support your requirement.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section><br></br><br></br>
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Order Our Product System from Jetsys Defence</h3>
                  <p className="text-black mb-4">
                    Choose Jetsys Defence for a rugged, reliable, and high-performance 28V Aircraft Starting Trolley built for aviation and defence applications. Whether you need a standard 28V aircraft start unit, a heavy-duty 28V aircraft starting cart, or a custom 28V aircraft starting trolley, we provide dependable product solutions designed for real operational demands.
                  </p>
                  <p className="text-black font-medium">
                    Contact Jetsys Defence to get details on configuration options, technical suitability, availability, and 28V aircraft starting trolley price for your application. Our team is ready to support your aircraft ground start and power system requirements with a durable and performance-focused aviation solution.
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