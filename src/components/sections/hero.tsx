import Image from "next/image";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/container";
import { Clock } from "@/components/ui/clock";
import { ExternalLink } from "@/components/ui/external-link";
import { hero, site } from "@/data/profile";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative scroll-mt-14">
      <Container className="grid min-h-[calc(100svh-3.5rem)] grid-rows-[auto_1fr] pt-8 pb-12 sm:pt-10 sm:pb-16">
        {/* Row 1 — meta line: role + availability, above the fold at every width. */}
        <div className="meta hero-fade-in flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2.5 text-muted" style={delay(0)}>
          <span>{hero.meta}</span>
          <span className="inline-flex items-start gap-2.5 text-fg">
            <span className="dot dot-live mt-[5px]" aria-hidden="true" />
            {site.availability}
          </span>
        </div>

        {/* Row 2 — statement + dossier */}
        <div className="grid gap-x-6 gap-y-10 lg:grid-cols-12">
          <div className="mt-[clamp(2.5rem,6vw,5.5rem)] lg:col-span-8">
            <h1 id="hero-title" className="text-display-xl text-fg lg:max-w-[12ch]">
              {hero.lines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span className="hero-line block" style={delay(0.05 + i * 0.08)}>
                    {line.includes(hero.accentWord) ? (
                      <>
                        {line.split(hero.accentWord)[0]}
                        <em className="em-accent">{hero.accentWord}</em>
                        {line.split(hero.accentWord)[1]}
                      </>
                    ) : (
                      line
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p className="hero-fade mt-6 max-w-[58ch] text-body text-muted sm:mt-8" style={delay(0.35)}>
              {hero.subheadline}
            </p>

            <div className="hero-fade mt-8" style={delay(0.45)}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn border border-fg bg-fg px-5 font-sans text-[0.9375rem] font-semibold text-bg transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg sm:w-auto"
                >
                  {hero.primaryCta.label}
                  <span className="font-mono" aria-hidden="true">
                    ↓
                  </span>
                </a>
                <a
                  href={hero.secondaryCta.href}
                  download
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn border border-fg/40 px-5 font-sans text-[0.9375rem] font-semibold text-fg transition-colors hover:border-fg sm:w-auto"
                >
                  {hero.secondaryCta.label}
                  <span className="meta border-l border-border-strong pl-2 text-muted">PDF</span>
                </a>
              </div>
              <p className="meta mt-4 text-muted">
                or write to{" "}
                <a href={`mailto:${site.email}`} className="link-ink text-fg">
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {/* Dossier — the recruiter's five-second card. */}
          <aside
            aria-label="At a glance"
            className="hero-fade-in mt-2 border border-border bg-surface p-5 lg:col-span-4 lg:mt-[clamp(2.5rem,6vw,5.5rem)] lg:self-start"
            style={delay(0.3)}
          >
            <div className="portrait-group grid grid-cols-[80px_1fr] items-center gap-4 pb-4 lg:grid-cols-[64px_1fr] xl:grid-cols-[80px_1fr]">
              <Image
                src={site.headshot}
                alt={`${site.name}, portrait`}
                width={160}
                height={160}
                priority
                sizes="80px"
                className="portrait size-20 border border-border object-cover lg:size-16 xl:size-20"
              />
              <div className="min-w-0">
                <p className="font-serif text-[clamp(1.5rem,1.1rem+1vw,1.9rem)] leading-none text-fg lg:text-[1.45rem] xl:text-[1.9rem]">{site.name}</p>
                <p className="meta mt-1.5 text-muted">{site.role}</p>
              </div>
            </div>
            <dl className="meta">
              {[
                { k: "Org", v: site.org },
                { k: "Since", v: site.since },
                {
                  k: "Founder",
                  v: (
                    <ExternalLink href={site.lireons} className="link-ink">
                      Lireons
                    </ExternalLink>
                  ),
                },
                {
                  k: "Base",
                  v: (
                    <>
                      {site.locationShort} ·{" "}
                      <span className="whitespace-nowrap">
                        <Clock />
                      </span>
                    </>
                  ),
                },
                { k: "Focus", v: hero.dossier.focus },
                {
                  k: "Links",
                  v: (
                    <>
                      <ExternalLink href={site.github} rel="noopener noreferrer me" className="link-ink">
                        GitHub
                      </ExternalLink>
                      {" · "}
                      <ExternalLink href={site.linkedin} rel="noopener noreferrer me" className="link-ink">
                        LinkedIn
                      </ExternalLink>
                      {" · "}
                      <a href={`mailto:${site.email}`} className="link-ink">
                        Email
                      </a>
                    </>
                  ),
                },
              ].map((row) => (
                <div key={row.k} className="grid grid-cols-[88px_1fr] gap-3 border-t border-border py-2.5 lg:grid-cols-1 lg:gap-1 xl:grid-cols-[88px_1fr] xl:gap-3">
                  <dt className="label pt-0.5 text-muted">{row.k}</dt>
                  <dd className="text-fg">{row.v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <span className="ghost right-0 bottom-2 hidden lg:block" aria-hidden="true">
          01
        </span>
      </Container>
    </section>
  );
}
