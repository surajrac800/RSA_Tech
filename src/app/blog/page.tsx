import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog & Insights | RSA Tech Softwares",
  description:
    "Insights, tips and digital growth strategies across digital marketing, web development, app development and business growth.",
};

const categories = [
  {
    title: "Digital Marketing",
    description: "Latest strategies in SEO, PPC, and Social Media.",
  },
  {
    title: "SEO",
    description: "Guides to ranking higher on Google and improving organic visibility.",
  },
  {
    title: "Web Development",
    description: "Best practices for high‑performance, conversion‑focused websites.",
  },
  {
    title: "App Development",
    description: "Trends and ideas in mobile app technology and UX.",
  },
  {
    title: "Business Growth",
    description: "Actionable tips tailored for Startups & MSMEs.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="border-b bg-gradient-to-b from-blue-50/70 via-background to-background">
        <div className="container py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Blog
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Insights, Tips &{" "}
              <span className="rsa-gradient-text">Digital Growth Strategies</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Stay updated with the latest trends in digital marketing, web development, app
              development and technology for growing businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Browse Categories
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Explore topics relevant to your stage of growth and get practical ideas you can apply.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-4 w-fit border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Link href="/blog">Read Articles</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Latest Articles
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Read in‑depth articles written for business owners, marketers and founders.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                  {post.category}
                </p>
                <h3 className="mt-2 text-base font-semibold md:text-lg">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {post.summary}
                </p>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="mt-3 px-0 text-blue-700"
                >
                  <Link href={`/blog/${post.slug}`}>Read Article →</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


