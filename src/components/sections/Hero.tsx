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
    <section className="home-section-py relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
      <div className="container relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F76902]" />
              Smart digital solutions for ambitious brands
            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
              Rapid Solution & Automation for your
              <span className="block rsa-gradient-text">Digital Growth Journey</span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">
              At {siteConfig.shortName}, we bring together strategy, design, development and
              automation to help you dominate the digital space across marketing, web, apps and
              software.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F76902]" />
                360° Digital & Technology Partner
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F76902]" />
                Startups, MSMEs & growing brands
              </div>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-[30px] bg-[#F76902] px-7 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
              >
                <Link href="/contact">
                  <CheckCircle2 className="h-5 w-5" />
                  Get Free Consultation
                </Link>
              </Button>
              <span className="text-sm text-neutral-600">
                Talk to us about{" "}
                <span className="font-semibold text-[#F76902]">{activeSlide.label}</span>
              </span>
            </div>
          </div>

          {/* Right: service slider card */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl border-2 border-amber-400/80 bg-white p-5 shadow-xl shadow-amber-400/15 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-amber-400 bg-amber-50 text-[#F76902]">
                    <activeSlide.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {activeSlide.eyebrow}
                    </p>
                    <p className="text-sm font-semibold text-neutral-900">
                      {activeSlide.label}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-base font-semibold leading-snug text-neutral-900 md:text-lg">
                {activeSlide.titleHighlight}
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                {activeSlide.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <Button
                  asChild
                  size="sm"
                  className="rounded-[30px] bg-[#F76902] px-5 text-xs font-semibold text-white hover:bg-[#f9802b]"
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
                          ? "bg-[#F76902] scale-125"
                          : "bg-neutral-300 hover:bg-neutral-400"
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

