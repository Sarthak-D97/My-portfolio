import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { lireons } from "@/data/profile";
import { cn, dots } from "@/lib/utils";

/** Column templates for the system-map rows (index-aligned with lireons.systemMap). */
const rowGrid = [
  "sm:grid-cols-[1.4fr_1.2fr_0.4fr]", // tenant domains
  "grid-cols-1", // edge
  "sm:grid-cols-2 lg:grid-cols-5", // services
  "sm:grid-cols-[2fr_3fr]", // data & platform
];

/**
 * Section 04 — the founder case study. A full-bleed plate that keeps Lireons' own
 * navy/mint/teal tokens in both themes; the wrapper draws the 1px joins in the page's rule colour.
 */
export function Lireons() {
  return (
    <div className="border-y border-border">
      <section
        id="lireons"
        aria-labelledby="lireons-title"
        className="plate-lireons relative scroll-mt-14 bg-bg py-[clamp(6rem,11vw,11rem)] text-fg"
      >
        <Container className="relative">
          <span className="ghost -top-8 -left-1 sm:-top-10" aria-hidden="true">
            04
          </span>

          {/* Header row — same height as every other running head. */}
          <div className="label relative z-[1] flex flex-wrap items-center justify-between gap-4 text-muted">
            <span className="flex items-center gap-3">
              <Image src={lireons.logo} alt="" width={28} height={28} className="size-7 object-contain" />
              {lireons.runningHead}
            </span>
            <ExternalLink href={lireons.url} className="meta link-ink normal-case tracking-normal text-fg">
              {lireons.domain}
            </ExternalLink>
          </div>

          <div className="relative z-[1] grid gap-x-6 lg:grid-cols-12">
            <h2 id="lireons-title" className="mt-8 text-display-lg text-fg sm:mt-12 lg:col-span-9">
              {lireons.title[0]} <em className="em-accent">{lireons.title[1]}</em>
            </h2>
            <p className="mt-5 text-body text-muted lg:col-span-7">{lireons.subtitle}</p>
          </div>

          {/* Body grid: spec sheet (sticky) + chapters */}
          <div className="relative z-[1] mt-12 grid gap-x-6 gap-y-12 lg:mt-16 lg:grid-cols-12">
            <aside className="lg:col-span-5 lg:self-start lg:sticky lg:top-[5.5rem]" aria-label="Lireons specification">
              <dl className="meta">
                {lireons.spec.map((row) => (
                  <div key={row.label} className="grid grid-cols-[112px_1fr] gap-3 border-t border-border py-2.5">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="text-fg">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
                {lireons.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-metric text-fg">{m.value}</p>
                    <p className="label mt-3 text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="meta mt-6 text-muted">{dots(lireons.owned)}</p>
            </aside>

            <Reveal as="ol" className="lg:col-span-7" stagger={0.08}>
              {lireons.chapters.map((c) => (
                <RevealItem as="li" key={c.n} className="grid grid-cols-[48px_1fr] border-t border-border py-8 lg:py-9">
                  <span className="meta text-accent">{c.n}</span>
                  <div>
                    <h3 className="text-display-md text-fg">{c.title}</h3>
                    <p className="mt-3 max-w-[52ch] text-body-sm text-muted">{c.body}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          {/* Real product screenshot in a 1px frame with a meta bar reading the live URL. */}
          <Reveal className="relative z-[1] mt-16 lg:mt-20">
            <figure className="border border-border bg-surface">
              <figcaption className="meta flex h-9 items-center justify-between border-b border-border px-4 text-muted">
                <span className="text-fg">{lireons.domain}</span>
                <span className="hidden sm:inline">Live&nbsp;· captured {lireons.screenshotCaptured}</span>
              </figcaption>
              <Image
                src={lireons.screenshot}
                alt="Lireons landing page: 'Your Academy, Your Brand — Build to Scale'"
                width={1280}
                height={640}
                sizes="(min-width: 1320px) 1224px, calc(100vw - 40px)"
                className="aspect-[2/1] w-full object-cover object-center"
              />
            </figure>
          </Reveal>

          {/* System map — DOM-built, reflows, no illustration. */}
          <div
            className="relative z-[1] mt-16 lg:mt-20"
            role="img"
            aria-label="Lireons system map: illustrative tenant domains resolve at the edge to the Next.js web app, native mobile apps, NestJS API, grading engine and live-broadcast services over tenant-isolated PostgreSQL, running on Docker, Kubernetes, Terraform and AWS."
          >
            <p className="label text-muted">System map</p>
            <div className="mt-4">
              {lireons.systemMap.map((row, ri) => (
                <div key={row.title}>
                  {ri > 0 ? <div className="mx-auto h-6 w-px bg-border-strong" aria-hidden="true" /> : null}
                  <div className="label mb-2 flex items-baseline justify-between text-muted">
                    <span>{row.title}</span>
                    {"note" in row && row.note ? <span className="hidden sm:inline">{dots(row.note)}</span> : null}
                  </div>
                  <div className={cn("grid gap-3", rowGrid[ri])}>
                    {row.boxes.map((box) => (
                      <div key={box} className={cn("meta border border-border bg-surface px-4 py-3 text-fg", box === "…" && "hidden sm:block")}>
                        {dots(box)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing row */}
          <div className="relative z-[1] mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="label text-muted">{lireons.closing}</p>
            <ExternalLink
              href={lireons.url}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn border border-fg bg-fg px-5 font-sans text-[0.9375rem] font-semibold text-bg transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg sm:w-auto"
            >
              Visit {lireons.domain}
            </ExternalLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
