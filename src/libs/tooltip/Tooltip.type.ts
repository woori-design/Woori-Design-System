export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipColor = 'black' | 'white';

export interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  color?: TooltipColor;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} 