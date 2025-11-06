import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";
export const metadata: Metadata = {
  title:
    "Thermal Vacuum Chamber | Space Simulation System – Jetsys Defence",
  description:
    "Jetsys Defence Thermal Vacuum Chamber simulates extreme space temperature & pressure for satellite, component & payload testing. Ideal for thermal vacuum qualification.",
  alternates: {
    canonical: "https://www.jetsys.co.in/solutions/indegenization/indegenization-equipments/thermal-vacuum-chamber",
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
                                <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Thermal Vacuum Chamber (TVC) – Indigenization by Jetsys Defence</h1>
                                 <p className=" font-medium text-base"> Jetsys Defence designs and manufactures Thermal Vacuum Chambers that accurately simulate space conditions—deep-vacuum and extreme thermal cycling—for qualification, screening and R&D. Our TVC systems support satellite subsystems, payloads, optics and electronics where a space simulation vacuum chamber and thermal vacuum testing chamber are essential.
                               </p><br></br><br></br>
        
                              <div>
    <Image
                    src="/images/Thermal Vacuum Chamber.png"
                    width={500}
                    height={1000}
                    alt="Picture of the author"
                    className=" m-auto mb-6"
                  />
                  <OrderNowContactButton />
                                      </div><br></br><br></br>
<section className="w-full bg-white">
  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-4">
    What is a Thermal Vacuum Chamber?
  </h2>

  <p className="text-black leading-relaxed mb-6">
    A Thermal Vacuum Chamber (TVC) creates a high-vacuum environment while cycling temperatures to
    replicate on-orbit conditions. By combining cryogenic shrouds, thermal platens, and precise
    control, a TVC validates flight hardware for survivability, performance, and outgassing
    compliance—exactly what a space simulation vacuum chamber or thermal vacuum testing chamber
    must achieve.
  </p>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Features of Jetsys Defence TVC
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              High Vacuum Performance
            </strong>
            &nbsp;Pumping architecture engineered to achieve high-vacuum levels suitable for space simulation and bake-out workflows.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Wide Thermal Envelope
            </strong>
            &nbsp;Cryo-shrouds and heated platens provide deep-cold to high-temperature profiles with programmable ramps and soaks.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Uniform Thermal Radiation
            </strong>
            &nbsp;Multi-zone shrouds and emissivity-controlled liners ensure stable, repeatable heat flux to the test article.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Flexible Chamber Geometry
            </strong>
            &nbsp;Available in cylindrical or rectangular formats, from benchtop to field-constructed sizes with payload carts and vibration-safe mounts.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Clean, Low-Outgassing Build
            </strong>
            &nbsp;UHV-compatible seals, surface finishes, and vacuum-rated cabling protect optics and sensitive electronics.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Data & Controls
            </strong>
            &nbsp;Integrated HMI/SCADA, recipe control, alarms, historian logs, and DAQ for thermocouples, RTDs and vacuum pressure.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Feedthrough-Rich Interfaces
            </strong>
            &nbsp;Electrical, fiber-optic, RF and fluid feedthroughs with configurable panels and blanking flanges.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Serviceability & AMC
            </strong>
            &nbsp;Indigenized sub-assemblies, local spares and preventive maintenance plans ensure high uptime and lower lifecycle cost.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Benefits of Thermal Vacuum Chamber (TVC)
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Flight-Like Confidence
            </strong>
            &nbsp;Validates thermal balance, survivability and functional performance before spacecraft integration.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">
              Lower Program Risk
            </strong>
            &nbsp;Identifies thermal design gaps, vacuum leaks, contamination risks and component drift early in the cycle.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Repeatability at Scale
            </strong>
            &nbsp;Recipe-driven cycles, high sensor density and automation provide consistent, auditable results.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">
              Cost & Lead-Time Advantage
            </strong>
            &nbsp;Indigenized build, local support and rapid spare availability reduce total cost of ownership.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">
              Clean, Safe Operations
            </strong>
            &nbsp;Low-outgassing interiors, efficient pumping and fume-safe heating ensure a clean test environment.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section><br></br><br></br>
<section>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">
      Technical Specifications – Thermal Vacuum Chamber
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
            <td className="px-4 py-2 border-b">Vacuum Level</td>
            <td className="px-4 py-2 border-b">
              High vacuum capability (typ. ≤ 1×10⁻⁶ torr class), vacuum gauges &amp; RGA (optional)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Temperature Range</td>
            <td className="px-4 py-2 border-b">
              Approx. −185 °C to +165 °C (shroud); platen options up to +200 °C (config-dependent)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Thermal Hardware</td>
            <td className="px-4 py-2 border-b">
              LN₂ cryo-shroud, multi-zone radiant panels, heated/cooled platen, sun-sim IR (optional)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Control &amp; DAQ</td>
            <td className="px-4 py-2 border-b">
              PLC/HMI with recipe control, alarms, historian; multi-channel thermocouples/RTDs; pressure logging
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Uniformity</td>
            <td className="px-4 py-2 border-b">
              Multi-zone control with validated gradients; emissivity-tuned surfaces for stable radiation
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Chamber Geometry</td>
            <td className="px-4 py-2 border-b">
              Cylindrical or rectangular; benchtop to large field-constructed systems
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Feedthroughs</td>
            <td className="px-4 py-2 border-b">
              Electrical (low/high-power), RF, fiber-optic, fluid/gas, viewports; configurable bulkheads
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Clean Build</td>
            <td className="px-4 py-2 border-b">
              Low-outgassing materials, vacuum-rated cabling, cleanable liners; contamination monitoring (optional)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Pumping Train</td>
            <td className="px-4 py-2 border-b">
              Dry scroll/roots + turbomolecular/cryopumps; isolation valves, burst discs, safety interlocks
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Safety &amp; Interlocks</td>
            <td className="px-4 py-2 border-b">
              Door locks, e-stops, vacuum/temperature permissives, over-temp/over-pressure protection
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Utilities</td>
            <td className="px-4 py-2 border-b">
              LN₂ supply, GN₂ purge, power as per site; chiller (if configured)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Documentation</td>
            <td className="px-4 py-2 border-b">
              IQ/OQ protocols, calibration certificates, FAT/SAT reports, operator &amp; maintenance manuals
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Services</td>
            <td className="px-4 py-2 border-b">
              Installation, training, AMC/PMC, calibration &amp; on-site service across India
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-sm text-gray-600 mt-2">
      <strong>Note:</strong> Ranges are indicative; final specs are tailored per test article size,
      thermal load and cleanliness class.
    </p>
  </div>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Applications of Thermal Vacuum Chamber (TVC)
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Satellite Subsystems & Payloads
            </strong>
            &nbsp;Qualification for avionics, power systems, structures, mechanisms, optics and sensors.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">
              Space Electronics & Materials
            </strong>
            &nbsp;Functional tests, burn-in, survivability analysis and coating performance studies.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Vacuum Bake-Out & Contamination Control
            </strong>
            &nbsp;Drive off volatiles and contaminants prior to spacecraft integration.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">
              Thermal Cycling & Balance Tests
            </strong>
            &nbsp;Used for qualification and acceptance campaigns with programmable profiles.
          </li>

          <li>
            <strong className="font-bold text-[#5C5649]">
              Optical Assemblies
            </strong>
            &nbsp;Evaluate stray light behavior, alignment stability and thermal drift.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence for TVAC?
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Aerospace-Grade Engineering, Made in India
            </strong>
            &nbsp;Localized design with faster lead times and reduced lifecycle cost—delivering space-class performance without import delays.
          </li>
          
          <li>
            <strong className="font-bold text-[#5C5649]">
              Through-Lifecycle Support
            </strong>
            &nbsp;Factory acceptance, commissioning, operator training, calibration, and rapid-response AMC to keep test campaigns on schedule.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Customization that Fits Your Mission
            </strong>
            &nbsp;From smallsat test benches to large integration chambers with IR sun-sim, cold plates, payload carts and high-density DAQ.
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
