import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Palette,
  FileText,
  Globe,
  Code2,
  Smartphone,
  Sparkles,
} from "lucide-react";

export type PortfolioCategory =
  | "digital-marketing"
  | "graphic-design"
  | "content-writing"
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
  /** Proof: metrics (e.g. ad results) or image path for screenshots */
  proofMetrics?: ProofMetric[];
  proofImage?: string;
  /** Live link or asset link */
  link?: string;
  linkLabel?: string;
  tools: string[];
};

/** Impact stats shown on portfolio page */
export const portfolioImpactStats = {
  adAccountsManaged: "75+",
  websitesDelivered: "550+",
  appsDelivered: "90+",
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
    label: "Digital Marketing",
    shortLabel: "Ads & Campaigns",
    icon: Megaphone,
    description: "Meta Ads, Google Ads, SEO and performance campaigns with measurable results.",
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    shortLabel: "Design",
    icon: Palette,
    description: "Brand identity, social creatives, banners and visual content.",
  },
  {
    id: "content-writing",
    label: "Content Writing",
    shortLabel: "Content",
    icon: FileText,
    description: "Blogs, copies, scripts and long-form content that converts.",
  },
  {
    id: "web-development",
    label: "Web Development",
    shortLabel: "Web",
    icon: Globe,
    description: "Websites, landing pages and web apps built for speed and conversion.",
  },
  {
    id: "software-development",
    label: "Software Development",
    shortLabel: "Software",
    icon: Code2,
    description: "Custom software, dashboards, automation and business tools.",
  },
  {
    id: "app-development",
    label: "App Development",
    shortLabel: "Apps",
    icon: Smartphone,
    description: "Mobile and cross-platform apps for Android and iOS.",
  },
  {
    id: "other",
    label: "Other Projects",
    shortLabel: "Other",
    icon: Sparkles,
    description: "Consulting, audits and special projects.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  // Digital Marketing – 75+ active Meta & Google Ads campaigns
  {
    id: "dm-1",
    category: "digital-marketing",
    title: "Meta & Google Ads – 75+ Active Campaigns",
    client: "Multiple verticals",
    industry: "Education, E-commerce, Services",
    description:
      "We currently run 75+ active Meta and Google Ads campaigns across education, retail, services and e-commerce. Full-funnel campaigns, lead gen, sales and brand awareness with measurable ROAS and CPA.",
    proofMetrics: [
      { label: "Active campaigns", value: "75+" },
      { label: "Platforms", value: "Meta & Google" },
    ],
    proofImage: "/portfolio/meta-ads-dashboard.png",
    tools: ["Meta Ads Manager", "Google Ads", "Pixel", "Analytics"],
  },
  {
    id: "dm-2",
    category: "digital-marketing",
    title: "Google Ads – Search & Performance Max",
    client: "Local & national brands",
    industry: "Various",
    description:
      "Search and Performance Max campaigns for local intent and e-commerce. Keyword strategy, landing page alignment and conversion tracking across 75+ campaigns.",
    proofMetrics: [
      { label: "Clicks", value: "12K+" },
      { label: "Conv. Rate", value: "8.2%" },
      { label: "CPA", value: "₹420" },
    ],
    proofImage: "/portfolio/google-ads-results.png",
    tools: ["Google Ads", "Search", "PMax", "GA4"],
  },
  {
    id: "dm-3",
    category: "digital-marketing",
    title: "Social & Brand Awareness Campaigns",
    client: "D2C & Retail",
    industry: "E-commerce",
    description:
      "Awareness and retargeting campaigns with custom creatives. Improved brand recall and lower cost per add-to-cart across multiple managed accounts.",
    proofMetrics: [
      { label: "Reach", value: "1.2M" },
      { label: "CTR", value: "2.1%" },
    ],
    tools: ["Meta", "Instagram", "Creative Studio"],
  },
  // Graphic Design
  {
    id: "gd-1",
    category: "graphic-design",
    title: "Brand Identity & Logo Suite",
    client: "Startup",
    industry: "Tech",
    description:
      "Complete brand identity: logo, color palette, typography and usage guidelines for web and print.",
    tools: ["Canva", "Figma", "Adobe Illustrator"],
  },
  {
    id: "gd-2",
    category: "graphic-design",
    title: "Social Media Creatives & Banners",
    client: "Retail Brand",
    industry: "Retail",
    description:
      "Monthly social creatives, story templates and promotional banners aligned with campaigns and seasons.",
    tools: ["Canva", "Photoshop", "Figma"],
  },
  {
    id: "gd-3",
    category: "graphic-design",
    title: "Ad Creatives for Meta & Google",
    client: "Multiple Clients",
    industry: "Various",
    description:
      "High-converting ad creatives (carousels, single image, video thumbnails) for lead gen and sales campaigns.",
    tools: ["Figma", "Canva", "Meta Creative Hub"],
  },
  // Content Writing
  {
    id: "cw-1",
    category: "content-writing",
    title: "SEO Blog Series & Website Copy",
    client: "B2B Service Provider",
    industry: "B2B",
    description:
      "20+ SEO-optimized blog posts and service page copy. Improved organic traffic and time on site.",
    proofMetrics: [
      { label: "Posts", value: "20+" },
      { label: "Organic Growth", value: "45%" },
    ],
    tools: ["SEO", "WordPress", "Ahrefs"],
  },
  {
    id: "cw-2",
    category: "content-writing",
    title: "Ad Copy & Landing Page Copy",
    client: "E-commerce & Education",
    industry: "Multiple",
    description:
      "Headlines, ad copy and landing page content for Meta and Google campaigns. Focus on clarity and conversion.",
    tools: ["Copywriting", "A/B Testing"],
  },
  {
    id: "cw-3",
    category: "content-writing",
    title: "Scripts & Long-Form Content",
    client: "EdTech",
    industry: "Education",
    description:
      "Video scripts, email sequences and long-form guides for nurturing and product launches.",
    tools: ["Scripts", "Email", "Notion"],
  },
  // Web Development – 550+ websites delivered (WordPress, Shopify, etc.)
  {
    id: "web-1",
    category: "web-development",
    title: "550+ Websites Delivered",
    client: "MSMEs, Startups, Brands",
    industry: "Various",
    description:
      "More than 550 websites delivered and live — built on WordPress, Shopify, Next.js and other technologies. E-commerce, landing pages, business sites and lead funnels with ads and analytics integration.",
    proofMetrics: [
      { label: "Websites", value: "550+" },
      { label: "Tech", value: "WordPress, Shopify & more" },
    ],
    proofImage: "/portfolio/websites-delivered.png",
    tools: ["WordPress", "Shopify", "Next.js", "Tailwind"],
  },
  {
    id: "web-2",
    category: "web-development",
    title: "E-commerce & Catalog Sites",
    client: "Retail & D2C",
    industry: "Retail",
    description:
      "Fast, mobile-first e-commerce and catalog websites with product listings, enquiry forms and integration with Meta/Google Ads.",
    link: "#",
    linkLabel: "View samples",
    tools: ["WordPress", "Shopify", "WooCommerce"],
  },
  {
    id: "web-3",
    category: "web-development",
    title: "Landing Pages & Lead Funnels",
    client: "Education & Services",
    industry: "Multiple",
    description:
      "Conversion-optimized landing pages with forms, WhatsApp and CRM integration for campaign traffic across 550+ delivered projects.",
    tools: ["Next.js", "React", "Form backend"],
  },
  // Software Development
  {
    id: "soft-1",
    category: "software-development",
    title: "Custom Dashboard & Reporting",
    client: "Logistics Startup",
    industry: "Logistics",
    description:
      "Internal dashboard for operations and reporting. Real-time data and export for decision-making.",
    tools: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "soft-2",
    category: "software-development",
    title: "CRM & Lead Management Tool",
    client: "Real Estate Group",
    industry: "Real Estate",
    description:
      "Custom CRM for leads, follow-ups and pipeline visibility. Integrated with WhatsApp and email.",
    tools: ["Node.js", "React", "REST API"],
  },
  {
    id: "soft-3",
    category: "software-development",
    title: "Automation & Workflow Tools",
    client: "Manufacturing MSME",
    industry: "Manufacturing",
    description:
      "Workflow automation for orders, inventory and notifications. Reduced manual data entry and errors.",
    tools: ["Node.js", "Automation", "DB"],
  },
  // App Development – 90+ apps successfully delivered
  {
    id: "app-1",
    category: "app-development",
    client: "Marketplaces, Distribution, Services",
    industry: "Various",
    title: "90+ Apps Successfully Developed",
    description:
      "90+ mobile and cross-platform apps delivered and live — from services marketplaces and order management to booking and customer apps. Android, PWA and hybrid solutions.",
    proofMetrics: [
      { label: "Apps", value: "90+" },
      { label: "Platforms", value: "Android, PWA" },
    ],
    proofImage: "/portfolio/apps-delivered.png",
    tools: ["React Native", "Flutter", "PWA", "Node.js"],
  },
  {
    id: "app-2",
    category: "app-development",
    title: "Services Marketplace App",
    client: "Local Services",
    industry: "Marketplace",
    description:
      "Cross-platform app for vendors and customers: listings, bookings, chat and payments.",
    proofMetrics: [
      { label: "Platform", value: "Android" },
      { label: "Users", value: "5K+" },
    ],
    tools: ["React Native", "Node.js", "Firebase"],
  },
  {
    id: "app-3",
    category: "app-development",
    title: "Customer & Order Management App",
    client: "Distribution Business",
    industry: "Distribution",
    description:
      "Mobile app for field staff: order entry, collection and sync with backend. Offline support. Part of our 90+ delivered apps.",
    tools: ["React Native", "Sync", "API"],
  },
  // Other
  {
    id: "other-1",
    category: "other",
    title: "Digital Audit & Strategy",
    client: "MSME",
    industry: "Various",
    description:
      "Full digital audit: website, ads, SEO and social. Delivered roadmap and quick wins.",
    tools: ["Audit", "Strategy", "Reporting"],
  },
];
