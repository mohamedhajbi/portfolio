export interface NavItem {
  id: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  summary: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  cvPath: string;
  photo: string;
  availability: string;
  highlights: { title: string; text: string }[];
  stats: Stat[];
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  type?: string;
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export type ProjectCategory = 'Backend' | 'Full-stack' | 'DevOps' | 'Mobile';

export interface Project {
  title: string;
  context: string;
  period: string;
  description: string;
  stack: string[];
  categories: ProjectCategory[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}
