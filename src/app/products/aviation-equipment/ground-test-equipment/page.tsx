import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import StickyHeader from "@/app/components/StickyHeader";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-6xl text-center mb-5">
            Ground Test Equipment 
          </h1>
          <p className=" font-medium text-base text-center ">
            From concept to creation, we craft solutions that inspire trust,
            ensure performance, and push boundaries. Built with precision, they
            address the demands of modern aerospace technology while setting new
            industry benchmarks.
          </p>
        </div>

        <Image
          src="/images/desgin-top-left.svg"
          width={200}
          height={200}
          alt="Picture of the author"
          className=" absolute top-0 left-0"
        />

        <Image
          src="/images/design-bottm-right.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className=" absolute bottom-0 right-0"
        />
      </section>
      <section>
        <div className="container">
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Brake Valve Test Rig.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
                className=" "
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Brake Valve Test Rig
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A precision test rig
                designed to verify the performance and safety of aircraft brake
                valves.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used for engine starting, avionics testing, and powering onboard
                systems without using the aircraft’s own engines or APU.
              </p>
              <Link href="/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Automated Pitot Leak Tester.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Automated Pitot Leak Tester
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description </strong> <br />
                Lightweight, high-accuracy tester for pitot-static systems,
                validating air data instruments and autopilots.
              </p>

              <p className="font-medium text-base mb-4">
                <strong>Usage </strong> <br />
                Used for RVSM compliance testing with cockpit-ready remote
                operation and built-in pumps.
              </p>

              <Link href="/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Air Data Test System.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Air Data Test System
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A system for safety &
                performance in military & commercial aircraft through simulation
                and calibration.
              </p>

              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used to test and simulate airspeed, altitude, and pressure
                conditions during aircraft maintenance.
              </p>
              <Link href="/products/aviation-equipment/ground-test-equipment/air-data-test-system">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Hydraulic Test Rig (HTR).png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Hydraulic Test Rig (HTR)
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A precision hydraulic rig
                for functional and leak testing of aerospace-grade components.
              </p>

              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used for validating actuators, valves, and critical hydraulic
                assemblies up to 5000 PSI.
              </p>
              <Link href="/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Glass Optical Properties Checker.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Glass Optical Properties Checker
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A equipment used to test and
                verify the transparency, refractive index, and distortion levels
                of aircraft canopy and windshield glass.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Ensures pilot visibility and safety by detecting defects, stress
                patterns, or optical distortions in aviation grade glass.
              </p>
              <Link href="/products/aviation-equipment/ground-test-equipment/glass-optical-properties-checker">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/SASD Test Rig.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">SASD Test Rig</h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                An advanced diagnostic rig simulating real-world actuation of
                Safe and Arm Safety Devices.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used for defence validation of SASD components under rotational
                thresholds with ful safety interlocks.
              </p>
              <Link href="/products/aviation-equipment/ground-test-equipment/sasd-test-rig">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
