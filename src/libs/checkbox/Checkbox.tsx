import React, { forwardRef } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked = false,
      onChange,
      type = "default",
      shape = "square",
      disabled = false,
      helperText,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    const className = [
      styles.checkboxContainer,
      styles.checkbox,
      styles[type],
      styles[shape],
      disabled && styles.disabled,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label className={`${className}`}>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={styles.input}
          {...props}
        />
        <div className={styles.textWrapper}>
          <span className={styles.label}>{label}</span>
          {helperText && <div className={styles.helperText}>{helperText}</div>}
        </div>
      </label>
    );
  }
);

export default Checkbox;
