export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}