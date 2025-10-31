import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import StickyHeader from "@/app/components/StickyHeader";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-3xl md:text-6xl text-center mb-5">
            Runway Lights
          </h1>
          <p className=" font-medium text-base text-center ">
            Jetsys Runway Lights enhance visibility, safety, and operational
            control in all conditions. Engineered with precision optics and
            long-life durability. Guiding every mission from approach to
            touchdown.
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
                src="/images/Touchdown Zone Light.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Touchdown Zone Light
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />
                Precision optical lighting engineered for clear touchdown zone
                visibility.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Used to enhance pilot approach and landing safety.
              </p>
              <Link href="/products/runway-spares/runway-lights/touchdown-zone-light">
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-primary rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 p-4 md:p-9 mb-16">
            <div>
              <Image
                src="/images/Taxiway Edge Inset Light.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
                className=" rounded-2xl"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Taxiway Edge Inset Light
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description </strong> <br />
                Durable inset lighting designed for clear taxiway visibility in
                a l conditions.
              </p>

              <p className="font-medium text-base mb-4">
                <strong>Usage </strong> <br />
                Used for safe ground navigation in low-visibility environments.
              </p>
              <Link href="/products/runway-spares/runway-lights/taxiway-edge-inset-light">
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
