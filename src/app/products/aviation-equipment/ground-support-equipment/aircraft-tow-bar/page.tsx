import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";
export const metadata: Metadata = {
  title:
    "Aircraft Tow Bar | Towbars for Defence & Commercial Aircraft | Jetsys",
  description:
    "Aircraft tow bars by Jetsys Defence for towing and pushback: multi-head, portable and custom variants, shear-pin protection, 25–75 kN application-dependent capacity.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/aircraft-tow-bar",
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
                        <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Aircraft Tow Bar – Robust Towbar Solutions by Jetsys Defence</h1>
                        <p className=" font-medium text-base">Engineered for ground support equipment (GSE) operations, the Jetsys Defence Aircraft Tow Bar delivers safe, efficient towing for defence and commercial fleets. Built with high-strength alloys, precision towbar heads, and ground handling wheels, it ensures smooth pushback and towing with reduced nose-gear stress.
                        </p><br></br><br></br>
                       <div>
                                    <Image
                                      src="/images/Aircraft Tow Bar.png"
                                      width={500}
                                      height={1000}
                                      alt="Jetsys Defence aircraft tow bar"
                                      className=" m-auto mb-6"
                                    />
                                    <OrderNowContactButton />
                                  </div>
                  <br></br>
                  <section className="bg-white mb-10">
                    <div className="max-w-6xl mx-auto px-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#5C5649] mb-4">
                        What Is an Aircraft Tow Bar?
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        An aircraft tow bar connects the nose landing gear to a tow tractor so the aircraft can be pushed back or towed between the hangar, apron and flight line. The tow-head locks onto the nose gear, and shear pins and retaining pins help protect the nose landing gear and tow bar in an overload. Jetsys Defence tow bars are configured to the operator&apos;s aircraft list, from business jets to regional and narrow-body types.
                      </p>
                    </div>
                  </section>
                  <section className="bg-white" id="product-variants">
                    <div className="max-w-6xl mx-auto px-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#5C5649] mb-8">
                        Product Variants
                      </h2>

                      <div className="space-y-8">
                        
                        <div>
                          <h3 className="font-bold text-[#5C5649]">
                            Multi-Head Towbar
                          </h3>
                          <p className="mt-1 text-gray-700">
                            One body, multiple interchangeable tow-heads—ideal for mixed aircraft fleets.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-[#5C5649]">
                            Portable / Fly-Away Towbar
                          </h3>
                          <p className="mt-1 text-gray-700">
                            Lightweight, compact, and suitable for deployments or remote bases.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-[#5C5649]">
                            Snap-Back Option
                          </h3>
                          <p className="mt-1 text-gray-700">
                            Energy-absorbing design that helps mitigate peak loads during tight turns.
                          </p>
                        </div>

                     <div>
  <h3 className="font-bold text-[#5C5649]">
    Custom Towbar
  </h3>
  <p className="mt-1 text-gray-700">
    Project-specific geometry, material, paint code, and ground handling wheel package.
  </p>
</div>

                      </div>
                    </div>
                  </section>      
                      <section><br></br><br></br>
        <div >
          <h2 className=" font-bold text-3xl text-[#5C5649] mb-5">Key Features of the Aircraft Tow Bar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-black space-y-4">
              <ul className="list-disc pl-5">
                <li><strong className="block font-bold text-[#5C5649]">Operator safety:</strong>Shear pins and retaining pins help protect the NLG and towbar in overload events.</li>
                <li><strong className="block font-bold text-[#5C5649]">Fleet flexibility:</strong>Multi-head towbar options reduce total SKUs for mixed fleets.</li>
                <li><strong className="block font-bold text-[#5C5649]">Lower downtime: </strong>Rugged wheels and sealed bearings support frequent ramp use.</li>
              </ul>
            </div>
            <div className="text-black space-y-4">
              <ul className="list-disc pl-5">
                <li><strong className="block font-bold text-[#5C5649]">Precision connection:</strong>Positive-lock tow-head design reduces play and wear.</li>
                <li><strong className="block font-bold text-[#5C5649]">Weather & fluid resistant:</strong>Corrosion-protected finish and Skydrol-resistant coatings.</li>
                <li><strong className="block font-bold text-[#5C5649]">Mobility on ramp:</strong>Towable design with balanced weight distribution for easy positioning.</li>
                </ul>
            </div>
          </div>
        </div>
        </section>
        <section><br /><br />
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-[#5C5649] mb-6">
              Technical Specifications
            </h2>

            <p className="text-gray-700 mb-4">
              Values below are representative; configurations can be customized to your aircraft list and operating environment.
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
                    <td className="px-4 py-2 border-b">Towbar Type</td>
                    <td className="px-4 py-2 border-b">Fixed / Multi-Head / Portable / Snap-back (optional)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Aircraft Class</td>
                    <td className="px-4 py-2 border-b">Business Jet / Regional / Narrow-Body (select Wide-Body on request)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Rated Push–Pull Capacity</td>
                    <td className="px-4 py-2 border-b">25–75 kN (application-dependent)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Tube Material</td>
                    <td className="px-4 py-2 border-b">High-strength alloy steel or aluminum (project-specific)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Tow-Eye Size</td>
                    <td className="px-4 py-2 border-b">Ø 3.0 in (standard), others on request</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Tow-Head Interface</td>
                    <td className="px-4 py-2 border-b">Positive-lock with integrated shear pins & retaining pin</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Height Adjustment</td>
                    <td className="px-4 py-2 border-b">Undercarriage with free-floating axle; shim/spacer options</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Ground Handling Wheels</td>
                    <td className="px-4 py-2 border-b">Heavy-duty, impact-absorbing, sealed bearings</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Overall Length</td>
                    <td className="px-4 py-2 border-b">3.0–4.5 m (model-dependent)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Storage / Transport</td>
                    <td className="px-4 py-2 border-b">Towbar trolley or rack (optional)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Finish</td>
                    <td className="px-4 py-2 border-b">Corrosion-protected, Skydrol-resistant industrial coating</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Operating Temperature</td>
                    <td className="px-4 py-2 border-b">-20°C to +55°C (extended ranges available)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Compliance</td>
                    <td className="px-4 py-2 border-b">GSE good practices; factory functional test & QC records</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Accessories</td>
                    <td className="px-4 py-2 border-b">Telecoupler, extension kits, shock absorber, tow-head rack</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
                <section>
                <br></br>
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <strong className="text-[#5C5649]">Defence bases & squadrons –</strong> Towing and repositioning aircraft between hangars, dispersal areas and the flight line.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">MRO & line maintenance –</strong> Moving aircraft in and out of hangars for inspections and servicing.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">OEM trials & testing –</strong> Ground movement of aircraft during trials and test programmes.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Charter & regional airlines –</strong> Pushback and towing support for small to mid-size fleets.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            <section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Maintenance & Care (Quick Guide)</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="text-[#5C5649]">Inspect after use –</strong> Check tow-head latch, shear pins, retaining pins, and wheels for wear.
          </li>
          <li>
            <strong className="text-[#5C5649]">Lubricate moving parts –</strong> Grease pins, bushings, and couplers as per maintenance intervals.
          </li>
          <li>
            <strong className="text-[#5C5649]">Clean & store dry –</strong> Wipe coatings, avoid fluid residue, and protect seals from chemical exposure.
          </li>
          <li>
            <strong className="text-[#5C5649]">Periodic checks –</strong> Confirm tow-eye wear limits and torque on critical fasteners.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence Towbars?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="text-[#5C5649]">Built for reliability –</strong>
            Heavy-duty tube construction with integrated shear protection helps safeguard the nose landing gear during pushback and towing.
          </li>
          <li>
            <strong className="text-[#5C5649]">Multi-aircraft compatibility –</strong>
            Interchangeable tow-heads and optional adapters fit business jets, regional aircraft, narrow-body, and selected wide-body platforms.
          </li>
          </ul>
          </div>
          <div className="text-black space-y-4">
          <ul className="list-disc pl-5" >
          <li>
            <strong className="text-[#5C5649]">Fast, safe handling –</strong>
            Ergonomic undercarriage with free-floating axle and impact-absorbing ground handling wheels improves maneuverability and operator safety.
          </li>
          <li>
            <strong className="text-[#5C5649]">Maintenance-friendly –</strong>
            Modular design with accessible pins, bushings, and seals allows quick inspection and lower lifecycle cost.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Related Ground Support Equipment</h2>
    <p className="text-black leading-relaxed mb-6">
      The tow bar is part of the Jetsys Defence{" "}
      <Link href="/products/aviation-equipment/ground-support-equipment" className="underline">
        ground support equipment
      </Link>{" "}
      range, alongside the{" "}
      <Link href="/products/aviation-equipment/ground-support-equipment/nose-jack" className="underline">
        nose jack
      </Link>{" "}
      and{" "}
      <Link href="/products/aviation-equipment/ground-support-equipment/nitrogen-trolley" className="underline">
        nitrogen trolley
      </Link>
      . For loading and handling tasks, see our{" "}
      <Link href="/products/aviation-equipment/ground-handling-equipment" className="underline">
        ground handling equipment
      </Link>
      . Share your aircraft list and we will recommend a tow bar configuration.
    </p>
    <OrderNowContactButton />
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
