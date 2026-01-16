import type { ModalProps } from "../../types/ui/modal";


export function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return (
        <div
            role='dialog'
            aria-modal='true'
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
    )
}