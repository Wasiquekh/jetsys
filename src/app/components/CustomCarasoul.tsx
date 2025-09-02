"use client";
import React, { useEffect, useRef } from "react";

const CustomCarasoul: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      targetScroll.current = x * max;
    };

    const onEnter = () => container.addEventListener("mousemove", onMouseMove);
    const onLeave = () => {
      container.removeEventListener("mousemove", onMouseMove);
      targetScroll.current = container.scrollLeft; // hold position on leave
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    // smooth easing loop
    const tick = () => {
      const ease = 0.08; // smaller = smoother
      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * ease;
      container.scrollLeft = currentScroll.current;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

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
      <section className="py-[75px] md:pt-[75px] md:pb-0 max-w-[1540px] mx-auto">
        <div
          ref={containerRef}
          className="relative overflow-x-scroll overflow-y-hidden pb-10 cs-scroll"
        >
          <div className="flex gap-6 md:gap-8 lg:gap-10 justify-start py-6">
            {/* Card 1 — left space */}
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group ml-6 md:ml-8 lg:ml-12">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-1.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                <div className="relative z-10 opacity-0 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:-translate-y-2 md:group-hover:-translate-y-4">
                  <p className="text-2xl text-white font-bold mb-6 md:mb-8">
                    Expanding Horizons in Aerospace
                  </p>
                  <p className="text-base text-white/90 font-medium mb-6 md:mb-8">
                    Driving innovation to redefine the possibilities in defence
                    and aerospace industries.
                  </p>
                  <button className="bg-primary text-base font-semibold py-2 px-6 rounded text-white border border-primary transition-colors duration-300 hover:bg-white hover:text-black">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-3.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                <div className="relative z-10 opacity-0 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:-translate-y-2 md:group-hover:-translate-y-4">
                  <p className="text-2xl text-white font-bold mb-6 md:mb-8">
                    Indigenous Innovations
                  </p>
                  <p className="text-base text-white/90 font-medium mb-6 md:mb-8">
                    Proudly delivering homegrown solutions for a self-reliant
                    defence ecosystem.
                  </p>
                  <button className="bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white border border-primary transition-colors duration-300 hover:bg-white hover:text-black">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                <div className="relative z-10 opacity-0 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:-translate-y-2 md:group-hover:-translate-y-4">
                  <p className="text-2xl text-white font-bold mb-6 md:mb-8">
                    Precision Maintenance Systems
                  </p>
                  <p className="text-base text-white/90 font-medium mb-6 md:mb-8">
                    Ensuring operational superiority with advanced maintenance
                    technologies.
                  </p>
                  <button className="bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white border border-primary transition-colors duration-300 hover:bg-white hover:text-black">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 — no margin, we use a spacer after it for right space */}
            <div className="shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group">
              <div className="relative w-full min-h-[380px] md:min-h-[440px] bg-[url('/images/landing-2.png')] bg-cover bg-center px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:shadow-4xl">
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                <div className="relative z-10 opacity-0 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:-translate-y-2 md:group-hover:-translate-y-4">
                  <p className="text-2xl text-white font-bold mb-6 md:mb-8">
                    Precision Maintenance Systems
                  </p>
                  <p className="text-base text-white/90 font-medium mb-6 md:mb-8">
                    Ensuring operational superiority with advanced maintenance
                    technologies.
                  </p>
                  <button className="bg-primary text-base font-semibold py-2 px-6 rounded mb-0 text-white border border-primary transition-colors duration-300 hover:bg-white hover:text-black">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* END SPACER — guarantees right-side space when fully scrolled */}
            <div className="shrink-0 w-6 md:w-8 lg:w-12" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* component-scoped scrollbar hiding */}
      <style jsx>{`
        .cs-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cs-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CustomCarasoul;
