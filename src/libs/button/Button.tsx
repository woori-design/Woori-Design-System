import { forwardRef } from "react";
import { ButtonProps } from ".";
import styles from "./Button.module.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "xlarge", width, children, onClick, ...props }, ref) => {
    const sizeClassName = styles[`button--${size}`];

    return (
      <button
        ref={ref}
        className={`${styles.button} ${sizeClassName}`}
        disabled={props.disabled}
        style={width ? { width } : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
