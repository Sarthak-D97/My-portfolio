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
      <SectionTitle id="stack" lead="Tools, by how often I" accent="reach" trail="for them." className="lg:max-w-[20ch]" />
      <p className="sr-only">Listed by depth: Core is used in production every week, Proficient means shipped with and comfortable owning, Working means used in real systems and still deepening.</p>

      <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-3 lg:gap-0">
        {stack.map((tier, i) => (
          <div key={tier.tier} className={cn(i > 0 && "lg:border-l lg:border-border lg:pl-8")}>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="label text-fg">{tier.tier}</h3>
              <span className="meta inline-flex items-center gap-3 text-muted">
                <DepthMeter depth={tier.depth} />
                <span className="tnum">{tier.items.length}</span>
              </span>
            </div>
            <p className="py-3 text-body-sm text-muted">{tier.definition}</p>
            <Reveal as="ul" stagger={0.03}>
              {tier.items.map((item) => (
                <RevealItem as="li" key={item} className="border-b border-border py-3 text-body font-medium text-fg">
                  {item}
                </RevealItem>
              ))}
            </Reveal>
          </div>
        ))}
      </div>

      <p className="meta mt-8 text-muted">{dots(securityLine)}</p>
    </Section>
  );
}
