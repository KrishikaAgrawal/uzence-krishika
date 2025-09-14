import React, { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import DarkModeToggle from "./components/DarkModeToggle";
import AddUserForm from "./components/InputField/AddUserForm";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "Ankita", age: 24 },
    { id: 2, username: "Charu", age: 30 },
    { id: 3, username: "Riya", age: 28 },
  ]);

  const columns = [
    { key: "username", title: "Name", dataIndex: "username", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  const [selectedRows, setSelectedRows] = useState<typeof users>([]);

  const handleRowSelect = (rows: typeof users) => setSelectedRows(rows);

  // Fix: use `onAdd` to match AddUserForm
  const handleAddUser = (user: {
    username: string;
    age: string;
    password: string;
  }) => {
    const newUser = {
      id: users.length + 1, // simple auto id
      username: user.username,
      age: Number(user.age), // ensure it's a number
      password: user.password,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 space-y-10 transition-colors duration-300">
      <div className="flex justify-end max-w-4xl mx-auto mb-4">
        <DarkModeToggle />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">
        Uzence Assignment
      </h1>

      {/* Add User Form + DataTable */}
      <div className="flex flex-col lg:flex-row items-start gap-12 w-full max-w-6xl mx-auto">
        <AddUserForm onAdd={handleAddUser} />

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            DataTable
          </h2>

          <DataTable
            data={users}
            columns={columns}
            selectable
            onRowSelect={handleRowSelect}
          />

          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Selected Rows:{" "}
            {selectedRows.map((r) => r.username).join(", ") || "None"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
