import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import SEO from "@/app/common/seo";
import Image from "next/image";
const page = () => {
  return (
    <>
    <SEO
        pageTitle=  {
         "Totem Tray Harmonization Tool | Runway Alignment – Jetsys Defence"
            }
        description= {
            "Jetsys Defence Totem Tray Harmonization Tool ensures precise runway beam alignment for safer aircraft landings. Ideal airfield lighting harmonization with ICAO compliance."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
    <div>
                            <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Totem Tray Harmonization Tool – Indigenized Runway Alignment System</h1>
                             <p className=" font-medium text-base">Jetsys Defence introduces a fully indigenized Totem Tray Harmonization Tool, engineered for precise runway light alignment and optical harmonization.
                           Designed for defence and commercial aviation, it enables technicians to accurately align runway approach lights, PAPI, VASI, touchdown lighting, and other AGL systems without heavy setup, external targets, or weather dependencies.
                           </p>
                           <p className=" font-medium text-base">This system improves operational readiness, reduces maintenance time, and provides superior accuracy over conventional mechanical alignment procedures.
                          </p><br></br><br></br>
                          <div>
                       <Image
                                       src="/images/Totem Tray Harmonization Tool.png"
                                       width={500}
                                       height={1000}
                                       alt="Picture of the author"
                                     />
                                  </div><br></br><br></br>
<section className="w-full bg-white">

  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-4">
    What is a Totem Tray Harmonization Tool?
  </h2>

  <p className="text-black leading-relaxed mb-6">
    A Totem Tray Harmonization Tool is a precision-engineered optical alignment instrument used to set
    the beam angle and convergence of runway lighting equipment. It projects a calibrated optical
    reference that technicians use to adjust light trays to exact ICAO-defined angles.
  </p>

  <h3 className="text-xl sm:text-2xl font-semibold text-[#5C5649] mb-3">
    Why is Harmonization Required?
  </h3>

  <ul className="list-disc pl-6 text-black leading-relaxed space-y-2">
    <li>Ensures every runway light emits a correct beam height and axis</li>
    <li>Critical for night operations and low-visibility landings</li>
    <li>Prevents uneven illumination zones that affect pilot visibility</li>
    <li>Helps airports maintain international compliance</li>
  </ul>

</section>        
      <div className=" w-full flex  justify-between">
                                                              
       </div><br></br><br></br>
<section className="w-full bg-white">

  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-8">
    Key Features – Totem Tray Harmonization Tool
  </h2>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-black leading-relaxed">

    {/* LEFT SIDE */}
    <section className="space-y-6">

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Precision Optical System
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Collimated reference for stable beam datum (azimuth &amp; elevation)</li>
          <li>Fine-pitch micrometer adjusters for sub-degree tuning (±0.1° class)</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Alignment &amp; Control
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dual-axis alignment with clear sighting reticle/telescope</li>
          <li>Repeatable tray positioning for uniform runway light patterns</li>
          <li>Works with LED, halogen, inset, elevated, PAPI/VASI fixtures</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Build &amp; Power
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aircraft-grade aluminium chassis; weather-resistant gasketing</li>
          <li>Rechargeable battery pack or external 12 V input</li>
          <li>Shock-protected optics and hard carry case</li>
        </ul>
      </section>

    </section>

    {/* RIGHT SIDE */}
    <section className="space-y-6">

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Usability &amp; Safety
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>One-person setup; no long-range targets or aircraft levelling</li>
          <li>Tool-less field adjustments; quick clamp/lock interfaces</li>
          <li>Non-intrusive to flight ops; minimal closure time</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Compliance &amp; Documentation
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Alignment aides mapped to ICAO-style photometric aims</li>
          <li>Includes calibration sheet, user checklist, and maintenance log</li>
        </ul>
      </section>

    </section>

  </section>

</section><br></br><br></br>
<section>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">
      Technical Specifications – Totem Tray Harmonization Tool
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
            <td className="px-4 py-2 border-b">Construction</td>
            <td className="px-4 py-2 border-b">Aircraft-grade aluminium body</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Optical System</td>
            <td className="px-4 py-2 border-b">Collimated optical emitter with calibrated reference</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Viewing Method</td>
            <td className="px-4 py-2 border-b">Telescope / sighting scope alignment</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Beam Alignment Range</td>
            <td className="px-4 py-2 border-b">Horizontal &amp; vertical adjustment (azimuth + elevation)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Accuracy</td>
            <td className="px-4 py-2 border-b">±0.1° or better (field dependent)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Power Source</td>
            <td className="px-4 py-2 border-b">Rechargeable battery pack / external 12V</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Operating Temperature</td>
            <td className="px-4 py-2 border-b">–20°C to +55°C</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Handling</td>
            <td className="px-4 py-2 border-b">Single-person portable deployment</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Compatible Lights</td>
            <td className="px-4 py-2 border-b">PAPI, VASI, edge lights, approach lights, inset lights</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Environmental Use</td>
            <td className="px-4 py-2 border-b">Works indoors (hangar) or outdoors</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Certification Support</td>
            <td className="px-4 py-2 border-b">ICAO &amp; military precision guidance requirements (compliance-oriented)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section><br></br><br></br>
<section className="w-full bg-white">

  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-8">
    Applications of Totem Tray Harmonization Tool
  </h2>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-black leading-relaxed">

    {/* LEFT SIDE */}
    <section className="space-y-6">

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Airport Operations & Maintenance
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Routine harmonization of runway/taxiway edge lights</li>
          <li>Touchdown zone, centerline, approach lighting alignment</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Installation & Commissioning
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>New AGL projects: rapid tray setup and verification</li>
          <li>Post-repair/post-upgrade optical re-aiming</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Periodic Audit & Compliance
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Alignment checks for safety audits and AMC contracts</li>
          <li>Restoration of beam profile after ground works or resurfacing</li>
        </ul>
      </section>

    </section>

    {/* RIGHT SIDE */}
    <section className="space-y-6">

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Defence Airbases
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Expeditionary strips and permanent bases; quick field calibration</li>
          <li>Night/low-visibility readiness assurance</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          OEMs & MROs
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fixture manufacturing QA</li>
          <li>MRO bench alignment validation</li>
        </ul>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Training & Skill Development
        </strong>
        <ul className="list-disc pl-6 space-y-2">
          <li>Technician training for optical alignment best practices</li>
        </ul>
      </section>

    </section>

  </section>

</section><br></br><br></br>

<section className="w-full bg-white">

  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-8">
    Benefits of Jetsys Defence Harmonization System
  </h2>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-black leading-relaxed">

    {/* LEFT SIDE */}
    <section className="space-y-6">

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Faster Runway Maintenance
        </strong>
        <p>
          Technicians align lighting trays without removing fixtures or installing ground targets.
        </p>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          High Accuracy & Repeatability
        </strong>
        <p>
          Optical referencing maintains identical beam angles across an entire runway.
        </p>
      </section>

    </section>

    {/* RIGHT SIDE */}
    <section className="space-y-6">

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          100% Indigenous Development
        </strong>
        <p>
          No foreign dependency and long-term spare availability through Jetsys Defence.
        </p>
      </section>

      <section>
        <strong className="text-[#5C5649] text-base sm:text-lg font-semibold">
          Prevents Operational Downtime
        </strong>
        <p>
          Rapid alignment helps avoid delays in flight operations, especially in busy airports.
        </p>
      </section>

    </section>

  </section>

</section><br></br><br></br>
<section className="w-full bg-white">

  <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5649] mb-8">
    Why Choose Jetsys Defence for Totem Tray Harmonization Tool
  </h2>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-black leading-relaxed">

    {/* LEFT SIDE */}
    <section>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong className="text-[#5C5649]">Engineered for Precise Aircraft Weapon Alignment</strong><br/>
          Jetsys Defence designs the Totem Tray Harmonization Tool to accurately align aircraft gun sights,
          targeting pods, and weapon reference points—ensuring firing systems are harmonized with the aircraft’s
          optical and electronic line of sight.
        </li>

        <li>
          <strong className="text-[#5C5649]">Built for Fighter, Trainer & Transport Platforms</strong><br/>
          Supports harmonization on military aircraft, enabling rapid, repeatable and error-free calibration after
          maintenance or weapon system replacement.
        </li>

        <li>
          <strong className="text-[#5C5649]">High Mechanical Accuracy & Rigid Construction</strong><br/>
          Aerospace-grade alloys and precision machining ensure stable reference geometry and long service life
          under airfield conditions.
        </li>

        <li>
          <strong className="text-[#5C5649]">Fast Setup for Flight-Line Operations</strong><br/>
          Lightweight, portable and easy to position under aircraft pylons, enabling harmonization directly on the
          apron or hangar floor.
        </li>
      </ul>
    </section>

    {/* RIGHT SIDE */}
    <section>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong className="text-[#5C5649]">Repeatable & Reliable Measurement</strong><br/>
          Ensures consistent alignment results across sorties, improving mission accuracy and reducing targeting
          deviation.
        </li>

        <li>
          <strong className="text-[#5C5649]">Compatible with Standard Ground Equipment</strong><br/>
          Interfaces with weapon rails, pylons, launcher assemblies and pods—ideal for MRO tasks and routine checks.
        </li>

        <li>
          <strong className="text-[#5C5649]">Made & Supported in India</strong><br/>
          Local manufacturing, spares, calibration help and technician training—no dependency on foreign tooling.
        </li>

        <li>
          <strong className="text-[#5C5649]">Trusted by Defence Maintenance Units</strong><br/>
          Used in aviation MRO units, airbases and defence workshops for harmonization checks and pre-flight readiness.
        </li>
      </ul>
    </section>

  </section>

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
