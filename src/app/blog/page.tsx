import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/SeoJsonLd";
import { blogPostsData } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Outdoor Advertising Blog & Rate Guides | World Media NCR",
  description: "Expert insights, campaign planning guides, hoarding rates, and outdoor advertising strategies across Meerut, Delhi NCR, and Western Uttar Pradesh by World Media NCR.",
  keywords: [
    "outdoor advertising blog",
    "hoarding rates guide meerut",
    "best advertising agency in meerut insights",
    "digital wall painting guide",
    "billboard advertising strategy",
    "outdoor advertising tips UP"
  ],
  alternates: { canonical: "https://worldmediancr.com/blog" },
  openGraph: {
    title: "Outdoor Advertising Blog & Rate Guides | World Media NCR",
    description: "Expert tips, guides, and insights for outdoor advertising, hoardings, and billboards in Meerut and NCR.",
    url: "https://worldmediancr.com/blog",
    siteName: "World Media NCR",
    images: [
      {
        url: "/images/portfolio/Baghra Bus Stand.webp",
        width: 1200,
        height: 630,
        alt: "World Media NCR - Outdoor Advertising Blog & Insights",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://worldmediancr.com" },
          { name: "Blog", url: "https://worldmediancr.com/blog" },
        ]}
      />

      {/* Header section - wide, modern, strictly NO yellow tag line above heading */}
      <div className="max-w-4xl mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A173E] tracking-tight">
          Outdoor Advertising Insights &amp; Guides
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed">
          In-depth strategies, cost benchmarks, municipal compliance guidelines, and execution frameworks for hoardings, digital wall painting, and transit media across Meerut &amp; NCR.
        </p>
      </div>

      {/* Spacious 3-column Grid across full 7xl container */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPostsData.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#D8EAFD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0A173E] hover:shadow-xl"
          >
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                <span className="rounded-full bg-[#F0F8FF] border border-[#D8EAFD] px-3 py-1 font-bold text-[#0A173E]">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <Link href={`/blog/${post.slug}`} className="group-hover:text-blue-900 transition">
                <h2 className="text-xl font-bold text-[#0A173E] leading-snug line-clamp-2">
                  {post.title}
                </h2>
              </Link>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0A173E] group-hover:translate-x-1 transition-transform"
                >
                  Read Article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
