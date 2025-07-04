import React, { useState, useRef, cloneElement, isValidElement } from "react";
import styles from "./Tooltip.module.css";
import { TooltipProps } from "./Tooltip.type";

const Tooltip = ({
  children,
  content,
  position = "top",
  size = "medium",
  disabled = false,
  delay = 0,
  className,
  style,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (disabled) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const tooltipClasses = [
    styles.tooltip,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentClasses = [
    styles.tooltipContent,
    styles[position],
    styles[size],
    isVisible && styles.visible,
  ]
    .filter(Boolean)
    .join(" ");

  // Check if children is a valid React element
  if (!isValidElement(children)) {
    return <>{children}</>;
  }

  // Get original props
  const originalProps = children.props as any;

  // Clone the child element to add event handlers
  const childWithProps = cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip();
      if (originalProps.onMouseEnter) {
        originalProps.onMouseEnter(e);
      }
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip();
      if (originalProps.onMouseLeave) {
        originalProps.onMouseLeave(e);
      }
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip();
      if (originalProps.onFocus) {
        originalProps.onFocus(e);
      }
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip();
      if (originalProps.onBlur) {
        originalProps.onBlur(e);
      }
    },
    "aria-describedby": disabled ? originalProps["aria-describedby"] : "tooltip-content",
  });

  if (disabled) {
    return children;
  }

  return (
    <span className={tooltipClasses} style={style}>
      {childWithProps}
      <span
        id="tooltip-content"
        className={contentClasses}
        role="tooltip"
        aria-hidden={!isVisible}
      >
        {content}
      </span>
    </span>
  );
};

export default Tooltip;