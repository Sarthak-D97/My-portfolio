"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false });

/** Live Bengaluru time. Server renders a placeholder; the client fills it after mount (no hydration mismatch). */
export function Clock() {
  const [time, setTime] = useState<string>("--:--");
  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="tnum" suppressHydrationWarning>
      IST {time}
    </span>
  );
}
