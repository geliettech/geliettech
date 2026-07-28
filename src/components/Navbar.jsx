import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import ThemeToggle from "../context/ThemeToggle";
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
        ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-glow">
          Geliet<span className="text-primary">Tech</span>
        </h4>
        <div className="flex flex-row gap-6">

          <ThemeToggle />
          {/* Menu Button */}
          <button
            className={`text-2xl z-1000 cursor-pointer ${open ? "text-muted-foreground" : "text-muted-foreground"
              }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <IoIosClose size={32} /> : <RiMenu4Fill size={32} />}
          </button>

        </div>

      </div>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-background text-muted-foreground p-8 transform transition-transform duration-300 z-999 ${open ? "translate-x-0" : "translate-x-full"
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
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
