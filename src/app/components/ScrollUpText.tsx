"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollUpTextProps {
  children: ReactNode;
  className?: string;
  // Heading level (or plain element) to render; defaults to h1.
  as?: "h1" | "h2" | "p" | "span";
}

export default function ScrollUpText({
  children,
  className = "",
  as = "h1",
}: ScrollUpTextProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const Tag = motion[as] as typeof motion.h1;
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    controls.set({ y: 15, opacity: 0 });
  }, [controls]);

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.25, // ✅ fast
          ease: "linear", // ✅ no slowing curve
        },
      });
    } else {
      controls.set({ y: 15, opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <Tag ref={ref} className={className} animate={controls}>
      {children}
    </Tag>
  );
}
