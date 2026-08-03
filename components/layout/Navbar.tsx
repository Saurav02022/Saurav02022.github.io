'use client';

import { useEffect, useRef, useState } from 'react';
import { EMAIL, LOCATION, NAME, NAV_ITEMS, SECTIONS } from '@/lib/portfolio-data';
import { WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

/** The design's scroll-spy list, in document order. */
const SPY_IDS = NAV_ITEMS.map((i) => i.id);

/** Matches --breakpoint-nav in globals.css, and the design's `innerWidth < 900`. */
const NAV_BREAKPOINT = 900;

const NAV_LINK =
  'py-2 font-mono text-[12px] tracking-[0.12em] uppercase no-underline border-b border-transparent transition-[color,border-color] duration-200 hover:text-text hover:border-accent';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('top');
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      // Last section whose top has passed the 160px line wins — the design's
      // rule, so a short section still claims the nav while it is on screen.
      let active = 'top';
      for (const id of SPY_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) active = id;
      }
      setActiveId(active);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The menu button only exists below the nav breakpoint, so widening past it
  // must dismiss an open menu — otherwise the overlay strands the page with no
  // close button.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= NAV_BREAKPOINT) menuRef.current?.close();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // showModal() is what buys the focus trap, Esc-to-close, focus restored to
  // the button on close, and an inert page behind — all from the platform.
  const openMenu = () => {
    menuRef.current?.showModal();
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <a
        className="absolute -top-[60px] left-3 z-300 bg-accent px-4 py-2.75 font-mono text-[13px] text-on-accent no-underline transition-[top] duration-200 focus:top-3"
        href="#main"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-120 border-b border-transparent transition-[background,border-color,backdrop-filter] duration-300',
          scrolled &&
            'border-line bg-void/78 backdrop-blur-[14px] backdrop-saturate-[140%]'
        )}
      >
        <nav
          className={cn(WRAP, 'flex items-center justify-between gap-4.5 py-3.75')}
          aria-label="Primary"
        >
          <a
            className="inline-flex items-center gap-2.5 font-display text-[18px] font-extrabold tracking-[-0.02em] text-text no-underline"
            href="#top"
            aria-label={`${NAME} — top`}
          >
            {NAME}
            <span
              aria-hidden="true"
              className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]"
            />
          </a>

          <div className="hidden items-center gap-[clamp(10px,1.8vw,28px)] nav:flex">
            {NAV_ITEMS.map((item, i) => {
              // The design styles the last item as a button, and its scroll-spy
              // loop skips it — it never takes the active treatment.
              const isButton = i === NAV_ITEMS.length - 1;
              const active = !isButton && activeId === item.id;
              return (
                <a
                  key={item.id}
                  data-nav={item.id}
                  href={`#${item.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={
                    isButton
                      ? 'rounded-[2px] border border-line2 px-4 py-2.25 font-mono text-[12px] tracking-[0.12em] text-text uppercase no-underline transition-[border-color,background,color] duration-200 hover:border-accent hover:text-accent'
                      : cn(NAV_LINK, active ? 'border-accent text-accent' : 'text-muted')
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="min-h-11 cursor-pointer border-none bg-accent px-4 py-2.25 font-mono text-[12px] font-bold tracking-[0.14em] text-on-accent uppercase nav:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            onClick={openMenu}
          >
            Index
          </button>
        </nav>

        <div aria-hidden="true" className="h-0.5 bg-transparent">
          <div
            className="h-full bg-accent shadow-[0_0_10px_var(--color-accent)] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <dialog
        ref={menuRef}
        aria-modal="true"
        aria-label="Menu"
        onClose={() => {
          setMenuOpen(false);
          document.body.style.overflow = '';
        }}
        className="fixed inset-0 z-200 m-0 hidden h-full max-h-none w-full max-w-none flex-col bg-void px-[clamp(20px,6vw,44px)] pt-4.5 pb-10 text-text open:flex"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[18px] font-extrabold text-text">{NAME}</span>
          <button
            type="button"
            className="min-h-11 cursor-pointer border border-line2 bg-transparent px-4 py-2.25 font-mono text-[12px] tracking-[0.14em] text-text uppercase"
            aria-label="Close menu"
            onClick={() => menuRef.current?.close()}
          >
            Close
          </button>
        </div>

        <div className="my-auto flex flex-col gap-0.5">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              className="flex items-baseline gap-4 py-2 font-display text-[clamp(34px,11vw,64px)] leading-[1.04] font-bold tracking-[-0.03em] text-text no-underline"
              href={`#${s.id}`}
              onClick={() => menuRef.current?.close()}
            >
              <span className="font-mono text-[14px] text-accent">{s.num}</span>
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 font-mono text-[12px] tracking-[0.06em] text-muted">
          <a className="text-accent no-underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span>{LOCATION}</span>
        </div>
      </dialog>
    </>
  );
}
