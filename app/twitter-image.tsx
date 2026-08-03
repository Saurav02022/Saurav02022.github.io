// Same card as the OG image. Without this file X emits no twitter:image at all
// and falls back to og:image — which works, but loses twitter:image:alt.
export { default, alt, size, contentType } from './opengraph-image';
export const dynamic = 'force-static';
