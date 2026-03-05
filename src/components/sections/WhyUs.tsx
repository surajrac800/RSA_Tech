import { siteConfig } from "@/config/site";
import { Target, Shield, DollarSign, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Target,
    title: "ROI-focused marketing strategies",
  },
  {
    icon: Shield,
    title: "Scalable & secure development",
  },
  {
    icon: DollarSign,
    title: "Transparent pricing & real support",
  },
  {
    icon: Users,
    title: "Trusted by startups & growing brands",
  },
  {
    icon: Zap,
    title: "360° Digital & Technology Solutions under one roof",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.06),transparent_60%)]" />
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why RSA Tech Softwares
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Why {siteConfig.shortName}?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            360° digital and technology partner blending strategy, design and engineering under one
            roof.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((item) => (
            <Card
              key={item.title}
              className="group border border-border/70 bg-gradient-to-br from-white/90 via-blue-50/40 to-violet-50/50 shadow-sm transition-all hover:-translate-y-2 hover:border-blue-300/80 hover:shadow-2xl hover:shadow-blue-500/15"
            >
              <CardContent className="flex flex-col items-center gap-3 pt-7 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-lg shadow-blue-500/40 transition-transform group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium md:text-base">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
