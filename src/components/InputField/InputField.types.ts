export type InputVariant = "filled" | "outlined" | "ghost";
export type InputSize = "small" | "medium" | "large";

export interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
