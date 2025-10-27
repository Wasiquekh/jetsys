import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import StickyHeader from "@/app/components/StickyHeader";

const page = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-6xl text-center mb-5">
            Ground Support Equipment 
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
                src="/images/Nitrogen Trolley.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Nitrogen Trolley
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br /> A rugged, portable system
                engineered for safe and efficient nitrogen charging in critical
                aircraft systems
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used to fil or top-up nitrogen in hydraulic accumulators, tires,
                and landing gear struts
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Nose Jack & Main Jack.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Nose Jack & Main Jack
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description </strong> <br /> Hydraulic jacks designed
                to lift the nose gear (nose jack) or main landing gear (main
                jack) of an aircraft.
              </p>

              <p className="font-medium text-base mb-4">
                <strong>Usage </strong> <br /> They are used during maintenance,
                wheel/brake replacement, and landing gear servicing
              </p>

              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Aircraft Tow Bar.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
                className=" rounded-2xl"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Aircraft Tow Bar
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                Ground support equipment used to connect an aircraft’s nose
                landing gear to a towing vehicle.
              </p>

              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                It enables safe aircraft movement on the ground for parking,
                repositioning, or maintenance.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Protractor Unit for DAU Vane Angles.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Protractor Unit for DAU Vane Angles
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A compact and accurate
                measurement device designed to ensure the correct alignment of
                DAU vanes.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used for measuring vane angles to optimize airflow control
                systems in aircraft.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Nato Cable.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">Nato Cable</h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A standardized electrical
                power cable designed as per NATO (North Atlantic Treaty
                Organization) specifications.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                used in military and aerospace applications for connecting
                ground power units (GPU) to aircraft and vehicles.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl grid grid-cols-2 items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Aircraft Looms, Cables & Harnesses.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Aircraft Looms, Cables & Harnesses
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                Bundled wires in protective sleeves for power, signal, and
                system integration.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br /> Connects avionics, sensors,
                communication, power circuits, flight control, navigation,
                engine monitoring, and lighting systems.
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
