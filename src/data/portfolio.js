
export const personalInfo = {
  name: "Rahul Gowda H G",
  firstName: "Rahul",
  location: "Bengaluru, India",
  role: "Developer",

  tagline: "Building practical solutions through technology.",

  description:
    "I'm Rahul Gowda H G, a developer interested in building modern web applications, backend systems and exploring cloud and DevOps technologies.",

  email: "",

  social: {
    github: "https://github.com/RahulG0518",
    linkedin: "https://www.linkedin.com/in/rahulgowdru/",
    instagram: "https://www.instagram.com/rahulgowdru._/",
  },

  resume: "/resume.pdf",
  image: "/images/hero.png",
};

export const projects = [
  {
    id: 1,
    name: "REXY VERSE",
    category: "Movie Discovery & Booking",

    description:
      "A movie discovery and booking platform designed to provide a smooth and responsive user experience.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "React Router",
    ],

    image: "/images/rexy-verse.png",
    liveUrl: "",
    githubUrl: "",
    status: "In Development",
  },

  {
    id: 2,
    name: "REXCORE",
    category: "Project Management Platform",

    description:
      "A project management platform with workspace management, projects, tasks, comments and email notifications.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],

    image: "/images/rexcore.png",
    liveUrl: "https://rexcore-front.vercel.app/",
    githubUrl: "",
    status: "In Development",
  },

  {
    id: 3,
    name: "KNOWA",
    category: "Skill Exchange Platform",

    description:
      "A skill exchange platform designed to connect people who want to share knowledge and learn practical skills from others.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
    ],

    image: "/images/knowa.png",
    liveUrl: "https://knowva-lovat.vercel.app/",
    githubUrl: "",
    status: "In Development",
  },
];

export const skillGroups = [
  {
    id: 1,
    category: "Programming Languages",
    skills: [
      "JavaScript",
      "Python",
      "C",
      "C++",
      "Java",
    ],
  },

  {
    id: 2,
    category: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Tailwind CSS",
    ],
  },

  {
    id: 3,
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },

  {
    id: 4,
    category: "Database & ORM",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
    ],
  },

  {
    id: 5,
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Docker",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Introduction to Cybersecurity",
    category: "Cybersecurity",
    platform: "Credly",
    credentialUrl:
      "https://www.credly.com/badges/36a70634-095d-42a7-8dec-278d8232307e/public_url",
  },

  {
    id: 2,
    name: "Data Analysis Using Python",
    category: "Data Analytics",
    platform: "Credly",
    credentialUrl:
      "https://www.credly.com/badges/32d098da-e147-4406-bc9f-817b88479ac3/public_url",
  },

  {
    id: 3,
    name: "Getting Started with Generative AI",
    category: "Artificial Intelligence",
    platform: "Credly",
    credentialUrl:
      "https://www.credly.com/badges/540c2120-1d8b-439e-971b-e57ed530c376/public_url",
  },

  {
    id: 4,
    name: "Python for Data Science",
    category: "Data Science",
    platform: "Credly",
    credentialUrl:
      "https://www.credly.com/badges/3d20b4ff-e257-42df-a660-3761a321df9c/public_url",
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "Acharya Institute Of Technology",
    location: "Bengaluru, India",
    period: "2026 – Present",
    status: "Currently Pursuing",
  },

  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    institution: "Bangalore University",
    location: "Bengaluru, India",
    period: "2023 – 2026",
    status: "Completed",
    result: "CGPA: 8.0 / 10",
  },
];
