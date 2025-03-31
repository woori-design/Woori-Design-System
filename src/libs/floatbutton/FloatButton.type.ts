import React, { ButtonHTMLAttributes } from "react";

interface FloatButtonOwnProps {
  size?: "small" | "medium" | "large";
  color?: string;
  position?: "left" | "right" | "center";
  shape?: "circle" | "rounded";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
}

export type FloatButtonProps = FloatButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
