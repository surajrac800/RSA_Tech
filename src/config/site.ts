export const siteConfig = {
  name: "Rapid Solution & Automation",
  shortName: "RSA Tech Softwares",
  description: "Software development and digital marketing solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rsatechsoftwares.com",
  ogImage: "/og-image.png",
  /** All website form submissions are emailed here (UTM data included in each message). */
  formsNotifyEmail: "surajchaurasiya8009448@gmail.com",
  links: {
    email: "support@rsatechsoftware.in",
    phone: process.env.NEXT_PUBLIC_PHONE ?? "+919267917752",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "https://wa.me/919267917752",
    address: "135 Block C, Sector 62, Noida – 201309",
  },
} as const;
