import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://worldmedia-3mrb.vercel.app'
  
  // Static pages you have/will have
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Fetch dynamic content if you have any
  let dynamicPages: MetadataRoute.Sitemap = []
  
  try {
    // Example: If you have a blog or news section
    // const articles = await getArticles()
    // dynamicPages = articles.map(article => ({
    //   url: `${baseUrl}/news/${article.slug}`,
    //   lastModified: article.updatedAt || new Date(),
    //   changeFrequency: 'daily' as const,
    //   priority: 0.7,
    // }))
  } catch (error) {
    console.error('Error fetching dynamic content:', error)
  }

  return [...staticPages, ...dynamicPages]
}