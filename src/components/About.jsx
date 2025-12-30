// import React, { useState } from "react";
// import aboutImg from "../assets/images/about.png";
// import CV from "../assets/OGECHI_JULIET_UHEGBU_FrontendDeveloperCV.pdf";



// const About = () => {
//   const info = [
//     { text: "Years Experience", count: "02" },
//     { text: "Completed Projects", count: "10" },
//     { text: "Companies Work", count: "03" },
//   ];

//   return (
//     <section id="about" className="py-10 text-white">
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//           👩🏽‍💻 About<span className="text-cyan-600"> Me</span>
//         </h3>
//         <p className="text-gray-400 my-3 text-lg">My introduction</p>
//         <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
//           <div className="p-2">
//             <div className="text-gray-300 my-3">
//               <div className="text-left leading-7 md:w-11/12 w-full mx-auto">
//                 <p>Hi, I'm <b>Ogechi</b>, but you can call me <b>Oge</b>.</p>
//                 <p>
//                   I'm a dynamic <b>Frontend Developer</b> with a passion for <b>building responsive</b>, <b>scalable web applications</b> that are just as maintainable as they are beautiful.
//                 </p><br />
//                 <p>
//                   With over <b></b>2 years of experience in frontend development and growing expertise in web development systems, I've worked across startups and global teams to ship high-impact products using <b>React</b>, <b>Next.js</b>, <b>Typescript</b>, <b>TailwindCSS</b> and <b>MaterialUI</b>, <b></b>among other modern tools. I care deeply about performance, accessibility and clean code.
//                 </p><br />
//                 <p>
//                   Currently, I'm diving deeper into <b>Web Development</b>, <b>Software Engineering</b> and <b>System Designs</b>. I regularly document my learnings and dev journey on <b>LinkedIn</b>, <b>medium</b> and <b>other social media platforms</b>.
//                 </p><br />
//                 <p>
//                   I'm currently open for remote or onsite opportunities that challenge me to grow and build impactful web solutions. If your team values clean code, good docs, cross-functional collaboration, and continuous learning, <b>let's talk!</b>
//                 </p>
//               </div>
//               <div className="flex mt-10 items-center gap-7">
//                 {info.map((content) => (
//                   <div key={content.text}>
//                     <h3 className="md:text-4xl text-2xl font-semibold text-white">
//                       {content.count}
//                       <span className="text-cyan-600">+</span>
//                     </h3>
//                     <span className="md:text-base text-xs">{content.text}</span>
//                   </div>
//                 ))}
//               </div>
//               <br />
//               <br />
//               <a href={CV} download>
//                 <button className="btn-primary">Download CV</button>
//               </a>
//             </div>
//           </div>
//           <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
//             <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
//               <img
//                 src={aboutImg}
//                 alt=""
//                 className="w-full object-cover bg-cyan-600 rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { Briefcase, Code, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
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
                {" "}
                Get In Touch
              </a>

              <a
                href=""
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
                  <h4 className="font-semibold text-lg"> Web Development</h4>
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
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
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
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
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