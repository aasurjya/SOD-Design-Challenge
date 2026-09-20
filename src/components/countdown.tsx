"use client";

import * as React from "react";

const DEADLINE = new Date("2026-10-11T09:00:00+05:30").getTime();

function diffParts(now: number) {
  const ms = Math.max(0, DEADLINE - now);
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [parts, setParts] = React.useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  React.useEffect(() => {
    const tick = () => setParts(diffParts(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const text = parts
    ? `T−${pad(parts.days)}D ${pad(parts.hours)}H ${pad(parts.minutes)}M ${pad(parts.seconds)}S`
    : "T−··D ··H ··M ··S";

  return (
    <time
      dateTime={parts ? `P${parts.days}DT${parts.hours}H${parts.minutes}M` : undefined}
      suppressHydrationWarning
      className="font-sans text-lg font-black tracking-tight tabular-nums sm:text-xl"
    >
      {text}
    </time>
  );
}
