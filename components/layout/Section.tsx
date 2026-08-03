import type { ReactNode } from 'react';
import { WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

/**
 * A numbered page section: the design's fluid vertical rhythm and an anchor
 * offset that clears the fixed nav.
 *
 * `pane` is the alternating wash the design lays over the fixed WebGL canvas —
 * A (opaque-ish) and B (barely there) trade off down the page, which is what
 * makes the scene read through some bands and not others.
 */
export function Section({
  id,
  labelledBy,
  pane,
  className,
  children,
}: {
  id: string;
  /** id of the <h2> this section is titled by. */
  labelledBy: string;
  pane: 'a' | 'b';
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'scroll-mt-19 py-sec',
        pane === 'a' ? 'bg-pane-a' : 'bg-pane-b',
        className
      )}
    >
      <div className={WRAP}>{children}</div>
    </section>
  );
}
