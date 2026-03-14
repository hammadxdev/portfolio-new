// ============================================================
// ALL YOUR CONTENT — edit this one file to update everything
// ============================================================

export const personal = {
  name: "Muhammad Hammad",
  handle: "@hammadxdev",
  title: "Full-Stack Developer",
  taglines: [
    "Full-Stack MERN Developer",
    "Automation Engineer",
    "Web Scraping Specialist",
    "API Integration Expert",
    "React Native Developer",
  ],
  bio: `I build fast, scalable full-stack applications and automate everything that can be automated. 
  From MERN-stack SaaS products to Python scraping pipelines and n8n workflows — 
  I turn ideas into production-ready software.`,
  location: "Lahore, Pakistan",
  available: true,
  email: "hammadiftikhar3596@gmail.com",
  cv: "/Muhammad_Hammad_CV.pdf",
  linkedin: "https://www.linkedin.com/in/muhammad-hammad-613318366",
  github: "https://github.com/hammadxdev",
};

export const skills = [
  {
    category: "Frontend",
    color: "blue",
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "React Native", level: 78 },
      { name: "Redux Toolkit", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    category: "Backend",
    color: "green",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 82 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    category: "Databases",
    color: "amber",
    items: [
      { name: "MongoDB", level: 87 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQL", level: 82 },
      { name: "Airtable", level: 85 },
    ],
  },
  {
    category: "Automation & Tools",
    color: "purple",
    items: [
      { name: "n8n Workflows", level: 88 },
      { name: "Selenium", level: 85 },
      { name: "BeautifulSoup", level: 87 },
      { name: "Web Scraping", level: 90 },
    ],
  },
];

export const journey = [
  {
    year: "2020",
    title: "Started Coding Journey",
    description:
      "Fell in love with programming through Python. Built first automation scripts and web scrapers.",
    tags: ["Python", "BeautifulSoup", "Web Scraping"],
    icon: "🚀",
  },
  {
    year: "2021",
    title: "JavaScript & React",
    description:
      "Deep dived into the JavaScript ecosystem. Built first React apps and fell in love with component architecture.",
    tags: ["JavaScript", "React", "CSS"],
    icon: "⚛️",
  },
  {
    year: "2022",
    title: "Full-Stack MERN",
    description:
      "Mastered the full MERN stack. Started building complete web apps with auth, databases, and REST APIs.",
    tags: ["Node.js", "MongoDB", "Express", "Redux"],
    icon: "🔧",
  },
  {
    year: "2023",
    title: "Next.js & Databases",
    description:
      "Expanded to Next.js SSR/SSG and relational databases. Built BookWise and UiLovers — production-grade Next.js apps.",
    tags: ["Next.js", "PostgreSQL", "Airtable"],
    icon: "🗄️",
  },
  {
    year: "2024",
    title: "Real-Time & Automation",
    description:
      "Built Streamify — a full-stack video call + screenshare platform. Mastered WebRTC, Socket.io, and n8n automation pipelines.",
    tags: ["WebRTC", "Socket.io", "n8n", "Automation"],
    icon: "🤖",
  },
  {
    year: "2025",
    title: "Scaling & Freelancing",
    description:
      "Delivering end-to-end solutions — from React Native apps to full automation ecosystems for clients worldwide.",
    tags: ["React Native", "Freelance", "SaaS"],
    icon: "🌍",
  },
];

export const projects = [
  {
    title: "Streamify",
    description:
      "Full-stack video calling & screensharing platform. Real-time peer-to-peer communication with WebRTC and Socket.io. Supports rooms, live screenshare, and multi-user sessions.",
    tags: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
    color: "purple",
    github: "https://github.com/hammadxdev/Streamify",
    live: "https://streamify-h42k.onrender.com/",
    featured: true,
  },
  {
    title: "RoadRex",
    description:
      "Full-stack platform with automated email workflows. Integrated transactional email system with automated triggers and user notifications on every action.",
    tags: ["React", "Node.js", "MongoDB", "Nodemailer", "Automation"],
    color: "green",
    github: "https://github.com/hammadxdev/roadrex",
    live: "https://github.com/hammadxdev/roadrex",
    featured: true,
  },
  {
    title: "BookWise",
    description:
      "Next.js book discovery and management app with server-side rendering for fast page loads, dynamic routing, and a clean reading-focused UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    color: "amber",
    github: "https://github.com/hammadxdev/BookWise",
    live: "https://book-wise-virid.vercel.app/sign-up",
    featured: true,
  },
  {
    title: "UiLovers",
    description:
      "Next.js UI component showcase and inspiration platform. A curated gallery of beautiful UI patterns and components for developers and designers.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    color: "blue",
    github: "https://github.com/hammadxdev/UiLovers",
    live: "https://github.com/hammadxdev/UiLovers",
    featured: false,
  },
  {
    title: "Movie Explorer",
    description:
      "React app powered by the OMDB API. Search any movie or TV show, view ratings, cast details, plot summaries, and save favourites locally.",
    tags: ["React", "OMDB API", "REST API", "CSS"],
    color: "coral",
    github: "https://github.com/hammadxdev/Movie",
    live: "https://movie-app-six-ivory.vercel.app/",
    featured: false,
  },
  {
    title: "Google Maps Scraper Bot",
    description:
      "Python automation bot that scrapes Google Maps business listings — names, addresses, phones, ratings — at scale using Selenium and BeautifulSoup.",
    tags: ["Python", "Selenium", "BeautifulSoup", "PostgreSQL"],
    color: "teal",
    github: "https://github.com/hammadxdev/Google-Maps-Scraper-Bot",
    live: "https://github.com/hammadxdev/Google-Maps-Scraper-Bot",
    featured: false,
  },
];
