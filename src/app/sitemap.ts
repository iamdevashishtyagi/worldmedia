// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/data/services';
import { getAllLocationSlugs } from '@/data/locations';
import { getAllBlogPostSlugs } from '@/data/blogs';
import { getAllCategorySlugs, getCategoryBySlug } from '@/data/serviceCategories';
import { getAllNewServiceParams } from '@/data/newServices';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldmediancr.com';
  const currentDate = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/clients`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/developer`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
  ];

  // Legacy flat outdoor service pages
  const legacyServicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  }));

  // Service category landing pages
  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.92,
  }));

  // Nested outdoor advertising service pages
  const outdoorCat = getCategoryBySlug('outdoor-advertising');
  const nestedOutdoorPages: MetadataRoute.Sitemap = (outdoorCat?.services || []).map(svc => ({
    url: `${baseUrl}/services/outdoor-advertising/${svc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // New service pages (development, designing, digital-advertising)
  const newServicePages: MetadataRoute.Sitemap = getAllNewServiceParams().map(({ category, slug }) => ({
    url: `${baseUrl}/services/${category}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map(slug => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllBlogPostSlugs().map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...mainPages,
    ...categoryPages,
    ...nestedOutdoorPages,
    ...newServicePages,
    ...legacyServicePages,
    ...locationPages,
    ...blogPages,
  ];
}