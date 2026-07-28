import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { projects } from "../constants/data";

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            🚀 Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </header>
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="group h-full bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FaArrowUpRightFromSquare size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href="https://github.com/geliettech"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button inline-flex items-center gap-2 text-sm md:text-base"
          >
            Check My Github <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
