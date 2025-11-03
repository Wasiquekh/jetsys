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
         "Protractor Unit for DAU Vane Angles – Aircraft Tooling Protractors | Jetsys Defence"
            }
        description= {
            "Explore the precision-engineered Protractor Unit for DAU Vane Angles by Jetsys Defence. Designed for aviation tooling accuracy, our vane protractor aviation tooling ensures reliable measurement and alignment."
            }
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
      <div>
                        <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Protractor Unit for DAU Vane Angles – Precision Aircraft Tooling by Jetsys Defence</h1>
                        <p className=" font-medium text-base">The Jetsys Defence Protractor Unit for DAU Vane Angles is a high-accuracy measuring tool engineered for vane rigging, alignment, and calibration tasks. Built for MRO, line maintenance, and defence applications, this vane protractor aviation tooling provides repeatable, traceable measurements that help technicians meet strict aircraft OEM tolerances.
                        </p><br></br><br></br>
                       <div>
                                     <Image
                                       src="/images/Protractor Unit for DAU Vane Angles.png"
                                       width={500}
                                       height={1000}
                                       alt="Picture of the author"
                                       className=" m-auto mb-6"
                                     />
                                     <OrderNowContactButton />
                                   </div><br></br>
  <section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">

        <p className="text-black">
          Our Protractor Unit for DAU Vane Angles offers precise angle measurement for stall/alpha vanes, DAU vane sensors, and variable vane assemblies. 
          The rugged body, stable mounting hardware, and positive-lock indexing ensure dependable use on the ramp and in the shop.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Primary use –</strong>
            Measurement and setting of DAU vane angles.
          </li>
          <li>
            <strong className="text-[#5C5649]">Secondary use –</strong>
            Control surface and sensor alignment where angle verification is required.
          </li>
          <li>
            <strong className="text-[#5C5649]">Available forms –</strong>
            Digital readout or high-visibility analog dial, both offering fine resolution.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
         
        <section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Protractor Unit for DAU Vane Angles</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <strong className="text-[#5C5649]">High accuracy & resolution –</strong>
            Fine-grade encoder or dial ensures precise angle sensing for tight vane tolerances.
          </li>
          <li>
            <strong className="text-[#5C5649]">Stable mounting –</strong>
            Aircraft-safe clamps with optional suction or magnetic bases maintain alignment without damaging painted surfaces.
          </li>
          <li>
            <strong className="text-[#5C5649]">Fast rigging workflow –</strong>
            Zero-set, hold, and relative-angle modes speed up calibration and reduce rework time.
          </li>
          </ul>
          </div>
          <div className="text-black space-y-4">
          <ul className="list-disc pl-5">
          <li>
            <strong className="text-[#5C5649]">Robust aviation build –</strong>
            Impact-resistant housing, Skydrol-resistant finishes, and sealed bearings ensure long service life in demanding GSE environments.
          </li>
          <li>
            <strong className="text-[#5C5649]">Documentation & traceability –</strong>
            Optional factory calibration certificate and maintenance checklist support airworthiness compliance and record-keeping.
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
      Values are representative; Jetsys Defence can tailor specifications to your aircraft and DAU system requirements.
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
            <td className="px-4 py-2 border-b">Measurement Range</td>
            <td className="px-4 py-2 border-b">±90° (full span)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Resolution</td>
            <td className="px-4 py-2 border-b">Digital: 0.01° · Analog: 0.5° per division</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Accuracy</td>
            <td className="px-4 py-2 border-b">±0.05° (digital) · ±0.25° (analog)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Repeatability</td>
            <td className="px-4 py-2 border-b">≤ ±0.02° (digital mode)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Zero / Offset</td>
            <td className="px-4 py-2 border-b">Absolute zero & relative offset modes</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Display</td>
            <td className="px-4 py-2 border-b">Backlit LCD (digital) / High-contrast analog dial</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Mounting Options</td>
            <td className="px-4 py-2 border-b">Non-marring clamp kit, suction base, magnetic base (aircraft-safe)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Probe / Adapter Set</td>
            <td className="px-4 py-2 border-b">DAU vane adapter shoes, alignment pins, spacer shims</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Data Output (optional)</td>
            <td className="px-4 py-2 border-b">Serial data port for logging (digital model)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Power (digital)</td>
            <td className="px-4 py-2 border-b">2×AA or rechargeable pack, auto-sleep</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Ingress Protection</td>
            <td className="px-4 py-2 border-b">IP54 equivalent (shop/ramp use)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Operating Temp.</td>
            <td className="px-4 py-2 border-b">-20°C to +55°C</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Calibration</td>
            <td className="px-4 py-2 border-b">Factory calibration, field verification kit (optional)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Finish</td>
            <td className="px-4 py-2 border-b">Corrosion & fluid-resistant coating (Skydrol-resistant)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Kit Case</td>
            <td className="px-4 py-2 border-b">Shock-proof transit case with foam inlays</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Protractor Unit for DAU Vane Angles</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">Measurement confidence –</strong> Tight accuracy and repeatability reduce mis-rig risk.</li>
          <li><strong className="text-[#5C5649]">Faster turnarounds –</strong> Zero/relative modes and stable mounting cut setup time.</li>
          <li><strong className="text-[#5C5649]">Fleet flexibility –</strong> Interchangeable DAU vane adapters cover multiple platforms.</li>
          <li><strong className="text-[#5C5649]">Lower lifecycle cost –</strong> Durable housing and aircraft-safe interfaces minimize wear.</li>
          <li><strong className="text-[#5C5649]">Record readiness –</strong> Calibration records support compliance and quality audits.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Protractor Unit for DAU Vane Angles</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">DAU vane rigging –</strong> Verification and alignment of vane angles.</li>
          <li><strong className="text-[#5C5649]">Stall/alpha vane checks –</strong> Useful during installation or troubleshooting.</li>
          <li><strong className="text-[#5C5649]">Variable vane alignment –</strong> Serves as reference for guide/stator vane setups.</li>
          <li><strong className="text-[#5C5649]">Maintenance operations –</strong> Ideal for line maintenance, MRO, and defence depots.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">What’s in the Box (Typical Kit)</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-[#5C5649]">Protractor unit –</strong> Available in digital or analog variants.</li>
          <li><strong className="text-[#5C5649]">DAU vane adapter set –</strong> Shoes, pins, and shims for multiple vane models.</li>
          <li><strong className="text-[#5C5649]">Mounting system –</strong> Non-marring clamp plus optional suction/magnetic base.</li>
          <li><strong className="text-[#5C5649]">Verification plate –</strong> Allows quick field reference checks.</li>
          <li><strong className="text-[#5C5649]">Transit case & docs –</strong> User guide and calibration certificate (if ordered).</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section>
  <br /><br />
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Jetsys Defence for Protractor Unit for DAU Vane Angles?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Aviation-grade tooling –</strong>
            Engineered for defence and commercial aircraft fleets.
          </li>
          <li>
            <strong className="text-[#5C5649]">Proven durability –</strong>
            Fluid-resistant coatings and rugged hardware extend service life in harsh ramp environments.
          </li>
          </ul>
          </div>
          <div className="text-black space-y-4">
            <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[#5C5649]">Custom adapters & kitting –</strong>
            Tailored setups for your DAU models and fleet mix.
          </li>
          <li>
            <strong className="text-[#5C5649]">End-to-end support –</strong>
            Assistance with selection, calibration, documentation, and after-sales service.
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
