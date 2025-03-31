import React, { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, checked, onChange, type, disabled = false, helperText, ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    const classNames = [
      styles.checkbox,
      disabled ? styles.disabled : "",
      type ? styles[type] : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <>
        <label className={`${styles.checkboxContainer} ${classNames}`}>
          <input
            ref={inputRef}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className={styles.input}
            {...props}
          />
          <div className={styles.textWrapper}>
            <span className={styles.label}>{label}</span>
            {helperText && (
              <div className={styles.helperText}>{helperText}</div>
            )}
          </div>
        </label>
      </>
    );
  }
);

export default Checkbox;
