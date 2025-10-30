"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView<T extends HTMLElement>(
  opts: IntersectionObserverInit = { threshold: 0.2 }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.unobserve(el); // animate once per visit
      }
    }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}

const MissionVisionAnimate: React.FC = () => {
  const mission = useInView<HTMLDivElement>();
  const vision = useInView<HTMLDivElement>();
  // Observe WRAPPER instead of <Image />
  const centerImg = useInView<HTMLDivElement>();

  return (
    <div>
      <div className="py-10 px-4 md:px-10 w-full mt-30 mb-16 grid grid-cols-1 md:grid-cols-3 items-center relative">
        {/* Center image wrapper (fade-in from bottom) */}
        <div
          ref={centerImg.ref}
          className={`absolute left-1/2 -translate-x-1/2 hidden md:block
            ${centerImg.inView ? "anim-fade-in-up" : "prefade-up"}`}
        >
          <Image
            src="/images/mission.png"
            width={340}
            height={340}
            alt="Picture of the author"
            className=""
            priority
          />
        </div>

        {/* Our Mission (fade-in left) */}
        <div
          ref={mission.ref}
          className={`bg-[#5c5649] py-10 px-4 md:px-10 ${
            mission.inView ? "anim-fade-in-left" : "prefade-left"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-white text-center md:text-left">
            Our Mission
          </h2>
          <p className="text-base font-normal text-white text-justify">
            At the heart of our journey is a bold mission — to accelerate growth
            and redefine the future of defence and aerospace. Through unwavering
            passion, precision, and purpose, we strive to create innovative,
            future-ready solutions.
          </p>
        </div>

        <div></div>

        {/* Our Vision (fade-in right) */}
        <div
          ref={vision.ref}
          className={`-ml-2 bg-[#5c5649] py-10 px-4 md:px-10 ${
            vision.inView ? "anim-fade-in-right" : "prefade-right"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-white text-center md:text-left">
            Our Vision
          </h2>
          <p className="text-base font-normal text-white text-justify">
            We envision a future where our advanced technology and relentless
            pursuit of perfection redefine the standards of safety, security,
            and efficiency in the industry. To accelerate growth and redefine
            the future of defence and aerospace with passion, precision, and
            purpose.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Initial pre-fade states (no layout shift) */
        .prefade-left {
          opacity: 0;
          transform: translateX(-24px);
        }
        .prefade-right {
          opacity: 0;
          transform: translateX(24px);
        }
        .prefade-up {
          opacity: 0;
          transform: translateY(24px);
        }

        /* Keyframes */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Play animations once visible */
        .anim-fade-in-left {
          animation: fadeInLeft 700ms ease-out forwards;
        }
        .anim-fade-in-right {
          animation: fadeInRight 700ms ease-out forwards;
        }
        .anim-fade-in-up {
          animation: fadeInUp 700ms ease-out forwards;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .prefade-left,
          .prefade-right,
          .prefade-up {
            opacity: 1;
            transform: none;
          }
          .anim-fade-in-left,
          .anim-fade-in-right,
          .anim-fade-in-up {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MissionVisionAnimate;
