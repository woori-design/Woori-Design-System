export type CheckboxType = "error" | "warning" | "default";
export type CheckboxShape = "circle" | "square";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  type?: CheckboxType;
  shape?: CheckboxShape;
  helperText?: string;
}
