import { Container } from "@/components/ui/container";
import { site } from "@/data/profile";

const sha = process.env.NEXT_PUBLIC_BUILD_SHA || "local";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <Container className="meta grid gap-2 py-6 text-muted md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
        <p className="md:whitespace-nowrap">
          © {year} {site.name}&nbsp;· {site.location}
        </p>
        <p className="md:text-center md:whitespace-nowrap">Instrument Serif&nbsp;· Instrument Sans&nbsp;· JetBrains Mono</p>
        <p className="md:text-right md:whitespace-nowrap">
          Next.js 16&nbsp;· Tailwind v4&nbsp;· <span className="tnum">build {sha}</span>&nbsp;·{" "}
          <a href="#top" className="link-ink text-fg">
            Top&nbsp;↑
          </a>
        </p>
      </Container>
    </footer>
  );
}
