import type { Locale, ProjectCategory, SectionId } from '@/types';

/** Interface strings (labels, headings, buttons). Content lives in src/data. */
const en = {
  documentTitle: 'Mohamed Hajbi · Software Engineer',
  skipToContent: 'Skip to content',
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  } satisfies Record<SectionId, string>,
  header: {
    backToTop: 'back to top',
    primaryNav: 'Primary',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  hero: {
    availability: 'Open to new opportunities',
    contact: 'Contact me',
    cv: 'CV (PDF)',
    focus: 'Full-Stack',
    portraitAlt: 'Portrait of Mohamed Hajbi',
    badgeTopTitle: 'Full-Stack',
    badgeTopText: 'Python · JS · Java',
    badgeBottomText: 'faster API responses',
  },
  about: {
    eyebrow: 'About',
    title: 'Building software that is fast, reliable and easy to maintain',
  },
  experience: {
    eyebrow: 'Career',
    title: 'Professional experience',
    present: 'Present',
    stackLabel: (role: string) => `Stack used as ${role}`,
  },
  skills: {
    eyebrow: 'Toolbox',
    title: 'Technical skills',
    spoken: 'Spoken languages',
    groupLabel: (group: string) => `${group} skills`,
  },
  projects: {
    eyebrow: 'Work',
    title: 'Selected projects',
    intro:
      'A selection of professional and personal projects across full-stack, DevOps and AI work.',
    filterLabel: 'Filter projects by category',
    all: 'All',
    shown: (count: number) => `${count} projects shown`,
    stackLabel: (title: string) => `${title} stack`,
    categories: {
      backend: 'Backend',
      fullstack: 'Full-stack',
      devops: 'DevOps',
      ai: 'AI & Data',
      mobile: 'Mobile',
    } satisfies Record<ProjectCategory, string>,
  },
  education: {
    eyebrow: 'Education',
    title: 'Degrees',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build something together",
    intro:
      'Open to full-stack software engineering roles, on-site, hybrid or remote. Feel free to reach out.',
    email: 'Email',
    linkedin: 'LinkedIn',
    phone: 'Phone',
    resume: 'Résumé',
    download: 'Download my CV',
  },
  footer: {
    backToTop: 'Back to top',
  },
};

export type UiStrings = typeof en;

const fr: UiStrings = {
  documentTitle: 'Mohamed Hajbi · Ingénieur logiciel',
  skipToContent: 'Aller au contenu',
  nav: {
    about: 'Profil',
    experience: 'Expériences',
    skills: 'Compétences',
    projects: 'Projets',
    education: 'Formation',
    contact: 'Contact',
  },
  header: {
    backToTop: 'retour en haut',
    primaryNav: 'Navigation principale',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },
  hero: {
    availability: 'Disponible pour de nouvelles opportunités',
    contact: 'Me contacter',
    cv: 'CV (PDF)',
    focus: 'Full-Stack',
    portraitAlt: 'Portrait de Mohamed Hajbi',
    badgeTopTitle: 'Full-Stack',
    badgeTopText: 'Python · JS · Java',
    badgeBottomText: 'de temps de réponse API en moins',
  },
  about: {
    eyebrow: 'Profil',
    title: 'Concevoir des logiciels rapides, fiables et faciles à maintenir',
  },
  experience: {
    eyebrow: 'Parcours',
    title: 'Expériences professionnelles',
    present: "Aujourd'hui",
    stackLabel: (role: string) => `Technologies utilisées : ${role}`,
  },
  skills: {
    eyebrow: 'Savoir-faire',
    title: 'Compétences techniques',
    spoken: 'Langues',
    groupLabel: (group: string) => `Compétences ${group}`,
  },
  projects: {
    eyebrow: 'Réalisations',
    title: 'Projets marquants',
    intro:
      'Une sélection de projets professionnels et personnels en développement full-stack, DevOps et IA.',
    filterLabel: 'Filtrer les projets par catégorie',
    all: 'Tous',
    shown: (count: number) => `${count} projets affichés`,
    stackLabel: (title: string) => `Technologies : ${title}`,
    categories: {
      backend: 'Backend',
      fullstack: 'Full-stack',
      devops: 'DevOps',
      ai: 'IA & Data',
      mobile: 'Mobile',
    },
  },
  education: {
    eyebrow: 'Formation',
    title: 'Diplômes',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Construisons quelque chose ensemble',
    intro:
      "Ouvert aux postes d'ingénieur logiciel full-stack, sur site, en hybride ou en remote. N'hésitez pas à me contacter.",
    email: 'Email',
    linkedin: 'LinkedIn',
    phone: 'Téléphone',
    resume: 'CV',
    download: 'Télécharger mon CV',
  },
  footer: {
    backToTop: 'Retour en haut',
  },
};

export const ui: Record<Locale, UiStrings> = { en, fr };

export const locales: { code: Locale; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
];
