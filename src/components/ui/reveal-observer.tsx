"use client";

import { useEffect } from "react";

/**
 * Scroll reveals. The hidden state (`.js [data-reveal]`) is only switched on here, after hydration,
 * so content is never hidden while JavaScript is still loading or if it never runs. Elements already
 * in the viewport are marked in view synchronously before the class is added, so nothing flickers.
 * Mounted once in the root layout; renders nothing.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;
    const vh = window.innerHeight;
    const pending: HTMLElement[] = [];
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.setAttribute("data-in", "");
      else pending.push(el);
    }
    document.documentElement.classList.add("js");
    if (pending.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
