import { ButtonHTMLAttributes, ReactElement } from "react";
import { MenuItemProps } from "./MenuItem.type";

export type FloatButtonSize = "sm" | "md" | "lg" | "xl";
export type FloatButtonShape = "circle" | "square";
export type FloatPosition = "right-top" | "left-top" | "right-bottom" | "left-bottom";

export interface Offset {
  x: number;
  y: number;
}

/**
 * 플로팅 버튼 속성 인터페이스
 */
interface FloatButtonOwnProps {
  /** 버튼 크기 */
  size?: FloatButtonSize;
  /** 버튼 모양 */
  shape?: FloatButtonShape;
  /** 위치 지정 (포탈 기준) */
  position?: FloatPosition;
  /** 위치 오프셋 (x: 좌우 거리, y: 상하 거리) */
  offset?: Offset;
  /** 자식 요소 (MenuItem 컴포넌트만 허용) */
  children: ReactElement<MenuItemProps>[];
  /** 메뉴 상태 변경 콜백 - 열림/닫힘 상태 전달 */
  onToggle?: (isOpen: boolean) => void;
}

export type FloatButtonProps = FloatButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onToggle">;
