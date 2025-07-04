import { forwardRef } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    size,
    label,
    checked,
    onChange,
    type = "default",
    shape = "square",
    disabled = false,
    ...rest
  } = props;

  const className = [
    styles.checkboxContainer,
    styles.checkbox,
    styles[type],
    styles[shape],
    styles[size],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <label className={`${className}`}>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={styles.input}
          {...rest}
        />
        <span className={styles.label}>{label}</span>
      </label>
    </>
  );
});

export default Checkbox;
