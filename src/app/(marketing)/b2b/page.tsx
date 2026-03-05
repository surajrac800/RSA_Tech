import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Building2,
  Handshake,
  Shield,
  TrendingUp,
  Layers,
  ArrowUpRight,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B",
  description: `B2B partnerships with ${siteConfig.shortName}: white-label websites, apps, digital marketing. Scale delivery without hiring. Dedicated account manager & volume pricing.`,
};

const forWhom = [
  {
    icon: Building2,
    title: "Digital agencies",
    line: "Deliver more projects under your brand without adding headcount.",
  },
  {
    icon: Layers,
    title: "Resellers & consultants",
    line: "Offer web, app and marketing services with a reliable backend team.",
  },
  {
    icon: Users,
    title: "In-house teams",
    line: "Handle overflow and peak demand with a dedicated capacity partner.",
  },
  {
    icon: Target,
    title: "Enterprises",
    line: "Audits, strategy and implementation with clear SLAs and reporting.",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Win more clients without hiring",
    description: "Say yes to every opportunity. We scale with your pipeline so you never turn down work for lack of capacity.",
  },
  {
    icon: Layers,
    title: "Deliver 100% under your brand",
    description: "White-label execution. Your client sees only you. We stay in the background and hit every deadline.",
  },
  {
    icon: Shield,
    title: "Predictable costs, no surprises",
    description: "Volume and retainer pricing so you can quote confidently and protect your margin. One invoice, one partner.",
  },
  {
    icon: Handshake,
    title: "One account manager who gets it",
    description: "A single point of contact who knows your clients and your pipeline. No more chasing five different vendors.",
  },
];

const partnershipOptions = [
  {
    title: "Agency & reseller program",
    headline: "Scale delivery. Keep the relationship.",
    description: "White-label websites, apps, Meta & Google Ads, and SEO. We become your execution arm so you can take on more clients and bigger deals.",
    cta: "Apply for partnership",
    href: "/contact",
    tags: ["Websites", "Apps", "Ads", "SEO"],
  },
  {
    title: "Bulk website & landing pages",
    headline: "Volume without compromise.",
    description: "Need 10, 50 or 100+ sites or landing pages? Same quality, consistent turnaround, and pricing that improves with volume.",
    cta: "Get volume quote",
    href: "/contact",
    tags: ["WordPress", "Shopify", "Next.js"],
  },
  {
    title: "Dedicated capacity",
    headline: "Reserve a slice of our team.",
    description: "Lock in dev and marketing capacity every month. Use it for any mix of projects—websites, campaigns, apps—with one fixed cost.",
    cta: "Discuss capacity",
    href: "/contact",
    tags: ["Dev", "Design", "Campaigns"],
  },
  {
    title: "Enterprise audits & strategy",
    headline: "Clarity before you scale.",
    description: "Digital audits, roadmaps and implementation support for larger organisations. One-time or ongoing—we align to your goals.",
    cta: "Book an audit",
    href: "/contact",
    tags: ["Audit", "Strategy", "Implementation"],
  },
];

const steps = [
  { step: "1", title: "Share your needs", text: "Tell us your volume, timelines and how you work with clients." },
  { step: "2", title: "Get a custom proposal", text: "We send pricing, SLAs and a simple agreement—no long RFP." },
  { step: "3", title: "Start delivering", text: "Kick off with a dedicated account manager and your first project." },
];

const stats = [
  { value: "75+", label: "Active Meta & Google Ads campaigns" },
  { value: "550+", label: "Websites delivered" },
  { value: "90+", label: "Mobile apps developed" },
];

export default function B2BPage() {
  return (
    <section className="relative bg-background">
      {/* Hero – full impact */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-violet-600 to-orange-500 py-16 md:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.08),transparent_50%)]" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              B2B & partnerships
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Stop juggling vendors.
              <br />
              <span className="mt-2 inline-block bg-white/95 bg-clip-text text-transparent">
                One partner. Unlimited scale.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl">
              Agencies, resellers and enterprises use {siteConfig.shortName} as their
              white-label execution partner. Websites, apps, digital marketing—one
              account manager, clear SLAs, pricing that scales with volume.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-blue-700 shadow-xl hover:bg-white/95">
                <Link href="/b2b/apply">
                  Get your B2B proposal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/80 bg-transparent text-white hover:bg-white/10">
                <Link href="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Built for you */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Built for you
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Whether you&apos;re an agency, reseller or enterprise
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {forWhom.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-blue-100/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>

          {/* What you get – outcomes */}
          <div className="mt-20 border-t border-border/60 pt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                What you get
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Outcomes that matter to your business
              </h2>
              <p className="mt-3 text-muted-foreground">
                Not just delivery—partnership built for growth and peace of mind.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {outcomes.map((o) => (
                <div
                  key={o.title}
                  className="group flex gap-5 rounded-3xl border border-blue-100/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 md:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-lg">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proof strip */}
          <div className="mt-20 rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 via-white to-violet-50/80 px-6 py-10 shadow-lg md:px-10">
            <p className="text-center text-sm font-semibold text-foreground">
              Trusted scale behind the scenes
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold rsa-gradient-text md:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership options */}
          <div className="mt-20 border-t border-border/60 pt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Partnership options
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Choose how you want to work with us
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {partnershipOptions.map((opt) => (
                <div
                  key={opt.title}
                  className="group relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/15 md:p-8"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 opacity-20 blur-2xl" />
                  <p className="relative text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {opt.title}
                  </p>
                  <h3 className="relative mt-2 text-xl font-bold text-foreground">
                    {opt.headline}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {opt.description}
                  </p>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {opt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="relative mt-5">
                    <Button asChild size="sm" className="gap-2 rsa-gradient-bg text-white">
                      <Link href="/b2b/apply">{opt.cta}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mt-20 border-t border-border/60 pt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                How it works
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                From first call to first delivery in days, not months
              </h2>
            </div>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-stretch md:justify-center">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="flex flex-1 flex-col items-center rounded-2xl border border-blue-100/80 bg-white p-6 text-center shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-lg font-bold text-white shadow-md">
                    {s.step}
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* B2B form section */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Get your proposal
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  Request a custom B2B proposal
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Share your company details and requirements on a dedicated form page.
                  We&apos;ll send pricing, SLAs and next steps within 1–2 working days—no
                  commitment required.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full gap-2 rsa-gradient-bg text-white shadow-md hover:opacity-95 sm:w-auto"
                >
                  <Link href="/b2b/apply">
                    Open B2B proposal form
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
