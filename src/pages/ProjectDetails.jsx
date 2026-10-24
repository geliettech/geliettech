import { motion as Motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import ThemeToggle from "../context/ThemeToggle";
import { projects } from "../constants/data";
import Footer from "../components/Footer";
import { StarBackground } from "../components/StarBackground";
import NotFound from "./NotFound";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarBackground />
      <header className="relative z-10 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"
          >
            <FaArrowLeft aria-hidden="true" size={13} />
            Back to portfolio
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main id="hero" className="relative z-10">
        <section className="section-shell">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {project.type}
                </span>
                {project.status && (
                  <span className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
                    {project.status}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-border/80 bg-card shadow-xl">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="max-h-[560px] w-full object-cover"
                />
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-[1fr_0.42fr]">
                <div className="space-y-9">
                  <section aria-labelledby="project-overview">
                    <h2 id="project-overview" className="text-2xl font-semibold">
                      Project overview
                    </h2>
                    <p className="mt-4 leading-8 text-muted-foreground">
                      {project.description}
                    </p>
                  </section>
                  {project.highlights?.length > 0 && (
                    <section aria-labelledby="project-features">
                      <h2 id="project-features" className="text-2xl font-semibold">
                        Key features
                      </h2>
                      <ul className="mt-4 space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 leading-7 text-muted-foreground"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  <section aria-labelledby="project-stack">
                    <h2 id="project-stack" className="text-2xl font-semibold">
                      Built with
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="h-fit rounded-2xl border border-border/80 bg-card p-6">
                  <h2 className="text-lg font-semibold">Project details</h2>
                  <dl className="mt-5 space-y-5">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        App type
                      </dt>
                      <dd className="mt-1 font-medium">{project.type}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Role
                      </dt>
                      <dd className="mt-1 font-medium">{project.role}</dd>
                    </div>
                  </dl>
                  <div className="mt-7 flex flex-col gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cosmic-button inline-flex items-center justify-center gap-2 px-5 py-3 text-sm"
                      >
                        Visit project <FaArrowUpRightFromSquare size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                      >
                        Source code <FaGithub size={15} />
                      </a>
                    )}
                  </div>
                </aside>
              </div>
              <Link
                to="/#projects"
                className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <FaArrowLeft aria-hidden="true" size={13} />
                Back to all projects
              </Link>
            </Motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
