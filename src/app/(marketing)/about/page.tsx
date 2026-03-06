import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Target, Award, Users, Zap, Briefcase, Sparkles } from "lucide-react";
import leaderPhoto from "@/assets/images/leader.png";
import cofounder from "@/assets/images/Ashish.jpeg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rapid Solution & Automation (RSA Tech Softwares) - your partner in software and digital marketing.",
};

const values = [
  {
    icon: Target,
    title: "Outcome-first thinking",
    description: "Every brief is translated into clear revenue, pipeline or efficiency goals before we touch design or code.",
  },
  {
    icon: Award,
    title: "Premium execution",
    description: "Modern stacks, clean UI and thoughtful UX that feels on-brand and fast on every device.",
  },
  {
    icon: Users,
    title: "Owner-level partnership",
    description: "We plug into your business like an internal tech + marketing team, not an external vendor ticking tasks.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description: "Short, transparent sprints with fast releases, quick experiments and continuous optimisation.",
  },
];

const leadership = [
  {
    name: "Suraj Kr. Chaurasiya",
    role: "Managing Director",
    bio: "Suraj started RSA Tech Softwares in 2018 and has since led the studio across product, technology and growth. With a deep understanding of both code and business, he brings product thinking, performance marketing and automation together to create systems that actually move the P&L.",
    focus: ["Vision & Strategy", "Product & Technology", "Growth Systems"],
    image: leaderPhoto,
  },
  {
    name: "Ashish Jaiswal",
    role: "Co-Founder",
    bio: "Ashish brings a strong focus on delivery, operations and client success. He ensures that every website, app and campaign launched by RSA Tech Softwares is reliable, on time and aligned with measurable outcomes.",
    focus: ["Delivery & Operations", "Client Success", "Process Improvement"],
    image: cofounder,
  },
  {
    name: "Core Delivery Team",
    role: "Design, Development & Marketing",
    bio: "A multi-disciplinary team of engineers, designers, content specialists and performance marketers working together under one roof to ship cohesive digital experiences.",
    focus: ["Web & App Delivery", "Brand & Content", "Campaign Execution"],
  },
];

const stats = [
  { label: "Websites Delivered", value: "550+", detail: "Business, e‑commerce & landing pages" },
  { label: "Mobile Apps Developed", value: "90+", detail: "Android, PWA & cross‑platform" },
  {
    label: "Active Ads Campaigns",
    value: "75+",
    detail: "Meta Ads & Google Ads running for clients",
  },
];

export default function AboutPage() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-10 md:py-14 lg:py-16">
        <div className="space-y-16 lg:space-y-20">
          {/* Hero / Intro */}
          <div className="overflow-hidden rounded-3xl border border-blue-100/70 bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 px-6 py-8 text-white shadow-2xl shadow-blue-500/30 md:px-10 md:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.14),transparent_55%)]" />
            <div className="relative">
              <div className="flex justify-center">
                <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                  About {siteConfig.shortName}
                </span>
              </div>
              <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
                {/* Left side – expertise */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                    6+ years of expertise
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                    Building reliable digital foundations
                    <span className="block text-base font-medium text-blue-100 md:text-lg">
                      Web, software, apps & performance marketing for growing businesses.
                    </span>
                  </h1>
                  <p className="mt-4 text-sm text-blue-50/95 md:text-base">
                    Globally-minded work for Indian MSMEs, startups and service brands who want
                    enterprise-level execution without the complexity.
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-blue-100/90">
                    Websites & apps · Automation · Performance campaigns
                  </p>
                </div>

                {/* Right side – institute-style framing */}
                <div className="relative">
                  <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-orange-300/40 blur-3xl" />
                  <div className="relative space-y-4 text-right">
                    <div className="inline-flex rounded-full bg-white/20 px-4 py-1 text-xs font-semibold text-white shadow-sm shadow-black/20">
                      Trusted by founders, sales & marketing teams
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                      Rapid Solution &amp; Automation
                    </h2>
                    <p className="text-sm text-white/90 md:text-base">
                      A founder-led tech and marketing studio helping businesses move from scattered
                      tools to one integrated digital engine.
                    </p>
                    <div className="mt-3 inline-flex max-w-full items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-md shadow-black/20 text-center sm:text-xs md:text-sm">
                      Empowering growth through smart technology &amp; automation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
          {/* Who we are (company overview) */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Who we are
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  A founder-led studio for serious, long-term digital growth.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  Started in 2018 by{" "}
                  <span className="font-semibold">Suraj Kr. Chaurasiya</span> and{" "}
                  <span className="font-semibold">Ashish Jaiswal</span>, {siteConfig.shortName} was
                  created to solve a common problem—businesses juggling different vendors for
                  websites, apps, brand and performance marketing with no single owner of results.
                </p>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  Today we bring strategy, design, engineering and growth into one compact team that
                  understands your sales motion, your customers and your constraints, then builds
                  systems that support them every day.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-orange-500 p-5 text-white shadow-xl shadow-blue-500/30 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/85">
                  What this means for you
                </p>
                <ul className="mt-1 space-y-2 text-sm text-white/95">
                  <li>• One accountable partner from first idea to optimisation.</li>
                  <li>• Tech, creatives and performance working in the same direction.</li>
                  <li>• Founder access when priorities change or you need to move fast.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Mission &amp; Vision
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                The north star behind everything we ship
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mission */}
              <div className="relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-lg shadow-blue-500/10 md:p-7">
                <div className="absolute inset-y-4 left-0 w-1 rounded-full bg-gradient-to-b from-blue-500 via-sky-400 to-emerald-400" />
                <div className="pl-4 sm:pl-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                    <Target className="h-3.5 w-3.5" />
                    Our mission
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                    Turn complex digital work into simple, reliable growth systems.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground md:text-base">
                    We take scattered websites, apps, campaigns and tools and connect them into one
                    clear engine that supports your sales, delivery and client experience every day.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li>• One accountable partner instead of five different vendors.</li>
                    <li>• Practical roadmaps focused on revenue, pipeline and efficiency.</li>
                    <li>• Execution that respects your timelines and budgets.</li>
                  </ul>
                </div>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-700 via-violet-700 to-slate-900 p-6 text-white shadow-xl shadow-blue-900/40 md:p-7">
                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-50">
                    <Sparkles className="h-3.5 w-3.5" />
                    Our vision
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    Be the quiet, long-term tech partner behind the most trusted MSME and startup
                    brands.
                  </h3>
                  <p className="text-sm text-blue-50/95 md:text-base">
                    We&apos;re building {siteConfig.shortName} as a place where strategy, design,
                    engineering and performance marketing work as one team—so founders get
                    enterprise-grade execution without losing speed or control.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-blue-100 md:text-xs">
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      Transparent, no-nonsense communication
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      Products, not just projects
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      Growth mindset in every engagement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why choose us (USPs) */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Why choose us
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                A partner that thinks like an in-house team
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                From founders to developers, everyone at {siteConfig.shortName} is focused on
                building compounding value—not one-off launches.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-blue-100/60 bg-white/95 p-6 text-left shadow-sm shadow-blue-500/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md shadow-blue-500/40">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our process (trust building) */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Our process
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                A simple path from idea to impact
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Clear stages, transparent communication and checkpoints that keep founders and teams
                in control at every step.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white/95 p-5 shadow-md shadow-blue-500/15">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-xs font-semibold text-white">
                  01
                </div>
                <h3 className="text-sm font-semibold">Discovery & roadmap</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We understand your business model, sales motion and constraints, then propose a
                  practical roadmap instead of a vague wish-list.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white/95 p-5 shadow-md shadow-blue-500/15">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-xs font-semibold text-white">
                  02
                </div>
                <h3 className="text-sm font-semibold">Design, build & launch</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cross-functional pods ship websites, apps, funnels and automations in tight
                  sprints with clear demos and feedback loops.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white/95 p-5 shadow-md shadow-blue-500/15">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-xs font-semibold text-white">
                  03
                </div>
                <h3 className="text-sm font-semibold">Optimise & scale</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We track real numbers, run experiments and refine experiences so your digital
                  systems keep improving instead of going stale.
                </p>
              </div>
            </div>
          </div>

          {/* By the numbers */}
          <div className="mt-16">
            <div className="rounded-3xl border border-blue-100/70 bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-8 shadow-xl shadow-blue-500/10 md:px-10 md:py-10">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                    By the numbers
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
                    A compact team with enterprise-grade impact
                  </h2>
                </div>
                <p className="max-w-md text-sm text-muted-foreground md:text-base">
                  Since 2018 we&apos;ve been quietly building, shipping and optimising digital
                  systems for businesses that want long-term partners—not rotating vendors.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white/90 p-4 text-sm shadow-sm shadow-blue-500/10">
                  <p className="text-3xl font-bold rsa-gradient-text">550+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Websites delivered
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Business sites, e‑commerce stores and landing pages across industries.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4 text-sm shadow-sm shadow-blue-500/10">
                  <p className="text-3xl font-bold rsa-gradient-text">90+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Mobile apps developed
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Android, PWA and cross‑platform applications live in production.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4 text-sm shadow-sm shadow-blue-500/10">
                  <p className="text-3xl font-bold rsa-gradient-text">75+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Active ad campaigns
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Meta Ads &amp; Google Ads campaigns currently running for clients.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 p-4 text-sm shadow-sm shadow-blue-500/10">
                  <p className="text-3xl font-bold rsa-gradient-text">2018</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Year founded
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Over half a decade of shipping and scaling digital systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our journey since 2018 */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Our journey
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                From a small studio to a trusted growth partner
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-3xl border border-blue-100/80 bg-white/95 p-4 text-sm shadow-sm shadow-blue-500/10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  2018
                </p>
                <p className="mt-2 font-semibold">RSA Tech Softwares is founded</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Suraj Kr. Chaurasiya and Ashish Jaiswal start the studio with a focus on MSMEs and
                  local businesses.
                </p>
              </div>
              <div className="relative rounded-3xl border border-blue-100/80 bg-white/95 p-4 text-sm shadow-sm shadow-blue-500/10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  2020
                </p>
                <p className="mt-2 font-semibold">Expanding capabilities</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Adds performance marketing, automation and analytics, becoming a one-stop partner
                  for many clients.
                </p>
              </div>
              <div className="relative rounded-3xl border border-blue-100/80 bg-white/95 p-4 text-sm shadow-sm shadow-blue-500/10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  2022
                </p>
                <p className="mt-2 font-semibold">Product & platform mindset</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Starts building reusable components, design systems and internal tools to deliver
                  faster with higher quality.
                </p>
              </div>
              <div className="relative rounded-3xl border border-blue-100/80 bg-white/95 p-4 text-sm shadow-sm shadow-blue-500/10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Today
                </p>
                <p className="mt-2 font-semibold">Long-term growth partner</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Supporting startups and MSMEs across India with integrated tech, design and growth
                  execution.
                </p>
              </div>
            </div>
          </div>

          {/* Meet our team */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Meet our team
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                People behind {siteConfig.shortName}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="group relative overflow-hidden rounded-3xl border border-blue-100/70 bg-white/95 p-6 shadow-sm shadow-blue-500/10 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 opacity-20 blur-2xl" />
                  <div className="flex items-start gap-4">
                    {"image" in person && person.image ? (
                      <div className="h-20 w-20 overflow-hidden rounded-full border border-blue-100 bg-blue-50 shadow-sm shadow-blue-500/20 md:h-24 md:w-24">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={120}
                          height={120}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : null}
                    <div>
                      <p className="text-sm font-semibold text-blue-700">{person.role}</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">{person.name}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{person.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {person.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 px-6 py-10 text-center text-white md:px-10">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Ready to partner with a team that understands both tech and marketing?
              </h2>
              <p className="mt-3 text-sm text-white/90 md:text-base">
                Share your ideas with us and we&apos;ll help you shape them into a clear roadmap for
                websites, apps, software or digital campaigns.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-white text-blue-700 hover:bg-white/90"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
