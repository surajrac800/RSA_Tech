"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, Layers, FlaskConical, LifeBuoy } from "lucide-react";

const steps = [
  {
    title: "Discovery & Planning",
    icon: Compass,
  },
  {
    title: "Design & Development",
    icon: Layers,
  },
  {
    title: "Testing & Optimization",
    icon: FlaskConical,
  },
  {
    title: "Launch & Support",
    icon: LifeBuoy,
  },
] as const;

function useInView(ref: React.RefObject<HTMLElement | null>) {
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="home-section-py relative overflow-hidden bg-white"
    >
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="marketing-eyebrow">Our process</p>
          <h2 className="marketing-heading mt-3">
            From discovery to launch — one clear journey
          </h2>
        </div>

        {/* Desktop: horizontal progress + timeline */}
        <div className="hidden lg:block">
          <div className="relative px-4">
            {/* Track + animated fill */}
            <div className="relative h-3 overflow-hidden rounded-full bg-neutral-200/90 shadow-inner">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-amber-400 via-[#F76902] to-[#f9802b] shadow-[0_0_24px_rgba(247,105,2,0.35)] motion-reduce:transition-none"
                style={{
                  width: inView ? "100%" : "0%",
                  transition: "width 2.2s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              {/* Shimmer overlay on fill */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-full opacity-40 motion-reduce:hidden"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: inView ? "process-shimmer 2.2s ease-out forwards" : "none",
                }}
                aria-hidden
              />
            </div>

            {/* Step nodes on the bar */}
            <div className="pointer-events-none absolute inset-x-4 top-1/2 grid -translate-y-1/2 grid-cols-4 place-items-center">
              {steps.map((_, index) => (
                <span
                  key={index}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#F76902] shadow-md ring-4 ring-[#F76902]/20 motion-reduce:opacity-100"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "scale(1)" : "scale(0.4)",
                    transition: `opacity 0.45s ease ${0.35 + index * 0.18}s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.35 + index * 0.18}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-4 gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative text-center"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.65s ease ${0.2 + index * 0.12}s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + index * 0.12}s`,
                  }}
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-amber-400/70 bg-linear-to-br from-amber-50 to-white text-[#F76902] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#F76902] group-hover:shadow-lg group-hover:shadow-amber-400/30">
                    <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#F76902]/90">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline + mini progress */}
        <div className="lg:hidden">
          <div className="mb-10">
            <div className="flex items-center justify-between gap-2 text-xs font-semibold text-neutral-500">
              <span>Start</span>
              <span className="text-[#F76902]">{inView ? "Complete" : "In progress"}</span>
            </div>
            <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-neutral-200">
              <div
                className="h-full rounded-full bg-linear-to-r from-amber-400 to-[#F76902] motion-reduce:transition-none"
                style={{
                  width: inView ? "100%" : "0%",
                  transition: "width 2.2s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute left-[21px] top-2 bottom-2 w-px bg-neutral-200"
              aria-hidden
            />
            <div
              className="absolute left-[21px] top-2 w-px bg-linear-to-b from-[#F76902] via-amber-400 to-[#f9802b] motion-reduce:transition-none"
              style={{
                height: inView ? "calc(100% - 16px)" : "0%",
                transition: "height 2.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-hidden
            />

            <ul className="relative space-y-0">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="relative flex gap-5 pb-10 last:pb-0"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-12px)",
                      transition: `opacity 0.55s ease ${0.15 + index * 0.14}s, transform 0.55s ease ${0.15 + index * 0.14}s`,
                    }}
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-amber-400/70 bg-white text-[#F76902] shadow-md">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1 rounded-2xl border-2 border-amber-400/40 bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F76902]">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="marketing-subheading mt-1 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
