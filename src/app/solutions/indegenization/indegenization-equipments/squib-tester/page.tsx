import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";
export const metadata: Metadata = {
  title:
    "Aircraft Squib Tester | Squib Circuit & Igniter Testing | Jetsys",
  description:
    "Squib tester by Jetsys Defence. Checks continuity and resistance of aircraft squib and igniter firing circuits with a current-limited test below the firing threshold.",
  alternates: {
    canonical: "https://www.jetsys.co.in/solutions/indegenization/indegenization-equipments/squib-tester",
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
                              <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Aircraft Squib Tester – Indigenized Squib &amp; Igniter Circuit Testing System</h1>
                               <p className=" font-medium text-base">Jetsys Defence presents an indigenously developed Squib Tester designed for safe testing of electro-explosive devices used in aircraft and defence systems.
                              This advanced tester measures continuity, firing circuit integrity, and resistance values without intentionally initiating the device, supporting safer maintenance and system checks.
                             </p>
                             <p className=" font-medium text-base">Built for military and commercial aviation fleets, our Squib Tester provides precise diagnostics for mission-critical systems such as ejection seats, countermeasure deployment, rocket ignition sequences, fire suppression bottles, airbag triggers, and explosive bolts.
                            </p><br></br><br></br>
                            <div>
              <Image
                              src="/images/Squib Tester.png"
                              width={500}
                              height={1000}
                              alt="Jetsys Defence aircraft squib tester"
                              className=" m-auto mb-6"
                            />
                            <OrderNowContactButton />
                                    </div><br></br><br></br>
<section className="w-full bg-white">

  <p className="text-black leading-relaxed mb-3">
    Squib testing measures bridgewire resistance and continuity in a squib, initiator or its firing
    circuit, using a test current held far below the level that would initiate the device.
  </p>

  <p className="text-black leading-relaxed mb-4">
    The full guide covers how the measurement works, what it measures, which standards apply and how
    to select a failsafe instrument:{" "}
    <Link href="/resources/squib-testing" className="font-semibold text-[#5C5649] underline">
      Squib Testing for Aircraft and Defence Systems
    </Link>.
  </p>

</section>
<br></br><br></br>
                                          
         <section>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Features of Jetsys Defence Squib Tester
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Current-Limited Testing</strong>
            &nbsp;Test current is limited below the firing threshold during checks.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Fail-Safe Current Limiting</strong>
            &nbsp;Fail-safe current limiting reduces the risk of unintended initiation while measuring.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">High-Accuracy Measurement</strong>
            &nbsp;Precision micro-ohm resistance readings for reliable diagnostics.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Fault Detection</strong>
            &nbsp;Detects short/open circuits, leakage, and stray voltage conditions.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Rugged Design</strong>
            &nbsp;Rugged, shock-resistant housing suited for field and workshop use.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Broad Compatibility</strong>
            &nbsp;Compatible with major aircraft platforms and EED families.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Clear Digital Readout</strong>
            &nbsp;Instant, stable readings on a large, easy-to-read digital display.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Portable and Battery-Powered</strong>
            &nbsp;Portable, battery-operated configuration ideal for flightline operations.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Operator-Friendly</strong>
            &nbsp;Single-person operation for quick turnarounds.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Four-Wire Kelvin Leads</strong>
            &nbsp;4-wire (Kelvin) test lead configuration for precise low-resistance tests.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Calibration and Automation Support</strong>
            &nbsp;Digital calibration and automation support to streamline procedures.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Data Logging and Traceability</strong>
            &nbsp;Optional data logging for maintenance records and traceability.
          </li>
        </ul>
      </div>
    </div>
  </div><br></br><br></br>
</section>
 <section>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">
      Technical Specifications – Squib Tester
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
            <td className="px-4 py-2 border-b">Measurement Range</td>
            <td className="px-4 py-2 border-b">Micro-ohm to low-ohm range (model-dependent)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Test Current</td>
            <td className="px-4 py-2 border-b">Safe micro-current level, below ignition threshold</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Accuracy</td>
            <td className="px-4 py-2 border-b">High-precision digital measurement</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Display</td>
            <td className="px-4 py-2 border-b">High-visibility LCD/OLED display</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Lead Configuration</td>
            <td className="px-4 py-2 border-b">4-wire Kelvin sensing</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Power</td>
            <td className="px-4 py-2 border-b">Rechargeable battery or external DC</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Safety</td>
            <td className="px-4 py-2 border-b">Fail-safe current limiting &amp; redundant protection</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Data Storage</td>
            <td className="px-4 py-2 border-b">Local logging / USB export (optional)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Operating Temperature</td>
            <td className="px-4 py-2 border-b">–20°C to +50°C</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Use Case Compatibility</td>
            <td className="px-4 py-2 border-b">
              Squibs, igniters, explosive bolts, fire suppression cartridges, airbag initiators
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section><br></br><br></br>
    <section>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Squib Tester Applications
    </h2>

    {/*
      Each application group is named once as a heading with its own bullets.
      These were previously flat lists where the group name was repeated as a
      bold label on every bullet - "Aircraft Safety Systems" four times,
      "Maintenance & Diagnostics" three - so the labels carried no information
      and the lists read as duplicates. Same content, regrouped so each group
      sits wholly in one column.
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* LEFT COLUMN */}
      <div className="text-black space-y-6">
        <div>
          <h3 className="font-bold text-[#5C5649] mb-2">Aircraft Safety Systems</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ejection seats, to confirm reliable ignition during emergency deployment.</li>
            <li>Canopy severance devices, for safe pilot exit operations.</li>
            <li>Emergency fire bottle squib cartridges, to confirm rapid discharge.</li>
            <li>Flare and countermeasure deployment verification.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#5C5649] mb-2">Rocket &amp; Missile Systems</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Igniter circuit continuity and resistance checks.</li>
            <li>Stage-separation charges, for mission-critical sequencing.</li>
            <li>Safety and arming circuits, for correct electrical parameters.</li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-6">
        <div>
          <h3 className="font-bold text-[#5C5649] mb-2">Maintenance &amp; Diagnostics</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Continuity and firing-circuit validation during on-ground inspections.</li>
            <li>Pre-flight and post-storage safety inspections.</li>
            <li>Depot-level electrical testing of explosive devices.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#5C5649] mb-2">Defence &amp; Aerospace Manufacturing</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Production quality assurance for squibs and cartridges.</li>
            <li>Acceptance testing and periodic verification.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section><br></br><br></br>
<section>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Use a Dedicated Squib Tester?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Enhanced System Safety</strong>
            &nbsp;Verifies electrical continuity and firing integrity to reduce risks of accidental misfires.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Non-Destructive Testing</strong>
            &nbsp;Allows circuit diagnostics without intentionally firing the squib, so checks can be repeated.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Accurate Fault Detection</strong>
            &nbsp;Identifies wiring faults, high resistance, stray voltage, or defective cartridges before activation.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Pre-Flight Assurance</strong>
            &nbsp;Helps confirm the firing circuits of systems like ejection seats, canopy severance, fire bottles, and igniters are electrically serviceable.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Portable & Field-Ready</strong>
            &nbsp;Technicians can test directly on aircraft or at remote maintenance locations.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Wide Compatibility</strong>
            &nbsp;Works with squibs, igniters, explosive bolts, pyrotechnic cartridges, and multiple aircraft platforms.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Reduced Downtime</strong>
            &nbsp;Rapid diagnostics improve fleet readiness and maintenance efficiency.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Procedure Support</strong>
            &nbsp;Suited to squib circuit checks carried out under OEM maintenance procedures.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section><br></br><br></br>
<section>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose the Jetsys Defence Squib Tester
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">100% Indigenous Design</strong>
            &nbsp;Engineered and manufactured in India, supporting strategic self-reliance.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Full Local Support</strong>
            &nbsp;Spare parts, repair, and calibration services available within India for faster turnaround.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Multi-Aircraft Compatibility</strong>
            &nbsp;Works with diverse aircraft platforms and igniter families across defence fleets.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Rugged and Reliable</strong>
            &nbsp;Operational in harsh climates, rough field environments, and high-vibration conditions.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Custom-Built Variants</strong>
            &nbsp;Available with multi-channel support, rack-mount configurations, and rugged field deployments.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section><br></br><br></br>
<section>
  <div>
    {/*
      The "what is squib testing" explainer that used to sit here - five
      definitional Q&As - moved to /resources/squib-testing, which now owns that
      content. The two pages were competing for the same queries. The summary
      and link near the top of this page are the only explainer this product
      page carries; keep product detail here and concepts in the guide.
    */}
    <p className="text-black leading-relaxed mt-8 mb-6">
      The Squib Tester is part of our range of{" "}
      <Link href="/solutions/indegenization/indegenization-equipments" className="underline">
        indigenized defence equipment
      </Link>
      . For aircraft system checks, see our{" "}
      <Link href="/products/aviation-equipment/ground-test-equipment" className="underline">
        ground test equipment
      </Link>
      , or{" "}
      <Link href="/contact-us" className="underline">
        contact our team
      </Link>{" "}
      to discuss your requirement.
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
