import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
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
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 container ">
          <h1 className="text-4xl md:text-6xl  font-extrabold text-white uppercase horizon-text w-full  md:w-3/4">
            We Build,What Sky Demands
          </h1>
          <p className="mt-4 text-base font-semibold text-white md:text-xl  max-w-2xl">
            Leading aerospace with bold innovation.
          </p>
          <button className="mt-6 px-10 py-3 bg-white text-base text-primary font-bold rounded shadow-lg hover:bg-secondary transition">
            Get Started
          </button>
        </div>
      </section>
      {/* AFTER TOP SECTION */}
      <section className="">
        <div className=" container grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className=" w-full bg-[url('/images/landing-1.png')] bg-cover bg-center px-8 py-16 rounded text-center">
            <p className=" text-2xl text-white font-bold mb-8">
              Expanding Horizons in Aerospace
            </p>
            <p className=" text-base font-medium text-white mb-8">
              Driving innovation to redefine the possibilities in defence and
              aerospace industries.
            </p>
            <button className=" bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white">
              Know More
            </button>
          </div>
          <div className=" w-full bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-16 rounded text-center">
            <p className=" text-2xl text-white font-bold mb-8">
              Indigenous <br />
              Innovations
            </p>
            <p className=" text-base font-medium text-white mb-8">
              Proudly delivering homegrown solutions for a self-reliant defence
              ecosystem.
            </p>
            <button className=" bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white">
              Know More
            </button>
          </div>
          <div className=" w-full bg-[url('/images/landing-3.png')] bg-cover bg-center px-8 py-16 rounded text-center">
            <p className=" text-2xl text-white font-bold mb-8">
              Precision Maintenance Systems
            </p>
            <p className=" text-base font-medium text-white mb-8">
              Ensuring operational superiority with advanced maintenance <br />
              technologies.
            </p>
            <button className=" bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white">
              Know More
            </button>
          </div>
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
        <div className=" max-w-7xl px-5 mx-auto flex justify-between -z-10">
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
        <div className=" bg-primary h-28 -mt-40 -mb-[147px] z-10"></div>
        <div className=" max-w-7xl px-5 mx-auto flex justify-between">
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
            className=" relative left-[8px]"
          />
          <Image
            src="/images/Global Reach.svg"
            width={182}
            height={182}
            alt="Picture of the author"
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
            className=" relative right-[12px]"
          />
        </div>
        <div className="max-w-7xl px-5 mx-auto flex justify-between mt-10">
          <div className=" w-full">
            <p className="text-center text-lg  relative -left-5 ">
              Expert Engineers
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative -left-2">
              Rapid Deployment
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg">Global Reach</p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-3">
              Indigenous Capability
            </p>
          </div>
          <div className=" w-full">
            <p className="text-center text-lg relative left-[25px]">
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
          <div className="hidden md:flex w-full bg-white  justify-between gap-6 py-5 px-5 rounded mt-10">
            <div className="w-full flex">
              <Image
                src="/images/client-1.svg"
                width={118}
                height={129}
                alt="Client 1"
                className="w-[90%] mx-auto"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-2.svg"
                width={118}
                height={129}
                alt="Client 2"
                className="w-[90%] mx-auto"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-3.svg"
                width={118}
                height={129}
                alt="Client 3"
                className="mx-auto"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-4.svg"
                width={118}
                height={129}
                alt="Client 4"
                className="mx-auto"
              />
            </div>
            <div className="w-full flex">
              <Image
                src="/images/client-5.svg"
                width={118}
                height={129}
                alt="Client 5"
                className="mx-auto"
              />
            </div>
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
          </div>
        </div>
      </section>
      {/* OUR OFFERING */}
      <section className=" ">
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
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-1.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Aviation Equipment
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>

            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-2.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Raw Materials
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-3.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Testing & Maintainence
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-4.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Indigenization
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-5.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Aircraft Spares
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-6.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Runway Spares
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-7.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Test Rigs & Test Chambers
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-8.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">
                Ground Support & Handling Equipment
              </p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
            <div className=" border-1  border-primary rounded  p-3">
              <Image
                src="/images/offer-9.png"
                width={600}
                height={600}
                alt="Picture of the author"
                className=" mb-2"
              />
              <p className=" text-2xl font-bold text-primary mb-10">Others</p>

              <Link href="/">
                <p className=" text-base font-medium text-primary underline">
                  Know More
                </p>
              </Link>
            </div>
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
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="">
              <Image
                src="/images/choose-1.png"
                width={305}
                height={220}
                alt="Picture of the author"
                className="w-full"
              />
              <p className=" bg-white border-b-3 border-primary text-black text-center text-2xl font-bold py-2">
                Advanced <br /> Manufacturing
              </p>
            </div>
            <div className="">
              <Image
                src="/images/choose-2.png"
                width={305}
                height={220}
                alt="Picture of the author"
                className="w-full"
              />
              <p className=" bg-white border-b-3 border-primary text-black text-center text-2xl font-bold py-2">
                Partner <br /> Focused
              </p>
            </div>
            <div className="">
              <Image
                src="/images/choose-3.png"
                width={305}
                height={220}
                alt="Picture of the author"
                className="w-full"
              />
              <p className=" bg-white border-b-3 border-primary text-black text-center text-2xl font-bold py-2">
                System <br /> Integration
              </p>
            </div>
            <div className="">
              <Image
                src="/images/choose-4.png"
                width={305}
                height={220}
                alt="Picture of the author"
                className="w-full"
              />
              <p className=" bg-white border-b-3 border-primary text-black text-center text-2xl font-bold py-2">
                Timely <br /> Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
