"use client";

import { useEffect } from "react";

const FOLD_RATIO = 0.92;

/**
 * Progressive scroll-reveal for the resources and industries hub pages.
 *
 * Every element marked with `data-animate` is faded and slid into place: items
 * already on screen animate on mount, the rest once they rise past the fold.
 * Without JS (or with reduced motion) no attribute is set and the markup stays
 * fully visible.
 *
 * A scroll listener is used rather than IntersectionObserver because an element
 * that is jumped over (anchor link, scroll restoration, fast flick) never
 * crosses an intersection threshold and would otherwise stay hidden for good.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    if (!items.length) return;

    const pending = new Set<HTMLElement>();
    const fold = window.innerHeight * FOLD_RATIO;

    for (const item of items) {
      if (item.getBoundingClientRect().top >= fold) {
        item.dataset.reveal = "pending";
        pending.add(item);
      } else {
        item.dataset.reveal = "visible";
      }
    }

    let frame = 0;

    function reveal() {
      frame = 0;
      const limit = window.innerHeight * FOLD_RATIO;
      for (const item of pending) {
        if (item.getBoundingClientRect().top >= limit) continue;
        item.dataset.reveal = "visible";
        pending.delete(item);
      }
      if (!pending.size) stop();
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(reveal);
    }

    function stop() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    }

    if (pending.size) {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      // Images and fonts can settle after mount and shift everything upward.
      schedule();
    }

    return () => {
      stop();
      for (const item of items) delete item.dataset.reveal;
    };
  }, []);

  return null;
}
