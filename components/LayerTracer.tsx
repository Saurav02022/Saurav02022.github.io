'use client';

import { useState } from 'react';
import { cover } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

/**
 * "Frontend → Backend → Database → Deploy" — picking one lights the matching
 * plane in the background scene.
 *
 * Pointing at a layer previews it; clicking pins it. The pin is what makes this
 * work on a touchscreen, where there is no hover at all and the control would
 * otherwise be dead. It also lets a mouse user hold a layer lit while they read.
 *
 * The link to the scene is a window event rather than shared state: the canvas
 * mounts lazily and may not exist yet (or at all, under reduced motion), and an
 * event nobody is listening for is a no-op rather than a crash.
 */
export const LAYER_FOCUS_EVENT = 'layer-focus';

export function emitLayerFocus(index: number | null) {
  window.dispatchEvent(new CustomEvent(LAYER_FOCUS_EVENT, { detail: index }));
}

export function LayerTracer() {
  const [pinned, setPinned] = useState<number | null>(null);

  /** Hovering previews; letting go falls back to whatever is pinned. */
  const preview = (index: number | null) => emitLayerFocus(index ?? pinned);

  const toggle = (index: number) => {
    const next = pinned === index ? null : index;
    setPinned(next);
    emitLayerFocus(next);
  };

  return (
    <div className="flex animate-rise flex-wrap items-center gap-2 [animation-delay:0.44s]">
      {cover.layers.map((layer, i) => {
        const isPinned = pinned === i;
        return (
          <div key={layer} className="contents">
            {i > 0 && (
              <span aria-hidden="true" className="font-mono text-faint">
                →
              </span>
            )}
            <button
              type="button"
              data-layer={i}
              aria-pressed={isPinned}
              onPointerEnter={() => preview(i)}
              onPointerLeave={() => preview(null)}
              onFocus={() => preview(i)}
              onBlur={() => preview(null)}
              onClick={() => toggle(i)}
              className={cn(
                'inline-flex min-h-11 cursor-pointer items-center gap-2.25 rounded-[2px] px-3.75',
                'font-mono text-[11.5px] tracking-widest text-text uppercase',
                'border transition-[border-color,background-color,transform] duration-250',
                'hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft',
                'focus-visible:-translate-y-0.5 focus-visible:border-accent focus-visible:bg-accent-soft',
                isPinned
                  ? '-translate-y-0.5 border-accent bg-accent-soft'
                  : 'border-line bg-surface2/72'
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'h-1.5 w-1.5 rounded-full bg-accent transition-shadow duration-250',
                  isPinned && 'shadow-[0_0_8px_var(--color-accent)]'
                )}
              />
              {layer}
            </button>
          </div>
        );
      })}
    </div>
  );
}
