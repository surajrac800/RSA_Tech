import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { CreditCard, ShieldCheck, Phone, Mail } from "lucide-react";
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
    <section className="relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="container relative py-16 md:py-20 lg:py-24">
        {/* Hero */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Payments
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Pay RSA Tech Softwares{" "}
            <span className="rsa-gradient-text">securely & quickly</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Use the payment link shared by our team or choose one of the options below
            to complete your invoice or advance payment.
          </p>
        </div>

        {/* Main card */}
        <div className="mt-10 rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-xl shadow-blue-500/15 backdrop-blur md:mt-12 md:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Left: summary */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md shadow-blue-500/40">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    Secure payment & receipts
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Once your payment is confirmed, we&apos;ll share a tax invoice on
                    email/WhatsApp.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {paymentOptions.map((option) => (
                  <div
                    key={option.label}
                    className="flex flex-col rounded-3xl border border-blue-100/80 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/70 p-5 text-left text-sm text-blue-900 shadow-sm shadow-blue-500/10 transition-all hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <p className="text-sm font-semibold">{option.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-blue-900/90">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bank transfer / card request */}
              <div className="mt-4 rounded-2xl border border-blue-100/80 bg-blue-50/80 p-4 text-xs text-blue-900 md:text-sm">
                <p className="mb-1 text-sm font-semibold">
                  Bank transfer / card payment details
                </p>
                <p>
                  If you would like to make the payment via{" "}
                  <span className="font-semibold">bank transfer or credit / debit card</span>,
                  please fill out the request form below. After submitting the form, you will see a
                  Thank You message where the bank account details will be provided.
                </p>
                <PayNowRequestForm />
              </div>

              <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-xs text-amber-900 md:text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Important
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Note:</span> After making the payment, please send
                  a screenshot of your payment to our WhatsApp number{" "}
                  <span className="font-semibold">+91 9267917752</span>. Alternatively, you must
                  verify your successful payment confirmation with your counselor.
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Important:</span> Projects will not be considered
                  without an advance payment. A minimum of{" "}
                  <span className="font-semibold">25% to 50% advance payment</span> is required
                  before the work begins. The project will be initiated only after the advance
                  payment is successfully received and confirmed.
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-emerald-50/90 p-4 text-xs text-emerald-900">
                <ShieldCheck className="h-4 w-4" />
                <p>
                  Always pay using official links or account details shared by{" "}
                  <span className="font-semibold">{siteConfig.shortName}</span>. If you
                  have any doubt, confirm with our team before transferring.
                </p>
              </div>
            </div>

            {/* Right: QR + support */}
            <div className="mt-4 w-full max-w-md rounded-2xl border border-blue-100/80 bg-card/95 p-5 text-sm shadow-md shadow-blue-500/15 lg:mt-0 lg:max-w-sm">
              <p className="text-sm font-semibold text-foreground">Scan &amp; pay via UPI</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Open any UPI app and scan this code. Please mention your name and invoice /
                project name in the notes.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-blue-100 bg-white sm:max-w-sm">
                  <Image
                    src={gpayQr}
                    alt="UPI QR code for RSA Tech Softwares payments"
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="mt-4 space-y-3 text-xs text-muted-foreground">
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  {siteConfig.links.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-2 break-all hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-blue-600" />
                  {siteConfig.links.email}
                </a>
              </div>
              <Button asChild size="sm" className="mt-4 w-full rsa-gradient-bg text-white">
                <Link href="/contact">Request Payment Link</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

