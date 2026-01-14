import React from "react";
import type {
    InputProps,
    TextInputProps,
    PasswordInputProps,
    NumberInputProps,
} from "../../types/ui/input";

export function Input(props: InputProps) {
    const { id, label, disabled, placeholder } = props;

    // Shared change handler adapters live inline per variant
    if (props.type === "number") {
        const { value, onChange, min, max, step } = props as NumberInputProps;

        return (
            <label>
                {label && <span>{label}</span>}
                <input
                    id={id}
                    type="number"
                    value={Number.isNaN(value) ? "" : value}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={(e) => {
                        const next = e.target.value === ""
                            ? NaN
                            : Number(e.target.value);
                        onChange(next);
                    }}
                />
            </label>
        );
    }

    // text + password share string semantics
    const { value, onChange, type } = props as
        | TextInputProps
        | PasswordInputProps;

    return (
        <label>
            {label && <span>{label}</span>}
            <input
                id={id}
                type={type}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
}
