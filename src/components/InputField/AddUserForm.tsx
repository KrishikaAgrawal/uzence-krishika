import  { useState } from "react";
import InputField from "./InputField";

interface AddUserFormProps {
  onAdd: (user: { username: string; age: string; password: string }) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAdd }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; age?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { username?: string; age?: string } = {};

    if (!username.trim()) newErrors.username = "Name is required";
    if (!age.trim()) newErrors.age = "Age is required";

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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-4xl w-full md:w-2/3 lg:w-full mx-auto space-y-4"
    >
      <InputField
        label="Username"
        placeholder="Enter username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />

      <InputField
              label="Age"
              type="number"
        placeholder="Enter age"
        required
        value={age}
        onChange={(e) => setAge(e.target.value)}
        error={errors.age}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        helperText="Must be at least 6 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
