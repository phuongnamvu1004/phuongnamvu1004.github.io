export const SKILLS = {
  Languages: ['Python', 'Go', 'JavaScript/TypeScript', 'SQL'],
  'Frameworks/Libraries': ['Django', 'FastAPI', 'Gin', 'Node.js', 'React'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'DevOps/Cloud': ['Docker', 'Kubernetes', 'AWS (EC2, S3, RDS, Lambda)', 'GCP', 'Terraform', 'CI/CD'],
  Other: ['Microservices', 'REST APIs', 'gRPC', 'RabbitMQ', 'System Design'],
};

export const EXPERIENCE = [
  {
    role: 'Senior Backend Engineer',
    company: 'Tech Solutions Inc.',
    date: 'Jan 2022 - Present',
    location: 'Remote',
    description:
      'Led the design and implementation of a high-availability microservices architecture using Go and gRPC, processing over 10M requests daily. Mentored junior engineers and improved system performance by 30%.',
  },
  {
    role: 'Backend Engineer',
    company: 'DataCorp',
    date: 'Jun 2019 - Dec 2021',
    location: 'New York, NY',
    description:
      'Developed and maintained scalable data processing pipelines using Python, Kafka, and PostgreSQL. Built REST APIs with Django Rest Framework for internal analytics dashboards.',
  },
  {
    role: 'Junior Developer',
    company: 'WebStart LLC',
    date: 'Sep 2017 - May 2019',
    location: 'Boston, MA',
    description:
      'Assisted in developing full-stack features for a client-facing web application using Node.js and React. Wrote unit and integration tests, contributing to a 95% test coverage goal.',
  },
];

export const PROJECTS = [
  {
    title: 'Distributed Task Queue',
    description:
      'A high-performance, fault-tolerant task queue system built with Go, Redis, and RabbitMQ, inspired by Celery.',
    tags: ['Go', 'Redis', 'RabbitMQ', 'System Design'],
    link: '#',
  },
  {
    title: 'E-commerce API',
    description:
      'A feature-rich RESTful API for an e-commerce platform, complete with authentication, payments, and order processing using Django and PostgreSQL.',
    tags: ['Python', 'Django', 'PostgreSQL', 'REST API'],
    link: '#',
  },
  {
    title: 'Cloud Deployment Automation',
    description: 'A set of Terraform scripts and CI/CD pipelines to fully automate the deployment of a microservices application on AWS.',
    tags: ['Terraform', 'AWS', 'CI/CD', 'Docker'],
    link: '#',
  },
];
