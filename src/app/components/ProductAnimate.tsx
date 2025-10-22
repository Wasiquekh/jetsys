import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductAnimate = () => {
  return (
    <div>
      <section>
        <div className="container !pb-0">
          <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex justify-between p-5">
            <div className="   flex flex-col w-[30%]">
              <Image
                src="/images/Aviation Equipment.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">Aviation Equipment</h2>
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
              <div className=" grid grid-cols-3 gap-5">
                <Link href="/products/ground-support-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Ground Support Equipment.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Support Equipment
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Ground Supply Equipment .svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Supply Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-test-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Ground Test Equipment .svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Test Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-handling-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Ground Handling Equipment.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Handling Equipment 
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
                src="/images/Runway Spares.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">Runway Spares</h2>
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
                      src="/images/Mafi Spares.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">Mafi Spares</p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Runway Lights.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">Runway Lights</p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Signboards.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">Signboards</p>
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
                src="/images/Aircraft Spares & System .png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">
                Aircraft Spares & System 
              </h2>
              <p className="font-bold text-sm mb-5">
                Keeping Fleets Mission-Ready
              </p>
              <p className="font-normal text-sm mb-5">
                Our aircraft spares and systems are built for reliability and
                precision, ensuring mission readiness and long-term performance
                for every airborne platform.
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
                      src="/images/Aircraft Spares.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Support Equipment
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Aircraft Systems.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Supply Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-test-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Navy Spares.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Test Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-handling-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Aircraft Hoses.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Handling Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-handling-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/engine parts.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Handling Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-handling-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Fuel System Parts.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Handling Equipment 
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
                src="/images/Airborne Raw Materials.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">
                Airborne Raw Materials
              </h2>
              <p className="font-bold text-sm mb-5">
                Strength That Takes Flight
              </p>
              <p className="font-normal text-sm mb-5">
                We provide high-grade raw materials designed for aerospace
                durability, innovation, and efficiency — the foundation of
                next-gen aviation systems.
              </p>

              <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                Explore Now
              </button>
            </div>
            <div className="w-[50%]">
              <div className=" grid grid-cols-3 gap-5">
                <Link href="/products/ground-support-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Steel (Carbon).svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Support Equipment
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-supply-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Steel (Carbon).svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Supply Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-test-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Fasteners.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Test Equipment 
                    </p>
                  </div>
                </Link>
                <Link href="/products/ground-handling-equipment">
                  <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4">
                    <Image
                      src="/images/Airborne Glues.svg"
                      width={44}
                      height={45}
                      alt="Picture of the author"
                      className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className=" font-medium text-xl mb-4">
                      Ground Handling Equipment 
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAnimate;
