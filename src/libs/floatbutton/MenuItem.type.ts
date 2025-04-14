import { ReactNode } from "react";

/**
 * 메뉴 아이템 속성 인터페이스
 */
export interface MenuItemProps {
  /** 아이콘 요소 */
  icon?: ReactNode;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 라벨 텍스트 */
  label?: string;
}
