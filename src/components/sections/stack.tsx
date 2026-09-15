import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { securityLine, stack } from "@/data/profile";
import { cn, dots } from "@/lib/utils";

function DepthMeter({ depth }: { depth: 1 | 2 | 3 }) {
  return (
    <span className="inline-flex gap-[3px]" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={cn("h-1 w-3", n <= depth ? "bg-accent" : "bg-border")} />
      ))}
    </span>
  );
}

export function Stack() {
  return (
    <Section id="stack" index="06" label="Stack" note="By depth, not by logo count">
      <SectionTitle id="stack">Tools, by how often I reach for them.</SectionTitle>
      <p className="sr-only">
        Listed by depth: Core is used in production every week, Proficient means shipped with and comfortable owning, Working means used in real systems and still deepening.
      </p>

      <Reveal as="div" className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-3 lg:gap-0" stagger={0.1}>
        {stack.map((tier, i) => (
          <RevealItem key={tier.tier} className={cn("rule-draw", i > 0 && "lg:pl-8")}>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="label text-fg">{tier.tier}</h3>
              <span className="meta inline-flex items-center gap-3 text-muted">
                <DepthMeter depth={tier.depth} />
                <span className="tnum">{tier.items.length}</span>
              </span>
            </div>
            <p className="meta pt-3 text-muted">{tier.definition}</p>
            {/* An inline run, not a ledger: tags do not deserve a row each. */}
            <p className="mt-4 text-body leading-[1.9] text-fg">
              {tier.items.map((item, j) => (
                <span key={item}>
                  <span className="font-medium">{item}</span>
                  {j < tier.items.length - 1 ? <span className="font-mono text-muted"> · </span> : null}
                </span>
              ))}
            </p>
          </RevealItem>
        ))}
      </Reveal>

      <p className="meta mt-10 border-t border-border pt-5 text-muted">{dots(securityLine)}</p>
    </Section>
  );
}
