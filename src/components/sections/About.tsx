import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="relative py-20 md:py-28 bg-muted/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.08),transparent_55%)]" />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              About {siteConfig.shortName}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Digital Growth. Smart Technology.{" "}
              <span className="rsa-gradient-text">Real Results.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {siteConfig.shortName} delivers comprehensive software and digital marketing solutions that help businesses thrive in the modern marketplace. From custom software to SEO and social media, we&apos;re your one-stop partner for digital success.
            </p>
            <Button asChild className="mt-8">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-orange-500/10 p-8 shadow-lg shadow-blue-500/10 backdrop-blur-md md:p-12">
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Custom Software & Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Web & Mobile Development
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Digital Marketing & SEO
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Social Media Strategy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
