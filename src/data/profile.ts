import type { NavItem, Profile } from '@/types';

export const navigation: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const profile: Profile = {
  name: 'Mohamed Hajbi',
  initials: 'MH',
  title: 'Software Engineer · Backend & Full-Stack',
  tagline:
    'I design and build web applications end to end — robust APIs, well-structured databases, clean interfaces and automated cloud deployments.',
  summary: [
    'I am a **Software Engineer** with an Engineering Degree in Computer Science and **2.5+ years** of professional experience building production software, from the database up to the user interface.',
    'My core strength is the backend: **REST APIs** with Python/FastAPI, Django, NestJS and Spring Boot, **relational and NoSQL databases** (PostgreSQL, PostGIS, MongoDB), authentication with JWT and performance work — including cutting API response times by about **80%**.',
    'On the frontend I build interfaces with **Vue.js, React and Angular**, and I ship with **Docker, CI/CD and AWS**. I enjoy clean architecture, measurable performance gains and working in teams, in English or French.',
  ],
  location: 'Sfax, Tunisia',
  email: 'mohamed.hajbi.dev@gmail.com',
  phone: '+216 23 362 232',
  linkedin: 'https://www.linkedin.com/in/mohamed-hajbi',
  cvPath: '/cv-mohamed-hajbi.pdf',
  photo: '/profile.webp',
  availability: 'Open to new opportunities',
  highlights: [
    {
      title: 'Backend & APIs',
      text: 'RESTful services with FastAPI, Django, NestJS and Spring Boot, secured with JWT.',
    },
    {
      title: 'Frontend',
      text: 'Responsive interfaces and dashboards with Vue.js, React and Angular.',
    },
    {
      title: 'Data & performance',
      text: 'Schema design, indexing and query optimization on PostgreSQL, PostGIS and MongoDB.',
    },
    {
      title: 'Cloud & DevOps',
      text: 'Docker, CI/CD with GitHub Actions, and deployments on AWS (S3, EC2, ECR, SSM).',
    },
  ],
  stats: [
    { value: '2.5+', label: 'years of professional experience' },
    { value: '5', label: 'companies & internships' },
    { value: '7', label: 'projects delivered' },
    { value: '~80%', label: 'faster API response times' },
  ],
};
