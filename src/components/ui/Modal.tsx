import React, { useEffect } from "react";
import type { ModalProps } from "../../types/ui/modal";

export function Modal({
    open,
    onClose,
    children,
    closeOnOverlayClick = true,
    labelledBy,
}: ModalProps) {
    // Escape key handling
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            onClick={closeOnOverlayClick ? onClose : undefined}
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: "#fff",
                    padding: "1rem",
                    minWidth: "300px",
                    borderRadius: "4px",
                }}
            >
                {children}
            </div>
        </div>
    );
}
