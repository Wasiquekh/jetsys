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
\
      {/* ---------- STATIC: Runway Spares (no animation) ---------- */}
        <section>
        <div className="container">
          <div className=" rounded-2xl flex justify-between p-5">
            {/* Left column */}
            <div className="flex flex-col w-[30%]">
              <Image
                src="/images/Airborne Raw Materials.png"
                width={500}
                height={500}
                alt="Airborne Raw Materials"
                className="mb-5 rounded-2xl"
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
              {/* <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base transition">
                Explore Now
              </button> */}
            </div>

            {/* Right column */}
            <div className="w-[50%]">
              <div className="grid grid-cols-3 gap-5 items-stretch">
                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Steel (Carbon).svg"
                      width={44}
                      height={45}
                      alt="Steel (Low Carbon)"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">
                      Steel (Low Carbon)
                    </p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Steel (Carbon).svg"
                      width={44}
                      height={45}
                      alt="Steel (Carbon)"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Steel (Carbon)</p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Fasteners.svg"
                      width={44}
                      height={45}
                      alt="Fasteners"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Fasteners</p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Airborne Glues.svg"
                      width={44}
                      height={45}
                      alt="Airborne Glues"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Airborne Glues</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
