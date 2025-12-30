// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);

//   const menuLinks = [
//     { name: "HOME", link: "#home" },
//     { name: "ABOUT", link: "#about" },
//     { name: "SKILLS", link: "#skills" },
//     { name: "PROJECTS", link: "#projects" },
//     { name: "CONTACT", link: "#contact" },
//   ];
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const nav = document.querySelector("nav");
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     });
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full left-o top-0 z-[999] ${
//         sticky ? "bg-white/60 text-gray-900" : "text-white"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="mx-7 text-4xl font-bold">
//           <h4>
//             Geliet<span className="text-cyan-600">Tech</span>
//           </h4>
//         </div>
//         {/* Desktop Menu */}
//         <div
//           className={`${
//             sticky ? "md:bg-white/0 bg-white" : "bg-white"
//           } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
//         >
//           <div className="flex item-center gap-1 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <div key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Mobile Menu Button */}
//         <div
//           className={`md:hidden text-3xl z-[999] m-5 ${
//             open ? "text-gray-900" : "text-gray-100"
//           }`}
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
//             open ? "right-0" : "right-[-100%]"
//           }`}
//         >
//           <div className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <div key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Articles", href: "#articles" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Geliet </span>{" "}
            Tech
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar