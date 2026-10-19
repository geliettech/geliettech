import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { cn } from "../lib/utils";
import useTheme from "./useTheme";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
    <button
  onClick={toggleTheme}
  type="button"
  aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
  aria-pressed={isDarkMode}
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