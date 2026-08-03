import { TagList } from '@/components/Tag';
import { Section } from '@/components/layout/Section';
import { community, communityIntro } from '@/lib/portfolio-data';
import { BULLET_MARK, BULLET_ROW, CARD_BULLETS, CARD_TITLE, RAIL_GRID } from '@/lib/styles';
import type { CommunityProject } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

/**
 * Mirrors the Experience card deliberately — this is work, and it should read
 * with the same weight rather than as a footnote.
 */
function Project({ project }: { project: CommunityProject }) {
  const heading = project.url ? (
    <a
      className="font-semibold text-accent underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-text"
      href={project.url}
      target="_blank"
      rel="noopener"
      aria-label={`${project.name} on GitHub (opens in new tab)`}
    >
      {project.name} <span aria-hidden="true">↗</span>
    </a>
  ) : (
    <b className="font-semibold text-text">{project.name}</b>
  );

  return (
    <li className={BULLET_ROW}>
      <span className={BULLET_MARK} aria-hidden="true">
        /
      </span>
      <span>
        {heading}
        {project.stat && (
          <span className="ml-2.5 font-mono text-[11px] tracking-[0.08em] text-faint uppercase">
            {project.stat}
          </span>
        )}
        {project.blurb && <span className="mt-1 block">{project.blurb}</span>}
        {project.did && <span className="mt-1 block text-text2">{project.did}</span>}
      </span>
    </li>
  );
}

export function Community() {
  return (
    <Section id="open-source" labelledBy="os-h" pane="a">
      <SectionHead
        num="03"
        title="Open source"
        id="os-h"
        intro={communityIntro}
        className="mb-[clamp(40px,5vw,68px)]"
      />

      {community.map((entry, i) => {
        const [entryRole, ...rest] = entry.meta;

        return (
          <article
            key={entry.org}
            data-reveal={String(i)}
            data-lift="1"
            className={cn(
              RAIL_GRID,
              'mb-[clamp(20px,2.4vw,28px)] rounded-[3px] border border-line bg-surface2 p-[clamp(26px,3.2vw,44px)] transition-[border-color,transform,box-shadow] duration-300 last:mb-0'
            )}
          >
            <div className="space-y-2 nav:border-r nav:border-line nav:pr-[clamp(20px,2.5vw,32px)]">
              <div className="font-mono text-[12px] font-bold tracking-[0.08em] text-accent">
                {entry.dates}
              </div>
              <div className="font-mono text-[11.5px] tracking-[0.06em] text-muted uppercase">
                {entryRole}
              </div>
              <div className="font-mono text-[11.5px] text-faint">{rest.join(' · ')}</div>
              <TagList tags={entry.tags} className="mt-6" />
            </div>

            <div>
              <h3 className={CARD_TITLE}>{entry.org}</h3>

              <p className="mb-[22px] max-w-col text-[clamp(16px,1.5vw,18.5px)] text-text2 text-pretty">
                {entry.summary}
              </p>

              <ul className={CARD_BULLETS}>
                {entry.projects.map((project) => (
                  <Project key={project.name} project={project} />
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </Section>
  );
}
