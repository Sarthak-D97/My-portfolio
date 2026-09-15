import { ExternalLink } from "@/components/ui/external-link";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { experience } from "@/data/profile";
import { dots, toDateTime } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" note="2023 — present">
      <SectionTitle id="experience">Where the work happened.</SectionTitle>

      <Reveal as="ol" className="mt-10 sm:mt-14" stagger={0.08}>
        {experience.map((job) => (
          <RevealItem
            as="li"
            key={`${job.company}-${job.start}`}
            className="row-rule group -mx-4 grid gap-y-3 border-t border-border px-4 py-7 transition-colors duration-200 last:border-b lg:-mx-6 lg:grid-cols-12 lg:gap-x-6 lg:px-6 lg:py-10 lg:hover:bg-surface"
          >
            {/* Cols 1–3: dates + status */}
            <div className="meta text-muted lg:col-span-3">
              <p className="tnum">
                <time dateTime={toDateTime(job.start)}>{job.start}</time> —{" "}
                {job.end === "Present" ? <span>Present</span> : <time dateTime={toDateTime(job.end)}>{job.end}</time>}
              </p>
              {job.current ? (
                <p className="label mt-2 inline-flex items-center gap-2 text-fg">
                  <span className="dot dot-live" aria-hidden="true" />
                  Current
                </p>
              ) : null}
            </div>

            {/* Cols 4–8: role, company, summary, stack */}
            <div className="lg:col-span-5">
              <h3 className="text-display-md text-fg">{job.role}</h3>
              <p className="mt-1 text-body-sm font-medium text-fg">
                {job.href ? (
                  <ExternalLink href={job.href} className="link-ink">
                    {job.company}
                  </ExternalLink>
                ) : (
                  job.company
                )}
              </p>
              <p className="mt-2 text-body-sm text-muted">{job.summary}</p>
              {job.stack ? <p className="meta mt-3 text-muted">{dots(job.stack)}</p> : null}
            </div>

            {/* Cols 9–12: bullets */}
            <div className="lg:col-span-4">
              <ul role="list" className="space-y-1.5 text-body-sm text-fg">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="font-mono text-accent" aria-hidden="true">
                      —
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {job.link ? (
                <p className="meta mt-4">
                  <a href={job.link.href} className="link-ink text-fg">
                    {job.link.label}
                  </a>
                </p>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
