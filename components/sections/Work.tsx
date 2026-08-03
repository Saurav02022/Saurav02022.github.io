import { TagList } from '@/components/Tag';
import { Section } from '@/components/layout/Section';
import { cases, workIntro } from '@/lib/portfolio-data';
import type { CaseFact, CaseFigureStep, CaseStudy } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

const CASE_LINK =
  // min-h-11: these are the primary call to action on every card, so they get
  // the same 44px target the Contact rows already have.
  'inline-flex min-h-11 items-center gap-2 border-b pb-0.75 font-mono text-[12.5px] font-bold tracking-[0.06em] uppercase no-underline';
const CASE_LINK_ACCENT = 'border-accent text-accent hover:border-text hover:text-text';
/** Second link on a card sits back, and keeps its rule colour on hover. */
const CASE_LINK_MUTED = 'border-line2 text-muted hover:text-text';

/** Design assigns each fact row its own weight; muted is the default. */
const FACT_TONE = {
  plain: 'text-text2',
  strong: 'text-text text-pretty',
} as const;

const STEP = 'py-3.75 px-4 font-mono text-[12px] tracking-[0.03em]';

/**
 * Each step sits 24px further forward than the one above it.
 *
 * Only from `nav` up: under perspective, translateZ(78px) renders the top step
 * ~6% wider than its column, and on a narrow screen the figure already fills
 * the width — so the overhang was being clipped by the page's overflow-x
 * rather than reflowing. The stack is a wide-viewport effect anyway.
 */
const STEP_Z = [
  'nav:transform-[translateZ(6px)]',
  'nav:transform-[translateZ(30px)]',
  'nav:transform-[translateZ(54px)]',
  'nav:transform-[translateZ(78px)]',
];

/** The stack's shadow deepens with the step's distance off the page. */
const STEP_SHADOW = [
  'shadow-[0_6px_18px_rgba(0,0,0,.4)]',
  'shadow-[0_14px_34px_rgba(0,0,0,.5)]',
  'shadow-[0_18px_40px_rgba(0,0,0,.5)]',
  'shadow-[0_24px_50px_rgba(0,0,0,.55)]',
];

function Facts({ facts }: { facts: CaseFact[] }) {
  return (
    <dl className="grid max-w-[52ch] gap-5">
      {facts.map((f) => (
        <div key={f.label} className="flex flex-wrap gap-4.5">
          <dt className="flex-[0_0_118px] pt-0.5 font-mono text-[11px] tracking-widest text-accent uppercase">
            {f.label}
          </dt>
          <dd
            className={cn(
              'm-0 flex-[1_1_240px] text-[15.5px]',
              f.tone ? FACT_TONE[f.tone] : 'text-muted text-pretty',
            )}
          >
            {f.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Step({ step, index, last }: { step: CaseFigureStep; index: number; last: boolean }) {
  if (step.note) {
    return (
      <div
        data-fade={String(index)}
        className={cn(
          'px-4 py-3.75 border border-accent',
          'bg-[linear-gradient(180deg,rgba(79,209,165,.14),rgba(79,209,165,.05))]',
          'shadow-[0_14px_34px_rgba(0,0,0,.5),0_0_24px_rgba(79,209,165,.16)]',
          STEP_Z[index],
        )}
      >
        <div className="font-mono text-[12px] font-bold tracking-[0.03em] text-text">
          <span className="text-accent">{step.n} </span>
          {step.text}
        </div>
        <div className="mt-1.5 font-mono text-[11px] text-text2">{step.note}</div>
      </div>
    );
  }

  return (
    <div
      data-fade={String(index)}
      className={cn(
        STEP,
        'border border-line2 text-text2',
        last ? 'bg-raise' : 'bg-surface2',
        STEP_SHADOW[index],
        STEP_Z[index],
      )}
    >
      <span className="text-faint">{step.n} </span>
      {step.text}
    </div>
  );
}

/** One case card — every feature uses this identical layout. */
function Case({ study, index, last }: { study: CaseStudy; index: number; last: boolean }) {
  return (
    <article data-reveal="0" className={last ? undefined : 'mb-[clamp(60px,8vw,110px)]'}>
      <div className="flex flex-wrap items-baseline gap-x-4.5 gap-y-2 border-b border-line2 pb-4.5 font-mono text-[12px] tracking-widest text-muted uppercase">
        <span className="font-bold text-accent">{study.feature}</span>
        <span>{study.kind}</span>
        {study.live && (
          <span className="inline-flex items-center gap-1.5 text-text2">
            <span
              aria-hidden="true"
              className="h-[7px] w-[7px] rounded-full bg-live shadow-[0_0_8px_var(--color-live)]"
            />
            Live
          </span>
        )}
        <span className="ml-auto text-faint">{study.year}</span>
      </div>

      <div className="flex flex-wrap gap-[clamp(28px,4vw,60px)] pt-[clamp(26px,3vw,40px)]">
        <div className="order-2 min-w-[min(100%,280px)] flex-[1_1_320px]">
          <h3 className="mb-4.5 font-display text-[clamp(30px,4.4vw,52px)] leading-[0.98] font-bold tracking-[-0.03em] text-text">
            {study.title}
          </h3>
          <p className="mb-[clamp(24px,3vw,34px)] max-w-[46ch] text-[clamp(16px,1.5vw,19px)] text-text2 text-pretty">
            {study.summary}
          </p>
          <Facts facts={study.facts} />
          <div className="mt-7 flex flex-wrap gap-5">
            {study.liveUrl && (
              <a
                className={cn(CASE_LINK, CASE_LINK_ACCENT)}
                href={study.liveUrl}
                target="_blank"
                rel="noopener"
                aria-label={`${study.title} live app (opens in new tab)`}
              >
                Live app ↗
              </a>
            )}
            {study.repoUrl && (
              <a
                className={cn(CASE_LINK, study.liveUrl ? CASE_LINK_MUTED : CASE_LINK_ACCENT)}
                href={study.repoUrl}
                target="_blank"
                rel="noopener"
                aria-label={`${study.title} source (opens in new tab)`}
              >
                Source ↗
              </a>
            )}
          </div>
        </div>

        <div className="order-1 min-w-[min(100%,300px)] flex-[1_1_380px] perspective-[1400px]">
          <figure
            data-tilt="1"
            className="m-0 transform-3d transform-[rotateX(11deg)_rotateY(-13deg)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
          >
            <figcaption className="mb-4.5 flex flex-wrap justify-between gap-1.5 font-mono text-[10.5px] tracking-[0.16em] text-faint uppercase">
              <span className="text-accent">
                Fig.{String(index + 1).padStart(2, '0')} — {study.fig.caption}
              </span>
              <span>{study.fig.sub}</span>
            </figcaption>
            <div className="flex flex-col gap-2.75 transform-3d">
              {study.fig.steps.map((step, i) => (
                <Step key={step.n} step={step} index={i} last={i === study.fig.steps.length - 1} />
              ))}
            </div>
            <TagList
              tags={study.tags}
              className="mt-5.5 border-t border-line pt-4 transform-[translateZ(20px)]"
            />
          </figure>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Section id="work" labelledBy="work-h" pane="b" className="relative">
      <SectionHead
        num="02"
        title="Selected Work"
        id="work-h"
        intro={workIntro}
        className="mb-[clamp(40px,6vw,72px)]"
        introClassName="max-w-[60ch]"
      />
      {cases.map((study, i) => (
        <Case key={study.title} study={study} index={i} last={i === cases.length - 1} />
      ))}
    </Section>
  );
}
