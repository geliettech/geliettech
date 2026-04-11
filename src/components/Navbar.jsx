import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import ThemeToggle from "../components/ThemeToggle";
import { MenuLinks } from "../hooks/useRoute";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-999 text-muted-foreground ${sticky
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <h4 className="text-2xl md:text-3xl font-bold">
          Geliet<span className="text-primary">Tech</span>
        </h4>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {MenuLinks.map((menu, i) => (
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
          className={`lg:hidden text-2xl z-1000 ${open ? "text-muted-foreground" : "text-muted-foreground"
            }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <IoIosClose size={32} /> : <RiMenu4Fill size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-background text-muted-foreground p-8 transform transition-transform duration-300 lg:hidden z-999 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 text-base font-medium">
          {MenuLinks.map((menu, i) => (
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
