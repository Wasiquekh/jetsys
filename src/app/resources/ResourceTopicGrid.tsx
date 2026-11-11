"use client";

import { type ReactNode, useEffect, useRef } from "react";
import styles from "../hubs.module.css";

export default function ResourceTopicGrid({ children }: { children: ReactNode }) {
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!grid || !motion.matches || !("IntersectionObserver" in window)) return;

    // Keep the server-rendered cards visible if they are already on screen.
    const cards = Array.from(grid.children).filter(
      (card) => card.getBoundingClientRect().top >= window.innerHeight,
    );
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-reveal", "visible");
        observer.unobserve(entry.target);
      }
    });

    for (const card of cards) {
      card.setAttribute("data-reveal", "pending");
      observer.observe(card);
    }

    return () => {
      observer.disconnect();
      for (const card of cards) card.removeAttribute("data-reveal");
    };
  }, []);

  return <ul ref={gridRef} className={styles.topicGrid}>{children}</ul>;
}
