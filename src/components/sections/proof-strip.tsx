import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { proof } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Four ruled cells under the hero. The dividers draw themselves in before the numbers count up. */
export function ProofStrip() {
  return (
    <section aria-labelledby="proof-title" className="border-y border-border">
      <h2 id="proof-title" className="sr-only">
        Key figures
      </h2>
      <Container>
        <Reveal as="ul" className="grid grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {proof.map((cell, i) => (
            <RevealItem
              as="li"
              key={cell.label}
              className={cn(
                "rule-draw py-6 pr-3 pl-3 sm:py-8 sm:pr-6 sm:pl-6",
                // 2×2 on small screens: drawn rule on cells 2 & 4, top rule on cells 3 & 4.
                i % 2 === 0 && "lg:[&::before]:hidden",
                i === 0 && "[&::before]:hidden",
                i >= 2 && "border-t border-border lg:border-t-0",
                i === 0 && "pl-0 sm:pl-0",
              )}
            >
              <p className="text-metric whitespace-nowrap text-fg [letter-spacing:-0.01em]">
                <CountUp value={cell.value} decimals={cell.decimals} prefix={cell.prefix} suffix={cell.suffix} />
              </p>
              <p className="label mt-4 text-muted">{cell.label}</p>
              <p className="mt-1.5 max-w-[26ch] text-body-sm text-muted">{cell.provenance}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
