import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";
export const metadata: Metadata = {
  title:
    "Conformal Coating Removal Machine | Automated System – Jetsys Defence",
  description:
    "Jetsys Defence Conformal Coating Removal Machine delivers precise, non-destructive coating stripping. Ideal for PCBs, avionics repair & laser-based removal.",
  alternates: {
    canonical: "https://www.jetsys.co.in/solutions/indegenization/indegenization-equipments/conformal-coating-removal-machine",
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
                                <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Conformal Coating Removal Machine — Indigenization Equipment by Jetsys Defence</h1>
                                 <p className=" font-medium text-base">Get fast, precise and non-destructive removal of conformal coatings from mission-critical PCBs and avionics. Our Conformal Coating Removal Machine range covers automated, laser and hybrid systems to suit repair, rework and MRO lines—built in India for India’s defence and aerospace ecosystem.
                               </p><br></br><br></br>
                              <div>
        <Image
                        src="/images/Conformal Coating Removal Machine.png"
                        width={500}
                        height={1000}
                        alt="Picture of the author"
                        className=" m-auto mb-6"
                      />
                      <OrderNowContactButton />
                                      </div><br></br><br></br>
{/* Primary Use Cases */}
<section>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Primary Use Cases
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              PCB / Avionics Rework
            </strong>
            &nbsp;Ideal for fault isolation and component removal or replacement.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Selective Windowing
            </strong>
            &nbsp;Targets test pads, BGA/QFN edges and conformal mask windowing without board damage.
          </li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Reverse Engineering & Depot-Level Maintenance
            </strong>
            &nbsp;Suitable for LRU/SRU teardown and controlled coating removal.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Production Floor Applications
            </strong>
            &nbsp;Repeatable, recipe-driven stripping for high-throughput assemblies.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Key Benefits */}
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Benefits of Conformal Coating Removal Machine
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Selective, Non-Destructive Removal
            </strong>
            &nbsp;Protects solder mask, copper pads and neighbouring components.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Process Recipes
            </strong>
            &nbsp;Save beam power, pressure, passes, angle and dwell settings for consistency.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              ESD-Safe Work Envelope
            </strong>
            &nbsp;Grounded fixtures, ionization, antistatic nozzles and mats.
          </li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Closed-Loop Extraction
            </strong>
            &nbsp;HEPA + activated carbon filtration keeps benches clean and operator-safe.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Full Traceability
            </strong>
            &nbsp;Run logs, operator IDs, pass/fail snapshots and export-ready reporting.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Flexible Chem-Free Options
            </strong>
            &nbsp;Laser ablation and micro-abrasive modes minimize solvent use.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Indigenization Advantage */}
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Indigenization Advantage (Make in India)
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Local Engineering & Spares
            </strong>
            &nbsp;Rapid turnaround, reduced lifecycle cost and faster support.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Tailored Fixturing
            </strong>
            &nbsp;Custom jigs/fixtures for common LRUs and SRUs used by Indian platforms.
          </li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              On-Site Training & AMC
            </strong>
            &nbsp;Nationwide service with calibration and preventative health checks.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Compliance-Ready Documentation
            </strong>
            &nbsp;IQ/OQ/PQ packs, SOPs and maintenance schedules to fit your QMS.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* How the System Works */}
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      How the System Works
    </h3>

    <div className="space-y-6 text-black">
      <p>
        <strong className="font-bold text-[#5C5649]">
          Automated Conformal Coating Removal System:
        </strong>
        &nbsp;Conveyor or cell-based platform with vision alignment, programmable gantry and recipe-control.
        Ideal for medium–high throughput PCB assemblies needing operator-independent consistency.
      </p>

      <p>
        <strong className="font-bold text-[#5C5649]">
          Laser Conformal Coating Removal Machine:
        </strong>
        &nbsp;Solid-state UV laser (typically 355 nm) with galvo scanning and real-time power monitoring.
        Excellent for parylene, UV-cured epoxy and hard coats requiring micron-level selectivity.
      </p>

      <p>
        <strong className="font-bold text-[#5C5649]">
          Hybrid Micro-Abrasive Mode:
        </strong>
        &nbsp;Conductive nozzles and soft media (e.g., wheat-starch or polymer media) for acrylic,
        urethane and silicone films—maintains solder mask integrity near delicate components.
      </p>
    </div>
  </div>
</section><br></br><br></br>
<section>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">
      Technical Specifications
    </h2>

    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">Automated System</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">Laser System</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">Hybrid (Laser + Micro-Abrasive)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">Work Envelope</td>
            <td className="px-4 py-2 border-b">350×300 mm (std); up to 500×500 mm</td>
            <td className="px-4 py-2 border-b">300×300 mm (expandable)</td>
            <td className="px-4 py-2 border-b">350×300 mm</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Positioning Accuracy</td>
            <td className="px-4 py-2 border-b">±10 µm (XY), ±25 µm (Z)</td>
            <td className="px-4 py-2 border-b">±8 µm (XY), ±20 µm (Z)</td>
            <td className="px-4 py-2 border-b">±10 µm (XY), ±25 µm (Z)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Vision &amp; Alignment</td>
            <td className="px-4 py-2 border-b">Top camera, fiducial recognition, barcode/QR traceability</td>
            <td className="px-4 py-2 border-b">Dual-camera fiducial + coaxial beam camera</td>
            <td className="px-4 py-2 border-b">Same as automated</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Removal Methods</td>
            <td className="px-4 py-2 border-b">
              Programmable passes, angles, dwell; selective windowing
            </td>
            <td className="px-4 py-2 border-b">
              UV 355 nm; 3–12 W (configurable), galvo scan up to 2000 mm/s
            </td>
            <td className="px-4 py-2 border-b">
              UV 355 nm + conductive nozzle micro-abrasive
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Supported Coatings</td>
            <td className="px-4 py-2 border-b">Acrylic, Polyurethane, Silicone</td>
            <td className="px-4 py-2 border-b">Parylene, UV Epoxy, Acrylic</td>
            <td className="px-4 py-2 border-b">Acrylic, Polyurethane, Silicone, UV Epoxy (selective)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Substrate Protection</td>
            <td className="px-4 py-2 border-b">
              ESD-safe fixturing, temp and airflow guards
            </td>
            <td className="px-4 py-2 border-b">
              Closed-loop power control, area masks, thermal guard paths
            </td>
            <td className="px-4 py-2 border-b">
              Low-pressure media, mask shields
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Extraction &amp; Filtration</td>
            <td className="px-4 py-2 border-b">
              Dual-stage HEPA + carbon, enclosure negative pressure
            </td>
            <td className="px-4 py-2 border-b">
              Sealed optic path + fume extraction
            </td>
            <td className="px-4 py-2 border-b">
              Particulate + fume extraction
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Recipe Management</td>
            <td className="px-4 py-2 border-b">200+ recipes, role-based access, audit logs</td>
            <td className="px-4 py-2 border-b">200+ recipes, process logs, SPC exports</td>
            <td className="px-4 py-2 border-b">Unified recipe set</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">HMI/Software</td>
            <td className="px-4 py-2 border-b">
              15.6″ touchscreen, English/Hindi UI, CSV/PDF export
            </td>
            <td className="px-4 py-2 border-b">Same</td>
            <td className="px-4 py-2 border-b">Same</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Utilities</td>
            <td className="px-4 py-2 border-b">230 V AC, 50 Hz; 6–8 bar air (for abrasive mode)</td>
            <td className="px-4 py-2 border-b">230 V AC, 50 Hz</td>
            <td className="px-4 py-2 border-b">230 V AC, 50 Hz; 6–8 bar air</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Safety</td>
            <td className="px-4 py-2 border-b">
              Interlocks, light curtains (opt), emergency stop, ESD kit
            </td>
            <td className="px-4 py-2 border-b">
              Class-1 enclosure, interlocks, beam shutters
            </td>
            <td className="px-4 py-2 border-b">Same as respective modes</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Options</td>
            <td className="px-4 py-2 border-b">
              SMEMA conveyor, inline AOI handoff, MES connector
            </td>
            <td className="px-4 py-2 border-b">
              Multi-wavelength head, auto-focus, advanced galvo
            </td>
            <td className="px-4 py-2 border-b">
              Quick-swap heads, media dryer
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-sm text-gray-600 mt-2">
      <strong>Note:</strong> Specifications can be customized for board size, coating type and throughput targets.
    </p>
  </div>
</section><br></br><br></br>
<section>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Features of Jetsys Defence Conformal Coating Removal Machine
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">High-Precision Removal</strong>
            &nbsp;Selective stripping without damaging copper tracks, solder masks, or active components.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Multiple Removal Technologies</strong>
            &nbsp;Supports UV-laser, micro-abrasive, blade and thermal removal for acrylic, polyurethane, silicone, parylene and epoxy coatings.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Vision-Guided Alignment</strong>
            &nbsp;Fiducial recognition, pattern matching and onboard camera reduce operator dependency and maximizes repeatability.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Closed-Loop Extraction</strong>
            &nbsp;HEPA + activated carbon filtration keeps the enclosure clean and operator-safe.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Recipe-Controlled Operation</strong>
            &nbsp;Save, edit and load validated recipes—ideal for batch processing and multi-shift production.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">ESD-Safe Work Envelope</strong>
            &nbsp;Grounded fixtures, ionization, antistatic nozzles and dissipative mats protect avionics hardware.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Data Logging & Traceability</strong>
            &nbsp;Run logs, operator IDs, timestamps, job results and exportable CSV/PDF reports for audits.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Modular Fixturing</strong>
            &nbsp;Quick-change jigs for PCB sizes, LRU boards and SRU modules.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Benefits of Jetsys Defence Conformal Coating Removal Machine
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Non-Destructive Stripping</strong>
            &nbsp;Protects fine-pitch ICs, flex circuits, wire bonds and heat-sensitive components.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Consistent Quality</strong>
            &nbsp;Vision + recipe control ensures identical results across shifts and operators.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Minimal or Zero Solvent Use</strong>
            &nbsp;Avoids hazardous chemicals, fumes, smell and costly consumables.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Reduced Rework Time</strong>
            &nbsp;Fast removal for test pads, BGA edge access, failure analysis and reballing.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Lower Total Cost of Ownership</strong>
            &nbsp;Built in India with local spares, AMC, training and calibration services.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Clean & Controlled Process</strong>
            &nbsp;Negative-pressure enclosure with proper waste capture and filtration.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Easy Operator Training</strong>
            &nbsp;Touchscreen UI, presets and guided wizards minimize onboarding time.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Scalable</strong>
            &nbsp;Offered in benchtop, semi-automatic and inline high-throughput models.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Applications of Conformal Coating Removal Machines
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Avionics PCB Repair & Rework</strong>
            &nbsp;Access buried components, replace ICs or open test points.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Depot-Level Maintenance (LRU/SRU)</strong>
            &nbsp;Ideal for defence MRO workshops working with sensitive electronics.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Quality Analysis & Inspection</strong>
            &nbsp;Strip coatings for X-ray, microsectioning or defect verification.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">Production Line Support</strong>
            &nbsp;Inline variants integrate with SMT flow for selective windowing pre-test or pre-programming.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Prototype & R&D Labs</strong>
            &nbsp;Fast, selective removal supports debugging and engineering changes.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">Military & Aerospace Electronics</strong>
            &nbsp;Essential for flight-critical boards where non-destructive precision is mandatory.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="mt-10">
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence for Conformal Coating Removal Machine
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      
      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Built by an Aerospace & Defence Supplier
            </strong>
            &nbsp;Engineered for aircraft, avionics and defence-grade electronics with proven domain expertise.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Precision for Mission-Critical Hardware
            </strong>
            &nbsp;Uniform removal without damaging fine components, preserving avionics reliability.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Converts Manual to Automated Process
            </strong>
            &nbsp;Improves repeatability, consistency and speed vs chemical or mechanical hand methods.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Aviation & Defence Compliant
            </strong>
            &nbsp;Traceability, repeatability and audit-ready process control.
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="font-bold text-[#5C5649]">
              Supports Indigenization & Local Supply Chain
            </strong>
            &nbsp;Reduces dependency on foreign equipment and ensures faster spares/service cycles.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Integrated Safety & Environmental Controls
            </strong>
            &nbsp;Includes fume handling, filtration and controlled work envelope for operator safety.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              High Throughput & Mixed Assemblies
            </strong>
            &nbsp;Handles varied PCB sizes and complexity, ideal for defence repair and overhaul programs.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Full Lifecycle Support & Spares
            </strong>
            &nbsp;Backed by Jetsys’ servicing ecosystem for reduced downtime and quick maintenance.
          </li>
          <li>
            <strong className="font-bold text-[#5C5649]">
              Future-Proof Investment
            </strong>
            &nbsp;Modular design supports new coatings, process upgrades and long-term fleet sustainability.
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
