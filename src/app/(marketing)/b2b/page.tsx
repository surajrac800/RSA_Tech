import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Building2,
  Handshake,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowUpRight,
  Target,
  Users,
  FileCheck2,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B & Partner Programs | RSA Tech Softwares",
  description:
    "White-label and volume delivery for agencies and consultants: websites, apps, software and digital marketing from RSA Tech Softwares, Noida. Clear commercials and a single point of contact.",
};

/** Partner segments — factual positioning, no vanity metrics */
const partnerSegments = [
  {
    icon: Building2,
    title: "Agencies & studios",
    line: "Pitch and deliver more: we execute under your brand while you own the client relationship and commercial terms.",
  },
  {
    icon: Layers,
    title: "IT consultants & SIs",
    line: "Add web, mobile, ads and light custom software to your proposal without recruiting a full delivery bench.",
  },
  {
    icon: Users,
    title: "In-house marketing & IT",
    line: "Cover peaks, migrations and one-off builds—brief us on milestones and acceptance criteria like any vendor.",
  },
  {
    icon: Target,
    title: "Franchise & multi-location brands",
    line: "Roll out consistent landing pages, local SEO and campaign creatives with one shared playbook and billing.",
  },
];

const growthOutcomes = [
  {
    icon: TrendingUp,
    title: "Grow revenue without fixed payroll",
    description:
      "Take on websites, apps, campaigns and small software engagements as your client asks—variable cost tied to won work instead of idle seats.",
  },
  {
    icon: Layers,
    title: "Single execution partner",
    description:
      "One briefing rhythm across design, development and performance marketing. Fewer vendor threads and less rework from handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Commercials you can quote",
    description:
      "We agree scope boundaries, change handling and milestones up front so you can protect margin when you resell or bundle.",
  },
  {
    icon: Handshake,
    title: "Accountability on delivery",
    description:
      "A named contact for partner work, written assumptions where useful, and status you can forward to your client with confidence.",
  },
];

const partnershipPrograms = [
  {
    title: "Agency & reseller delivery",
    headline: "White-label delivery for your clients",
    description:
      "You sell and manage the relationship; we implement websites (WordPress, Shopify, Next.js), Android apps, Meta/Google campaigns, SEO retainer work and light custom portals. NDA-friendly and client-facing materials stay yours.",
    cta: "Apply for partner access",
    href: "/b2b/apply",
    tags: ["Web", "Apps", "Ads", "SEO"],
  },
  {
    title: "Volume builds",
    headline: "Many sites or pages, one standard of quality",
    description:
      "Suited to directory-style rollouts, franchise locators, campaign landers or event microsites. We align components and QA so the tenth build is as predictable as the first.",
    cta: "Request volume pricing",
    href: "/b2b/apply",
    tags: ["Landing pages", "Templates", "QA"],
  },
  {
    title: "Monthly capacity",
    headline: "Reserved hours for mixed work",
    description:
      "Block a recurring slice of design, dev or ads hours each month. Use them across client projects instead of negotiating every ticket.",
    cta: "Discuss capacity",
    href: "/b2b/apply",
    tags: ["Retainer", "Sprint", "Priority queue"],
  },
  {
    title: "Discovery & roadmaps",
    headline: "Documentation before you commit build budget",
    description:
      "For larger clients: workshop current tools, map integrations, and produce a phased roadmap (what to build now vs later). You can take our scope to procurement or fund internally.",
    cta: "Book discovery call",
    href: "/contact",
    tags: ["Audit", "Architecture", "Phasing"],
  },
];

const onboardingSteps = [
  {
    step: "1",
    title: "Intro call",
    text: "You share client mix, typical project size, and whether you need white-label or co-branded delivery.",
  },
  {
    step: "2",
    title: "Proposal & terms",
    text: "We return rates, turnaround norms, and how changes and rush work are handled—usually within a few working days.",
  },
  {
    step: "3",
    title: "Pilot then scale",
    text: "Start with one engagement to test fit, then fold us into your standard playbook for repeat work.",
  },
];

const proofPillars = [
  {
    title: "Office address",
    line: siteConfig.links.address,
  },
  {
    title: "One roof for delivery",
    line: "Websites, Android apps, custom software and performance marketing—briefed as one programme where it helps.",
  },
  {
    title: "Direct commercial contact",
    line: siteConfig.links.email,
  },
];

export default function B2BPage() {
  return (
    <div className="bg-white">
      {/* Hero — home-style: light, amber/orange accents */}
      <section className="home-section-py relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                B2B &amp; channel partnerships
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
                Scale client delivery{" "}
                <span className="rsa-gradient-text">without scaling headcount</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                {siteConfig.shortName} works as the implementation arm for agencies, consultants and
                in-house teams: white-label web and app builds, performance marketing, and practical
                business software. You keep client ownership; we focus on clear scope, timelines and
                partner-friendly communication.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                  NDAs &amp; white-label friendly
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                  Volume &amp; retainer options
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-[30px] bg-[#F76902] px-7 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
                >
                  <Link href="/b2b/apply">
                    Partner application
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-[30px] border-2 border-amber-400/80 bg-white px-6 text-base font-semibold text-[#F76902] hover:bg-amber-50"
                >
                  <Link href={siteConfig.links.whatsapp}>WhatsApp {siteConfig.links.phone}</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-[30px] text-base font-semibold text-neutral-700 hover:bg-amber-50/80"
                >
                  <Link href="/portfolio">View portfolio</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-3xl border-2 border-amber-400/80 bg-white p-6 shadow-xl shadow-amber-400/15 md:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-400 bg-amber-50 text-[#F76902]">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    For procurement &amp; leadership
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">What you can expect</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                  Written scope summaries and milestone billing where projects need it
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                  Sensible change control so surprise scope does not erode your margin
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                  Access to {siteConfig.links.email} for ongoing partner and client work
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  size="sm"
                  className="rounded-[30px] bg-[#F76902] px-5 text-xs font-semibold text-white hover:bg-[#f9802b]"
                >
                  <Link href="/contact">Email the team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Who we partner with</p>
            <h2 className="marketing-heading mt-3">Built for firms that sell digital outcomes</h2>
            <p className="marketing-body mt-4">
              If your growth depends on winning and retaining clients—not on maintaining a large
              permanent bench—this model is meant to sit alongside your sales and PM function.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerSegments.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border-2 border-amber-400/50 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F76902]/70 hover:shadow-lg hover:shadow-amber-400/15"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-amber-400/70 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902]">
                  <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business growth outcomes */}
      <section className="relative overflow-hidden border-t border-amber-400/30 bg-linear-to-b from-amber-50/35 via-white to-white py-10 md:py-14 lg:py-16">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(247,105,2,0.09),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Business growth</p>
            <h2 className="marketing-heading mt-3">What a delivery partnership changes for you</h2>
            <p className="marketing-body mt-4">
              These are the levers we hear about from partners: pipeline conversion, cost structure,
              and operational load—not abstract “synergy”.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {growthOutcomes.map((o) => (
              <div
                key={o.title}
                className="flex gap-5 rounded-2xl border-2 border-amber-400/50 bg-white p-6 shadow-sm transition-all hover:border-[#F76902]/60 hover:shadow-md md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-amber-400 bg-amber-50 text-[#F76902]">
                  <o.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{o.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factual trust strip — no invented statistics */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl border-2 border-amber-400/60 bg-linear-to-br from-amber-50/40 to-white px-6 py-8 shadow-sm md:px-10 md:py-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#F76902]">
              Working with RSA Tech Softwares
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
              {proofPillars.map((p) => (
                <div key={p.title} className="text-center md:text-left">
                  <p className="text-sm font-semibold text-neutral-900">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Programmes</p>
            <h2 className="marketing-heading mt-3">How organisations engage us</h2>
            <p className="marketing-body mt-4">
              Pick the entry point that matches your pipeline. Terms are agreed in writing before
              major spend—not after work has already started informally.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {partnershipPrograms.map((opt) => (
              <div
                key={opt.title}
                className="group flex flex-col rounded-2xl border-2 border-amber-400/55 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F76902] hover:shadow-lg hover:shadow-amber-400/15 md:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F76902]">
                  {opt.title}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-neutral-900">{opt.headline}</h3>
                <p className="marketing-body mt-3 grow">{opt.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {opt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-400/50 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-[30px] bg-[#F76902] px-5 font-semibold text-white hover:bg-[#f9802b]"
                  >
                    <Link href={opt.href} className="inline-flex items-center gap-1">
                      {opt.cta}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="border-t border-amber-400/30 bg-linear-to-b from-white via-amber-50/20 to-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Onboarding</p>
            <h2 className="marketing-heading mt-3">From first conversation to first project</h2>
            <p className="marketing-body mt-4">
              We keep early steps lightweight: you should know if we are a fit before you involve
              your end client.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {onboardingSteps.map((s) => (
              <div
                key={s.step}
                className="flex flex-col items-center rounded-2xl border-2 border-amber-400/50 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#F76902] bg-amber-50 text-base font-bold text-[#F76902]">
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Clock3 className="h-5 w-5 shrink-0 text-[#F76902]" aria-hidden />
            <p className="text-center text-sm text-neutral-600">
              Initial proposal timing is typically discussed on the intro call; most partners
              receive a written summary within a few working days of sharing enough detail.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="marketing-eyebrow">Next step</p>
            <h2 className="marketing-heading mt-3">Request a B2B proposal</h2>
            <p className="marketing-body mt-4">
              Use the application form for volumes, partner rates and delivery expectations. For a
              general enquiry you can also reach us via the contact page or WhatsApp.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-[30px] bg-[#F76902] px-8 font-semibold text-white shadow-md hover:bg-[#f9802b]"
              >
                <Link href="/b2b/apply" className="gap-2">
                  Open partner form
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-[30px] border-2 border-amber-400/80 bg-white font-semibold text-[#F76902] hover:bg-amber-50"
              >
                <Link href="/contact">Contact page</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
