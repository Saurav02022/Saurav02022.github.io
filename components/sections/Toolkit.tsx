import { Section } from '@/components/layout/Section';
import { LANGUAGES, toolkit, toolkitIntro } from '@/lib/portfolio-data';
import { RAIL_GRID, RAIL_LABEL } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

/**
 * `data-row` is the hook the design's hover rule hangs on: the transparent
 * left border is what turns accent and pushes the row across on hover.
 *
 * `gap-y-3` overrides the rail gutter: stacked, a label sits right on top of
 * its own tools, so the section's usual gap would read as a row break.
 */
const ROW = cn(
  RAIL_GRID,
  'gap-y-3 border-t border-line border-l-2 border-l-transparent',
  'px-[clamp(12px,1.4vw,18px)] py-[clamp(20px,2.4vw,28px)]',
  'transition-[background,border-left-color,padding-left] duration-300'
);

export function Toolkit() {
  return (
    <Section id="toolkit" labelledBy="tk-h" pane="a">
      <SectionHead
        num="05"
        title="Toolkit"
        id="tk-h"
        intro={toolkitIntro}
        className="mb-[clamp(36px,4.4vw,60px)]"
      />

      <div className="flex flex-col">
        {toolkit.map((row, i) => (
          <div
            key={row.num}
            className={cn(ROW, i === toolkit.length - 1 && 'border-b border-b-line')}
            data-row="1"
            data-reveal={String(i)}
          >
            {/* Toolkit is the one inverted section — its rail label is accent, not faint. */}
            <span className={cn(RAIL_LABEL, 'text-accent nav:pt-1.5')}>
              {row.num} — {row.label}
            </span>
            <div>
              <p className="mb-2 font-display text-[clamp(18px,1.9vw,23px)] font-semibold text-text">
                {row.tools}
              </p>
              <p className="max-w-col text-[15.5px] text-muted text-pretty">{row.note}</p>
            </div>
          </div>
        ))}
        <p className="mt-6.5 max-w-col font-mono text-[12px] tracking-[0.08em] text-muted">
          <span className="text-accent">LANGUAGES —</span> {LANGUAGES}
        </p>
      </div>
    </Section>
  );
}
