import { ImageResponse } from "next/og";
import { site } from "@/data/profile";
import { ogFonts } from "@/lib/og-fonts";

export const contentType = "image/png";

/** Two sizes: 64px for the tab favicon, 512px for the web-app manifest / home-screen install. */
export function generateImageMetadata() {
  return [
    { id: "64", size: { width: 64, height: 64 }, contentType },
    { id: "512", size: { width: 512, height: 512 }, contentType },
  ];
}

/** Next 16 passes `id` as a promise (like route params). */
export default async function Icon({ id }: { id: string | Promise<string> }) {
  const px = (await id) === "512" ? 512 : 64;
  const fonts = (await ogFonts()).filter((f) => f.name === "Instrument Serif" && f.style === "normal");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0a",
          color: "#f2f0eb",
          border: `${Math.round(px / 32)}px solid #f2f0eb`,
          fontFamily: "Instrument Serif",
          fontSize: Math.round(px * 0.6),
          letterSpacing: "-0.02em",
        }}
      >
        {site.initials}
      </div>
    ),
    { width: px, height: px, fonts },
  );
}
