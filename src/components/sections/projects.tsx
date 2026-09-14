import { ExternalLink } from "@/components/ui/external-link";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { projectFootnote, projects } from "@/data/profile";
import { dots } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects" index="05" label="Selected projects" note="Index">
      <SectionTitle id="projects" lead="Selected work, in order of" accent="weight." />

      <div className="mt-10 sm:mt-14">
        {/* Header row (desktop only) */}
        <div className="label hidden grid-cols-12 gap-x-6 border-b border-border pb-3 text-muted lg:grid" aria-hidden="true">
          <span className="col-span-1">Nº</span>
          <span className="col-span-5">Project</span>
          <span className="col-span-3">Stack</span>
          <span className="col-span-2">Type</span>
          <span className="col-span-1 text-right">↗</span>
        </div>

        <Reveal as="ol" stagger={0.06}>
          {projects.map((p) => {
            const external = p.external ?? p.href.startsWith("http");
            return (
              <RevealItem as="li" key={p.index} className="border-b border-border">
                <a
                  href={p.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group grid min-h-11 gap-y-3 py-6 transition-colors duration-200 lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:py-7 lg:hover:bg-surface"
                >
                  <div className="flex items-baseline justify-between lg:col-span-1 lg:block">
                    <span className="meta tnum text-muted">{p.index}</span>
                    <span
                      className="font-mono text-[1.125rem] text-fg transition-transform duration-200 motion-safe:group-hover:-translate-y-px motion-safe:group-hover:translate-x-px lg:hidden"
                      aria-hidden="true"
                    >
                      {p.arrow ?? "↗"}
                    </span>
                  </div>

                  <div className="lg:col-span-5">
                    <h3 className="text-display-md text-fg transition-transform duration-300 ease-out motion-safe:lg:group-hover:translate-x-2">{p.name}</h3>
                    <p className="mt-2 max-w-[48ch] text-body-sm text-muted">{p.description}</p>
                  </div>

                  <p className="meta text-muted lg:col-span-3 lg:pt-2">{dots(p.stack)}</p>
                  <p className="label text-muted lg:col-span-2 lg:pt-2 lg:text-body-sm lg:font-medium lg:normal-case lg:tracking-normal lg:text-fg">{p.type}</p>

                  <span
                    className="hidden font-mono text-[1.125rem] whitespace-nowrap text-fg transition-transform duration-200 motion-safe:group-hover:-translate-y-px motion-safe:group-hover:translate-x-px lg:col-span-1 lg:block lg:text-right"
                    aria-hidden="true"
                  >
                    {p.arrow ?? "↗"}
                  </span>
                  {external ? <span className="sr-only">(opens in a new tab)</span> : null}
                </a>
              </RevealItem>
            );
          })}
        </Reveal>

        <p className="meta mt-6 text-muted">
          Also on GitHub —{" "}
          {projectFootnote.map((f, i) => (
            <span key={f.name}>
              <ExternalLink href={f.href} className="link-ink text-fg" noArrow>
                {f.name}
              </ExternalLink>{" "}
              ({f.note}){i < projectFootnote.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </div>
    </Section>
  );
}
