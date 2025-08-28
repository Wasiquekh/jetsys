"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const GAP_PX = 24; // equals Tailwind gap-6
const PEEK_RATIO = 0.1; // ~10% viewport peeks
const SCROLL_SPEED = 8; // hover scroll speed (higher = faster)

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
  // CODE FOR SCROLL ANIMATION AFTER TOP SECTION
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const speedRef = useRef(0);

  // hover auto-scroll loop
  const loop = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (speedRef.current !== 0) {
      el.scrollLeft += speedRef.current;
      rafRef.current = requestAnimationFrame(loop);
    } else {
      rafRef.current = null;
    }
  };
  const start = (dir: "left" | "right") => {
    speedRef.current = dir === "left" ? -SCROLL_SPEED : SCROLL_SPEED;
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(loop);
  };
  const stop = () => {
    speedRef.current = 0;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // Center on cards 2 & 3 with slight peeks
  const centerOnSecondAndThird = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length < 3) return;

    const w = cards[0].offsetWidth;
    const vw = el.clientWidth;
    const peek = vw * PEEK_RATIO;
    const leftOfCard2 = 1 * (w + GAP_PX);
    el.scrollLeft = Math.max(leftOfCard2 - peek, 0);
  };

  useEffect(() => {
    const id = requestAnimationFrame(centerOnSecondAndThird);
    const ro = new ResizeObserver(centerOnSecondAndThird);
    if (scrollerRef.current) ro.observe(scrollerRef.current);

    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // END CODE FOR SCROLL ANIMATION AFTER TOP SECTION
  return (
    <>
      <Header />
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
          <h1 className="text-4xl md:text-6xl  font-extrabold text-white uppercase horizon-text w-full  md:w-3/4">
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
      <section className="py-[110px] md:py-28">
        <div className="relative">
          {/* Hover zones */}
          <div
            className="hidden md:block absolute left-0 top-0 h-full w-[35%] z-20"
            onMouseEnter={() => start("left")}
            onMouseLeave={stop}
          />
          <div
            className="hidden md:block absolute right-0 top-0 h-full w-[35%] z-20"
            onMouseEnter={() => start("right")}
            onMouseLeave={stop}
          />

          {/* Viewport */}
          <div
            ref={scrollerRef}
            className="relative overflow-x-auto overflow-y-visible no-scrollbar pb-10"
          >
            <div className="flex gap-6 px-2 md:px-4 lg:px-6 lg:pl-0 justify-start py-6">
              {/* Card 1 */}
              <div
                data-card
                className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%]"
              >
                <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-1.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-4xl">
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  <div className="relative">
                    <p className="text-2xl text-white font-bold mb-8">
                      Expanding Horizons in Aerospace
                    </p>
                    <p className="text-base text-white/90 font-medium mb-8">
                      Driving innovation to redefine the possibilities in
                      defence and aerospace industries.
                    </p>
                    <button className="bg-primary text-base font-semibold py-2 px-6 rounded text-white hover:bg-white hover:text-black border border-primary">
                      Know More
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                data-card
                className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%]"
              >
                <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-3.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-4xl">
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  <div className="relative z-10">
                    <p className="text-2xl text-white font-bold mb-8">
                      Indigenous Innovations
                    </p>
                    <p className="text-base text-white/90 font-medium mb-8">
                      Proudly delivering homegrown solutions for a self-reliant
                      defence ecosystem.
                    </p>
                    <button className="bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white hover:bg-white hover:text-black border border-primary">
                      Know More
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                data-card
                className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%]"
              >
                <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-4xl">
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  <div className="relative z-10">
                    <p className="text-2xl text-white font-bold mb-8">
                      Precision Maintenance Systems
                    </p>
                    <p className="text-base text-white/90 font-medium mb-8">
                      Ensuring operational superiority with advanced maintenance
                      technologies.
                    </p>
                    <button className="bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white hover:bg-white hover:text-black border border-primary">
                      Know More
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div
                data-card
                className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%]"
              >
                <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-4xl">
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  <div className="relative z-10">
                    <p className="text-2xl text-white font-bold mb-8">
                      Precision Maintenance Systems
                    </p>
                    <p className="text-base text-white/90 font-medium mb-8">
                      Ensuring operational superiority with advanced maintenance
                      technologies.
                    </p>
                    <button className="bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white hover:bg-white hover:text-black border border-primary">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Utilities */}
          <style jsx global>{`
            .no-scrollbar {
              scrollbar-width: none;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section>
        <div className="container">
          <h1 className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text">
            About our organization
          </h1>
          <p className=" text-base text-primary font-medium text-center mb-5 ">
            Jetsys Defence is an agile, innovation-driven aerospace and defence
            company based in India. We specialize in mission-critical
            technologies for airborne platforms, avionics, and tactical systems
            — engineered for performance, reliability, and national impact.
          </p>
          <div className=" py-10 px-4 md:px-24 w-full bg-primary mt-12 flex flex-col items-center">
            <Image
              src="/images/mission.svg"
              width={58}
              height={58}
              alt="Picture of the author"
              className=" mb-4"
            />
            <h2 className=" mb-4 text-3xl font-bold text-white text-center">
              Our Mission and Vision
            </h2>
            <p className=" text-base font-medium text-white text-center ">
              We envision a future where our advanced technology and relentless
              pursuit of perfection redefine the standards of safety, security,
              and efficiency in the industry. To accelerate growth and redefine
              the future of defence and aerospace with passion, precision, and
              purpose.
            </p>
          </div>
        </div>
      </section>
      {/* DESIGN DESKTOP */}
      <div className=" hidden md:block">
        {/* RING */}
        <div className=" max-w-[1120px] px-5 mx-auto flex justify-between -z-10">
          <Image
            src="/images/ring.svg"
            width={210}
            height={210}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={210}
            height={210}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={210}
            height={210}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={210}
            height={210}
            alt="Picture of the author"
            className=" -z-10"
          />
          <Image
            src="/images/ring.svg"
            width={210}
            height={210}
            alt="Picture of the author"
            className=" -z-10"
          />
        </div>
        {/* BACKGROUND THEME COLOR LINE */}
        <div className=" bg-primary h-28 -mt-40 -mb-[147px] z-10"></div>
        {/* ICON IMAGES */}
        <div className=" max-w-[1120px] px-5 mx-auto flex justify-between">
          <Image
            src="/images/expert.svg"
            width={182}
            height={182}
            alt="Picture of the author"
            className=" relative left-[14px]"
          />
          <Image
            src="/images/Rapid Deployment.svg"
            width={182}
            height={182}
            alt="Picture of the author"
            className=" relative left-[7px]"
          />
          <Image
            src="/images/Global Reach.svg"
            width={182}
            height={182}
            alt="Picture of the author"
            className=" relative left-[1px]"
          />
          <Image
            src="/images/Indigenous Capability.svg"
            width={182}
            height={182}
            alt="Picture of the author"
            className=" relative -left-[6px]"
          />
          <Image
            src="/images/Precise Production.svg"
            width={182}
            height={182}
            alt="Picture of the author"
            className=" relative right-3"
          />
        </div>
        {/* TEXT */}
        <div className="max-w-[1120px] px-5 mx-auto flex justify-between mt-10">
          <div className=" w-full">
            <p className="text-center text-lg  relative -left-5 ">
              Expert Engineers
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative -left-0">
              Rapid Deployment
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg">Global Reach</p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-0">
              Indigenous Capability
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-3 w-[98%]">
              Precise Production
            </p>
          </div>
        </div>
      </div>
      {/* DESIGN MOBILE */}
      <section className=" block md:hidden">
        <div className="container  grid grid-cols-2 gap-0">
          <div className=" w-full">
            <Image
              src="/images/d1.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-4"
            />
          </div>
          <div className=" w-full">
            <Image
              src="/images/d2.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
          <div className=" w-full">
            <Image
              src="/images/d3.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full mb-4"
            />
          </div>
          <div className=" w-full">
            <Image
              src="/images/d4.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
          <div className=" w-full">
            <Image
              src="/images/d5.svg"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
        </div>
      </section>
      {/* END MOBILE DESIGN */}
      {/* OPTIONAL  SPACE FOR DESKTOP */}
      <section className=" hidden md:block">
        <div className="container !py-12"></div>
      </section>
      {/* TRUSTED */}
      <section className=" bg-[#EBE4CF]">
        <div className="container">
          <h1 className=" mx-auto text-center text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text w-full md:w-[80%]">
            TRUSTED BY LEADERS, BUILT FOR EXCELLENCE
          </h1>
          <p className=" text-base text-black font-medium text-center mb-5 ">
            Jetsys Defence is an agile, innovation-driven aerospace and defence
            company based in India. We specialize in mission-critical
            technologies for airborne platforms, avionics, and tactical systems
            — engineered for performance, reliability, and national impact.
          </p>
          {/* desktop */}
          <motion.div
            variants={logoWrapperVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:flex w-full bg-white justify-between gap-6 py-5 px-5 rounded mt-10"
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
          </motion.div>

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
          </div>
        </div>
      </section>
      {/* OUR OFFERING */}
      <section className="">
        <div className="container">
          <h1 className=" mx-auto text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text w-full md:w-[80%]">
            Our Offerings
          </h1>
          <p className=" text-base text-black font-medium text-center mb-5 ">
            Jetsys Defence is an agile, innovation-driven aerospace and defence
            company based in India. We specialize in mission-critical
            technologies for airborne platforms, avionics, and tactical systems
            — engineered for performance, reliability, and national impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {cards.map((card, idx) => (
              <div key={idx} className="group [perspective:1000px]">
                <div className="relative h-75 w-full rounded shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-primary bg-white p-2 [backface-visibility:hidden]">
                    <Image
                      src={card.img}
                      width={300}
                      height={300}
                      alt={card.title}
                      className="mb-2 w-full"
                    />
                    <p className="text-xl font-semibold text-primary mb-0 text-center">
                      {card.title}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-primary bg-primary text-white p-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-lg font-semibold mb-5 text-center">
                      {card.title}
                    </p>
                    <Link href="/" className="underline">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className=" bg-[#EBE4CF]">
        <div className="container">
          <h1 className=" mx-auto text-center text-black text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text w-full md:w-[80%]">
            Why Choose Us?
          </h1>
          <p className=" text-base text-black font-medium text-center mb-5 ">
            We deliver high-precision aerospace components through advanced
            manufacturing and R&D-driven innovation. Backed by system
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
