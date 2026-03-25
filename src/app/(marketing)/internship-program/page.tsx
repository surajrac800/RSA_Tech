import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { InternshipForm } from "@/components/forms/InternshipForm";
import certificateImg from "@/assets/images/certificate.jpeg";
import {
  Megaphone,
  Globe,
  Smartphone,
  Code2,
  ShoppingBag,
  Brain,
  Palette,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "6-Month Internship Program | RSA Tech Softwares",
  description: `${siteConfig.shortName} — 6-month internships across digital marketing, web, apps, software, AI/ML and more. ISO-certified completion certificate. Live WordPress & Shopify cohort.`,
};

const LIVE_COHORT_URL = "https://skyblue-guanaco-589258.hostingersite.com/";

const technologyTracks = [
  {
    icon: Megaphone,
    title: "Digital marketing",
    description:
      "Performance marketing, SEO, Meta & Google Ads, analytics and reporting—learn how campaigns are planned, optimised and presented to real clients.",
  },
  {
    icon: Globe,
    title: "Web development",
    description:
      "Modern frontends with HTML/CSS, JavaScript, React and Next.js; semantic structure, accessibility basics and deployment workflows we use in production.",
  },
  {
    icon: ShoppingBag,
    title: "WordPress & Shopify",
    description:
      "Theme customisation, WooCommerce, Liquid, apps and store operations—aligned with our live WordPress & Shopify internship cohort (see highlighted programme below).",
  },
  {
    icon: Smartphone,
    title: "App development",
    description:
      "Android and cross-platform patterns, API integration, builds and store-readiness—shadowing how we ship maintainable mobile products.",
  },
  {
    icon: Code2,
    title: "Software & backend",
    description:
      "APIs, databases, business logic and internal tools (CRM-style workflows, dashboards)—how custom software is scoped, built and handed over.",
  },
  {
    icon: Brain,
    title: "AI & machine learning",
    description:
      "Foundations through applied use: data prep, model basics, prompting and integration patterns suitable for real business automation and product features.",
  },
  {
    icon: Palette,
    title: "UI/UX & creative",
    description:
      "Layouts, design systems, ad creatives and handoff to development—so you see the full path from brief to shipped interface.",
  },
] as const;

const outcomes = [
  "Six months of structured, mentor-led exposure—not a short-term shadowing week.",
  "Work tied to real delivery practices at RSA Tech Softwares (briefs, reviews, tooling).",
  "Completion certificate recognised for your resume; issued on successful evaluation.",
  "Option to align with our running WordPress & Shopify intake via the dedicated learning portal.",
];

export default function InternshipProgramPage() {
  return (
    <div className="bg-white">
      {/* Hero — same gradient shell as home Hero */}
      <section className="home-section-py relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" aria-hidden />
                Internships · 6 months · Certificate
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
                Turn academic learning into{" "}
                <span className="rsa-gradient-text">industry-ready skill</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg lg:mx-0">
                Join {siteConfig.shortName}&apos;s{" "}
                <strong className="font-semibold text-neutral-900">6-month internship program</strong>{" "}
                across the technologies we deliver every day. Finish with an{" "}
                <strong className="font-semibold text-[#F76902]">ISO-certified completion certificate</strong>{" "}
                and documented project work you can show employers.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-[30px] bg-[#F76902] px-8 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
                >
                  <Link href="#apply">
                    Apply for internship
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-[30px] border-2 border-amber-400/80 bg-white px-8 text-base font-semibold text-[#F76902] hover:bg-amber-50"
                >
                  <Link href="#tracks">Explore tracks</Link>
                </Button>
              </div>
              <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-600 lg:mx-0 lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[#F76902]" aria-hidden />
                  6-month programme
                </span>
                <span className="inline-flex items-center gap-2">
                  <Award className="h-4 w-4 shrink-0 text-[#F76902]" aria-hidden />
                  ISO-certified certificate
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 shrink-0 text-[#F76902]" aria-hidden />
                  Mentor-led, real workflows
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="rounded-2xl border-2 border-amber-400/80 bg-white p-4 shadow-xl shadow-amber-400/20 md:p-5">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-neutral-200/80">
                  <Image
                    src={certificateImg}
                    alt="Internship completion certificate sample from RSA Tech Softwares"
                    width={560}
                    height={420}
                    className="h-auto w-full object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live cohort — split banner + chips */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border-2 border-amber-400/50 bg-linear-to-br from-amber-50/90 via-white to-amber-100/40 shadow-lg shadow-amber-400/10">
            <div className="grid md:grid-cols-[auto_1fr]">
              <div
                className="flex flex-col items-center justify-center gap-2 border-b border-amber-400/30 bg-[#F76902] px-6 py-8 text-white md:border-b-0 md:border-r md:py-10 md:pl-8 md:pr-6"
                aria-hidden
              >
                <Globe className="h-10 w-10 opacity-95 md:h-12 md:w-12" />
                <ShoppingBag className="h-9 w-9 opacity-90 md:h-11 md:w-11" />
                <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                  Live track
                </p>
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#F76902] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Now enrolling
                  </span>
                  <span className="rounded-full border border-amber-400/60 bg-white px-3 py-1 text-xs font-semibold text-neutral-800">
                    WordPress + Shopify
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-extrabold tracking-tight text-neutral-900 md:text-2xl lg:text-3xl lg:leading-tight">
                  Dedicated WordPress &amp; Shopify internship track—open for joiners
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
                  We are currently running a focused{" "}
                  <strong className="text-neutral-900">WordPress &amp; Shopify development internship programme</strong>{" "}
                  with structured curriculum, hands-on builds and placement-oriented mentorship. Join
                  via our official learning portal—batch sizes are limited.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Structured curriculum", "Hands-on builds", "Placement-oriented mentorship"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-lg border border-amber-400/40 bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-sm"
                      >
                        {chip}
                      </span>
                    )
                  )}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="gap-2 rounded-[30px] bg-[#F76902] px-7 font-semibold text-white shadow-md hover:bg-[#f9802b]"
                  >
                    <a href={LIVE_COHORT_URL} target="_blank" rel="noopener noreferrer">
                      Join WordPress &amp; Shopify programme
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-neutral-500">
                    External enrolment site (opens in a new tab).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section
        id="tracks"
        className="scroll-mt-24 border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Domains</p>
            <h2 className="marketing-heading mt-3">
              Internships across every core technology we ship
            </h2>
            <p className="marketing-body mt-4">
              Pick a primary track when you apply. You&apos;ll still touch adjacent tools where it
              mirrors how our studio actually delivers client work.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-12 xl:gap-6">
            {technologyTracks.map((track) => {
              const TrackIcon = track.icon;
              return (
                <div
                  key={track.title}
                  className="group rounded-2xl border-2 border-amber-400/50 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F76902]/70 hover:shadow-lg hover:shadow-amber-400/15"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-amber-400/70 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902]">
                    <TrackIcon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{track.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{track.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate details — image already in hero */}
      <section className="relative overflow-hidden border-t border-amber-400/30 bg-linear-to-b from-amber-50/35 via-white to-white py-10 md:py-14 lg:py-16">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(247,105,2,0.09),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <p className="marketing-eyebrow">Credential</p>
            <h2 className="marketing-heading mt-3">ISO-certified completion certificate</h2>
            <p className="marketing-body mt-4">
              On successful completion of your{" "}
              <strong className="font-semibold text-neutral-900">6-month internship</strong>,
              assigned milestones and evaluation, you receive a formal{" "}
              <strong className="font-semibold text-neutral-900">
                certificate of completion from {siteConfig.shortName}
              </strong>{" "}
              issued under ISO-aligned quality standards—ideal for resumes, LinkedIn and campus
              placement folders.
            </p>
          </div>
          <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-sm text-neutral-600 md:text-base">
            {outcomes.map((line) => (
              <li key={line} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]"
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              className="rounded-[30px] bg-[#F76902] px-8 font-semibold text-white hover:bg-[#f9802b]"
            >
              <Link href="#apply">Secure your seat</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="rounded-2xl border-2 border-amber-400/50 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
                  How the programme runs
                </h2>
                <ul className="mt-6 space-y-4 text-sm text-neutral-600 md:text-base">
                  <li className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/60 bg-amber-50 text-sm font-bold text-[#F76902]">
                      1
                    </span>
                    <span>
                      <strong className="text-neutral-900">Onboarding &amp; track alignment</strong>{" "}
                      — goals, stack and mentor assignment for your 6-month arc.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/60 bg-amber-50 text-sm font-bold text-[#F76902]">
                      2
                    </span>
                    <span>
                      <strong className="text-neutral-900">Weekly deliverables</strong> — tasks that
                      mirror real client cadence: reviews, feedback, iteration.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/60 bg-amber-50 text-sm font-bold text-[#F76902]">
                      3
                    </span>
                    <span>
                      <strong className="text-neutral-900">Final evaluation</strong> — portfolio
                      review; certificate issued when requirements are met.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-[#F76902]/35 bg-amber-50/50 p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">Who should apply</h2>
                <ul className="mt-6 space-y-3 text-sm text-neutral-600 md:text-base">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" />
                    Final- or pre-final-year students who want structured industry exposure.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" />
                    Fresh graduates building a credible project portfolio.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" />
                    Career-switchers who have completed foundational courses and need guided practice.
                  </li>
                </ul>
                <p className="mt-6 text-sm text-neutral-600">
                  Format (remote / hybrid) and timings are shared with shortlisted candidates. For
                  WordPress &amp; Shopify cohort intake, use the{" "}
                  <a
                    href={LIVE_COHORT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#F76902] underline-offset-4 hover:underline"
                  >
                    live programme portal
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section
        id="apply"
        className="scroll-mt-24 border-t border-amber-400/30 bg-linear-to-b from-white to-amber-50/30 py-10 md:py-14 lg:py-16"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="marketing-eyebrow">Apply</p>
            <h2 className="marketing-heading mt-3">Internship application</h2>
            <p className="marketing-body mt-4">
              Tell us your background and preferred track. We review every application and communicate
              next steps over email or phone.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-amber-400/70 bg-white p-6 shadow-lg md:p-8 lg:p-10">
            <InternshipForm />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs text-neutral-500">
            Questions?{" "}
            <Link href="/contact" className="font-medium text-[#F76902] underline-offset-4 hover:underline">
              Contact
            </Link>{" "}
            or reach us on {siteConfig.links.phone}.
          </p>
        </div>
      </section>
    </div>
  );
}
