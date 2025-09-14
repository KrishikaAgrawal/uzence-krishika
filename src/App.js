"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DataTable_1 = require("./components/DataTable/DataTable");
var DarkModeToggle_1 = require("./components/DarkModeToggle");
var AddUserForm_1 = require("./components/InputField/AddUserForm");
function App() {
    var _a = (0, react_1.useState)([
        { id: 1, username: "Ankita", age: 24 },
        { id: 2, username: "Charu", age: 30 },
        { id: 3, username: "Riya", age: 28 },
    ]), users = _a[0], setUsers = _a[1];
    // ✅ Explicitly type columns as Column<User>[]
    var columns = [
        { key: "username", title: "Name", dataIndex: "username", sortable: true },
        { key: "age", title: "Age", dataIndex: "age", sortable: true },
    ];
    var _b = (0, react_1.useState)([]), selectedRows = _b[0], setSelectedRows = _b[1];
    var handleRowSelect = function (rows) { return setSelectedRows(rows); };
    var handleAddUser = function (user) {
        var newUser = {
            id: users.length + 1,
            username: user.username,
            age: Number(user.age), // convert string to number
            password: user.password,
        };
        setUsers(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newUser], false); });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 p-8 space-y-10 transition-colors duration-300", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-end max-w-4xl mx-auto mb-4", children: (0, jsx_runtime_1.jsx)(DarkModeToggle_1.default, {}) }), (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8", children: "Uzence Assignment" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row items-start gap-12 w-full max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)(AddUserForm_1.default, { onAdd: handleAddUser }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full space-y-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4", children: "DataTable" }), (0, jsx_runtime_1.jsx)(DataTable_1.default, { data: users, columns: columns, selectable: true, onRowSelect: handleRowSelect }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-700 dark:text-gray-300 mt-2", children: ["Selected Rows:", " ", selectedRows.map(function (r) { return r.username; }).join(", ") || "None"] })] })] })] }));
}
exports.default = App;
