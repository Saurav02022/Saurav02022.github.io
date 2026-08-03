import { LayerTracer } from '@/components/LayerTracer';
import { LOCATION, RESUME_URL, ROLE, YEAR, cover } from '@/lib/portfolio-data';
import { BTN_GHOST, BTN_PRIMARY, BTN_QUIET, WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

/** The mono strip across the top of the cover. */
const BAR_META = 'font-mono text-[11.5px] tracking-[0.14em] uppercase';

export function Cover() {
  return (
    <section
      id="top"
      aria-label="Cover"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-[clamp(92px,12vh,124px)] pb-[clamp(30px,5vw,56px)]"
    >
      {/* Raked wash that darkens the left of the WebGL scene so the headline
          keeps its contrast wherever the camera happens to be pointing. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,var(--color-void)_6%,rgba(10,11,10,.86)_40%,rgba(10,11,10,.26)_66%,rgba(10,11,10,.58)_100%)]"
      />

      <div className={cn(WRAP, 'relative z-2')}>
        <div className="flex animate-rise flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-line pb-3.75 [animation-duration:0.6s]">
          <span className={cn(BAR_META, 'font-bold text-text')}>{ROLE}</span>
          <span className={cn(BAR_META, 'ml-auto text-muted')}>{LOCATION}</span>
          <span className={cn(BAR_META, 'font-bold text-accent')}>{YEAR}</span>
        </div>

        <div className="max-w-card pt-[clamp(26px,3.6vw,48px)]">
          <p className="mb-[clamp(16px,2.2vw,24px)] inline-flex animate-rise items-center gap-2.5 font-mono text-[12px] tracking-[0.16em] text-accent uppercase [animation-delay:0.05s] [animation-duration:0.7s]">
            <span
              aria-hidden="true"
              className="h-[1.5px] w-6.5 bg-accent shadow-[0_0_8px_var(--color-accent)]"
            />
            {cover.eyebrow}
          </p>

          <h1 className="max-w-[19ch] animate-rise font-display text-[clamp(33px,4.9vw,66px)] leading-none font-extrabold tracking-[-0.035em] text-text text-balance [animation-delay:0.12s] [&_em]:not-italic [&_em]:text-accent [&_em]:[text-shadow:0_0_26px_rgba(79,209,165,.45)]">
            {cover.title}
          </h1>

          <p className="mt-[clamp(22px,2.6vw,32px)] max-w-[56ch] animate-rise text-[clamp(16px,1.5vw,19px)] leading-[1.58] text-text2 text-pretty [animation-delay:0.22s]">
            {cover.support}
          </p>

          <div className="mt-[clamp(26px,3.4vw,38px)] flex animate-rise flex-wrap gap-3 [animation-delay:0.32s]">
            <a className={BTN_PRIMARY} href="#work">
              View selected work
              <span aria-hidden="true">→</span>
            </a>
            <a className={BTN_GHOST} href="#contact">
              Get in touch
            </a>
            <a
              className={BTN_QUIET}
              href={RESUME_URL}
              target="_blank"
              rel="noopener"
              aria-label="Résumé (opens in new tab)"
            >
              Résumé ↗
            </a>
          </div>

          <p className="mt-[clamp(34px,4.4vw,52px)] mb-3 animate-rise font-mono text-[11px] tracking-[0.2em] text-faint uppercase [animation-delay:0.4s]">
            {cover.layersLabel}
          </p>
          <LayerTracer />

          <dl className="mt-5.5 max-w-[64ch] animate-rise font-mono text-[12px] leading-[1.85] text-muted [animation-delay:0.5s]">
            {cover.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between gap-4 border-t border-line py-2"
              >
                <dt className="flex-none text-faint">{stat.label}</dt>
                <dd className="m-0 text-right text-text2">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
