import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaXmark,
} from "react-icons/fa6";
import { projects } from "../constants/data";

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <Motion.div
      className="fixed inset-0 z-[1100] flex items-center justify-center overflow-y-auto bg-black/65 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <Motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[1.6rem] border border-border bg-background text-left shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background/90 p-2.5 text-foreground shadow hover:text-primary"
        >
          <FaXmark aria-hidden="true" />
        </button>
        <img
          src={project.image}
          alt=""
          className="h-48 w-full object-cover sm:h-64"
        />
        <div className="p-6 sm:p-9">
          <p className="mb-2 text-sm font-medium text-primary">{project.role}</p>
          <h3 id="project-dialog-title" className="text-2xl font-bold">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          {project.highlights?.length > 0 && (
            <ul className="mt-5 list-inside list-disc space-y-2 text-sm text-foreground/90">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-primary/10 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="cosmic-button inline-flex items-center gap-2 px-5 py-3 text-sm"
              >
                Visit project <FaArrowUpRightFromSquare size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                Source code <FaGithub size={15} />
              </a>
            )}
          </div>
        </div>
      </Motion.section>
    </Motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <Motion.header
          className="mb-12 flex flex-col justify-between gap-6 text-left md:mb-14 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="section-kicker">A few things I’ve made</p>
            <h2 className="section-title">
              Selected <span className="text-primary">work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            Thoughtful interfaces, practical solutions, and details designed
            around the people using them.
          </p>
        </Motion.header>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
              <Motion.article
                key={project.id}
                className={`group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-40px_rgba(37,99,235,0.35)] ${
                  index === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.1fr_0.9fr]" : ""
                }`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                  className={`relative block w-full overflow-hidden bg-secondary/10 ${
                    index === 0 ? "aspect-[1.55] md:aspect-auto md:min-h-[350px]" : "aspect-[1.65]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </button>
                <div className="flex flex-1 flex-col p-5 sm:p-7 md:p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {project.role}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      View details <FaArrowRight size={13} />
                    </button>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title} demo`}
                          className="rounded-xl border border-border bg-background p-3 text-foreground/80 transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                        >
                          <FaArrowUpRightFromSquare size={17} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} source code`}
                          className="rounded-xl border border-border bg-background p-3 text-foreground/80 transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Motion.article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/geliettech"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            More on GitHub <FaArrowRight size={14} />
          </a>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
