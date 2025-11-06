import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";

import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";
export const metadata: Metadata = {
  title:
    "Jetsys Defence | Shallow Base – Premium Runway Spares & Units",
  description:
    "Explore Jetsys Defence’s high-quality Shallow Base units for airport runway spares. Get competitive Shallow Base price quotes, reliable supply and efficient logistics for defence & aviation infrastructure.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/runway-spares/mafi-spares/shallow-base",
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
                    <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Shallow Base – Runway Spares by Jetsys Defence</h1>
                     <p className=" font-medium text-base">The Shallow Base from Jetsys Defence is a robust mounting solution for inset airfield lights on runways, taxiways, and aprons. Engineered for fast installation and long service life, our Shallow Base units support flexible or rigid pavements, streamline cable management, and improve thermal dissipation to help extend fixture life.
                   </p><br></br><br></br>
                  <div>
      <Image
                      src="/images/Shallow Base.png"
                      width={500}
                      height={1000}
                      alt="Picture of the author"
                      className=" m-auto mb-6"
                    />
                    <OrderNowContactButton />
                          </div>
    <section><br></br><br></br>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Features at a Glance
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">

      {/* LEFT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Precision Machining</h3>
          Flatness and bolt-pattern accuracy ensure proper fixture seating and long-term
          watertightness.
        </li>
      </ul>

      {/* RIGHT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Serviceable Design</h3>
          Accessible fasteners and replaceable glands reduce maintenance time on the flight line.
        </li>
        <li>
          <h3 className="font-bold text-[#5C5649]">Configurable Cable Paths</h3>
          Choose bottom or glanded side entry to suit pit locations and secondary cabling runs.
        </li>
      </ul>

    </div>
  </div>
</section>
 <br></br><br></br>
<section>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Applications of Shallow Base
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">

      {/* LEFT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Runway Lighting Fixtures</h3>
          Used to mount runway edge lights, centreline lights, touchdown zone lights, and approach
          lights where deep foundations are not possible.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Taxiway & Apron Lighting</h3>
          Supports installation of taxiway guidance signs, elevated/taxiway lights, and apron
          floodlighting on concrete or paved surfaces.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Underground Cable Routing & Junction Housing</h3>
          Acts as an enclosure for primary and secondary lighting cables, protecting joints from
          moisture, debris, and mechanical stress.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Retrofit or Upgrade of Existing Airfields</h3>
          Ideal for airports where trenching is restricted due to pavement structure, utilities, or
          older slab construction.
        </li>
      </ul>

      {/* RIGHT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Military & Temporary Airstrips</h3>
          Perfect for rapid-deployment strips and forward operating bases where shallow civil work
          enables fast setup.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Helipad Lighting Systems</h3>
          Used to mount helipad edge lights and approach aids with minimal excavation and stable
          electrical interfaces.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Solar or LED-Based Airfield Lights</h3>
          Supports modern low-profile LED and solar lights that require compact underground
          housings without deep foundation pits.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Industrial, Marine & Port Lighting</h3>
          Used in ports, docks, refineries, and industrial yards for surface-mounted obstruction
          and pathway lighting.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Areas with Rock, High Water Table or Soil Limits</h3>
          Preferred where excavation is difficult or unsafe due to rock beds, high water levels, or
          reinforced concrete layers.
        </li>
      </ul>

    </div>
  </div>
</section>

<section><br></br><br></br>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications</h2>
    <p className="text-gray-700 mb-4">
      Representative data shown; dimensions/ratings may vary by model. Custom sizes and accessories available.
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
            <td className="px-4 py-2 border-b">Nominal Sizes</td>
            <td className="px-4 py-2 border-b">8″ and 12″ Shallow Base units (other diameters on request)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Outside Diameter (typ.)</td>
            <td className="px-4 py-2 border-b">8″ ≈ 220 mm; 12″ ≈ 320 mm</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Depth (typ.)</td>
            <td className="px-4 py-2 border-b">~150 mm shallow depth profile</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Body Material</td>
            <td className="px-4 py-2 border-b">High-strength aluminium alloy (forged/cast), anodised or coated</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Hardware</td>
            <td className="px-4 py-2 border-b">Stainless-steel screws, washers, threaded sleeves/inserts</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Cable Entry</td>
            <td className="px-4 py-2 border-b">Bottom entry (standard); optional single/dual side entries with glands</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Sealing</td>
            <td className="px-4 py-2 border-b">Gasketed dry-base option between base and fixture; epoxy set in core</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Finish</td>
            <td className="px-4 py-2 border-b">Industrial two-pack coating / anodised finish (project-specific colours)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Temperature Range</td>
            <td className="px-4 py-2 border-b">–55 °C to +55 °C (storage up to +70 °C)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Altitude</td>
            <td className="px-4 py-2 border-b">Up to ~3,000 m</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Loading/Environment</td>
            <td className="px-4 py-2 border-b">Designed for airfield pavement mechanical loads and jet-blast environment</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Compatibility</td>
            <td className="px-4 py-2 border-b">8″/12″ inset light footprints (model-dependent)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Standards Alignment</td>
            <td className="px-4 py-2 border-b">
              FAA AC 150/5345-42 (as applicable), IEC 61822/61827 mechanical/env.
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Accessories</td>
            <td className="px-4 py-2 border-b">
              Mounting jigs, sealing gaskets, gland kits, alignment plates, concrete collars
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      How We Support Your Project
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">

      {/* LEFT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Engineering & Submittals</h3>
          Data sheets, installation drawings, and method statements aligned with your project
          specification and airport standards.
        </li>
      </ul>

      {/* RIGHT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Logistics & Kitting</h3>
          Crated Shallow Base units with gaskets, glands, and hardware—ready for night-time
          possession windows and fast field deployment.
        </li>
        <li>
          <h3 className="font-bold text-[#5C5649]">After-Sales</h3>
          Spares and hardware kits to keep inventories lean and lighting assets serviceable
          throughout their lifecycle.
        </li>
      </ul>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence Shallow Base Units
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">

      {/* LEFT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Durable, Airfield-Ready Construction</h3>
          Forged/cast aerospace-grade aluminium body with stainless-steel hardware resists corrosion,
          impact, and cyclic loading from aircraft operations.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Fast, Fail-Safe Installation</h3>
          Optimised for core-drilled epoxy set or precast block installs; optional bottom or side
          cable entries and sealed glands simplify on-site work.
        </li>
      </ul>

      {/* RIGHT COLUMN */}
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <h3 className="font-bold text-[#5C5649]">Thermal & Moisture Control</h3>
          Efficient heat path away from the light fitting plus dry-base and gasket options help
          maintain IP integrity and component longevity.
        </li>

        <li>
          <h3 className="font-bold text-[#5C5649]">Standards-Aligned Design</h3>
          Designed in line with common airfield mechanical and environmental requirements
          (e.g., FAA AC 150/5345-42 / related guidance and IEC 61822/61827 considerations).  
          <br/>
          <span className="text-sm italic">
            *Final compliance depends on selected configuration and project specification.
          </span>
        </li>
      </ul>

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
