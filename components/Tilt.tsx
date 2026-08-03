'use client';

import { useEffect } from 'react';

/** Resting angles of every case figure, and the parallax swing around them. */
const BASE = 'rotateX(11deg) rotateY(-13deg)';

/**
 * Mouse parallax for the case-study figures. The pointer's position within the
 * figure's perspective host swings it a few degrees; leaving eases it back.
 *
 * Skipped on coarse pointers — there is no hover on a touchscreen, so the
 * listeners would only fire on tap and jerk the figure sideways mid-scroll.
 */
export function Tilt() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    const cleanups: (() => void)[] = [];

    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
      const host = el.parentElement;
      if (!host) return;

      const onMove = (ev: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width - 0.5;
        const py = (ev.clientY - r.top) / r.height - 0.5;
        el.style.transition = 'transform .18s linear';
        el.style.transform = `rotateX(${(11 - py * 12).toFixed(2)}deg) rotateY(${(
          -13 +
          px * 16
        ).toFixed(2)}deg)`;
      };

      const onLeave = () => {
        el.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)';
        el.style.transform = BASE;
      };

      host.addEventListener('pointermove', onMove);
      host.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        host.removeEventListener('pointermove', onMove);
        host.removeEventListener('pointerleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
