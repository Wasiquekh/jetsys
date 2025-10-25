import React from "react";
import Image from "next/image";
import Link from "next/link";

const SolutionAnimate = () => {
  return (
    <div>
      <section>
        <div className="container !pb-0">
          <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex justify-between p-5">
            <div className="   flex flex-col w-[30%]">
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

              <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                Explore Now
              </button>
            </div>
            <div className="w-[50%]">
              <div className=" grid grid-cols-3 gap-5 items-stretch">
                <Link href="/solutions/indegenization/indegenization-equipments">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Equipments.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">Equipments</p>
                  </div>
                </Link>
                <Link href="#">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Airbourne Spares.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Airbourne Spares
                    </p>
                  </div>
                </Link>
                <Link href="#">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Non-airbourne Spares.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Non-airbourne Spares
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container !pb-0">
          <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex justify-between p-5">
            <div className="   flex flex-col w-[30%]">
              <Image
                src="/images/Testing & Maintenance.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">Testing & Maintenance</h2>
              <p className="font-bold text-sm mb-5">
                Ensuring Operational Continuity
              </p>
              <p className="font-normal text-sm mb-5">
                Our comprehensive range of runway spares ensures seamless
                operations, enabling uninterrupted performance for your fleet.
              </p>

              <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                Explore Now
              </button>
            </div>
            <div className="w-[50%]">
              <div className=" grid grid-cols-3 gap-5 items-stretch">
                <Link href="/products/ground-support-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Aircraft Testers.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      {" "}
                      Aircraft Testers
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Test Stands & Test Rigs.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Test Stands & Test Rigs
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Aircraft Fixtures.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Aircraft Fixtures
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default SolutionAnimate;
