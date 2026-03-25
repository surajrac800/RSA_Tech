"use client";

import { useEffect, useRef, useState } from "react";
import { animatedServiceStats } from "@/config/company-stats";

const stats = animatedServiceStats;

const DURATION_MS = 1800;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function StatCircle({
  target,
  suffix,
  label,
  active,
}: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(target);
      return;
    }

    let start: number | null = null;
    let frame: number;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const p = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(p);
      setDisplay(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex aspect-square w-full max-w-[118px] items-center justify-center rounded-full border-2 border-amber-400/45 bg-white/5 px-2 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.12)] sm:max-w-[128px] md:max-w-[138px]">
        <div>
          <p className="text-2xl font-bold tabular-nums text-white sm:text-[1.65rem] md:text-[1.75rem] md:leading-none">
            {display}
            {suffix}
          </p>
        </div>
      </div>
      <p className="mt-3 max-w-40 text-xs font-medium leading-snug text-slate-200 sm:max-w-48 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function WebDevStatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-t-2 border-amber-400/45 bg-neutral-950 py-8 md:py-9"
      aria-label="Company statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-6 sm:gap-7 lg:grid-cols-4 lg:gap-5">
          {stats.map((item) => (
            <StatCircle
              key={item.label}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
