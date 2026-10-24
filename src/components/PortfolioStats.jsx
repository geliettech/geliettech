import { motion as Motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../animation/motion";
import { certificates, projects } from "../constants/data";

const yearsOfExperience = new Date().getFullYear() - 2023;

const stats = [
  {
    value: `${projects.filter((project) => project.status !== "In progress").length}+`,
    label: "Completed projects",
  },
  { value: `${yearsOfExperience}+`, label: "Years of experience" },
  { value: "3", label: "Happy clients" },
  { value: certificates.length, label: "Certificates & badges" },
];

const PortfolioStats = () => (
  <section aria-label="Portfolio milestones" className="relative z-10 px-4 pb-4 md:px-8">
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto max-w-6xl"
    >
      <Motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-4 overflow-hidden rounded-2xl shadow-md"
      >
        {stats.map((stat) => (
          <Motion.div
            key={stat.label}
            variants={staggerItem}
            className="flex min-h-24 flex-col justify-center border-l border-border/70 px-2 py-4 text-center first:border-l-0 sm:min-h-28 sm:px-4"
          >
            <p className="text-xl font-bold tracking-tight text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 flex min-h-8 items-center justify-center text-[10px] font-medium leading-tight text-muted-foreground sm:text-sm">
              {stat.label}
            </p>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.div>
  </section>
);

export default PortfolioStats;
