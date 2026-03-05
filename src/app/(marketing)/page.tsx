import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { About } from "@/components/sections/About";
import { ManagingDirectorSection } from "@/components/sections/ManagingDirector";
import { Technologies } from "@/components/sections/Technologies";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Portfolio } from "@/components/sections/Portfolio";
import { Cta } from "@/components/sections/Cta";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectShowcase />
      <WhyUs />
      <Services />
      <Industries />
      <About />
      <ManagingDirectorSection />
      <Technologies />
      <Portfolio />
      <Cta />
      <Testimonials />
      <Contact />
    </>
  );
}
