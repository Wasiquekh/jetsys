import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <section className=" relative">
        <div className="container">
          <div className=" grid grid-cols-2 gap-30 items-center">
            <div>
              <h1 className=" text-6xl font-bold text-[#5C5649]">
                Take the First Step Toward Innovation with Jetsys Defence.
              </h1>
              <div className=" bg-[#E9DCB4] mt-10 p-7">
                <p className=" text-2xl font-medium mb-5">
                  Want to join our Team?
                </p>
                <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded ">
                  Know More
                </button>
              </div>
            </div>
            <div className=" bg-[#F0EFE9] p-8">
              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">Name</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>
              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">Company Name</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>
              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">Designation</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>

              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">Contact Number</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>
              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">Email Address</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>
              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">City</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>
              <div className="mb-4">
                <p className=" font-medium text-sm mb-1">Your Message</p>
                <input className="bg-white w-full h-8 rounded " type="text" />
              </div>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded w-full ">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <Image
          src="/images/desgin-top-left.svg"
          width={200}
          height={200}
          alt="Picture of the author"
          className=" absolute top-0 left-0 -z-10"
        />

        <Image
          src="/images/design-bottm-right.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className=" absolute bottom-0 right-0 -z-10"
        />
      </section>
      <Footer />
    </div>
  );
};

export default page;
