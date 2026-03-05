import type { Metadata } from "next";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FaqHero3D } from "@/components/sections/FaqHero3D";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | RSA Tech Softwares",
  description:
    "Answers to common questions about our digital marketing, web development, app development and software services.",
};

const faqs = [
  {
    q: "Do you work with startups?",
    a: "Yes, we work closely with startups and growing businesses. We understand early‑stage constraints and design solutions that are scalable and budget‑friendly.",
  },
  {
    q: "Do you provide monthly digital marketing packages?",
    a: "Yes, we offer flexible monthly plans tailored to your goals and budget, covering SEO, social media, ads and content as needed.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. We handle redesigns, migrations and performance improvements while keeping your SEO rankings and important content intact.",
  },
  {
    q: "Do you offer post‑launch support?",
    a: "Yes, we provide maintenance and support plans for websites, apps and software to keep them secure, updated and running smoothly.",
  },
  {
    q: "How long does a website take to build?",
    a: "Typical informative websites can take 7–21 days depending on the scope and content readiness. More complex projects may take longer.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-[-60px] top-32 h-60 w-60 rounded-full bg-purple-500/15 blur-3xl" />
        </div>
        <div className="container relative py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] lg:items-center">
            {/* Left – copy */}
            <div className="max-w-xl space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300 ring-1 ring-blue-500/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Help Center · FAQ
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Answers that remove
                <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  friction from your project.
                </span>
              </h1>
              <p className="text-sm text-slate-300 md:text-base">
                Get quick clarity on timelines, support, pricing and how RSA Tech Softwares partners
                with you from first call to ongoing growth. If you do not find your question here,
                our team is one message away.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Website, app & marketing FAQs
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Transparent process & support
                </span>
              </div>
            </div>

            {/* Right – 3D animation */}
            <div className="lg:justify-self-end">
              <FaqHero3D />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}

