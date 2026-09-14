import Image from "next/image";
import { ExternalLink } from "@/components/ui/external-link";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { certifications, education, tryhackme } from "@/data/profile";

export function Credentials() {
  return (
    <Section id="credentials" index="07" label="Credentials" note="Security-first">
      <SectionTitle id="credentials" lead="Trained for the" accent="failure" trail="case." className="lg:max-w-[16ch]" />

      <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-0">
        {/* Certifications */}
        <div>
          <h3 className="label border-b border-border pb-3 text-muted">Certifications</h3>
          <Reveal as="ul" stagger={0.06}>
            {certifications.map((c) => (
              <RevealItem as="li" key={c.name} className="grid grid-cols-[56px_1fr] items-center gap-4 border-b border-border py-5">
                <Image src={c.badge} alt={`${c.name} badge`} width={112} height={112} sizes="56px" className="size-14 object-contain" />
                <div>
                  <p className="text-body font-medium text-fg">{c.name}</p>
                  <p className="meta text-muted">
                    {c.issuer}&nbsp;· {c.date}
                  </p>
                </div>
              </RevealItem>
            ))}
            <RevealItem as="li" className="grid grid-cols-[56px_1fr_auto] items-center gap-4 border-b border-border py-5">
              <span className="grid size-14 place-items-center border border-border font-serif text-[1.25rem] text-accent" aria-hidden="true">
                {tryhackme.figure}
              </span>
              <div>
                <p className="text-body font-medium text-fg">{tryhackme.name}</p>
                <p className="meta text-muted">{tryhackme.detail}</p>
              </div>
              <ExternalLink href={tryhackme.href} className="meta link-ink whitespace-nowrap text-fg" hitArea>
                Profile
              </ExternalLink>
            </RevealItem>
          </Reveal>
        </div>

        {/* Education */}
        <div className="lg:border-l lg:border-border lg:pl-8">
          <h3 className="label border-b border-border pb-3 text-muted">Education</h3>
          <Reveal as="ul" stagger={0.06}>
            {education.map((e) => (
              <RevealItem as="li" key={e.degree} className="border-b border-border py-5">
                <p className="text-display-md text-fg">{e.degree}</p>
                <p className="meta mt-1.5 text-muted">
                  {e.institution}&nbsp;· {e.location}&nbsp;· {e.years}
                </p>
                {e.note ? <p className="mt-3 max-w-[52ch] text-body-sm text-muted">{e.note}</p> : null}
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
