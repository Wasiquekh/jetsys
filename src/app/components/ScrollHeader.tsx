"use client";
import { useEffect } from "react";

export default function TrustedByLeadersHeading() {
  useEffect(() => {
    const top = document.querySelector<HTMLElement>(".banner-heading-top");
    const bottom = document.querySelector<HTMLElement>(
      ".banner-heading-bottom"
    );
    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const pct = scrollY / viewportHeight;

        const offset = pct * 3; // Adjust movement intensity

        // Move the top line to the left as you scroll down
        if (top)
          top.style.transform = `translate3d(calc(-15% + ${offset}%), 0, 0)`;

        // Move the bottom line to the right (or upwards depending on the effect) as you scroll
        if (bottom)
          bottom.style.transform = `translate3d(calc(15% - ${offset}%), 0, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="banner-heading-wrapper py-0 w-full">
      {/* Top line → starts with left padding and moves to the left on scroll */}
      <h1 className="banner-heading-top will-change-transform text-center mx-auto uppercase font-light text-[25px] md:text-[90px] text-black pl-10">
        TRUSTED BY LEADERS
      </h1>

      {/* Bottom line → stays perfectly centered initially and moves to the right on scroll */}
      <h1 className="banner-heading-bottom will-change-transform text-center mx-auto uppercase font-light text-[25px] md:text-[90px] text-black">
        BUILT FOR EXCELLENCE
      </h1>
    </div>
  );
}
