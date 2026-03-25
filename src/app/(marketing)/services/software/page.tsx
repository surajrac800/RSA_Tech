import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { WebDevHeroBackdrop } from "@/components/sections/services/WebDevHeroBackdrop";
import { WebDevCraftSection } from "@/components/sections/services/WebDevCraftSection";
import { WebDevStatsSection } from "@/components/sections/services/WebDevStatsSection";
import { WebDevProcessSection } from "@/components/sections/services/WebDevProcessSection";
import { Contact } from "@/components/sections/Contact";
import {
  Globe,
  ShoppingBag,
  LayoutTemplate,
  Code2,
  Layers,
  Search,
  Shield,
  Smartphone,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | RSA Tech Softwares",
  description:
    "High-performance websites and web applications that are fast, secure, SEO-friendly, and built to convert visitors into customers.",
};

const solutions = [
  {
    icon: Globe,
    title: "Informative Websites",
    description:
      "Corporate, service, portfolio and business websites designed to present your brand clearly and professionally.",
  },
  {
    icon: ShoppingBag,
    title: "E‑Commerce Websites",
    description:
      "Fully functional online stores with secure payments, product management and order tracking.",
  },
  {
    icon: LayoutTemplate,
    title: "CMS Websites",
    description:
      "Easy‑to‑manage WordPress, Shopify and headless CMS sites for teams that need full content control.",
  },
  {
    icon: Code2,
    title: "Custom Code Websites",
    description:
      "High‑performance React, Next.js and Node.js solutions tailored to your specific business needs.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description:
      "High‑converting landing pages crafted for marketing campaigns, lead generation and product launches.",
  },
  {
    icon: Smartphone,
    title: "SaaS & Web Applications",
    description:
      "Scalable cloud‑based web applications and dashboards to power your products and internal tools.",
  },
];

const performanceBenefits = [
  {
    icon: Smartphone,
    title: "Mobile-first experience",
    description:
      "Components and layouts are refined across breakpoints so visitors on phones and desktops both get a consistent, polished feel.",
  },
  {
    icon: Search,
    title: "SEO-conscious builds",
    description:
      "Semantic structure, sensible metadata patterns and speed work that supports discovery—without gaming shortcuts that hurt long-term trust.",
  },
  {
    icon: Zap,
    title: "Real-world performance",
    description:
      "Lean assets, caching awareness and modern stacks so your site stays snappy on everyday networks—not just in lab scores.",
  },
  {
    icon: Shield,
    title: "Security-minded delivery",
    description:
      "HTTPS, sensible headers and maintainable patterns so you can grow traffic and features with fewer avoidable incidents.",
  },
] as const;

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero — matches home Hero spacing + type scale; dev-themed motion in background */}
      <section className="home-section-py relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
        <WebDevHeroBackdrop />
        <div className="container relative">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                Websites &amp; web applications
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
                High‑performance websites{" "}
                <span className="rsa-gradient-text">that convert visitors</span>
              </h1>

              <p className="mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">
                We design and build fast, secure and SEO‑friendly experiences with {siteConfig.shortName}{" "}
                — from marketing sites to complex web apps.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                  Mobile‑first &amp; performance‑tuned
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                  SEO‑ready structure &amp; clean code
                </div>
              </div>

              <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-[30px] bg-[#F76902] px-7 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
                >
                  <Link href="/contact">
                    <CheckCircle2 className="h-5 w-5" />
                    Get website quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-[30px] border-2 border-amber-400/80 bg-white px-6 text-base font-semibold text-[#F76902] hover:bg-amber-50"
                >
                  <Link href={siteConfig.links.whatsapp}>WhatsApp us</Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl border-2 border-amber-400/80 bg-white p-5 shadow-xl shadow-amber-400/15 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-400 bg-amber-50 text-[#F76902]">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Web development
                    </p>
                    <p className="text-sm font-semibold text-neutral-900">End‑to‑end delivery</p>
                  </div>
                </div>

                <p className="mt-4 text-base font-semibold leading-snug text-neutral-900 md:text-lg">
                  Stacks, speed and SEO — without compromise
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  From informative sites to e‑commerce and SaaS — we ship maintainable frontends and
                  solid integrations.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                    React, Next.js, WordPress, Shopify &amp; more
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                    Core Web Vitals &amp; accessibility in mind
                  </li>
                </ul>

                <div className="mt-5">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-[30px] bg-[#F76902] px-5 text-xs font-semibold text-white hover:bg-[#f9802b]"
                  >
                    <Link href="/contact">Talk to our team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="max-w-2xl">
            <p className="marketing-eyebrow">Solutions</p>
            <h2 className="marketing-heading mt-3">Website solutions for every business</h2>
            <p className="marketing-body mt-4">
              Choose from a wide range of website types depending on your business model and growth
              stage.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border-2 border-amber-400/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#F76902] hover:shadow-lg hover:shadow-amber-400/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-amber-400 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902] group-hover:bg-amber-50">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="marketing-subheading mt-4">{item.title}</h3>
                <p className="marketing-body mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WebDevCraftSection />

      <WebDevStatsSection />

      {/* Why we perform better */}
      <section className="relative overflow-hidden border-t border-amber-400/30 bg-linear-to-b from-amber-50/35 via-white to-white py-10 md:py-14 lg:py-16">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(247,105,2,0.09),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <p className="marketing-eyebrow">Performance &amp; quality</p>
            <h2 className="marketing-heading mt-3">Why our websites perform better</h2>
            <p className="marketing-body mt-4">
              Every site we ship balances speed, clarity and SEO so your visitors trust the
              experience—and search engines can understand what you offer.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceBenefits.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border-2 border-amber-400/50 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F76902]/70 hover:shadow-lg hover:shadow-amber-400/15"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-amber-400/70 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902]">
                  <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900 lg:text-[15px] xl:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 lg:text-[13px] xl:text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WebDevProcessSection />

      <Contact />
    </div>
  );
}
