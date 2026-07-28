import { useState, useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else if (storedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            // system preference
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            document.documentElement.classList.toggle("dark", prefersDark);
            setIsDarkMode(prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;

        setIsDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
    <button
  onClick={toggleTheme}
  className={cn(
    "relative inline-flex h-8 w-15 items-center rounded-full transition-colors duration-300",
    isDarkMode ? "bg-primary" : "bg-secondary/30"
  )}
>
  <span
    className={cn(
      "inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow transition-transform duration-300 cursor-pointer",
      isDarkMode ? "translate-x-8" : "translate-x-1"
    )}
  >
    {isDarkMode ? (
      <IoMdMoon className="h-5 w-5 text-primary" />
    ) : (
      <IoMdSunny className="h-5 w-5 text-yellow-500" />
    )}
  </span>
</button>
    );
    
};

export default ThemeToggle;