import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Climate Innov Digital',
    type: 'Full-time',
    start: 'Sep 2025',
    end: 'Present',
    bullets: [
      'Developed and optimized FastAPI REST endpoints for large geospatial datasets, reducing API response times by approximately 80%.',
      'Designed and implemented the PostgreSQL/PostGIS database architecture for large-scale geospatial data storage and querying.',
      'Optimized database performance through index design and query optimization.',
      'Implemented secure authentication and authorization using JWT.',
      'Automated deployment pipelines using GitHub Actions and AWS Systems Manager (SSM).',
      'Implemented AWS deployment infrastructure using S3, EC2, ECR and Elastic IP, with Docker-based environments isolating geospatial processing services.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'JWT', 'Docker', 'GitHub Actions', 'AWS'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Climate Innov Digital',
    type: 'Internship',
    start: 'Feb 2024',
    end: 'Aug 2025',
    bullets: [
      'Developed RESTful APIs using FastAPI for geospatial data processing and retrieval.',
      'Contributed to PostgreSQL/PostGIS database design and large-scale geospatial data management.',
      'Processed, cleaned and transformed geospatial datasets for analysis.',
      'Built Docker-based environments isolating backend and geospatial processing services.',
    ],
    stack: ['Python', 'FastAPI', 'PostGIS', 'Docker'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'ASM',
    type: 'Internship',
    start: 'Jul 2024',
    end: 'Aug 2024',
    bullets: [
      'Developed backend functionality for a messaging application using Spring Boot, Firebase and MongoDB.',
      'Integrated Firebase Cloud Messaging (FCM) and EMQX MQTT.',
    ],
    stack: ['Spring Boot', 'Firebase', 'MongoDB', 'FCM', 'MQTT'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'TEKABDEV',
    type: 'Internship',
    start: 'Jul 2023',
    end: 'Aug 2023',
    bullets: [
      'Built an admin dashboard and a 404 page using Vue.js.',
      'Developed an order-tracking API using NestJS, with PostgreSQL and Docker.',
    ],
    stack: ['Vue.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Ahwa Solution',
    type: 'Internship',
    start: 'Feb 2022',
    end: 'May 2022',
    bullets: [
      'Designed and developed a gym management web platform using Django.',
      'Integrated the Stripe payment API and implemented real-time notifications.',
    ],
    stack: ['Django', 'Python', 'Stripe'],
  },
];
