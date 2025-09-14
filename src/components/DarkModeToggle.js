"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DarkModeToggle;
exports.DarkModeToggle = DarkModeToggle;
var jsx_runtime_1 = require("react/jsx-runtime");
// DarkModeToggle.tsx
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function DarkModeToggle() {
    var _a = (0, react_1.useState)(false), isDark = _a[0], setIsDark = _a[1];
    // Load theme on mount
    (0, react_1.useEffect)(function () {
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
    var toggleTheme = function () {
        var newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };
    return ((0, jsx_runtime_1.jsx)("button", { onClick: toggleTheme, className: "relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-105 transition-transform duration-300", children: (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "wait", initial: false, children: isDark ? ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.5, rotate: -45 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: { opacity: 0, scale: 0.5, rotate: 45 }, transition: { duration: 0.3 }, className: "text-yellow-400", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Moon, { size: 20 }) }, "moon")) : ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.5, rotate: 45 }, animate: { opacity: 1, scale: 1, rotate: 0 }, exit: { opacity: 0, scale: 0.5, rotate: -45 }, transition: { duration: 0.3 }, className: "text-blue-400        ", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Sun, { size: 22 }) }, "sun")) }) }));
}
