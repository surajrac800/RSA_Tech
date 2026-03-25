import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { B2BForm } from "@/components/forms/B2BForm";

export const metadata: Metadata = {
  title: "B2B Partner Proposal | RSA Tech Softwares",
  description: `Request a partnership or volume quote from ${siteConfig.shortName}. We reply by email with next steps.`,
};

export default function B2BApplyPage() {
  return (
    <section className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
      <div className="container relative py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/b2b"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F76902] hover:text-[#d45a02]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to B2B
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="space-y-5">
              <p className="marketing-eyebrow">B2B proposal</p>
              <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
                Partner application &amp; volume quote
              </h1>
              <p className="text-base leading-relaxed text-neutral-600 md:text-[17px]">
                Use this form for agency resale, white-label delivery, bulk site or landing builds,
                and monthly capacity. Share your company name, typical project sizes and how you
                sell to end clients. We respond via {siteConfig.links.email}—usually within a few
                working days once we have enough detail to quote.
              </p>
              <div className="grid gap-4 text-sm text-neutral-600 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-amber-400/50 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F76902]">
                    In the reply
                  </p>
                  <ul className="mt-2 space-y-1.5 leading-relaxed">
                    <li>— Rate card or project bands where applicable</li>
                    <li>— Suggested engagement (per project / retainer)</li>
                    <li>— How changes and rush work are handled</li>
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-amber-400/50 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F76902]">
                    Typical partners
                  </p>
                  <ul className="mt-2 space-y-1.5 leading-relaxed">
                    <li>— Digital &amp; performance agencies</li>
                    <li>— IT consultants &amp; system integrators</li>
                    <li>— In-house teams needing overflow capacity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-amber-400/70 bg-white p-6 shadow-xl shadow-amber-400/15 md:p-7">
              <B2BForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
