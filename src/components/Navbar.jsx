import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { RiMenu4Fill } from "react-icons/ri";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#hero" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "SERVICES", link: "#services" },
    { name: "PROJECTS", link: "#projects" },
    { name: "ARTICLES", link: "#articles" },
    { name: "RECOMMEDATIONS", link: "#recommedations" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-999 ${
        sticky
          ? "bg-white/60 text-muted-foreground"
          : "bg-transparent text-muted-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">

        {/* Logo */}
        <h4 className="text-3xl font-bold text-glow">
          Geliet<span className="text-primary ml-1">Tech</span>
        </h4>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {menuLinks.map((menu, i) => (
            <a
              key={i}
              href={menu.link}
              className="hover:text-cyan-600 transition"
            >
              {menu.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-3xl z-1000 ${
            open ? "text-gray-900" : "text-gray-100"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <RiMenu4Fill size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-white text-gray-900 px-8 py-10 transform transition-transform duration-300 md:hidden z-999 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full gap-8 text-lg font-medium">
          {menuLinks.map((menu, i) => (
            <a
              key={i}
              href={menu.link}
              onClick={() => setOpen(false)}
              className="hover:text-cyan-600 transition"
            >
              {menu.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
