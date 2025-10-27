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
            Taxiway Guidance Sign
          </h1>
          <p className=" font-medium text-base text-center ">
            Jetsys provides reliable MAFI spares engineered for precision and
            heavy-duty performance. Crafted to meet military standards for
            airbase and logistic operations. Ensuring uninterrupted ground
            mobility and equipment uptime.
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
                src="/images/Taxiway Guidance Sign.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Taxiway Guidance Sign
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                High-visibility, interna ly i luminated sign for taxiway
                direction.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used to provide reliable ground traffic cues with complete
                accessory kit.
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
