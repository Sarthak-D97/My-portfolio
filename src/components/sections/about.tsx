import { ExternalLink } from "@/components/ui/external-link";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { about } from "@/data/profile";

export function About() {
  return (
    <Section id="about" index="02" label="About" note={about.note} size="compact">
      {/* Marginalia collapses to one mono row above the title below lg. */}
      <p className="meta mt-6 text-muted lg:hidden">
        {about.marginalia.map((m, i) => (
          <span key={m.label}>
            <span className="text-fg">{m.label}</span> — {m.value}
            {i < about.marginalia.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>

      <div className="grid gap-x-6 lg:grid-cols-12">
        <dl className="meta sticky top-[5.5rem] hidden self-start leading-[1.8] text-muted lg:col-span-4 lg:mt-10 lg:block">
          {about.marginalia.map((m) => (
            <div key={m.label} className="border-t border-border py-2.5">
              <dt className="inline text-fg">{m.label}</dt>
              <span aria-hidden="true"> — </span>
              <dd className="inline">
                {"href" in m && m.href ? (
                  <ExternalLink href={m.href} className="link-ink text-fg">
                    {m.value}
                  </ExternalLink>
                ) : (
                  m.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="lg:col-span-8">
          <SectionTitle id="about" className="lg:max-w-[18ch]">
            {about.title.join(" ")}
          </SectionTitle>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[44ch] text-lede text-fg">{about.lede}</p>
          </Reveal>
          <div className="mt-8 max-w-[62ch] space-y-5 text-body text-muted lg:pr-12">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
