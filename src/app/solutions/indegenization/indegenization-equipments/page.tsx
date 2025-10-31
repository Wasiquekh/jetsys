import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-3xl md:text-6xl text-center mb-5">
            Indegenization Equipments
          </h1>
          <p className=" font-medium text-base text-center ">
            Jetsys leads India’s indigenization drive with advanced, homegrown
            engineering. We replace imports with precision-made, sovereign
            defence solutions. Building national capability through innovation
            and self-reliance.
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
          <div className="border border-primary rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 p-4 md:p-9 mb-16">
            <div>
              <Image
                src="/images/Totem Tray Harmonization Tool.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Totem Tray Harmonization Tool
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A specialized alignment tool
                developed for the MiG-29 to accurately calibrate subsystems
                mounted on the totem tray.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used to align optical devices, weapons, and sensors with the
                aircraft’s line of sight.
              </p>
              <Link href="/solutions/indegenization/indegenization-equipments/totem-tray-harmonization-tool">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-primary rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 p-4 md:p-9 mb-16">
            <div>
              <Image
                src="/images/Squib Tester.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">Squib Tester</h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A device used to check the
                continuity and resistance of squibs (explosive initiators) in
                aircraft safety systems without firing them.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Ensures reliability of systems like ejection seats, fire
                extinguishers, and emergency release mechanisms.
              </p>
              <Link href="/solutions/indegenization/indegenization-equipments/squib-tester">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-primary rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 p-4 md:p-9 mb-16">
            <div>
              <Image
                src="/images/Ring – Oil Feed.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
                className=" rounded-2xl"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">Ring – Oil Feed</h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                Precision oil sealing ring ensuring flow reliability in
                lubrication systems.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used in aerospace oil feed circuits for high-speed rotating
                assemblies.
              </p>
              <Link href="/solutions/indegenization/indegenization-equipments/ring-oil-feed">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-primary rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 p-4 md:p-9 mb-16">
            <div>
              <Image
                src="/images/Conformal Coating Removal Machine.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Conformal Coating Removal Machine
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A micro-blasting system
                engineered for precise, safe removal of PCB conformal coatings.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used in defence and aerospace electronics repair, failure
                analysis, and rework with ful ESD protection
              </p>
              <Link href="/solutions/indegenization/indegenization-equipments/conformal-coating-removal-machine">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-primary rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 p-4 md:p-9 mb-16">
            <div>
              <Image
                src="/images/Thermal Vacuum Chamber.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Thermal Vacuum Chamber
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                Aerospace-grade chamber for testing components under extreme
                thermal and vacuum conditions.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used for space, defence, and electronics reliability testing
                with PLC-controled automation.
              </p>
              <Link href="/solutions/indegenization/indegenization-equipments/thermal-vacuum-chamber">
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
