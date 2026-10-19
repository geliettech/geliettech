import { motion as Motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => (
  <section id="education" className="section-shell bg-primary/[0.035]">
    <div className="container mx-auto max-w-6xl px-4 md:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-10 text-left">
          <p className="section-kicker">Academic foundation</p>
          <h2 className="section-title">
            Education<span className="text-primary">.</span>
          </h2>
        </div>
        <article className="flex flex-col gap-5 rounded-[1.5rem] border border-border/80 bg-card p-6 text-left shadow-sm sm:flex-row sm:items-center sm:p-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <FaGraduationCap aria-hidden="true" size={24} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Bachelor of Science
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              Computer Science & Informatics
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A foundation in computer science, software development, and
              information systems.
            </p>
          </div>
          <span className="mt-1 sm:ml-auto sm:mt-0 sm:rounded-full sm:border sm:border-border sm:px-4 sm:py-2 sm:text-xs sm:font-medium sm:text-muted-foreground">
            B.Sc.
          </span>
        </article>
      </Motion.div>
    </div>
  </section>
);

export default Education;
