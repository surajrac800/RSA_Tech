import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MarketingServiceHero } from "@/components/sections/services/MarketingServiceHero";
import { ServiceNarrativeSection } from "@/components/sections/services/ServiceNarrativeSection";
import { WebDevStatsSection } from "@/components/sections/services/WebDevStatsSection";
import { ServiceProcessSection } from "@/components/sections/services/ServiceProcessSection";
import { Contact } from "@/components/sections/Contact";
import {
  Smartphone,
  RefreshCcw,
  Palette,
  PlugZap,
  Wrench,
  Zap,
  Shield,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "App Development Services | RSA Tech Softwares",
  description:
    "Android and cross‑platform mobile app development services focused on performance, UX, and business growth.",
};

const appServices = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Native Android applications with smooth performance and rich features tailored to your users.",
    badge: "POPULAR",
  },
  {
    icon: RefreshCcw,
    title: "Web to App Conversion",
    description:
      "Convert your existing website into a fully functional mobile application at an affordable cost.",
    highlight: "Just ₹999/- for basic conversion",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive and engaging interfaces designed specifically for mobile experiences and user journeys.",
  },
  {
    icon: PlugZap,
    title: "API Integration",
    description:
      "Seamless integration of third‑party services, payment gateways and backend systems.",
  },
  {
    icon: Wrench,
    title: "App Maintenance",
    description:
      "Regular updates, bug fixes, security patches and performance optimization for your apps.",
  },
] as const;

const performanceBenefits = [
  {
    icon: Smartphone,
    title: "Mobile‑first product thinking",
    description:
      "Layouts, gestures and navigation are designed for real devices and real network conditions—not only mockups.",
  },
  {
    icon: Zap,
    title: "Performance you can feel",
    description:
      "Lean screens, sensible caching and efficient APIs so your app stays responsive as features grow.",
  },
  {
    icon: Shield,
    title: "Security‑aware delivery",
    description:
      "Thoughtful auth patterns, transport security and data handling so you can scale users with confidence.",
  },
  {
    icon: Layers,
    title: "Code you can extend",
    description:
      "Modular structure and clear boundaries make it practical to add modules, APIs and store releases over time.",
  },
] as const;

const processSteps = [
  {
    title: "Planning",
    description:
      "Understanding the app idea, business goals, target audience and success metrics before design starts.",
  },
  {
    title: "Design",
    description:
      "Information architecture and mobile‑first UI/UX—reviewed with you before development begins.",
  },
  {
    title: "Build",
    description:
      "Implementation with clean, maintainable code, integrations and backend hooks as needed.",
  },
  {
    title: "Test",
    description:
      "Functional, device and performance testing so releases feel stable on the phones your users carry.",
  },
  {
    title: "Deploy",
    description:
      "Publishing to Google Play, handover assets and a plan for updates, monitoring and support.",
  },
] as const;

export default function AppDevelopmentPage() {
  return (
    <div className="bg-white">
      <MarketingServiceHero
        badge="App development"
        titleBefore="Smart mobile solutions"
        titleHighlight="built for growth"
        description={`From Android apps to web‑to‑app conversion, we build scalable, user‑friendly mobile applications with ${siteConfig.shortName}—so you can engage customers and streamline operations.`}
        checks={[
          "Android, web‑to‑app and integration expertise",
          "Maintainable codebase and post‑launch support",
        ]}
        primaryCta={{ href: "/contact", label: "Get app consultation" }}
        secondaryCta={{ href: siteConfig.links.whatsapp, label: "WhatsApp us" }}
        sideIcon={Smartphone}
        sideEyebrow="App development"
        sideCardTitle="Ship apps users rely on"
        sideHeadline="From idea to Play Store—with clarity at every step"
        sideSub="Whether you are starting from scratch or upgrading an existing product, we help you ship apps that are fast, reliable and easy to use."
        sideBullets={[
          "Android apps for customers, staff and partners",
          "Web‑to‑app conversion for mobile reach",
          "Ongoing maintenance and feature enhancements",
        ]}
      />

      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="max-w-2xl">
            <p className="marketing-eyebrow">Solutions</p>
            <h2 className="marketing-heading mt-3">Our app development services</h2>
            <p className="marketing-body mt-4">
              We support you throughout the lifecycle of your mobile app—from idea and design to
              development, launch and maintenance.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appServices.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border-2 border-amber-400/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#F76902] hover:shadow-lg hover:shadow-amber-400/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-amber-400 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902] group-hover:bg-amber-50">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <h3 className="marketing-subheading">{service.title}</h3>
                  {"badge" in service && service.badge ? (
                    <span className="rounded-full border border-amber-400/70 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#F76902]">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <p className="marketing-body mt-2">{service.description}</p>
                {"highlight" in service && service.highlight ? (
                  <p className="mt-2 text-xs font-semibold text-[#F76902]">{service.highlight}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceNarrativeSection
        sectionId="app-development-approach"
        headingId="app-narrative-heading"
        eyebrow="How we work"
        title="Apps that support real business workflows—not just screens in a store listing."
        paragraphs={[
          `At ${siteConfig.shortName}, we align product, design and engineering on one plan so releases stay predictable and stakeholders see progress every sprint.`,
          "We favour pragmatic architecture: integrations, offline behaviour and analytics hooks where they matter—without over‑engineering a first release.",
          "From MVPs to mature products, we document assumptions, APIs and release steps so your team or ours can keep shipping with confidence.",
        ]}
        ctaLabel="Discuss your app idea"
        rightVisual={
          <div className="flex min-h-[220px] w-full max-w-[380px] items-center justify-center rounded-2xl border border-amber-400/40 bg-linear-to-br from-amber-50/60 to-white p-8 shadow-sm">
            <Smartphone className="h-28 w-28 text-[#F76902]/20" strokeWidth={1.25} aria-hidden />
          </div>
        }
      />

      <WebDevStatsSection />

      <section className="relative overflow-hidden border-t border-amber-400/30 bg-linear-to-b from-amber-50/35 via-white to-white py-10 md:py-14 lg:py-16">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(247,105,2,0.09),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <p className="marketing-eyebrow">Quality & delivery</p>
            <h2 className="marketing-heading mt-3">Why our app projects tend to ship smoother</h2>
            <p className="marketing-body mt-4">
              We focus on clear UX, solid engineering and practical security so your users trust the
              experience—and you can iterate after launch without surprises.
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

      <ServiceProcessSection
        heading="App development process"
        intro="From discovery to store listing—structured steps so you always know what's in progress and what's next."
        steps={processSteps}
        ctaLabel="Plan your app build"
        progressAriaLabel="App development process steps"
        footerSuffix="ready to ship"
      />

      <Contact />
    </div>
  );
}
