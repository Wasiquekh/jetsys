import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-6xl text-center mb-5">
            Ground Supply Equipment
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
                src="/images/Ground Power Unit.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Ground Power Unit
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A mobile or fixed power
                supply system that provides electrical power to aircraft while
                on the ground.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used for engine starting, avionics testing, and powering onboard
                systems without using the aircraft’s own engines or APU.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Pneumatic Control Panel.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Pneumatic Control Panel
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description </strong> <br /> A robust ground panel for
                precision pneumatic regulation and aircraft system testing.
              </p>

              <p className="font-medium text-base mb-4">
                <strong>Usage </strong> <br />
                Used to charge and test pneumatic subsystems like brakes,
                actuators, and landing gear.
              </p>

              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Hydraullic Servicing Trolley.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Hydraullic Servicing Trolley
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A ground support equipment
                used to store, filter, and supply hydraulic fluid to an
                aircraft’s hydraulic system.
              </p>

              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Essential for topping up, flushing, and maintaining aircraft
                hydraulics during ground servicing.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Portable Engine Starting Trolley.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Portable Engine Starting Trolley
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                Rugged, portable GSE delivering high electrical power for smooth
                aircraft engine starts.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used in military and civil aviation for safe, efficient starts
                at hangars, tarmacs, and remote bases.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Fuel Consumption Trolley.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Fuel Consumption Trolley
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A ground support equipment
                used to measure and monitor the fuel consumed by an aircraft
                during ground runs or testing.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Helps ensure accurate fuel system calibration, leak checks, and
                performance validation.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
