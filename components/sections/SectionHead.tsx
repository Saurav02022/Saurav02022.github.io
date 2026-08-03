import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Oversized ghost number, then the title, then the section intro beneath it.
 *
 * The number is an outline, not a fill: transparent text with a 1px accent
 * stroke and two offset drop-shadows, which is what gives it the embossed
 * look on the dark ground. A solid fill reads as a completely different mark.
 */
export function SectionHead({
  num,
  title,
  id,
  intro,
  className,
  introClassName,
  titleClassName,
}: {
  num: string;
  title: string;
  id: string;
  intro?: ReactNode;
  className?: string;
  /** The intro's measure is tuned per section (52ch, or 60ch on Work). */
  introClassName?: string;
  /** Contact sizes its title well past the rest. */
  titleClassName?: string;
}) {
  return (
    <header className={className} data-reveal="0">
      <div
        aria-hidden="true"
        className={cn(
          'font-display text-[clamp(86px,15vw,186px)] leading-[0.72] font-extrabold tracking-[-0.05em]',
          'text-transparent [-webkit-text-stroke:1px_var(--color-accent-dim)]',
          '[text-shadow:7px_7px_0_var(--color-accent-ghost),14px_14px_0_rgba(79,209,165,.04)]'
        )}
      >
        {num}
      </div>
      <h2
        id={id}
        className={cn(
          'font-display text-[clamp(38px,6vw,78px)] leading-[0.95] font-extrabold tracking-[-0.035em] text-text',
          // Bounds are low-to-high on purpose. clamp() resolves as
          // max(MIN, min(VAL, MAX)), so writing the larger pull-up as MAX
          // (the design file's own order) pins this to -28px at every real
          // viewport and the title never rises onto the number.
          'mt-[clamp(-52px,-2.6vw,-28px)]',
          intro && 'mb-4.5',
          titleClassName
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'max-w-[52ch] text-[clamp(15px,1.4vw,18px)] text-muted text-pretty',
            introClassName
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
