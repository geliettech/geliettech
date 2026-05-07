import { FaBriefcase, FaCode, FaLaptop } from "react-icons/fa6";
import CV from "../assets/OGECHI_JULIET_UHEGBU_FrontendDeveloper.pdf";
import Profile from "../assets/img/about/profile.jpg";


const About = () => {
  const startDate = new Date(2023, 8, 20);
  const currentDate = new Date();


  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const display = months > 0 ? `${years}+` : `${years}`;

  return (

    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12">
          👩🏽‍💻 About <span className="text-primary"> Me</span>
        </h2>
        {/* Profile Image */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 animate-fade-in-delay-1">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Passionate Frontend & Web Developer
            </h3>

            <p className="text-sm md:text-base text-muted-foreground">
              With B.Sc. in Computer Science and Informatics and&nbsp;{display}&nbsp;years hands-on experience building responsive, accessible, and performance-optimized web applications using modern technologies.
            </p>

            <p className="text-sm md:text-base text-muted-foreground">
              I’ve worked with startups and clients to develop real-world solutions using React, Next.js, Tailwind CSS, Firebase, and modern UI systems.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              I focus on writing clean, maintainable code and creating user experiences that solve real problems.
            </p>
            {/* Buttons */}
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
          {/* Right Cards Section */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-5 md:p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <FaCode className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Building high-performance, responsive, and accessible user interfaces in Agile environments.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="gradient-border p-5 md:p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <FaLaptop className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Web Development</h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Creating responsive websites and web applications with modern technologies.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="gradient-border p-5 md:p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <FaBriefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Responsive Web Design</h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Building fully responsive layouts using modern CSS techniques and frameworks.
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
