import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/config/services";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Software development and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold md:text-4xl">Our Core Services</h1>
        <p className="mt-6 text-lg text-muted-foreground">One Partner. Endless Digital Possibilities.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="group flex flex-col border-2 hover:border-blue-200 hover:shadow-xl">
            <CardContent className="flex-1 pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="group/btn -ml-2">
                <Link href={service.href} className="gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
