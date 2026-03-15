import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const projects = [
    {
    id: "A7F3K9X2",
    title: "Trovica",
    description:"Interactive modern multi-page digital agency website that boosts business online visibility and engagement.",
    image: "/images/projects/trovica.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://trovica.netlify.app/",
    githubUrl: "https://github.com/geliettech/trovica",
  },
  {
    id: "ID-48Q7Z1",
    title: "Shortly",
    description:
      "Responsive URL shortening landing page with links shorten, instant copy, and localStorage persistence.",
    image: "/images/projects/Shortly.jpg",
    tags: ["Typescript", "React", "TailwindCSS"],
    demoUrl: "https://shortly-pi-coral.vercel.app/",
    githubUrl: "https://github.com/geliettech/shortly",
  },
  {
    id: "ID-920174",
    title: "Countries Explorer",
    description:
      "Responsive web app to explore countries data with search, filter, detailed views and Dark theme toogle.",
    image: "/images/projects/rest-countries.png",
    tags: ["React", "MaterialUI"],
    demoUrl:
      "https://rest-countries-api-with-color-theme-switcher-byoge.vercel.app/",
    githubUrl:
      "https://github.com/geliettech/rest-countries-api-with-color-theme-switcher",
  },
  {
    id: "USR-9B2L6M",
    title: "My Portfolio",
    description:
      "Responsive portfolio website showcasing my skills, and experience with smooth animations and interactive elements.",
    image: "/images/projects/ogechiuhegbu.png",
    tags: ["TailwindCSS", "framer-motion", "React"],
    demoUrl: "https://ogechiuhegbu.vercel.app/",
    githubUrl: "https://github.com-/geliettech/ogechi-uhegbu",
  },
  {
    id: "X5T8P2Q9",
    title: "Mystic Cookie",
    description:
      "Responsive Advice Generator app that generates random advice slips using an external API.",
    image: "/images/projects/mystic-cookie.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://mystic-cookie.netlify.app/",
    githubUrl: "https://github.com/geliettech/mystic-cookie",
  },
  {
    id: "R8P4Z6L2",
    title: "Baby Zoo Quiz",
    description:
      "Interactive Quiz app that tests users knowledge on baby animals with score tracking and instant feedback.",
    image: "/images/projects/baby-zoo-quiz.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://baby-zoo-quiz.vercel.app/",
    githubUrl: "https://github.com/geliettech/Baby-Zoo-Quiz",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          🚀 Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            425: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/geliettech"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
