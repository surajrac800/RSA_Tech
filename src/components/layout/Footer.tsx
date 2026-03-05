import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { QuoteModal } from "@/components/forms/QuoteModal";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "B2B", href: "/b2b" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "App Development", href: "/services/app-development" },
    { label: "Software Development", href: "/services/software-development" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Policies", href: "/policies" },
    { label: "Internship Program", href: "/internship-program" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-[20px] text-slate-100">
      <div className="container py-10 md:py-14">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] md:items-start">
          {/* Brand & summary */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                Rapid Solution &amp; Automation
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              We partner with MSMEs and startups to design, build and grow reliable digital systems—
              from websites and apps to automation and performance campaigns.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                Strategy &amp; consulting
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                Design &amp; development
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                Digital marketing
              </span>
            </div>
          </div>

          {/* Link columns + contact */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.8fr)]">
            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Resources
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & actions */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                  Contact
                </h4>
                <ul className="mt-3 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span>{siteConfig.links.address}</span>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                      <span className="break-all">{siteConfig.links.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                      <span className="break-all">{siteConfig.links.email}</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                  Quick actions
                </h4>
                <div className="mt-3 space-y-2">
                  <QuoteModal
                    trigger={
                      <Button className="w-full justify-center rounded-full bg-white text-xs font-medium text-blue-700 hover:bg-blue-50">
                        Enquire Now
                      </Button>
                    }
                  />
                  <Button
                    asChild
                    size="sm"
                    className="w-full justify-center rounded-full bg-orange-500 text-xs font-medium text-white hover:bg-orange-600"
                  >
                    <Link href="/pay-now">Pay Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-100">{siteConfig.shortName}</span>. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/policies" className="hover:text-slate-100">
              Privacy Policy
            </Link>
            <span className="hidden h-3 w-px bg-slate-700 md:inline-block" />
            <span>Made with care for growing businesses.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

