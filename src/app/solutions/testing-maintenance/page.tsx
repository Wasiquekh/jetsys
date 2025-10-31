"use client";

import Image from "next/image";
import Link from "next/link";
import Header  from "@/app/components/Header";
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
                      src="/images/Local  Sourcing.svg"
                      width={160}
                      height={234}
                      alt="Picture of the author"
                      className=" w-[120px]"
                    />
                    <Image
                      src="/images/Import  Substitution.svg"
                      width={160}
                      height={234}
                      alt="Picture of the author"
                      className=" w-[120px]"
                    />
                    <Image
                      src="/images/Custom  Adaptation.svg"
                      width={160}
                      height={234}
                      alt="Picture of the author"
                      className=" w-[120px]"
                    />
                    <Image
                      src="/images/Multiple Application.svg"
                      width={160}
                      height={234}
                      alt="Picture of the author"
                      className=" w-[120px]"
                    />
                    <Image
                      src="/images/Design Ownership.svg"
                      width={160}
                      height={234}
                      alt="Picture of the author"
                      className=" w-[120px]"
                    />
                  </div>
                </div>
              </section>


      {/* ---------- STATIC: Testing & Maintenance ---------- */}
      <section>
        <div className="container !pb-4">
          <div className=" rounded-2xl flex justify-between p-5">
            {/* Left column */}
            <div className="flex flex-col w-[30%]">
              <Image
                src="/images/Testing & Maintenance.png"
                width={500}
                height={500}
                alt="Testing & Maintenance"
                className="mb-5 rounded-2xl"
              />
              <h2 className="font-bold text-2xl mb-5">Testing & Maintenance</h2>
              <p className="font-bold text-sm mb-5">Ensuring Operational Continuity</p>
              <p className="font-normal text-sm mb-5">
                Our comprehensive range of runway spares ensures seamless operations,
                enabling uninterrupted performance for your fleet.
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
                      src="/images/Aircraft Testers.svg"
                      width={44}
                      height={45}
                      alt="Aircraft Testers"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Aircraft Testers</p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Test Stands & Test Rigs.svg"
                      width={44}
                      height={45}
                      alt="Test Stands & Test Rigs"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Test Stands & Test Rigs</p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                    <Image
                      src="/images/Aircraft Fixtures.svg"
                      width={44}
                      height={45}
                      alt="Aircraft Fixtures"
                      className="bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                    />
                    <p className="font-medium text-xl mb-4">Aircraft Fixtures</p>
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
