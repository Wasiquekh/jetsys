import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import SEO from "@/app/common/seo";
const page = () => {
  return (
    <>
    <SEO
        pageTitle=  {
        "Aircraft Jacks – Nose Jack & Main Jack for Defence Aircraft | Jetsys Defence"
            }
        description= {
            "Looking for a nose jack & main jack? Jetsys Defence offers rugged aircraft jacks for defence use, engineered for performance and safety. Request a quote and pricing now."
            }
        /> 
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
        <div>
                  <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Nose Jack & Main Jack – Precision Aircraft Jacks by Jetsys Defence</h1>
                  <p className=" font-medium text-base">At Jetsys Defence, we engineer world-class Nose Jacks and Main Jacks designed for the maintenance and lifting of both defence and commercial aircraft. Our jacks are known for their superior stability, precision hydraulics, and safety-first design, making them ideal for military bases, MRO facilities, and aviation service workshops.
                  </p><br></br><br></br>
                  <div>
                                <Image
                                  src="/images/Nose Jack & Main Jack.png"
                                  width={500}
                                  height={1000}
                                  alt="Picture of the author"
                                />
                              </div>
                  <br></br><br></br>     
                <h2 className=" font-bold text-3xl text-[#5C5649] mb-5">Overview of Our Aircraft Jacks</h2>
                <p className=" font-medium text-base">Our Aircraft Nose & Main Jacks are developed with advanced hydraulic technology to ensure maximum reliability during critical operations. Each unit is manufactured under stringent quality control, combining strength, accuracy, and durability to support all aircraft maintenance requirements.</p>
                <p className=" font-medium text-base">They are ideal for:</p>
                <ul className="list-disc pl-5">
                        <li className="font-bold text-[#5C5649]">Defence aircraft operations</li>
                        <li className="font-bold text-[#5C5649]">Heavy-duty MRO (Maintenance, Repair & Overhaul) facilities</li>
                        <li className="font-bold text-[#5C5649]">Hangar and flight-line maintenance</li>
                      </ul>
                <br></br><br></br>
     
              <section><br></br><br></br>
            
                <div >
                  <h3 className=" font-bold text-3xl text-[#5C5649] mb-5">Key Features of Jetsys Defence Nose & Main Jacks</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li><h4 className="font-bold text-[#5C5649]">Dual Hydraulic System</h4>Includes separate low and high-pressure pumps for precise control and efficient lifting.</li>
                        <li><h4 className="font-bold text-[#5C5649]">Heavy-Duty Load Handling</h4>Supports load capacities from 35 – 40 tons, ideal for both nose and main landing gear maintenance.</li>
                        <li><h4 className="font-bold text-[#5C5649]">Robust Safety Mechanism</h4>Equipped with mechanical lock nuts, pressure gauges, and bubble-level indicators for enhanced safety.</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li><h4 className="font-bold text-[#5C5649]">Universal Compatibility</h4>Supports a range of aircraft types via interchangeable adapters and height-adjustable frames</li>
                        <li><h4 className="font-bold text-[#5C5649]">Corrosion-Resistant Construction</h4>Skydrol-resistant paint and hard-chrome-plated hydraulic pistons ensure long service life in all weather conditions.</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section><br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-6">
                    Technical Specifications (Tripod Jacks)
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
                        <tr>
                          <td className="px-4 py-2 border-b">Model Type</td>
                          <td className="px-4 py-2 border-b">Nose Jack / Main Jack – Tripod Type</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Lifting Capacity</td>
                          <td className="px-4 py-2 border-b">35 – 40 Tons</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Minimum Height</td>
                          <td className="px-4 py-2 border-b">2200 mm (86.6 inches)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Maximum Height</td>
                          <td className="px-4 py-2 border-b">5300 mm (208.6 inches)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Hydraulic Lift Stroke</td>
                          <td className="px-4 py-2 border-b">2900 mm (114 inches)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Screw Extension</td>
                          <td className="px-4 py-2 border-b">220 mm (8.7 inches)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Operating Pressure</td>
                          <td className="px-4 py-2 border-b">As per MIL-STD hydraulic standards</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Drive Type</td>
                          <td className="px-4 py-2 border-b">Manual / Pneumatic Pump</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Safety Lock Nut</td>
                          <td className="px-4 py-2 border-b">Mechanical locking with manual control</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Pressure Indicator</td>
                          <td className="px-4 py-2 border-b">Dual-scale PSI / TON gauge</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Base Design</td>
                          <td className="px-4 py-2 border-b">Adjustable tripod with ground plates</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Mobility</td>
                          <td className="px-4 py-2 border-b">Swivel casters + tow bar</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Finish</td>
                          <td className="px-4 py-2 border-b">Skydrol-resistant RAL 1028 yellow</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Applications</td>
                          <td className="px-4 py-2 border-b">Defence Aircraft, Helicopters, Commercial Jets</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Testing & Certificates</td>
                          <td className="px-4 py-2 border-b">150% Proof Load Test + Certificate of Compliance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section><br></br><br></br>
                <div >
                  <h2 className=" font-bold text-3xl text-[#5C5649] mb-5">Benefits of Using Jetsys Defence Aircraft Jacks</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li><strong className="text-[#5C5649]">Enhanced Operational Safety–</strong> Dual safety systems and locking features reduce the risk of accidents.</li>
                        <li><strong className="text-[#5C5649]">Time Efficiency–</strong> Quick setup and hydraulic precision minimize aircraft downtime.</li>
                        <li><strong className="text-[#5C5649]">Reduced Maintenance Costs –</strong>Corrosion-resistant build ensures longevity and fewer replacements.</li>
                        <li><strong className="text-[#5C5649]">Precision Lifting–</strong>Smooth hydraulic motion and bubble-level indicators guarantee accurate positioning.</li>
                        <li><strong className="text-[#5C5649]">Custom-Built for Defence –</strong>Tailored to meet defence aircraft lifting standards for reliability in critical operations.</li>
                        <li><strong className="text-[#5C5649]">Field-Ready Design–</strong>Easy mobility with tow handle and castors, perfect for hangar and tarmac use.</li>
                        <li><strong className="text-[#5C5649]">Eco-Safe Materials –</strong>Environmentally compliant hydraulic fluids and coatings.
                      </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
                <section><br></br><br></br>
                <div >
                  <h2 className=" font-bold text-3xl text-[#5C5649] mb-5">Applications in Aviation and Defence</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Fighter jets, transport aircraft, and helicopters</li>
                        <li> Air Force maintenance units</li>
                        <li>Civil aviation ground support</li>
                        <li>Defence equipment testing facilities</li> 
                      </ul>
                    </div>
                  </div>
                </div>
              </section><br></br><br></br>
              <h2 className=" font-bold text-3xl text-[#5C5649] mb-5">Nitrogen Trolley Price and Support</h2>
              <p className=" font-medium text-base">At Jetsys Defence, we provide competitive nitrogen trolley price options without compromising quality. Each unit undergoes stringent calibration and testing to meet exacting aviation standards.</p>
              <p className=" font-medium text-base">For custom configurations or bulk orders, our technical team offers end-to-end consultation, training, and after-sales support.</p>
             <section className="mt-10 mb-10">
              <div>
                <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
                  Why Choose Jetsys Defence?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">
                  <ul className="list-disc pl-5 space-y-3">
                    <li><strong className="text-[#5C5649]">Made in India – </strong>Built for the World</li>
                    <li>Certified quality assurance with 150% proof-load tests</li>
                    <li>Custom engineering for all aircraft models</li>
                  </ul>

                  <ul className="list-disc pl-5 space-y-3">
                    <li>Expert after-sales support & spare-part availability</li>
                    <li>Over a decade of trust in defence ground-support manufacturing</li>
                  </ul>
                </div>
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
