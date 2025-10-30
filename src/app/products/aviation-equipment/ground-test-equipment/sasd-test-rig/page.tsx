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
         "SASD Test Rig for Aircraft | Jetsys Defence Aviation Equipment"
            }
        description= {
            "Explore Jetsys Defence SASD Test Rig designed for aircraft system testing. Find your nearest branch and check the latest SASD Test Rig price today."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
  <div>
                <h1 className=" text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon">SASD Test Rig for Aircraft – Precision Testing by Jetsys Defence</h1>
                 <p className=" font-medium text-base">The SASD Test Rig by Jetsys Defence is engineered for dependable testing of aircraft hydraulic and pneumatic systems. Built with aerospace-grade components and smart automation, it helps maintenance facilities, research labs, and MRO centers ensure aircraft system performance under real operational loads. Whether an organization needs a new SASD Test Rig, wants to find a nearest SASD Test Rig branch, or is evaluating SASD Test Rig price options, Jetsys Defence offers a complete, scalable solution.
                  </p><br></br>
               <br></br>
               <div>
          <Image
                src="/images/SASD Test Rig.png"
                width={500}
                height={1000}
                alt="Picture of the author"
              />
                      </div> 
    <section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      What is a SASD Test Rig?
    </h3>

    <p className="text-black mb-4">
      A SASD Test Rig is a controlled aerospace testing platform that simulates real flight and ground conditions. 
      It applies pressure, flow, temperature fluctuation, and load cycles to verify aircraft system endurance, 
      response time, leak resistance, and operational accuracy.
    </p>

    <p className="text-black">
      Jetsys Defence designs the SASD Test Rig to deliver laboratory-grade precision while remaining robust enough 
      for continuous industrial and military use.
    </p>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Applications of SASD Test Rig
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aircraft Component Validation</h4>
            Pressure testing of actuators, valves, pumps, hoses, pipes, and fittings. 
            Measures leakage, hysteresis, and performance decay with durability and accelerated fatigue testing.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Laboratory & R&D</h4>
            Used for qualification of prototype aerospace systems, with reconfigurable modes for different components 
            and controlled pressure surge/impulse simulations.
          </li>

        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">MRO & Manufacturing</h4>
            Supports acceptance tests before aircraft delivery, endurance runs after overhaul, 
            and temperature-based cycle tests to identify early faults.
          </li>

        </ul>
      </div>

    </div>
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
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Key Features of the SASD Test Rig
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Indigenised Design & Manufacture</h4>
            Developed and built in India, reducing dependence on imported test equipment and improving local serviceability and upgrade support.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Modular Rig & Chamber Configuration</h4>
            Supports interchangeable test modules and optional environmental chambers (temperature, humidity, vibration) for diverse test protocols.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Precision Instrumentation & Measurement</h4>
            Compatible with high-accuracy aerospace sensors including pressure, flow, strain, load, optical performance, and calibration modules.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Compliance-Ready for Defence & Aviation</h4>
            Rugged design aligned with military and aviation OEM requirements—suitable for endurance testing, certification, and QA workflows.
          </li>

        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Customisable Test Protocols</h4>
            Configurable for component type, test loads, pressures, temperature profiles, environmental conditions, and automation levels.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Robust Structure & Heavy-Duty Components</h4>
            Built with industrial-grade steel/aluminium frames, vibration isolation, precision alignment fixtures, and safety interlocks.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Data Logging, Reporting & Traceability</h4>
            Provides logged test data, configurable reports, calibration traceability, and audit-ready output for defence QA teams.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Ease of Maintenance & Support</h4>
            Local spares, technician access, and faster turnaround compared to imported rigs—ideal for continuous industrial use.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Flexible Integration with OEM Workflows</h4>
            Deployable in production lines, labs, and MRO facilities for batch testing, acceptance checks, or R&D validation.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Scalable & Future-Proof Architecture</h4>
            Sensor modules, automation, and test standards can be upgraded as systems evolve—ready for future aerospace requirements.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>
<section><br></br><br></br>
  <div className="mx-auto">
    <h2 className="text-3xl font-bold text-[#5C5649] mb-2">Technical Specifications of SASD Test Rig</h2>

    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">Capability</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">Details</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">Working Fluid</td>
            <td className="px-4 py-2 border-b">Hydraulic Oil / Synthetic Fluids</td>
            <td className="px-4 py-2 border-b">Compatible with aerospace-grade fluids</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Pressure Range</td>
            <td className="px-4 py-2 border-b">Up to 600 Bar (configurable)</td>
            <td className="px-4 py-2 border-b">Stable control with low ripple</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Flow Control</td>
            <td className="px-4 py-2 border-b">Closed-loop</td>
            <td className="px-4 py-2 border-b">Precision servo-valves</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Waveform Type</td>
            <td className="px-4 py-2 border-b">Square / Peak / Custom</td>
            <td className="px-4 py-2 border-b">20+ programmable waveform points</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Temperature Range</td>
            <td className="px-4 py-2 border-b">–50°C to +135°C (optional variants)</td>
            <td className="px-4 py-2 border-b">Supports cold-soak &amp; high-temperature cycles</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Test Modes</td>
            <td className="px-4 py-2 border-b">Static, Dynamic, Cyclic, Burst, Impulse</td>
            <td className="px-4 py-2 border-b">Single and multi-channel</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Power Supply</td>
            <td className="px-4 py-2 border-b">Electric, variable speed drive</td>
            <td className="px-4 py-2 border-b">High-efficiency motor pump set</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Data System</td>
            <td className="px-4 py-2 border-b">PLC + Industrial PC</td>
            <td className="px-4 py-2 border-b">Live graphs, reports, fault logs</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Safety Mechanisms</td>
            <td className="px-4 py-2 border-b">Pressure relief, emergency stop, alarms</td>
            <td className="px-4 py-2 border-b">Operator-safe enclosure</td>
          </tr>

          <tr>
            <td className="px-4 py-2 border-b">Test Chambers</td>
            <td className="px-4 py-2 border-b">Ambient, hot &amp; cold simulation</td>
            <td className="px-4 py-2 border-b">Optional dual-chamber setup</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      How SASD Testing Improves Aircraft Reliability
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Ensures Safety Compliance</h4>
            By exposing components to extreme pressure, temperature, and load conditions, SASD testing confirms 
            that aircraft parts remain safe and functional under real-world flight demands.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Reduces Maintenance Downtime</h4>
            Early detection of weak seals, fatigue failures, leaks, and material degradation prevents unexpected 
            in-service issues and reduces aircraft grounding time.
          </li>

        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Better Product Certification</h4>
            Standardized test sequences produce audit-ready data that supports aviation certification, acceptance 
            testing, and compliance documentation.
          </li>

        </ul>
      </div>

    </div>
  </div>
</section>

<section><br></br><br></br>
  <div>
    <p className="text-black mb-6">
      Standardized test sequences produce data suitable for audit and aviation certification requirements.
    </p>

    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Industries That Use SASD Test Rigs
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">
          <li>Aerospace manufacturing</li>
          <li>Defence aviation fleets</li>
          <li>Helicopter system maintenance</li>
        </ul>
      </div>

      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">
          <li>Research and educational labs</li>
          <li>Hydraulic equipment producers</li>
          <li>MRO and overhaul workshops</li>
        </ul>
      </div>

    </div>

    <br></br><br></br>

    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      SASD Test Rig Branch & Pricing
    </h3>

    <p className="text-black mb-4">
      Jetsys Defence operates dedicated aviation equipment facilities across multiple regions for demo testing,
      training, calibration, and after-sales service support.
    </p>

    <p className="text-black">
      To receive SASD Test Rig price estimates or locate the nearest service branch, customers can request a
      quotation with required pressure, flow, temperature, and component types. Configurations range from
      standard models to heavy-duty defence-grade units.
    </p>
  </div>
</section>
<section><br></br><br></br>
  <div>
    <h3 className="font-bold text-3xl text-[#5C5649] mb-5">
      Why Choose Jetsys Defence for SASD Test Rig
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* LEFT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Aerospace-Grade Engineering & Local Manufacturing</h4>
            Built with precision mechanical design, rugged fixtures, high-quality hardware, and reliable instrumentation—
            fully developed and supported in India for faster service and reduced import dependency.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Customized for Defence & Aviation Components</h4>
            Configurable for load conditions, fixtures, stroke lengths, sensors, actuator setups, and sample size—
            ideal for OEMs, MRO units, R&D labs, and defence production facilities.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Robust Structure for Harsh Test Conditions</h4>
            Uses aerospace-grade materials, vibration-isolated frames, and safety interlocks to ensure stable operation
            during endurance, stress, and cycle testing.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Precision Measurement & Advanced Data Logging</h4>
            High-accuracy sensors and DAQ modules capture pressure, displacement, force, temperature, and load cycles
            with detailed digital logs and automated reports for audit traceability.
          </li>

        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-black space-y-4">
        <ul className="list-disc pl-5 space-y-4">

          <li>
            <h4 className="font-bold text-[#5C5649]">Supports Multiple Test Standards & Protocols</h4>
            Suitable for acceptance tests, fatigue trials, endurance runs, and qualification testing aligned with defence
            specifications and calibration norms.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Reduced Lead Time, Faster Service & Spares</h4>
            Designed, manufactured, calibrated, and serviced in India—eliminating long waiting cycles associated with imported rigs.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Integration-Friendly & Future-Ready</h4>
            Can interface with PLC/SCADA, additional sensors, or data systems. Modular architecture allows upgrades without replacing the entire rig.
          </li>

          <li>
            <h4 className="font-bold text-[#5C5649]">Proven Partner for Defence & Aerospace Industry</h4>
            Trusted supplier of specialised test rigs, ground support equipment, and custom test benches for defence OEMs, aviation suppliers, and R&D centres.
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
