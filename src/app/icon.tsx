import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const contentType = "image/png";

/** Two sizes: 64px for the tab favicon, 512px for the web-app manifest / home-screen install. */
export function generateImageMetadata() {
  return [
    { id: "64", size: { width: 64, height: 64 }, contentType },
    { id: "512", size: { width: 512, height: 512 }, contentType },
  ];
}

const brand = path.join(process.cwd(), "src", "assets", "brand");
const GROUND = "#343645"; // the slate ground lireons.com uses behind its own favicon

async function dataUrl(file: string) {
  const buf = await readFile(path.join(brand, file));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

/** Next 16 passes `id` as a promise (like route params). Renders the Lireons mark as the site icon. */
export default async function Icon({ id }: { id: string | Promise<string> }) {
  const px = (await id) === "512" ? 512 : 64;
  // 64px: downscale the official 144px favicon (already composed on its ground).
  // 512px: compose the full-resolution transparent logo on the same ground so it stays crisp.
  const src = await dataUrl(px === 512 ? "lireons-logo-1563.png" : "lireons-icon-144.png");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: GROUND }}>
        <img src={src} width={px} height={px} alt="" style={{ width: px, height: px, objectFit: "cover" }} />
      </div>
    ),
    { width: px, height: px },
  );
}
