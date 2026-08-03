'use client';

import { useEffect } from 'react';

/**
 * Scroll-reveal, in two flavours. JS applies the hidden state, so with JS off
 * nothing is ever left invisible.
 *
 * [data-reveal] — fades and lifts. The attribute value is a stagger index.
 * [data-fade]   — fades only, leaving `transform` alone. This exists for the
 *                 case-study figure steps: their depth in the 3D stack IS a
 *                 transform (translateZ), so writing an inline transform here
 *                 would flatten the diagram the moment it revealed.
 */
const EASE = 'cubic-bezier(.2,.7,.2,1)';

export function Reveal() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal],[data-fade]');
    nodes.forEach((n) => {
      const fade = n.hasAttribute('data-fade');
      n.style.opacity = '0';
      if (fade) {
        n.style.transition = `opacity .55s ${EASE}`;
      } else {
        n.style.transform = 'translateY(22px)';
        n.style.transition = `opacity .7s ${EASE}, transform .7s ${EASE}`;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const fade = el.hasAttribute('data-fade');
          const raw = fade ? el.dataset.fade : el.dataset.reveal;
          const d = parseInt(raw ?? '0', 10) || 0;
          // The figure steps run a touch tighter — they read as one sequence
          // rather than as separate elements arriving.
          el.style.transitionDelay = `${d * (fade ? 90 : 85)}ms`;
          el.style.opacity = '1';
          if (!fade) el.style.transform = 'none';
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
