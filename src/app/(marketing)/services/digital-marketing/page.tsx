import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MarketingServiceHero } from "@/components/sections/services/MarketingServiceHero";
import { ServiceNarrativeSection } from "@/components/sections/services/ServiceNarrativeSection";
import { WebDevStatsSection } from "@/components/sections/services/WebDevStatsSection";
import { ServiceProcessSection } from "@/components/sections/services/ServiceProcessSection";
import { Contact } from "@/components/sections/Contact";
import {
  BarChart3,
  LineChart,
  Megaphone,
  Radar,
  Search,
  Share2,
  Mail,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services | RSA Tech Softwares",
  description:
    "Result-driven digital marketing services covering SEO, PPC, social media, and email marketing to grow visibility, leads, and revenue.",
};

const solutions = [
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your rankings on Google and drive long‑term organic traffic with technical, on‑page, and content SEO.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & PPC",
    description:
      "Launch high‑converting search and display campaigns that bring instant, measurable traffic and leads.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build brand authority and engage your audience across Facebook, Instagram, LinkedIn, and more.",
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description:
      "Data‑driven lead generation, retargeting, and sales‑focused ad campaigns on popular social platforms.",
  },
  {
    icon: Mail,
    title: "Content & Email Marketing",
    description:
      "Turn visitors into loyal customers with content, newsletters, and automation flows that nurture relationships.",
  },
] as const;

const performanceBenefits = [
  {
    icon: Target,
    title: "Goals tied to metrics",
    description:
      "Campaigns are structured around measurable outcomes—leads, cost per acquisition, and revenue—not vanity numbers alone.",
  },
  {
    icon: Radar,
    title: "Full-funnel visibility",
    description:
      "We connect search, paid, social and email so prospects see consistent messaging wherever they research you.",
  },
  {
    icon: LineChart,
    title: "Iterate with data",
    description:
      "Reporting and testing rhythms mean budgets shift toward what works instead of running on autopilot.",
  },
  {
    icon: Megaphone,
    title: "Creative + execution",
    description:
      "Copy, creatives and landing experience stay aligned with your brand while staying practical to optimize.",
  },
] as const;

const processSteps = [
  {
    title: "Analysis",
    description:
      "Business and competitor analysis to understand your market, audience and current performance baseline.",
  },
  {
    title: "Strategy",
    description:
      "A tailored digital roadmap aligned with your goals, budget and timelines across the right channels.",
  },
  {
    title: "Execution",
    description:
      "Launching and tuning campaigns across SEO, ads, social and email with clear ownership and checkpoints.",
  },
  {
    title: "Optimization",
    description:
      "Continuous monitoring, A/B testing and budget adjustments to improve ROI week on week.",
  },
  {
    title: "Reporting",
    description:
      "Transparent monthly reports with key metrics, insights and proposed next steps—no jargon walls.",
  },
] as const;

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white">
      <MarketingServiceHero
        badge="Digital marketing"
        titleBefore="Result‑driven digital marketing"
        titleHighlight="that grows your business"
        description={`We help businesses increase visibility, generate quality leads, and boost revenue with data‑driven strategies tailored to your goals—with ${siteConfig.shortName}.`}
        checks={[
          "ROI‑focused strategies & transparent reporting",
          "Dedicated channel experts across search, social & ads",
        ]}
        primaryCta={{ href: "/contact", label: "Get free marketing audit" }}
        secondaryCta={{ href: siteConfig.links.whatsapp, label: "WhatsApp us" }}
        sideIcon={BarChart3}
        sideCardTitle="Measurable online growth"
        sideEyebrow="Digital marketing"
        sideHeadline="Search, social, ads and email—working together"
        sideSub="Whether you are a startup or an established brand, we combine strategy, creativity, and analytics to win more customers online."
        sideBullets={[
          "100+ campaigns planned and optimized end‑to‑end",
          "Clear reporting so you know where spend goes",
          "Channel mix aligned to your industry and stage",
        ]}
      />

      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="max-w-2xl">
            <p className="marketing-eyebrow">Solutions</p>
            <h2 className="marketing-heading mt-3">Comprehensive digital marketing solutions</h2>
            <p className="marketing-body mt-4">
              From search and social to paid advertising and email, we cover the essential channels
              your business needs to grow online.
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

      <ServiceNarrativeSection
        sectionId="digital-marketing-approach"
        headingId="dm-narrative-heading"
        eyebrow="How we work"
        title="Marketing that connects spend to outcomes—not just activity."
        paragraphs={[
          `At ${siteConfig.shortName}, we treat channels as parts of one system: your website, ads, organic presence and CRM should tell the same story and feed the same goals.`,
          "Strategists and specialists collaborate on one roadmap so budgets, creative and landing experiences stay aligned from the first audit through monthly optimization.",
          "Whether you are validating a new offer or scaling an established brand, we deliver clear documentation, sensible tooling choices and reporting your leadership can trust.",
        ]}
        ctaLabel="Discuss your marketing goals"
        rightVisual={
          <div className="flex min-h-[220px] w-full max-w-[380px] items-center justify-center rounded-2xl border border-amber-400/40 bg-linear-to-br from-amber-50/60 to-white p-8 shadow-sm">
            <Megaphone className="h-28 w-28 text-[#F76902]/20" strokeWidth={1.25} aria-hidden />
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
            <p className="marketing-eyebrow">Why work with us</p>
            <h2 className="marketing-heading mt-3">Why our marketing engagements perform better</h2>
            <p className="marketing-body mt-4">
              We combine strategy, execution and honest reporting so every rupee you invest is aimed
              at growth you can see in your pipeline and revenue.
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
        heading="Our digital marketing process"
        intro="A clear, results‑oriented workflow from analysis to reporting—so you always know what's live, what's testing and what's next."
        steps={processSteps}
        ctaLabel="Start a marketing conversation"
        progressAriaLabel="Digital marketing process steps"
        footerSuffix="ready to scale"
      />

      <Contact />
    </div>
  );
}
