// src/app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertising Blog | Outdoor Marketing Tips & Insights | World Media NCR',
  description: 'Expert insights on outdoor advertising, hoarding marketing, digital wall painting, and brand promotion strategies for businesses in Meerut and NCR.',
  keywords: 'advertising blog, outdoor marketing tips, hoarding advertising guide, wall painting benefits, advertising insights meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'benefits-of-hoarding-advertising',
    title: 'Top 10 Benefits of Hoarding Advertising for Local Businesses',
    excerpt: 'Discover why hoarding advertising remains the most effective outdoor marketing strategy for businesses in Meerut and how it can boost your brand visibility.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Hoarding Advertising'
  },
  {
    slug: 'digital-wall-painting-vs-traditional-ads',
    title: 'Digital Wall Painting vs Traditional Advertising: Which is Better?',
    excerpt: 'Compare the costs, longevity, and effectiveness of digital wall painting versus traditional advertising methods for businesses in Meerut.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Wall Painting'
  },
  {
    slug: 'outdoor-advertising-cost-meerut',
    title: 'Complete Guide to Outdoor Advertising Costs in Meerut (2024)',
    excerpt: 'Detailed breakdown of hoarding, billboard, wall painting, and vehicle branding costs in Meerut. Get the best ROI for your advertising budget.',
    date: '2024-01-05',
    readTime: '8 min read',
    category: 'Pricing Guide'
  },
  {
    slug: 'best-locations-hoarding-meerut',
    title: 'Best Locations for Hoarding Advertising in Meerut',
    excerpt: 'Discover the top 20 locations for hoarding advertising in Meerut with highest traffic and visibility. Strategic spots for maximum brand exposure.',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Location Guide'
  },
  {
    slug: 'vehicle-branding-benefits',
    title: 'Why Vehicle Branding is the Most Cost-Effective Mobile Advertising',
    excerpt: 'Learn how vehicle branding can give your business thousands of daily impressions at a fraction of the cost of traditional advertising.',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Vehicle Branding'
  }
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Advertising Blog & Insights</h1>
      <p className="text-xl text-gray-600 mb-12">Expert tips, guides, and insights for outdoor advertising in Meerut & NCR</p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition">{post.title}</h2>
            </Link>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{post.category}</span>
            </div>
            <p className="text-gray-700 mb-3">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}