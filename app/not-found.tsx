import type { Metadata } from 'next';
import Link from 'next/link';
import { BTN_PRIMARY, WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main
      className={cn(
        WRAP,
        'min-h-[70vh] pt-[clamp(84px,11vh,116px)] pb-[clamp(40px,6vw,72px)]'
      )}
    >
      <p className="mb-[clamp(16px,2.2vw,24px)] inline-flex animate-rise items-center gap-2.5 font-mono text-[12px] tracking-[0.16em] text-accent uppercase before:h-[1.5px] before:w-6.5 before:bg-accent before:content-[''] [animation-delay:0.05s] [animation-duration:0.7s]">
        404
      </p>
      <h1 className="max-w-[15ch] animate-rise font-display text-[clamp(40px,6.4vw,86px)] leading-[0.95] font-extrabold tracking-[-0.035em] text-balance [animation-delay:0.12s]">
        Nothing here.
      </h1>
      <p className="mt-[clamp(22px,2.6vw,30px)] max-w-[50ch] animate-rise text-[clamp(16px,1.5vw,19px)] leading-[1.55] text-text2 text-pretty [animation-delay:0.22s]">
        This address doesn&apos;t resolve — the portfolio is a single page, and
        everything lives on it.
      </p>
      <div className="mt-[clamp(30px,4vw,42px)] flex animate-rise flex-wrap gap-3 [animation-delay:0.32s]">
        <Link className={BTN_PRIMARY} href="/">
          Go to the portfolio
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
