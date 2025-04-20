import React, {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  ReactElement,
} from "react";
import styles from "./FloatButton.module.css";
import { FloatButtonProps } from "./FloatButton.type";
import { MenuItemProps } from "./MenuItem.type";
import { primitiveColors } from "../../styles/foundation/color/primitiveColor/primitiveColor";

/**
 * 플러스 아이콘 SVG 컴포넌트 (Circle 모양용)
 */
const PlusIconWhenCircleShape = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    fill="none"
    className={className}
  >
    <rect
      y="11.375"
      width="26"
      height="3.25"
      rx="1.625"
      fill={primitiveColors.blue100}
    />
    <rect
      x="11.375"
      y="26"
      width="26"
      height="3.25"
      rx="1.625"
      transform="rotate(-90 11.375 26)"
      fill={primitiveColors.blue100}
    />
  </svg>
);

/**
 * 플러스 아이콘 SVG 컴포넌트 (Square 모양용)
 */
const PlusIconWhenSquareShape = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <rect y="21" width="48" height="6" rx="3" fill={primitiveColors.blue500} />
    <rect
      x="21"
      y="48"
      width="48"
      height="6"
      rx="3"
      transform="rotate(-90 21 48)"
      fill={primitiveColors.blue500}
    />
  </svg>
);

/**
 * 플로팅 버튼 컴포넌트
 */
const FloatButton = ({
  size = "md",
  shape = "circle",
  style,
  className,
  children,
  onToggle,
  ...props
}: FloatButtonProps) => {
  /** 메뉴 열림 상태 */
  const [isOpen, setIsOpen] = useState(false);
  /** 메뉴 컨테이너 참조 */
  const menuRef = useRef<HTMLDivElement>(null);
  /** 버튼 참조 */
  const buttonRef = useRef<HTMLButtonElement>(null);

  /** 버튼 클래스 이름 */
  const buttonClasses = [
    styles.floatButton,
    styles[size],
    styles[shape],
    shape === "circle" ? styles.circleStyle : styles.squareStyle,
    isOpen ? styles.menuOpen : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /** 메뉴 컨테이너 클래스 이름 */
  const menuContainerClasses = [
    styles.menuContainer,
    styles[size],
    styles[shape + "Container"],
    isOpen ? styles.menuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  /** 메뉴 토글 핸들러 */
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  /** 외부 클릭 시 메뉴 닫기 */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (onToggle) {
          onToggle(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  /** 메뉴 컨테이너 위치 계산 */
  const getMenuContainerStyle = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    if (!buttonRect) return {};

    // 메뉴 컨테이너 위치를 버튼 중앙으로 정확히 설정
    return {
      bottom: `${window.innerHeight - buttonRect.top - buttonRect.height}px`,
      left: `${buttonRect.left + buttonRect.width / 2}px`,
      transform: "translateX(-50%)",
      width: `${buttonRect.width}px`,
      height: `${buttonRect.height}px`,
    };
  };

  // children이 있는지 확인 및 모두 유효한지 확인
  const validMenuItems = Children.toArray(children).filter(
    (child): child is ReactElement<MenuItemProps> =>
      isValidElement(child) && (child.type as any)?.displayName === "MenuItem"
  );

  const hasMenuItems = validMenuItems.length > 0;

  // 메뉴 아이템 렌더링
  const renderMenuItems = () => {
    return validMenuItems.map((child, index) => {
      // 각 아이템에 onClick 핸들러 추가
      const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (child.props.onClick) {
          child.props.onClick();
        }
        setIsOpen(false);
        if (onToggle) {
          onToggle(false);
        }
      };

      return (
        <div
          key={index}
          className={styles.menuItem}
          onClick={handleClick}
          aria-label={child.props.label || `메뉴 아이템 ${index + 1}`}
        >
          {child}
        </div>
      );
    });
  };

  // 아이콘 선택
  const PlusIcon = shape === "circle" ? PlusIconWhenCircleShape : PlusIconWhenSquareShape;

  return (
    <>
      <button
        className={buttonClasses}
        style={style}
        onClick={toggleMenu}
        ref={buttonRef}
        {...props}
      >
        <div className={styles.iconContainer}>
          <PlusIcon className={styles.plusIcon} />
        </div>
      </button>

      {hasMenuItems && (
        <div
          className={menuContainerClasses}
          ref={menuRef}
          style={getMenuContainerStyle()}
        >
          {renderMenuItems()}
        </div>
      )}
    </>
  );
};

export default FloatButton;
