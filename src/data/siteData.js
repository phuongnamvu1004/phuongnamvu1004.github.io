export const SKILLS = {
  Languages: ["C#", "TypeScript", "JavaScript", "Python", "Rust", "Java", "C++", "C", "Zig", "SQL", "Bash"],
  'Developer Tools': ["Azure", "Docker", "GitHub", "Redis", "PostgreSQL", "MySQL", "MongoDB", "Qdrant", "MinIO", "Kibana"],
  'Technology/Frameworks': ["ASP.NET Core", "Express.js", "Vue.js", "React.js", "Celery", "Socket.io", "FastAPI", "Flask"]
};

export const EXPERIENCE = [
  {
    role: 'Research Assistant',
    company: 'Oberlin College',
    date: 'Sep 2025 - Present',
    location: 'Oberlin, OH',
    description:
      '- Explored applications of Spectral Graph Theory in graph coloring transformations, focusing on relationships between eigenvalues and structural properties. \n - Developed a cross-language computation engine in C++ and Zig to visualize graph colorings and analyze eigenvalue distributions. \n\n - Investigated graph compression techniques by extracting and encoding spectral and coloring-based traits into concise mathematical metadata.'
  },
  {
    role: 'Software Engineer Intern',
    company: 'Torus Bellesoft',
    date: 'May 2025 - Aug 2025',
    location: 'Hanoi, Vietnam',
    description:
      '- Contribute to the monitoring and delivery of services, UI integration and internal AI cores, hosted on Azure services, of the B2B healthcare platforms Belle.ai, used by 1,000+ clinics/month globally. \n\n - Up-versioning and optimized API gateways using the .NET framework (ASP.NET Core, C#) to support high performance AI-driven diagnostic services for image-based disease detection. \n\n - Collaborated with a designated team of 5 engineers to develop an internal AI RAG pipeline using Python, Qdrant, RAGFlow which support ingesting Vietnamese scanned/OCR-ed text specifically, improving retrieval performance with semantic chunking and Multilingual NLP.',
  },
  {
    role: 'Security Analyst Intern',
    company: 'CMC Corporation',
    date: 'May 2024 – Aug 2024',
    location: 'Hanoi, Vietnam',
    description:
      '- Assistant in using MySQL to collect and manage logs from a collective of 100+ security devices and network infrastructure for real-time threat monitoring and analysis. \n\n - Supported daily security operations by monitoring SIEM alerts and escalating potential incidents to senior analysts following established procedures. \n\n - Assisted in creating custom Kibana dashboards for visualizing security metrics and generating weekly security reports for management.',
  },
];

export const PROJECTS = [
  {
    title: 'Vietnamese Card Games',
    description:
      'A web-based multiplayer platform for traditional Vietnamese card games, Sam and Phom, with explicit rules logic, advanced user management, and real-time room creation and gameplay.',
    tags: ['Typescript', 'React', 'Redis', 'Socket.io', 'Express.js', 'Docker', 'PostgreSQL'],
    link: 'https://github.com/phuongnamvu1004/vietnamese-card-games',
  },
  {
    title: 'Gyat - Customized Version Control System',
    description:
      'A lightweight Git-inspired version control tool which support repository initialization, file tracking, commit history, and rollback functionality',
    tags: ['Rust', 'System Programming', 'PostgreSQL', 'REST API'],
    link: 'https://github.com/phuongnamvu1004/gyat',
  },
  {
    title: 'Spotify Songs Recommender',
    description: 'A machine learning-based system for recommending songs on Spotify, utilizing user listening history and collaborative filtering techniques.',
    tags: ['Python', 'Machine Learning', 'Spotify API', 'Flask'],
    link: 'https://github.com/phuongnamvu1004/spotify-songs-recommender',
  },
    {
    title: 'Doc-nest',
    description: 'Document storage and search system that utilizes vector embeddings and a RAG pipeline to enable efficient retrieval of relevant documents based on user queries.',
    tags: ['Python', 'Qdrant', 'FastAPI', 'RAG Pipeline', 'Vector Embeddings'],
    link: 'https://github.com/phuongnamvu1004/doc-nest',
  },
  {
    title: 'DNS Auction Simulator',
    description: 'A C++ implementation of the Dobzinski-Nisan-Schapira (DNS) randomized mechanism for combinatorial auctions with submodular (XOS-style) bidders. It was developed as part of a CS385: Economics and Computations\'s final project at Oberlin College.',
    tags: ['C++', 'Auction Theory', 'Randomized Algorithms'],
    link: 'https://github.com/phuongnamvu1004/dns-auction-simulator',
  },
  {
    title: 'GSP Website',
    description: 'The official website for GSP Entertainment, showcasing Audio-Visual production services and portfolio.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Web Development'],
    link: 'https://github.com/phuongnamvu1004/gsp-website',
  }
];
