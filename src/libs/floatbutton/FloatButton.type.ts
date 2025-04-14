import { ButtonHTMLAttributes, ReactElement } from "react";
import { MenuItemProps } from "./MenuItem.type";

/**
 * 플로팅 버튼 속성 인터페이스
 */
interface FloatButtonOwnProps {
  /** 버튼 크기 */
  size?: "sm" | "md" | "lg" | "xl";
  /** 버튼 모양 */
  shape?: "circle" | "square";
  /** 자식 요소 (MenuItem 컴포넌트만 허용) */
  children?: ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[];
  /** 메뉴 상태 변경 콜백 - 열림/닫힘 상태 전달 */
  onToggle?: (isOpen: boolean) => void;
}

export type FloatButtonProps = FloatButtonOwnProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onToggle">;
