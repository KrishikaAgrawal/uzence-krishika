import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import InputField from "./InputField";
const AddUserForm = ({ onAdd }) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!username.trim())
            newErrors.username = "Name is required";
        if (!age.trim())
            newErrors.age = "Age is required";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onAdd({ username, age, password });
        setUsername("");
        setAge("");
        setPassword("");
        setErrors({});
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-4xl w-full md:w-2/3 lg:w-full mx-auto space-y-4", children: [_jsx(InputField, { label: "Username", placeholder: "Enter username", required: true, value: username, onChange: (e) => setUsername(e.target.value), error: errors.username }), _jsx(InputField, { label: "Age", type: "number", placeholder: "Enter age", required: true, value: age, onChange: (e) => setAge(e.target.value), error: errors.age }), _jsx(InputField, { label: "Password", type: "password", placeholder: "Enter password", helperText: "Must be at least 6 characters", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition", children: "Add User" })] }));
};
export default AddUserForm;
