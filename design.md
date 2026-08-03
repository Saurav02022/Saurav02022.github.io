# Saurav Kumar — Portfolio · Design Spec

Single-page, dark, typography-led portfolio for a full-stack + AI engineer.
Voice is plain-engineer: concrete claims, no hype. The visual system is quiet
so the writing carries the page — one mint accent on a near-black ground, over
a fixed WebGL scene of four stacked planes (frontend, backend, database,
deploy) that the camera moves through as you scroll.

Source of truth: `Saurav Kumar Portfolio.dc.html` and this codebase. Both must
stay in step. Copy lives in `lib/portfolio-data.tsx` — every string on the site
is there, and nowhere else.

---

## 1. Foundations

### Tokens
Declared once in `app/globals.css` under `@theme`, so each one compiles to a
Tailwind utility as well as a CSS variable. There is no separate Tailwind config
file — Tailwind v4 reads the CSS.

Token names are the design file's own custom properties, so a rule in the
`.dc.html` maps 1:1 onto a utility here.

| Token | Value | Utility | Use |
|---|---|---|---|
| `--color-void` | `#0A0B0A` | `bg-void` | Page ground |
| `--color-surface` | `#101210` | `bg-surface` | Reserved lift |
| `--color-surface2` | `#161916` | `bg-surface2` | Experience / open-source cards, figure steps |
| `--color-raise` | `#1C201C` | `bg-raise` | The topmost figure step |
| `--color-pane-a` | `rgb(16 18 16 / .88)` | `bg-pane-a` | Section wash A (Experience, Open source, Toolkit, footer) |
| `--color-pane-b` | `rgb(10 11 10 / .55)` | `bg-pane-b` | Section wash B (Work, About, Contact) |
| `--color-text` | `#F2EFE7` | `text-text` | Primary text |
| `--color-text2` | `#CFCBC0` | `text-text2` | Leads, case summaries |
| `--color-muted` | `#A6A196` | `text-muted` | Body / secondary text |
| `--color-faint` | `#8C887D` | `text-faint` | Meta, dates, captions |
| `--color-line` | `rgb(242 239 231 / .13)` | `border-line` | Hairline dividers |
| `--color-line2` | `rgb(242 239 231 / .24)` | `border-line2` | Stronger borders |
| `--color-accent` | `#4FD1A5` | `text-accent` | Mint — the only chromatic colour |
| `--color-accent-soft` | `rgb(79 209 165 / .12)` | `bg-accent-soft` | Layer-button hover fill |
| `--color-accent-dim` | `rgb(79 209 165 / .34)` | — | Section-number outline stroke |
| `--color-accent-ghost` | `rgb(79 209 165 / .08)` | — | Section-number drop shadow |
| `--color-on-accent` | `#05140F` | `text-on-accent` | Text on an accent fill |
| `--color-live` | `#4FD1A5` | `bg-live` | The "Live" status dot |

The two `pane` washes are translucent on purpose: they sit over the fixed
canvas, so the scene reads through B strongly and through A faintly. That
alternation is what gives the page its depth — do not make them opaque.

Accent is deliberately scarce: eyebrow, section numbers, `<em>` in the cover,
bullet markers, `dt` labels, hover states, `::selection`. The only large accent
fills are the cover's primary button and the highlighted figure step.

Section numbers are an **outline**, not a fill: transparent text with a 1px
`--color-accent-dim` stroke plus two offset `--color-accent-ghost` shadows.

### Type
- **Display** — Syne 600/700/800 (`font-display`): brand mark, cover title,
  section titles, case titles, company names, big email. Carries all display weight.
- **Sans** — Instrument Sans (`font-sans`): body, leads, buttons. Base 17px / 1.6.
- **Mono** — Space Mono (`font-mono`): eyebrow, nav, dates, meta, tags, captions,
  labels, links. Every "instrument panel" element is mono + uppercase + wide tracking.

The display ↔ mono contrast (expressive against technical metadata) is the core
visual idea. Do not introduce a fourth family.

Font stacks are declared literally (`"Syne", sans-serif`), **not** as next/font's
`--font-*` variables: those expand to `"Syne", "Syne Fallback"`, and the glyphs
this design leans on (→ ↗ ✳) sit outside the latin subset, so they would resolve
to Next's proportional metric-fallback instead of a real mono face. The
`@font-face` rules still come from next/font via the `.variable` classes on `<html>`.

Display sizing is fluid via `clamp()` — cover title `clamp(40px,6.4vw,86px)`,
section title `clamp(38px,6vw,78px)`. `text-balance` on headlines, `text-pretty`
on paragraphs and bullets. Prose measures are capped in `ch`.

### Layout & spacing
- `WRAP` (`lib/styles.ts`) — `max-w-wrap` (1080px) with the fluid `px-gutter`
  (`clamp(20px,5vw,56px)`). The page's only measure.
- `<Section>` (`components/layout/Section.tsx`) — `py-sec`
  (`clamp(78px,10vw,144px)`), `scroll-mt-19` so anchors clear the fixed nav, and
  the `pane` wash (`a` or `b`).

### The rail rule
**Every section is a narrow rail plus a prose column**, split at the `nav`
breakpoint (900px) and stacked below it:

```
grid gap-y-6 nav:grid-cols-[var(--container-rail)_minmax(0,1fr)]
             nav:gap-x-[clamp(28px,4vw,56px)]
```

The rail (`--container-rail`, 240px) carries the metadata — dates, role,
location, tags, labels. The right column carries the running prose, capped at
`--container-col` (74ch).

This exists because prose alone cannot fill a wide row. 74ch is the top of the
comfortable reading range, so a single column stops at roughly 690px and
everything to its right stands empty — which reads as a bug inside a bordered
card. Two columns fill the row without lengthening a single line.

The container is 1080px, not the design file's 1400px, for the same reason:
240 (rail) + 56 (gap) + 690 (prose) + card padding lands near 1080. A wider
container only re-opens the gap it was meant to close.

Work is the original of this pattern — its figure is just a wide rail. If a new
section cannot fill the row, give it a rail; do not widen the prose.

---

## 2. Components

**Nav** — fixed, transparent until scrolled; then translucent blur + hairline.
Display brand mark with a teal ✳. Mono links tracked by scroll-spy, which sets
`aria-current`. Collapses to an "Index" button below 860px (`nav:` breakpoint)
opening a native `<dialog>` via `showModal()` — the platform supplies the focus
trap, Esc-to-close, focus restore and inert background.

**Cover** — mono bar (role · discipline · location · year) over a rule; mono
eyebrow with a leading accent rule; oversized display title with one teal `<em>`;
support paragraph; primary / ghost / quiet buttons; and an index rail listing the
six numbered sections with a mono stats block. Staggered `rise` on entry.

**Marquee** — ink band, mono uppercase, two identical strips scrolled -50%.
`aria-hidden` — it is decoration, and its content is stated elsewhere on the page.

**Section head** — oversized ghost number, then the title, then the intro
beneath it. The number is an outline, not a fill: transparent text with a 1px
`accent-dim` stroke and two offset `accent-ghost` shadows. The title pulls up
onto the number with a negative top margin.

**Work / case study** — six features, one identical card, sorted by how much
verifiable engineering each repo holds. Per card: mono meta row over a rule
(Feature NN · kind · year, with origin — take-home, hackathon — stated in the
kind on purpose), then a prose column (title, summary, facts, links) beside a
bordered figure. Each figure is a numbered step list from `fig` in the case
data — the highlighted step (the one with a `note`) is the point of the
mechanism. Fig numbers derive from list position. Facts are a `<dl>` of
Role / Challenge / Key decision / Outcome.

**Experience** — a `surface2` card on a hairline border. Inside it, the rail
rule: dates, role, location and tag pills in the 240px left column behind a
`border-r`; company, sub-line, summary and `/`-marker bullets in the prose
column. `<b>` in the copy is a weight shift plus the brighter text tier, never
colour.

**Open source** — the Experience card reused verbatim: same rail, same border,
same tag pills. This is work, and reading it in the same frame as the jobs is
the point. Two rows, reverse-chronological like Experience, so the arc
(contributor in the winter cohort, mentor in the summer one) lands without being
narrated. Projects are `/`-marker rows carrying a stat, a one-clause description
of the project, then what was actually done — and a row only carries a number
once that number resolves to something a reader can open.

**About** — prose column + a detail rail of hairline-separated Label/Value rows.

**Toolkit** — inverted: ink ground, `accent-bright` labels, `on-accent` tints
for the body. Five rows, then the languages line.

**Contact** — oversized display title, muted support, big display mailto, and a
mono "Elsewhere" list.

**Footer** — display name + mono meta left; colophon + back-to-top right.

---

## 3. Motion
Restrained. `rise` (20px + fade, 0.6–0.8s) staggers the cover on load; a shared
`Reveal` observer applies the same idea to `[data-reveal]` elements on scroll,
staggering by `85ms × the attribute value`. Hover transitions are 0.2s on colour,
border and small transforms. The primary button lifts 2px.

All of it is disabled under `prefers-reduced-motion` — including `Reveal`, which
checks the media query and returns before hiding anything, so nothing can be left
invisible.

## 4. Accessibility
Skip link to `<main>`; teal `:focus-visible` ring on every link and button;
`aria-labelledby` per section; scroll-spy sets `aria-current`; the mobile menu is
a native modal `<dialog>`; 44px minimum touch targets on the menu buttons;
"(opens in new tab)" in the `aria-label` of every external link; decorative
glyphs (→ ↗ ✳ /) are `aria-hidden`. Body text meets WCAG AA.

## 5. Responsive
- **≥860px** (`nav:`) — nav links and the vertical rail labels appear.
- **<860px** — nav collapses to the Index dialog; rail labels drop out.

Everything else is intrinsic: `flex-wrap` with `flex-[grow_shrink_basis]` and
`min-w-[min(100%,Npx)]` on each column, so sections reflow on content width
rather than on breakpoints.

## 6. Rules
- Teal stays scarce — accent, not decoration.
- Display for anything human-facing and expressive; mono for anything
  machine/metadata.
- No emoji, no gradients-as-decoration.
- Claims stay concrete and verifiable; unverified metrics never ship (see the
  RTO Shield outcome, which states the take-home caveat rather than inventing
  numbers). This applies to the OG card and JSON-LD too.
