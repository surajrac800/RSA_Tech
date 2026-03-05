export const siteConfig = {
  name: "Rapid Solution & Automation",
  shortName: "RSA Tech Softwares",
  description: "Software development and digital marketing solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rsatechsoftwares.com",
  ogImage: "/og-image.png",
  links: {
    email: "support@rsatechsoftware.in",
    phone: process.env.NEXT_PUBLIC_PHONE ?? "+919267917752",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "https://wa.me/919267917752",
    address: "3, 100Ft Road, Mudaliyarpet, Pondicherry – 605004",
  },
} as const;
