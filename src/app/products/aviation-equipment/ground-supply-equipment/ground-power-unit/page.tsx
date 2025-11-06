import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";
export const metadata: Metadata = {
  title:
    "Ground Power Unit – Aircraft GPU Systems & Manufacturers | Jetsys Defence",
  description:
    "Discover advanced Ground Power Unit solutions by Jetsys Defence. Our aircraft Ground Power Unit ensures reliable performance, efficiency, and durability—trusted by leading GPU manufacturers.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/ground-power-unit",
  },
};
const page = () => {
  return (
    <>
     
    <div>
      <Header />
      <StickyHeader />
      <section>
               <div className="container ">
                  <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Ground Power Unit – Reliable Aircraft GPU Solutions by Jetsys Defence</h1>
                  <p className=" font-medium text-base">The Jetsys Defence Ground Power Unit delivers stable 400 Hz AC and 28.5 V DC power for parked aircraft. Built for tough flight-line conditions and continuous ramp duty, our GPUs help operators cut APU runtime, reduce emissions, and improve turnaround efficiency—setting a benchmark among Ground Power Unit manufacturers.</p><br></br><br></br>
                  <Image
                                  src="/images/Ground Power Unit.png"
                                  width={500}
                                  height={1000}
                                  alt="Picture of the author"
                                  className=" m-auto mb-6"
                                />
                                <OrderNowContactButton />
                  <br></br><br></br>     
                  <section>
                    <div>
                      <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
                      <p className=" font-medium text-base">Our Ground Power Unit (GPU) line covers mobile trailer, vehicle-mounted, battery/eGPU, solid-state rectifier (SSR), and fixed electrical ground power (FEGP) configurations. Each system provides clean, tightly regulated power to protect avionics and sensitive loads across regional, narrow-body, and wide-body fleets.
                  </p>
                    </div>
                  </section><br></br><br></br>
                <section>
                  <div>
                    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Ground Power unit</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                      <div className="text-black space-y-4">
                        <ul className="list-disc pl-5">
                          <li>
                            <h4 className="font-bold text-[#5C5649]">Clean, Stable Output</h4>
                            Tight voltage regulation, low THD, and fast transient recovery safeguard aircraft electrical systems during gate operations and maintenance.
                          </li>

                          <li>
                            <h4 className="font-bold text-[#5C5649]">Dual-Mode Power</h4>
                            400 Hz 115/200 V AC plus 28.5 V DC modes support aircraft power-up, testing, avionics servicing, and line maintenance.
                          </li>

                          <li>
                            <h4 className="font-bold text-[#5C5649]">Built for the Ramp</h4>
                            Heavy-duty chassis, sealed controls, corrosion-resistant finishes, and wide temperature operation ensure reliable uptime in harsh apron conditions.
                          </li>
                        </ul>
                      </div>

                      <div className="text-black space-y-4">
                        <ul className="list-disc pl-5">
                          <li>
                            <h4 className="font-bold text-[#5C5649]">Smart Monitoring</h4>
                            Touchscreen HMI with live parameters, event/fault logs, maintenance timers, and optional remote diagnostics for fleet visibility.
                          </li>

                          <li>
                            <h4 className="font-bold text-[#5C5649]">Safety & Protection</h4>
                            Comprehensive safety suite including under/over-voltage, frequency protection, overload, neutral open detection, phase rotation, and emergency stop.
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </section>
<section><br></br><br></br>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-6">
      Technical Specifications of Ground Power Unit (GPU)
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
            <td className="px-4 py-2 border-b">AC Output Ratings</td>
            <td className="px-4 py-2 border-b">40 / 60 / 90 / 140 / 180 kVA @ 0.8 pf</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">AC Voltage / Frequency</td>
            <td className="px-4 py-2 border-b">115 V (L-N), 200 V (L-L), 400 Hz (3-phase, 4-wire)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">AC Regulation</td>
            <td className="px-4 py-2 border-b">Voltage ±1%, Frequency ±1%; THD &lt; 2%</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">AC Transient Recovery</td>
            <td className="px-4 py-2 border-b">±20% max with ≤ 200 ms recovery</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Overload Capability</td>
            <td className="px-4 py-2 border-b">110%/1 h; 125%/5 min; 150%/10 s; 200%/2 s (model-dep.)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">DC Output</td>
            <td className="px-4 py-2 border-b">28.5 V DC continuous 800 A, 5-min overload 1000 A</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Prime Mover (Diesel GPU)</td>
            <td className="px-4 py-2 border-b">Industrial diesel engine + brushless alternator</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">eGPU / SSR Options</td>
            <td className="px-4 py-2 border-b">Battery-electric eGPU and solid-state rectifier units</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Noise Level</td>
            <td className="px-4 py-2 border-b">≤ 85 dB(A) at 1 m (model-dependent)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Operating Temperature</td>
            <td className="px-4 py-2 border-b">−32 °C to +55 °C (extended options available)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Ingress / Finish</td>
            <td className="px-4 py-2 border-b">Weather-protected enclosure; corrosion-resistant coating</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Monitoring</td>
            <td className="px-4 py-2 border-b">Touch HMI: V, A, Hz, oil pressure, coolant temp, fuel, hours</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Protections</td>
            <td className="px-4 py-2 border-b">UV/OV, UF/OF, overload, neutral open, phase rotation, E-stop</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Mounting Options</td>
            <td className="px-4 py-2 border-b">Towable trailer, vehicle-mounted, skid, fixed (FEGP)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Accessories</td>
            <td className="px-4 py-2 border-b">400 Hz cables, heads, DC leads, caps, cable reels, trolleys</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Variants of Ground Power Unit</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <h4 className="font-bold text-[#5C5649]">Diesel Mobile GPU</h4>
            High-duty solution for busy ramps with fast deployment between stands.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Battery-Electric eGPU</h4>
            Zero-local-emissions option suitable for indoor gates and noise-sensitive operations.
          </li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <h4 className="font-bold text-[#5C5649]">Solid-State Rectifier (SSR) – 28.5 V DC</h4>
            Compact, low-maintenance power source for shop use and line-station servicing of Ground Power Unit aircraft.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Fixed Electrical Ground Power (FEGP)</h4>
            Bridge- or pit-mounted solutions offering continuous gate availability and minimal operating cost.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Benefits of Ground Power Unit</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li><h4 className="font-bold text-[#5C5649]">Lower APU Run Time</h4>Reduces fuel burn, environmental noise, and emissions on stand.</li>
          <li><h4 className="font-bold text-[#5C5649]">Avionics Protection</h4>Clean, regulated output minimizes nuisance faults and prevents damage to sensitive systems.</li>
          <li><h4 className="font-bold text-[#5C5649]">Operational Uptime</h4>Robust design with easy service access helps avoid downtime.</li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li><h4 className="font-bold text-[#5C5649]">Flexible Integration</h4>Multiple formats suit stand layout, hangar use, or fleet mix.</li>
          <li><h4 className="font-bold text-[#5C5649]">Lifecycle Value</h4>Efficient conversion and maintainable architecture reduce long-term cost of ownership.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Ground Power Unit</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li><h4 className="font-bold text-[#5C5649]">Gate & Remote Stand Power</h4>Used during aircraft turnaround and transit operations.</li>
          <li><h4 className="font-bold text-[#5C5649]">Maintenance Operations</h4>Ideal for line maintenance, avionics updates, and onboard servicing.</li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li><h4 className="font-bold text-[#5C5649]">Hangar Operations</h4>Reliable power for power-up tests and system checks.</li>
          <li><h4 className="font-bold text-[#5C5649]">Military Flight Lines</h4>Supports deployed air operations and field servicing.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Control & Diagnostics</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li><h4 className="font-bold text-[#5C5649]">HMI & Telemetry</h4>Real-time electrical parameters and engine data displayed through touchscreen interface.</li>
          <li><h4 className="font-bold text-[#5C5649]">Fault Logs</h4>Event history and guided troubleshooting streamline maintenance.</li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li><h4 className="font-bold text-[#5C5649]">Maintenance Scheduler</h4>Service reminders and timers ensure fleet readiness.</li>
          <li><h4 className="font-bold text-[#5C5649]">Remote Monitoring</h4>Optional remote diagnostics for centralized fleet oversight.</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Ground Power Units (GPU)</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aerospace-Grade Power Electronics</h4>
            Jetsys GPUs deliver clean, tightly regulated 28.5 V DC and 115/200 V AC output, eliminating voltage fluctuations that can damage avionics or trigger nuisance faults.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">High Reliability on the Ramp</h4>
            Designed for harsh tarmac conditions with rugged frames, weather-sealed components, corrosion-protected hardware, and vibration-resistant mounts.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Lower APU Fuel Burn & Noise</h4>
            Replacing APU power with GPUs reduces fuel consumption, carbon emissions, and noise at civilian and military airfields.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Configurations for Every Operation</h4>
            Mobile trailer GPUs, vehicle-mounted systems, fixed ground power units, and battery-electric eGPUs for silent indoor operation.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Fast Service & Local Support</h4>
            Jetsys provides spares, replacement connectors, service kits, and quick-turnaround maintenance to keep your flight line active.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Custom Engineering for Fleet Requirements</h4>
            Input power, output ratings, cable length, shock protection, and safety interlocks can be tailored for helicopters, transports, fighters, and trainers.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>

              </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default page;
