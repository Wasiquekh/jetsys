"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import BannerHeading from "./components/ScrollHeader";
import TrustedByLeadersHeading from "./components/ScrollHeader";
import ScalableImage from "./components/test";
import Carousel from "./components/test";
import CustomCarasoul from "./components/CustomCarasoul";
import OurOffering from "./components/OurOfferings";
import MobileLandingCards from "./components/MobileLandingCards";
import StickyHeader from "./components/StickyHeader";

// CODE FOR CLIENT LOGO FADE BOTTOM
const logoWrapperVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    // Use a cubic-bezier to satisfy the Transition type strictly
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const chooseCards = [
  { img: "/images/choose-1.png", title: "Advanced <br /> Manufacturing" },
  { img: "/images/choose-2.png", title: "Partner <br /> Focused" },
  { img: "/images/choose-3.png", title: "System <br /> Integration" },
  { img: "/images/choose-4.png", title: "Timely <br /> Delivery" },
];
const cards = [
  { img: "/images/offer-1.png", title: "Aviation Equipment" },
  { img: "/images/offer-2.png", title: "Raw Materials" },
  { img: "/images/offer-3.png", title: "Testing & Maintenance" },
  { img: "/images/offer-4.png", title: "Indigenization" },
  { img: "/images/offer-5.png", title: "Aircraft Spares" },
  { img: "/images/offer-6.png", title: "Runway Spares" },
  { img: "/images/offer-7.png", title: "Test Rigs & Test Chambers" },
  { img: "/images/offer-8.png", title: "Ground Support & Handling Equipment" },
  { img: "/images/offer-9.png", title: "Others" },
];

export default function Home() {
  // CODE FOR SCROLL ANIMATION why choose us SECTION
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties>({
    opacity: 1,
    transform: "translateX(0px)",
  });

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) return;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));

    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const triggerStart = vh * 0.9; // start animating near bottom
      const triggerEnd = vh * 0.25; // finish before hitting header

      let progress: number;

      if (rect.top >= triggerStart) {
        progress = 0; // fully visible, centered
      } else if (rect.top <= 0) {
        progress = 1; // fully hidden once section top reaches header
      } else {
        const t = (triggerStart - rect.top) / (triggerStart - triggerEnd);
        progress = clamp(t, 0, 1);
      }

      const translateX = progress * 140;
      const opacity = 1 - progress;

      setHeadingStyle({
        opacity,
        transform: `translateX(${translateX}px)`,
        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
        willChange: "opacity, transform",
      });

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    window.addEventListener("resize", update, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", update);
    };
  }, []);
  // END CODE FOR SCROLL ANIMATION AFTER why chosse us SECTION
  return (
    <>
      <Header />
      <StickyHeader />
      {/* HOME TOP */}
      <section className="relative w-full  h-[600px] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster.jpg" // fallback poster image
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 container ">
          <h1 className="text-4xl md:text-6xl  font-extrabold text-white  uppercase Horizon w-full  md:w-3/4 ">
            We Build,What Sky Demands
          </h1>
          <p className="mt-4 text-base font-semibold text-white md:text-xl  max-w-2xl capitalize">
            Leading aerospace with bold innovation
          </p>
          <button className="mt-6 px-10 py-3 bg-white text-base text-primary font-bold rounded shadow-lg hover:bg-primary transition border border-primary hover:text-white">
            Get Started
          </button>
        </div>
      </section>
      {/* AFTER TOP SECTION */}
      <section className=" hidden md:block">
        {" "}
        <CustomCarasoul />
      </section>
      <section className=" block md:hidden">
        <MobileLandingCards />
      </section>

      {/* ABOUT SECTION */}
      <section>
        <div className="container !pt-0 ">
          <h1 className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text">
            About our organization
          </h1>
          <p className=" text-base text-[#000] font-medium text-center mb-0 ">
            Jetsys Defence is an agile, innovation-driven aerospace and defence
            company based in India. We specialize in mission-critical
            technologies for airborne platforms, avionics, and tactical systems
            — engineered for performance, reliability, and national impact.
          </p>
          <div className=" py-10 px-4 md:px-10 w-full bg-[#5c5649] mt-30 mb-16   grid grid-cols-1 md:grid-cols-3 gap-10  items-center relative">
            <Image
              src="/images/mission.png"
              width={340}
              height={340}
              alt="Picture of the author"
              className=" absolute left-1/2 -translate-x-1/2 hidden md:block"
            />
            <div>
              <h2 className=" mb-4 text-3xl font-bold text-white text-center md:text-left ">
                Our Mission
              </h2>
              <p className=" text-base font-normal text-white text-justify ">
                At the heart of our journey is a bold mission — to accelerate
                growth and redefine the future of defence and aerospace. Through
                unwavering passion, precision, and purpose, we strive to create
                innovative, future-ready solutions.
              </p>
            </div>
            <div>
              <Image
                src="/images/mission.png"
                width={340}
                height={340}
                alt="Picture of the author"
                className=" block md:hidden"
              />
            </div>
            <div className=" -ml-1">
              <h2 className=" mb-4 text-3xl font-bold text-white text-center md:text-left">
                Our Vision
              </h2>
              <p className=" text-base font-normal text-white text-justify">
                We envision a future where our advanced technology and
                relentless pursuit of perfection redefine the standards of
                safety, security, and efficiency in the industry. To accelerate
                growth and redefine the future of defence and aerospace with
                passion, precision, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ICON DESIGN DESKTOP */}
      <div className=" hidden md:block">
        {/* RING */}
        <div className=" max-w-[1120px] px-5 mx-auto flex justify-between -z-10">
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className=" -z-10"
          />
        </div>
        {/* BACKGROUND THEME COLOR LINE */}
        <div className=" bg-primary h-14 -mt-[76px] -mb-[70px] z-10"></div>
        {/* ICON IMAGES */}
        <div className=" max-w-[1120px] px-5 mx-auto  flex justify-between">
          <Image
            src="/images/Expert-Engineers.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative left-[10px]"
          />
          <Image
            src="/images/Rapid-Deployment.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative left-[7px]"
          />
          <Image
            src="/images/Global-Reach.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative left-[5.5px]"
          />
          <Image
            src="/images/Indigenous-Capability.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative left-[2px]"
          />
          <Image
            src="/images/Precise-Production.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative right-[1px]"
          />
          <Image
            src="/images/Innovation-at-Core.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative right-[4.5px]"
          />
          <Image
            src="/images/end-to-end-solutions.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative right-[7px]"
          />
          <Image
            src="/images/Custom-Fit.gif"
            width={80}
            height={80}
            alt="Picture of the author"
            className=" relative right-[10px]"
          />
        </div>
        {/* TEXT */}
        <div className="max-w-[1120px] px-5 mx-auto flex justify-between mt-10">
          <div className=" w-full">
            <p className="text-center text-lg  relative right-6 ">
              Expert Engineers
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative right-3">
              Rapid Deployment
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg">Global Reach</p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-1">
              Indigenous Capability
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-2 w-[98%]">
              Precise Production
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-4 w-[98%]">
              Innovation at Core
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-6 w-[98%]">
              End to end solutions
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-6 w-[98%]">
              Custom-Fit
            </p>
          </div>
        </div>
      </div>
      {/* DESIGN MOBILE */}
      <section className=" block md:hidden">
        <div className="container  grid grid-cols-2 gap-4">
          <div className=" w-full">
            <Image
              src="/images/Expert.gif"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-2"
            />
            <p className=" text-center">Expert Engineers</p>
          </div>
          <div className=" w-full">
            <Image
              src="/images/Rapid.gif"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-2"
            />
            <p className=" text-center">Rapid Deployment </p>
          </div>
          <div className=" w-full">
            <Image
              src="/images/Global.gif"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-2"
            />
            <p className=" text-center">Global Reach</p>
          </div>
          <div className=" w-full">
            <Image
              src="/images/Indigenous.gif"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-2"
            />
            <p className=" text-center">Indigenous Capability</p>
          </div>
          <div className=" w-full">
            <Image
              src="/images/Precise.gif"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-2"
            />
            <p className=" text-center">Precise Production</p>
          </div>
        </div>
      </section>
      {/* END MOBILE DESIGN */}
      {/* OPTIONAL  SPACE FOR DESKTOP */}
      <section className=" hidden md:block">
        <div className="container !py-12"></div>
      </section>
      {/* TRUSTED */}
      <section className=" bg-[#EBE4CF] pb-[75px]">
        <div className="container !max-w-full !pb-5">
          {/* ------------------ */}
          <div className="banner-heading-wrapper relative text-center ">
            <TrustedByLeadersHeading></TrustedByLeadersHeading>
          </div>
          <div className=" mt-5">
            {/* ------------------ */}
            <p className=" text-lg text-black font-medium m-auto mb-5 w-full md:w-[85%] text-center ">
              Jetsys Defence is an agile, innovation-driven aerospace and
              defence company based in India. We specialize in mission-critical
              technologies for airborne platforms, avionics, and tactical
              systems — engineered for performance, reliability, and national
              impact.
            </p>
          </div>

          {/* mobile */}
          <div className="  md:hidden grid grid-cols-2 gap-6  w-full bg-white  py-5 px-5 rounded mt-10">
            <div className="w-full flex">
              <Image
                src="/images/client-1.svg"
                width={118}
                height={129}
                alt="Client 1"
                className="mx-auto w-full"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-2.svg"
                width={118}
                height={129}
                alt="Client 2"
                className="mx-auto w-full"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-3.svg"
                width={118}
                height={129}
                alt="Client 3"
                className="mx-auto w-[80%]"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-4.svg"
                width={118}
                height={129}
                alt="Client 4"
                className="mx-auto w-[90%]"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-5.svg"
                width={118}
                height={129}
                alt="Client 5"
                className="mx-auto w-full"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-6.jpeg"
                width={118}
                height={129}
                alt="Client 5"
                className="mx-auto w-full"
              />
            </div>
          </div>
        </div>
        {/* desktop */}
        <div className=" bg-white">
          <motion.div
            variants={logoWrapperVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:flex w-full bg-white justify-between gap-6 py-5 px-5 rounded mt-0 max-w-[1120px] mx-auto "
          >
            <motion.div variants={logoItemVariants} className="w-full flex">
              <Image
                src="/images/client-1.svg"
                width={118}
                height={129}
                alt="Client 1"
                className="w-[90%] mx-auto"
              />
            </motion.div>

            <motion.div variants={logoItemVariants} className="w-full flex">
              <Image
                src="/images/client-2.svg"
                width={118}
                height={129}
                alt="Client 2"
                className="w-[90%] mx-auto"
              />
            </motion.div>

            <motion.div variants={logoItemVariants} className="w-full flex">
              <Image
                src="/images/client-3.svg"
                width={118}
                height={129}
                alt="Client 3"
                className="mx-auto"
              />
            </motion.div>

            <motion.div variants={logoItemVariants} className="w-full flex">
              <Image
                src="/images/client-4.svg"
                width={118}
                height={129}
                alt="Client 4"
                className="mx-auto"
              />
            </motion.div>

            <motion.div variants={logoItemVariants} className="w-full flex">
              <Image
                src="/images/client-5.svg"
                width={118}
                height={129}
                alt="Client 5"
                className="mx-auto"
              />
            </motion.div>
            <motion.div variants={logoItemVariants} className="w-full flex">
              <Image
                src="/images/client-6.jpeg"
                width={90}
                height={90}
                alt="Client 1"
                className="w-[90%] mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* OUR OFFERING */}
      <OurOffering />
      {/* WHY CHOOSE US */}
      <section ref={sectionRef} className="bg-[#EBE4CF]">
        <div className="container">
          <h1
            ref={headingRef}
            style={headingStyle}
            className="mx-auto text-center text-black text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text w-full md:w-[80%]"
          >
            Why Choose Us?
          </h1>

          <p className="text-base text-black font-medium text-center mb-5">
            We deliver high-precision aerospace components through advanced
            manufacturing and R&amp;D-driven innovation. Backed by system
            engineering and rigorous testing, our solutions ensure reliability
            in mission-critical environments.
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

      <Footer />
    </>
  );
}
