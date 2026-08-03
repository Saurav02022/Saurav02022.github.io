import { TagList } from '@/components/Tag';
import { Section } from '@/components/layout/Section';
import { experience, experienceIntro } from '@/lib/portfolio-data';
import { BULLET_MARK, BULLET_ROW, CARD_BULLETS, CARD_TITLE, RAIL_GRID } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { SectionHead } from './SectionHead';

/** <b> in the copy is a weight shift plus the brighter text tier — see lib/portfolio-data. */
const BOLD_IN_PROSE = '[&_b]:font-semibold [&_b]:text-text';

export function Experience() {
  return (
    <Section id="experience" labelledBy="exp-h" pane="a">
      <SectionHead
        num="01"
        title="Experience"
        id="exp-h"
        intro={experienceIntro}
        className="mb-[clamp(40px,5vw,68px)]"
      />

      {experience.map((role, i) => {
        const [roleTitle, subLine, location] = role.meta;

        return (
          <article
            key={role.company}
            data-reveal={String(i)}
            data-lift="1"
            className={cn(
              RAIL_GRID,
              'mb-[clamp(20px,2.4vw,28px)] rounded-[3px] border border-line bg-surface2 p-[clamp(26px,3.2vw,44px)] transition-[border-color,transform,box-shadow] duration-300 last:mb-0'
            )}
          >
            <div className="space-y-2 nav:border-r nav:border-line nav:pr-[clamp(20px,2.5vw,32px)]">
              <div className="font-mono text-[12px] font-bold tracking-[0.08em] text-accent">
                {role.dates}
              </div>
              <div className="font-mono text-[11.5px] tracking-[0.06em] text-muted uppercase">
                {roleTitle}
              </div>
              <div className="font-mono text-[11.5px] text-faint">{location}</div>
              <TagList tags={role.tags} className="mt-6" />
            </div>

            <div>
              <h3 className={CARD_TITLE}>{role.company}</h3>
              <p className="mb-[22px] font-mono text-[11.5px] text-muted">{subLine}</p>

              <p
                className={`mb-[22px] max-w-col text-[clamp(16px,1.5vw,18.5px)] text-text2 text-pretty ${BOLD_IN_PROSE}`}
              >
                {role.summary}
              </p>

              {/* The marker is a real element, not ::before — generated content
                  gets announced as "slash" on every bullet. */}
              <ul className={cn(CARD_BULLETS, BOLD_IN_PROSE)}>
                {role.bullets.map((bullet, j) => (
                  <li key={j} className={BULLET_ROW}>
                    <span className={BULLET_MARK} aria-hidden="true">
                      /
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </Section>
  );
}
