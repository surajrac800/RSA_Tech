import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section className="home-section-py relative bg-white">
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="marketing-eyebrow">About {siteConfig.shortName}</p>
            <h2 className="marketing-heading mt-3">
              Digital Growth. Smart Technology.{" "}
              <span className="rsa-gradient-text">Real Results.</span>
            </h2>
            <p className="marketing-body mt-6">
              {siteConfig.shortName} delivers comprehensive software and digital marketing solutions that help businesses thrive in the modern marketplace. From custom software to SEO and social media, we&apos;re your one-stop partner for digital success.
            </p>
            <Button
              asChild
              className="mt-8 rounded-[30px] bg-[#F76902] px-6 font-semibold text-white hover:bg-[#f9802b]"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="rounded-2xl border-2 border-amber-400/70 bg-white p-8 shadow-lg md:p-12">
            <h3 className="marketing-subheading mb-4">Our Expertise</h3>
            <ul className="marketing-body space-y-3">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                Custom Software & Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                Web & Mobile Development
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                Digital Marketing & SEO
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F76902]" />
                Social Media Strategy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
