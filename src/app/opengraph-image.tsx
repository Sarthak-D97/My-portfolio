import { ImageResponse } from "next/og";
import { hero, site } from "@/data/profile";
import { ogFonts } from "@/lib/og-fonts";

export const alt = `${site.name} — ${site.role}, Bengaluru`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await ogFonts();
  const meta = `${site.role} · ${site.orgShort} · Founder, Lireons · ${site.locationShort}`;
  const line3 = hero.lines[2].split(hero.accentWord);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0a",
          color: "#f2f0eb",
          padding: "56px 64px",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, fontFamily: "JetBrains Mono", fontSize: 22, color: "#a3a099" }}>
          <span style={{ maxWidth: 760 }}>Nº 01 — {meta}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap" }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#6fcb86" }} />
            Open to roles
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 0.98, letterSpacing: "-0.015em" }}>
          <span>{hero.lines[0]}</span>
          <span>{hero.lines[1]}</span>
          <span style={{ display: "flex" }}>
            <span>{line3[0].trim()}</span>
            <span style={{ fontStyle: "italic", color: "#3fc1be", margin: "0 0.2em" }}>{hero.accentWord}</span>
            <span>{line3[1].trim()}</span>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid #262624", paddingTop: 24 }}>
          <span style={{ fontSize: 40 }}>{site.name}</span>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 22, color: "#a3a099" }}>sarthakchauhan.in ↗</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
