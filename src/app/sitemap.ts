// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldmediancr.com'

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/developer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ]

  const servicePages: MetadataRoute.Sitemap = [
    'hoarding-advertising-meerut',
    'digital-wall-painting-meerut',
    'billboard-advertising-meerut',
    'vehicle-branding-meerut',
    'flex-printing-meerut',
    'led-display-advertising-meerut',
    'political-advertising-meerut'
  ].map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const locationPages: MetadataRoute.Sitemap = [
    'meerut',
    'muzaffarnagar',
    'shamli',
    'saharanpur',
    'baghpat',
    'delhi-ncr',
    'hapur',
    'delhi'
  ].map(city => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = [
    'benefits-of-hoarding-advertising',
    'best-locations-for-hoarding-in-meerut',
    'digital-wall-painting-vs-traditional-ads',
    'outdoor-advertising-cost-guide-2024',
    'why-choose-world-media-ncr-for-advertising'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...mainPages, ...servicePages, ...locationPages, ...blogPages]
}