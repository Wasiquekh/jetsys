"use client";
import React, { useEffect, useRef } from "react";

const CustomCarasoul: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // smooth scroll loop refs
  const scrollRafRef = useRef<number | null>(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  // oscillation loop refs (active only while mouse is moving)
  const oscRafRef = useRef<number | null>(null);
  const oscActive = useRef(false);
  const oscStart = useRef<number>(0);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // smoothing state
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const currentYRef = useRef<number[]>([]); // smoothed y per card

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const queryCards = () =>
      Array.from(container.querySelectorAll<HTMLDivElement>(".card"));

    const syncCardsArrays = () => {
      const els = queryCards();
      cardsRef.current = els;
      // keep existing values if same length; else (re)init to 0
      if (currentYRef.current.length !== els.length) {
        currentYRef.current = new Array(els.length).fill(0);
      }
    };

    const resetCardTransforms = () => {
      syncCardsArrays();
      cardsRef.current.forEach((c, i) => {
        currentYRef.current[i] = 0;
        c.style.transform = "translate3d(0,0,0)";
      });
    };

    // rAF oscillation — runs only while oscActive === true
    const oscillate = (t: number) => {
      if (!oscActive.current) return;

      syncCardsArrays();
      const cards = cardsRef.current;
      if (cards.length === 0) {
        oscRafRef.current = requestAnimationFrame(oscillate);
        return;
      }

      const elapsed = (t - oscStart.current) / 1000;

      // tune feel
      const amplitude = 50; // px (try 14–24)
      const cyclesPerSecond = 0.2; // Hz (try 0.6–1.2)
      const omega = 2 * Math.PI * cyclesPerSecond;
      const smoothing = 0.12; // 0..1 (lower = smoother, higher = snappier)

      for (let i = 0; i < cards.length; i++) {
        const phase = i % 2 === 0 ? 0 : Math.PI; // alternate up/down
        const targetY = Math.sin(omega * elapsed + phase) * amplitude;

        // LERP toward target for buttery motion
        const prev = currentYRef.current[i] ?? 0;
        const next = prev + (targetY - prev) * smoothing;
        currentYRef.current[i] = next;

        cards[i].style.transform = `translate3d(0, ${next}px, 0)`;
      }

      oscRafRef.current = requestAnimationFrame(oscillate);
    };

    // pointer-driven smooth scroll + oscillation trigger
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      targetScroll.current = x * max;

      // start/keep oscillating as long as the mouse keeps moving
      if (!oscActive.current) {
        oscActive.current = true;
        oscStart.current = performance.now();
        if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
        oscRafRef.current = requestAnimationFrame(oscillate);
      }

      // when movement stops, pause but keep cards at last positions
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
      stopTimerRef.current = setTimeout(() => {
        oscActive.current = false;
        if (oscRafRef.current) {
          cancelAnimationFrame(oscRafRef.current);
          oscRafRef.current = null;
        }
        // leave transforms as-is
      }, 220);
    };

    const onMouseLeave = () => {
      // stop oscillation loop and reset
      oscActive.current = false;
      if (oscRafRef.current) {
        cancelAnimationFrame(oscRafRef.current);
        oscRafRef.current = null;
      }
      if (stopTimerRef.current) {
        clearTimeout(stopTimerRef.current);
        stopTimerRef.current = null;
      }
      resetCardTransforms();
      targetScroll.current = (container as HTMLDivElement).scrollLeft;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    // smooth easing loop (always running) for scroll
    const tick = () => {
      const ease = 0.08; // smaller = smoother
      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * ease;
      container.scrollLeft = currentScroll.current;
      scrollRafRef.current = requestAnimationFrame(tick);
    };
    scrollRafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      targetScroll.current = Math.min(targetScroll.current, max);
      currentScroll.current = Math.min(currentScroll.current, max);
      // resync in case layout changed
      syncCardsArrays();
    };
    window.addEventListener("resize", onResize);

    // initial sync
    syncCardsArrays();

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);

      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
    };
  }, []);

  // Card helper — inner panel must have class "card"
  const Card = ({
    bg,
    title,
    desc,
    extraClasses = "",
  }: {
    bg: string;
    title: string;
    desc: string;
    extraClasses?: string;
  }) => {
    const style = {
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    } as React.CSSProperties;

    return (
      <div
        className={`shrink-0 basis-[85%] md:basis-[45%] lg:basis-[40%] group ${extraClasses}`}
      >
        <div
          className="card relative w-full min-h-[380px] md:min-h-[440px] px-8 py-20 md:py-24 rounded-2xl text-center overflow-hidden transform-gpu will-change-transform backface-hidden"
          style={style}
        >
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
          <div className="relative z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-2xl text-white font-bold mb-6 md:mb-8">
              {title}
            </p>
            <p className="text-base text-white/90 font-medium mb-6 md:mb-8">
              {desc}
            </p>
            <button className="bg-primary text-base font-semibold py-2 px-6 rounded text-white border border-primary transition-colors duration-300 hover:bg-white hover:text-black">
              Know More
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className="py-[75px] md:pt-[75px] md:pb-0 max-w-[1540px] mx-auto">
        <div
          ref={containerRef}
          className="relative overflow-x-scroll overflow-y-hidden pb-10 cs-scroll"
        >
          <div className="flex gap-6 md:gap-8 lg:gap-10 justify-start py-6">
            {/* 4 cards */}
            <Card
              bg="/images/landing-1.png"
              title="Expanding Horizons in Aerospace"
              desc="Driving innovation to redefine the possibilities in defence and aerospace industries."
              extraClasses="ml-6 md:ml-8 lg:ml-12"
            />
            <Card
              bg="/images/landing-3.png"
              title="Indigenous Innovations"
              desc="Proudly delivering homegrown solutions for a self-reliant defence ecosystem."
            />
            <Card
              bg="/images/landing-2.png"
              title="Precision Maintenance Systems"
              desc="Ensuring operational superiority with advanced maintenance technologies."
            />
            <Card
              bg="/images/landing-2.png"
              title="Operational Excellence"
              desc="Maximizing uptime with reliable, cutting-edge support systems."
            />

            {/* Right-side spacer */}
            <div className="shrink-0 w-6 md:w-8 lg:w-12" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* component-scoped CSS */}
      <style jsx>{`
        .cs-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cs-scroll::-webkit-scrollbar {
          display: none;
        }
        .card {
          /* GPU-friendly hints */
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          contain: paint; /* prevents repaint leaks */
        }
      `}</style>
    </div>
  );
};

export default CustomCarasoul;
