import React from "react";
import type {
    ButtonProps,
    ActionButtonProps,
    LinkButtonProps,
} from "../../types/ui/button";

const DEFAULT_SIZE = "md";

export function Button(props: ButtonProps) {
    const { intent, size = DEFAULT_SIZE, children } = props;

    // Action Button → <button>
    if ("onClick" in props) {
        const { onClick, disabled } = props as ActionButtonProps;

        return (
            <button
                type="button"
                onClick={onClick}
                disabled={disabled}
                data-intent={intent}
                data-size={size}
            >
                {children}
            </button>
        );
    }

    // Link Button → <a>
    const { href } = props as LinkButtonProps;

    return (
        <a
            href={href}
            data-intent={intent}
            data-size={size}
        >
            {children}
        </a>
    );
}
