export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Website Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "Software Development", href: "/services/software-development" },
    ],
  },
  { label: "B2B", href: "/b2b" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Internship Program", href: "/internship-program" },
  { label: "Contact Us", href: "/contact" },
];
