import {
  Code2,
  Server,
  Smartphone,
  LineChart,
  Brain,
  Gamepad2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techGroups = [
  {
    title: "Web & Frontend",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Shopify"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "Express", "PHP", "Laravel", "REST APIs", "MongoDB / SQL"],
  },
  {
    title: "Mobile & Apps",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Android", "iOS (SwiftUI)", "PWA"],
  },
  {
    title: "Marketing & Analytics",
    icon: LineChart,
    items: ["Google Analytics", "Search Console", "Meta Ads", "SEO Tools"],
  },
  {
    title: "Data Science, AI & ML",
    icon: Brain,
    items: ["Python", "Machine Learning", "Deep Learning", "Pandas / NumPy", "Data Visualisation"],
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    items: ["Unity", "Unreal Engine", "C#", "2D / 3D Game UI", "Game Assets"],
  },
];

export function Technologies() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="marketing-eyebrow">Technologies We Work With</p>
          <h2 className="marketing-heading mt-3">Modern Tech Stack for Modern Brands</h2>
          <p className="marketing-body mt-4">
            We rely on battle‑tested, future‑ready technologies so your product stays fast, secure
            and scalable as you grow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <Card
              key={group.title}
              className="relative overflow-hidden border-2 border-amber-400/70 bg-white shadow-sm transition-all hover:-translate-y-2 hover:border-[#F76902] hover:shadow-xl hover:shadow-amber-400/20"
            >
              <CardContent className="relative pt-6">
                <div className="flex items-center gap-3">
                  {group.icon && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-amber-400 bg-amber-50 text-[#F76902]">
                      <group.icon className="h-4 w-4" />
                    </div>
                  )}
                  <h3 className="marketing-subheading">{group.title}</h3>
                </div>
                <ul className="marketing-body mt-4 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F76902]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

