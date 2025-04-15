export type ButtonSize = "xlarge" | "large" | "medium" | "small" | "xsmall";
export type ButtonVarient = "box" | "text";
export type ButtonRounded = 16 | 100;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  width?: string;
  children?: React.ReactNode;
  variant: ButtonVarient;
  rounded?: ButtonRounded;
}
