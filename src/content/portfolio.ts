import type { LucideIcon } from "lucide-react";
import { Megaphone, Globe, Code2, Smartphone, Sparkles } from "lucide-react";
import { companyStats } from "@/config/company-stats";

export type PortfolioCategory =
  | "digital-marketing"
  | "web-development"
  | "software-development"
  | "app-development"
  | "other";

export type ProofMetric = {
  label: string;
  value: string;
};

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  client?: string;
  industry?: string;
  description: string;
  proofMetrics?: ProofMetric[];
  proofImage?: string;
  link?: string;
  linkLabel?: string;
  tools: string[];
};

/** Legacy export — same figures as companyStats (ProjectShowcase, etc.) */
export const portfolioImpactStats = {
  adAccountsManaged: companyStats.activeAdCampaigns,
  websitesDelivered: companyStats.websitesDelivered,
  appsDelivered: companyStats.appsDelivered,
} as const;

export const portfolioCategories: {
  id: PortfolioCategory;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    id: "digital-marketing",
    label: "Digital marketing & content",
    shortLabel: "Marketing",
    icon: Megaphone,
    description:
      "Performance campaigns, SEO, social, creatives and copy—the same stack as our Digital Marketing service page.",
  },
  {
    id: "web-development",
    label: "Website development",
    shortLabel: "Websites",
    icon: Globe,
    description:
      "Business sites, e‑commerce, landing pages and fast frontends—WordPress, Shopify, Next.js and more.",
  },
  {
    id: "software-development",
    label: "Software development",
    shortLabel: "Software",
    icon: Code2,
    description:
      "CRM-style tools, dashboards, workflows and automation aligned with our custom software offering.",
  },
  {
    id: "app-development",
    label: "App development",
    shortLabel: "Apps",
    icon: Smartphone,
    description:
      "Android and cross‑platform apps, including web‑to‑app—matching our App Development services.",
  },
  {
    id: "other",
    label: "Strategy & special projects",
    shortLabel: "Other",
    icon: Sparkles,
    description:
      "Audits, roadmaps and engagements that sit across disciplines.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "dm-1",
    category: "digital-marketing",
    title: `Meta & Google Ads — ${companyStats.activeAdCampaigns} active campaigns`,
    client: "Multiple verticals",
    industry: "Education, e‑commerce, services",
    description:
      "Ongoing Meta and Google Ads work across education, retail and services: lead gen, sales and brand campaigns with tracking and reporting—aligned with our delivery scale.",
    proofMetrics: [
      { label: "Active campaigns", value: companyStats.activeAdCampaigns },
      { label: "Platforms", value: "Meta & Google" },
    ],
    proofImage: "/portfolio/meta-ads-dashboard.png",
    tools: ["Meta Ads", "Google Ads", "Pixel", "Analytics"],
  },
  {
    id: "dm-2",
    category: "digital-marketing",
    title: "Google Ads — search & Performance Max",
    client: "Local & national brands",
    industry: "Various",
    description:
      "Search and Performance Max setups for local intent and e‑commerce: structure, landing alignment and conversion tracking—without promising fixed CPAs on this overview.",
    tools: ["Google Ads", "Search", "Performance Max", "GA4"],
  },
  {
    id: "dm-3",
    category: "digital-marketing",
    title: "Social & brand campaigns",
    client: "D2C & retail",
    industry: "E‑commerce",
    description:
      "Awareness and retargeting with creatives tied to product and seasonality; reporting focused on reach, frequency and downstream conversions.",
    tools: ["Meta", "Instagram", "Creative production"],
  },
  {
    id: "gd-1",
    category: "digital-marketing",
    title: "Brand identity & logo suite",
    client: "Startup",
    industry: "Technology",
    description:
      "Logo, palette, typography and usage notes for web and print—usually bundled with site or campaign launches.",
    tools: ["Figma", "Illustrator", "Brand guidelines"],
  },
  {
    id: "gd-2",
    category: "digital-marketing",
    title: "Social creatives & ad formats",
    client: "Retail brand",
    industry: "Retail",
    description:
      "Stories, feeds and display-style assets aligned to Meta/Google specs and your media plan.",
    tools: ["Figma", "Canva", "Photoshop"],
  },
  {
    id: "gd-3",
    category: "digital-marketing",
    title: "Campaign creatives (static & carousel)",
    client: "Multiple clients",
    industry: "Various",
    description:
      "Creatives for lead and sales campaigns—iterations based on performance feedback from live ads.",
    tools: ["Figma", "Meta Creative Hub"],
  },
  {
    id: "cw-1",
    category: "digital-marketing",
    title: "SEO blogs & service copy",
    client: "B2B service provider",
    industry: "B2B",
    description:
      "Long-form and service pages tuned for search intent; outcomes depend on niche—we scope keywords and cadence with you.",
    tools: ["SEO", "WordPress", "Content briefs"],
  },
  {
    id: "cw-2",
    category: "digital-marketing",
    title: "Ad & landing page copy",
    client: "E‑commerce & education",
    industry: "Multiple",
    description:
      "Headlines and body copy for paid traffic: clarity, CTA alignment and variant testing where we run the campaigns.",
    tools: ["Copy", "Landing structure", "A/B review"],
  },
  {
    id: "cw-3",
    category: "digital-marketing",
    title: "Scripts & nurture content",
    client: "EdTech",
    industry: "Education",
    description:
      "Video scripts, email sequences and guides for launches and onboarding flows.",
    tools: ["Scripts", "Email", "Documentation"],
  },
  {
    id: "web-1",
    category: "web-development",
    title: `${companyStats.websitesDelivered} websites delivered`,
    client: "MSMEs, startups, brands",
    industry: "Various",
    description:
      "Corporate sites, e‑commerce, landers and funnel pages on WordPress, Shopify, Next.js and related stacks—with analytics and form/WhatsApp hooks where needed.",
    proofMetrics: [
      { label: "Websites", value: companyStats.websitesDelivered },
      { label: "Stack", value: "WordPress, Shopify, Next.js" },
    ],
    proofImage: "/portfolio/websites-delivered.png",
    tools: ["WordPress", "Shopify", "Next.js", "Tailwind"],
  },
  {
    id: "web-2",
    category: "web-development",
    title: "E‑commerce & catalogue sites",
    client: "Retail & D2C",
    industry: "Retail",
    description:
      "Product catalogues, checkout or lead pathways, and integration hooks for ads and CRM.",
    link: "#",
    linkLabel: "Discuss similar build",
    tools: ["WordPress", "Shopify", "WooCommerce"],
  },
  {
    id: "web-3",
    category: "web-development",
    title: "Landing pages & lead funnels",
    client: "Education & services",
    industry: "Multiple",
    description:
      "Conversion-focused pages for paid and organic traffic: forms, tracking and hand-off to your sales process.",
    tools: ["Next.js", "React", "Forms & APIs"],
  },
  {
    id: "soft-1",
    category: "software-development",
    title: "Operations dashboards & reporting",
    client: "Logistics startup",
    industry: "Logistics",
    description:
      "Internal views for live operations, exports and role-based access—typical of our custom software engagements.",
    tools: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "soft-2",
    category: "software-development",
    title: "CRM & pipeline tools",
    client: "Real estate group",
    industry: "Real estate",
    description:
      "Lead stages, follow-ups and hand-offs; integrations with WhatsApp and email where the client needs it.",
    tools: ["Node.js", "React", "REST APIs"],
  },
  {
    id: "soft-3",
    category: "software-development",
    title: "Workflow & inventory helpers",
    client: "Manufacturing MSME",
    industry: "Manufacturing",
    description:
      "Lightweight workflows for orders and stock with fewer manual steps—scoped to the team’s actual process.",
    tools: ["Node.js", "Automation", "Database"],
  },
  {
    id: "app-1",
    category: "app-development",
    title: `${companyStats.appsDelivered} apps developed`,
    client: "Marketplaces, distribution, services",
    industry: "Various",
    description:
      "Android, PWA and hybrid apps for bookings, catalogues, field workflows and customer access—consistent with our app development positioning.",
    proofMetrics: [
      { label: "Apps", value: companyStats.appsDelivered },
      { label: "Platforms", value: "Android, PWA" },
    ],
    proofImage: "/portfolio/apps-delivered.png",
    tools: ["React Native", "Flutter", "PWA", "Node.js"],
  },
  {
    id: "app-2",
    category: "app-development",
    title: "Services marketplace app",
    client: "Local services",
    industry: "Marketplace",
    description:
      "Vendor and customer flows: listings, bookings and notifications—architecture sized to your phase-one scope.",
    tools: ["React Native", "Node.js", "Firebase"],
  },
  {
    id: "app-3",
    category: "app-development",
    title: "Field order & collection app",
    client: "Distribution business",
    industry: "Distribution",
    description:
      "Mobile workflows for orders and collections with API sync—offline behaviour scoped per project.",
    tools: ["React Native", "REST API"],
  },
  {
    id: "other-1",
    category: "other",
    title: "Digital audit & roadmap",
    client: "MSME",
    industry: "Various",
    description:
      "Website, ads and SEO snapshot with a phased plan—often the entry before a larger build or retainer.",
    tools: ["Audit", "Roadmap", "Reporting"],
  },
];
