"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function OurOffering() {
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
  const suppressClickUntil = useRef<number>(0);
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
                  // Flip on real touch ASAP; then ignore the follow-up synthetic click
                  onTouchStartCapture={() => {
                    toggle(idx);
                    suppressClickUntil.current = Date.now() + 400;
                  }}
                  // Flip on ANY click (so desktop mobile preview works too)
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
                  {/* Front */}
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

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-primary bg-primary text-white p-3 [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <p className="text-lg font-semibold mb-5 text-center">
                      {card.title}
                    </p>
                    <Link href="/" className="underline">
                      Home
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
