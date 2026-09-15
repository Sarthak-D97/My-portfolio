"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type PreviewItem = { key: string; src: string; alt: string };

/**
 * Cursor-following preview for a list of rows. Rows opt in with `data-preview="<key>"`.
 * Desktop, fine-pointer only; the preview is decorative (aria-hidden) and never the only
 * place information lives. Off under prefers-reduced-motion.
 */
export function HoverPreview({ items, children, className }: { items: PreviewItem[]; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 320, damping: 32, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 320, damping: 32, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 64rem)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || reduce) return;
    const onMove = (e: PointerEvent) => {
      const row = (e.target as HTMLElement).closest<HTMLElement>("[data-preview]");
      const key = row?.dataset.preview ?? null;
      setActive(key);
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left + 24);
      y.set(e.clientY - r.top - 110);
    };
    const onLeave = () => setActive(null);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, reduce, x, y]);

  const item = items.find((i) => i.key === active);

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      {children}
      <AnimatePresence>
        {enabled && !reduce && item ? (
          <motion.div
            key={item.key}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 z-20 w-[320px] overflow-hidden border border-border bg-surface"
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.6 }}
          >
            <Image src={item.src} alt="" width={960} height={600} sizes="320px" className="aspect-[16/10] w-full object-cover object-top" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
