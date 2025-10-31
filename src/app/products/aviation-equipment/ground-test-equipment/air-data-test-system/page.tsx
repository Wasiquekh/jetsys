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
         "Air Data Test System for Aircraft | Jetsys Defence Aviation Equipment"
            }
        description= {
            "Discover Jetsys Defence Air Data Test System engineered for aircraft pressure & pitot-static calibration. View full Air Data Test System set & best price today."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
  <div>
          <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">Air Data Test System — Advanced Calibration for Aircraft Systems by Jetsys Defence</h1>
           <p className=" font-medium text-base">The Air Data Test System (ADTS) from Jetsys Defence is a state-of-the-art solution for precise calibration and testing of aircraft pressure, pitot-static, and altitude systems. Essential for MROs, OEMs, and aviation technicians, our system ensures peak accuracy in airspeed, altitude, and other atmospheric measurements for all aircraft types
         </p>
         
         <br></br><br></br>
         <div>
    <Image
                    src="/images/Air Data Test System.png"
                    width={500}
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Product Overview</h3>
    <p className="text-black mb-6">
      The Jetsys Defence Air Data Test System delivers highly accurate, fast, and reliable results for pitot-static 
      systems on both civil and military aircraft. With fully automated functions and easy-to-use interfaces, 
      this system simplifies routine maintenance, troubleshooting, and compliance verification for flight-critical systems.
    </p>

    <h4 className="font-bold text-[#5C5649] mb-3">Key Features at a Glance</h4>
    <ul className="list-disc pl-5 text-black space-y-2">
      <li>Automated calibration for pitot-static systems, airspeed, altimeters, VSI, and more</li>
      <li>RVSM-compliant for high-accuracy testing</li>
      <li>Portable design for easy field use and remote operations</li>
      <li>Remote operation capability via cockpit or ground unit</li>
      <li>Integrated leak detection for immediate fault identification</li>
      <li>Single-button operation for simplified workflows</li>
      <li>Cost-effective with minimal maintenance requirements</li>
    </ul>
  </div>
</section>

  <section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of the Air Data Test System</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aircraft Maintenance & Overhaul</h4>
            Perform precise pitot-static tests after component installation or during routine inspection.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Flight Testing</h4>
            Simulate various atmospheric conditions to validate air data system performance in real-time.
          </li>

        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">

          <li>
            <h4 className="font-bold text-[#5C5649]">Regulatory Compliance</h4>
            Ensure accuracy for RVSM (Reduced Vertical Separation Minima) altitude and airspeed requirements.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Leak Detection & Troubleshooting</h4>
            Quickly locate and resolve system leaks to prevent costly failures and ensure flight readiness.
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
            <td className="px-4 py-2 border-b">Pressure Range (Pitot)</td>
            <td className="px-4 py-2 border-b">
              0.1 – 60 inHg; resolution 0.001 inHg; accuracy ±0.003 inHg
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Altitude Range</td>
            <td className="px-4 py-2 border-b">
              –4,000 to 60,000 ft; resolution 1 ft; accuracy ±2 ft @ 0 ft / ±6 ft @ 35,000 ft / ±12 ft @ 50,000 ft
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Airspeed Range</td>
            <td className="px-4 py-2 border-b">
              0 – 650 knots; resolution 0.1 kt; accuracy ±0.5 kt @ 50 kt /
              ±0.25 kt @ 100 kt / ±0.05 kt @ 650 kt
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Mach Function</td>
            <td className="px-4 py-2 border-b">
              0.00 – 3.00 M; resolution 0.001 M; accuracy ±0.001 above 0.2 Mach
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Operating Pressure</td>
            <td className="px-4 py-2 border-b">0.1 – 42 inHg (Static Pressure)</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Leak Detection</td>
            <td className="px-4 py-2 border-b">
              Automated detection during pressure stabilization
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Remote Operation</td>
            <td className="px-4 py-2 border-b">
              Available (via cockpit or portable unit)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Power Supply</td>
            <td className="px-4 py-2 border-b">
              90 – 260 VAC, 47 – 440 Hz; ≤150 VA
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Operating Environment</td>
            <td className="px-4 py-2 border-b">
              0 to 50°C; 5 – 100% RH (non-condensing)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Safety Features</td>
            <td className="px-4 py-2 border-b">
              Automatic shutoff on large leaks; power failure protection
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Connectivity</td>
            <td className="px-4 py-2 border-b">
              RS-232; IEEE-488 (configurable)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Calibration</td>
            <td className="px-4 py-2 border-b">
              Annual calibration recommended for optimal accuracy
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Compliance</td>
            <td className="px-4 py-2 border-b">
              RVSM-compliant, FAA, EASA, ICAO standards
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Air Data Test System Set — What’s Included
    </h3>

    <h4 className="font-bold text-[#5C5649] mb-3">Standard Kit Includes:</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>Main Air Data Test System unit with integrated pumps and controllers</li>
          <li>Quick-connect pitot/static hoses and adaptors</li>
          <li>Remote operation pendant for cockpit use (optional)</li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>Calibration certificate and user manual</li>
          <li>Protective storage case for easy transport and handling</li>
        </ul>
      </div>
    </div>

    <br></br>
    <h4 className="font-bold text-[#5C5649] mb-3">Optional Add-Ons:</h4>
    <ul className="list-disc pl-5 text-black space-y-2">
      <li>Extended hose and adaptor kits specific to aircraft models</li>
      <li>Data export templates for maintenance records and compliance reports</li>
      <li>Custom test profiles for fleet-specific calibration requirements</li>
    </ul>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Air Data Test System Price
    </h3>
    <p className="text-black">
      The Air Data Test System price varies based on configuration (channels, remote operation features, and accessories). 
      For the best price tailored to your fleet’s needs, please contact Jetsys Defence for a personalized quote.
    </p>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Jetsys Defence for Air data Test system
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <h4 className="font-bold text-[#5C5649]">Leading Innovation in Aviation Equipment</h4>
            With decades of experience and a commitment to reliability, Jetsys Defence delivers tools tested to international standards for accuracy, durability, and operational safety.
          </li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5">
          <li>
            <h4 className="font-bold text-[#5C5649]">Exceptional Customer Support</h4>
            We provide setup assistance, troubleshooting, and scheduled calibration support to ensure your Air Data Test System operates flawlessly across its service life.
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
