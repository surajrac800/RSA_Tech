import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { B2BForm } from "@/components/forms/B2BForm";

export const metadata: Metadata = {
  title: "B2B Proposal",
  description: `Request a custom B2B partnership proposal from ${siteConfig.shortName}.`,
};

export default function B2BApplyPage() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/b2b"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to B2B
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                B2B proposal
              </p>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                Tell us how you want to scale.
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Agencies, resellers and in-house teams use {siteConfig.shortName} as their
                white-label execution partner. Share your volume, timelines and the kind
                of work you need support with. We&apos;ll reply with a tailored proposal,
                pricing and SLAs.
              </p>
              <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100/80 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    What you can expect
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    <li>— Clear pricing for your volume</li>
                    <li>— Suggested engagement model</li>
                    <li>— SLAs and communication rhythm</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-blue-100/80 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Typical partners
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    <li>— Digital & performance agencies</li>
                    <li>— Resellers & consultants</li>
                    <li>— In-house teams with overflow</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-xl shadow-blue-500/15 backdrop-blur md:p-7">
              <B2BForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

