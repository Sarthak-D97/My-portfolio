"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Gentle scroll-linked parallax for a framed image: the child drifts against the scroll and
 * settles from a slight zoom to 1 as the frame passes through the viewport. Static under reduced motion.
 */
export function ParallaxFigure({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.02]);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={reduce ? undefined : { y, scale }}>{children}</motion.div>
    </div>
  );
}
