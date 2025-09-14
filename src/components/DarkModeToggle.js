import { jsx as _jsx } from "react/jsx-runtime";
// DarkModeToggle.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);
    // Load theme on mount
    useEffect(() => {
        if (localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
        else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);
    // Toggle theme
    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };
    return (_jsx("button", { onClick: toggleTheme, className: "relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-105 transition-transform duration-300", children: _jsx(AnimatePresence, { mode: "wait", initial: false, children: isDark ? (_jsx(motion.div, { initial: { opacity: 0, scale: 0.5, rotate: -45 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: { opacity: 0, scale: 0.5, rotate: 45 }, transition: { duration: 0.3 }, className: "text-yellow-400", children: _jsx(Moon, { size: 20 }) }, "moon")) : (_jsx(motion.div, { initial: { opacity: 0, scale: 0.5, rotate: 45 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: { opacity: 0, scale: 0.5, rotate: -45 }, transition: { duration: 0.3 }, className: "text-blue-400        ", children: _jsx(Sun, { size: 22 }) }, "sun")) }) }));
}
export { DarkModeToggle };
