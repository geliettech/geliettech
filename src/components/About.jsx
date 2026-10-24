import { motion as Motion } from "framer-motion";
import {
  FaArrowDown,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { fadeUp, staggerContainer, staggerItem } from "../animation/motion";
import CV from "../assets/OGECHI_JULIET_UHEGBU_Resume.pdf";

const focusAreas = [
  {
    icon: FaWandMagicSparkles,
    title: "Product-minded design",
    description: "Turning visual direction into clear, polished user journeys.",
  },
  {
    icon: FaLayerGroup,
    title: "Thoughtful delivery",
    description: "Creating reusable components that stay maintainable as products grow.",
  },
  {
    icon: FaCode,
    title: "Frontend engineering",
    description: "Building responsive, accessible interfaces with modern web tools.",
  },
  {
    icon: FaServer,
    title: "Full-stack development",
    description:
      "Building complete web experiences across frontend interfaces, server-side logic, and data.",
  },
];

const About = () => (
    <section id="about" className="section-shell">
    <div className="container mx-auto max-w-6xl px-4 md:px-8">
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-left">
            <p className="section-kicker">A little about me</p>
            <h2 className="section-title">
              I care about the <span className="text-primary">details</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              I’m a frontend and full-stack developer with a B.Sc. in Computer
              Science & Informatics. I enjoy taking a product from a thoughtful design
              through to a fast, accessible experience people love using.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              From landing pages to full web applications, I bring curiosity,
              care, and a focus on making every screen feel considered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="cosmic-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm"
              >
                Say hello <FaArrowDown aria-hidden="true" size={13} />
              </a>
              <a
                href={CV}
                download
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                Download résumé
              </a>
            </div>
          </div>
          <Motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Motion.article
                  key={area.title}
                  variants={staggerItem}
                  className="min-h-[190px] rounded-2xl border border-border/80 bg-card p-6 text-left shadow-sm"
                >
                  <span className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <h3 className="text-base font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                </Motion.article>
              );
            })}
          </Motion.div>
        </div>
      </Motion.div>
    </div>
  </section>
);

export default About;
