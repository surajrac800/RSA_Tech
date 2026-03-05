import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.1),transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),transparent_55%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Work Speaks for Itself
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            See How We Turn Ideas into Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore real projects where we&apos;ve helped businesses grow traffic, leads and
            revenue with the right mix of technology and marketing.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2 rsa-gradient-bg text-white shadow-md">
            <Link href="/portfolio">
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
