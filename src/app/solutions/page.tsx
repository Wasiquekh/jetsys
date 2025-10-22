import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import SolutionAnimate from "../components/SolutionAnimate";

const page = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="container">
          <h1 className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text">
            Our Solutions
          </h1>
          <h2 className=" font-bold text-3xl text-[#5C5649] text-center mb-5">
            End-to-end defence solutions for indigenization and self-reliance.
          </h2>
          <p className=" font-medium text-base text-center">
            We deliver intelligent, end-to-end defence and aerospace solutions —
            from indigenization and advanced testing to maintenance support —
            ensuring operational excellence, scalability, and strategic
            self-reliance.
          </p>
        </div>
      </section>
      <section>
        <div className=" container !pt-0">
          <div className=" w-full flex justify-between">
            <Image
              src="/images/Tactical Engineering.svg"
              width={160}
              height={234}
              alt="Picture of the author"
            />
            <Image
              src="/images/System Integration.svg"
              width={160}
              height={234}
              alt="Picture of the author"
            />
            <Image
              src="/images/Built for Endurance.svg"
              width={160}
              height={234}
              alt="Picture of the author"
            />
            <Image
              src="/images/Modular Flexibility.svg"
              width={160}
              height={234}
              alt="Picture of the author"
            />
            <Image
              src="/images/Laser Precision.svg"
              width={160}
              height={234}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      <SolutionAnimate />
      <section>
        <div className="container">
          {/* ⬇️ Added `items-stretch` to make all cards equal height */}
          <div className="grid grid-cols-3 gap-5 items-stretch">
            {/* Card 1 */}
            {/* ⬇️ Added `h-full flex flex-col` to enable button alignment */}
            <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col">
              <Image
                src="/images/Indegenization.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5 rounded-2xl"
              />
              <h2 className="font-bold text-2xl mb-5">Indegenization</h2>
              <p className="font-bold text-sm mb-5">
                Precision Beyond Expectations
              </p>
              <p className="font-normal text-sm mb-5">
                Our aviation equipment portfolio is engineered to deliver high
                performance, meeting rigorous industry standards. Explore how
                our products optimize operational excellence in aviation.
              </p>
              {/* ⬇️ Added `mt-auto` to push button to bottom */}
              <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                <span className="text-[#E9DCB4] font-semibold text-base">
                  Explore Now
                </span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col">
              <Image
                src="/images/Testing & Maintenance.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">
                Testing & Maintenance{" "}
              </h2>
              <p className="font-bold text-sm mb-5">
                Ensuring Operational Continuity
              </p>
              <p className="font-normal text-sm mb-5">
                Our comprehensive range of runway spares ensures seamless
                operations, enabling uninterrupted performance for your fleet.
              </p>
              <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                <span className="text-[#E9DCB4] font-semibold text-base">
                  Explore Now
                </span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col">
              <Image
                src="/images/Aircraft ROH.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">Aircraft ROH</h2>
              <p className="font-bold text-sm mb-5">
                Keeping Fleets Mission-Ready
              </p>
              <p className="font-normal text-sm mb-5">
                Our aircraft spares and systems are built for reliability and
                precision, ensuring mission readiness and long-term performance
                for every airborne platform.
              </p>
              <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                <span className="text-[#E9DCB4] font-semibold text-base">
                  Explore Now
                </span>
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
