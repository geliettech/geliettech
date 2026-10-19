import { motion as Motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { fadeUp, fadeUpDelayed } from "../animation/motion";
import Profile from "../assets/img/about/profile.jpg";

const Hero = () => (
  <section
    id="hero"
    className="hero-grid relative flex min-h-[760px] items-center overflow-hidden px-5 pb-20 pt-40 sm:px-8 md:min-h-[850px] md:pb-28 md:pt-44"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-orb absolute -right-36 top-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl md:right-12 md:top-32" />
      <div className="hero-orb hero-orb-delay absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />
    </div>
    <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-left"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary" />
          FRONTEND & FULL-STACK DEVELOPER · LAGOS, NIGERIA
        </div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Thoughtful code.
          <br />
          <span className="text-primary">Memorable</span> experiences.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
          I’m Ogechi Juliet Uhegbu — a frontend and full-stack developer
          creating accessible, responsive digital products with a sharp eye
          for detail.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="cosmic-button inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm"
          >
            Explore my work <FaArrowDown aria-hidden="true" size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold transition hover:border-primary/40 hover:text-primary"
          >
            Let’s connect <FaArrowUpRightFromSquare aria-hidden="true" size={13} />
          </a>
        </div>
        <div className="mt-9 flex items-center gap-4">
          <a
            href="https://github.com/geliettech"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-border bg-card p-3 text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/geliettech"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-border bg-card p-3 text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FaLinkedin size={17} />
          </a>
          <span className="h-px w-12 bg-border" />
          <span className="max-w-md text-xs font-medium leading-6 tracking-wide text-muted-foreground">
            React · Next.js · TypeScript · JavaScript · Node.js · PostgreSQL
          </span>
        </div>
      </Motion.div>

      <Motion.div
        variants={fadeUpDelayed(0.12)}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-[430px]"
      >
        <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-primary/15 bg-primary/[0.035]" />
        <div className="relative overflow-hidden rounded-[1.7rem] border border-border bg-card p-2 shadow-[0_28px_90px_-40px_rgba(37,99,235,0.3)]">
          <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.25rem] bg-secondary/10">
            <img
              src={Profile}
              alt="Ogechi Juliet Uhegbu"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-6 pt-28 text-left text-white sm:p-7 sm:pt-32">
              <p className="text-lg font-semibold">Ogechi Juliet Uhegbu</p>
              <p className="mt-1 text-sm leading-5 text-white/90">
                Turning ideas into intuitive interfaces
              </p>
              <p className="mt-2 text-xs font-medium text-white/75">
                B.Sc. Computer Science & Informatics
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -right-6 top-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:block">
          <p className="text-xs font-medium text-muted-foreground">Building with</p>
          <p className="mt-1 text-sm font-semibold text-primary">Care & curiosity</p>
        </div>
      </Motion.div>
    </div>
  </section>
);

export default Hero;
