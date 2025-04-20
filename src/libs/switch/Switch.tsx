import React, { useState, forwardRef, CSSProperties, useEffect } from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.type";
import { typography } from "../../styles/foundation/typography/typography";

const fontMap: Record<string, CSSProperties> = {
  small: typography["Sb_8"],
  medium: typography["Sb_9"],
  large: typography["Sb_11"],
  xlarge: typography["Sb_14"],
};

const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    checked,
    onCheckedChange,
    pointText = { on: "ON", off: "OFF" },
    pointColor = "white",
    size = "medium",
    disabled = false,
    ...rest
  } = props;

  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState<boolean | undefined>(true);

  const actualChecked = isControlled ? checked : internalChecked;

  const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

  const pointTextStyle = fontMap[size] ?? typography["Sb_9"];

  const switchClassName = cx(
    styles.switch,
    styles[size],
    actualChecked && styles.checked,
    pointColor && styles[`pointColor-${pointColor}`],
    disabled && styles.disabled
  );

  const sliderClassName = styles.slider;
  const pointTextClassName = styles.point;

  const handleChange = (newChecked: boolean) => {
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onCheckedChange?.(newChecked);
  };

  const handleClick = () => {
    if (!disabled) {
      handleChange(!actualChecked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (event.key === " " || event.key === "Enter") {
      handleChange(!actualChecked);
    }
  };

  return (
    <div
      ref={ref}
      data-role="switch"
      className={switchClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={actualChecked}
      aria-disabled={disabled}
      tabIndex={0}
      {...rest}
    >
      <div data-role="slider" className={sliderClassName}>
        <p className={pointTextClassName} style={pointTextStyle}>
          {actualChecked ? pointText?.on ?? "ON" : pointText?.off ?? "OFF"}
        </p>
      </div>
    </div>
  );
});

export default Switch;
