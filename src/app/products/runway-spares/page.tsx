"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import ScrollUpText from "@/app/components/ScrollUpText";

export default function Page() {
  return (
    <div>
        <Header />
        <StickyHeader />
               <section>
                 <div className="container">
                   <ScrollUpText className=" text-center text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                     Our Products
                        </ScrollUpText>
                   <h2 className=" font-bold text-2xl md:text-3xl text-[#5C5649] text-center mb-5">
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
                   <div className=" w-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 justify-center items-center">
                     <Image
                       src="/images/Tactical Engineering.svg"
                       width={160}
                       height={234}
                       alt="Picture of the author"
                       className=" w-[120px] m-auto"
                     />
                     <Image
                       src="/images/System Integration.svg"
                       width={160}
                       height={234}
                       alt="Picture of the author"
                       className=" w-[120px] m-auto"
                     />
                     <Image
                       src="/images/Built for Endurance.svg"
                       width={160}
                       height={234}
                       alt="Picture of the author"
                       className=" w-[120px] m-auto"
                     />
                     <Image
                       src="/images/Modular Flexibility.svg"
                       width={160}
                       height={234}
                       alt="Picture of the author"
                       className=" w-[120px] m-auto"
                     />
                     <Image
                       src="/images/Laser Precision.svg"
                       width={160}
                       height={234}
                       alt="Picture of the author"
                       className=" w-[120px] m-auto"
                     />
                   </div>
                 </div>
               </section>
\
      {/* ---------- STATIC: Runway Spares (no animation) ---------- */}
      <section>
        <div className="container">
          <div className=" rounded-2xl  flex flex-col md:flex-row justify-between p-5">
            {/* Left column */}
            <div className="flex flex-col w-full md:w-[30%]">
              <Image
                src="/images/Runway Spares.png"
                width={500}
                height={500}
                alt="Runway Spares"
                className="mb-5 rounded-2xl"
              />
              <h2 className="font-bold text-2xl mb-5">Runway Spares</h2>
              <p className="font-bold text-sm mb-5">
                Ensuring Operational Continuity
              </p>
              <p className="font-normal text-sm mb-5">
                Our comprehensive range of runway spares ensures seamless
                operations, enabling uninterrupted performance for your fleet.
              </p>
              {/* <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base transition">
                Explore Now
              </button> */}
            </div>

            {/* Right column */}
            <div className="w-full md:w-[50%]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-4 md:mt-0">
                <Link href="/products/runway-spares/mafi-spares">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Mafi Spares.svg"
                      width={44}
                      height={45}
                      alt="Mafi Spares"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Mafi Spares</p>
                  </div>
                </Link>

                <Link href="/products/runway-spares/runway-lights">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Runway Lights.svg"
                      width={44}
                      height={45}
                      alt="Runway Lights"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Runway Lights</p>
                  </div>
                </Link>

                <Link href="/products/runway-spares/signbords">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Signboards.svg"
                      width={44}
                      height={45}
                      alt="Signboards"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Signboards</p>
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
