import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { TechnologyExpertise } from "@/components/sections/TechnologyExpertise";
import { ManagingDirectorSection } from "@/components/sections/ManagingDirector";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { HireDeveloperCta } from "@/components/sections/HireDeveloperCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <TechnologyExpertise />
      <ManagingDirectorSection />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <HireDeveloperCta />
    </>
  );
}
