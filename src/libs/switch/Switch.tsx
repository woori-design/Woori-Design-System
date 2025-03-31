import React, { useState, forwardRef, useEffect } from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.type";

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(({
                                                            checked = false,
                                                            onChange,
                                                            size = "md",
                                                            disabled = false,
    ...props
                                                              }, ref) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = (newChecked: boolean) => {
        setIsChecked(newChecked);
        onChange?.(newChecked);
    };

    const handleClick = () => {
        if (!disabled) {
            handleChange(!isChecked);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;

        if (event.key === " " || event.key === "Enter") {
            handleChange(!isChecked);
        }
    };

    const switchClassName = `${styles.switch} ${styles[size]} ${isChecked ? styles.checked : ""} ${
        disabled ? styles.disabled : ""
    }`;

    const sliderClassName = `${styles.slider} ${styles[size]} ${disabled ? styles.disabled : ""}`;

    return (
        <div
            ref={ref}
            id="switch"
            className={switchClassName}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="switch"
            aria-checked={isChecked}
            aria-disabled={disabled}
            tabIndex={0}
            {...props}
        >
            <div id="slider" className={sliderClassName} />
        </div>
    );
});
