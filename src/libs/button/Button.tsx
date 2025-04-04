import { forwardRef } from "react";

import styles from "./Button.module.css";
import { ButtonProps } from "./Button.type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, width, children, onClick, ...rest } = props;

  const sizeClassName = styles[`button--${size}`];

  return (
    <button
      ref={ref}
      className={`${styles.button} ${sizeClassName}`}
      disabled={props.disabled}
      style={width ? { width } : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
});
