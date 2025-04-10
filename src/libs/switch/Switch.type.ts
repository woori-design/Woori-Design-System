export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    pointText?: {
        on: string;
        off: string;
    };
    pointColor?: boolean;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}