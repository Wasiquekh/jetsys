"use client";
import React, { useEffect, useRef } from "react";

const CustomCarasoul = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1 across container
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      // map mouse position → scroll range
      targetScroll.current = x * max;
    };

    const onEnter = () => container.addEventListener("mousemove", onMouseMove);
    const onLeave = () => {
      container.removeEventListener("mousemove", onMouseMove);
      // optional: recentre when leaving; comment out if you want it to stay
      targetScroll.current = container.scrollLeft;
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    // ease scrollLeft toward target
    const tick = () => {
      const ease = 0.08; // smaller = smoother
      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * ease;
      container.scrollLeft = currentScroll.current;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // keep target in bounds on resize/content changes
    const onResize = () => {
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      targetScroll.current = Math.min(targetScroll.current, max);
      currentScroll.current = Math.min(currentScroll.current, max);
    };
    window.addEventListener("resize", onResize);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div>
      <section className="py-[110px] md:py-28 max-w-[1540px] mx-auto">
        {/* note: overflow-y-hidden to prevent any vertical scroll here */}
        <div
          ref={containerRef}
          className="relative overflow-x-scroll overflow-y-hidden pb-10 no-scrollbar"
        >
          <div className="flex gap-6 px-2 md:px-4 lg:px-6 lg:pl-0 justify-start py-6">
            {/* Card 1 */}
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-1.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transition-transform group-hover:-translate-y-4">
                  <p className="text-2xl text-white font-bold mb-8">
                    Expanding Horizons in Aerospace
                  </p>
                  <p className="text-base text-white/90 font-medium mb-8">
                    Driving innovation to redefine the possibilities in defence
                    and aerospace industries.
                  </p>
                  <button className="bg-primary text-base font-semibold py-2 px-6 rounded text-white hover:bg-white hover:text-black border border-primary">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-3.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transition-transform group-hover:-translate-y-4">
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
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transition-transform group-hover:-translate-y-4">
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
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transition-transform group-hover:-translate-y-4">
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
      </section>
    </div>
  );
};

export default CustomCarasoul;
