import { Briefcase, Code, Laptop } from "lucide-react";
import CV from "../assets/OGECHI_JULIET_UHEGBU_FrontendDeveloperCV.pdf";
import Profile from "../assets/img/about/profile.jpg";
import WorkSpace from "../assets/img/about/workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          👩🏽‍💻 About <span className="text-primary"> Me</span>
        </h2>
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <div className="w-68 h-64 aboutImg">
            <img
              src={Profile}
              alt="profile"
              className="w-full h-full object-contain bg-primary rounded-xl"
            />
          </div>
          <div className="w-68 h-64 aboutImg">
            <img
              src={WorkSpace}
              alt="workspace"
              className="w-full h-full object-contain bg-primary rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend & Web Developer
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={CV}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building high-performance, responsive, and accessible user
                    interfaces in Agile environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">CMS (Wordpress)</h4>
                  <p className="text-muted-foreground">
                    Customizing responsive WordPress websites using modern
                    themes and plugins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
