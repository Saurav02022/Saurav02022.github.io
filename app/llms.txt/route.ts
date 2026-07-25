import {
  EMAIL,
  LOCATION,
  NAME,
  RESUME_URL,
  ROLE,
  SOCIALS,
  about,
  cases,
  community,
  contact,
  cover,
  experience,
  toolkit,
} from '@/lib/portfolio-data';
import { SITE_URL } from '@/lib/site-config';

/**
 * llms.txt — the site in one plain-text file, for the models that read it
 * instead of the page. Same claims as the page, generated from the same data,
 * so the two can't drift.
 */
export const dynamic = 'force-static';

const line = (s: string) => s.replace(/\s+/g, ' ').trim();

function body() {
  const work = cases
    .map((c) => {
      const links = [`[source](${c.repoUrl})`, c.liveUrl && `[live](${c.liveUrl})`]
        .filter(Boolean)
        .join(' · ');
      return `- **${c.title}** (${c.year}, ${c.kind}) — ${line(c.summary)} ${links}`;
    })
    .join('\n');

  const roles = experience
    .map((r) => `- **${r.company}** — ${r.meta.join(' · ')} (${r.dates})`)
    .join('\n');

  const openSource = community
    .map((entry) => {
      const projects = entry.projects
        .map((p) => {
          const name = p.url ? `[${p.name}](${p.url})` : p.name;
          const stat = p.stat ? ` (${p.stat})` : '';
          return `- **${name}**${stat}${p.blurb ? ` — ${p.blurb}` : ''}${p.did ? ` ${p.did}` : ''}`;
        })
        .join('\n');
      return `### ${entry.org} — ${entry.meta.join(' · ')} (${entry.dates})\n\n${projects}`;
    })
    .join('\n\n');

  const aboutText = `${line(about.statement)}\n\n${line(about.p1)}\n\n${line(about.p2)}`;

  const toolkitText = toolkit
    .map((row) => `- **${row.label}** — ${row.tools}. ${line(row.note)}`)
    .join('\n');

  const links = [
    ...SOCIALS.map((s) => `- [${s.label}](${s.url})`),
    `- [Résumé](${RESUME_URL})`,
    `- Email: ${EMAIL}`,
  ].join('\n');

  return `# ${NAME}

> ${ROLE} in ${LOCATION}. Ships production TypeScript and Python — Next.js front ends,
> Node and FastAPI services, and LLM features that have to behave under real inputs.

Everything below is on ${SITE_URL}. Each project links to its source; nothing here
claims a metric that isn't in the repo.

${line(cover.support)}

${cover.stats.map((s) => `- **${s.label}**: ${s.value}`).join('\n')}

## Selected work

${work}

## Experience

${roles}

## Open source

${openSource}

## About

${aboutText}

## Toolkit

${toolkitText}

## Contact

${line(contact.support)}

${links}
`;
}

export function GET() {
  return new Response(body(), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
