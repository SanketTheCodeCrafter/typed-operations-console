export type InputKind = "text" | "number" | "password";

interface BaseInputProps {
    id?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
}

export interface TextInputProps extends BaseInputProps {
    type: "text";
    value: string;
    onChange: (value: string) => void;
}

export interface PasswordInputProps extends BaseInputProps {
    type: "password";
    value: string;
    onChange: (value: string) => void;
}

export interface NumberInputProps extends BaseInputProps {
    type: "number";
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export type InputProps =
    | TextInputProps
    | PasswordInputProps
    | NumberInputProps;
