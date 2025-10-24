"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { IoSquareSharp } from "react-icons/io5";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useMemo } from "react";

const page = () => {
  // Put your image paths here
  const slides = useMemo(
    () => ["/images/furqaan.png", "/images/furqaan-2.png"],
    []
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);
  return (
    <div>
      <Header />
      <section className=" relative">
        <div className=" container">
          <div className=" w-3/4">
            <h1 className=" text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text">
              About our organization
            </h1>
            <p className=" font-medium text-base">
              Jetsys Defence is a dynamic and innovation-driven aerospace and
              defence company headquartered in India. Focused on
              mission-critical technologies, we specialize in developing
              advanced solutions for airborne platforms, avionics, and tactical
              systems — all engineered to deliver exceptional performance,
              reliability, and impact.
              <br />
              <br />
              Driven by a commitment to indigenous development and strategic
              collaboration, Jetsys Defence designs and delivers next-generation
              systems tailored to meet the evolving demands of modern airpower.
              Our work extends beyond manufacturing systems — we empower air
              superiority, mission readiness, and a future-ready defence
              ecosystem that strengthens national capability.
            </p>
          </div>
        </div>
        <Image
          src="/images/about-us.png"
          width={450}
          height={450}
          alt="Picture of the author"
          className=" absolute right-0 top-10 -z-10"
        />
      </section>
      <section className="bg-[#5C5649]">
        <div className="container !pb-40">
          {/* Grid container with card layout */}
          <div className="flex justify-between items-center">
            {/* First Card (Who Are We?) */}
            <div className="bg-[#F0EFE9] rounded-2xl px-6 pt-4 pb-18 w-[450px] h-[350px] ">
              <IoSquareSharp className="ml-auto text-2xl rounded mb-12" />
              <p className="font-bold text-2xl mb-8">Who Are We?</p>
              <p className="font-medium text-base">
                We are an emerging force in the aerospace and defence industry,
                committed to delivering excellence through innovation and
                perseverance.
              </p>
            </div>

            {/* Connecting Line left */}
            <div className="">
              <svg
                className="signature-stroke"
                width="100"
                height="139"
                viewBox="0 0 147 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0189209 0.999817C86.1113 2.62944 60.9018 136.865 146.519 137.191"
                  stroke="#0B0B0B"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Second Card (Our Values) */}
            <div className="bg-[#F0EFE9] rounded-2xl px-6 pt-4 pb-18  w-[450px] h-[350px]">
              <IoSquareSharp className="ml-auto text-2xl rounded mb-12" />
              <p className="font-bold text-2xl mb-8">Our Values</p>
              <p className="font-medium text-base">
                Excellence, trust, and resilience are not just principles — they
                are the foundation of every system we build.
              </p>
            </div>

            {/* Connecting Line right */}
            <div className="">
              <svg
                className="signature-stroke"
                width="100"
                height="139"
                viewBox="0 0 147 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M146.504 0.999817C60.4114 2.62944 85.6209 136.865 0.00378437 137.191"
                  stroke="#0B0B0B"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Third Card (What Do We Do?) */}
            <div className="bg-[#F0EFE9] rounded-2xl px-6 pt-4 pb-18  w-[450px] h-[350px]">
              <IoSquareSharp className="ml-auto text-2xl rounded mb-12" />
              <p className="font-bold text-2xl mb-8">What Do We Do?</p>
              <p className="font-medium text-base">
                We specialize in designing, developing, and scaling advanced
                systems that meet the evolving needs of our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container">
          <div className=" w-full grid grid-cols-4 gap-5">
            <div className=" flex flex-col gap-5">
              <Image
                src="/images/aboutPlane.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">1000+</p>
                <p className=" font-medium text-base">
                  Precision Parts <br /> Manufactured
                </p>
              </div>
            </div>
            <div className=" flex flex-col-reverse gap-5">
              <Image
                src="/images/aboutHelicopter.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">99%</p>
                <p className=" font-medium text-base text-center">
                  Quality <br /> Assurance Rate
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <Image
                src="/images/aboutDrone.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">300+</p>
                <p className=" font-medium text-base text-center">
                  Precision Tests <br /> Conducted
                </p>
              </div>
            </div>
            <div className=" flex flex-col-reverse gap-5">
              <Image
                src="/images/aboutShip.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">18+</p>
                <p className=" font-medium text-base text-center">
                  Testing & Validation <br /> Processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0EFE9]">
        <div className="container !pb-0">
          <h1 className="text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text">
            Our team
          </h1>

          <div className="w-full flex justify-center">
            {/* ✅ Embla carousel keeps your same center layout */}
            <div
              className="overflow-hidden w-full flex justify-center"
              ref={emblaRef}
            >
              <div className="flex">
                {slides.map((src, i) => (
                  <div key={i} className="flex-[0_0_100%] flex justify-center">
                    <Image
                      src={src}
                      width={700}
                      height={700}
                      alt="Our team"
                      className="ml-30 mt-3"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
