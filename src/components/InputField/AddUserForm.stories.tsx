// src/components/AddUserForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import AddUserForm from "./AddUserForm";

const meta: Meta<typeof AddUserForm> = {
  title: "Components/AddUserForm",
  component: AddUserForm,
};
export default meta;

type Story = StoryObj<typeof AddUserForm>;

export const Default: Story = {
  args: {
    onAdd: (user) => alert(`User added: ${JSON.stringify(user)}`),
  },
};
