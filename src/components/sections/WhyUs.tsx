import { siteConfig } from "@/config/site";
import { Lightbulb, Users, Brain, Headphones } from "lucide-react";

const featureCards = [
  {
    icon: Lightbulb,
    title: "Tailored digital solutions",
    description:
      "Roadmaps and builds shaped around your industry, budget and timelines—not generic templates.",
  },
  {
    icon: Users,
    title: "One accountable team",
    description:
      "Designers, developers and marketers sit together so handoffs stay fast and expectations stay clear.",
  },
  {
    icon: Brain,
    title: "Modern stacks & smart automation",
    description:
      "We use proven frameworks and practical automation so your systems stay maintainable as you scale.",
  },
  {
    icon: Headphones,
    title: "Responsive support",
    description:
      "You get direct access during delivery and sensible follow-up after launch—no disappearing act.",
  },
];

export function WhyUs() {
  return (
    <section className="home-section-py relative bg-white">
      <div className="container relative max-w-6xl">
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <p className="marketing-eyebrow">Why {siteConfig.shortName}</p>
          <h2 className="marketing-heading mt-3">
            Why Choose {siteConfig.shortName} for{" "}
            <span className="text-[#F76902] italic">Digital Growth &amp; Automation</span>?
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left column — narrative */}
          <div className="space-y-7">
            <p className="text-base leading-[1.75] text-neutral-600 md:text-[17px] md:leading-[1.8]">
              Businesses pick <strong className="font-semibold text-neutral-900">RSA Tech Softwares</strong>{" "}
              when they want one partner for{" "}
              <strong className="font-semibold text-neutral-900">websites, apps, software and performance marketing</strong>{" "}
              without juggling five different vendors. We focus on clarity, measurable outcomes and
              delivery you can plan around—whether you are a growing MSME or a scaling startup.
            </p>

            <div
              className="h-px w-full bg-linear-to-r from-transparent via-neutral-300/90 to-transparent"
              aria-hidden
            />

            <div>
              <h3 className="marketing-subheading leading-snug">
                Tailored{" "}
                <span className="font-semibold italic text-[#F76902]">roadmaps &amp; delivery</span>{" "}
                <span className="font-bold not-italic text-neutral-900">
                  to support your next phase
                </span>
              </h3>
              <ul className="mt-5 space-y-4 pl-1 text-base leading-[1.75] text-neutral-600 md:text-[17px] md:leading-[1.8]">
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902] ring-4 ring-[#F76902]/15" aria-hidden />
                  <span>
                    We align tech and campaigns with{" "}
                    <strong className="font-semibold text-neutral-900">revenue, leads and efficiency</strong>, not
                    vanity metrics alone.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902] ring-4 ring-[#F76902]/15" aria-hidden />
                  <span>
                    Our <strong className="font-semibold text-neutral-900">integrated delivery model</strong> keeps
                    UX, engineering and growth work in sync from kickoff to optimisation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902] ring-4 ring-[#F76902]/15" aria-hidden />
                  <span>
                    You get <strong className="font-semibold text-neutral-900">transparent timelines and pricing</strong>{" "}
                    so decisions stay practical for your team and your P&amp;L.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column — 2×2 cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {featureCards.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-amber-400/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F76902]/80 hover:shadow-xl hover:shadow-amber-400/25 md:p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-amber-400/70 bg-amber-50 text-[#F76902] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </div>
                  <h4 className="marketing-subheading leading-snug">
                    {item.title}
                  </h4>
                  <p className="marketing-body mt-3">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
