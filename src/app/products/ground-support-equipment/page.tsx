import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-6xl text-center mb-5">
            Ground Support Equipment 
          </h1>
          <p className=" font-medium text-base text-center ">
            From concept to creation, we craft solutions that inspire trust,
            ensure performance, and push boundaries. Built with precision, they
            address the demands of modern aerospace technology while setting new
            industry benchmarks.
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
          <div className=" border border-primary rounded-3xl flex items-center gap-16 p-7">
            <div>
              <Image
                src="/images/Nitrogen Trolley.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Nitrogen Trolley
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br /> A rugged, portable system
                engineered for safe and efficient nitrogen charging in critical
                aircraft systems
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Description</strong> <br /> A rugged, portable system
                engineered for safe and efficient nitrogen charging in critical
                aircraft systems
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded ">
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
