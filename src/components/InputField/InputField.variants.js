"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantClasses = exports.sizeClasses = void 0;
// Size styles
exports.sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
};
// Variant styles — only affects the input itself, not wrapper
exports.variantClasses = {
    filled: "border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
    outlined: "border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500",
    ghost: "border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-0",
};
