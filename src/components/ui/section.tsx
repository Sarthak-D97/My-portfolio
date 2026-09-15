import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id: string;
  /** Two-digit running index, e.g. "02". */
  index: string;
  /** Running head label, e.g. "About". */
  label: string;
  /** Optional note for the right side of the running head, e.g. "2023 — present". */
  note?: string;
  children: ReactNode;
  className?: string;
  /** Padding preset. */
  size?: "compact" | "default" | "large";
};

const padding = {
  compact: "py-[clamp(4rem,8vw,7rem)]",
  default: "py-[clamp(5rem,10vw,9rem)]",
  large: "py-[clamp(6rem,12vw,12rem)]",
};

/**
 * A numbered section: 1px rule on top and a running head — a small serif figure,
 * the mono label, and an optional note on the right.
 */
export function Section({ id, index, label, note, children, className, size = "default" }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative scroll-mt-14 border-t border-border", padding[size], className)}>
      <Container>
        <RunningHead index={index} label={label} note={note} />
        {children}
      </Container>
    </section>
  );
}

export function RunningHead({ index, label, note, className }: { index: string; label: string; note?: string; className?: string }) {
  return (
    <div className={cn("flex items-baseline justify-between gap-4", className)}>
      <span className="flex items-baseline gap-3">
        <span className="tnum font-serif text-[1.75rem] leading-none text-fg" aria-hidden="true">
          {index}
        </span>
        <span className="label text-muted">
          <span className="text-border-strong" aria-hidden="true">
            /{" "}
          </span>
          {label}
        </span>
      </span>
      {note ? <span className="label hidden text-muted sm:inline">{note}</span> : null}
    </div>
  );
}

/**
 * Section title: serif, size only. Rises out of a clipped mask when the section enters view.
 * `accent` is reserved for the two bookend headlines (hero and contact); everything else sets plain.
 */
export function SectionTitle({
  id,
  children,
  accent,
  className,
}: {
  id: string;
  children: ReactNode;
  /** The single italic word (with punctuation) rendered in the accent colour, appended after children. */
  accent?: string;
  className?: string;
}) {
  return (
    <h2 id={`${id}-title`} data-reveal="clip" className={cn("mt-8 max-w-[20ch] text-display-lg text-fg sm:mt-10", className)}>
      {children}
      {accent ? (
        <>
          {" "}
          <em className="em-accent">{accent}</em>
        </>
      ) : null}
    </h2>
  );
}
