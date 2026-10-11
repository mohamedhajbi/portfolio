import type { Localized, SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Languages', fr: 'Langages' },
    items: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    title: { en: 'Backend', fr: 'Backend' },
    items: [
      'FastAPI',
      'Django',
      'Flask',
      'Spring Boot',
      'NestJS',
      { en: 'RESTful API design', fr: "Conception d'API RESTful" },
      'JWT',
      'Celery',
      'RabbitMQ',
      'Microservices',
    ],
  },
  {
    title: { en: 'Frontend', fr: 'Frontend' },
    items: [
      'React',
      'Vue.js',
      'Angular',
      'Streamlit',
      { en: 'Responsive design', fr: 'Design responsive' },
    ],
  },
  {
    title: { en: 'Databases', fr: 'Bases de données' },
    items: [
      'PostgreSQL',
      'PostGIS',
      'MongoDB',
      'Firebase',
      { en: 'Indexing', fr: 'Indexation' },
      { en: 'Query optimization', fr: 'Optimisation de requêtes' },
    ],
  },
  {
    title: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' },
    items: ['AWS (S3, EC2, ECR, Elastic IP, SSM)', 'Docker', 'GitHub Actions', 'CI/CD', 'Git'],
  },
  {
    title: { en: 'AI & automation', fr: 'IA & automatisation' },
    items: [
      { en: 'AI model integration', fr: "Intégration de modèles d'IA" },
      { en: 'End-to-end model pipelines', fr: 'Pipelines de modèles de bout en bout' },
      { en: 'Dockerized models', fr: 'Modèles conteneurisés' },
      { en: 'Async execution (Celery, RabbitMQ)', fr: 'Exécution asynchrone (Celery, RabbitMQ)' },
      {
        en: 'Resource sizing (local vs cloud)',
        fr: 'Dimensionnement des ressources (local / cloud)',
      },
      { en: 'Task automation', fr: 'Automatisation des tâches' },
      { en: 'AI-assisted development', fr: 'Développement assisté par IA' },
    ],
  },
  {
    title: { en: 'Architecture & integrations', fr: 'Architecture & intégrations' },
    items: ['API Gateway', 'Eureka', 'MQTT', 'Firebase Cloud Messaging', 'Stripe'],
  },
];

export const spokenLanguages: Localized[] = [
  { en: 'English', fr: 'Anglais' },
  { en: 'French', fr: 'Français' },
];
