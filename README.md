UI Components – InputField & DataTable

This project implements two reusable React + TypeScript components — InputField and DataTable — built with scalability, accessibility, and modern patterns in mind. The components are styled with Tailwind CSS and demonstrated in a simple demo app with dark mode support.

✅ Assignment Mapping
Component 1: InputField

Features implemented:

✔ Label, placeholder, helper text, error message

✔ States: disabled, error/invalid, loading

✔ Variants: filled, outlined, ghost

✔ Sizes: small, medium, large

✔ Required field marker (*)

✔ Password toggle (eye icon)

✔ Dark mode support (text + placeholder adapt to theme)

Props (InputFieldProps):

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;         // shown below the field
  required?: boolean;     // shows red * and enforces validation
  disabled?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "small" | "medium" | "large";
  type?: string;          // supports "text", "password", "number"
}

Component 2: DataTable

Features implemented:

✔ Display tabular data with dynamic columns

✔ Column sorting (ascending/descending)

✔ Row selection (multiple) with selected rows preview

✔ Loading state (spinner/placeholder)

✔ Empty state when no data

Props (DataTableProps<T>):

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

General Requirements

TypeScript – All components are strictly typed (.types.ts files).

Responsive Design – Components adapt across screen sizes (Tailwind utilities).

Accessibility – Labels, focus states, ARIA roles on table checkboxes.

Clean, modern styling – Utility-first styling with Tailwind, shadow-based inputs, consistent spacing.

📂 Project Structure
src/
├── assets/                  # (for images/icons if needed)
├── components/
│   ├── DataTable/
│   │   ├── DataTable.tsx
│   │   └── DataTable.types.ts
│   ├── InputField/
│   │   ├── AddUserForm.tsx
│   │   ├── InputField.tsx
│   │   ├── InputField.types.ts
│   │   └── InputField.variants.ts
│   └── DarkModeToggle.tsx
├── utils/
│   └── types.ts
├── App.tsx                  # Demo usage of components
├── main.tsx                 # App entry
└── index.css                # Tailwind CSS styles

🚀 Setup Instructions

Clone the repository

git clone <your-repo-url>
cd <your-project-folder>


Install dependencies

npm install
# or
yarn install


Run locally

npm run dev
# or
yarn dev


Open in browser
👉 http://localhost:5173

💡 Approach

Scalable Structure

Each component has its own folder with tsx, types.ts, and variants.ts for separation of concerns.

Shared types placed in utils/types.ts.

Reusable InputField

Built as a single flexible component with size + variant classes.

Used conditional classnames for error, disabled, and dark mode states.

Password toggle implemented with lucide-react icons.

Reusable DataTable

Generic <T> type allows reuse for any data model.

Sorting implemented per column using sortable flag.

Row selection implemented with checkboxes and controlled state.

Empty & loading states added for better UX.

Demo App

App.tsx demonstrates both components:

Add users with validation via AddUserForm.

Display users in DataTable with sorting + selection.

DarkModeToggle allows instant theme switching.
