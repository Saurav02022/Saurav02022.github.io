import type { ReactNode } from 'react';

/** A page section, as listed by the cover index rail and the mobile menu. */
export interface Section {
  num: string;
  /** Label in the mobile menu and top nav. */
  label: string;
  /** Cover-rail label, when the design spells it out differently. */
  indexLabel?: string;
  id: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface ExperienceRole {
  dates: string;
  company: string;
  /** Role · org · place, stacked on their own lines. */
  meta: string[];
  summary: ReactNode;
  bullets: ReactNode[];
  tags: string[];
}

/** A Role/Challenge/Key decision/Outcome row in a case study. */
export interface CaseFact {
  label: string;
  text: ReactNode;
  /** Design assigns each row its own weight: muted is the default. */
  tone?: 'plain' | 'strong';
}

/** One step in a case figure; `note` marks the highlighted step — the point of the figure. */
export interface CaseFigureStep {
  n: string;
  text: string;
  note?: string;
}

/** The bordered mechanism figure every case card carries. */
export interface CaseFigure {
  /** Caption after the figure number, e.g. "trust pipeline". */
  caption: string;
  /** Right-hand caption, e.g. "input → gate → export". */
  sub: string;
  steps: CaseFigureStep[];
}

export interface CaseStudy {
  feature: string;
  kind: string;
  live?: boolean;
  year: string;
  title: string;
  summary: string;
  facts: CaseFact[];
  fig: CaseFigure;
  tags: string[];
  /** Languages actually written in this project — feeds SoftwareSourceCode JSON-LD. */
  languages: string[];
  /** Absent for work built at a job, where there is no public repository. */
  repoUrl?: string;
  liveUrl?: string;
}

/** One project mentored inside an open-source programme. */
export interface CommunityProject {
  name: string;
  /** What the project is, in one line — so a reader knows it without leaving. */
  blurb?: string;
  /** What I actually did on it. */
  did?: string;
  url?: string;
  /** The project's headline measure — only ever numbers a reader can go check. */
  stat?: string;
}

/** An open-source / community engagement, laid out like an experience row. */
export interface CommunityEntry {
  dates: string;
  org: string;
  /** Role · programme · scope, stacked on their own lines. */
  meta: string[];
  summary: ReactNode;
  projects: CommunityProject[];
  tags: string[];
}

export interface DetailLink {
  label: string;
  url: string;
}

export interface RailRow {
  label: string;
  value: string;
  sub?: string;
}

export interface ToolkitRow {
  num: string;
  label: string;
  tools: string;
  note: string;
}
