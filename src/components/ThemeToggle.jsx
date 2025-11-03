import { useState } from 'react'
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <button>
            {isDarkMode ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeToggle