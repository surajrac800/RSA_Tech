export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "software" | "marketing";
  image?: string;
  link?: string;
}
