"use client";
import React, { useEffect, useRef } from "react";

const FREQ = 0.3;
const SMOOTHING = 0.12;
const IDLE_MS = 220;

const CustomCarasoul: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRafRef = useRef<number | null>(null);
  const oscRafRef = useRef<number | null>(null);

  const didInit = useRef(false);
  const visibleRef = useRef(true);
  const pageVisibleRef = useRef(true);

  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  const oscActive = useRef(false);
  const oscStart = useRef<number>(0);
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const amplitudeRef = useRef<number>(22);

  const cardsRef = useRef<HTMLDivElement[]>([]);
  const currentYRef = useRef<number[]>([]);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    const container = containerRef.current;
    if (!container) return;

    const setAmplitude = () => {
      amplitudeRef.current = window.matchMedia("(min-width:1024px)").matches
        ? 14
        : 22;
    };
    setAmplitude();

    const queryCards = () =>
      Array.from(container.querySelectorAll<HTMLDivElement>(".jc-card"));

    const syncCards = () => {
      const els = queryCards();
      cardsRef.current = els;
      if (currentYRef.current.length !== els.length) {
        currentYRef.current = new Array(els.length).fill(0);
      }
    };

    const resetCardTransforms = () => {
      syncCards();
      cardsRef.current.forEach((c, i) => {
        currentYRef.current[i] = 0;
        c.style.transform = "translate3d(0,0,0)";
      });
    };

    const oscillate = (t: number) => {
      if (!oscActive.current || !visibleRef.current || !pageVisibleRef.current)
        return;
      syncCards();
      const omega = 2 * Math.PI * FREQ;
      const elapsed = (t - oscStart.current) / 1000;

      for (let i = 0; i < cardsRef.current.length; i++) {
        const phase = i % 2 === 0 ? 0 : Math.PI;
        const targetY =
          Math.sin(omega * elapsed + phase) * amplitudeRef.current;
        const prev = currentYRef.current[i] ?? 0;
        const next = prev + (targetY - prev) * SMOOTHING;
        currentYRef.current[i] = next;
        cardsRef.current[i].style.transform = `translate3d(0, ${next}px, 0)`;
      }
      oscRafRef.current = requestAnimationFrame(oscillate);
    };

    const tick = () => {
      if (visibleRef.current && pageVisibleRef.current) {
        const ease = 0.08;
        currentScroll.current +=
          (targetScroll.current - currentScroll.current) * ease;
        container.scrollLeft = currentScroll.current;
      }
      scrollRafRef.current = requestAnimationFrame(tick);
    };
    scrollRafRef.current = requestAnimationFrame(tick);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      targetScroll.current = Math.max(0, Math.min(1, x)) * max;

      if (!oscActive.current) {
        oscActive.current = true;
        oscStart.current = performance.now();
        if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
        oscRafRef.current = requestAnimationFrame(oscillate);
      }

      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
      stopTimerRef.current = setTimeout(() => {
        oscActive.current = false;
        if (oscRafRef.current) {
          cancelAnimationFrame(oscRafRef.current);
          oscRafRef.current = null;
        }
      }, IDLE_MS);
    };

    const onPointerEnter = () => {
      if (visibleRef.current) {
        oscStart.current = performance.now();
      }
    };

    const onPointerLeave = () => {
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
      targetScroll.current = container.scrollLeft;
    };

    const onNativeScroll = () => {
      currentScroll.current = container.scrollLeft;
      targetScroll.current = container.scrollLeft;
    };

    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerenter", onPointerEnter, {
      passive: true,
    });
    container.addEventListener("pointerleave", onPointerLeave, {
      passive: true,
    });
    container.addEventListener("scroll", onNativeScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => (visibleRef.current = entries[0]?.isIntersecting ?? true),
      { threshold: 0.05 }
    );
    io.observe(container);

    const onVis = () =>
      (pageVisibleRef.current = document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", onVis);

    const onResize = () => {
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      targetScroll.current = Math.min(targetScroll.current, max);
      currentScroll.current = Math.min(currentScroll.current, max);
      setAmplitude();
      syncCards();
    };
    window.addEventListener("resize", onResize);

    syncCards();

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeEventListener("scroll", onNativeScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      if (oscRafRef.current) cancelAnimationFrame(oscRafRef.current);
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
    };
  }, []);

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
        className={`shrink-0 basis-[85%] md:basis-[45%] lg:basis-[26%] group ${extraClasses}`}
      >
        <div
          className={
            "jc-card relative w-full " +
            "h-[380px] md:h-[350px] lg:h-[260px] " + // Set a fixed height to ensure all cards are the same size
            "px-8 py-20 md:py-24 lg:px-6 lg:py-12 " +
            "rounded-2xl text-center overflow-hidden transform-gpu will-change-transform"
          }
          style={style}
        >
          <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
          <div className="relative z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 select-none">
            <p className="text-2xl md:text-2xl lg:text-xl text-white font-bold mb-6 md:mb-8 lg:mb-4">
              {title}
            </p>
            <p className="text-base md:text-base lg:text-sm text-white/90 font-medium mb-6 md:mb-8 lg:mb-5">
              {desc}
            </p>
            <button className="bg-primary text-base md:text-base lg:text-sm font-semibold py-2 px-6 lg:px-5 rounded text-white border border-primary transition-colors duration-300 hover:bg-white hover:text-black">
              Learn More
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
          className="relative overflow-x-scroll overflow-y-hidden pb-10 cs-scroll touch-pan-x pointer-events-auto"
          style={{ overscrollBehaviorX: "contain" }}
        >
          <div className="flex gap-6 md:gap-8 lg:gap-6 justify-start py-6">
            <Card
              bg="/images/landing-1.png"
              title="Expanding Horizons in Aerospace"
              desc="Driving innovation to redefine the possibilities in defence and aerospace industries."
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
              title="Trusted Spares, Seamless Systems"
              desc="Aircraft spares and systems designed for flawless performance."
            />
            <Card
              bg="/images/landing-2.png"
              title="Airborne Innovation at the Core"
              desc="High-grade airborne materials built for resilience and reliability."
            />
            <div className="shrink-0 w-6 md:w-8 lg:w-6" aria-hidden="true" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .cs-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cs-scroll::-webkit-scrollbar {
          display: none;
        }
        /* Ensuring all cards are same size */
        .jc-card {
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          contain: paint;
        }
      `}</style>
    </div>
  );
};

export default CustomCarasoul;
