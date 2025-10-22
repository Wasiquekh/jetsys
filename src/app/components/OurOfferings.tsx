"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function OurOffering() {
  const cards = [
    {
      img: "/images/offer-1.png",
      title: "Aviation Equipment",
      desc: "Jetsys’s aviation equipment is engineered for precision, reliability, and mission readiness delivering performance from ground support to onboard systems.",
    },
    {
      img: "/images/offer-2.png",
      title: "Raw Materials",
      desc: "Jetsys’s raw materials are sourced and engineered for strength, durability, and consistency ensuring uncompromised quality in every aerospace and defence application.",
    },
    {
      img: "/images/offer-3.png",
      title: "Testing & Maintenance",
      desc: "Jetsys’s testing and maintenance solutions ensure flawless aircraft performance through precision calibration, diagnostics, and portability enabling faster cycles and safer skies.",
    },
    {
      img: "/images/offer-4.png",
      title: "Indigenization",
      desc: "Jetsys’s indigenization solutions replace legacy imports with homegrown excellence delivering faster, cost-efficient, and resilient systems that meet and exceed global standards.",
    },
    {
      img: "/images/offer-5.png",
      title: "Aircraft Spares",
      desc: "Jetsys’s aircraft spares ensure seamless operations with reliable, high-quality components minimizing downtime and maximizing fleet readiness.",
    },
    {
      img: "/images/offer-6.png",
      title: "Runway Spares",
      desc: "Jetsys’s runway spares are built for reliability and quick availability — ensuring uninterrupted operations and mission-ready performance.",
    },
    {
      img: "/images/offer-7.png",
      title: "Test Rigs & Test Chambers",
      desc: "Jetsys’s test rigs and chambers deliver precision simulations and rigorous validation, ensuring aircraft systems perform flawlessly under real-world conditions.",
    },
    {
      img: "/images/offer-8.png",
      title: "Ground Support & Handling Equipment",
      desc: "Ground support and handling equipment is engineered for durability and efficiency ensuring smooth operations, faster turnaround, and mission readiness.",
    },
    {
      img: "/images/offer-9.png",
      title: "Others",
      desc: "Jetsys’s unmanned solutions combine advanced engineering with intelligent systems delivering superior surveillance, precision operations, and adaptability across defence and aerospace missions.",
    },
  ];

  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const suppressClickUntil = useRef<number>(0);
  const toggle = (i: number) => setFlipped((s) => ({ ...s, [i]: !s[i] }));

  // CODE FOR SCROLL ANIMATION OUR OFFERING SECTION
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

  // END CODE FOR SCROLL ANIMATION AFTER OUR OFFERING  SECTION

  return (
    <section ref={sectionRef}>
      <div className="container">
        {/* Static Heading */}
        {/* Static Heading */}
        <h1
          ref={headingRef}
          style={headingStyle}
          className="mx-auto text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase  horizon-text w-full md:w-[80%] mb-16 -mt-16"
        >
          Our Offerings
        </h1>

        <p className="text-base text-black font-medium text-center mb-5">
          Jetsys Defence is an agile, innovation-driven aerospace and defence
          company based in India. We specialize in mission-critical technologies
          for airborne platforms, avionics, and tactical systems — engineered
          for performance, reliability, and national impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, idx) => {
            const isFlipped = !!flipped[idx];
            return (
              <div key={idx} className="group [perspective:1000px]">
                <div
                  role="button"
                  tabIndex={0}
                  className={[
                    "relative h-[360px] w-full rounded shadow-xl cursor-pointer",
                    "transition-transform duration-500",
                    "[transform-style:preserve-3d] [-webkit-transform-style:preserve-3d]",
                    "[touch-action:manipulation] select-none [-webkit-tap-highlight-color:transparent]",
                    "group-hover:[transform:rotateY(180deg)]", // desktop hover
                  ].join(" ")}
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : undefined,
                    WebkitTransform: isFlipped ? "rotateY(180deg)" : undefined,
                  }}
                  onTouchStartCapture={() => {
                    toggle(idx);
                    suppressClickUntil.current = Date.now() + 400;
                  }}
                  onClickCapture={(e) => {
                    const t = e.target as HTMLElement;
                    if (t.closest("a")) return; // don't flip when tapping the link
                    if (Date.now() < suppressClickUntil.current) return; // skip synthetic click after touch
                    toggle(idx);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(idx);
                    }
                  }}
                  aria-pressed={isFlipped}
                  aria-label={`${card.title} card; tap to flip`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-primary bg-white p-2 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <Image
                      src={card.img}
                      width={300}
                      height={300}
                      alt={card.title}
                      className="mb-2 w-full pointer-events-none"
                    />
                    <p className="text-xl font-semibold text-primary mb-0 text-center">
                      {card.title}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-primary bg-primary text-white p-5 [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <p className="text-lg font-semibold mb-5 text-center">
                      {card.title}
                    </p>
                    <p className="text-sm font-normal  mb-5 text-center">
                      {card.desc}
                    </p>

                    <Link
                      href="/"
                      className="underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
