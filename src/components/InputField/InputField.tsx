import React, { useState } from "react";
import type { InputFieldProps } from "./InputField.types"; 
import { Eye, EyeOff } from "lucide-react";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-transparent focus:border-blue-500",
  outlined: "border border-gray-300 focus:border-blue-500",
  ghost: "border-transparent bg-transparent focus:border-blue-500",
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  helperText,
  error,
  required,
  disabled,
  loading,
  variant = "outlined",
  size = "medium",
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          disabled={disabled || loading}
          value={value}
          onChange={onChange}
          className={`w-full rounded-md focus:outline-none ${
            sizeClasses[size]
          } ${variantClasses[variant]} ${error ? "border-red-500" : ""} ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
