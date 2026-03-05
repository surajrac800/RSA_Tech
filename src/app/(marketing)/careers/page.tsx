import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Briefcase,
  Sparkles,
  Users,
  Zap,
  Globe,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${siteConfig.shortName} — build digital products and campaigns that help businesses grow.`,
};

const benefits = [
  {
    icon: Zap,
    title: "Growth & learning",
    description: "Work on diverse projects — ads, web, apps and software — and level up with modern tools.",
  },
  {
    icon: Globe,
    title: "Flexible work",
    description: "Remote-friendly culture with focus on outcomes and clear communication.",
  },
  {
    icon: Users,
    title: "Small, strong team",
    description: "Collaborate closely with founders and peers. Your ideas and ownership matter.",
  },
  {
    icon: Heart,
    title: "Work-life balance",
    description: "Sustainable pace, transparent timelines and respect for your time.",
  },
];

const openRoles = [
  {
    slug: "bda",
    title: "Business Development Associate (BDA)",
    type: "Full-time / Contract",
    summary: "Drive new business through outreach, lead qualification and client onboarding. Work with the founder on proposals and growth.",
    priority: true,
  },
  {
    slug: "sales-manager",
    title: "Sales Manager",
    type: "Full-time / Contract",
    summary: "Own the sales pipeline: manage leads, close deals and nurture client relationships for digital marketing and tech services.",
    priority: true,
  },
  {
    slug: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    type: "Full-time / Contract",
    summary: "Manage Meta & Google Ads, create campaigns and report on performance for multiple clients.",
    priority: false,
  },
  {
    slug: "web-developer",
    title: "Web / Full‑stack Developer",
    type: "Full-time / Contract",
    summary: "Build websites and web apps with WordPress, Shopify, Next.js or similar. You'll own delivery and quality.",
    priority: false,
  },
  {
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    type: "Full-time / Contract",
    summary: "Develop Android and cross-platform apps. Experience with React Native or Flutter is a plus.",
    priority: false,
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer / Creative",
    type: "Full-time / Contract",
    summary: "Create brand assets, ad creatives and social content that align with client campaigns.",
    priority: false,
  },
];

export default function CareersPage() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Careers
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Build with us at{" "}
              <span className="rsa-gradient-text">{siteConfig.shortName}</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We’re a compact team that builds websites, apps, software and runs
              digital marketing for growing businesses. If you love shipping
              real work and seeing results, we’d love to hear from you.
            </p>
            <Button asChild size="lg" className="mt-6 gap-2 rsa-gradient-bg text-white shadow-md">
              <Link href="/careers/apply">Apply now</Link>
            </Button>
          </div>

          {/* Why join */}
          <div className="mt-14 border-t border-border/60 pt-12 md:mt-16">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Why join us
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                A place where your work matters
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-4 rounded-2xl border border-blue-100/70 bg-white/95 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open roles */}
          <div className="mt-14 border-t border-border/60 pt-12 md:mt-16">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Open roles
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  We’re hiring
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Roles can be full-time or contract based on fit.
              </p>
            </div>
            <div className="space-y-4">
              {openRoles.map((role) => (
                <div
                  key={role.slug}
                  className={cn(
                    "group flex flex-col gap-4 rounded-2xl border bg-white/95 p-6 shadow-sm transition-all hover:shadow-lg sm:flex-row sm:items-center sm:justify-between",
                    role.priority
                      ? "border-violet-200/80 bg-violet-50/30"
                      : "border-blue-100/70 hover:border-blue-200"
                  )}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">
                        {role.title}
                      </h3>
                      {role.priority && (
                        <span className="rounded-full bg-violet-200/80 px-2.5 py-0.5 text-xs font-semibold text-violet-800">
                          Top priority
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs font-medium text-blue-700">
                      {role.type}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {role.summary}
                    </p>
                  </div>
                  <Button asChild size="sm" className="shrink-0 gap-2 rsa-gradient-bg text-white">
                    <Link href={`/careers/apply?role=${role.slug}`}>
                      Apply
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/60 px-6 py-12 text-center shadow-lg shadow-blue-500/10 md:mt-16">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-lg">
                <Briefcase className="h-7 w-7" />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">
              Don’t see a fit? Get in touch anyway
            </h2>
            <p className="mt-2 max-w-xl mx-auto text-sm text-muted-foreground">
              We’re always open to meeting talented people in marketing,
              design, development and strategy. Send us a short intro and we’ll
              get back to you.
            </p>
            <Button asChild size="lg" className="mt-6 gap-2 rsa-gradient-bg text-white shadow-md">
              <Link href="/contact">
                <Sparkles className="h-4 w-4" />
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
