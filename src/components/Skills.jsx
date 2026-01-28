import { useState } from "react";
import { cn } from "../lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiWordpress,
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiPython,
  SiDjango,
  SiFigma,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  {
    icon: <SiHtml5 className="h-full w-full object-contain" />,
    name: "HTML",
    level: 95,
    category: "frontend",
  },
  {
    icon: <SiCss3 className="h-full w-full object-contain" />,
    name: "CSS",
    level: 95,
    category: "frontend",
  },
  {
    icon: <SiSass className="h-full w-full object-contain" />,
    name: "Sass",
    level: 70,
    category: "frontend",
  },
  {
    icon: <SiJavascript className="h-full w-full object-contain" />,
    name: "JavaScript",
    level: 90,
    category: "frontend",
  },
  {
    icon: <SiReact className="h-full w-full object-contain" />,
    name: "React",
    level: 90,
    category: "frontend",
  },
  {
    icon: <SiBootstrap className="h-full w-full object-contain" />,
    name: "Bootstrap",
    level: 90,
    category: "frontend",
  },
  {
    icon: <SiTypescript className="h-full w-full object-contain" />,
    name: "TypeScript",
    level: 85,
    category: "frontend",
  },
  {
    icon: <SiTailwindcss className="h-full w-full object-contain" />,
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
  },
  {
    icon: <SiMui className="h-full w-full object-contain" />,
    name: "MaterialUI",
    level: 80,
    category: "frontend",
  },
  {
    icon: <SiNextdotjs className="h-full w-full object-contain" />,
    name: "Next.js",
    level: 80,
    category: "frontend",
  },

  // Backend
  {
    icon: <SiPython className="h-full w-full object-contain" />,
    name: "python",
    level: 80,
    category: "backend",
  },
  {
    icon: <SiDjango className="h-full w-full object-contain" />,
    name: "Django",
    level: 75,
    category: "backend",
  },
  {
    icon: <DiSqllite className="h-full w-full object-contain" />,
    name: "SQLite",
    level: 65,
    category: "backend",
  },

  // CMS
  {
    icon: <SiWordpress className="h-full w-full object-contain" />,
    name: "Wordpress",
    level: 80,
    category: "CMS",
  },

  // Tools
  {
    icon: <SiGit className="h-full w-full object-contain" />,
    name: "Git",
    level: 90,
    category: "tools",
  },
  {
    icon: <SiGithub className="h-full w-full object-contain" />,
    name: "GitHub",
    Level: 90,
    catergory: "tools",
  },
  {
    icon: <SiFigma className="h-full w-full object-contain" />,
    name: "Figma",
    level: 85,
    category: "tools",
  },
  {
    icon: <VscVscode className="h-full w-full object-contain" />,
    name: "VS Code",
    level: 95,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "CMS", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          🛠️ My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-foreground hover:bd-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center gap-2">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                <div className="w-4 h-4" aria-label={skill.name}>
                  {skill.icon}
                </div>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
