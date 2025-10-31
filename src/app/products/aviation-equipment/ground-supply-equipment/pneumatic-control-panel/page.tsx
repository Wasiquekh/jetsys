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
         "Pneumatic Control Panel – Precision Design & Manufacturers | Jetsys Defence"
            }
        description= {
            "Explore high-quality Pneumatic Control Panels by Jetsys Defence. As a leading Pneumatic Control Panel manufacturer, we deliver advanced design solutions for reliable aircraft and defence systems."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
        <div>
                                <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Pneumatic Control Panel – Precision Aircraft & Defence Solutions by Jetsys Defence</h1>
                                <p className=" font-medium text-base">The Jetsys Defence Pneumatic Control Panel is engineered for mission-critical control of actuators, valves, and sequencing logic on aircraft and defence test systems. As a specialist Pneumatic Control Panel manufacturer, we combine aerospace-grade components with robust Pneumatic Control Panel design practices to deliver accuracy, uptime, and easy service on the flight line and in the hangar.
                                </p><br></br><br></br>
                               <div>
                                          <Image
                                                          src="/images/Pneumatic Control Panel.png"
                                                          width={500}
                                                          height={1000}
                                                          alt="Picture of the author"
                                                        />
                                          </div><br></br><br></br>
                          <section>
  <h2 className="text-2xl md:text-3xl font-bold text-[#5C5649] mb-3">
    Product Overview
  </h2>
  <p  className=" font-medium text-base">
    The Jetsys Defence Pneumatic Control Panel is engineered for mission-critical control of actuators, valves, and sequencing logic on aircraft and defence test systems. As a specialist Pneumatic Control Panel manufacturer, it combines aerospace-grade components with robust design practices to deliver accuracy, uptime, and easy service on the flight line and in the hangar.
  </p>
</section>
              
                              <section>
                
            <section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Pneumatic Control Panel</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aerospace-Grade Architecture</h4>
            Precision regulators, high-cycle spool valves, and low-leak fittings ensure stable pressures and consistent actuation timing.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Smart, Serviceable Layout</h4>
            Labeled bulkhead fittings, color-coded tubing, and front-access gauges reduce maintenance time and minimize human error.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Clean, Dry Air Assurance</h4>
            Multi-stage filtration with water trap and optional desiccant dryer protects seals, actuators, and high-precision pneumatic systems.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Controls Your Way</h4>
            Manual, electro-pneumatic, or PLC-based logic with analog transducers for pressure/flow feedback, alarms, and interlocks.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Ruggedized for Defence Use</h4>
            Shock-resistant mounting, corrosion-protected hardware, and wide-temperature operation suitable for ramp and depot environments.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of Pneumatic Control Panel</h2>
    <p className="text-gray-700 mb-6">
      Representative values. Jetsys Defence custom-configures each Pneumatic Control Panel to your aircraft platform, duty cycle, and environment.
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
            <td className="px-4 py-2 border-b">Supply Pressure</td>
            <td className="px-4 py-2 border-b">4–10 bar (58–145 psi) standard; up to 16 bar (232 psi) options</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Filtration</td>
            <td className="px-4 py-2 border-b">5 &mu;m particulate + coalescing stage; optional desiccant dryer</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Regulation Accuracy</td>
            <td className="px-4 py-2 border-b">&plusmn;0.1 bar (&plusmn;1.5 psi) fine regulators; precision relief valves</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Flow Capacity</td>
            <td className="px-4 py-2 border-b">Cv 0.3–3.0 per valve (manifold-dependent)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Valve Types</td>
            <td className="px-4 py-2 border-b">2/2, 3/2, 5/2, 5/3 solenoid &amp; manual; soft-start, dump, check, shuttle</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Tubing / Fittings</td>
            <td className="px-4 py-2 border-b">Stainless steel 316L or nylon/poly tubing; push-fit or compression</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Gauges &amp; Sensors</td>
            <td className="px-4 py-2 border-b">Panel gauges, 4–20 mA / 0–10 V transducers; differential pressure sensors</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Electrical Interface</td>
            <td className="px-4 py-2 border-b">24 VDC I/O, relay outputs; PLC/IPC ready; E-stop &amp; interlock loops</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">HMI Options</td>
            <td className="px-4 py-2 border-b">Membrane panel or touchscreen with set-points, trends, and alarms</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Enclosure</td>
            <td className="px-4 py-2 border-b">Powder-coated steel or SS304/SS316, wall/floor/skid mount</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Ingress Protection</td>
            <td className="px-4 py-2 border-b">IP54 standard; IP55 / IP65 available</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Operating Temperature</td>
            <td className="px-4 py-2 border-b">−20&nbsp;°C to +55&nbsp;°C (extended ranges on request)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Noise Control</td>
            <td className="px-4 py-2 border-b">Integrated silencers and baffled exhaust manifold</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Identification</td>
            <td className="px-4 py-2 border-b">Laser-etched tags, schematic placard, hose and port IDs</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Docs &amp; Test</td>
            <td className="px-4 py-2 border-b">P&amp;ID, wiring diagram, FAT report, leak &amp; functional test, CoC</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

                </section>
      <section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Pneumatic Control Panel</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aircraft GSE Pneumatic Panel</h4>
            Sequenced extension and retraction for jacks, clamps, and fixtures with guarded controls and interlocks for maximum safety.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Environmental & Cabin Systems Panel</h4>
            Regulated, feedback-driven delivery for valves, dampers, test benches, and aerospace environmental systems.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">High-Integrity Manifold Panel</h4>
            Compact manifold blocks with integrated regulators, proportional valves, and diagnostics for fast, precise actuation.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Pneumatic Control Panel</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Repeatable Actuation</h4>
            Stable pressure and precise sequencing improve test fidelity and on-aircraft servicing.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Lower Downtime</h4>
            Service-friendly design with clear labelling, color-coded tubes, and front-access components.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Scalable Control</h4>
            From manual toggle logic to PLC-based proportional control and data logging.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Lifecycle Value</h4>
            Rugged components and clean-air architecture extend seal life and reduce leaks over time.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Design & Manufacturing Approach</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Our Pneumatic Control Panel Design Process</h4>
            Requirements capture → P&amp;ID &amp; layout → component selection → assembly → FAT (leak, function, safety) → documentation package.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">As Your Pneumatic Control Panel Manufacturer</h4>
            Controlled build with serialized components and full traceability.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Quality Assurance</h4>
            100% leak and functional verification with documented test records and traceable materials.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Typical Options for Pneumatic Control Panels</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li><h4 className="font-bold text-[#5C5649]">Proportional Regulators</h4>Closed-loop pressure/flow control with fine resolution.</li>
          <li><h4 className="font-bold text-[#5C5649]">Redundant Supply</h4>Auto changeover between dual air sources for uninterrupted operation.</li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li><h4 className="font-bold text-[#5C5649]">Pressure Hold / Bleed-Down Circuits</h4>Controlled depressurization and soft-start modules for safety.</li>
          <li><h4 className="font-bold text-[#5C5649]">Remote Monitoring</h4>Pressure trends, cycle counts, and alarm history via telemetry.</li>
          <li><h4 className="font-bold text-[#5C5649]">Rugged Enclosures</h4>Stainless housings and MIL-tone finishes for harsh defence duty.</li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Pneumatic Control Panels</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aircraft-Grade Precision & Safety</h4>
            Built for accurate, stable pressure regulation to prevent over-pressurization and ensure safe servicing of landing gear, brakes, shock struts, and hydraulic systems.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Rugged, Flight-Line Ready Construction</h4>
            Heavy-duty frames, corrosion-protected valves, vibration-proof gauges, and industrial-grade pipe fittings ensure reliable operation in extreme heat, cold, dust, and high humidity.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Leakage-Free, High-Integrity Pneumatics</h4>
            PTFE-sealed fittings, reinforced hoses, safety relief valves, and non-return circuits maintain stable airflow with zero pressure loss during servicing.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Modular & Custom-Engineered</h4>
            Panels can be configured for number of outlets, pressure ranges, filtration, moisture control, quick-couplers, and safety locks for any aircraft fleet.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Easy Service & Fast Turnaround</h4>
            Accessible layout, standard aviation fittings, and readily available spares allow quick repair to minimize flight-line downtime.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Proven on Civil & Military Platforms</h4>
            Used for tyre inflation, pneumatic tool control, nitrogen service lines, and other GSE operations on fixed-wing and rotary aircraft.
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
