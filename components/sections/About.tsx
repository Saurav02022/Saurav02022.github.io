import { Section } from '@/components/layout/Section';
import { about } from '@/lib/portfolio-data';
import { RAIL_GRID, RAIL_LABEL } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

const PROSE = 'max-w-col text-[clamp(16px,1.5vw,18.5px)] text-pretty';

/** Every rail row is a rule above; the block is closed by the last row's own rule. */
const ROW = 'border-t py-3.5';

export function About() {
  return (
    <Section id="about" labelledBy="about-h" pane="b" className="relative overflow-hidden">
      <SectionHead num="04" title="About" id="about-h" className="mb-[clamp(36px,4.4vw,58px)]" />

      <div className={RAIL_GRID}>
        {/* Prose is the primary content, so it leads in the DOM and the rail
            takes the left column back at `nav`. Matches Contact. */}
        <div data-reveal="0">
          <p className="mb-[clamp(24px,3vw,34px)] font-display text-[clamp(22px,2.8vw,34px)] leading-[1.2] font-semibold tracking-[-0.02em] text-text text-balance">
            {about.statement}
          </p>
          <p className={cn(PROSE, 'mb-4.5 text-text2')}>{about.p1}</p>
          <p className={cn(PROSE, 'text-muted')}>{about.p2}</p>
        </div>

        <dl className="m-0 nav:order-first" data-reveal="1">
          {about.rail.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                ROW,
                i === 0 ? 'border-t-line2' : 'border-t-line',
                i === about.rail.length - 1 && 'border-b border-b-line2'
              )}
            >
              <dt className={RAIL_LABEL}>{row.label}</dt>
              <dd className="m-0 mt-1.5 text-[15.5px] text-text">
                {row.value}
                {row.sub && <span className="block text-[13.5px] text-muted">{row.sub}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
