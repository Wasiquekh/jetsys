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
         "Automated Pitot Leak Tester for Aircraft | Jetsys Defence Aviation Tools"
            }
        description= {
            "Discover Jetsys Defence Automated Pitot Leak Tester for precise aircraft pressure testing. Explore complete kits, best prices, and reliable aviation performance."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
<div>
        <h1 className=" text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Automated Pitot Leak Tester — Precision Air Data Integrity by Jetsys Defence</h1>
         <p className=" font-medium text-base">The Automated Pitot Leak Tester from Jetsys Defence is a compact, aviation-grade solution engineered to verify pitot and static system integrity with fast, automated leak checks and RVSM-ready accuracy. Built for MROs, line maintenance, and flight test teams, it delivers reliable results with minimal operator input—reducing turnaround time while elevating safety and compliance
       </p><br></br><br></br>
       <div>
  <Image
                  src="/images/Automated Pitot Leak Tester.png"
                  width={500}
                  height={1000}
                  alt="Picture of the author"
                />
              </div>
  <section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
    <p className="text-black mb-6">
      Designed around robust pressure control and smart automation, our tester simulates flight conditions to 
      validate pitot and static lines, sensors, and associated instruments. Automated sequences, real-time readings, 
      and safe pressure trapping make it ideal for ramp and hangar operations.
    </p>

    <h4 className="font-bold text-[#5C5649] mb-3">Highlights at a Glance</h4>
    <ul className="list-disc pl-5 text-black space-y-2">
      <li>Automated leak test profiles with single-button operation</li>
      <li>RVSM-ready accuracy for confident compliance</li>
      <li>Remote/cockpit operation option for solo workflows</li>
      <li>Fast stabilization & rate control for repeatable results</li>
      <li>Power-loss safety with trapped-pressure protection</li>
      <li>Low maintenance design, annual calibration ready</li>
    </ul>
  </div>
</section>

                          <br></br><br></br>
                                 <div className=" w-full flex  justify-between">
                                            <Image
                                              src="/images/Tactical Engineering.svg"
                                              width={160}
                                              height={234}
                                              alt="Picture of the author"
                                              className=" w-[120px]"
                                            />
                                            <Image
                                              src="/images/System Integration.svg"
                                              width={160}
                                              height={234}
                                              alt="Picture of the author"
                                              className=" w-[120px]"
                                            />
                                            <Image
                                              src="/images/Built for Endurance.svg"
                                              width={160}
                                              height={234}
                                              alt="Picture of the author"
                                              className=" w-[120px]"
                                            />
                                            <Image
                                              src="/images/Modular Flexibility.svg"
                                              width={160}
                                              height={234}
                                              alt="Picture of the author"
                                              className=" w-[120px]"
                                            />
                                            <Image
                                              src="/images/Laser Precision.svg"
                                              width={160}
                                              height={234}
                                              alt="Picture of the author"
                                              className=" w-[120px]"
                                            />
                                          </div><br></br>
  <section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Automated Pitot Leak Tester</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Automated Control & Profiles</h4>
            Pre-loaded test profiles guide operators through pitot and static leak checks with consistent ramp rates 
            and pass/fail thresholds for repeatable results.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Real-Time Monitoring & Data Capture</h4>
            High-resolution sensors provide live pressure, altitude, airspeed, and rate readings—ideal for audit trails, 
            QA records, and documentation.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Safety & Protection</h4>
            Emergency vent-to-ground, automatic exit from leak mode on large leaks, and pressure-trap on power loss protect 
            sensitive aircraft instrumentation.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Portable, Field-Ready Design</h4>
            Lightweight enclosure, integrated pumps, and aviation quick-connect fittings enable rapid setup in hangar or 
            ramp environments.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications</h2>

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
            <td className="px-4 py-2 border-b">Static Port Pressure (Ps)</td>
            <td className="px-4 py-2 border-b">
              0.1–42 inHg; resolution 0.001 inHg; accuracy ±0.002 inHg
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Altitude Function</td>
            <td className="px-4 py-2 border-b">
              –4,000 to 60,000 ft; res. 1 ft; accuracy ±2 ft @ 0 ft / ±6 ft @ 35,000 ft / ±12 ft @ 50,000 ft
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Climb/Descent Rate</td>
            <td className="px-4 py-2 border-b">
              0 to ±25,000 ft/min; res. 1 ft/min; accuracy ±1% of rate
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Pitot Output Pressure (Pt/Qc)</td>
            <td className="px-4 py-2 border-b">
              0.1–60 inHg; res. 0.001 inHg; accuracy ±0.003 inHg
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Airspeed Function</td>
            <td className="px-4 py-2 border-b">
              0–650 kt; res. 0.1 kt; accuracy ±0.5 kt @ 50 kt / ±0.25 kt @ 100 kt / ±0.05 kt @ 650 kt
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Mach Function</td>
            <td className="px-4 py-2 border-b">
              0.00–3.00 M; res. 0.001 M; accuracy ±0.001 above 0.20 M
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Rate Control (Airspeed)</td>
            <td className="px-4 py-2 border-b">0–500 kt/min programmable</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Automation &amp; Profiles</td>
            <td className="px-4 py-2 border-b">
              Pre-configured leak and RVSM checks; single-button sequences
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Safety Functions</td>
            <td className="px-4 py-2 border-b">
              Auto exit on large leak, pressure trap on power loss, manual vent-to-ground
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Interfaces</td>
            <td className="px-4 py-2 border-b">
              Local panel; optional remote/cockpit pendant; RS-232 / IEEE-488 (configurable)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Power Requirement</td>
            <td className="px-4 py-2 border-b">90–260 VAC, 47–440 Hz; ≤150 VA</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Operating Environment</td>
            <td className="px-4 py-2 border-b">0 to 50 °C; 5–100% RH (non-condensing)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Calibration</td>
            <td className="px-4 py-2 border-b">Annual calibration recommended</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Compliance Readiness</td>
            <td className="px-4 py-2 border-b">Supports RVSM-level accuracy workflows</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Enclosure</td>
            <td className="px-4 py-2 border-b">
              Portable, lightweight, maintenance-friendly design
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-700 mt-4">
      Note: Specs shown are indicative of a typical Jetsys Defence configuration. Final ranges, accuracies,
      and interfaces can be tuned per program requirements.
    </p>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Automated Pitot Leak Tester</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Line & Base Maintenance</h4>
            Quick pitot/static integrity checks after component replacement or troubleshooting.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Avionics & ADC Validation</h4>
            Supports altimeters, airspeed/Mach indicators, VSI, transponders, and ADS-B calibration workflows.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Flight Test & R&D</h4>
            Stable, high-resolution control for precise characterization, testing, and documentation.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Training Labs</h4>
            Intuitive UI and guided profiles reduce learning curve and operator error for educational environments.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Automated Pitot Leak Tester Kit</h3>

    <h4 className="font-bold text-[#5C5649] mb-3">What’s Included (Typical)</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>Main unit with integrated pumps and pressure controllers</li>
          <li>Remote operation pendant for cockpit use (optional)</li>
          <li>Quick-connect pitot/static hoses and adaptors set</li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>Power cable, calibration certificate, and user guide</li>
          <li>Protective case for transport and storage</li>
        </ul>
      </div>
    </div>

    <br></br>
    <h4 className="font-bold text-[#5C5649] mb-3">Optional Add-Ons</h4>
    <ul className="list-disc pl-5 text-black space-y-2">
      <li>Extended hose/adaptor sets by aircraft family</li>
      <li>Data export and report templates for maintenance records</li>
      <li>Custom profiles for fleet-specific workflows</li>
    </ul>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Automated Pitot Leak Tester Price</h3>
    <p className="text-black">
      Pricing depends on configuration (channels, interfaces, kit contents, calibration bundle). 
      Request a quote from Jetsys Defence to receive the best Automated Pitot Leak Tester price 
      tailored to your fleet and maintenance environment.
    </p>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Automated Pitot Leak Tester</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Ultra-Precise Digital Pressure Control</h4>
            High-accuracy sensors and micro-controlled regulators simulate altitude and airspeed with extremely fine resolution—ideal for sensitive Pitot-Static and Air Data systems.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Fast Leak Detection & Stabilization</h4>
            Automated pressure stabilization, leak-rate calculation, and digital readouts reduce test time, eliminate human error, and improve pre-flight/post-maintenance reliability.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Safe for Modern Avionics & ADIRS Systems</h4>
            Over-pressure protection, controlled ramp-up/down curves, internal relief valves, and auto-shutoff safeguard static ports, pitot probes, and air data computers.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Rugged, Flight-Line Ready Hardware</h4>
            Corrosion-resistant casing, shock-proof electronics, quick-connect hoses, and a dust-sealed control panel ensure reliability on runways, hangars, and military bases.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Easy Touch-Screen Operation</h4>
            Intuitive interface with test presets, stored profiles, and on-screen pass/fail results—reducing technician effort and training time.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Optional PC/Tablet Connectivity</h4>
            USB/Wi-Fi data download, calibration logs, and digital test reports enhance traceability and maintenance record quality.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Customizable for Any Aircraft Fleet</h4>
            Configurable pressure ranges, hose/adaptor kits, and dual-channel pitot-static capability for civil and military platforms.
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
