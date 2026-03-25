import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | RSA Tech Softwares",
  description:
    "Contact RSA Tech Softwares for websites, apps, software and digital marketing—Noida, India.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="home-section-py relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F76902]" />
              Get in touch
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
              Let&apos;s talk about your{" "}
              <span className="rsa-gradient-text">next project</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Tell us about your business and what you are planning. We reply with practical
              suggestions, indicative timelines and clear next steps—no obligation.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                Response within one working day
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                Phone, email, WhatsApp or form
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10 xl:gap-12">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="rounded-2xl border-2 border-amber-400/70 bg-white p-6 shadow-sm md:p-7">
                <h2 className="marketing-subheading">Reach us directly</h2>
                <p className="marketing-body mt-3">
                  Use whichever channel you prefer. If you already have a brief, the form on the
                  right keeps everything in one thread for our team.
                </p>

                <ul className="mt-6 space-y-5 text-base text-neutral-600">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Phone
                      </p>
                      <a
                        href={`tel:${siteConfig.links.phone.replace(/\s/g, "")}`}
                        className="font-medium text-neutral-900 hover:text-[#F76902]"
                      >
                        {siteConfig.links.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.links.email}`}
                        className="break-all font-medium text-neutral-900 hover:text-[#F76902]"
                      >
                        {siteConfig.links.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Office
                      </p>
                      <span className="text-neutral-800">{siteConfig.links.address}</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-[30px] border-2 border-amber-400/80 font-semibold text-[#F76902] hover:bg-amber-50 sm:w-auto"
                  >
                    <Link href={siteConfig.links.whatsapp} className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      WhatsApp us
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-amber-400/50 bg-amber-50/70 p-6 md:p-7">
                <p className="marketing-subheading text-[#F76902]">After you submit the form</p>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 md:text-base">
                  <li>We review your message within one working day.</li>
                  <li>We may reach out for a short clarification if needed.</li>
                  <li>You get suggested approaches and indicative next steps.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-amber-400/70 bg-white p-6 shadow-lg shadow-amber-400/10 md:p-8 lg:sticky lg:top-24 xl:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F76902]">
                Contact form
              </p>
              <h2 className="mt-2 text-xl font-bold text-neutral-900 md:text-2xl">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-neutral-600 md:text-[15px]">
                Include your company name, timeline and which services you are considering.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
