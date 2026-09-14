import { ExternalLink } from "@/components/ui/external-link";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { about } from "@/data/profile";

export function About() {
  return (
    <Section id="about" index="02" label="About" note={about.note}>
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
        <dl className="meta sticky top-[5.5rem] hidden self-start leading-[1.8] text-muted lg:col-span-4 lg:mt-12 lg:block">
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
          <SectionTitle id="about" lead={about.title[0]} accent={about.title[1]} className="lg:max-w-[16ch]" />
          <Reveal>
            <p className="mt-8 max-w-[32ch] text-lede text-fg lg:max-w-[28ch] xl:max-w-[30ch]">{about.lede}</p>
          </Reveal>
          <Reveal className="mt-8 max-w-[62ch] space-y-5 text-body text-fg lg:pr-12" stagger={0.06}>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
