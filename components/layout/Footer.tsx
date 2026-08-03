import { COLOPHON, LOCATION, NAME, ROLE, YEAR } from '@/lib/portfolio-data';
import { WRAP } from '@/lib/styles';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="relative z-1 border-t border-line2 bg-pane-a py-[clamp(30px,4vw,46px)]">
      <div className={cn(WRAP, 'flex flex-wrap items-end justify-between gap-x-7 gap-y-5')}>
        <div>
          <div className="font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.025em] text-text">
            {NAME}
          </div>
          <div className="mt-1.5 font-mono text-[11.5px] tracking-[0.06em] text-muted uppercase">
            {ROLE} · {LOCATION} · © {YEAR}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4.5">
          <span className="max-w-[32ch] font-mono text-[11px] tracking-[0.04em] text-muted">
            {COLOPHON}
          </span>
          <a
            className="inline-flex items-center gap-2 border-b border-accent pb-0.75 font-mono text-[12px] tracking-[0.08em] text-text uppercase no-underline transition-colors duration-200 hover:text-accent"
            href="#top"
          >
            Back to top{' '}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
