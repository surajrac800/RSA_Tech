"use client";

import { useEffect, useRef, useState } from "react";
import { animatedServiceStats } from "@/config/company-stats";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const projectStats: Stat[] = animatedServiceStats.map((s) => ({
  value: s.target,
  suffix: s.suffix,
  label: s.label,
}));

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
      const eased = 1 - Math.pow(1 - progress, 3);
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
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-[#F76902] bg-transparent px-3 text-center sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40">
        <p className="text-xl font-extrabold text-[#F76902] sm:text-2xl md:text-3xl">
          {display}
          {stat.suffix}
        </p>
        <p className="mt-1 text-[10px] font-semibold text-neutral-700 sm:text-xs md:text-sm">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef);

  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div ref={sectionRef} className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
          {projectStats.map((stat) => (
            <StatCircle key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
