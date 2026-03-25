import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { CreditCard, ShieldCheck, Phone, Mail, CheckCircle2 } from "lucide-react";
import gpayQr from "@/assets/images/gpay.jpeg";
import { PayNowRequestForm } from "@/components/forms/PayNowRequestForm";

export const metadata: Metadata = {
  title: "Pay Now",
  description: "Securely pay RSA Tech Softwares for your project or services.",
};

const paymentOptions = [
  {
    label: "UPI / QR",
    description: "Fast payments via UPI apps like PhonePe, Google Pay, Paytm and more.",
  },
  {
    label: "Bank Transfer",
    description: "Direct NEFT/IMPS/RTGS transfer to our current account.",
  },
  {
    label: "Cards & Netbanking",
    description: "Credit/debit cards and netbanking via our preferred payment gateway.",
  },
];

export default function PayNowPage() {
  return (
    <div className="bg-white">
      <section className="home-section-py relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,196,113,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(247,105,2,0.08),transparent_55%)]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F76902]/60 bg-amber-50/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F76902]" />
              Payments
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
              Pay {siteConfig.shortName}{" "}
              <span className="rsa-gradient-text">securely &amp; quickly</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Use the payment link shared by our team or choose one of the options below to complete
              your invoice or advance payment.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                UPI, bank transfer &amp; cards
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76902]" />
                Official channels only
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-amber-400/30 bg-white py-10 md:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl rounded-2xl border-2 border-amber-400/55 bg-white p-6 shadow-sm md:p-8 lg:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/60 bg-amber-50 text-[#F76902] shadow-sm">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-neutral-900">
                      Secure payment &amp; receipts
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-neutral-600">
                      Once your payment is confirmed, we&apos;ll share a tax invoice on email or
                      WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {paymentOptions.map((option) => (
                    <div
                      key={option.label}
                      className="rounded-2xl border-2 border-amber-400/50 bg-linear-to-br from-amber-50/80 via-white to-white p-5 text-left shadow-sm transition-all hover:border-[#F76902]/70 hover:shadow-md"
                    >
                      <p className="text-base font-semibold text-neutral-900">{option.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {option.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border-2 border-amber-400/70 bg-white p-5 md:p-6">
                  <h2 className="marketing-subheading">Bank transfer / card payment</h2>
                  <p className="marketing-body mt-3">
                    If you would like to pay via{" "}
                    <span className="font-semibold text-neutral-800">bank transfer or card</span>,
                    submit the short form below. Our team will reach out with official payment
                    instructions on your registered email or phone.
                  </p>
                  <PayNowRequestForm />
                </div>

                <div className="rounded-2xl border-2 border-amber-400/60 bg-amber-50/60 p-5 text-neutral-800">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F76902]">
                    Important
                  </p>
                  <p className="mt-3 text-base leading-relaxed">
                    <span className="font-semibold text-neutral-900">Note:</span> After paying, send a
                    screenshot to our WhatsApp{" "}
                    <span className="font-semibold">+91 9267917752</span>, or confirm with your
                    counselor.
                  </p>
                  <p className="mt-3 text-base leading-relaxed">
                    <span className="font-semibold text-neutral-900">Advance:</span> A minimum{" "}
                    <span className="font-semibold">25%–50%</span> advance is usually required before
                    work begins; the project starts after payment is received and confirmed.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-base leading-relaxed text-neutral-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p>
                    Pay only using official links or details shared by{" "}
                    <span className="font-semibold text-neutral-900">{siteConfig.shortName}</span>.
                    If unsure, confirm with our team before transferring.
                  </p>
                </div>
              </div>

              <div className="w-full shrink-0 rounded-2xl border-2 border-amber-400/70 bg-white p-6 shadow-sm lg:max-w-sm">
                <p className="text-base font-semibold text-neutral-900">Scan &amp; pay via UPI</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Open any UPI app and scan this code. Add your name and invoice or project name in the
                  note.
                </p>
                <div className="mt-5 flex justify-center">
                  <div className="w-full max-w-xs overflow-hidden rounded-2xl border-2 border-amber-400/50 bg-white sm:max-w-sm">
                    <Image
                      src={gpayQr}
                      alt="UPI QR code for RSA Tech Softwares payments"
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-neutral-600">
                  <a
                    href={`tel:${siteConfig.links.phone}`}
                    className="flex items-center gap-2 font-medium text-neutral-900 hover:text-[#F76902]"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[#F76902]" />
                    {siteConfig.links.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="flex items-center gap-2 break-all font-medium text-neutral-900 hover:text-[#F76902]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#F76902]" />
                    {siteConfig.links.email}
                  </a>
                </div>
                <Button
                  asChild
                  className="mt-5 h-11 w-full rounded-[30px] bg-[#F76902] text-sm font-semibold text-white shadow-sm hover:bg-[#f9802b]"
                >
                  <Link href="/contact">Request payment link</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
