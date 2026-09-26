// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://worldmediancr.com/sitemap.xml',
    host: 'https://worldmediancr.com',
  };
}
