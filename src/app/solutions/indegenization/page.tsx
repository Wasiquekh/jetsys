"use client";

import Image from "next/image";
import Link from "next/link";
import Header  from "@/app/components/Header";
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
                   Our Solutions
                        </ScrollUpText>
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
                 <div className=" w-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 justify-center items-center">
                   <Image
                     src="/images/Local  Sourcing.svg"
                     width={160}
                     height={234}
                     alt="Picture of the author"
                     className=" w-[120px] m-auto"
                   />
                   <Image
                     src="/images/Import  Substitution.svg"
                     width={160}
                     height={234}
                     alt="Picture of the author"
                     className=" w-[120px] m-auto"
                   />
                   <Image
                     src="/images/Custom  Adaptation.svg"
                     width={160}
                     height={234}
                     alt="Picture of the author"
                     className=" w-[120px] m-auto"
                   />
                   <Image
                     src="/images/Multiple Application.svg"
                     width={160}
                     height={234}
                     alt="Picture of the author"
                     className=" w-[120px] m-auto"
                   />
                   <Image
                     src="/images/Design Ownership.svg"
                     width={160}
                     height={234}
                     alt="Picture of the author"
                     className=" w-[120px] m-auto" 
                   />
                 </div>
               </div>
             </section>
      {/* ---------- STATIC: Indegenization ---------- */}
      <section>
        <div className="container">
          <div className=" rounded-2xl  flex flex-col md:flex-row justify-between p-5">
            {/* Left column */}
            <div className="flex flex-col w-full md:w-[30%]">
              <Image
                src="/images/Indegenization.png"
                width={500}
                height={500}
                alt="Indegenization"
                className="mb-5 rounded-2xl"
              />
              <h2 className="font-bold text-2xl mb-5">Indegenization</h2>
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
            <div className="w-full md:w-[50%]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-4 md:mt-0">
                <Link href="/solutions/indegenization/indegenization-equipments">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Equipments.svg"
                      width={44}
                      height={45}
                      alt="Equipments"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Equipments</p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Airbourne Spares.svg"
                      width={44}
                      height={45}
                      alt="Airbourne Spares"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Airbourne Spares</p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Non-airbourne Spares.svg"
                      width={44}
                      height={45}
                      alt="Non-airbourne Spares"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Non-airbourne Spares</p>
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
