/** Tiny className joiner (avoids a clsx dependency). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Glues " · " separators to the preceding word so a wrapped line never starts with a dangling dot. */
export function dots(s: string): string {
  return s.replace(/ · /g, " · ");
}

/** Formats "Dec 2024" → "2024-12" for <time dateTime>. Falls back to the raw string. */
export function toDateTime(label: string): string {
  const months: Record<string, string> = {
    jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
    jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12",
  };
  const m = label.trim().toLowerCase().match(/^([a-z]{3})[a-z]*\s+(\d{4})$/);
  if (!m) return label;
  return `${m[2]}-${months[m[1]] ?? "01"}`;
}
