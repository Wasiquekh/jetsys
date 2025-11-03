import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import SEO from "@/app/common/seo";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";
const page = () => {
  return (
    <>
    <SEO
        pageTitle=  {
         "Aircraft Looms, Cables & Harnesses – Precision Aviation Wiring | Jetsys Defence"
            }
        description= {
            "Explore high-reliability Aircraft Looms, Cables & Harnesses by Jetsys Defence. Our aviation-grade cables & harnesses ensure superior performance, durability, and safety for modern aircraft systems."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
      <div>
                        <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Aircraft Looms, Cables & Harnesses by Jetsys Defence</h1>
                        <p className=" font-medium text-base">Jetsys Defence designs and manufactures Aircraft Looms, Cables & Harnesses for defence and commercial aviation. Engineered for harsh flight-line and in-service environments, our aviation-grade cables & harnesses deliver reliable power, signal integrity, and long service life across airframe, engine, avionics, and landing-gear systems.
                        </p><br></br><br></br>
                       <div>
                            <Image
                               src="/images/Aircraft Looms, Cables & Harnesses.png"
                             width={500}
                           height={1000}
                           alt="Picture of the author"
                           className=" m-auto mb-6"
                          />
                          <OrderNowContactButton />
                                  </div>
                    <section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">

        <p className="text-black">
          Our Aircraft Looms, Cables & Harnesses combine optimized conductor selection, high-temperature insulation, EMI/EMC shielding, and robust strain-relief to ensure fault-free operation. From lightweight fly-by-wire bundles to engine-bay high-temp looms, we tailor every assembly to your platform, routing, and maintenance philosophy.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Platforms –</strong>
            Fixed-wing, rotary-wing, UAV, and mission-system applications.
          </li>
          <li>
            <strong className="text-[#5C5649]">Environments –</strong>
            Cabin, fuselage, wing, nacelle, gear bays, and avionics bays.
          </li>
          <li>
            <strong className="text-[#5C5649]">Deliverables –</strong>
            Build-to-print or build-to-spec with full traceability and documentation.
          </li>
        </ul>

      </div>
    </div>
  </div>
</section>                   
        <section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Aircraft Looms Cables Harnesses</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Aerospace-grade materials –</strong>
            Silver-plated copper or high-strength copper alloy conductors paired with high-temp, fluid-resistant insulation for reliable service.
          </li>
          <li>
            <strong className="text-[#5C5649]">Signal integrity & EMC –</strong>
            Shielded pairs/triads, twisted constructions, and optimized grounding minimize crosstalk and emissions for clean data links.
          </li>
          <li>
            <strong className="text-[#5C5649]">Robust mechanics –</strong>
            Heat-shrink boots, backshells, over-braid/over-mould options, strain-relief, and anti-chafe sleeves enhance durability.
          </li>
          <li>
            <strong className="text-[#5C5649]">Maintainability –</strong>
            Laser marking, schematics, and breakout IDs simplify troubleshooting and reduce MTTR on the ramp and in the depot.
          </li>
          <li>
            <strong className="text-[#5C5649]">Built-in quality –</strong>
            Process controls, 100% electrical test, and serialized reports support airworthiness records and audits.
          </li>
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
      Representative values. Jetsys Defence custom-engineers Aircraft Looms, Cables & Harnesses to your environmental, electrical, and routing requirements.
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
            <td className="px-4 py-2 border-b">Conductor Options</td>
            <td className="px-4 py-2 border-b">SPC copper / high-strength alloy; gauge from 30&nbsp;AWG to 2&nbsp;AWG</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Insulations</td>
            <td className="px-4 py-2 border-b">PTFE / ETFE / XL-ETFE / cross-linked polymer; low-smoke options</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Temperature Range</td>
            <td className="px-4 py-2 border-b">-55°C to +200°C (application-dependent)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Voltage Classes</td>
            <td className="px-4 py-2 border-b">28&nbsp;VDC, 115&nbsp;VAC 400&nbsp;Hz, 270&nbsp;VDC, and signal-level circuits</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Impedance Control</td>
            <td className="px-4 py-2 border-b">50/75 Ω coax; 90/100/120 Ω differential pairs (data, bus)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Shielding</td>
            <td className="px-4 py-2 border-b">Foil + tinned copper braid (≥85% coverage) with drain wire</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Jacket / Over-braid</td>
            <td className="px-4 py-2 border-b">FEP, PVDF, aramid/metallic braids; anti-scuff sleeves</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Seal & Strain Relief</td>
            <td className="px-4 py-2 border-b">Heat-shrink boots, potting, grommets, environmental backshells</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Connectors</td>
            <td className="px-4 py-2 border-b">Circular, rectangular, RF, high-density, contact systems per specification</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Marking / ID</td>
            <td className="px-4 py-2 border-b">Laser-marked wire IDs, harness labels, QR/serial traceability</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Testing (100%)</td>
            <td className="px-4 py-2 border-b">Continuity, insulation resistance, hipot, shorts/opens, wiring map</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Documentation</td>
            <td className="px-4 py-2 border-b">BOM, wiring list, form-board drawing, test report, COC</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Quality</td>
            <td className="px-4 py-2 border-b">Controlled build with in-process inspections & final acceptance</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants & Capabilities</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Airframe looms –</strong>
            Closed or open-bundle designs for fuselage, wings, tail, and cabin systems with optimized routing and weight.
          </li>
          <li>
            <strong className="text-[#5C5649]">Engine & nacelle harnesses –</strong>
            High-temperature, vibration-resistant builds with fluid- and abrasion-resistant jacketing.
          </li>
          <li>
            <strong className="text-[#5C5649]">Avionics & mission systems –</strong>
            Impedance-controlled bundles (ARINC, CAN, Ethernet), RF/coax runs, and precision sensor wiring.
          </li>
          <li>
            <strong className="text-[#5C5649]">Landing gear & actuation –</strong>
            Flexible looms with strain-relief and environmental sealing for gear bays and actuator systems.
          </li>
          <li>
            <strong className="text-[#5C5649]">Over-moulded assemblies –</strong>
            Sealed terminations for contamination-prone locations, improving ingress protection and service life.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Aircraft Looms, Cables & Harnesses</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">Reliability –</strong> Stable electrical performance across thermal cycling, vibration, and ageing.</li>
          <li><strong className="text-[#5C5649]">Service efficiency –</strong> Clear IDs and documentation reduce troubleshooting time and MTTR.</li>
          <li><strong className="text-[#5C5649]">Weight optimization –</strong> Smart material and conductor selection lowers mass without compromising durability.</li>
          <li><strong className="text-[#5C5649]">Lifecycle value –</strong> Rugged construction and maintainable architecture reduce total cost of ownership.</li>
          <li><strong className="text-[#5C5649]">Rapid induction –</strong> Build-to-print capability accelerates retrofit and replacement programs.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Aircraft Looms, Cables & Harnesses</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">Power distribution –</strong> Primary distribution, return paths, and distribution boxes.</li>
          <li><strong className="text-[#5C5649]">Flight controls & sensors –</strong> Includes feedback, health-monitoring, and stability systems.</li>
          <li><strong className="text-[#5C5649]">Avionics networks –</strong> Data bus, Ethernet, RF, and coax infrastructure.</li>
          <li><strong className="text-[#5C5649]">Engine systems –</strong> Controls, ignition, and FADEC interfaces.</li>
          <li><strong className="text-[#5C5649]">Landing gear –</strong> Instrumentation, brake systems, and actuator wiring.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence for Aircraft Looms, Cables & Harnesses
    </h2>
    <div  className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Indigenous design & engineering –</strong>
            All assemblies are engineered in-house with aerospace-grade quality, precise routing, and weight-optimized architecture.
          </li>
          <li>
            <strong className="text-[#5C5649]">International-standard materials –</strong>
            High-temperature insulations, abrasion-resistant jackets, EMI/RFI shielding, and sealed backshells ensure long operational life in harsh aviation environments.
          </li>
          <li>
            <strong className="text-[#5C5649]">Build-to-print & custom capability –</strong>
            Supports OEM drawings, reverse-engineering of legacy fleets, rapid prototyping, and mission-specific harness layouts.
          </li>
          </ul>
          </div>
          <div className="text-black space-y-4">
            <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Complete traceability & documentation –</strong>
            Laser-marked wire IDs, inspection reports, continuity checks, and certification packages for maintenance and airworthiness authorities.
          </li>
          <li>
            <strong className="text-[#5C5649]">Faster induction & reduced downtime –</strong>
            Plug-and-play assemblies with precise connectors reduce installation time and simplify troubleshooting.
          </li>
          <li>
            <strong className="text-[#5C5649]">Proven in defence & civil programs –</strong>
            Deployed on fixed-wing, rotary-wing, UAV, and trainer platforms with trusted reliability, vibration resilience, and long service lives.
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
