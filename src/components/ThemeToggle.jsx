import { useState, useEffect } from 'react'
import { Sun, Moon } from "lucide-react"
import { cn } from "../lib/utils"


const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toogleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toogleTheme} className={cn("max-sm:hidden transition-colors duration-300",
        "focus:outline-hidden")}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-600" /> : <Moon className="h-6 w-6 text-primary" />}
        </button>
    )
}

export default ThemeToggle