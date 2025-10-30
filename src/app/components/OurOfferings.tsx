"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ScrollUpText from "./ScrollUpText";

export default function OurOffering() {
  const cards = [
    {
      img: "/images/offer-1.png",
      title: "Aviation Equipment",
      desc: "Jetsys’s aviation equipment is engineered for precision, reliability, and mission readiness delivering performance from ground support to onboard systems.",
      link: "/products/aviation-equipment",
    },
    {
      img: "/images/offer-2.png",
      title: "Raw Materials",
      desc: "Jetsys’s raw materials are sourced and engineered for strength, durability, and consistency ensuring uncompromised quality in every aerospace and defence application.",
      link: "/",
    },
    {
      img: "/images/offer-3.png",
      title: "Testing & Maintenance",
      desc: "Jetsys’s testing and maintenance solutions ensure flawless aircraft performance through precision calibration, diagnostics, and portability enabling faster cycles and safer skies.",
      link: "/solutions/testing-maintenance",
    },
    {
      img: "/images/offer-4.png",
      title: "Indigenization",
      desc: "Jetsys’s indigenization solutions replace legacy imports with homegrown excellence delivering faster, cost-efficient, and resilient systems that meet and exceed global standards.",
      link: "/solutions/indegenization",
    },
    {
      img: "/images/offer-5.png",
      title: "Aircraft Spares",
      desc: "Jetsys’s aircraft spares ensure seamless operations with reliable, high-quality components minimizing downtime and maximizing fleet readiness.",
      link: "/products/aircraft-spares-system",
    },
    {
      img: "/images/offer-6.png",
      title: "Runway Spares",
      desc: "Jetsys’s runway spares are built for reliability and quick availability — ensuring uninterrupted operations and mission-ready performance.",
      link: "/products/runway-spares",
    },
    {
      img: "/images/offer-7.png",
      title: "Test Rigs & Test Chambers",
      desc: "Jetsys’s test rigs and chambers deliver precision simulations and rigorous validation, ensuring aircraft systems perform flawlessly under real-world conditions.",
      link: "/solutions/testing-maintenance",
    },
    {
      img: "/images/offer-8.png",
      title: "Ground Support & Handling Equipment",
      desc: "Ground support and handling equipment is engineered for durability and efficiency ensuring smooth operations, faster turnaround, and mission readiness.",
      link: "/products/aviation-equipment",
    },
    {
      img: "/images/offer-9.png",
      title: "Others",
      desc: "Jetsys’s unmanned solutions combine advanced engineering with intelligent systems delivering superior surveillance, precision operations, and adaptability across defence and aerospace missions.",
      link: "/contact-us",
    },
  ];

  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const suppressClickUntil = useRef<number>(0);
  const toggle = (i: number) => setFlipped((s) => ({ ...s, [i]: !s[i] }));

  return (
    <section>
      <div className="container">
        <ScrollUpText className="mx-auto text-center text-[#5c5649] text-[30px] md:text-[40px] font-extrabold uppercase horizon-text w-full md:w-[80%] mb-5 horizon">
          Our Offerings
        </ScrollUpText>

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
                    "group-hover:[transform:rotateY(180deg)]",
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
                    if (t.closest("a")) return;
                    if (Date.now() < suppressClickUntil.current) return;
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-primary bg-primary text-white p-5 [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <p className="text-lg font-semibold mb-5 text-center">
                      {card.title}
                    </p>
                    <p className="text-sm font-normal mb-5 text-center">
                      {card.desc}
                    </p>
                    <Link
                      href={card.link}
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
