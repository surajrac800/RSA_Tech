import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { companyStats } from "@/config/company-stats";
import { Target, Award, Users, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import leaderPhoto from "@/assets/images/leader.png";
import cofounder from "@/assets/images/Ashish.jpeg";

export const metadata: Metadata = {
  title: "About Us | RSA Tech Softwares",
  description:
    "Learn about Rapid Solution & Automation (RSA Tech Softwares)—software, apps, websites and digital marketing from Noida.",
};

const values = [
  {
    icon: Target,
    title: "Outcome-first thinking",
    description:
      "Every brief is translated into clear revenue, pipeline or efficiency goals before we touch design or code.",
  },
  {
    icon: Award,
    title: "Premium execution",
    description:
      "Modern stacks, clean UI and thoughtful UX that feels on-brand and fast on every device.",
  },
  {
    icon: Users,
    title: "Owner-level partnership",
    description:
      "We plug into your business like an internal tech and marketing team, not an external vendor ticking tasks.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Short, transparent sprints with fast releases, quick experiments and continuous optimisation.",
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
];

const stats = [
  {
    label: "Websites delivered",
    value: companyStats.websitesDelivered,
    detail: "Business, e‑commerce and landing pages",
  },
  {
    label: "Mobile apps developed",
    value: companyStats.appsDelivered,
    detail: "Android, PWA and cross‑platform",
  },
  {
    label: "Active ad campaigns",
    value: companyStats.activeAdCampaigns,
    detail: "Meta Ads and Google Ads running for clients",
  },
  {
    label: "Year founded",
    value: companyStats.yearFounded,
    detail: "Studio based in Noida, serving clients across India",
  },
] as const;

function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="home-section-py relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                About {siteConfig.shortName}
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
                Reliable digital foundations for{" "}
                <span className="rsa-gradient-text">growing businesses</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Web, custom software, mobile apps and performance marketing—delivered by a
                founder-led team in Noida. We work with MSMEs, startups and service brands
                that want clear ownership of outcomes, not a rotating list of vendors.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                  One team for tech and marketing
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                  Est. 2018 · Noida, India
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-[30px] bg-[#F76902] px-7 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
                >
                  <Link href="/contact">Book a consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-[30px] border-2 border-amber-400/80 bg-white px-6 text-base font-semibold text-[#F76902] hover:bg-amber-50"
                >
                  <Link href="/portfolio">See our work</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-3xl border-2 border-amber-400/80 bg-white p-6 shadow-xl shadow-amber-400/15 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-lg font-semibold text-neutral-900 md:text-xl">
                Rapid Solution &amp; Automation
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                A compact studio helping businesses move from scattered tools to one accountable
                partner for websites, apps, automation and campaigns.
              </p>
              <div className="mt-5 rounded-2xl border border-amber-400/40 bg-amber-50/60 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#F76902]">
                Strategy · Build · Optimise
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
            <div>
              <p className="marketing-eyebrow">Who we are</p>
              <h2 className="marketing-heading mt-3">
                A founder-led studio for long-term digital growth
              </h2>
              <p className="marketing-body mt-4">
                Started in 2018 by <strong className="font-semibold text-neutral-900">Suraj Kr. Chaurasiya</strong> and{" "}
                <strong className="font-semibold text-neutral-900">Ashish Jaiswal</strong>, {siteConfig.shortName}{" "}
                was built for businesses tired of splitting websites, apps, brand and performance
                marketing across different suppliers with no single owner of results.
              </p>
              <p className="marketing-body mt-4">
                Today we bring strategy, design, engineering and growth into one team that
                understands your sales motion, customers and constraints—then builds systems that
                support them every day.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-amber-400/50 bg-linear-to-br from-amber-50/50 to-white p-6 shadow-sm md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F76902]">
                What this means for you
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                  One accountable partner from first idea through optimisation
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                  Creatives, engineers and performance marketers on the same roadmap
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                  Direct access when priorities shift or you need to move quickly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-linear-to-b from-amber-50/25 via-white to-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Mission &amp; vision</p>
            <h2 className="marketing-heading mt-3">The north star behind everything we ship</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
            <div className="rounded-2xl border-2 border-amber-400/55 bg-white p-6 shadow-sm md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F76902]">
                <Target className="h-3.5 w-3.5" aria-hidden />
                Mission
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                Turn complex digital work into simple, reliable growth systems
              </h3>
              <p className="marketing-body mt-3">
                We connect websites, apps, campaigns and tools into one clear engine that supports
                sales, delivery and client experience day to day.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>— Practical roadmaps focused on revenue, pipeline and efficiency</li>
                <li>— Execution that respects your timelines and budgets</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-amber-400/55 bg-white p-6 shadow-sm md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F76902]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Vision
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                The long-term tech partner behind trusted MSME and startup brands
              </h3>
              <p className="marketing-body mt-3">
                We are building {siteConfig.shortName} so strategy, design, engineering and
                performance marketing work as one—founders get dependable execution without losing
                speed or control.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Transparent communication", "Products, not only projects", "Growth mindset"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-400/40 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Why choose us</p>
            <h2 className="marketing-heading mt-3">A partner that thinks like an in-house team</h2>
            <p className="marketing-body mt-4">
              From leadership to delivery, we focus on compounding value—not one-off launches.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border-2 border-amber-400/50 bg-white p-5 shadow-sm transition-all hover:border-[#F76902]/60 hover:shadow-md md:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-amber-400/70 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902]">
                  <v.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border-2 border-amber-400/60 bg-linear-to-br from-amber-50/40 to-white px-6 py-8 shadow-sm md:px-10 md:py-10 lg:px-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <p className="marketing-eyebrow">By the numbers</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                  Scale of work behind the scenes
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
                Since 2018 we have shipped and optimised digital systems for clients who want a
                stable partner—not a new agency every year.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-amber-400/40 bg-white/90 p-4 shadow-sm md:p-5"
                >
                  <p className="text-2xl font-bold rsa-gradient-text md:text-3xl">{s.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-linear-to-b from-amber-50/20 via-white to-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Our journey</p>
            <h2 className="marketing-heading mt-3">From studio to long-term partner</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {[
              {
                y: "2018",
                t: "RSA Tech Softwares is founded",
                b: "Suraj Kr. Chaurasiya and Ashish Jaiswal launch the studio with a focus on MSMEs and local businesses.",
              },
              {
                y: "2020",
                t: "Expanding capabilities",
                b: "Performance marketing, automation and analytics join delivery—many clients get a single partner.",
              },
              {
                y: "2022",
                t: "Product mindset",
                b: "Reusable components, design patterns and internal tools improve speed and consistency.",
              },
              {
                y: "Today",
                t: "Integrated growth partner",
                b: "Supporting startups and MSMEs across India with coordinated tech, design and campaigns.",
              },
            ].map((j) => (
              <div
                key={j.y}
                className="rounded-2xl border-2 border-amber-400/50 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F76902]">{j.y}</p>
                <p className="mt-3 font-semibold text-neutral-900">{j.t}</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">{j.b}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Meet our team</p>
            <h2 className="marketing-heading mt-3">People behind {siteConfig.shortName}</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="group rounded-2xl border-2 border-amber-400/55 bg-white p-6 shadow-sm transition-all hover:border-[#F76902]/65 hover:shadow-lg hover:shadow-amber-400/10 md:p-7"
              >
                <div className="flex items-start gap-4">
                  {"image" in person && person.image ? (
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-amber-400/50 bg-amber-50 shadow-sm md:h-24 md:w-24">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={120}
                        height={120}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-50 text-[#F76902] md:h-24 md:w-24">
                      <Users className="h-10 w-10 md:h-11 md:w-11" aria-hidden />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#F76902]">
                      {person.role}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-neutral-900">{person.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{person.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {person.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-amber-400/45 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-amber-400/60 bg-linear-to-br from-amber-50/35 to-white px-6 py-10 text-center shadow-sm md:px-10 md:py-12">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              Ready to work with a team that understands tech and marketing?
            </h2>
            <p className="marketing-body mt-4">
              Tell us what you are building—we will help shape a clear next step for your website,
              app, software or campaigns.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-[30px] bg-[#F76902] px-8 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
