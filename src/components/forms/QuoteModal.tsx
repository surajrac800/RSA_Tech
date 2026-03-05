"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

interface QuoteModalProps {
  trigger: React.ReactNode;
}

export function QuoteModal({ trigger }: QuoteModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-lg rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-2xl shadow-blue-500/20 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Enquire now
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  Share your project or requirement
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
