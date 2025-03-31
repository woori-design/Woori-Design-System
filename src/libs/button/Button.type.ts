type BoxButtonSize = "xlarge" | "large" | "medium" | "small" | "xsmall";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: BoxButtonSize;
  width?: string;
  children?: React.ReactNode;
}
