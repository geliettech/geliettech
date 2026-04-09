import { Code, Settings, Rocket } from "lucide-react";


const Lifecycle = () => {
  const steps = [
    {
      title: "Planning & Requirement Gathering",
      description:
        "Define project goals, target users, core features, and choose the right tech stack before writing any code.",
    },
    {
      title: "Design Analysis",
      description:
        "Create wireframes and UI designs, define user flow, and plan responsiveness for a smooth user experience.",
    },
    {
      title: "Project Setup",
      description:
        "Set up the development environment, initialize the project, install dependencies, and structure folders.",
    },
    {
      title: "Build",
      description:
        "Develop reusable components, build UI, add responsiveness, and integrate APIs with proper state handling.",
    },
    {
      title: "Testing & Debugging",
      description:
        "Test across devices and browsers, fix bugs, and ensure everything works as expected.",
    },
    {
      title: "Optimization",
      description:
        "Improve performance through image optimization, lazy loading, and clean, efficient code.",
    },
    {
      title: "Deployment",
      description:
        "Deploy the application to a live environment for users to access.",
    },
    {
      title: "Maintenance & Improvement",
      description:
        "Continuously improve the product by fixing bugs, adding features, and enhancing user experience.",
    },
  ];

  return (
<section id="workflow" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My<span className="text-primary"> WorkFlow</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A structured approach I follow to build scalable, high-quality web applications.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-between group bg-card rounded-lg overflow-hidden card-hover"
            >
              <div className="text-primary font-bold text-xl mb-3">
                {index + 1}.
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-foreground/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Lifecycle;