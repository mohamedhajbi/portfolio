import type { Language, SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Django', 'Flask', 'NestJS', 'Spring Boot', '.NET', 'RESTful APIs', 'JWT'],
  },
  {
    title: 'Frontend',
    items: ['Vue.js', 'React', 'Angular', 'Responsive design'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'PostGIS', 'MongoDB', 'Firebase', 'Indexing', 'Query optimization'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (S3, EC2, ECR, SSM)', 'Docker', 'GitHub Actions', 'CI/CD', 'Git'],
  },
  {
    title: 'Architecture & integrations',
    items: ['Microservices', 'API Gateway', 'Eureka', 'MQTT', 'Firebase Cloud Messaging', 'Stripe'],
  },
];

export const languages: Language[] = [
  { name: 'English', level: 'B2' },
  { name: 'French', level: 'Intermediate, working level' },
];
