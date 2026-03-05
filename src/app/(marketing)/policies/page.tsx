import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Policies",
  description: `Terms, privacy, payment and service policies for ${siteConfig.shortName}.`,
};

export default function PoliciesPage() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.06),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Hero */}
          <header className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Policies
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Policies &amp; Terms for {siteConfig.shortName}
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Please read these policies carefully. By engaging with our services or using our
              website, you agree to the terms outlined on this page.
            </p>
          </header>

          {/* Terms & Conditions */}
          <section id="terms" className="space-y-3 rounded-2xl border border-border/60 bg-card/95 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Terms &amp; Conditions</h2>
            <p className="text-sm text-muted-foreground">
              These terms govern your relationship with {siteConfig.shortName} for all services
              including consulting, design, development, marketing and support engagements.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                All services, timelines and deliverables will be described in writing (proposal,
                scope document, email or agreement) before work begins.
              </li>
              <li>
                Any change in scope requested after project start may impact timelines and pricing
                and will be communicated and agreed in advance.
              </li>
              <li>
                You are responsible for providing accurate information, content and approvals
                required to complete the work. Delays in inputs may shift delivery timelines.
              </li>
              <li>
                Unless otherwise agreed, intellectual property for final deliverables is transferred
                upon full and final payment. We may retain the right to showcase non-sensitive work
                in our portfolio.
              </li>
            </ul>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="space-y-3 rounded-2xl border border-border/60 bg-card/95 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Privacy Policy</h2>
            <p className="text-sm text-muted-foreground">
              We respect your privacy and are committed to protecting your personal information.
              This section explains how we collect, use and safeguard data.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                We collect basic contact information (such as name, email, phone, company and
                project details) when you fill forms, contact us or engage our services.
              </li>
              <li>
                Your information is used only to communicate with you, understand your requirements,
                deliver services and share relevant updates or invoices.
              </li>
              <li>
                We do not sell your personal data to third parties. Data may be shared only with
                trusted service providers (such as hosting, email or payment partners) required to
                deliver our services.
              </li>
              <li>
                Reasonable technical and organisational measures are used to protect your data, but
                no method of transmission or storage is 100% secure.
              </li>
            </ul>
          </section>

          {/* Payment Policy */}
          <section id="payment" className="space-y-3 rounded-2xl border border-border/60 bg-card/95 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Payment Policy</h2>
            <p className="text-sm text-muted-foreground">
              Our payment terms are designed to keep both parties aligned and ensure smooth project
              execution.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                A minimum advance of <span className="font-semibold">25% to 50%</span> of the total
                project value is required before work begins, unless specifically agreed otherwise.
              </li>
              <li>
                Remaining payments are typically linked to milestones, delivery stages or monthly
                billing cycles, as defined in your proposal or agreement.
              </li>
              <li>
                All invoices clearly mention due dates and payment methods. Late payments may impact
                support, timelines or future work.
              </li>
              <li>
                Payments should be made only to the official bank accounts or UPI details shared on
                our{" "}
                <Link href="/pay-now" className="text-blue-600 underline underline-offset-4">
                  Pay Now
                </Link>{" "}
                page or by our authorised representatives.
              </li>
            </ul>
          </section>

          {/* Refund & Cancellation Policy */}
          <section id="refunds" className="space-y-3 rounded-2xl border border-border/60 bg-card/95 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Refund &amp; Cancellation Policy</h2>
            <p className="text-sm text-muted-foreground">
              Because our work involves time, planning and resources, refunds are limited and are
              handled on a case-by-case basis.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Advance payments are generally{" "}
                <span className="font-semibold">non-refundable</span> once project planning,
                allocation or work has started.
              </li>
              <li>
                If you choose to cancel a project mid-way, you will be billed for work completed up
                to the cancellation date, including any third-party costs already committed.
              </li>
              <li>
                In rare situations where we are unable to continue a project from our side, we will
                discuss a fair resolution, which may include partial refunds or delivery of work
                completed till that point.
              </li>
              <li>
                Any specific refund or cancellation terms mentioned in your proposal or agreement
                will override the general policy here.
              </li>
            </ul>
          </section>

          {/* Service & Delivery Policy */}
          <section id="service-delivery" className="space-y-3 rounded-2xl border border-border/60 bg-card/95 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Service &amp; Delivery Policy</h2>
            <p className="text-sm text-muted-foreground">
              This section explains how we plan, deliver and support our services once a project or
              engagement has started.
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Project timelines, communication channels and key contacts will be shared with you
                at the start of the engagement.
              </li>
              <li>
                Deliverables may include strategy documents, designs, source code, builds,
                marketing assets or reports, depending on the scope of work.
              </li>
              <li>
                Delivery is usually done via secure links, code repositories, project management
                tools or email, based on what is appropriate for the engagement.
              </li>
              <li>
                After go-live, we may provide a limited support window for bug fixes or minor
                adjustments as defined in the proposal. Ongoing maintenance or marketing support can
                be structured as a separate retainer or agreement.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

