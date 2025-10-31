"use client";
import React from "react";
import Image from "next/image";
import ScrollUpText from "./ScrollUpText";
const WhyChoose = () => {
  return (
    <section className="bg-[#EBE4CF]">
      <div className="container">
        <ScrollUpText className="mx-auto text-center text-[#5c5649] text-[30px] md:text-[40px] font-extrabold uppercase mb-5 w-full md:w-[80%] horizon">
          Why Choose Us?
        </ScrollUpText>

        <p className="text-base text-black font-medium text-center mb-5">
          We deliver high-precision aerospace components through advanced
          manufacturing and R&amp;D-driven innovation. Backed by system
          engineering and rigorous testing, our solutions ensure reliability in
          mission-critical environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mt-12">
          {/* Card 1 */}
          <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
            <Image
              src="/images/choose-1.png"
              width={305}
              height={220}
              alt="Advanced Manufacturing"
              className="w-full"
            />
            <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
              Advanced Manufacturing
            </p>
          </div>

          {/* Card 2 */}
          <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
            <Image
              src="/images/choose-2.png"
              width={305}
              height={220}
              alt="Partner Focused"
              className="w-full"
            />
            <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
              Partner Focused
            </p>
          </div>

          {/* Card 3 */}
          <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
            <Image
              src="/images/choose-3.png"
              width={305}
              height={220}
              alt="System Integration"
              className="w-full"
            />
            <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
              System Integration
            </p>
          </div>

          {/* Card 4 */}
          <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
            <Image
              src="/images/choose-4.png"
              width={305}
              height={220}
              alt="Timely Delivery"
              className="w-full"
            />
            <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
              Timely Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
