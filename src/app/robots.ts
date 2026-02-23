import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://worldmedia-3mrb.vercel.app/sitemap.xml',
    host: 'https://worldmedia-3mrb.vercel.app',
  }
}