'use client';

import { useEffect, useRef, useState } from 'react';
import { EMAIL, LOCATION, NAME, NAV_ITEMS, SECTIONS } from '@/lib/portfolio-data';
import { WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

const SPY_IDS = NAV_ITEMS.map((i) => i.id);

/** Matches --breakpoint-nav in globals.css. */
const NAV_BREAKPOINT = 860;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('top');
  const [progress, setProgress] = useState(0);
  const menuRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
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
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-120 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-300',
          scrolled && 'border-line bg-bg/82 backdrop-blur-md backdrop-saturate-150'
        )}
      >
        <nav
          className={cn(WRAP, 'flex items-center justify-between gap-4.5 py-3.75')}
          aria-label="Primary"
        >
          <a
            className="inline-flex items-baseline gap-2 font-display text-[18px] font-extrabold tracking-[-0.02em]"
            href="#top"
            aria-label={`${NAME} — top`}
          >
            {NAME}
            <span className="text-[14px] text-accent" aria-hidden="true">
              ✳
            </span>
          </a>

          <div className="hidden items-center gap-[clamp(10px,1.8vw,30px)] nav:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={cn(
                  'py-2 font-mono text-[12px] tracking-[0.12em] uppercase transition-colors duration-200',
                  activeId === item.id ? 'text-accent' : 'text-muted hover:text-ink'
                )}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 cursor-pointer items-center bg-ink px-4 py-2.25 font-mono text-[12px] tracking-[0.14em] text-bg uppercase nav:hidden"
            aria-label="Index menu"
            aria-haspopup="dialog"
            onClick={openMenu}
          >
            Index
          </button>
        </nav>

        <div
          role="progressbar"
          aria-label="Reading progress"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-[2px] w-full origin-left bg-accent"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </header>

      <dialog
        ref={menuRef}
        aria-label="Menu"
        onClose={() => {
          document.body.style.overflow = '';
        }}
        className="fixed inset-0 m-0 hidden h-full max-h-none w-full max-w-none flex-col bg-ink px-[clamp(20px,6vw,44px)] pt-4.5 pb-10 text-bg open:flex"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[18px] font-extrabold">
            {NAME}
            <span className="text-accent" aria-hidden="true">
              {' '}
              ✳
            </span>
          </span>
          <button
            type="button"
            className="min-h-11 cursor-pointer border border-on-accent/30 px-4 py-2.25 font-mono text-[12px] tracking-[0.14em] uppercase"
            aria-label="Close menu"
            onClick={() => menuRef.current?.close()}
          >
            Close
          </button>
        </div>

        <div className="my-auto flex flex-col gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              className="flex items-baseline gap-4 py-2 font-display text-[clamp(38px,12vw,68px)] leading-[1.02] font-bold tracking-[-0.03em]"
              href={`#${s.id}`}
              onClick={() => menuRef.current?.close()}
            >
              <span className="font-mono text-[15px] text-accent-bright">{s.num}</span>
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 font-mono text-[12px] tracking-[0.06em] text-on-accent/60">
          <a className="text-bg" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span>{LOCATION}</span>
        </div>
      </dialog>
    </>
  );
}
