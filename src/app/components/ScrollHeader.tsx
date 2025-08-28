"use client";
import { useEffect } from "react";

export default function TrustedByLeadersHeading() {
  useEffect(() => {
    const top = document.querySelector<HTMLElement>(".banner-heading-top");
    const bottom = document.querySelector<HTMLElement>(
      ".banner-heading-bottom"
    );
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // tiny movement in percentages; tweak 0.05 for stronger/weaker effect
        const offset = window.scrollY * 0.002;
        if (top) top.style.transform = `translate3d(${offset}%, 0, 0)`;
        if (bottom) bottom.style.transform = `translate3d(${-offset}%, 0, 0)`;
      });
    };

    // initial paint + listener
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="banner-heading-wrapper py-0 w-full">
      {/* Top Layer */}
      <h1 className=" text-center banner-heading-top will-change-transform mx-auto text-[30px] md:text-[40px] font-extrabold uppercase mb-0 horizon-text w-full md:w-[100%] translate-x-0 text-black">
        TRUSTED BY LEADERS
      </h1>

      {/* Bottom Layer */}
      <h1 className="text-center banner-heading-bottom will-change-transform mx-auto text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text w-full md:w-[100%]  text-black">
        BUILT FOR EXCELLENCE
      </h1>
    </div>
  );
}
