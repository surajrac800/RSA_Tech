import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { ArrowUpRight, ExternalLink, ImageIcon } from "lucide-react";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | RSA Tech Softwares",
  description:
    "Selected work across digital marketing, websites, apps and custom software from RSA Tech Softwares.",
};

function ProofStrip({ item }: { item: PortfolioItem }) {
  const hasMetrics = item.proofMetrics && item.proofMetrics.length > 0;
  const hasImage = item.proofImage;
  if (!hasMetrics && !hasImage) {
    return (
      <div className="mt-5 flex min-h-[100px] items-center justify-center gap-2 rounded-xl bg-neutral-50 px-4 py-6 text-center ring-1 ring-inset ring-neutral-200/80">
        <ImageIcon className="h-6 w-6 text-neutral-400" aria-hidden />
        <span className="text-xs font-medium text-neutral-500">Visuals available on request</span>
      </div>
    );
  }
  return (
    <div className="mt-5 space-y-3">
      {hasMetrics && (
        <div className="flex flex-wrap gap-4 rounded-xl bg-neutral-50 px-4 py-3 ring-1 ring-inset ring-neutral-200/80">
          {item.proofMetrics!.map((m) => (
            <div key={m.label}>
              <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                {m.label}
              </span>
              <span className="mt-0.5 block text-sm font-bold text-neutral-900">{m.value}</span>
            </div>
          ))}
        </div>
      )}
      {hasImage && (
        <div className="overflow-hidden rounded-xl ring-1 ring-inset ring-neutral-200/80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.proofImage}
            alt={`Project visual: ${item.title}`}
            className="h-44 w-full object-cover object-top"
          />
        </div>
      )}
    </div>
  );
}

function PortfolioCard({
  item,
  categoryLabel,
  categoryIcon: Icon,
}: {
  item: PortfolioItem;
  categoryLabel: string;
  categoryIcon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(247,105,2,0.06)] ring-1 ring-neutral-200/90 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(247,105,2,0.12)] hover:ring-amber-400/40">
      <div className="h-1 w-full origin-left scale-x-[0.35] bg-linear-to-r from-[#F76902] to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-amber-400 shadow-sm transition-colors group-hover:bg-[#F76902] group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F76902]">
                {categoryLabel}
              </p>
              {(item.client || item.industry) && (
                <p className="mt-0.5 truncate text-xs text-neutral-500">
                  {[item.client, item.industry].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1 text-xs font-semibold text-neutral-900 underline-offset-4 hover:text-[#F76902] hover:underline"
            >
              {item.linkLabel ?? "View"}
              <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </a>
          )}
        </div>
        <h2 className="mt-4 text-base font-bold leading-snug tracking-tight text-neutral-900 md:text-lg">
          {item.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{item.description}</p>
        <ProofStrip item={item} />
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function CategorySection({
  categoryId,
  title,
  description,
  icon: Icon,
  items,
  index,
}: {
  categoryId: PortfolioCategory;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: PortfolioItem[];
  index: number;
}) {
  if (items.length === 0) return null;
  const isAlt = index % 2 === 1;

  return (
    <section
      className="scroll-mt-28"
      id={categoryId}
      aria-label={title}
    >
      <div
        className={`rounded-3xl border border-neutral-200/90 ${isAlt ? "bg-linear-to-b from-amber-50/40 via-white to-white" : "bg-white"} px-4 py-8 shadow-sm sm:px-6 md:px-8 md:py-10 lg:px-10`}
      >
        <div className="mb-8 flex flex-col gap-5 border-b border-neutral-200/80 pb-8 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F76902] text-white shadow-md shadow-amber-500/25">
              <Icon className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F76902]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                {title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
                {description}
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white">
            {items.length} project{items.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              categoryLabel={title}
              categoryIcon={Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const itemsByCategory = portfolioCategories
    .map((cat) => ({
      ...cat,
      items: portfolioItems.filter((i) => i.category === cat.id),
    }))
    .filter((c) => c.items.length > 0);

  return (
    <div className="bg-neutral-50/80">
      <section className="relative overflow-hidden bg-white pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20 lg:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.18),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(247,105,2,0.08),transparent)]" />
        <div className="container relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F76902]">
                Portfolio
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                Work that spans{" "}
                <span className="rsa-gradient-text">marketing, web, apps &amp; software</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
                A curated view of the kinds of engagements we run at {siteConfig.shortName}—from
                campaigns and creative to sites, mobile apps and custom internal tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#F76902] px-8 font-semibold text-white shadow-lg shadow-amber-500/20 hover:bg-[#f9802b]"
                >
                  <Link href="/contact" className="gap-2">
                    Discuss a project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-neutral-200 bg-white font-semibold text-neutral-900 hover:border-amber-400 hover:bg-amber-50/50"
                >
                  <Link href="/services">All services</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200/90 bg-white/90 p-6 shadow-xl shadow-neutral-900/5 backdrop-blur-sm md:p-8">
              <p className="text-sm font-semibold text-neutral-900">What we deliver</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Open a full service page for process, typical stacks and ways to engage—then scroll
                this portfolio for concrete examples underneath.
              </p>
              <ul className="mt-5 space-y-2">
                {services.slice(0, 4).map((s) => {
                  const ServiceIcon = s.icon;
                  return (
                    <li key={s.id}>
                      <Link
                        href={s.href}
                        className="group flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-amber-50/70"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F76902]/12 text-[#F76902] ring-1 ring-[#F76902]/10 transition-colors group-hover:bg-[#F76902] group-hover:text-white group-hover:ring-transparent">
                          <ServiceIcon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1 pt-0.5">
                          <span className="flex items-center gap-1 text-sm font-semibold text-neutral-900">
                            {s.title}
                            <ArrowUpRight
                              className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                              aria-hidden
                            />
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-neutral-600">
                            {s.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 border-t border-neutral-100 pt-4 text-xs leading-relaxed text-neutral-500">
                Examples on this page are grouped by the same lines of work—marketing &amp; content,
                websites, custom software and mobile apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-200/90 bg-neutral-50/80 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-7xl space-y-10 md:space-y-12 lg:space-y-14">
            {itemsByCategory.map((cat, index) => (
              <CategorySection
                key={cat.id}
                categoryId={cat.id}
                title={cat.label}
                description={cat.description}
                icon={cat.icon}
                items={cat.items}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="border-t border-neutral-200/90 bg-white py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              Planning something in this list?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Share your context and timeline—we&apos;ll respond with a sensible scope and how
              we&apos;d work with {siteConfig.shortName}.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#F76902] px-8 font-semibold text-white hover:bg-[#f9802b]"
              >
                <Link href="/contact" className="gap-2">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-neutral-200 font-semibold hover:border-amber-400 hover:bg-amber-50/50"
              >
                <Link href="/b2b">B2B &amp; partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
