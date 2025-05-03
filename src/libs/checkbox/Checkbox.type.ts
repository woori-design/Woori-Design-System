export type CheckboxType = "error" | "warning" | "default";
export type CheckboxSize = "small" | "medium" | "large";
export type CheckboxShape = "circle" | "square";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: CheckboxType;
  shape?: CheckboxShape;
  size: CheckboxSize;
}
