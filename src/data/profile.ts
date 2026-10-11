import type { Profile, SectionId } from '@/types';

/** Section order drives both the page and the navigation. Labels live in i18n/ui.ts. */
export const sectionIds: SectionId[] = [
  'about',
  'experience',
  'skills',
  'projects',
  'education',
  'contact',
];

export const profile: Profile = {
  name: 'Mohamed Hajbi',
  initials: 'MH',
  title: {
    en: 'Software Engineer',
    fr: 'Ingénieur logiciel',
  },
  tagline: {
    en: 'I design and build web applications end to end: robust APIs, well-structured databases, clean interfaces and automated cloud deployments.',
    fr: 'Je conçois et développe des applications web de bout en bout : API robustes, bases de données bien structurées, interfaces soignées et déploiements cloud automatisés.',
  },
  summary: {
    en: [
      'I am a **full-stack Software Engineer** with an Engineering Degree in Computer Science. I work full-time as a Software Engineer, after **five internships** that took me through full-stack and data work.',
      'On the server side I build **REST APIs** with Python/FastAPI, Django, NestJS and Spring Boot, design **relational and NoSQL databases** (PostgreSQL, PostGIS, MongoDB), and take care of JWT security and performance, including cutting API response times by about **80%**.',
      'On the client side I build interfaces with **Vue.js, React and Angular**, and I ship with **Docker, CI/CD and AWS**. I also integrate **AI models** into applications, from the data pipeline to containerized models running through Celery and RabbitMQ, and size the resources each workload needs, locally or on cloud instances.',
    ],
    fr: [
      "Je suis **ingénieur logiciel full-stack**, titulaire d'un diplôme d'ingénieur en informatique. Je travaille aujourd'hui à temps plein comme ingénieur logiciel, après **cinq stages** qui m'ont fait passer par le développement full-stack et l'analyse de données.",
      "Côté serveur, je développe des **API REST** avec Python/FastAPI, Django, NestJS et Spring Boot, je conçois des **bases de données relationnelles et NoSQL** (PostgreSQL, PostGIS, MongoDB) et je m'occupe de la sécurité JWT et des performances, avec notamment des temps de réponse d'API réduits d'environ **80 %**.",
      "Côté client, je réalise des interfaces avec **Vue.js, React et Angular**, et je livre avec **Docker, CI/CD et AWS**. J'intègre aussi des **modèles d'IA** dans les applications, du pipeline de données jusqu'aux modèles conteneurisés exécutés via Celery et RabbitMQ, en dimensionnant les ressources de chaque traitement, en local ou sur des instances cloud.",
    ],
  },
  location: { en: 'Sfax, Tunisia', fr: 'Sfax, Tunisie' },
  email: 'mohamed.hajbi.dev@gmail.com',
  phone: '+216 23 362 232',
  linkedin: 'https://www.linkedin.com/in/mohamed-hajbi',
  linkedinHandle: 'in/mohamed-hajbi',
  cvPath: '/cv-mohamed-hajbi.pdf',
  photo: '/profile.webp',
  highlights: [
    {
      title: { en: 'Backend & APIs', fr: 'Backend & API' },
      text: {
        en: 'RESTful services with FastAPI, Django, NestJS and Spring Boot, secured with JWT.',
        fr: 'Services REST avec FastAPI, Django, NestJS et Spring Boot, sécurisés par JWT.',
      },
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      text: {
        en: 'Responsive interfaces and dashboards with Vue.js, React and Angular.',
        fr: 'Interfaces et tableaux de bord responsives avec Vue.js, React et Angular.',
      },
    },
    {
      title: { en: 'Data & performance', fr: 'Données & performance' },
      text: {
        en: 'Schema design, indexing and query optimization on PostgreSQL, PostGIS and MongoDB.',
        fr: 'Conception de schémas, indexation et optimisation de requêtes sur PostgreSQL, PostGIS et MongoDB.',
      },
    },
    {
      title: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' },
      text: {
        en: 'Docker, CI/CD with GitHub Actions, and deployments on AWS (S3, EC2, ECR, SSM).',
        fr: 'Docker, CI/CD avec GitHub Actions et déploiements sur AWS (S3, EC2, ECR, SSM).',
      },
    },
    {
      title: { en: 'AI & automation', fr: 'IA & automatisation' },
      text: {
        en: 'Model pipelines integrated into applications, Dockerized, run through Celery and RabbitMQ, with resources sized for local or cloud.',
        fr: 'Pipelines de modèles intégrés aux applications, conteneurisés, exécutés via Celery et RabbitMQ, avec des ressources dimensionnées en local ou dans le cloud.',
      },
    },
  ],
  stats: [
    {
      value: '1+',
      label: { en: 'year as a full-time engineer', fr: 'an comme ingénieur à temps plein' },
    },
    { value: '5', label: { en: 'internships', fr: 'stages' } },
    { value: '7+', label: { en: 'projects delivered', fr: 'projets réalisés' } },
    {
      value: '~80%',
      label: { en: 'faster API response times', fr: 'de temps de réponse API en moins' },
    },
  ],
};
