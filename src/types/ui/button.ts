export type ButtonIntent = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg";


interface BaseButtonProps {
    intent: ButtonIntent;
    size?: ButtonSize;
    children: React.ReactNode;
}


export interface ActionButtonProps extends BaseButtonProps {
    onClick: () => void;
    disabled?: boolean;
    href?: never;
}


export interface LinkButtonProps extends BaseButtonProps {
    href: string;
    onClick?: never;
    disabled?: never;
}


export type ButtonProps = ActionButtonProps | LinkButtonProps;