import { brandIcon } from '@/lib/brand-icon';

/** Apple touch icon — same "S" mark as the favicon. */

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return brandIcon(size.width);
}
