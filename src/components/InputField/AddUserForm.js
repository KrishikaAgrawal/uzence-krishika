"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var InputField_1 = require("./InputField");
var AddUserForm = function (_a) {
    var onAdd = _a.onAdd;
    var _b = (0, react_1.useState)(""), username = _b[0], setUsername = _b[1];
    var _c = (0, react_1.useState)(""), age = _c[0], setAge = _c[1];
    var _d = (0, react_1.useState)(""), password = _d[0], setPassword = _d[1];
    var _e = (0, react_1.useState)({}), errors = _e[0], setErrors = _e[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        var newErrors = {};
        if (!username.trim())
            newErrors.username = "Name is required";
        if (!age.trim())
            newErrors.age = "Age is required";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onAdd({ username: username, age: age, password: password });
        setUsername("");
        setAge("");
        setPassword("");
        setErrors({});
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-4xl w-full md:w-2/3 lg:w-full mx-auto space-y-4", children: [(0, jsx_runtime_1.jsx)(InputField_1.default, { label: "Username", placeholder: "Enter username", required: true, value: username, onChange: function (e) { return setUsername(e.target.value); }, error: errors.username }), (0, jsx_runtime_1.jsx)(InputField_1.default, { label: "Age", type: "number", placeholder: "Enter age", required: true, value: age, onChange: function (e) { return setAge(e.target.value); }, error: errors.age }), (0, jsx_runtime_1.jsx)(InputField_1.default, { label: "Password", type: "password", placeholder: "Enter password", helperText: "Must be at least 6 characters", value: password, onChange: function (e) { return setPassword(e.target.value); } }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition", children: "Add User" })] }));
};
exports.default = AddUserForm;
