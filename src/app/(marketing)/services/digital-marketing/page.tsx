import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart3, Search, Megaphone, Share2, Mail } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Digital Marketing Services | RSA Tech Softwares",
  description:
    "Result-driven digital marketing services covering SEO, PPC, social media, and email marketing to grow visibility, leads, and revenue.",
};

const quoteServiceOptions = [
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "seo", label: "SEO (Search Engine Optimization)" },
  { value: "ppc", label: "Google Ads & PPC" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "content-email", label: "Content & Email Marketing" },
  { value: "other", label: "Other" },
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50/70 via-background to-background">
        <div className="container py-16 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Digital Marketing
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Result‑Driven Digital Marketing{" "}
                <span className="rsa-gradient-text">That Grows Your Business</span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                We help businesses increase visibility, generate quality leads, and boost revenue
                with data‑driven digital marketing strategies tailored to your goals and industry.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rsa-gradient-bg text-white shadow-sm hover:opacity-90"
                >
                  <Link href="/contact">Get Free Marketing Audit</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-200 bg-white/80 text-blue-600 hover:bg-blue-50"
                >
                  <Link href="#quote">Request a Free Quote</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>100+ marketing campaigns managed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>ROI‑focused strategies & reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Dedicated marketing experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Transparent performance tracking</span>
                </div>
              </div>
            </div>

            {/* Simple stats card */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold">Digital Growth for Modern Businesses</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Whether you are a startup or an established brand, we combine strategy, creativity,
                and analytics to help you win more customers online.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border bg-muted/60 p-4 text-center">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Campaigns
                  </p>
                </div>
                <div className="rounded-xl border bg-muted/60 p-4 text-center">
                  <p className="text-2xl font-bold">ROI</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Focused
                  </p>
                </div>
                <div className="rounded-xl border bg-muted/60 p-4 text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-muted-foreground">
              From search and social to paid advertising and email, we cover the essential
              channels your business needs to grow online.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={Search}
              title="SEO (Search Engine Optimization)"
              description="Improve your rankings on Google and drive long‑term organic traffic with technical, on‑page, and content SEO."
            />
            <ServiceCard
              icon={BarChart3}
              title="Google Ads & PPC"
              description="Launch high‑converting search and display campaigns that bring instant, measurable traffic and leads."
            />
            <ServiceCard
              icon={Share2}
              title="Social Media Marketing"
              description="Build brand authority and engage your audience across Facebook, Instagram, LinkedIn, and more."
            />
            <ServiceCard
              icon={Megaphone}
              title="Social Media Advertising"
              description="Run data‑driven lead generation, retargeting, and sales‑focused ad campaigns on popular social platforms."
            />
            <ServiceCard
              icon={Mail}
              title="Content & Email Marketing"
              description="Turn visitors into loyal customers with content, newsletters, and automation flows that nurture relationships."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              How We Grow Your Business Online
            </h2>
            <p className="mt-4 text-muted-foreground">
              A clear, results‑oriented workflow from analysis to reporting ensures every rupee you
              invest works harder for your brand.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <ProcessStep step="01" title="Analysis" description="Business and competitor analysis to understand your market and audience." />
            <ProcessStep step="02" title="Strategy" description="Creating a tailored digital marketing roadmap aligned with your goals." />
            <ProcessStep step="03" title="Execution" description="Launching campaigns across SEO, ads, and social media channels." />
            <ProcessStep step="04" title="Optimization" description="Monitoring performance and continuously improving results." />
            <ProcessStep step="05" title="Reporting" description="Transparent monthly reports with key metrics and next steps." />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Partner with RSA Tech Softwares for Digital Marketing?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We combine strategy, creativity, and technology to deliver measurable growth for
                your business.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Customized marketing strategies for your industry and goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Performance‑driven approach focused on leads and ROI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Transparent reporting and clear communication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                  <span>Dedicated experts managing and optimizing your campaigns.</span>
                </li>
              </ul>
            </div>

            {/* Quote form */}
            <div
              id="quote"
              className="rounded-2xl border bg-card p-6 shadow-sm md:p-8"
            >
              <h3 className="text-xl font-semibold">Get a Free Digital Marketing Quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and our team will get back to you with a tailored plan.
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
              Ready to Grow Your Business Online?
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Talk to our digital marketing experts today and get a clear roadmap for scaling your
              presence across search, social, and ads.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type ServiceCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-base font-semibold md:text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
};

function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col rounded-2xl border bg-card p-5 text-sm shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
        {step}
      </span>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
