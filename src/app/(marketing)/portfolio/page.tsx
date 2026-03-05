import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ExternalLink,
  BarChart3,
  ImageIcon,
} from "lucide-react";
import {
  portfolioCategories,
  portfolioItems,
  portfolioImpactStats,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Our work: digital marketing (Meta & Google Ads), graphic design, content writing, web, software and app development with proof and results.",
};

function ProofStrip({ item }: { item: PortfolioItem }) {
  const hasMetrics = item.proofMetrics && item.proofMetrics.length > 0;
  const hasImage = item.proofImage;
  if (!hasMetrics && !hasImage) {
    return (
      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-dashed border-blue-200/80 bg-blue-50/50 py-8 text-center">
        <ImageIcon className="h-8 w-8 text-blue-400" />
        <span className="text-xs font-medium text-blue-700">
          Add screenshot or proof image
        </span>
      </div>
    );
  }
  return (
    <div className="mt-4 space-y-3">
      {hasMetrics && (
        <div className="flex flex-wrap gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50/80 px-4 py-3">
          {item.proofMetrics!.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground">
                {m.label}
              </span>
              <span className="text-sm font-bold text-blue-700">{m.value}</span>
            </div>
          ))}
        </div>
      )}
      {hasImage && (
        <div className="overflow-hidden rounded-xl border border-blue-100 bg-muted/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.proofImage}
            alt={`Proof for ${item.title}`}
            className="h-40 w-full object-cover object-top"
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100/70 bg-white/95 shadow-sm shadow-blue-500/10 transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 opacity-15 blur-2xl" />
      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md shadow-blue-500/40">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                {categoryLabel}
              </p>
              {(item.client || item.industry) && (
                <p className="text-xs text-muted-foreground">
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
              className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800"
            >
              {item.linkLabel ?? "View"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <h2 className="relative mt-3 text-base font-semibold text-foreground">
          {item.title}
        </h2>
        <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <ProofStrip item={item} />
        <div className="relative mt-4 flex flex-wrap gap-2">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
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
}: {
  categoryId: PortfolioCategory;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: PortfolioItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="scroll-mt-20" id={categoryId}>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-lg shadow-blue-500/40">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              {title}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
          <BarChart3 className="h-4 w-4" />
          {items.length} project{items.length !== 1 ? "s" : ""}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            categoryLabel={title}
            categoryIcon={Icon}
          />
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const itemsByCategory = portfolioCategories.map((cat) => ({
    ...cat,
    items: portfolioItems.filter((i) => i.category === cat.id),
  }));

  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Our Work
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Results we&apos;ve created with{" "}
              <span className="rsa-gradient-text">proof that speaks</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Digital marketing results (Meta & Google Ads), graphic design,
              content writing, web, software and app development — with metrics,
              screenshots and live links where possible.
            </p>
          </div>

          {/* Impact stats */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
            <div className="rounded-2xl border border-blue-100/80 bg-white/95 px-6 py-5 text-center shadow-lg shadow-blue-500/10 transition-all hover:shadow-xl">
              <p className="text-3xl font-bold rsa-gradient-text md:text-4xl">
                {portfolioImpactStats.adAccountsManaged}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Meta & Google Ads accounts managed
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Active campaigns across verticals
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100/80 bg-white/95 px-6 py-5 text-center shadow-lg shadow-blue-500/10 transition-all hover:shadow-xl">
              <p className="text-3xl font-bold rsa-gradient-text md:text-4xl">
                {portfolioImpactStats.websitesDelivered}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Websites delivered
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                WordPress, Shopify & more
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100/80 bg-white/95 px-6 py-5 text-center shadow-lg shadow-blue-500/10 transition-all hover:shadow-xl">
              <p className="text-3xl font-bold rsa-gradient-text md:text-4xl">
                {portfolioImpactStats.appsDelivered}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Apps successfully delivered
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Android, PWA & cross-platform
              </p>
            </div>
          </div>

          {/* Category nav / anchors */}
          <nav className="mt-10 flex flex-wrap justify-center gap-2 md:mt-12">
            {portfolioCategories.map((cat) => {
              const count = portfolioItems.filter(
                (i) => i.category === cat.id
              ).length;
              if (count === 0) return null;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 text-xs font-medium text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50"
                >
                  {cat.shortLabel} ({count})
                </a>
              );
            })}
          </nav>

          {/* Sections by category */}
          <div className="mt-14 space-y-16 md:mt-16">
            {itemsByCategory.map(({ id, label, description, icon, items }) => (
              <CategorySection
                key={id}
                categoryId={id}
                title={label}
                description={description}
                icon={icon}
                items={items}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/60 px-6 py-12 text-center shadow-lg shadow-blue-500/10 md:mt-20">
            <p className="text-base font-semibold text-foreground md:text-lg">
              Want results like these for your brand?
            </p>
            <p className="max-w-xl text-sm text-muted-foreground">
              Share your goals and we&apos;ll put together a plan with clear
              deliverables and proof points.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-2 gap-2 rsa-gradient-bg text-white shadow-md"
            >
              <Link href="/contact">
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
