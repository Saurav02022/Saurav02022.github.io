import { ImageResponse } from 'next/og';
import { BRAND, brandFont } from '@/lib/brand';

/**
 * OG / Twitter share card, generated at build from the site's design tokens so
 * the preview is a proper 1200×630 card that can't drift from the brand. Next
 * derives og:image, its width/height and og:image:alt from the exports below.
 */

export const dynamic = 'force-static';
export const alt =
  'Saurav Kumar — Full-Stack + AI Engineer. Full-stack products and AI features that survive weak networks, flaky devices, and async vendor APIs.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px 56px',
          background: BRAND.bg,
          color: BRAND.ink,
          fontFamily: 'Instrument Sans',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* The cover eyebrow: a short accent rule, then mono metadata. */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontFamily: 'Space Mono',
              fontSize: 22,
              letterSpacing: '0.2em',
              color: BRAND.accent,
            }}
          >
            <div style={{ width: 40, height: 2, background: BRAND.accent }} />
            FULL-STACK SOFTWARE ENGINEER · 3+ YRS
          </div>
          {/* 92px, not the cover's scale: Syne 800 is wide, and past ~94px
              "Saurav Kumar" breaks across two lines and the stack overflows
              630px. A name reads as a name on one line. */}
          <div
            style={{
              display: 'flex',
              fontFamily: 'Syne',
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: '-0.035em',
              marginTop: 34,
            }}
          >
            Saurav Kumar
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 34,
              lineHeight: 1.4,
              color: BRAND.ink2,
              maxWidth: 940,
              marginTop: 28,
            }}
          >
            Full-stack products and AI features that survive weak networks,
            flaky devices, and async vendor APIs.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
            fontFamily: 'Space Mono',
            fontSize: 21,
            color: BRAND.muted,
            borderTop: `1px solid ${BRAND.line}`,
            paddingTop: 32,
          }}
        >
          <span>EdTech in 117 schools</span>
          <span style={{ color: BRAND.accent }}>·</span>
          <span>50,000+ users a month</span>
          <span style={{ color: BRAND.accent }}>·</span>
          <span>Mumbai, India</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Syne', data: brandFont('syne-800.ttf'), weight: 800 },
        {
          name: 'Instrument Sans',
          data: brandFont('instrument-sans-400.ttf'),
          weight: 400,
        },
        { name: 'Space Mono', data: brandFont('space-mono-400.ttf'), weight: 400 },
      ],
    }
  );
}
