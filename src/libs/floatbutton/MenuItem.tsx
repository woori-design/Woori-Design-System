import React from "react";
import styles from "./FloatButton.module.css";
import { MenuItemProps } from "./MenuItem.type";
import { theme } from "../../styles/theme/theme";

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  // 라벨에 적용할 타이포그래피 스타일
  const labelStyle = label ? { ...theme.typo.Md_12 } : undefined;

  return (
    <div className={styles.menuItemContent}>
      <span>{icon}</span>
      {label && (
        <span className={styles.itemLabel} style={labelStyle}>
          {label}
        </span>
      )}
    </div>
  );
};

// 컴포넌트 타입 식별을 위한 displayName 추가
MenuItem.displayName = "MenuItem";

export default MenuItem;
