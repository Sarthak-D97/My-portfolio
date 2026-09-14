import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Fonts for next/og ImageResponse (which cannot use next/font). Loaded from local TTF files
 * so builds never depend on network access. Files live in src/assets/fonts.
 */
const dir = path.join(process.cwd(), "src", "assets", "fonts");

export type OgFont = { name: string; data: ArrayBuffer; style: "normal" | "italic"; weight: 400 };

async function load(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(path.join(dir, file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

export async function ogFonts(): Promise<OgFont[]> {
  const [serif, serifItalic, mono] = await Promise.all([
    load("InstrumentSerif-Regular.ttf"),
    load("InstrumentSerif-Italic.ttf"),
    load("JetBrainsMono-Regular.ttf"),
  ]);
  return [
    { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
    { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
    { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
  ];
}
