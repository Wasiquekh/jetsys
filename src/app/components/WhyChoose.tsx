import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WhyChoose = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: "translateY(0px)", // Initial position off-screen
  });

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) return;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));

    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const triggerStart = vh * 0.9; // start animating near bottom
      const triggerEnd = vh * 0.25; // finish before hitting header

      let progress: number;

      if (rect.top >= triggerStart) {
        progress = 0; // fully visible, centered
      } else if (rect.top <= 0) {
        progress = 1; // fully hidden once section top reaches header
      } else {
        const t = (triggerStart - rect.top) / (triggerStart - triggerEnd);
        progress = clamp(t, 0, 1);
      }

      const translateY = progress * 40; // Adjust this value for the "up" movement
      const opacity = progress;

      setHeadingStyle({
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
        willChange: "opacity, transform",
      });

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    window.addEventListener("resize", update, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div>
      <section ref={sectionRef} className="bg-[#EBE4CF]">
        <div className="container">
          <h1
            ref={headingRef}
            style={headingStyle}
            className="mx-auto text-center text-black text-[30px] md:text-[40px] font-extrabold uppercase mb-16 -mt-16  w-full md:w-[80%] horizon"
          >
            Why Choose Us?
          </h1>

          <p className="text-base text-black font-medium text-center mb-5">
            We deliver high-precision aerospace components through advanced
            manufacturing and R&amp;D-driven innovation. Backed by system
            engineering and rigorous testing, our solutions ensure reliability
            in mission-critical environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mt-12">
            {/* Card 1 */}
            <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
              <Image
                src="/images/choose-1.png"
                width={305}
                height={220}
                alt="Advanced Manufacturing"
                className="w-full"
              />
              <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
                Advanced Manufacturing
              </p>
            </div>

            {/* Card 2 */}
            <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
              <Image
                src="/images/choose-2.png"
                width={305}
                height={220}
                alt="Partner Focused"
                className="w-full"
              />
              <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
                Partner Focused
              </p>
            </div>

            {/* Card 3 */}
            <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
              <Image
                src="/images/choose-3.png"
                width={305}
                height={220}
                alt="System Integration"
                className="w-full"
              />
              <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
                System Integration
              </p>
            </div>

            {/* Card 4 */}
            <div className="transition duration-300 transform hover:scale-103 hover:shadow-xl rounded">
              <Image
                src="/images/choose-4.png"
                width={305}
                height={220}
                alt="Timely Delivery"
                className="w-full"
              />
              <p className="bg-white border-b-3 border-primary text-black text-center text-base font-semibold py-2">
                Timely Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
