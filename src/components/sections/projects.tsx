import { ExternalLink } from "@/components/ui/external-link";
import { HoverPreview } from "@/components/ui/hover-preview";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { projectFootnote, projects } from "@/data/profile";
import { dots } from "@/lib/utils";

/** Shared column template for the header row and each project row at ≥lg. */
const cols = "lg:grid-cols-[3rem_minmax(0,1fr)_minmax(13rem,17rem)_6rem_2.5rem]";

export function Projects() {
  return (
    <Section id="projects" index="05" label="Selected projects" note="Index">
      <SectionTitle id="projects">Selected work, in order of weight.</SectionTitle>

      <div className="mt-10 sm:mt-14">
        {/* Header row (desktop only) */}
        <div className={`label hidden gap-x-6 border-b border-border pb-3 text-muted lg:grid ${cols}`} aria-hidden="true">
          <span>Nº</span>
          <span>Project</span>
          <span>Stack</span>
          <span>Type</span>
          <span className="text-right">↗</span>
        </div>

        <HoverPreview items={projects.filter((p) => p.preview).map((p) => ({ key: p.index, src: p.preview as string, alt: p.name }))}>
          <Reveal as="ol" stagger={0.07}>
            {projects.map((p) => {
              const external = p.external ?? p.href.startsWith("http");
              return (
                <RevealItem as="li" key={p.index} className="row-rule -mx-4 border-b border-border px-4 lg:-mx-6 lg:px-6" data-preview={p.preview ? p.index : undefined}>
                  <a
                    href={p.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`group grid min-h-11 gap-y-3 py-6 transition-colors duration-200 lg:items-start lg:gap-x-6 lg:py-7 lg:hover:bg-surface ${cols}`}
                  >
                    <div className="flex items-baseline justify-between lg:block">
                      <span className="meta tnum text-muted transition-colors duration-200 group-hover:text-accent">{p.index}</span>
                      <span
                        className="font-mono text-[1.125rem] text-fg transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 lg:hidden"
                        aria-hidden="true"
                      >
                        {p.arrow ?? "↗"}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-display-md text-fg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:lg:group-hover:translate-x-2">{p.name}</h3>
                      <p className="mt-2 max-w-[52ch] text-body-sm text-muted">{p.description}</p>
                    </div>

                    <p className="meta text-muted lg:pt-2">{dots(p.stack)}</p>
                    <p className="label text-muted lg:pt-2.5">{p.type}</p>

                    <span
                      className="hidden font-mono text-[1.125rem] whitespace-nowrap text-fg transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 lg:block lg:text-right"
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
        </HoverPreview>

        <p className="meta mt-5 text-muted lg:text-right">
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
