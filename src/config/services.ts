import {
  Megaphone,
  Globe,
  Smartphone,
  Code2,
  Search,
  Share2,
} from "lucide-react";

export const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Grow visibility, traffic, and conversions with data-driven strategies.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    id: "web-development",
    title: "Website Development",
    description:
      "High-speed, SEO-friendly, conversion-optimized websites.",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Android & cross-platform mobile applications built for performance.",
    href: "/services/software",
    icon: Smartphone,
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom business software that automates, simplifies, and scales.",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Rank higher on Google and drive organic traffic to your business.",
    href: "/services/digital-marketing",
    icon: Search,
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "Build your brand and engage customers on Facebook & Instagram.",
    href: "/services/digital-marketing",
    icon: Share2,
  },
] as const;
