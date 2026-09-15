"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";
const colors: Record<Theme, string> = { dark: "#0b0b0a", light: "#f5f3ee" };

/** The <html> class is the source of truth; React subscribes to it instead of mirroring it in state. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getSnapshot = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");
const getServerSnapshot = (): Theme => "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const reduce = useReducedMotion();

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(next);
    root.style.colorScheme = next;
    // Keep the browser chrome colour in step with the manual choice.
    document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((m) => {
      m.removeAttribute("media");
      m.setAttribute("content", colors[next]);
    });
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={isDark}
      className={cn(
        "relative inline-flex size-10 items-center justify-center overflow-hidden border border-border text-fg transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {/* The two icons rotate through the button like a dial; reduced motion swaps instantly. */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center"
        initial={false}
        animate={{ rotate: isDark ? 0 : 90, opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.6 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 24 }}
      >
        <Moon className="size-4" />
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center"
        initial={false}
        animate={{ rotate: isDark ? -90 : 0, opacity: isDark ? 0 : 1, scale: isDark ? 0.6 : 1 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 24 }}
      >
        <Sun className="size-4" />
      </motion.span>
    </button>
  );
}
