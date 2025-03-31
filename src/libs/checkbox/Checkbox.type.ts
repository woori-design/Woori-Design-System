type CheckboxType = "error" | "warning" | "default";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  type?: CheckboxType;
  helperText?: string;
}
