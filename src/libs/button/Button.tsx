import { forwardRef } from "react";

import styles from "./Button.module.css";
import { ButtonProps } from "./Button.type";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, width, variant = "box", rounded = 16, children, onClick, ...rest } = props;

  const className = [
    styles.button,
    styles[`button--${size}`],
    variant === "text" && styles["button--text"],
    styles[`button--rounded-${rounded}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      className={`${styles.button} ${className}`}
      disabled={props.disabled}
      style={width ? { width } : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
