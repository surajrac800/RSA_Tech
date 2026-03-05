import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingBag,
  LayoutTemplate,
  Code2,
  Layers,
  Rocket,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | RSA Tech Softwares",
  description:
    "High-performance websites and web applications that are fast, secure, SEO-friendly, and built to convert visitors into customers.",
};

const solutions = [
  {
    icon: Globe,
    title: "Informative Websites",
    description:
      "Corporate, service, portfolio and business websites designed to present your brand clearly and professionally.",
  },
  {
    icon: ShoppingBag,
    title: "E‑Commerce Websites",
    description:
      "Fully functional online stores with secure payments, product management and order tracking.",
  },
  {
    icon: LayoutTemplate,
    title: "CMS Websites",
    description:
      "Easy‑to‑manage WordPress, Shopify and headless CMS sites for teams that need full content control.",
  },
  {
    icon: Code2,
    title: "Custom Code Websites",
    description:
      "High‑performance React, Next.js and Node.js solutions tailored to your specific business needs.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description:
      "High‑converting landing pages crafted for marketing campaigns, lead generation and product launches.",
  },
  {
    icon: Smartphone,
    title: "SaaS & Web Applications",
    description:
      "Scalable cloud‑based web applications and dashboards to power your products and internal tools.",
  },
];

const processSteps = [
  {
    title: "Requirements",
    description: "We gather detailed requirements and understand your business goals.",
  },
  {
    title: "Design",
    description: "We create wireframes and UI designs focused on usability and branding.",
  },
  {
    title: "Development",
    description: "We turn approved designs into clean, maintainable, and performant code.",
  },
  {
    title: "Testing",
    description: "We test across devices, browsers and user flows to ensure a smooth experience.",
  },
  {
    title: "Launch",
    description: "We deploy, monitor and support your website post‑launch.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50/70 via-background to-background">
        <div className="container py-16 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Web Development
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                High‑Performance Websites{" "}
                <span className="rsa-gradient-text">
                  That Convert Visitors Into Customers
                </span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                We design and build fast, secure and SEO‑friendly websites that represent your
                brand and drive real business results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rsa-gradient-bg text-white shadow-sm hover:opacity-90"
                >
                  <Link href="/contact">Get Website Quote</Link>
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
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-600" />
                  Mobile‑first, SEO‑optimized, and performance‑tuned builds.
                </span>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">Website solutions for every business</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                From informative sites to complex e‑commerce and SaaS platforms, we cover the full
                range of web development requirements.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Informative business and service websites</li>
                <li>• Product catalog and e‑commerce experiences</li>
                <li>• CMS‑driven marketing websites</li>
                <li>• Custom React/Next.js web apps and portals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Website Solutions for Every Business
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose from a wide range of website types depending on your business model and growth
              stage.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our websites perform better */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Our Websites Perform Better
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every website we ship is built with performance, security and SEO in mind so that
                your customers get the best possible experience.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Mobile‑first design optimized for all screen sizes.</li>
                <li>• SEO‑optimized structure ready to rank on Google.</li>
                <li>• Fast loading speed with performance‑tuned code.</li>
                <li>• Secure architecture with HTTPS and best practices.</li>
              </ul>
            </div>

            {/* Process */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold">Website Development Process</h3>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {processSteps.map((step) => (
                  <div key={step.title} className="flex flex-col rounded-xl border bg-muted/60 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                      {step.title}
                    </div>
                    <p className="mt-1 text-xs">{step.description}</p>
                  </div>
                ))}
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
              Let’s Build Your Website the Right Way
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Share your requirements and we&apos;ll propose the right approach, stack and
              timeline for your new website.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
