import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with RSA Tech Softwares for your project.",
};

export default function ContactPage() {
  return (
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.09),transparent_55%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Page heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Contact {siteConfig.shortName}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Get Free Consultation
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Tell us briefly about your business and what you&apos;re planning. We&apos;ll come
              back with suggestions, timelines and next steps.
            </p>
          </div>

          {/* Main grid: simple info (left) + form (right) */}
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            {/* Left: simple contact info */}
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <div className="rounded-2xl border border-blue-100/70 bg-white/90 p-6 shadow-sm">
                <h2 className="text-base font-semibold text-foreground">Reach us directly</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer to talk first? Use any of the options below to connect with our team.
                </p>

                <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="hover:text-foreground"
                    >
                      {siteConfig.links.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="hover:text-foreground break-all"
                    >
                      {siteConfig.links.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span>{siteConfig.links.address}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-100/70 bg-blue-50/80 p-5 text-sm text-blue-900">
                <p className="font-semibold">What happens after you submit the form?</p>
                <ol className="mt-2 list-decimal space-y-1 pl-4">
                  <li>We review your requirements within one working day.</li>
                  <li>Our team may contact you for a short clarification call.</li>
                  <li>You receive next steps with a suggested plan and timeline.</li>
                </ol>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="w-full max-w-xl mx-auto lg:ml-auto">
              <div className="rounded-2xl border border-blue-100/80 bg-card/95 p-6 shadow-lg shadow-blue-500/15 backdrop-blur md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
