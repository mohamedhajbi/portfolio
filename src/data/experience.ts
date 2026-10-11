import type { Experience, Localized } from '@/types';

const internship: Localized = { en: 'Internship', fr: 'Stage' };

export const experiences: Experience[] = [
  {
    role: { en: 'Software Engineer', fr: 'Ingénieur logiciel' },
    company: 'Climate Innov Digital',
    type: { en: 'Full-time', fr: 'Temps plein' },
    start: '2025-09',
    bullets: {
      en: [
        'Developed and optimized FastAPI REST endpoints for large geospatial datasets, reducing API response times by approximately 80%.',
        'Designed and implemented the PostgreSQL/PostGIS database architecture for large-scale geospatial data storage and querying.',
        'Optimized database performance through index design and query optimization.',
        'Built end-to-end pipelines integrating multiple models into the application, from input data to results served by the API.',
        'Containerized the models with Docker and orchestrated their asynchronous execution with Celery task queues and RabbitMQ.',
        'Assessed the compute needs of each workload to choose between local execution and cloud instances, and sized resources accordingly.',
        'Implemented secure authentication and authorization using JWT.',
        'Automated deployment pipelines using GitHub Actions and AWS Systems Manager (SSM).',
        'Implemented AWS deployment infrastructure using S3, EC2, ECR and Elastic IP.',
      ],
      fr: [
        "Développement et optimisation d'endpoints REST FastAPI pour de grands jeux de données géospatiales, avec des temps de réponse réduits d'environ 80 %.",
        "Conception et mise en place de l'architecture de base de données PostgreSQL/PostGIS pour le stockage et l'interrogation de données géospatiales à grande échelle.",
        "Optimisation des performances de la base de données par la conception d'index et l'optimisation des requêtes.",
        "Mise en place de pipelines de bout en bout intégrant plusieurs modèles dans l'application, des données d'entrée jusqu'aux résultats servis par l'API.",
        'Conteneurisation des modèles avec Docker et orchestration de leur exécution asynchrone avec des files de tâches Celery et RabbitMQ.',
        'Évaluation des besoins de calcul de chaque traitement pour choisir entre exécution locale et instances cloud, et dimensionnement des ressources en conséquence.',
        "Mise en place de l'authentification et des autorisations sécurisées avec JWT.",
        'Automatisation des pipelines de déploiement avec GitHub Actions et AWS Systems Manager (SSM).',
        "Mise en place de l'infrastructure de déploiement AWS avec S3, EC2, ECR et Elastic IP.",
      ],
    },
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'PostGIS',
      'Celery',
      'RabbitMQ',
      'Docker',
      'JWT',
      'GitHub Actions',
      'AWS',
    ],
  },
  {
    role: { en: 'Software Engineer Intern', fr: 'Ingénieur logiciel stagiaire' },
    company: 'Climate Innov Digital',
    type: internship,
    start: '2024-02',
    end: '2025-08',
    bullets: {
      en: [
        'Developed RESTful APIs using FastAPI for geospatial data processing and retrieval.',
        'Contributed to PostgreSQL/PostGIS database design and large-scale geospatial data management.',
        'Processed, cleaned and transformed geospatial datasets for analysis.',
        'Built Docker-based environments for isolating backend and geospatial processing services.',
      ],
      fr: [
        "Développement d'API RESTful avec FastAPI pour le traitement et la récupération de données géospatiales.",
        'Contribution à la conception de la base PostgreSQL/PostGIS et à la gestion de données géospatiales à grande échelle.',
        "Traitement, nettoyage et transformation de jeux de données géospatiales pour l'analyse.",
        "Mise en place d'environnements Docker isolant les services backend et les traitements géospatiaux.",
      ],
    },
    stack: ['Python', 'FastAPI', 'PostGIS', 'Docker'],
  },
  {
    role: { en: 'Backend Developer Intern', fr: 'Développeur backend stagiaire' },
    company: 'ASM',
    type: internship,
    start: '2024-07',
    end: '2024-08',
    bullets: {
      en: [
        'Developed backend functionality for a messaging application using Spring Boot, Firebase and MongoDB.',
        'Integrated Firebase Cloud Messaging (FCM) and EMQX MQTT.',
      ],
      fr: [
        'Développement de fonctionnalités backend pour une application de messagerie avec Spring Boot, Firebase et MongoDB.',
        "Intégration de Firebase Cloud Messaging (FCM) et d'EMQX MQTT.",
      ],
    },
    stack: ['Spring Boot', 'Firebase', 'MongoDB', 'FCM', 'MQTT'],
  },
  {
    role: { en: 'Full-Stack Developer Intern', fr: 'Développeur full-stack stagiaire' },
    company: 'TEKABDEV',
    type: internship,
    start: '2023-07',
    end: '2023-08',
    bullets: {
      en: [
        'Built an admin dashboard and a 404 page using Vue.js.',
        'Developed an order-tracking API using NestJS, with PostgreSQL and Docker.',
      ],
      fr: [
        "Réalisation d'un tableau de bord d'administration et d'une page 404 avec Vue.js.",
        "Développement d'une API de suivi de commandes avec NestJS, PostgreSQL et Docker.",
      ],
    },
    stack: ['Vue.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    role: { en: 'Full-Stack Developer Intern', fr: 'Développeur full-stack stagiaire' },
    company: 'Ahwa Solution',
    type: internship,
    start: '2022-02',
    end: '2022-05',
    bullets: {
      en: [
        'Designed and developed a gym management web platform using Django.',
        'Integrated the Stripe payment API and implemented real-time notifications.',
      ],
      fr: [
        "Conception et développement d'une plateforme web de gestion de salle de sport avec Django.",
        "Intégration de l'API de paiement Stripe et mise en place de notifications en temps réel.",
      ],
    },
    stack: ['Django', 'Python', 'Stripe'],
  },
  {
    role: { en: 'Python Developer', fr: 'Développeur Python' },
    type: { en: 'Data Analysis Internship', fr: "Stage d'analyse de données" },
    start: '2021-01',
    end: '2021-02',
    bullets: {
      en: [
        'Developed a data analysis application with Python and Streamlit.',
        'Automated the creation of Excel charts, cutting manual work by 50%.',
      ],
      fr: [
        "Développement d'une application d'analyse de données avec Python et Streamlit.",
        'Automatisation de la création de graphiques Excel, réduisant les tâches manuelles de 50 %.',
      ],
    },
    stack: ['Python', 'Streamlit', 'Excel'],
  },
];
