import React, { useState, forwardRef, CSSProperties } from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.type";
import { typography } from "../../styles/foundation/typography/typography";

const Switch = forwardRef<HTMLDivElement, SwitchProps>(({
                                                            checked,
                                                            onChange,
                                                            pointText = ["ON", "OFF"],
                                                            pointColor = false,
                                                            size = "md",
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
        sm: typography["Sb_8"],
        md: typography["Sb_9"],
        xl: typography["Sb_11"],
        lg: typography["Sb_14"],
    };
    const pointTextStyle = fontMap[size] ?? typography["Sb_9"];

    const switchClassName = cx(
        styles.switch,
        styles[size],
        actualChecked && styles.checked,
        disabled && styles.disabled,
        className
    );

    const sliderClassName = cx(
        styles.slider,
        styles[size],
        disabled && styles.disabled
    );

    const pointTextClassName = cx(
        styles.point,
        styles[size],
        disabled && styles.disabled
    );

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
                        ? (pointText?.[0] ?? "ON")
                        : (pointText?.[1] ?? "OFF")}
                </p>
            </div>
        </div>
    );
});

export default Switch;