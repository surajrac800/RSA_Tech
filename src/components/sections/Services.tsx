import Link from "next/link";
import { services } from "@/config/services";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section className="relative py-20 md:py-28 bg-muted/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.1),transparent_60%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.08),transparent_60%)]" />
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            What We Do Best
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One partner for high-performance websites, apps, software and digital campaigns that
            actually convert.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col overflow-hidden border border-border/70 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 shadow-sm transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <CardContent className="flex-1 pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md shadow-blue-500/40 transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="group/btn -ml-2 text-blue-700">
                  <Link href={service.href} className="gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
