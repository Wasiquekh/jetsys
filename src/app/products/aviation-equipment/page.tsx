"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";

export default function Page() {
  return (
    <div>
        <Header />
        <StickyHeader />
              <section>
                <div className="container">
                  <h1 className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                    Our Products
                  </h1>
                  <h2 className=" font-bold text-3xl text-[#5C5649] text-center mb-5">
                    Empowering the Future of Aerospace Engineering
                  </h2>
                  <p className=" font-medium text-base text-center">
                    From concept to creation, we craft solutions that inspire trust,
                    ensure performance, and push boundaries. Built with precision, they
                    address the demands of modern aerospace technology while setting new
                    industry benchmarks.
                  </p>
                </div>
              </section>
              <section>
                <div className=" container !pt-0">
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
                  </div>
                </div>
              </section>
      {/* ---------- STATIC: Aviation Equipment (no animation) ---------- */}
      <section>
        <div className="container">
          <div className=" rounded-2xl flex justify-between p-5">
            {/* Left column */}
            <div className="flex flex-col w-[30%]">
              <Image
                src="/images/Aviation Equipment.png"
                width={500}
                height={500}
                alt="Aviation Equipment"
                className="mb-5 rounded-2xl"
              />
              <h2 className="font-bold text-2xl mb-5">Aviation Equipment</h2>
              <p className="font-bold text-sm mb-5">Precision Beyond Expectations</p>
              <p className="font-normal text-sm mb-5">
                Our aviation equipment portfolio is engineered to deliver high performance,
                meeting rigorous industry standards. Explore how our products optimize
                operational excellence in aviation.
              </p>
              {/* <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base transition">
                Explore Now
              </button> */}
            </div>

            {/* Right column */}
            <div className="w-[50%]">
              <div className="grid grid-cols-3 gap-5 items-stretch">
                <Link href="/products/aviation-equipment/ground-support-equipment">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Ground Support Equipment.svg"
                      width={44}
                      height={45}
                      alt="Ground Support Equipment"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Ground Support Equipment</p>
                  </div>
                </Link>

                <Link href="/products/aviation-equipment/ground-supply-equipment">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Ground Supply Equipment.svg"
                      width={44}
                      height={45}
                      alt="Ground Supply Equipment"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Ground Supply Equipment</p>
                  </div>
                </Link>

                <Link href="/products/aviation-equipment/ground-test-equipment">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Ground Test Equipment.svg"
                      width={44}
                      height={45}
                      alt="Ground Test Equipment"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Ground Test Equipment</p>
                  </div>
                </Link>

                <Link href="/products/aviation-equipment/ground-handling-equipment">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Ground Handling Equipment.svg"
                      width={44}
                      height={45}
                      alt="Ground Handling Equipment"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Ground Handling Equipment</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* If you want a heading above, keep it outside the card */}
          {/* <h2 className="text-3xl font-bold mt-8">Aviation Equipment</h2> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
