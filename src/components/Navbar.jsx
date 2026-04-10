import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#hero" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "EXPERIENCES", link: "#experiences" },
    { name: "PROJECTS", link: "#projects" },
    { name: "ARTICLES", link: "#articles" },
    { name: "TESTIMONIALS", link: "#testimonials" },
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
          : "bg-muted-background text-muted-foreground"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <h4 className="text-3xl font-bold text-glow">
          Geliet<span className="text-primary ml-1">Tech</span>
        </h4>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {menuLinks.map((menu, i) => (
            <a
              key={i}
              href={menu.link}
              className="hover:text-primary transition"
            >
              {menu.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-3xl z-1000 ${
            open ? "text-muted-foreground" : "text-muted-foreground"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <IoIosClose size={24} /> : <RiMenu4Fill size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-background text-muted-foreground p-8 transform transition-transform duration-300 md:hidden z-999 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 text-base font-medium">
          {menuLinks.map((menu, i) => (
            <a
              key={i}
              href={menu.link}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition"
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
