export type Locale = 'en' | 'fr';

/** A value provided in every supported language. */
export type Localized<T = string> = Record<Locale, T>;

/** Text that is either the same in every language (tech names) or translated. */
export type Text = string | Localized;

export type SectionId = 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact';

export interface Stat {
  value: string;
  label: Localized;
}

export interface Profile {
  name: string;
  initials: string;
  title: Localized;
  tagline: Localized;
  summary: Localized<string[]>;
  location: Localized;
  email: string;
  phone: string;
  linkedin: string;
  linkedinHandle: string;
  cvPath: string;
  photo: string;
  highlights: { title: Localized; text: Localized }[];
  stats: Stat[];
}

export interface Experience {
  role: Localized;
  company?: string;
  type: Localized;
  /** ISO year-month, e.g. "2025-09". */
  start: string;
  /** ISO year-month; omit for a current position. */
  end?: string;
  bullets: Localized<string[]>;
  stack: string[];
}

export interface SkillGroup {
  title: Localized;
  items: Text[];
}

export type ProjectCategory = 'backend' | 'fullstack' | 'devops' | 'ai' | 'mobile';

export interface Project {
  title: Localized;
  context: Text;
  period?: Text;
  description: Localized;
  stack: string[];
  categories: ProjectCategory[];
}

export interface Education {
  degree: Localized;
  school: string;
  period: string;
}
