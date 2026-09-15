"use client";

import { useEffect } from "react";

/**
 * Scroll reveals. The hidden state (`.js [data-reveal]`) is only switched on here, after hydration,
 * so content is never hidden while JavaScript is still loading or if it never runs. Elements already
 * in the viewport are marked in view synchronously before the class is added, so nothing flickers.
 * Nodes added later (client re-renders, dev refreshes) are picked up by a MutationObserver.
 * Mounted once in the root layout; renders nothing.
 */
export function RevealObserver() {
  useEffect(() => {
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

    const track = (el: HTMLElement) => {
      if (el.hasAttribute("data-in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.setAttribute("data-in", "");
      else io.observe(el);
    };

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(track);
    document.documentElement.classList.add("js");

    const mo = new MutationObserver((records) => {
      for (const rec of records) {
        rec.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.hasAttribute("data-reveal")) track(node);
          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(track);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
