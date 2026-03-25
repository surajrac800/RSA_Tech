import { ServiceProcessSection } from "@/components/sections/services/ServiceProcessSection";

const processSteps = [
  {
    title: "Requirements",
    description:
      "We gather detailed requirements and understand your business goals before a single line of code is written.",
  },
  {
    title: "Design",
    description:
      "Wireframes and UI focused on usability and your brand—reviewed and approved before build.",
  },
  {
    title: "Development",
    description:
      "Approved designs become clean, maintainable code with performance and SEO in mind.",
  },
  {
    title: "Testing",
    description:
      "Devices, browsers and real user flows—polish until the experience feels effortless.",
  },
  {
    title: "Launch",
    description:
      "Deploy, monitor and support post‑launch so your site stays fast and reliable.",
  },
] as const;

export function WebDevProcessSection() {
  return (
    <ServiceProcessSection
      heading="Website development process"
      intro={
        "A clear path from brief to launch—checkpoints at every stage so you always know what's done and what's next."
      }
      steps={processSteps}
      ctaLabel="Plan your build with us"
      progressAriaLabel="Website development process steps"
      footerSuffix="ready to launch"
    />
  );
}
