import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title:
    "Portable Engine Starting Trolley in India – Aircraft Start-Up System | Jetsys Defence",
  description:
    "Buy Portable Engine Starting Trolley in India from Jetsys Defence. Our aircraft start-up trolleys deliver high performance with affordable price and nationwide after-sales support.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley",
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
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/aircraft-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>Portable Engine Starting Trolley</a> – High-Performance Aircraft Start-Up by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                Engineered for ramp reliability, the <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/portable-aircraft-ground-ower-unit" className="hover:underline" style={{ color: 'inherit' }}>Portable Engine Starting Trolley</a> from Jetsys Defence delivers safe, high-current DC starts for helicopters, turboprops, and small jets. Compact, field-ready, and serviceable across India, it&apos;s the ideal choice when you need dependable starts, rapid recharge, and robust after-sales support.
              </p>
              <br /><br />
              <div>
                <Image
                  src="/images/Portable Engine Starting Trolley.png"
                  width={500}
                  height={1000}
                  alt="Picture of the author"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Model Options of Portable Engine Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]"><a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/28v-aircraft-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>PESU-28 (Helicopter / Light Turbine)</a></h4>
                          28 VDC supply with high burst current, compact towable trolley, wide-range AC charger, and optional cold-weather kit.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]"><a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/24v-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>PESU-24 (Turboprop / GA / Piston)</a></h4>
                          24 VDC lightweight pack with rapid recharge and field-swap battery option for remote airstrips.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]"><a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/battery-powered-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>Advanced Li Pack</a></h4>
                          LiFePO₄ technology for superior power-to-weight ratio, faster turnaround, and extended cycle life.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Key Features of Portable Engine Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">High Current Delivery</h4>
                          Provides reliable peak and burst current to support APU and turbine inrush demands for confident starts in all conditions.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Clean, Stable Voltage</h4>
                          Tightly regulated 24 VDC or 28.5 VDC output with low internal impedance to minimise voltage sag during crank.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Tough, Flight-Line Ready</h4>
                          Impact-resistant enclosure, corrosion-proof hardware, protected connectors, and guarded master isolator for harsh apron conditions.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Smart Charging & Monitoring</h4>
                          Integrated multi-stage charger with SOC/voltage display, event/status indicators, and optional data logging for fleet records.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Flexible Energy Chemistries</h4>
                          Available with sealed lead-acid (SLA/AGM) for value or <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/battery-powered-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>LiFePO₄ for higher power-to-weight ratio</a> and faster recharge times.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Portable Engine Starting Trolley Maintenance (Best Practices)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Daily Checks</h4>
                          Visual inspection, connector cleanliness, and SOC/voltage check before dispatch.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Weekly Tasks</h4>
                          Lead integrity inspection, charger self-test, and logging of start events for traceability.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Annual Service</h4>
                          Full electrical inspection, calibrated load test, meter calibration, and battery replacement plan based on cycles/calendar.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Monthly / Quarterly</h4>
                          Capacity test (battery health), settings or firmware review (where applicable).
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fleet Support</h4>
                          Jetsys Defence provides AMCs, calibration services, and battery refurbishment programs to maximise uptime.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section><br /><br />
                <div className="mx-auto">
                  <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications (Representative)</h2>
                  <p className="text-gray-700 mb-6">
                    Representative values for <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/aircraft-starting-power-unit" className="hover:underline" style={{ color: 'inherit' }}>portable aircraft starting power units</a>. Jetsys Defence offers customized configurations to suit engine type, start profile, and ambient conditions.
                  </p>
                  <div className="overflow-x-auto bg-white rounded-lg">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Category</th>
                          <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">Output Voltage</td>
                          <td className="px-4 py-2 border-b"><a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/24v-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>24 VDC</a> or <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/28v-aircraft-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>28.5 VDC</a> (model dependent)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Peak/Burst Current</td>
                          <td className="px-4 py-2 border-b">Up to 1000–1500 A (4–10 s typical); higher on request</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Continuous Crank</td>
                          <td className="px-4 py-2 border-b">400–600 A (duty-limited by thermal profile)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Battery Capacity</td>
                          <td className="px-4 py-2 border-b">50–100 Ah (SLA/AGM) or 40–80 Ah (LiFePO₄) equivalent energy</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Charger</td>
                          <td className="px-4 py-2 border-b">Integrated multi-stage; 90–264 VAC, 50/60 Hz auto-range</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Recharge Time</td>
                          <td className="px-4 py-2 border-b">~3–6 hours from full depletion (model/battery dependent)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Protection</td>
                          <td className="px-4 py-2 border-b">Reverse-polarity, short-circuit, over-temp, over-voltage, fuse/CB protection, master isolator</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Instrumentation</td>
                          <td className="px-4 py-2 border-b">Digital voltmeter/SOC, status LEDs, hour/event counters (options)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Harness/Lead</td>
                          <td className="px-4 py-2 border-b">Heavy-duty aircraft lead with start plug; optional NATO plug/adapters</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Enclosure</td>
                          <td className="px-4 py-2 border-b">Powder-coated or stainless steel; IP-rated panels; impact bumpers</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Mobility</td>
                          <td className="px-4 py-2 border-b"><a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/mobile-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>Removable trolley with castors & telescopic handle</a>; skid/tow-handle options</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Operating Temperature</td>
                          <td className="px-4 py-2 border-b">−30 °C to +55 °C (battery chemistry dependent)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Compliance (typ.)</td>
                          <td className="px-4 py-2 border-b">Built to aviation GSE best practice; environmental testing options available</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Dimensions / Weight</td>
                          <td className="px-4 py-2 border-b">Compact footprint (~400×300×300 mm module); ~20–40 kg module plus trolley</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Portable Engine Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Flight-Line Starts</h4>
                          Quick, repeatable starts for helicopters, turboprops, and small business jets.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Hangar Maintenance</h4>
                          Stable DC supply for avionics checks and ground runs (within duty limits).
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Remote / Field Ops</h4>
                          Portable, rugged design for dispersed operations and forward bases.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Portable Engine Starting Trolley Price & Sale Information</h3>
                  <p className="text-black">
                    For transparent <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/aircraft-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>Portable Engine Starting Trolley price</a> options and current sale bundles (spares kit, extra lead set, cold-weather jacket), 
                    share your aircraft type, preferred voltage, target peak current, and usage profile. 
                    We&apos;ll respond with a tailored quotation, delivery timeline, and recommended configuration for India-wide deployment.
                  </p>
                </div>
              </section>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">What&apos;s Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Pre-tested <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/aviation-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>Portable Engine Starting Trolley</a> with chosen battery chemistry</li>
                        <li>Aircraft start lead set and AC charge cable</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>Operator&apos;s manual, functional test report, and recommended spares list</li>
                        <li>Commissioning support and training (on request)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section><br /><br />
                <div>
                  <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence for Portable Engine Starting Trolley</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Reliable High-Current Power for Safe Starts</h4>
                          Delivers stable, high-amperage output supporting APU-less starts, cold-weather operations, and repeated cycles without voltage drop or system strain.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Aircraft-Grade Electrical Protection</h4>
                          Surge suppressors, reverse-polarity protection, thermal cut-outs, and short-circuit safety protect sensitive avionics and starter motors.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Rugged, Flight-Line Ready Construction</h4>
                          Weather-sealed enclosure, heavy-duty wheels, corrosion-proof hardware, and vibration-resistant cabling for reliable performance on runways, hangars, and remote airstrips.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5">
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Fast Recharge & Long Service Life</h4>
                          Deep-cycle batteries, efficient chargers, and smart balancing electronics ensure quick recharge and long battery health.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Simple, User-Friendly Operation</h4>
                          Clear indicator lamps, battery status meters, emergency stop, and ergonomic connectors enable ground crews to operate safely with minimal training.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Custom Configurations for Any Fleet</h4>
                          Offered in 12V, 24V, 28.5V, and multi-output versions with optional jumper cables, NATO connectors, and protective covers for rotary and fixed-wing fleets – <a href="/products/aviation-equipment/ground-supply-equipment/portable-engine-starting-trolley/defence-engine-starting-trolley" className="hover:underline" style={{ color: 'inherit' }}>Defence Engine Starting Trolley</a>.
                        </li>
                        <li>
                          <h4 className="font-bold text-[#5C5649]">Proven for Civil & Military Platforms</h4>
                          Supports helicopters, UAVs, trainers, business jets, and transport aircraft for on-stand, hangar, and remote-field starts.
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