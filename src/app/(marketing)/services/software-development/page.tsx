import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MarketingServiceHero } from "@/components/sections/services/MarketingServiceHero";
import { ServiceNarrativeSection } from "@/components/sections/services/ServiceNarrativeSection";
import { WebDevStatsSection } from "@/components/sections/services/WebDevStatsSection";
import { ServiceProcessSection } from "@/components/sections/services/ServiceProcessSection";
import { Contact } from "@/components/sections/Contact";
import { Layers, ShieldCheck, Puzzle, CloudCog } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Services | RSA Tech Softwares",
  description:
    "Custom CRM, ERP, billing, workflow automation and cloud software solutions that streamline operations and scale with your business.",
};

const softwareSolutions = [
  {
    title: "CRM Software",
    description:
      "Manage customer relationships, leads, and sales pipelines in a system shaped around how you sell.",
  },
  {
    title: "ERP Systems",
    description:
      "Integrate departments and processes into a coherent system for planning, inventory and finance visibility.",
  },
  {
    title: "Billing & Inventory",
    description:
      "Streamline invoicing, payment tracking, and stock management in one centralized operational hub.",
  },
  {
    title: "Workflow Automation",
    description:
      "Replace repetitive manual tasks with automation tailored to approvals, notifications and hand-offs.",
  },
  {
    title: "Cloud Applications",
    description:
      "Secure, accessible, scalable cloud‑based tools your team can rely on from anywhere.",
  },
] as const;

const performanceBenefits = [
  {
    icon: Puzzle,
    title: "Mapped to how you work",
    description:
      "Discovery focused on real processes and edge cases—not generic templates—so the software fits your operations.",
  },
  {
    icon: Layers,
    title: "Modular, evolvable systems",
    description:
      "Architecture that lets you add departments, integrations and reports without rebuilding from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Security-minded by design",
    description:
      "Roles, permissions, audit trails and data handling patterns suited to sensitive business data.",
  },
  {
    icon: CloudCog,
    title: "Built for uptime & change",
    description:
      "Deployment, monitoring and iteration practices so improvements roll out with control and rollback options.",
  },
] as const;

const processSteps = [
  {
    title: "Discovery",
    description:
      "Deep dive into workflows, stakeholders, data and constraints—so scope reflects reality on the ground.",
  },
  {
    title: "Architecture",
    description:
      "Technical blueprint for modules, integrations, hosting and security aligned to your scale and compliance needs.",
  },
  {
    title: "Build",
    description:
      "Iterative delivery with visible milestones, testable increments and room for feedback between sprints.",
  },
  {
    title: "QA & UAT",
    description:
      "Testing with your team on realistic scenarios until flows, roles and reports behave as agreed.",
  },
  {
    title: "Launch & support",
    description:
      "Go‑live planning, training handover, monitoring and a path for enhancements as usage grows.",
  },
] as const;

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-white">
      <MarketingServiceHero
        badge="Software development"
        titleBefore="Custom software solutions"
        titleHighlight="that simplify your business"
        description={`We build tailor‑made software that automates operations, improves efficiency, and scales with your business—with ${siteConfig.shortName}—instead of forcing you into generic tools.`}
        checks={[
          "CRM, ERP, billing and automation expertise",
          "Secure, role‑based access for growing teams",
        ]}
        primaryCta={{ href: "/contact", label: "Get software quote" }}
        secondaryCta={{ href: siteConfig.links.whatsapp, label: "WhatsApp us" }}
        sideIcon={Layers}
        sideEyebrow="Custom software"
        sideCardTitle="Systems that match your ops"
        sideHeadline="From spreadsheets chaos to one coherent workflow"
        sideSub="From CRM and ERP to workflow automation and cloud apps—we focus on solving real business problems with technology."
        sideBullets={[
          "CRM, ERP and billing under one strategy",
          "Dashboards and portals your team will actually use",
          "Automation that removes repetitive back‑office work",
        ]}
      />

      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="max-w-2xl">
            <p className="marketing-eyebrow">Solutions</p>
            <h2 className="marketing-heading mt-3">Software solutions we offer</h2>
            <p className="marketing-body mt-4">
              Choose the right mix of modules or let us design a fully custom system around your
              workflows and growth plans.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softwareSolutions.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border-2 border-amber-400/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#F76902] hover:shadow-lg hover:shadow-amber-400/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-amber-400 bg-amber-50 text-[#F76902] transition-colors group-hover:border-[#F76902] group-hover:bg-amber-50">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="marketing-subheading mt-4">{item.title}</h3>
                <p className="marketing-body mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceNarrativeSection
        sectionId="software-development-approach"
        headingId="sw-narrative-heading"
        eyebrow="How we work"
        title="Custom software shaped around your processes—not the other way around."
        paragraphs={[
          `At ${siteConfig.shortName}, we start from how teams actually capture data, approve work and report upward—then design modules, roles and integrations that reinforce good habits.`,
          "Engineers and stakeholders share a living backlog so trade‑offs on scope, security and timeline stay visible instead of surfacing at go‑live.",
          "Whether you are replacing spreadsheets or scaling past off‑the‑shelf limits, we deliver documentation and onboarding so adoption sticks.",
        ]}
        ctaLabel="Talk about your operations stack"
        rightVisual={
          <div className="flex min-h-[220px] w-full max-w-[380px] items-center justify-center rounded-2xl border border-amber-400/40 bg-linear-to-br from-amber-50/60 to-white p-8 shadow-sm">
            <Layers className="h-28 w-28 text-[#F76902]/20" strokeWidth={1.25} aria-hidden />
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
            <p className="marketing-eyebrow">Why go custom</p>
            <h2 className="marketing-heading mt-3">Why custom software pays off for growing teams</h2>
            <p className="marketing-body mt-4">
              Off‑the‑shelf tools rarely match every hand‑off. Purpose‑built software aligns data,
              permissions and automation with how you already win deals and serve customers.
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
        heading="Custom software delivery process"
        intro="Structured phases from discovery to support—so stakeholders see progress and risks early."
        steps={processSteps}
        ctaLabel="Plan your custom build"
        progressAriaLabel="Software development process steps"
        footerSuffix="ready to deploy"
      />

      <Contact />
    </div>
  );
}
