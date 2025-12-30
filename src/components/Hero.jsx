// import React from "react";

// const Hero = () => {
//   const social_media = [
//    {social_logo: "logo-instagram", social_link: "https://instagram.com/geliettech"} ,
//    {social_logo: "logo-github", social_link: "https://github.com/geliettech"} ,
//    {social_logo: "logo-linkedin", social_link: "https://www.linkedin.com/in/geliettech"} ,
//    {social_logo: "logo-twitter", social_link: "https://x.com/geliettech"} ,
//    {social_logo: "logo-medium", social_link: "https://geliettech.medium.com/"} ,
//   ];

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex py-10 md:flex-row flex-col items-center mt-8"
//     >
//       <div className="flex-1">
//         <div className="md:text-left text-center">
//           <h1
//             className="md:text-5xl text-2xl md:leading-normal leading-10
//          text-white font-bold"
//           >
//             <span className="text-cyan-600 md:text-6xl text-5xl">
//               Hello!
//               <br />
//             </span>
//             My name is <span>Ogechi Juliet Uhegbu</span>
//           </h1>
//           <h4 className="md:text-2xl text-lg md:leading-normal leading-10 mt-4 font-bold text-gray-600">
//             Frontend Developer<br />& Web Developer
//           </h4>
//           <a href="#contact">
//             <button className="btn-primary mt-8">Contact Me</button>
//           </a>
//           <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//             {social_media?.map((icon) => (
//               <div
//                 key={icon}
//                 className="text-gray-600 hover:text-white cursor-pointer"
//               >
//                 <a href={icon.social_link} target="_blank" rel="noopener noreferrer">
//                 <ion-icon name={icon.social_logo}></ion-icon>
//                 </a>
               
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ogechi Juliet
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Uhegbu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;