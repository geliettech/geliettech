import { motion as Motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";
import { experiences } from "../constants/data";

const Experience = () => (
  <section id="experiences" className="section-shell">
    <div className="container mx-auto max-w-6xl px-4 md:px-8">
      <header className="mb-12 flex flex-col justify-between gap-6 text-left md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Where I’ve been</p>
          <h2 className="section-title">
            Experience & <span className="text-primary">growth</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
          Learning, building, and collaborating with teams across different
          stages of my journey.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <Motion.article
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.24) }}
            className="flex gap-4 rounded-2xl border border-border/80 bg-card p-5 text-left shadow-sm transition hover:border-primary/30 hover:shadow-lg sm:p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FaBriefcase aria-hidden="true" size={17} />
            </span>
            <div>
              <h3 className="font-semibold leading-snug">{experience.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{experience.company}</p>
              <p className="mt-3 text-xs text-muted-foreground">{experience.period}</p>
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
