import Navbar from "../components/Navbar";
// import Bot from "../components/Bot"
import { StarBackground } from "@/components/StarBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Lifecycle from "../components/CaseStudy";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* chat bot */}
      {/* <Bot /> */}

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Recommendations />
        <Article />
        <Lifecycle />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
