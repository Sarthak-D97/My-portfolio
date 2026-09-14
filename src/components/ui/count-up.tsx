"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  decimals?: 0 | 1;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Seconds. */
  duration?: number;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts up from 0 on first view (native IntersectionObserver + requestAnimationFrame, no library).
 * The server HTML contains the final value, so the number is right without JavaScript, and an
 * invisible copy of the final value reserves width so the layout never jitters while animating.
 * Skipped entirely under prefers-reduced-motion.
 */
export function CountUp({ value, decimals = 0, prefix = "", suffix = "", className, duration = 1.2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = value.toFixed(decimals);
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((e) => e.isIntersecting)) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const ms = duration * 1000;
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / ms);
          setDisplay((value * easeOutCubic(p)).toFixed(decimals));
          if (p < 1) frame = requestAnimationFrame(tick);
          else setDisplay(null);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span className="relative inline-grid">
        <span className="invisible col-start-1 row-start-1" aria-hidden="true">
          {final}
        </span>
        <span className="col-start-1 row-start-1" aria-hidden={display !== null ? "true" : undefined}>
          {display ?? final}
        </span>
        {display !== null ? <span className="sr-only">{final}</span> : null}
      </span>
      {suffix}
    </span>
  );
}
