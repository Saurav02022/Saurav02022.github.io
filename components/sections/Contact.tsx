'use client';

import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { EMAIL, RESUME_URL, SOCIALS, contact } from '@/lib/portfolio-data';
import { MONO_LINK, MONO_LINK_QUIET, RAIL_GRID, RAIL_LABEL } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

const ELSEWHERE = [...SOCIALS, { label: 'Résumé', url: RESUME_URL }];

/**
 * Full-width rows rather than the shared link's `inline-flex`, so each one's
 * rule spans the rail. No `justify-between`: at 240px the arrow reads better
 * right after the label.
 */
const LINK = cn(
  MONO_LINK,
  MONO_LINK_QUIET,
  'flex border-t border-line py-3.75',
  'transition-[padding-left,color] duration-200 hover:pl-2'
);

export function Contact() {
  const [copied, setCopied] = useState(false);

  // Left uncaught on purpose: a clipboard failure should show up, not be
  // swallowed into a button that says "Copied" when nothing was copied.
  async function copy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section id="contact" labelledBy="con-h" pane="b" className="relative overflow-hidden">
      <SectionHead
        num="06"
        title={contact.title}
        id="con-h"
        className="mb-[clamp(26px,3.4vw,44px)]"
        titleClassName="max-w-[16ch] text-[clamp(40px,7vw,96px)] leading-[0.94] tracking-[-0.04em] text-balance"
      />

      <div className={RAIL_GRID}>
        {/* The rail leads in the DOM so that at `nav` the tab order runs
            left-to-right with the columns. `order-last` drops it back under the
            email once the grid collapses, where the email is what matters
            first — so reading order and tab order agree at both sizes. */}
        <div data-reveal="2" className="order-last nav:order-none">
          <p className={cn(RAIL_LABEL, 'mb-1')}>Elsewhere</p>
          {ELSEWHERE.map((item, i) => (
            <a
              key={item.label}
              className={cn(LINK, i === ELSEWHERE.length - 1 && 'border-b border-line')}
              href={item.url}
              target="_blank"
              rel="noopener"
              aria-label={`${item.label} (opens in new tab)`}
            >
              {item.label}
              <span className="text-muted" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>

        <div data-reveal="1">
          <p className="mb-[clamp(24px,3vw,34px)] max-w-col text-[clamp(16px,1.5vw,18.5px)] text-muted text-pretty">
            {contact.support}
          </p>

          <div className="flex flex-wrap items-center gap-x-4.5 gap-y-3.5">
            <a
              className={cn(
                'inline-flex items-center gap-3 font-display text-[clamp(23px,3.6vw,46px)] leading-none font-bold tracking-[-0.03em] text-text text-balance',
                'transition-[color,text-shadow] duration-200 hover:text-accent hover:[text-shadow:0_0_30px_rgba(79,209,165,.4)]'
              )}
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
              <span className="text-[0.5em] text-accent" aria-hidden="true">
                ↗
              </span>
            </a>
            {/* No aria-label: it would override the visible text, so the swap to
                "Copied" would never reach a screen reader. The live region is
                what announces the confirmation instead. */}
            <button
              type="button"
              onClick={copy}
              className={cn(
                'min-h-11 rounded-[2px] border border-line2 px-4',
                'font-mono text-[11.5px] tracking-widest text-muted uppercase',
                'transition-colors duration-200 hover:border-accent hover:text-accent'
              )}
            >
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
