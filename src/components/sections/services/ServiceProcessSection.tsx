import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export type ServiceProcessStep = {
  title: string;
  description: string;
};

type ServiceProcessSectionProps = {
  eyebrow?: string;
  heading: string;
  intro: string;
  steps: readonly ServiceProcessStep[] | ServiceProcessStep[];
  ctaLabel?: string;
  ctaHref?: string;
  progressAriaLabel?: string;
  /** Shown as “Step N of N — {footerSuffix}” on desktop */
  footerSuffix?: string;
};

export function ServiceProcessSection({
  eyebrow = "How we work",
  heading,
  intro,
  steps,
  ctaLabel = "Plan your project with us",
  ctaHref = "/contact",
  progressAriaLabel = "Process steps",
  footerSuffix = "ready to go",
}: ServiceProcessSectionProps) {
  const total = steps.length;

  return (
    <section className="relative overflow-hidden border-t border-amber-400/30 bg-linear-to-b from-white via-amber-50/25 to-white py-10 md:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(247,105,2,0.07),transparent_68%)]"
        aria-hidden
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="marketing-eyebrow">{eyebrow}</p>
          <h2 className="marketing-heading mt-3">{heading}</h2>
          <p className="marketing-body mt-4">{intro}</p>
        </div>

        <div className="relative mx-auto mt-12 hidden max-w-5xl md:block lg:mt-14">
          <div
            className="relative rounded-full border border-amber-200/80 bg-amber-50/90 p-1 shadow-inner shadow-amber-100/50"
            role="list"
            aria-label={progressAriaLabel}
          >
            <div className="relative h-2.5 overflow-hidden rounded-full bg-amber-100/70">
              <div className="h-full w-full origin-left rounded-full bg-linear-to-r from-[#F76902] via-amber-500 to-amber-300 shadow-[0_0_20px_rgba(247,105,2,0.25)]" />
              <div className="pointer-events-none absolute inset-0 flex" aria-hidden>
                {steps.slice(0, -1).map((_, i) => (
                  <div key={i} className="flex-1 border-r border-white/35 last:border-r-0" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative -mt-[19px] flex w-full justify-between gap-1 px-0 sm:gap-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex min-w-0 flex-1 flex-col items-center"
                role="listitem"
              >
                <span
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F76902] bg-white text-xs font-bold text-[#F76902] shadow-md shadow-amber-200/40 ring-4 ring-white"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-center text-sm font-bold tracking-tight text-neutral-900">
                  {step.title}
                </p>
                <p className="mt-2 text-center text-xs leading-relaxed text-neutral-600 md:text-[13px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#F76902]/90">
            Step {total} of {total} — {footerSuffix}
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-lg md:hidden">
          <div className="absolute left-[15px] top-3 bottom-3 w-2 rounded-full bg-amber-100/90 shadow-inner" aria-hidden />
          <div
            className="absolute left-[15px] top-3 h-[calc(100%-24px)] w-2 overflow-hidden rounded-full bg-amber-100/90"
            aria-hidden
          >
            <div className="h-full w-full rounded-full bg-linear-to-b from-[#F76902] via-amber-500 to-amber-200" />
          </div>
          <ul className="relative space-y-6" role="list">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 pl-1">
                <div
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#F76902] bg-white text-[11px] font-bold text-[#F76902] shadow-md ring-2 ring-white"
                  aria-hidden
                >
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1 rounded-2xl border border-amber-400/40 bg-white/90 px-4 py-3 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#F76902]">{step.title}</p>
                  <p className="marketing-body mt-1 text-sm">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Button
            asChild
            size="lg"
            className="rounded-[30px] bg-[#F76902] px-8 font-semibold text-white shadow-md hover:bg-[#f9802b]"
          >
            <Link href={ctaHref} className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
