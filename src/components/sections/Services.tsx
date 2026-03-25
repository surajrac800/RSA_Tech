import Link from "next/link";
import { services } from "@/config/services";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section className="home-section-py relative bg-white">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <p className="marketing-eyebrow">What we offer</p>
          <h2 className="marketing-heading mt-3">Our Core Services</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col overflow-hidden border-2 border-amber-400/70 bg-white shadow-sm transition-all hover:-translate-y-2 hover:border-[#F76902] hover:shadow-xl hover:shadow-amber-400/20"
            >
              <CardContent className="flex-1 pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-amber-400 bg-amber-50 text-[#F76902] transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="marketing-subheading">{service.title}</h3>
                <p className="marketing-body mt-2">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  asChild
                  className="group/btn -ml-2 text-[#F76902] hover:text-[#f9802b]"
                >
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
