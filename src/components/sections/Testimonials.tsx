"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Founder, Local Retail Brand",
    quote:
      "Within three months of working with RSA Tech Softwares, our website traffic and walk-in enquiries both increased noticeably. The team is proactive and very transparent.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, Education Institute",
    quote:
      "They built a fast, mobile-friendly website and handled our SEO and campaigns end-to-end. We finally have a single partner who understands both technology and marketing.",
  },
  {
    name: "Rahul Verma",
    role: "Director, Manufacturing MSME",
    quote:
      "Their custom software and automation saved our team hours every week. Reports that used to take days are now available in a few clicks.",
  },
  {
    name: "Sneha Iyer",
    role: "Co-founder, D2C Beauty Brand",
    quote:
      "RSA Tech Softwares revamped our storefront and ad funnels. We saw a clear lift in add-to-carts and repeat customers within the first quarter.",
  },
  {
    name: "Vikram Joshi",
    role: "Owner, Multi-location Clinic",
    quote:
      "The team helped us streamline online appointments and local SEO. Patients now find us easily on Google and booking is fully automated.",
  },
  {
    name: "Meera Nair",
    role: "Director, Training Academy",
    quote:
      "From website to lead tracking and WhatsApp follow-ups, they built a complete system so we never lose enquiry data again.",
  },
  {
    name: "Karan Singh",
    role: "Founder, Logistics Startup",
    quote:
      "Their dashboards and custom reports give us real-time visibility into operations and marketing performance. Decision-making has become much faster.",
  },
  {
    name: "Anjali Desai",
    role: "Marketing Manager, Real Estate Group",
    quote:
      "We finally have consistent digital campaigns, landing pages, and CRM in one place. Lead quality and closing rate both improved.",
  },
  {
    name: "Suresh Patel",
    role: "Owner, Wholesale Business",
    quote:
      "They understood our traditional business processes and digitised them without making it complicated for our team.",
  },
  {
    name: "Nidhi Rao",
    role: "Product Lead, SaaS Company",
    quote:
      "RSA Tech Softwares moved quickly from prototype to production. Their communication and documentation made collaboration very smooth.",
  },
  {
    name: "Imran Khan",
    role: "Founder, Local Services Marketplace",
    quote:
      "The mobile app and marketing strategy they delivered helped us onboard both vendors and customers much faster than expected.",
  },
  {
    name: "Pooja Mehta",
    role: "CEO, Boutique Consultancy",
    quote:
      "They feel more like an in-house digital team than an external agency. Clear reports, realistic timelines, and dependable support.",
  },
];

const AUTO_SCROLL_MS = 6000;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");

    const sync = () => {
      if (mqLg.matches) setCount(3);
      else if (mqMd.matches) setCount(2);
      else setCount(1);
    };

    sync();
    mqMd.addEventListener("change", sync);
    mqLg.addEventListener("change", sync);
    return () => {
      mqMd.removeEventListener("change", sync);
      mqLg.removeEventListener("change", sync);
    };
  }, []);

  return count;
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-[#F76902] text-[#F76902]"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | "jump">("next");

  const maxIndex = useMemo(
    () => Math.max(0, testimonials.length - visibleCount),
    [visibleCount]
  );

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setDirection("next");
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback((i: number) => {
    setDirection("jump");
    setIndex(Math.min(Math.max(0, i), maxIndex));
  }, [maxIndex]);

  const visible = useMemo(() => {
    return Array.from({ length: visibleCount }).map((_, offset) => {
      const i = index + offset;
      const t = testimonials[i];
      return { ...t, key: `${t.name}-${index}-${offset}` };
    });
  }, [index, visibleCount]);

  const dotCount = maxIndex + 1;

  return (
    <section
      className="home-section-py relative overflow-hidden bg-white"
      aria-label="Client testimonials"
    >
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="marketing-eyebrow">Client testimonials</p>
          <h2 className="marketing-heading mt-3">Our Clients Speak for Us</h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="hidden justify-end pb-4 md:flex">
            <div className="flex gap-2">
              <button
                type="button"
                suppressHydrationWarning
                onClick={goPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-400/60 bg-white text-neutral-800 shadow-sm transition-all hover:border-[#F76902] hover:bg-amber-50 hover:text-[#F76902] focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#F76902]/40"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                suppressHydrationWarning
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-400/60 bg-white text-neutral-800 shadow-sm transition-all hover:border-[#F76902] hover:bg-amber-50 hover:text-[#F76902] focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#F76902]/40"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>

          <div
            className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            {visible.map((item, cardIndex) => (
              <article
                key={item.key}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-amber-400/45 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-[#F76902]/70 hover:shadow-xl hover:shadow-amber-400/15 motion-reduce:transition-none motion-reduce:animate-none motion-reduce:hover:translate-y-0 md:p-7",
                  direction === "prev"
                    ? "animate-in fade-in slide-in-from-top-8 duration-500"
                    : "animate-in fade-in slide-in-from-bottom-8 duration-500"
                )}
                style={{
                  animationDelay: `${cardIndex * 70}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-linear-to-br from-amber-400/25 via-[#F76902]/15 to-transparent blur-2xl"
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <Quote
                      className="h-10 w-10 shrink-0 text-[#F76902]/35 transition-colors group-hover:text-[#F76902]/55"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <StarRow />
                  </div>

                  <blockquote className="mt-4 flex-1">
                    <p className="marketing-body relative pl-4 pt-1 text-neutral-700 md:pl-5">
                      <span
                        className="absolute -left-0.5 -top-1 font-serif text-3xl leading-none text-[#F76902]/20"
                        aria-hidden
                      >
                        “
                      </span>
                      <span className="relative">{item.quote}</span>
                    </p>
                  </blockquote>

                  <div className="mt-6 flex items-center gap-4 border-t border-neutral-200/80 pt-6">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-400/60 bg-linear-to-br from-amber-50 to-white text-sm font-bold text-[#F76902] shadow-inner"
                      aria-hidden
                    >
                      {initials(item.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="marketing-subheading truncate">{item.name}</p>
                      <p className="marketing-body truncate font-medium text-[#F76902]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2 md:hidden">
            <button
              type="button"
              suppressHydrationWarning
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400/60 bg-white text-neutral-800 shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400/60 bg-white text-neutral-800 shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex max-w-full snap-x snap-mandatory items-center justify-center gap-2 overflow-x-auto overscroll-x-contain px-2 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 [&::-webkit-scrollbar]:hidden">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                suppressHydrationWarning
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#F76902]/40",
                  i === index
                    ? "w-8 bg-[#F76902]"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                )}
                aria-label={`Show testimonial set ${i + 1} of ${dotCount}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
