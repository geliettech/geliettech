import { useState } from "react";
import { cn } from "../lib/utils";
import { skills } from "../constants/data";

const categories = ["all", "frontend", "BaaS", "database", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12">
          🛠️ My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 md:px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-foreground hover:bg-primary/50 hover:text-primary-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4 flex items-center gap-2">
                  <h3 className="font-semibold text-sm md:text-base"> {skill.name}</h3>
                  <div className="w-5 h-5 md:w-6 md:h-6" aria-label={skill.name}>
                    <Icon className="w-full h-full" />
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
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
