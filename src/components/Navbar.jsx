import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#hero" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    // { name: "Articles", href: "#articles" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-o top-0 z-[999] ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7 text-3xl font-bold text-glow">
          <h4>
            Geliet<span className="text-cyan-600">Tech</span>
          </h4>
        </div>
        {/* Desktop Menu */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium text-sm rounded-bl-full`}
        >
          <div className="flex items-center gap-1 py-2 text-md">
            {menuLinks?.map((menu, i) => (
              <div key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </div>
            ))}
                      {/* Theme Toggle */}
                      
        <ThemeToggle />
          </div>
           
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`md:hidden text-3xl z-[999] m-5 ${
            open ? "text-gray-900" : "text-gray-100"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <div className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <div key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;