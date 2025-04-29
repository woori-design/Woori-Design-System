import { HTMLAttributes } from "react";

type SwitchType = "white" | "color";

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  pointText?: {
    on: string;
    off: string;
  };
  pointColor?: SwitchType;
  size: "small" | "medium" | "large" | "xlarge";
  disabled?: boolean;
}
