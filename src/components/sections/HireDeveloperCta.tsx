"use client";

import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus, X } from "lucide-react";

const hireMessage =
  "Hi RSA Tech Softwares — I'm looking to hire a developer for my project. Please share availability and next steps.";

function hireWhatsAppHref() {
  const base = siteConfig.links.whatsapp.split("?")[0];
  return `${base}?text=${encodeURIComponent(hireMessage)}`;
}

export function HireDeveloperCta() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openWhatsApp = useCallback(() => {
    window.open(hireWhatsAppHref(), "_blank", "noopener,noreferrer");
    setOpen(false);
  }, []);

  return (
    <>
      <section
        className="relative border-y border-amber-400/45 bg-white py-4 md:py-5"
        aria-labelledby="hire-developer-heading"
      >
        <div className="container relative max-w-6xl">
          <div className="flex flex-col gap-4 rounded-2xl border-2 border-amber-400/55 bg-linear-to-br from-amber-50/80 via-white to-white px-4 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-3.5 md:px-6">
            <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
              <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/60 bg-white text-[#F76902] shadow-sm sm:mt-0 sm:h-11 sm:w-11"
                aria-hidden
              >
                <UserPlus className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F76902]">
                  Hiring &amp; outsourcing
                </p>
                <h2
                  id="hire-developer-heading"
                  className="mt-1 text-lg font-bold leading-snug tracking-tight text-neutral-900 sm:text-xl md:text-2xl"
                >
                  Looking to hire a developer?
                </h2>
                <p className="mt-1 text-sm leading-snug text-neutral-600 md:text-[15px] md:leading-normal">
                  Dedicated talent and flexible models through {siteConfig.shortName}.
                </p>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => setOpen(true)}
              className="h-10 shrink-0 rounded-[30px] bg-[#F76902] px-6 text-xs font-semibold text-white shadow-sm sm:h-10 sm:px-7 sm:text-sm md:min-w-34"
            >
              Hire now
            </Button>
          </div>
        </div>
      </section>

      {open ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hire-dialog-title"
        >
          <button
            type="button"
            className="fixed inset-0 cursor-default"
            aria-label="Close dialog"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-2xl border-2 border-amber-400/70 bg-white p-5 shadow-2xl sm:p-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 id="hire-dialog-title" className="pr-10 text-lg font-semibold tracking-tight text-neutral-900">
              Start on WhatsApp
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Share your stack, timelines and budget — we&apos;ll get back with profiles and a clear
              proposal. You can edit the message before sending.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="rounded-[30px] border-2 border-neutral-200"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="rounded-[30px] bg-[#F76902] px-6 font-semibold text-white hover:bg-[#f9802b]"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Open WhatsApp
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
