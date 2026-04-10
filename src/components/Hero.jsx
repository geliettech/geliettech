import { FaArrowDown } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 text-glow">
              {" "}
              Ogechi Juliet
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-glow">
              {" "}
              Uhegbu
            </span>
          </h1>
          <h4 className="md:text-2xl text-lg font-semibold text-gray-500">
            <TypeAnimation
              sequence={["Frontend Developer", 2000, "Web Developer", 2000]}
              speed={50}
              repeat={Infinity}
            />
          </h4>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            I help Individuals, Brands, Businesses in turning their ideas into high-performing Web Applications using React, Next.js, Django, WordPress, and modern UI systems.b
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
