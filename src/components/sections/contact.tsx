import { ExternalLink } from "@/components/ui/external-link";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { contact, site } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" index="08" label="Contact" note={contact.note} size="large">
      <h2 id="contact-title" data-reveal="clip" className="mt-8 max-w-[18ch] text-display-lg text-fg sm:mt-10">
        {contact.title[0]} <em className="em-accent">{contact.title[1]}</em>
      </h2>
      <Reveal delay={0.2}>
        <p className="mt-8 text-display-md leading-none [overflow-wrap:anywhere] sm:text-display-lg">
          <a
            href={`mailto:${site.email}`}
            className="link-ink text-fg [background-size:100%_3px] [padding-bottom:0.08em] hover:[background-size:100%_4px]"
          >
            {site.email}
          </a>
        </p>
      </Reveal>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
        <Magnetic className="w-full sm:w-auto">
          <a
            href={site.resume}
            download
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn border border-fg/40 px-5 font-sans text-[0.9375rem] font-semibold text-fg transition-colors hover:border-fg sm:w-auto"
          >
            Download résumé
            <span className="meta border-l border-border-strong pl-2 text-muted">PDF</span>
          </a>
        </Magnetic>
        {contact.links.map((l) => (
          <ExternalLink key={l.label} href={l.href} className="label link-ink py-1 text-fg" hitArea>
            {l.label}
          </ExternalLink>
        ))}
      </div>
      <p className="meta mt-5 max-w-[60ch] text-muted">{site.availabilityLong}</p>
    </Section>
  );
}
