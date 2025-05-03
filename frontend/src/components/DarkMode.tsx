import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check initial state from localStorage or system preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        // Use system preference as fallback
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    // Apply dark mode class on initial render and whenever isDarkMode changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    // Apply change immediately when used in multiple places (e.g. sidebar)
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "theme") {
                const newTheme = e.newValue;
                setIsDarkMode(newTheme === "dark");
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // Handle system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (!localStorage.getItem("theme")) {
                setIsDarkMode(mediaQuery.matches);
            }
        };
        
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    return (
        <div className="flex items-center space-x-2">
            <button 
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                <div className="w-5 h-5 text-gray-700 dark:text-gray-300">
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
            </button>
        </div>
    );
}