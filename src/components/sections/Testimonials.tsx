 "use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

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

const VISIBLE_CARDS = 3;
const AUTO_SCROLL_MS = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, []);

  const visibleTestimonials = Array.from({ length: VISIBLE_CARDS }).map((_, offset) => {
    const i = (index + offset) % testimonials.length;
    return testimonials[i];
  });

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.09),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.08),transparent_55%)]" />
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Client Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Our Clients Speak for Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            Businesses across different industries trust {siteConfig.shortName} to plan, build and
            grow their digital presence.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="grid gap-6 md:grid-cols-3">
            {visibleTestimonials.map((item) => (
              <Card
                key={`${item.name}-${item.role}`}
                className="relative h-full overflow-hidden border border-border/70 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 shadow-sm transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/15"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 opacity-20 blur-2xl" />
                <CardContent className="relative flex h-full flex-col pt-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    “{item.quote}”
                  </p>
                  <div className="mt-6 pt-4 text-sm">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs font-medium text-blue-700">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => {
            const base = "h-2.5 w-2.5 rounded-full transition-all";
            const active =
              " bg-gradient-to-r from-blue-500 via-violet-500 to-orange-400 scale-110";
            const inactive = " bg-muted hover:bg-muted-foreground/50";
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={base + (i === index ? active : inactive)}
                aria-label={`Go to testimonial ${i + 1}`}
                suppressHydrationWarning
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

