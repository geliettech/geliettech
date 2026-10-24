import { motion as Motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "../constants/data";

export const Projects = () => {
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
                <Link
                  to={`/projects/${project.id}`}
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
                </Link>
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
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      View details <FaArrowRight size={13} />
                    </Link>
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
    </section>
  );
};

export default Projects;
