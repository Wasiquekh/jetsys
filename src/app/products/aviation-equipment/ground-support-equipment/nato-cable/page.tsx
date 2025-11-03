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
        "NATO Cable – Military-Grade Cables & NATO Slave Connectors | Jetsys Defence"
            }
        description= {
            "Discover high-performance NATO Cable solutions by Jetsys Defence. Our durable cables and NATO slave connectors ensure reliable aircraft power transfer and defence-grade performance."
            }
        /> 
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
      <div>
                        <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Nato Cable – Military-Grade Power & Signal Solutions by Jetsys Defence</h1>
                        <p className=" font-medium text-base">The Jetsys Defence Nato Cable range is engineered for reliable aircraft power transfer and ground operations. Built for harsh environments, our Cables with Nato slave connectors deliver consistent performance for flight line starts, ground power interfacing, and critical defence applications
                        </p><br></br><br></br>
                        <div>
                  <Image
                                  src="/images/Nato Cable.png"
                                  width={500}
                                  height={1000}
                                  alt="Picture of the author"
                                  className=" m-auto mb-6"
                                />  
                                <OrderNowContactButton />          
                        </div>
                        <br></br>   
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">

        <p className="text-black">
          Designed for mission readiness, the Nato Cable family combines low-loss conductors, robust shielding, and ruggedized terminations to ensure dependable connections between aircraft, ground power carts, and support vehicles. Available as power start leads, interconnect jumpers, and signal/control assemblies tailored to your fleet.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Primary use –</strong>
            Aircraft power transfer and ground support operations.
          </li>
          <li>
            <strong className="text-[#5C5649]">Secondary use –</strong>
            Vehicle-to-vehicle jump/aux power, avionics support, and ramp interconnects.
          </li>
          <li>
            <strong className="text-[#5C5649]">Interface –</strong>
            Nato slave connectors with high-retention contact geometry.
          </li>
        </ul>

      </div>
    </div>
  </div>
</section>
         
                    <section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Nato-Cable</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Defence-grade durability –</strong>
            Abrasion-resistant jacket, crush-tolerant build, and fluid-resistant materials survive ramp and field environments.
          </li>
          <li>
            <strong className="text-[#5C5649]">Reliable power delivery –</strong>
            Low-resistance conductors and high-integrity terminations minimize voltage drop under peak loads.
          </li>
          <li>
            <strong className="text-[#5C5649]">Rapid connect/disconnect –</strong>
            Ergonomic grips and positive-lock Nato slave connectors support quick, safe hook-ups in time-critical operations.
          </li>
          <li>
            <strong className="text-[#5C5649]">EMI & environmental protection –</strong>
            Optional braid/foil shielding, moisture barriers, and sealed backshells help protect sensitive avionics.
          </li>
          <li>
            <strong className="text-[#5C5649]">Serviceability –</strong>
            Field-replaceable contacts, strain-relief boots, and serialized assemblies ensure fast maintenance and traceability.
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
              Representative values; Jetsys Defence configures each Nato Cable to your aircraft platform, length, and load profile.
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
                    <td className="px-4 py-2 border-b">Cable Type</td>
                    <td className="px-4 py-2 border-b">DC power start / Ground power interconnect / Signal-control</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Conductor</td>
                    <td className="px-4 py-2 border-b">Fine-strand copper (tinned or silver-plated), low resistance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Gauge Options</td>
                    <td className="px-4 py-2 border-b">10 AWG to 2/0 AWG (application-dependent)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Voltage Class</td>
                    <td className="px-4 py-2 border-b">28 VDC systems (other low-voltage options available)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Current Rating</td>
                    <td className="px-4 py-2 border-b">Up to 600 A peak (duty-cycle dependent)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Insulation</td>
                    <td className="px-4 py-2 border-b">Cross-linked polymer, high dielectric strength</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Jacket</td>
                    <td className="px-4 py-2 border-b">Rugged, abrasion & cut-resistant; fluid/Skydrol resistant</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Shielding (optional)</td>
                    <td className="px-4 py-2 border-b">Overall foil + tinned copper braid (≥ 85% coverage)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Connectors</td>
                    <td className="px-4 py-2 border-b">Nato slave connectors with high-retention contacts; environmental backshell</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Contact Plating</td>
                    <td className="px-4 py-2 border-b">Silver or tin (corrosion-resistant)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Sealing</td>
                    <td className="px-4 py-2 border-b">Gasketed interfaces; optional heat-shrink boots</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Operating Temp.</td>
                    <td className="px-4 py-2 border-b">-40°C to +85°C (extended ranges on request)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Ingress Protection</td>
                    <td className="px-4 py-2 border-b">Up to IP65 at mated interface (model-dependent)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Bend Radius</td>
                    <td className="px-4 py-2 border-b">8× overall diameter (static), 10× (dynamic)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Length Options</td>
                    <td className="px-4 py-2 border-b">Standard 3 m / 5 m / 10 m; custom lengths available</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Identification</td>
                    <td className="px-4 py-2 border-b">Heat-shrink ID, serial number, and QC stamp</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Quality Checks</td>
                    <td className="px-4 py-2 border-b">Continuity, insulation resistance, hi-pot, pull & torque tests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Variants & Accessories</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Power start leads –</strong>
            Heavy-gauge cables with Nato slave connectors for high-current aircraft or vehicle starts.
          </li>
          <li>
            <strong className="text-[#5C5649]">Ground power interconnect –</strong>
            Medium-gauge assemblies for GPU-to-aircraft low-voltage power distribution.
          </li>
          <li>
            <strong className="text-[#5C5649]">Signal/control harness –</strong>
            Shielded multi-core configurations for control, monitoring, or interlock circuits.
          </li>
          <li>
            <strong className="text-[#5C5649]">Accessories –</strong>
            Protective caps, strain-relief boots, Y-splitters, trolleys, and rugged storage reels.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Nato Cable</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">Mission ready –</strong> Fast, secure connections reduce turnaround on the flight line.</li>
          <li><strong className="text-[#5C5649]">Lower losses –</strong> Optimized conductor sizing maintains voltage under surge loads.</li>
          <li><strong className="text-[#5C5649]">Long service life –</strong> Tough jacket and sealed terminations resist fuels, fluids, and abrasion.</li>
          <li><strong className="text-[#5C5649]">Fleet flexibility –</strong> Custom gauges, lengths, and Nato slave connectors support mixed fleets.</li>
          <li><strong className="text-[#5C5649]">Maintainable –</strong> Field-serviceable contacts and serialized tracking simplify upkeep.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Nato Cable</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">Aircraft starts –</strong> Ideal for ramp power transfer and engine starts.</li>
          <li><strong className="text-[#5C5649]">Ground support carts –</strong> Works with GPUs and auxiliary power systems.</li>
          <li><strong className="text-[#5C5649]">Defence vehicles –</strong> Supports jump/aux power for tactical and armored vehicles.</li>
          <li><strong className="text-[#5C5649]">Avionics & diagnostics –</strong> Useful for control, testing, and interconnect circuits.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Quality & Testing</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <p className="text-black">
          Each Nato Cable is assembled under controlled processes and verified for continuity, polarity,
          insulation resistance, hi-pot, and mechanical strain. Batch records and serialization support
          audit trails and maintenance history.
        </p>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence for NATO Cable
    </h2>
    <div  className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Aerospace-grade conductors & jackets –</strong>
            High-conductivity copper, high-temperature insulation, and abrasion-resistant outer jackets suited for military flight lines and harsh ramp conditions.
          </li>
          <li>
            <strong className="text-[#5C5649]">Precise NATO connector engineering –</strong>
            Accurately machined NATO slave connectors ensure secure engagement, minimal voltage drop, and reliable GPU-to-aircraft power transfer.
          </li>
          <li>
            <strong className="text-[#5C5649]">Custom lengths & current ratings –</strong>
            Offered in multiple gauges and power classes (28V DC / 115V AC) with optional extensions, strain-relief sleeves, and reinforced grips for heavy-duty usage.
          </li>
          </ul>
          </div>
          <div className="text-black space-y-4">
            <ul  className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Low voltage loss & stable power –</strong>
            Optimized cable core and shielding minimize resistance and heat build-up, maintaining stable delivery during engine start and servicing.
          </li>
          <li>
            <strong className="text-[#5C5649]">Rugged & weather-resistant build –</strong>
            Corrosion-protected hardware and environmental sealing support dependable operation in heat, rain, dust, and coastal environments.
          </li>
          <li>
            <strong className="text-[#5C5649]">Fast delivery & fleet support –</strong>
            Suitable for helicopters, fixed-wing aircraft, and trainers, with accessories, replacement connectors, and quick turnaround on orders.
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
