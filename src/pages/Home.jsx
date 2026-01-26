import Navbar from "../components/Navbar";
// import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Recommedations from "../components/Recommedations";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Articles />
        <Contact />
        <Recommedations />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
