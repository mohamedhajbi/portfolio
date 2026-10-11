import type { Localized, Project, ProjectCategory } from '@/types';

export const projectCategories: ProjectCategory[] = [
  'backend',
  'fullstack',
  'devops',
  'ai',
  'mobile',
];

const personal: Localized = { en: 'Personal project', fr: 'Projet personnel' };
const sincePresent = (year: number): Localized => ({
  en: `${year} - present`,
  fr: `${year} - aujourd'hui`,
});

export const projects: Project[] = [
  {
    title: { en: 'Geospatial REST API platform', fr: "Plateforme d'API REST géospatiales" },
    context: 'Climate Innov Digital',
    period: sincePresent(2024),
    description: {
      en: 'FastAPI services serving large geospatial datasets backed by a PostgreSQL/PostGIS architecture. Index design and query optimization cut API response times by about 80%, with JWT-secured access.',
      fr: "Services FastAPI exposant de grands jeux de données géospatiales sur une architecture PostgreSQL/PostGIS. La conception d'index et l'optimisation des requêtes ont réduit les temps de réponse d'environ 80 %, avec un accès sécurisé par JWT.",
    },
    stack: ['FastAPI', 'Python', 'PostGIS', 'PostgreSQL', 'JWT'],
    categories: ['backend'],
  },
  {
    title: { en: 'AI model integration pipeline', fr: "Pipeline d'intégration de modèles d'IA" },
    context: 'Climate Innov Digital',
    period: sincePresent(2025),
    description: {
      en: 'End-to-end pipelines integrating several models into the application, from input data to results served by the API. Models are containerized with Docker and run asynchronously through Celery task queues and RabbitMQ, with compute resources sized per workload for local or cloud execution.',
      fr: "Pipelines de bout en bout intégrant plusieurs modèles dans l'application, des données d'entrée jusqu'aux résultats servis par l'API. Les modèles sont conteneurisés avec Docker et exécutés en asynchrone via des files de tâches Celery et RabbitMQ, avec des ressources de calcul dimensionnées pour chaque traitement, en local ou dans le cloud.",
    },
    stack: ['Python', 'Celery', 'RabbitMQ', 'Docker', 'FastAPI'],
    categories: ['ai', 'backend'],
  },
  {
    title: {
      en: 'Automated AWS deployment pipeline',
      fr: 'Pipeline de déploiement AWS automatisé',
    },
    context: 'Climate Innov Digital',
    period: sincePresent(2025),
    description: {
      en: 'CI/CD with GitHub Actions and AWS Systems Manager deploying Dockerized services to EC2, with images in ECR, storage on S3 and a stable Elastic IP.',
      fr: 'CI/CD avec GitHub Actions et AWS Systems Manager déployant des services Docker sur EC2, avec les images dans ECR, le stockage sur S3 et une Elastic IP fixe.',
    },
    stack: ['GitHub Actions', 'AWS SSM', 'EC2', 'ECR', 'S3', 'Docker'],
    categories: ['devops'],
  },
  {
    title: { en: 'Sales Management System', fr: 'Système de gestion des ventes' },
    context: personal,
    description: {
      en: 'Microservices architecture with REST APIs for sales operations and analytics, secured with JWT, routed through an API Gateway with Eureka service discovery and an Angular front end.',
      fr: "Architecture microservices avec des API REST pour les opérations de vente et l'analyse, sécurisée par JWT, avec API Gateway, découverte de services Eureka et un front-end Angular.",
    },
    stack: ['Spring Boot', '.NET', 'Angular', 'JWT', 'Eureka'],
    categories: ['backend', 'fullstack'],
  },
  {
    title: { en: 'Messaging app backend', fr: "Backend d'application de messagerie" },
    context: 'ASM',
    period: '2024',
    description: {
      en: 'Backend features for a messaging application, with push notifications through Firebase Cloud Messaging and real-time messaging over EMQX MQTT.',
      fr: 'Fonctionnalités backend pour une application de messagerie, avec notifications push via Firebase Cloud Messaging et messagerie temps réel via EMQX MQTT.',
    },
    stack: ['Spring Boot', 'Firebase', 'MongoDB', 'MQTT'],
    categories: ['backend', 'mobile'],
  },
  {
    title: {
      en: 'Order-tracking API & admin dashboard',
      fr: "API de suivi de commandes & tableau de bord d'administration",
    },
    context: 'TEKABDEV',
    period: '2023',
    description: {
      en: 'An order-tracking API in NestJS on PostgreSQL, containerized with Docker, plus a Vue.js admin dashboard.',
      fr: "Une API de suivi de commandes en NestJS sur PostgreSQL, conteneurisée avec Docker, et un tableau de bord d'administration en Vue.js.",
    },
    stack: ['NestJS', 'PostgreSQL', 'Docker', 'Vue.js'],
    categories: ['backend', 'fullstack'],
  },
  {
    title: { en: 'Gym management platform', fr: 'Plateforme de gestion de salle de sport' },
    context: 'Ahwa Solution',
    period: '2022',
    description: {
      en: 'A web platform for managing a gym, built with Django, with Stripe payments and real-time notifications.',
      fr: 'Une plateforme web de gestion de salle de sport développée avec Django, avec paiements Stripe et notifications en temps réel.',
    },
    stack: ['Django', 'Python', 'Stripe'],
    categories: ['fullstack'],
  },
  {
    title: { en: 'Voice-Controlled News App', fr: "Application d'actualités à commande vocale" },
    context: personal,
    description: {
      en: 'A React news platform with hands-free navigation powered by Alan AI speech recognition.',
      fr: "Une plateforme d'actualités en React avec une navigation mains libres grâce à la reconnaissance vocale Alan AI.",
    },
    stack: ['React', 'Alan AI', 'JavaScript'],
    categories: ['fullstack', 'ai'],
  },
  {
    title: {
      en: 'Data analysis app & Excel automation',
      fr: "Application d'analyse de données & automatisation Excel",
    },
    context: { en: 'Data Analysis Internship', fr: "Stage d'analyse de données" },
    period: '2021',
    description: {
      en: 'A Streamlit application for data analysis, plus automated generation of Excel charts that cut manual work by 50%.',
      fr: "Une application Streamlit d'analyse de données et la génération automatique de graphiques Excel, réduisant les tâches manuelles de 50 %.",
    },
    stack: ['Python', 'Streamlit', 'Excel'],
    categories: ['ai'],
  },
];
