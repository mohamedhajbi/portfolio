import type { Project, ProjectCategory } from '@/types';

export const projectCategories: ProjectCategory[] = ['Backend', 'Full-stack', 'DevOps', 'Mobile'];

export const projects: Project[] = [
  {
    title: 'Geospatial REST API platform',
    context: 'Climate Innov Digital',
    period: '2024 — present',
    description:
      'FastAPI services serving large geospatial datasets backed by a PostgreSQL/PostGIS architecture. Index design and query optimization cut API response times by about 80%, with JWT-secured access.',
    stack: ['FastAPI', 'Python', 'PostGIS', 'PostgreSQL', 'JWT'],
    categories: ['Backend'],
  },
  {
    title: 'Automated AWS deployment pipeline',
    context: 'Climate Innov Digital',
    period: '2025 — present',
    description:
      'CI/CD with GitHub Actions and AWS Systems Manager deploying Dockerized services to EC2, with images in ECR, storage on S3 and a stable Elastic IP.',
    stack: ['GitHub Actions', 'AWS SSM', 'EC2', 'ECR', 'S3', 'Docker'],
    categories: ['DevOps'],
  },
  {
    title: 'Sales Management System',
    context: 'Personal project',
    period: 'Project',
    description:
      'Microservices architecture with REST APIs for sales operations and analytics, secured with JWT, routed through an API Gateway with Eureka service discovery and an Angular front end.',
    stack: ['Spring Boot', '.NET', 'Angular', 'JWT', 'Eureka'],
    categories: ['Backend', 'Full-stack'],
  },
  {
    title: 'Messaging app backend',
    context: 'ASM',
    period: '2024',
    description:
      'Backend features for a messaging application, with push notifications through Firebase Cloud Messaging and real-time messaging over EMQX MQTT.',
    stack: ['Spring Boot', 'Firebase', 'MongoDB', 'MQTT'],
    categories: ['Backend', 'Mobile'],
  },
  {
    title: 'Order-tracking API & admin dashboard',
    context: 'TEKABDEV',
    period: '2023',
    description:
      'An order-tracking API in NestJS on PostgreSQL, containerized with Docker, plus a Vue.js admin dashboard.',
    stack: ['NestJS', 'PostgreSQL', 'Docker', 'Vue.js'],
    categories: ['Backend', 'Full-stack'],
  },
  {
    title: 'Gym management platform',
    context: 'Ahwa Solution',
    period: '2022',
    description:
      'A web platform for managing a gym, built with Django, with Stripe payments and real-time notifications.',
    stack: ['Django', 'Python', 'Stripe'],
    categories: ['Full-stack'],
  },
  {
    title: 'Voice-Controlled News App',
    context: 'Personal project',
    period: 'Project',
    description:
      'A React news platform with hands-free navigation powered by Alan AI speech recognition.',
    stack: ['React', 'Alan AI', 'JavaScript'],
    categories: ['Full-stack'],
  },
];
