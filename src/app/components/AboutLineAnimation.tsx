import React, { useEffect, useRef } from "react";
import { IoSquareSharp } from "react-icons/io5";

const AboutLineAnimation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  //svg animation
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // Target the SVGs that currently have class "signature-stroke"
    const strokeEls = Array.from(
      sectionEl.querySelectorAll<SVGElement>(".signature-stroke")
    );

    // 1) Make sure animation is OFF initially (overrides any CSS that auto-starts)
    const prime = () => {
      strokeEls.forEach((el) => {
        // Ensure starting dash values (you can keep your CSS as-is; this just guarantees)
        el.style.strokeDasharray = "1000";
        el.style.strokeDashoffset = "1000";
        el.style.animation = "none";
      });
    };

    // 2) Start the signature animation once section is visible
    const play = () => {
      strokeEls.forEach((el) => {
        // Re-trigger animation from the beginning
        el.style.animation = "none";
        // Force reflow so the browser acknowledges the reset
        el.getBoundingClientRect(); // no need for eslint-disable
        el.style.animation = "write-signature 2s linear forwards";
      });
    };

    prime();

    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          play();
          io.disconnect(); // run only once
        }
      },
      { threshold: 0.25 } // start when at least 25% of the section is visible
    );

    io.observe(sectionEl);
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <section ref={sectionRef} className="bg-[#5C5649]">
        <div className="container">
          {/* Grid container with card layout */}
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center pb-0 md:pb-26">
            {/* First Card (Who Are We?) */}
            <div className="bg-[#F0EFE9] rounded-2xl px-6 pt-4 pb-18 w-full md:w-[450px] h-[350px] ">
              <IoSquareSharp className="ml-auto text-2xl rounded mb-12" />
              <p className="font-bold text-2xl mb-8">Who Are We?</p>
              <p className="font-medium text-base">
                We are an emerging force in the aerospace and defence industry,
                committed to delivering excellence through innovation and
                perseverance.
              </p>
            </div>

            {/* Connecting Line left */}
            <div className="relative top-12 hidden md:block">
              <svg
                className="signature-stroke"
                width="120"
                height="201"
                viewBox="0 0 151 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.60742 30.5801C88.6998 32.2097 63.4903 166.445 149.107 166.771"
                  stroke="#0B0B0B"
                  strokeWidth="2"
                />
                <rect width="2.6" height="66.9863" fill="black" />
                <rect
                  x="147.756"
                  y="133.277"
                  width="2.6"
                  height="66.9863"
                  fill="black"
                />
              </svg>
            </div>

            {/* Second Card (Our Values) */}
            <div className="bg-[#F0EFE9] rounded-2xl px-6 pt-4 pb-18 w-full md:w-[450px] h-[350px] relative top-0 md:top-26">
              <IoSquareSharp className="ml-auto text-2xl rounded mb-12" />
              <p className="font-bold text-2xl mb-8">Our Values</p>
              <p className="font-medium text-base">
                Excellence, trust, and resilience are not just principles — they
                are the foundation of every system we build.
              </p>
            </div>

            {/* Connecting Line right */}
            <div className="relative top-12 hidden md:block">
              <svg
                className="signature-stroke"
                width="120"
                height="200"
                viewBox="0 0 150 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M146.949 30.0195C60.8569 31.6492 86.0663 165.884 0.449219 166.211"
                  stroke="#0B0B0B"
                  strokeWidth="2"
                />
                <rect y="132.717" width="2.6" height="66.9863" fill="black" />
                <rect x="146.949" width="2.6" height="66.9863" fill="black" />
              </svg>
            </div>

            {/* Third Card (What Do We Do?) */}
            <div className="bg-[#F0EFE9] rounded-2xl px-6 pt-4 pb-18  w-full md:w-[450px] h-[350px]">
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
    </div>
  );
};

export default AboutLineAnimation;
