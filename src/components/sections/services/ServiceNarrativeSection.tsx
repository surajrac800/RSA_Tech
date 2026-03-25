import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type ServiceNarrativeSectionProps = {
  sectionId?: string;
  headingId: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  ctaLabel: string;
  ctaHref?: string;
  rightVisual?: ReactNode;
};

export function ServiceNarrativeSection({
  sectionId,
  headingId,
  eyebrow,
  title,
  paragraphs,
  ctaLabel,
  ctaHref = "/contact",
  rightVisual,
}: ServiceNarrativeSectionProps) {
  return (
    <section
      id={sectionId}
      className="border-t border-amber-400/30 bg-white py-8 md:py-10"
      aria-labelledby={headingId}
    >
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="marketing-eyebrow">{eyebrow}</p>
            <h2
              id={headingId}
              className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl md:leading-snug lg:text-[1.85rem] lg:leading-snug"
            >
              {title}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600 md:text-base md:leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Button
              asChild
              className="mt-6 rounded-[30px] bg-[#F76902] px-6 text-sm font-semibold text-white hover:bg-[#f9802b] md:text-base"
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          {rightVisual ? (
            <div className="relative flex justify-center lg:justify-end">{rightVisual}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
