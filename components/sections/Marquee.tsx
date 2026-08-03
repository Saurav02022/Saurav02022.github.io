import { Fragment } from 'react';
import { MARQUEE_ITEMS } from '@/lib/portfolio-data';

// Non-breaking: regular spaces would collapse and the spacing would go flat.
const GAP = '  ';

// Two identical strips; the keyframe scrolls the track exactly -50%, so the
// second lands where the first began. Every item reads "<item>␣␣◆␣␣",
// including the last — the trailing gap is what keeps the seam even.
const strip = (
  <span className="font-mono text-[13px] tracking-[0.14em] uppercase">
    {MARQUEE_ITEMS.map((item) => (
      <Fragment key={item}>
        {item}
        {GAP}
        <span className="text-accent">◆</span>
        {GAP}
      </Fragment>
    ))}
  </span>
);

export function Marquee() {
  return (
    <div
      data-marquee="1"
      aria-hidden="true"
      className="group relative z-1 overflow-hidden border-y border-line bg-surface2/92 py-3.25 whitespace-nowrap text-text"
    >
      {/* Pauses under the pointer so a claim that catches your eye can
          actually be read, instead of sliding away mid-sentence. */}
      <div className="inline-flex animate-marquee will-change-transform group-hover:[animation-play-state:paused]">
        {strip}
        {strip}
      </div>
    </div>
  );
}
