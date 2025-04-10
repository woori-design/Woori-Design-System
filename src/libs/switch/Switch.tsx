import React, { useState, forwardRef, CSSProperties } from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.type";
import { typography } from "../../styles/foundation/typography/typography";

const Switch = forwardRef<HTMLDivElement, SwitchProps>(({
                                                            checked,
                                                            onChange,
                                                            pointText = {
                                                                on: "ON",
                                                                off: "OFF",
                                                            },
                                                            pointColor = false,
                                                            size = "medium",
                                                            disabled = false,
                                                            className,
                                                            style,
                                                            ...props
                                                        }, ref) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState<boolean>(false);

    const actualChecked = isControlled ? checked : internalChecked;

    const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

    const fontMap: Record<string, CSSProperties> = {
        small: typography["Sb_8"],
        medium: typography["Sb_9"],
        large: typography["Sb_11"],
        xlarge: typography["Sb_14"],
    };
    const pointTextStyle = fontMap[size] ?? typography["Sb_9"];

    const switchClassName = cx(
        styles.switch,
        styles[size],
        actualChecked && styles.checked,
        pointColor && styles.pointColor,
        disabled && styles.disabled,
        className
    );

    const sliderClassName = styles.slider;
    const pointTextClassName = styles.point;

    const handleChange = (newChecked: boolean) => {
        if (!isControlled) {
            setInternalChecked(newChecked);
        }
        onChange?.(newChecked);
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
            style={style}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="switch"
            aria-checked={actualChecked}
            aria-disabled={disabled}
            tabIndex={0}
            {...props}
        >
            <div data-role="slider" className={sliderClassName}>
                <p className={pointTextClassName} style={pointTextStyle}>
                    {actualChecked
                        ? (pointText?.on?.valueOf() ?? "ON")
                        : (pointText?.off?.valueOf() ?? "OFF")}
                </p>
            </div>
        </div>
    );
});

export default Switch;