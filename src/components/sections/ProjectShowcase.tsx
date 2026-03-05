"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioImpactStats } from "@/content/portfolio";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
  decimals?: number;
};

const numericFromString = (val: string) =>
  parseInt(val.replace(/[^0-9]/g, ""), 10) || 0;

const projectStats: Stat[] = [
  {
    value: numericFromString(portfolioImpactStats.websitesDelivered),
    suffix: "+",
    label: "Websites Delivered",
    detail: "Business sites, e‑commerce & landing pages",
  },
  {
    value: numericFromString(portfolioImpactStats.appsDelivered),
    suffix: "+",
    label: "Mobile Apps Developed",
    detail: "Android, PWA & cross‑platform apps",
  },
  {
    value: numericFromString(portfolioImpactStats.adAccountsManaged),
    suffix: "+",
    label: "Active Ad Campaigns",
    detail: "Meta Ads & Google Ads running",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    detail: "Across MSMEs, startups and agencies",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    detail: "Based on ongoing client feedback",
    decimals: 1,
  },
  {
    value: 100,
    suffix: "+",
    label: "International Clients",
    detail: "And 8+ partner agencies worldwide",
  },
];

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

function StatCircle({ stat, inView }: { stat: Stat; inView: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frameId: number;
    const duration = 1200;
    const start = performance.now();

    const animate = () => {
      const now = performance.now();
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCurrent(stat.value * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [inView, stat.value]);

  const display =
    stat.decimals != null
      ? current.toFixed(stat.decimals)
      : Math.round(current).toString();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-orange-500 px-3 text-center shadow-xl shadow-slate-900/25 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40">
        <p className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
          {display}
          {stat.suffix}
        </p>
        <p className="mt-1 text-[10px] font-semibold text-white sm:text-xs md:text-sm">
          {stat.label}
        </p>
      </div>
      <p className="mt-2 max-w-[9.5rem] text-center text-[9px] text-muted-foreground sm:max-w-[11rem] sm:text-[10px] md:text-[11px] lg:text-xs">
        {stat.detail}
      </p>
    </div>
  );
}

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef);

  return (
    <section className="bg-background py-12 md:py-16 lg:py-18">
      <div ref={sectionRef} className="container">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Projects &amp; campaigns
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            A growing track record across web, apps, ads &amp; clients
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-muted-foreground md:text-sm">
            From first website to scaled product and performance campaigns,{" "}
            <span className="font-semibold">RSA Tech Softwares</span> has quietly shipped hundreds
            of projects while keeping client satisfaction at the centre.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 lg:gap-8">
          {projectStats.map((stat) => (
            <StatCircle key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

