import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { proof } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Four ruled cells under the hero. Every number carries a caption and a provenance sentence. */
export function ProofStrip() {
  return (
    <section aria-labelledby="proof-title" className="border-y border-border">
      <h2 id="proof-title" className="sr-only">
        Key figures
      </h2>
      <Container>
        <ul role="list" className="grid grid-cols-2 lg:grid-cols-4">
          {proof.map((cell, i) => (
            <li
              key={cell.label}
              className={cn(
                "py-6 pr-3 pl-3 sm:py-8 sm:pr-6 sm:pl-6",
                // 2×2 on small screens: left rule on cells 2 & 4, top rule on cells 3 & 4.
                i % 2 === 1 && "border-l border-border",
                i >= 2 && "border-t border-border lg:border-t-0",
                i > 0 && "lg:border-l lg:border-border",
                i === 0 && "pl-0 sm:pl-0",
              )}
            >
              <Reveal>
                <p className="text-metric whitespace-nowrap text-fg">
                  <CountUp value={cell.value} decimals={cell.decimals} prefix={cell.prefix} suffix={cell.suffix} />
                </p>
                <p className="label mt-3 text-muted">{cell.label}</p>
                <p className="mt-2 text-body-sm text-fg">{cell.provenance}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
