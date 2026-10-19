import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { cn } from "../lib/utils";
import { skills } from "../constants/data";

const categories = ["all", "frontend", "BaaS", "database", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="section-shell bg-primary/[0.035]">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-10 flex flex-col justify-between gap-6 text-left md:flex-row md:items-end">
          <div>
            <p className="section-kicker">My toolkit</p>
            <h2 className="section-title">
              Skills & <span className="text-primary">technologies</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            A growing set of tools I use to shape ideas into useful digital
            experiences.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm capitalize transition",
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {category === "BaaS" ? "Cloud & BaaS" : category}
            </button>
          ))}
        </div>

        <Motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-28 flex-col items-start justify-between rounded-2xl border border-border/80 bg-card p-4 text-left transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
              >
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">{skill.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
