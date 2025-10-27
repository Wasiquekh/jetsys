import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ProductAnimate from "../components/ProductAnimate";
import StickyHeader from "../components/StickyHeader";

const page = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
          <h1 className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text">
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
      <ProductAnimate />

      <Footer />
    </div>
  );
};

export default page;
