import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  RefreshCcw,
  Palette,
  PlugZap,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "App Development Services | RSA Tech Softwares",
  description:
    "Android and cross‑platform mobile app development services focused on performance, UX, and business growth.",
};

const quoteServiceOptions = [
  { value: "android-app", label: "Android App Development" },
  { value: "web-to-app", label: "Web to App Conversion" },
  { value: "ui-ux", label: "App UI/UX Design" },
  { value: "api-integration", label: "API Integration" },
  { value: "app-maintenance", label: "App Maintenance" },
  { value: "other", label: "Other" },
];

const appServices = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Native Android applications with smooth performance and rich features.",
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
];

const workflow = [
  {
    title: "Planning",
    description: "Understanding the app idea, business goals and target audience.",
  },
  {
    title: "Design",
    description: "Crafting clear information architecture and mobile‑first UI/UX.",
  },
  {
    title: "Build",
    description: "Developing the app with clean, scalable and maintainable code.",
  },
  {
    title: "Test",
    description: "Functional, device and performance testing for a smooth experience.",
  },
  {
    title: "Deploy",
    description: "Publishing to Google Play Store and assisting with releases.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50/70 via-background to-background">
        <div className="container py-16 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                App Development
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Smart Mobile App Solutions{" "}
                <span className="rsa-gradient-text">Built for Growth</span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                From Android apps to web‑to‑app conversion, we build scalable and user‑friendly
                mobile applications that help businesses engage customers and streamline
                operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rsa-gradient-bg text-white shadow-sm hover:opacity-90"
                >
                  <Link href="#app-quote">Get App Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-200 bg-white/80 text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/contact">WhatsApp Now</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">App development for modern businesses</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Whether you&apos;re starting from an idea or upgrading an existing product, we help
                you ship apps that are fast, reliable and easy to use.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Android apps for customers, staff and partners</li>
                <li>• Web‑to‑app conversion to reach users on mobile</li>
                <li>• API‑driven apps that connect to your backend</li>
                <li>• Ongoing maintenance and feature enhancements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Our App Development Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              We support you throughout the lifecycle of your mobile app — from idea and design to
              development, launch and maintenance.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {appServices.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <h3 className="text-base font-semibold md:text-lg">{service.title}</h3>
                  {service.badge && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                {service.highlight && (
                  <p className="mt-2 text-xs font-semibold text-blue-700">
                    {service.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose Our App Development?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We focus on clean UI, smooth performance and business‑focused features that create
                real impact for your users.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Clean UI & smooth in‑app navigation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Features aligned with your business workflows and KPIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Affordable cost with scalable architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Secure backend and data safety best practices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Ongoing technical support and maintenance.</span>
                </li>
              </ul>
            </div>

            {/* Workflow */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold">Our App Development Workflow</h3>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {workflow.map((step) => (
                  <div
                    key={step.title}
                    className="flex flex-col rounded-xl border bg-muted/60 p-4"
                  >
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

      {/* Quote section */}
      <section
        id="app-quote"
        className="py-16 md:py-24 bg-muted/40"
      >
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Turn Your Idea Into a Powerful Mobile App
              </h2>
              <p className="mt-4 text-muted-foreground">
                Share your app concept, target users and required features, and we&apos;ll help you
                transform it into a roadmap and implementation plan.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold">Get a Free App Development Quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form below and our team will contact you with timelines and estimates.
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
              Start Building Your App Today
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Let&apos;s discuss your requirements and define a clear, practical roadmap for your
              Android or cross‑platform app.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90"
              >
                <Link href="/contact">Start Building Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

