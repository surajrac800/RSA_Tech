import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Layers, ShieldCheck, Cloud, Workflow } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Software Development Services | RSA Tech Softwares",
  description:
    "Custom CRM, ERP, billing, workflow automation and cloud software solutions that streamline operations and scale with your business.",
};

const quoteServiceOptions = [
  { value: "crm", label: "CRM Software" },
  { value: "erp", label: "ERP Systems" },
  { value: "billing-inventory", label: "Billing & Inventory" },
  { value: "workflow-automation", label: "Workflow Automation" },
  { value: "cloud-app", label: "Cloud Applications" },
  { value: "other", label: "Other" },
];

const softwareSolutions = [
  {
    title: "CRM Software",
    description: "Manage customer relationships, leads, and sales pipelines effectively.",
  },
  {
    title: "ERP Systems",
    description:
      "Integrate all your departments and processes into a single system for better control.",
  },
  {
    title: "Billing & Inventory",
    description:
      "Streamline invoicing, payment tracking, and stock management in one centralized place.",
  },
  {
    title: "Workflow Automation",
    description:
      "Reduce repetitive manual tasks with intelligent automation tailored to your business.",
  },
  {
    title: "Cloud Applications",
    description:
      "Secure, accessible, and scalable cloud‑based solutions available from anywhere, anytime.",
  },
];

const approach = [
  {
    title: "Requirement‑Driven",
    description: "We build exactly what you need based on detailed analysis and discovery.",
  },
  {
    title: "Modular Architecture",
    description: "A flexible codebase that allows you to add or change modules over time.",
  },
  {
    title: "Secure Data Handling",
    description: "Strong focus on data privacy, access control and compliance.",
  },
  {
    title: "Continuous Improvement",
    description: "Support and updates to keep your software aligned with your business.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50/70 via-background to-background">
        <div className="container py-16 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Software Development
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Custom Software Solutions{" "}
                <span className="rsa-gradient-text">That Simplify Your Business</span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                We build tailor‑made software that automates operations, improves efficiency, and
                scales with your business instead of forcing you to adjust to generic tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rsa-gradient-bg text-white shadow-sm hover:opacity-90"
                >
                  <Link href="#software-quote">Get Software Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-200 bg-white/80 text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/contact">WhatsApp Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">Software solutions we offer</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                From CRM and ERP to workflow automation and cloud apps, we focus on solving real
                business problems with technology.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• CRM, ERP and billing systems</li>
                <li>• Automation of repetitive back‑office tasks</li>
                <li>• Dashboards and management portals</li>
                <li>• Secure, role‑based access for your team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Software Solutions We Offer
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the right mix of software modules or let us design a fully custom system for
              your workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softwareSolutions.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why custom software */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose Custom Software?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Off‑the‑shelf tools rarely match your exact processes. Custom software is built
                around how your business actually works.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Built specifically for you:</strong> Solves your unique operational
                    challenges and edge cases.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Scalable & flexible:</strong> Grows as your team, branches and
                    processes grow.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Better security:</strong> Custom roles, permissions and security
                    protocols tuned to your needs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>
                    <strong>Long‑term savings:</strong> No recurring license fees for generic
                    software you don&apos;t fully use.
                  </span>
                </li>
              </ul>
            </div>

            {/* Approach */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold">Our Development Approach</h3>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {approach.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col rounded-xl border bg-muted/60 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                    <p className="mt-1 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section
        id="software-quote"
        className="py-16 md:py-24 bg-muted/40"
      >
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Build Software That Works the Way You Do
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us about your current tools, bottlenecks and ideal workflows, and we&apos;ll
                propose a custom solution.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold">Get a Free Software Development Quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form below and our team will contact you with possible modules, tech
                stack and estimates.
              </p>
              <div className="mt-6">
                <QuoteForm serviceOptions={quoteServiceOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Get a Custom Software Solution for Your Business
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Let&apos;s discuss which processes to automate and how software can give your team
              more time to focus on growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90"
              >
                <Link href="/contact">Get Custom Solution</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

