"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OurOffering() {
  // 9 cards
  const cards = [
    { img: "/images/offerings/avionics.png", title: "Avionics Systems" },
    {
      img: "/images/offerings/airborne-platforms.png",
      title: "Airborne Platforms",
    },
    {
      img: "/images/offerings/tactical-systems.png",
      title: "Tactical Systems",
    },
    {
      img: "/images/offerings/mission-computers.png",
      title: "Mission Computers",
    },
    {
      img: "/images/offerings/flight-control.png",
      title: "Flight Control & Autopilot",
    },
    { img: "/images/offerings/navigation.png", title: "Navigation (GPS/INS)" },
    { img: "/images/offerings/datalinks-sdr.png", title: "Datalinks & SDR" },
    {
      img: "/images/offerings/ew-systems.png",
      title: "Electronic Warfare (EW)",
    },
    { img: "/images/offerings/gcs.png", title: "Ground Control Stations" },
  ];

  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setFlipped((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section className="">
      <div className="container">
        <h1 className="mx-auto text-center text-primary text-[30px] md:text-[40px] font-extrabold uppercase mb-5 horizon-text w-full md:w-[80%]">
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
              <div key={idx} className="[perspective:1000px]">
                <motion.div
                  role="button"
                  tabIndex={0}
                  className={[
                    "relative h-[360px] w-full rounded shadow-xl border border-primary",
                    "cursor-pointer select-none outline-none",
                    // 3D context + mobile quirks
                    "[transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] [will-change:transform]",
                    "[touch-action:manipulation] [-webkit-tap-highlight-color:transparent]",
                  ].join(" ")}
                  // Hover flips on desktop; animate keeps state for tap/click
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                  onClick={() => toggle(idx)} // works in real mobile & DevTools mobile
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(idx);
                    }
                  }}
                  aria-pressed={isFlipped}
                  aria-label={`${card.title} card; tap to flip`}
                  style={{
                    WebkitTransform: isFlipped ? "rotateY(180deg)" : undefined, // iOS hint
                  }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded bg-white p-2 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
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

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded bg-primary text-white p-3 [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <p className="text-lg font-semibold mb-5 text-center">
                      {card.title}
                    </p>
                    {/* Navigate to home ("/"); stop click from re-toggling */}
                    <Link
                      href="/"
                      className="underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Home
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
