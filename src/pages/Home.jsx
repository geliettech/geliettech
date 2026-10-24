import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PortfolioStats from "../components/PortfolioStats";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Credentials from "../components/Credentials";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <PortfolioStats />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Credentials />
        <Article />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
