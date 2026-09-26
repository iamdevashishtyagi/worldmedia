// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldmediancr.com'
  const currentDate = new Date('2025-02-01T00:00:00.000Z')

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
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
    lastModified: currentDate,
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
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = [
    'benefits-of-hoarding-advertising',
    'best-locations-for-hoarding-in-meerut',
    'digital-wall-painting-vs-traditional-ads',
    'outdoor-advertising-cost-guide-2024',
    'why-choose-world-media-ncr-for-advertising'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [ ...mainPages, ...servicePages, ...locationPages, ...blogPages ]
}