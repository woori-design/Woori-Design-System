import React, { useState, useRef } from 'react';
import styles from './Tooltip.module.css';
import type { TooltipProps } from './Tooltip.type';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  color = 'black',
  children,
  className = '',
  style,
}) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const tooltipClass = [
    styles.tooltip,
    styles[`tooltip${position.charAt(0).toUpperCase() + position.slice(1)}`],
    color === 'white' ? styles.tooltipWhite : styles.tooltipBlack,
    visible ? styles.tooltipVisible : '',
    className,
  ].join(' ');

  const arrowClass = [
    styles.arrow,
    styles[`arrow${position.charAt(0).toUpperCase() + position.slice(1)}`],
  ].join(' ');

  return (
    <div
      className={styles.tooltipWrapper}
      ref={wrapperRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
    >
      {children}
      {visible && (
        <div className={tooltipClass} style={style} role="tooltip">
          {content}
          <div className={arrowClass} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;