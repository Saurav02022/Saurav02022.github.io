/**
 * Canonical site origin for SEO (metadata, sitemap, JSON-LD, robots).
 * Set NEXT_PUBLIC_SITE_URL when using a custom domain, e.g. https://yoursite.com
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://saurav02022.github.io'
).replace(/\/$/, '');
