import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme === "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    toggleTheme: () => {
      const nextTheme = !isDarkMode;
      localStorage.setItem("theme", nextTheme ? "dark" : "light");
      setIsDarkMode(nextTheme);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
