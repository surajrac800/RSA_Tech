"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Megaphone, Globe, Smartphone, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    icon: Megaphone,
    eyebrow: "Result‑driven campaigns",
    titleHighlight: "Grow with Smart Digital Marketing",
    description:
      "Increase visibility, generate quality leads, and boost revenue with ROI‑focused SEO, ads and social campaigns.",
    href: "/services/digital-marketing",
  },
  {
    id: "websites",
    label: "Websites Development",
    icon: Globe,
    eyebrow: "High‑performance websites",
    titleHighlight: "Websites That Convert Visitors",
    description:
      "Design and build fast, secure, SEO‑friendly websites that turn clicks into customers on every device.",
    href: "/services/web-development",
  },
  {
    id: "apps",
    label: "Apps Development",
    icon: Smartphone,
    eyebrow: "Android & cross‑platform apps",
    titleHighlight: "Mobile Apps Built for Growth",
    description:
      "Launch intuitive Android and cross‑platform apps that your customers love to use every day.",
    href: "/services/app-development",
  },
  {
    id: "software",
    label: "Software Development",
    icon: Code2,
    eyebrow: "Custom business software",
    titleHighlight: "Automate with Custom Software",
    description:
      "Streamline operations with tailor‑made CRM, ERP and workflow automation built around your processes.",
    href: "/services/software-development",
  },
];

export function Hero() {
  const [activeId, setActiveId] = useState<string>(slides[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((current) => {
        const index = slides.findIndex((s) => s.id === current);
        const nextIndex = (index + 1) % slides.length;
        return slides[nextIndex].id;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides.find((s) => s.id === activeId) ?? slides[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-violet-50/60 py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.18),transparent_55%)]" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-orange-400" />
              Digital solutions for growing brands
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Rapid Solution & Automation for your
              <span className="block rsa-gradient-text">Digital Growth Journey</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              At {siteConfig.shortName}, we bring together strategy, design, development and
              automation to help you dominate the digital space across marketing, web, apps and
              software.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                360° Digital & Technology Partner
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Startups, MSMEs & growing brands
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="gap-2 text-base rsa-gradient-bg text-white shadow-md"
              >
                <Link href="/contact">
                  <CheckCircle2 className="h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground">
                Talk to us about{" "}
                <span className="font-semibold text-blue-700">{activeSlide.label}</span>
              </span>
            </div>
          </div>

          {/* Right: service slider card */}
          <div className="relative mt-6 lg:mt-0">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-500 via-violet-500 to-orange-400 opacity-40 blur-3xl" />
            <div className="relative rounded-3xl border bg-white/90 p-6 shadow-xl shadow-blue-500/10 backdrop-blur-sm md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-500 to-orange-400 text-white shadow-lg shadow-blue-500/40">
                    <activeSlide.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {activeSlide.eyebrow}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {activeSlide.label}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-lg font-semibold leading-snug text-foreground">
                {activeSlide.titleHighlight}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {activeSlide.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <Button
                  asChild
                  size="sm"
                  className="rsa-gradient-bg text-xs font-semibold text-white"
                >
                  <Link href={activeSlide.href}>Explore Service</Link>
                </Button>
                <div className="flex gap-2">
                  {slides.map((slide) => (
                    <button
                      key={slide.id}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setActiveId(slide.id)}
                      className={cn(
                        "h-2.5 w-2.5 rounded-full transition-transform",
                        activeId === slide.id
                          ? "bg-gradient-to-r from-blue-500 via-violet-500 to-orange-400 scale-125"
                          : "bg-muted hover:bg-muted-foreground/40"
                      )}
                      aria-label={slide.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

