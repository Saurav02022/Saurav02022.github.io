import { brandIcon } from '@/lib/brand-icon';

/** Favicon: the "S" mark on the site's ink ground. */

export const dynamic = 'force-static';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return brandIcon(size.width);
}
