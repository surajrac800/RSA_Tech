"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4 md:space-y-5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-card/95 shadow-sm transition-colors hover:border-blue-200"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
            >
              <h2 className="text-sm font-semibold md:text-base lg:text-lg">{item.q}</h2>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition-transform"
                aria-hidden="true"
              >
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 px-5 pb-5 pt-3 md:px-6 md:pb-6">
                <p className="text-sm text-muted-foreground md:text-base">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

