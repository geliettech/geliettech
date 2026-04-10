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
            className="transition-colors duration-300 cursor-pointer focus:outline-none"
        >
            {isDarkMode ? (
                <IoMdSunny className="h-6 w-6 text-yellow-600" />
            ) : (
                <IoMdMoon className="h-6 w-6 text-primary" />
            )}
        </button>
    );
};

export default ThemeToggle;