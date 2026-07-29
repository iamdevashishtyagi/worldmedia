import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertising Blog | Outdoor Marketing Tips & Insights | World Media NCR",
  description: "Expert insights on outdoor advertising, hoarding marketing, digital wall painting, and brand promotion strategies for businesses in Meerut and NCR.",
  alternates: { canonical: "https://worldmediancr.com/blog" },
};

const posts = [
  { slug: "benefits-of-hoarding-advertising", title: "Top 10 Benefits of Hoarding Advertising for Local Businesses", excerpt: "Discover why hoarding advertising remains an effective way to strengthen local brand visibility.", date: "January 15, 2024", readTime: "5 min read", category: "Hoarding Advertising", image: "/images/portfolio/Baghra Bus Stand.webp" },
  { slug: "digital-wall-painting-vs-traditional-ads", title: "Digital Wall Painting vs Traditional Advertising: Which is Better?", excerpt: "Compare longevity, visibility and campaign flexibility when choosing a local outdoor advertising format.", date: "January 10, 2024", readTime: "7 min read", category: "Wall Painting", image: "/images/toWEBP/dwp36.webp" },
  { slug: "outdoor-advertising-cost-guide-2024", title: "How to Plan an Outdoor Advertising Campaign", excerpt: "A practical guide to selecting formats, locations, creative and installation timelines.", date: "January 5, 2024", readTime: "8 min read", category: "Campaign Planning", image: "/images/portfolio/Muzaffarnagar Rorkee Road.webp" },
  { slug: "best-locations-for-hoarding-in-meerut", title: "Best Locations for Hoarding Advertising in Meerut", excerpt: "Explore the factors that make a location valuable for a high-visibility outdoor campaign.", date: "December 28, 2023", readTime: "6 min read", category: "Location Guide", image: "/images/portfolio/Meerut Sardhana.webp" },
  { slug: "why-choose-world-media-ncr-for-advertising", title: "Why Choose World Media NCR for Advertising in Meerut & NCR", excerpt: "Learn about our planning, site knowledge and campaign production support for local advertisers.", date: "February 25, 2024", readTime: "7 min read", category: "Company", image: "/images/portfolio/Muzaffarnagar Shamli Road.webp" },
];

export default function BlogPage() {
  return <main className="py-8">
    <div className="max-w-3xl"><p className="font-semibold uppercase tracking-[0.18em] text-blue-700">World Media NCR journal</p><h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Advertising Blog & Insights</h1><p className="mt-4 mb-12 text-xl leading-8 text-slate-600">Expert tips, guides, and insights for outdoor advertising in Meerut and NCR.</p></div>
    <div className="grid gap-7 md:grid-cols-2">
      {posts.map((post) => <article key={post.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Link href={`/blog/${post.slug}`} className="block"><div className="relative aspect-video"><Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div></Link>
        <div className="p-6"><Link href={`/blog/${post.slug}`}><h2 className="text-2xl font-semibold text-slate-900 transition hover:text-blue-700">{post.title}</h2></Link><div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500"><span>{post.date}</span><span>•</span><span>{post.readTime}</span><span className="rounded-full bg-blue-100 px-2.5 py-1 font-medium text-blue-800">{post.category}</span></div><p className="mt-4 text-slate-700">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-block font-semibold text-blue-700 hover:underline">Read article →</Link></div>
      </article>)}
    </div>
  </main>;
}
