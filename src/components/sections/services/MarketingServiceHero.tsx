import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WebDevHeroBackdrop } from "@/components/sections/services/WebDevHeroBackdrop";

export type MarketingServiceHeroProps = {
  badge: string;
  titleBefore: string;
  titleHighlight: string;
  description: string;
  checks: readonly [string, string];
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  sideIcon: LucideIcon;
  sideEyebrow: string;
  sideCardTitle: string;
  sideHeadline: string;
  sideSub: string;
  sideBullets: readonly string[];
  sideCtaLabel?: string;
  sideCtaHref?: string;
};

export function MarketingServiceHero({
  badge,
  titleBefore,
  titleHighlight,
  description,
  checks,
  primaryCta,
  secondaryCta,
  sideIcon: SideIcon,
  sideEyebrow,
  sideCardTitle,
  sideHeadline,
  sideSub,
  sideBullets,
  sideCtaLabel = "Talk to our team",
  sideCtaHref = "/contact",
}: MarketingServiceHeroProps) {
  return (
    <section className="home-section-py relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
      <WebDevHeroBackdrop />
      <div className="container relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F76902]" />
              {badge}
            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
              {titleBefore} <span className="rsa-gradient-text">{titleHighlight}</span>
            </h1>

            <p className="mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">{description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                {checks[0]}
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                {checks[1]}
              </div>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-[30px] bg-[#F76902] px-7 text-base font-semibold text-white shadow-md hover:bg-[#f9802b]"
              >
                <Link href={primaryCta.href}>
                  <CheckCircle2 className="h-5 w-5" />
                  {primaryCta.label}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-[30px] border-2 border-amber-400/80 bg-white px-6 text-base font-semibold text-[#F76902] hover:bg-amber-50"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl border-2 border-amber-400/80 bg-white p-5 shadow-xl shadow-amber-400/15 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-400 bg-amber-50 text-[#F76902]">
                  <SideIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {sideEyebrow}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">{sideCardTitle}</p>
                </div>
              </div>

              <p className="mt-4 text-base font-semibold leading-snug text-neutral-900 md:text-lg">
                {sideHeadline}
              </p>
              <p className="mt-2 text-sm text-neutral-600">{sideSub}</p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                {sideBullets.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76902]" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Button
                  asChild
                  size="sm"
                  className="rounded-[30px] bg-[#F76902] px-5 text-xs font-semibold text-white hover:bg-[#f9802b]"
                >
                  <Link href={sideCtaHref}>{sideCtaLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
