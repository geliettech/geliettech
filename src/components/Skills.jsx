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
//                 <div
//                   className="text-2xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"
//                   title={skill.skillname}
//                   aria-label={skill.skillname}
//                 >
//                   {skill.icon}
//                 </div>
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

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
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
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
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