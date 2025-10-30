"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion, type Variants } from "framer-motion";
import TrustedByLeadersHeading from "./components/ScrollHeader";
import CustomCarasoul from "./components/CustomCarasoul";
import OurOffering from "./components/OurOfferings";
import MobileLandingCards from "./components/MobileLandingCards";
import StickyHeader from "./components/StickyHeader";
import WhyChoose from "./components/WhyChoose";
import ScrollUpText from "./components/ScrollUpText";
import MissionVisionAnimate from "./components/MissionVisionAnimate";
import Link from "next/link";

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

export default function Home() {
  return (
    <>
      <Header />
      <StickyHeader />
      {/* HOME TOP */}
      <section className="relative w-full  h-[600px] overflow-hidden flex items-center">
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
        <div className="container !p-0">
          <div className="relative z-10 flex flex-col w-full md:w-1/2 justify-center h-full text-center px-4 container !ml-0 ">
            <ScrollUpText className="text-4xl md:text-6xl  font-extrabold text-white  uppercase w-full text-center md:text-left horizon">
              We Build,
              <br />
              What Sky Demands
            </ScrollUpText>
            <ScrollUpText className="mt-4 text-base font-semibold text-white md:text-xl  capitalize text-center md:text-left">
              Leading aerospace with bold innovation
            </ScrollUpText>
            <Link
              className="w-full  md:w-1/2 flex justify-self-start"
              href="/about-us"
            >
              <button className="mt-16 px-10 py-3 bg-white text-base text-primary font-bold rounded shadow-lg hover:bg-primary transition border border-primary hover:text-white ">
                Get Started
              </button>
            </Link>
          </div>
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
        <div className="container ">
          <ScrollUpText className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
            About our organization
          </ScrollUpText>
          <p className=" text-base text-[#000] font-medium text-center mb-0 ">
            Jetsys Defence is an agile, innovation-driven aerospace and defence
            company based in India. We specialize in mission-critical
            technologies for airborne platforms, avionics, and tactical systems
            — engineered for performance, reliability, and national impact.
          </p>
          <div className=" hidden md:block">
            {" "}
            <MissionVisionAnimate />
          </div>

          {/* MISSION VISION SECTION STATIC for mobile*/}
          <div className=" py-10 px-4 md:px-10 w-full bg-[#5c5649] mt-30 mb-16   grid grid-cols-1 md:grid-cols-3 gap-10  items-center relative md:hidden">
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
          {/* END MISSION VISION SECTION STATIC */}
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
            <p className="text-center text-lg">
              Global <br /> Reach
            </p>
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
                className="w-[90px] mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* OUR OFFERING */}
      <OurOffering />
      {/* WHY CHOOSE US */}
      <WhyChoose />

      <Footer />
    </>
  );
}
