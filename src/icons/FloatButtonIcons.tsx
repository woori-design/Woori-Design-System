import { primitiveColors } from "../styles/foundation/color/primitiveColor/primitiveColor";

/**
 * 플러스 아이콘 SVG 컴포넌트 (Circle 모양용)
 */
export const PlusIconWhenCircleShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" className={className}>
    <rect y="11.375" width="26" height="3.25" rx="1.625" fill={primitiveColors.blue100} />
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
export const PlusIconWhenSquareShape = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className={className}>
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
