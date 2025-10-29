"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollUpTextProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollUpText({
  children,
  className = "",
}: ScrollUpTextProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
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
    <motion.h2 ref={ref} className={className} animate={controls}>
      {children}
    </motion.h2>
  );
}
