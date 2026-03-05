import type { Metadata } from "next";
import Link from "next/link";
import { CareerApplyForm } from "@/components/forms/CareerApplyForm";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply for a role at ${siteConfig.shortName}. Submit your resume and details.`,
};

export default async function CareerApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to careers
          </Link>

          <div className="mt-6 rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-xl shadow-blue-500/15 backdrop-blur md:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Apply for a role
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and upload your resume. We&apos;ll get back
                to you after reviewing your application.
              </p>
            </div>
            <CareerApplyForm defaultPosition={role} />
          </div>
        </div>
      </div>
    </section>
  );
}
