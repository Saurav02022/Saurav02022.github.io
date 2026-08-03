import { cn } from '@/lib/utils';

/**
 * Class recipes for the few combos that repeat across files. Anything used in
 * a single component is written inline at the element instead.
 */

/** The page's one measure: centred column with the design's fluid gutter. */
export const WRAP = 'mx-auto w-full max-w-wrap px-gutter';

/**
 * The rail rule: a narrow metadata rail, then the prose column, split at the
 * `nav` breakpoint and stacked below it. See design.md § "The rail rule".
 */
export const RAIL_GRID =
  'grid gap-y-6 nav:grid-cols-[var(--container-rail)_minmax(0,1fr)] nav:gap-x-[clamp(28px,4vw,56px)]';

/** The small mono caps that label a rail row or an eyebrow inside a section. */
export const RAIL_LABEL = 'font-mono text-[11px] tracking-widest uppercase text-faint';

/** A link sitting inside a run of prose, rather than as its own element. */
export const INLINE_LINK =
  'text-accent underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-text';

/**
 * A standalone mono link — the ones ending in ↗ or ↑. Border treatment is left
 * to the call site, since each placement rules itself differently.
 */
export const MONO_LINK = cn(
  'inline-flex min-h-11 items-center gap-2 no-underline',
  'font-mono text-[12.5px] tracking-[0.06em] uppercase',
  'transition-colors duration-200'
);

/** Starts on accent, so its hover moves the other way — every other one goes to accent. */
export const MONO_LINK_ACCENT = 'text-accent hover:text-text';
export const MONO_LINK_MUTED = 'text-muted hover:text-accent';
export const MONO_LINK_QUIET = 'text-text hover:text-accent';

/**
 * The Experience card, reused verbatim by Open source — one heading, one bullet
 * list, one bullet row. See design.md § "Open source".
 */
export const CARD_TITLE =
  'mb-1.5 font-display text-[clamp(28px,3.8vw,44px)] leading-none font-bold tracking-tight text-text text-balance';
export const CARD_BULLETS = 'm-0 grid max-w-col list-none gap-4 p-0';
export const BULLET_ROW = 'flex gap-3.5 text-[16px] text-muted text-pretty';
/** `pt-px` drops the slash onto the cap height of the line beside it. */
export const BULLET_MARK = 'flex-none pt-px font-mono font-bold text-accent';

const BTN = 'inline-flex min-h-[52px] items-center gap-2.5 rounded-[2px] text-[15px] font-semibold';

export const BTN_PRIMARY = cn(
  BTN,
  'bg-accent px-6.5 text-on-accent shadow-[0_10px_34px_rgba(79,209,165,.22)]',
  'transition-[transform,box-shadow] duration-200',
  'hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(79,209,165,.34)]'
);

export const BTN_GHOST = cn(
  BTN,
  'border border-line2 px-6 text-text transition-colors duration-200',
  'hover:border-accent hover:text-accent'
);

export const BTN_QUIET = cn(
  BTN,
  'gap-2 border-b border-line2 px-1.5 font-mono text-[12.5px] font-normal tracking-[0.06em] text-muted uppercase',
  'transition-colors duration-200 hover:border-accent hover:text-text'
);
