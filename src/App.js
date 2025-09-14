import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import DarkModeToggle from "./components/DarkModeToggle";
import AddUserForm from "./components/InputField/AddUserForm";
function App() {
    const [users, setUsers] = useState([
        { id: 1, username: "Ankita", age: 24 },
        { id: 2, username: "Charu", age: 30 },
        { id: 3, username: "Riya", age: 28 },
    ]);
    // ✅ Explicitly type columns as Column<User>[]
    const columns = [
        { key: "username", title: "Name", dataIndex: "username", sortable: true },
        { key: "age", title: "Age", dataIndex: "age", sortable: true },
    ];
    const [selectedRows, setSelectedRows] = useState([]);
    const handleRowSelect = (rows) => setSelectedRows(rows);
    const handleAddUser = (user) => {
        const newUser = {
            id: users.length + 1,
            username: user.username,
            age: Number(user.age), // convert string to number
            password: user.password,
        };
        setUsers((prev) => [...prev, newUser]);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 p-8 space-y-10 transition-colors duration-300", children: [_jsx("div", { className: "flex justify-end max-w-4xl mx-auto mb-4", children: _jsx(DarkModeToggle, {}) }), _jsx("h1", { className: "text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8", children: "Uzence Assignment" }), _jsxs("div", { className: "flex flex-col lg:flex-row items-start gap-12 w-full max-w-6xl mx-auto", children: [_jsx(AddUserForm, { onAdd: handleAddUser }), _jsxs("div", { className: "bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full space-y-4", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4", children: "DataTable" }), _jsx(DataTable, { data: users, columns: columns, selectable: true, onRowSelect: handleRowSelect }), _jsxs("p", { className: "text-gray-700 dark:text-gray-300 mt-2", children: ["Selected Rows:", " ", selectedRows.map((r) => r.username).join(", ") || "None"] })] })] })] }));
}
export default App;
