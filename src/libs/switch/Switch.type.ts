export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    pointText?: [string, string];
    pointColor?:boolean,
    size?: 'sm' | 'md' | 'xl' | 'lg';
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}