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
  size?: "default" | "large";
};

/**
 * A numbered section: 1px rule on top, mono running head ("03 / Experience" — note),
 * and an oversized ghost numeral behind the title (decorative, aria-hidden).
 */
export function Section({ id, index, label, note, children, className, size = "default" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "relative scroll-mt-14 border-t border-border",
        size === "default" ? "py-[clamp(5rem,10vw,10rem)]" : "py-[clamp(6rem,12vw,12.5rem)]",
        className,
      )}
    >
      <Container className="relative">
        <span className="ghost -top-8 -left-1 sm:-top-10" aria-hidden="true">
          {index}
        </span>
        <div className="label relative z-[1] flex items-baseline justify-between gap-4 text-muted">
          <span>
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-border-strong">/</span>
            {label}
          </span>
          {note ? <span className="hidden text-right sm:inline">{note}</span> : null}
        </div>
        <div className="relative z-[1]">{children}</div>
      </Container>
    </section>
  );
}

/** Section title: serif, size only, with exactly one italic accent word appended. */
export function SectionTitle({
  id,
  lead,
  accent,
  trail,
  className,
}: {
  id: string;
  /** The words before the accent word. */
  lead: string;
  /** The single italic word (with its punctuation) rendered in the accent colour. */
  accent: string;
  /** Optional words after the accent word. */
  trail?: string;
  className?: string;
}) {
  return (
    <h2 id={`${id}-title`} className={cn("mt-8 max-w-[18ch] text-display-lg text-fg sm:mt-12", className)}>
      {lead} <em className="em-accent">{accent}</em>
      {trail ? ` ${trail}` : null}
    </h2>
  );
}
