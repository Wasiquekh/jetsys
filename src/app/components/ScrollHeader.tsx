"use client";
import { useEffect, useRef } from "react";

export default function TrustedByLeadersHeading() {
  const topRef = useRef<HTMLHeadingElement | null>(null);
  const bottomRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) return;

    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const vh = Math.max(window.innerHeight, 1); // avoid /0
        const pct = window.scrollY / vh; // 0..∞ as you scroll
        const intensity = 3; // movement in %, tweak
        const offset = pct * intensity;

        // Top moves left as you scroll down
        top.style.transform = `translate3d(calc(-15% + ${offset}%), 0, 0)`;

        // Bottom moves right as you scroll down (opposite direction)
        bottom.style.transform = `translate3d(calc(15% - ${offset}%), 0, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial positions
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="banner-heading-wrapper w-full overflow-x-hidden py-0 select-none">
      {/* Single-line, centered, no wrapping */}
      <h1
        ref={topRef}
        className="banner-heading-top block mx-auto w-max whitespace-nowrap will-change-transform font-medium leading-[1.05] text-black text-[25px] md:text-[90px] text-center"
      >
        Trusted by Leaders&nbsp;Trusted by Leaders
      </h1>

      <h1
        ref={bottomRef}
        className="banner-heading-bottom block mx-auto w-max whitespace-nowrap will-change-transform font-medium leading-[1.05] text-black text-[25px] md:text-[90px] text-center"
      >
        Built for Excellence&nbsp;Built for Excellence
      </h1>
    </div>
  );
}
