import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { InternshipForm } from "@/components/forms/InternshipForm";
import { INTERNSHIP_PROGRAMS } from "@/lib/validations/internship";

export const metadata: Metadata = {
  title: "Internship Program",
  description: `Apply for internships at ${siteConfig.shortName} across development and digital marketing domains.`,
};

export default function InternshipProgramPage() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Internship Program
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Learn by building real projects with{" "}
                <span className="rsa-gradient-text">RSA Tech Softwares</span>
              </h1>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Our internship program is for students and freshers who want{" "}
                <span className="font-semibold">real project exposure</span> in modern web, app and
                digital marketing stacks. You&apos;ll shadow our team, contribute to live tasks and
                see how client work actually runs—beyond classroom assignments.
              </p>
              <div className="mt-4 rounded-2xl border border-blue-100/80 bg-white/95 p-4 text-sm shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  ISO-certified certificate
                </p>
                <p className="mt-1 text-muted-foreground">
                  After successfully completing the internship and assigned project work, you&apos;ll
                  receive an ISO-certified certificate from {siteConfig.shortName} to add to your
                  portfolio and resume.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-xl shadow-blue-500/15 lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Internship domains
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {INTERNSHIP_PROGRAMS.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Choose one primary domain when you apply. During the internship you may get exposure
                to multiple tools, but your main focus and mentor will be aligned to this selection.
              </p>
            </div>
          </div>

          {/* Program details */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  How the internship works
                </p>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Structured learning with real responsibilities
                </h2>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground md:text-base">
                  <li>• Work on real tasks for websites, apps or campaigns under mentor guidance.</li>
                  <li>• Weekly check-ins to review work, unblock doubts and share feedback.</li>
                  <li>• Access to tools and workflows we actually use for client delivery.</li>
                  <li>• Clear expectations for deliverables and professional communication.</li>
                </ul>
              </div>
              <div className="space-y-4 rounded-3xl border border-blue-100/80 bg-white/95 p-5 text-sm shadow-lg shadow-blue-500/15 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Who should apply?
                </p>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>• Students in their final or pre-final year who want practical skills.</li>
                  <li>• Fresh graduates looking for portfolio projects and industry exposure.</li>
                  <li>• Self-learners who have done courses and now want to apply them.</li>
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  This program is currently remote / hybrid depending on project needs. Exact
                  schedule and expectations will be shared if you are shortlisted.
                </p>
              </div>
            </div>
          </div>

          {/* Application form */}
          <div className="mt-16 border-t border-border/60 pt-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Apply now
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  Internship application form
                </h2>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  Please fill in all details accurately. Your chosen program and background help us
                  understand how we can structure your internship experience.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-xl shadow-blue-500/15 backdrop-blur md:p-8">
                <InternshipForm />
              </div>
            </div>
          </div>

          {/* Help text */}
          <div className="mt-10 text-center text-xs text-muted-foreground">
            <p>
              Already applied? If you have not heard back within a few days, you can follow up using
              the contact details on our <Link href="/contact" className="text-blue-600 underline underline-offset-4">Contact</Link> page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

