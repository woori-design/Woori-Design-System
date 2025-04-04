type ButtonSize = "xlarge" | "large" | "medium" | "small" | "xsmall";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  width?: string;
  children?: React.ReactNode;
}
