// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/data/blogs';
import { BreadcrumbJsonLd, ArticleJsonLd, FaqJsonLd } from '@/components/SeoJsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found | World Media NCR' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: post.canonical,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: post.canonical,
      siteName: 'World Media NCR',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostDynamicPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Blog', url: 'https://worldmediancr.com/blog' },
          { name: post.title, url: post.canonical },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        url={post.canonical}
        datePublished={post.datePublished}
        image={post.image}
      />
      {post.faqs.length > 0 && (
        <FaqJsonLd
          faqs={post.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))}
        />
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-slate-500">
          <li>
            <Link href="/" className="hover:text-[#0A173E] transition">Home</Link>
          </li>
          <li><span>/</span></li>
          <li>
            <Link href="/blog" className="hover:text-[#0A173E] transition">Blog</Link>
          </li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate max-w-xs md:max-w-md">
            {post.category}
          </li>
        </ol>
      </nav>

      {/* Article Header - Strictly NO yellow tag line above the main heading */}
      <header className="mb-10 max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-[#0A173E] mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 pb-6 border-b border-[#D8EAFD]">
          <span className="font-semibold text-slate-800">By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="font-semibold text-[#0A173E] bg-[#F0F8FF] px-3.5 py-1 rounded-full border border-[#D8EAFD] text-xs">
            {post.category}
          </span>
        </div>
      </header>

      {/* Featured Hero Image - Full width of max-w-6xl container */}
      <div className="relative aspect-[21/9] sm:aspect-[16/8] mb-12 rounded-3xl overflow-hidden shadow-xl border border-[#D8EAFD]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      {/* Lead Excerpt */}
      <div className="max-w-4xl">
        <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-medium mb-12 pb-8 border-b border-slate-100 italic">
          &ldquo;{post.excerpt}&rdquo;
        </p>
      </div>

      {/* Article Body Sections */}
      <div className="max-w-4xl space-y-12 text-slate-800 text-lg leading-relaxed">
        {post.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A173E] tracking-tight">
              {section.heading}
            </h2>
            {section.content.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-700 leading-relaxed">
                {p}
              </p>
            ))}
            {section.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                {section.bulletPoints.map((bp, bIdx) => (
                  <li key={bIdx}>{bp}</li>
                ))}
              </ul>
            )}
            {section.callout && (
              <blockquote className="p-6 bg-[#F0F8FF] border-l-4 border-[#0A173E] rounded-r-2xl text-slate-800 font-medium">
                {section.callout}
              </blockquote>
            )}
          </section>
        ))}
      </div>

      {/* In-Article FAQs */}
      {post.faqs.length > 0 && (
        <section className="mt-16 pt-12 border-t border-[#D8EAFD]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A173E] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {post.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-[#F0F8FF] rounded-2xl border border-[#D8EAFD]"
              >
                <h3 className="text-lg font-bold text-[#0A173E] mb-2">{faq.question}</h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* High-Converting CTA Box */}
      <section className="mt-16">
        <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white p-8 sm:p-12 rounded-3xl border border-[#182859] shadow-xl text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
            Plan Your Outdoor Campaign With World Media NCR
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            Get instant site availability, GPS locations, and free consultation for hoardings, wall painting, and billboards across Meerut &amp; NCR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?topic=${encodeURIComponent(post.title)}&requirement=${encodeURIComponent(`I read your article "${post.title}" and would like to discuss outdoor advertising solutions for my brand.`)}`}
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-3.5 rounded-xl font-extrabold transition shadow-lg hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-3.5 rounded-xl font-bold transition"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-[#0A173E] mb-6">Related Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => rel && (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group block p-6 rounded-2xl bg-[#F0F8FF]/60 border border-[#D8EAFD] hover:bg-white hover:border-[#0A173E] hover:shadow-lg transition"
              >
                <span className="text-xs font-bold text-[#0A173E] bg-white px-3 py-1 rounded-full border border-[#D8EAFD] inline-block mb-3">
                  {rel.category}
                </span>
                <h4 className="text-base font-bold text-[#0A173E] group-hover:text-blue-900 transition leading-snug">
                  {rel.title}
                </h4>
                <p className="mt-2 text-xs text-slate-500 font-medium">
                  {rel.date} • {rel.readTime}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
