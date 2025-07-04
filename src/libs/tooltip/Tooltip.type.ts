import React from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipSize = "small" | "medium" | "large";

export interface TooltipProps {
  children: React.ReactElement;
  content: React.ReactNode;
  position?: TooltipPosition;
  size?: TooltipSize;
  disabled?: boolean;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}