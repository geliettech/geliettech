import { FaArrowDown } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-16 md:pt-24 relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl z-10">
        <div className="space-y-5 md:space-y-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            {/* <span className="opacity-0 animate-fade-in"> Hi, I'm</span> */}
            <span className="">Hi, I'm</span>
            {/* <span className="text-primary opacity-0 animate-fade-in-delay-1 text-glow"> */}
            <span className="text-primary ml-3 text-glow">
              Ogechi Juliet
            </span>
            {/* <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-glow"> */}
            <span className="text-gradient ml-3">
              Uhegbu
            </span>
          </h1>
          {/* Subheading */}
          <h4 className="text-base sm:text-lg md:text-2xl font-semibold text-foreground/80">
            <TypeAnimation
              sequence={["Frontend Developer", 2000, "Web Developer", 2000]}
              speed={50}
              repeat={Infinity}
            />
          </h4>
          {/* Description */}
          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3"> */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build high-performing web applications using React, Next.js, Django, Firebase, and WordPress, and convert Figma designs into responsive, production-ready code.
          </p>
          {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4"> */}

          {/* CTA */}
          <div className="mt-4 md:mt-8">
            <a
              href="#projects"
              target="_blank"
              rel="noreferrer"
              className="cosmic-button inline-flex items-center gap-2 text-sm md:text-base"
            >
              View My Work <FaArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
