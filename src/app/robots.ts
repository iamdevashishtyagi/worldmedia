import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://worldmediancr.com/sitemap.xml',
    host: 'https://worldmediancr.com',
  }
}