import { forwardRef } from "react";

import styles from "./Button.module.css";
import { ButtonProps } from "./Button.type";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = "button",
    size,
    width,
    variant = "box",
    colorScheme = "primary",
    rounded = 16,
    children,
    onClick,
    ...rest
  } = props;

  const className = [
    styles[`button--${size}`],
    variant === "text" && styles["button--text"],
    styles[`button--rounded-${rounded}`],
    colorScheme === "secondary" && styles["button--secondary"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      type={type}
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
