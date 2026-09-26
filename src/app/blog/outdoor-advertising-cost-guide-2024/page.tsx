import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/SeoJsonLd";

export const metadata: Metadata = {
  title: "Outdoor Advertising Campaign Planning Guide | World Media NCR",
  description: "A practical guide to planning an outdoor advertising campaign in Meerut and NCR, from selecting a format and location to preparing creative and scheduling installation.",
  alternates: { canonical: "https://worldmediancr.com/blog/outdoor-advertising-cost-guide-2024" },
  openGraph: {
    title: "Outdoor Advertising Campaign Planning Guide",
    description: "Plan a stronger outdoor advertising campaign in Meerut and NCR.",
    url: "https://worldmediancr.com/blog/outdoor-advertising-cost-guide-2024",
    type: "article",
    images: [{ url: "/images/portfolio/Muzaffarnagar Rorkee Road.webp", width: 1200, height: 630 }],
  },
};

export default function CampaignPlanningGuide() {
  return (
    <article className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://worldmediancr.com" },
          { name: "Blog", url: "https://worldmediancr.com/blog" },
          { name: "Campaign Planning Guide", url: "https://worldmediancr.com/blog/outdoor-advertising-cost-guide-2024" },
        ]}
      />
      <ArticleJsonLd
        title="Outdoor Advertising Campaign Planning Guide"
        description="A practical guide to planning an outdoor advertising campaign in Meerut and NCR."
        url="/blog/outdoor-advertising-cost-guide-2024"
        datePublished="2024-01-05"
        image="/images/portfolio/Muzaffarnagar Rorkee Road.webp"
      />

      <nav className="mb-8 flex text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center gap-2 text-slate-600">
          <li><Link href="/" className="hover:text-[#0A173E]">Home</Link></li>
          <li>/</li>
          <li><Link href="/blog" className="hover:text-[#0A173E]">Blog</Link></li>
          <li>/</li>
          <li className="text-slate-500">Campaign planning guide</li>
        </ol>
      </nav>

      <header className="mb-8">
        <p className="mb-3 font-semibold uppercase tracking-[0.16em] text-[#0A173E]">Campaign planning</p>
        <h1 className="text-4xl font-bold text-[#0A173E] md:text-5xl">How to Plan an Outdoor Advertising Campaign</h1>
        <p className="mt-4 text-slate-600">Published January 5, 2024 · 8 min read</p>
      </header>

      <div className="relative h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/portfolio/Muzaffarnagar Rorkee Road.webp"
          alt="Outdoor advertising hoarding at a roadside location"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">A successful outdoor campaign begins with a clear objective, a realistic schedule and a location that puts the message in front of the right audience. This guide explains the practical decisions that shape a campaign in Meerut and NCR.</p>

        <h2>Start with one clear campaign objective</h2>
        <p>Decide whether the campaign needs to launch a product, increase local awareness, guide people to a store, support an event or reinforce an existing brand. A single priority helps determine the format, creative and location.</p>

        <h2>Match the format to the audience journey</h2>
        <p>Hoardings and billboards work well for sustained roadside visibility. Digital wall painting can support long-term neighbourhood awareness. Vehicle branding reaches audiences across several routes, while LED displays are useful when the message needs to change frequently.</p>

        <h2>Choose locations using real campaign context</h2>
        <p>Consider where the audience travels, the direction of traffic, viewing distance, nearby landmarks, lighting, competing displays and the time people have to read the creative. Visit shortlisted sites where possible before approving the plan.</p>

        <h2>Prepare creative for fast recognition</h2>
        <p>Outdoor creative should use a strong visual hierarchy: one message, a visible brand mark, high contrast and a clear action. Keep copy short enough to understand at a glance and check that phone numbers, QR codes and URLs remain readable from the expected viewing distance.</p>

        <h2>Plan production and installation early</h2>
        <p>Confirm artwork dimensions, production specifications, permissions, installation access and launch dates before finalising the campaign. Build in time for creative review and site checks so the live campaign matches the approved plan.</p>

        <h2>Review and improve the campaign</h2>
        <p>Document each live site with photographs, monitor the condition of the display and compare the campaign outcome with the original objective. The findings make the next location and creative decision more reliable.</p>

        <h2>Frequently asked questions</h2>
        <h3>How far ahead should an outdoor campaign be planned?</h3>
        <p>Begin planning early enough to assess locations, prepare creative, confirm production and coordinate installation. The appropriate lead time depends on format, availability and campaign complexity.</p>

        <h3>Can one campaign use several formats?</h3>
        <p>Yes. A coordinated mix of formats can reach people at different points in their daily journey when all placements share a clear message and visual identity.</p>

        <h3>How can I request a campaign recommendation?</h3>
        <p><Link href="/contact" className="text-[#0A173E] font-semibold hover:underline">Contact World Media NCR</Link> with your audience, preferred areas, timeline and campaign objective. The team can recommend suitable formats and locations.</p>
      </div>
    </article>
  );
}
