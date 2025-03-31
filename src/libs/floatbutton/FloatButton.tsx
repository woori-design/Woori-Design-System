import styles from "./FloatButton.module.css";
import { FloatButtonProps } from "./FloatButton.type";

const FloatButton = ({
  size = "medium",
  color,
  position = "right",
  shape = "circle",
  style,
  className,
  children,
  icon,
  text,
  ...props
}: FloatButtonProps) => {
  const buttonClasses = [
    styles.floatButton,
    styles[size],
    styles[shape],
    color ? styles.custom : styles.default,
    styles[position],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      style={color ? { backgroundColor: color, ...style } : style}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text && <span className={styles.text}>{text}</span>}
      {children}
    </button>
  );
};

export default FloatButton;
