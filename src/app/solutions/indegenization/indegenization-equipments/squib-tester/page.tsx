import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import SEO from "@/app/common/seo";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";
const page = () => {
  return (
    <>
    <SEO
        pageTitle=  {
         "Squib Tester for Aircraft Systems | Jetsys Defence Igniter Tester"
            }
        description= {
            "Jetsys Defence Squib Tester ensures safe squib igniter testing without firing. Ideal for aircraft squib firing circuit checks, continuity testing, and maintenance safety."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
  <div>
                              <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Squib Tester – Indigenized Igniter Testing System for Aircraft Safety</h1>
                               <p className=" font-medium text-base">Jetsys Defence presents an indigenously developed Squib Tester designed for safe testing of electro-explosive devices used in aircraft and defence systems.
                              This advanced tester measures continuity, firing circuit integrity, and resistance values without initiating ignition, ensuring complete operator safety during maintenance and system checks.
                             </p>
                             <p className=" font-medium text-base">Built for military and commercial aviation fleets, our Squib Tester provides precise diagnostics for mission-critical systems such as ejection seats, countermeasure deployment, rocket ignition sequences, fire suppression bottles, airbag triggers, and explosive bolts.
                            </p><br></br><br></br>
                            <div>
              <Image
                              src="/images/Squib Tester.png"
                              width={500}
                              height={1000}
                              alt="Picture of the author"
                              className=" m-auto mb-6"
                            />
                            <OrderNowContactButton />
                                    </div><br></br><br></br>
<section className="w-full bg-white">
  
  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-4">
    What is a Squib Tester?
  </h2>

  <p className="text-black leading-relaxed mb-6">
    A Squib Tester (also known as an Aircraft Squib Tester, Squib Igniter Tester, or Squib Firing Circuit Tester)
    is an ultra-safe electronic instrument used to verify the electrical health of explosive components
    without triggering detonation. It applies a controlled micro-current—far below the firing threshold—to
    measure resistance, continuity, and wiring faults.
  </p>

  <h3 className="text-xl sm:text-2xl font-semibold text-[#5C5649] mb-3">
    Why Squib Testing Is Critical
  </h3>

  <ul className="list-disc pl-6 text-black leading-relaxed space-y-2">
    <li>Ensures ejection seats, explosive valves, and deployment systems fire correctly when needed</li>
    <li>Prevents accidental ignition during maintenance</li>
    <li>Detects broken wiring, incorrect harness routing, stray voltages, and degraded igniters</li>
    <li>Prevents catastrophic aircraft or crew safety failures</li>
    <li>Supports defence readiness and lifecycle reliability</li>
  </ul>

</section>     
<br></br><br></br>
                                          
         <section>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Features of Jetsys Defence Squib Tester
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Ultra-Safe Testing</strong>
            &nbsp;Current-limited design prevents squib firing during checks.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Ultra-Safe Testing</strong>
            &nbsp;Fail-safe protection and zero risk of accidental ignition while measuring.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">High-Accuracy Measurement</strong>
            &nbsp;Precision micro-ohm resistance readings for reliable diagnostics.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">High-Accuracy Measurement</strong>
            &nbsp;Detects short/open circuits, leakage, and stray voltage conditions.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Military-Grade Design</strong>
            &nbsp;Rugged, shock-resistant housing suited for field and workshop use.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Military-Grade Design</strong>
            &nbsp;Compatible with major aircraft platforms and EED families.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">High-Accuracy Measurement</strong>
            &nbsp;Instant, stable readings on a large, easy-to-read digital display.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Military-Grade Design</strong>
            &nbsp;Portable, battery-operated configuration ideal for flightline operations.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Operator-Friendly</strong>
            &nbsp;Single-person operation for quick turnarounds.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Operator-Friendly</strong>
            &nbsp;4-wire (Kelvin) test lead configuration for precise low-resistance tests.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Operator-Friendly</strong>
            &nbsp;Digital calibration and automation support to streamline procedures.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Operator-Friendly</strong>
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
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Applications of Squib Tester
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Aircraft Safety Systems</strong>
            &nbsp;Used for ejection seats to ensure reliable ignition during emergency deployment.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Aircraft Safety Systems</strong>
            &nbsp;Validates canopy severance devices for safe pilot exit operations.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Aircraft Safety Systems</strong>
            &nbsp;Checks emergency fire bottle squib cartridges to ensure rapid discharge.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Aircraft Safety Systems</strong>
            &nbsp;Used for flare and countermeasure deployment verification.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">Rocket & Missile Systems</strong>
            &nbsp;Performs igniter circuit continuity and resistance checks.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Rocket & Missile Systems</strong>
            &nbsp;Validates stage-separation charges for mission-critical sequencing.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Rocket & Missile Systems</strong>
            &nbsp;Tests safety and arming circuits for correct electrical parameters.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">Maintenance & Diagnostics</strong>
            &nbsp;Used for continuity and firing-circuit validation in on-ground inspections.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Maintenance & Diagnostics</strong>
            &nbsp;Supports pre-flight and post-storage safety inspections.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Maintenance & Diagnostics</strong>
            &nbsp;Essential for depot-level electrical testing of explosive devices.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">Defence & Aerospace Manufacturing</strong>
            &nbsp;Ensures production quality assurance for squibs and cartridges.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Defence & Aerospace Manufacturing</strong>
            &nbsp;Used for acceptance testing and periodic compliance verification.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section><br></br><br></br>
<section>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Benefits of a Squib Tester
    </h3>

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
            &nbsp;Allows full circuit diagnostics without triggering the squib, ensuring safe repeatable checks.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Accurate Fault Detection</strong>
            &nbsp;Identifies wiring faults, high resistance, stray voltage, or defective cartridges before activation.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Pre-Flight Assurance</strong>
            &nbsp;Ensures mission-critical systems like ejection seats, canopy severance, fire bottles, and igniters are operational.
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
            <strong className="font-bold text-[#5C5649]">Standards Compliance</strong>
            &nbsp;Supports OEM procedures, aviation safety norms, and explosive ordnance regulations.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section><br></br><br></br>
<section>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence of Squib Tester
    </h3>

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
