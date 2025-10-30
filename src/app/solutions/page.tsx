import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import SolutionAnimate from "../components/SolutionAnimate";
import ScrollUpText from "../components/ScrollUpText";
import StickyHeader from "../components/StickyHeader";

const page = () => {
  return (
    <div>
      <Header />
      <StickyHeader />
      <section>
        <div className="container">
          <ScrollUpText className=" text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
            Our Solutions
                 </ScrollUpText>
          <h2 className=" font-bold text-3xl text-[#5C5649] text-center mb-5">
            End-to-end defence solutions for indigenization and self-reliance.
          </h2>
          <p className=" font-medium text-base text-center">
            We deliver intelligent, end-to-end defence and aerospace solutions —
            from indigenization and advanced testing to maintenance support —
            ensuring operational excellence, scalability, and strategic
            self-reliance.
          </p>
        </div>
      </section>
      <section>
        <div className=" container !pt-0">
          <div className=" w-full flex justify-between">
            <Image
              src="/images/Local  Sourcing.svg"
              width={160}
              height={234}
              alt="Picture of the author"
              className=" w-[120px]"
            />
            <Image
              src="/images/Import  Substitution.svg"
              width={160}
              height={234}
              alt="Picture of the author"
              className=" w-[120px]"
            />
            <Image
              src="/images/Custom  Adaptation.svg"
              width={160}
              height={234}
              alt="Picture of the author"
              className=" w-[120px]"
            />
            <Image
              src="/images/Multiple Application.svg"
              width={160}
              height={234}
              alt="Picture of the author"
              className=" w-[120px]"
            />
            <Image
              src="/images/Design Ownership.svg"
              width={160}
              height={234}
              alt="Picture of the author"
              className=" w-[120px]"
            />
          </div>
        </div>
      </section>
      <SolutionAnimate />

      <Footer />
    </div>
  );
};

export default page;
