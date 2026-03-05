import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { Button } from "@/components/ui/button";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article not found | RSA Tech Softwares",
    };
  }
  return {
    title: `${post.title} | RSA Tech Softwares`,
    description: post.summary,
  };
}

export default function BlogArticlePage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <section className="border-b bg-gradient-to-b from-blue-50/70 via-background to-background">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              {post.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">{post.summary}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="prose max-w-3xl text-sm md:text-base text-muted-foreground">
            {post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/blog">← Back to Blog</Link>
            </Button>
            <Button asChild size="sm" className="rsa-gradient-bg text-white">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


