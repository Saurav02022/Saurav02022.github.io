import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';

/**
 * Single canonical URL for this SPA-style portfolio.
 * lastModified is bumped by hand on real content changes — a fresh
 * new Date() per build and 'daily' frequency are noise signals to crawlers.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
