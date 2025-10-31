"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import AboutLineAnimation from "../components/AboutLineAnimation";
import ScrollUpText from "../components/ScrollUpText";
import SEO from "../common/seo";
const Page = () => {
  // Put your image paths here
  const slides = [
    "/images/furkaan.png",
    "/images/faizan.png",
    "/images/faisal.png",
    "/images/faheem.png",
    "/images/abubakar.png",
  ];

 // const sectionRef = useRef<HTMLElement | null>(null);

  return (
  <>
  <SEO
        pageTitle=  {
         "About Jetsys Defence | India’s Innovation-Driven Aerospace Company"
            }
        description= {
            "Jetsys Defence is an agile, innovation-led aerospace and defence company in India specializing in mission-critical avionics, airborne platforms, and tactical systems."}
        />
    <div>
      <Header />
      <StickyHeader />
      <section className=" relative">
        <div className=" container">
          <div className=" w-full md:w-3/4">
            <ScrollUpText className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon text-center md:text-start">
              About our organization
                   </ScrollUpText>
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
          className=" absolute right-0 top-10 -z-10 hidden md:block"
        />
      </section>
      <AboutLineAnimation />

      <section>
        <div className=" container">
          <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className=" flex flex-col gap-5">
              <Image
                src="/images/aboutPlane.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">1000+</p>
                <ScrollUpText className=" font-medium text-base">
                  Precision Parts <br /> Manufactured
                       </ScrollUpText>
              </div>
            </div>
            <div className=" flex flex-col  md:flex-col-reverse gap-5">
              <Image
                src="/images/aboutHelicopter.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">99%</p>
                <ScrollUpText className=" font-medium text-base text-center">
                  Quality <br /> Assurance Rate
                       </ScrollUpText>
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
                <ScrollUpText className=" font-medium text-base text-center">
                  Precision Tests <br /> Conducted
                       </ScrollUpText>
              </div>
            </div>
            <div className=" flex flex-col md:flex-col-reverse gap-5">
              <Image
                src="/images/aboutShip.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
              <div className=" bg-[#EDEBD2] border border-primary rounded-2xl flex flex-col items-center py-8">
                <p className=" font-bold text-[40px] mb-2">18+</p>
                <ScrollUpText className=" font-medium text-base text-center">
                  Testing & Validation <br /> Processes
                       </ScrollUpText>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR TEAM SECTION */}

      <section className="bg-[#F0EFE9]">
        <div className="container !pb-0">
          <h1 className="text-center text-[#5c5649] text-[26px] md:text-[40px] font-extrabold uppercase mb-7 horizon">
            Our team
          </h1>
          <div className="w-full  mx-auto">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={30}
            >
              {slides.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <Image
                      src={img}
                      width={1000}
                      height={1000}
                      alt={`Team member ${index + 1}`}
                      className="ml-0 md:ml-48 -mb-8"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
  );
};

export default Page;
