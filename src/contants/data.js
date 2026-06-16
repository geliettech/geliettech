  
  import {
    SiHtml5,
    SiSass,
    SiGit,
    SiGithub,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiMui,
    SiPython,
    SiDjango,
    SiFigma,
  } from "react-icons/si";
  import { FaCss3 } from "react-icons/fa6";
  import { DiSqllite } from "react-icons/di";
  import { VscVscode } from "react-icons/vsc";
  import { IoLogoFirebase } from "react-icons/io5";
  
  
  
  
  export const experiences = [
    {
      role: "Freelance Frontend Engineer",
      company: "Upwork",
      period: "May 2025 - Present",
     },
    {
      role: "Frontend Developer (Next.js)",
      company: "Afritech Digital Hub",
      period: "Oct 2025 – May 2026",
     },
    {
      role: "Computer Science Instructor",
      company: "NYSC",
      period: "Apr 2024 – Mar 2025",
     },
    {
      role: "Frontend Developer Intern",
      company: "Stutern",
      period: "Sep 2022 – Aug 2023",
    },
    {
      role: "ICT Intern",
      company: "ICT CENTER, FUO",
      period: "Dec 2020 - April 2021",
    },
  ];

  export const skills = [
  // Frontend
  {
    icon: SiHtml5,
    name: "HTML",
    level: 95,
    category: "frontend",
  },
  {
    icon: FaCss3,
    name: "CSS",
    level: 95,
    category: "frontend",
  },
  {
    icon: SiSass,
    name: "Sass",
    level: 70,
    category: "frontend",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    level: 80,
    category: "frontend",
  },
  {
    icon: SiReact,
    name: "React",
    level: 90,
    category: "frontend",
  },
  {
    icon: SiBootstrap,
    name: "Bootstrap",
    level: 80,
    category: "frontend",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    level: 75,
    category: "frontend",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
  },
  {
    icon: SiMui,
    name: "MaterialUI",
    level: 80,
    category: "frontend",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    level: 80,
    category: "frontend",
  },

  // Backend
  {
    icon: SiPython,
    name: "python",
    level: 30,
    category: "backend",
  },
  
  

  // Database
{
    icon: IoLogoFirebase,
    name: "Firebase",
    level: 70,
    category: "database",
  },

  // Tools
  {
    icon: SiGit,
    name: "Git",
    level: 90,
    category: "tools",
  },
    {
    icon: SiGithub,
    name: "GitHub",
    level: 90,
    category: "tools",
  },
  {
    icon: SiFigma,
    name: "Figma",
    level: 85,
    category: "tools",
  },
  {
    icon: VscVscode,
    name: "VS Code",
    level: 90,
    category: "tools",
  },
];



export const projects = [
  // {
  //   id: "X5T8P2Q9",
  //   title: "Ceec Luxury Hair",
  //   description:"",
  //   image: "",
  //   tags: ["", ""],
  //   demoUrl: "",
  //   githubUrl: "",
  // },
    // {
  //   id: "USR-9B2L6M",
  //   title: "Fina",
  //   description:
  //     "",
  //   image: "",
  //   tags: ["", "", ""],
  //   demoUrl: "",
  //   githubUrl: "",
  // },
  {
    id: "A7F3K9X2",
    title: "Trovica",
    description: "A modern, multi-page digital agency website designed to enhance business visibility and engagement. It includes smooth navigation, responsive layouts, and conversion-focused design to attract and retain clients.",
    image: "/images/projects/trovica.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://trovica.netlify.app/",
    githubUrl: "https://github.com/geliettech/trovica",
  },
  {
    id: "ID-48Q7Z1",
    title: "Shortly",
    description:
      "A responsive URL shortening web app that allows users to shorten long links, instantly copy results, and store data locally using localStorage persistence. It ensures a smooth and efficient user experience with real-time feedback.",
    image: "/images/projects/Shortly.jpg",
    tags: ["Typescript", "React", "TailwindCSS"],
    demoUrl: "https://shortly-pi-coral.vercel.app/",
    githubUrl: "https://github.com/geliettech/shortly",
  },
  {
    id: "ID-920174",
    title: "Countries Explorer",
    description:
      "A responsive web application for exploring countries worldwide, featuring search, filtering by region, detailed country views, and a dark mode toggle. It provides a clean and intuitive interface for quickly accessing global data.",
    image: "/images/projects/rest-countries.png",
    tags: ["React", "MaterialUI"],
    demoUrl:
      "https://countries-explorer-byoge.vercel.app",
    githubUrl:
      "https://github.com/geliettech/countries-explorer",
  },
];

export const recommendations = [
  {
    id: 1,
    name: "SuvWe Money",
    message: "OGE, you're exceptional frontend developer. You delivers clean and efficient code, and your attention to detail is outstanding.",
  },
    {
    id: 2,
    name: "Jesufunni",
    message: "The work you did on the student portal dashboard should not go without commendation, you did really well. Very sweet UI.",
  },
  {
    id: 3,
    name: "Smartee",
    message: "You did a good Job on platform settings Ogechi. I like the way you implemented the UI and the responsiveness of the design.",},
];
