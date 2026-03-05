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
    <section className="relative py-20 md:py-28 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.08),transparent_55%)]" />
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Technologies We Work With
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Modern Tech Stack for Modern Brands
          </h2>
          <p className="mt-4 text-muted-foreground">
            We rely on battle‑tested, future‑ready technologies so your product stays fast, secure
            and scalable as you grow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <Card
              key={group.title}
              className="relative overflow-hidden border border-border/70 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 shadow-sm transition-all hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 opacity-30 blur-2xl" />
              <CardContent className="relative pt-6">
                <div className="flex items-center gap-3">
                  {group.icon && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-orange-400 text-white shadow-md shadow-blue-500/40">
                      <group.icon className="h-4 w-4" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-orange-400" />
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

