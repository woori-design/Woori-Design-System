import { useRef, useState, MouseEvent, RefObject } from "react";
import styles from "./FloatButton.module.css";
import { FloatButtonProps } from "./FloatButton.type";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useFloatButtonMenu } from "../../hooks/useFloatButtonMenu";
import { PlusIconWhenCircleShape, PlusIconWhenSquareShape } from "../../icons/FloatButtonIcons";

const FloatButton = (props: FloatButtonProps) => {
  const { size = "md", shape = "circle", style, className, children, onToggle, ...rest } = props;

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const next = !isOpen;
    setIsOpen(next);
    onToggle?.(next);
  };

  useClickOutside([buttonRef as RefObject<HTMLElement>, menuRef as RefObject<HTMLElement>], () => {
    setIsOpen(false);
    onToggle?.(false);
  });

  const menuItems = useFloatButtonMenu(children);
  const hasMenuItems = menuItems.length > 0;
  const PlusIcon = shape === "circle" ? PlusIconWhenCircleShape : PlusIconWhenSquareShape;

  const containerClassByShape = {
    circle: styles.circleContainer,
    square: styles.squareContainer,
  };

  const buttonClasses = [
    styles.floatButton,
    styles[size],
    styles[shape],
    shape === "circle" ? styles.circleStyle : styles.squareStyle,
    isOpen ? styles.menuOpen : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const menuContainerClasses = [
    styles.menuContainer,
    styles[size],
    containerClassByShape[shape],
    isOpen ? styles.menuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.floatButtonWrapper}>
      <button
        className={buttonClasses}
        style={style}
        onClick={toggleMenu}
        ref={buttonRef}
        aria-label="플로팅 메뉴 열기"
        {...rest}
      >
        <div className={styles.iconContainer}>
          <PlusIcon className={styles.plusIcon} />
        </div>
      </button>

      {hasMenuItems && (
        <div className={menuContainerClasses} ref={menuRef}>
          {menuItems.map((child, index) => {
            const handleClick = (e: MouseEvent) => {
              e.stopPropagation();
              child.props.onClick?.();
              onToggle?.(false);
            };

            return (
              <div
                key={index}
                className={styles.menuItem}
                onClick={handleClick}
                aria-label={child.props.label || `메뉴 아이템 ${index + 1}`}
              >
                {child}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FloatButton;
