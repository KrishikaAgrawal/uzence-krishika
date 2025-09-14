"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
};
var variantClasses = {
    filled: "bg-gray-100 border border-transparent focus:border-blue-500",
    outlined: "border border-gray-300 focus:border-blue-500",
    ghost: "border-transparent bg-transparent focus:border-blue-500",
};
var InputField = function (_a) {
    var label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, placeholder = _a.placeholder, helperText = _a.helperText, error = _a.error, required = _a.required, disabled = _a.disabled, loading = _a.loading, _c = _a.variant, variant = _c === void 0 ? "outlined" : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, value = _a.value, onChange = _a.onChange;
    var _e = (0, react_1.useState)(false), showPassword = _e[0], setShowPassword = _e[1];
    var inputType = type === "password" && showPassword ? "text" : type;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [label && ((0, jsx_runtime_1.jsxs)("label", { className: "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300", children: [label, required && (0, jsx_runtime_1.jsx)("span", { className: "text-red-500 ml-1", children: "*" })] })), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", { type: inputType, placeholder: placeholder, disabled: disabled || loading, value: value, onChange: onChange, className: "w-full rounded-md focus:outline-none ".concat(sizeClasses[size], " ").concat(variantClasses[variant], " ").concat(error ? "border-red-500" : "", " ").concat(disabled ? "opacity-50 cursor-not-allowed" : "") }), type === "password" && ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: function () { return setShowPassword(function (prev) { return !prev; }); }, className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700", children: showPassword ? (0, jsx_runtime_1.jsx)(lucide_react_1.EyeOff, { size: 18 }) : (0, jsx_runtime_1.jsx)(lucide_react_1.Eye, { size: 18 }) }))] }), helperText && !error && ((0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-xs text-gray-500", children: helperText })), error && (0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-xs text-red-500", children: error })] }));
};
exports.default = InputField;
