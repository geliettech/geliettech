// import React from "react";
// import { motion } from "framer-motion";
// import {
//   SiHtml5,
//   SiCss3,
//   SiSass,
//   SiGit,
//   SiGithub,
//   SiJavascript,
//   SiReact,
//   SiWordpress,
//   SiBootstrap,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
//   SiMui,
//   SiPython,
//   SiDjango,
// } from "react-icons/si";

// const Skills = () => {
//   const skills = [
//     { icon: <SiHtml5 />, skillname: "HTML", level: "Expert", count: 90 },
//     { icon: <SiCss3 />, skillname: "CSS", level: "Expert", count: 90 },
//     { icon: <SiSass />, skillname: "SASS", level: "Intermediate", count: 70 },
//     { icon: <SiGit />, skillname: "Git", level: "Advanced", count: 80 },
//     { icon: <SiGithub />, skillname: "GitHub", level: "Advanced", count: 80 },
//     { icon: <SiJavascript />, skillname: "JavaScript", level: "Advanced", count: 80 },
//     { icon: <SiReact />, skillname: "ReactJS", level: "Advanced", count: 80 },
//     { icon: <SiWordpress />, skillname: "WordPress", level: "Advanced", count: 70 },
//     { icon: <SiBootstrap />, skillname: "Bootstrap", level: "Advanced", count: 70 },
//     { icon: <SiTypescript />, skillname: "TypeScript", level: "Intermediate", count: 50 },
//     { icon: <SiNextdotjs />, skillname: "Next.js", level: "Intermediate", count: 50 },
//     { icon: <SiTailwindcss />, skillname: "Tailwind CSS", level: "Intermediate", count: 60 },
//     { icon: <SiMui />, skillname: "Material UI", level: "Intermediate", count: 60 },
//      { icon: <SiPython />, skillname: "Python", level: "Beginner", count: 40 },
//     { icon: <SiDjango />, skillname: "Django", level: "Beginner", count: 40 },
//   ];

//   return (
//     <section id="skills" className="py-10 px-3 bg-gray-800 relative">
//       <div className="max-w-6xl mx-auto px-4 mt-8 text-gray-100 text-center">
//         <h3 className="text-4xl font-semibold">
//         🛠️ My <span className="text-cyan-600">Skills</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
//         <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               className="border-2 group border-cyan-600 relative min-w-[6rem] max-w-[10rem] bg-gray-900 p-4 rounded-xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             >
//               <div
//                 style={{
//                   background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
//                 }}
//                 className="w-20 h-20 flex items-center justify-center rounded-full"
//               >
// <div
//   className="text-2xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"
//   title={skill.skillname}
//   aria-label={skill.skillname}
// >
//   {skill.icon}
// </div>
//               </div>
//               <p className="text-sm mt-2 font-medium text-cyan-500">{skill.skillname}</p>
//               <p className="text-xs text-gray-300">{skill.level}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

// };

// export default Skills;

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
  SiDocker,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  { icon: <SiHtml5 className="h-full w-full object-contain" />, name: "HTML", level: 95, category: "frontend" },
  { icon: <SiCss3 className="h-full w-full object-contain" />, name: "CSS", level: 95, category: "frontend" },
  { icon: <SiSass className="h-full w-full object-contain" />, name: "Sass", level: 70, category: "frontend" },
  {
    icon: <SiJavascript className="h-full w-full object-contain" />,
    name: "JavaScript",
    level: 90,
    category: "frontend",
  },
  { icon: <SiReact className="h-full w-full object-contain" />, name: "React", level: 90, category: "frontend" },
  { icon: <SiBootstrap className="h-full w-full object-contain" />, name: "Bootstrap", level: 90, category: "frontend" },
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
  { icon: <SiMui className="h-full w-full object-contain" />, name: "MaterialUI", level: 80, category: "frontend" },
  { icon: <SiNextdotjs className="h-full w-full object-contain" />, name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { icon: <SiPython className="h-full w-full object-contain" />, name: "python", level: 80, category: "backend" },
  { icon: <SiDjango className="h-full w-full object-contain" />, name: "Django", level: 75, category: "backend" },
  { icon: <DiSqllite className="h-full w-full object-contain" />, name: "SQLite", level: 65, category: "backend" },

  // CMS
  { icon: <SiWordpress className="h-full w-full object-contain" />, name: "Wordpress", level: 80, category: "CMS" },

  // Tools
  { icon: <SiGit className="h-full w-full object-contain" />, name: "Git", level: 90, category: "tools" },
  { icon: <SiGithub className="h-full w-full object-contain" />, name: "GitHub", Level: 90, catergory: "tools" },
  { icon: <SiDocker className="h-full w-full object-contain" />, name: "Docker", level: 70, category: "tools" },
  { icon: <SiFigma className="h-full w-full object-contain" />, name: "Figma", level: 85, category: "tools" },
  { icon: <VscVscode className="h-full w-full object-contain" />, name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "CMS", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
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
                  : "bg-primary/10 text-forefround hover:bd-secondary"
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
