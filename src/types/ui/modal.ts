import type { ReactNode } from "react";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    /**
   * Whether clicking on the overlay should close the modal.
   * Defaults to true.
   */
    closeOnOverlayClick?: boolean;

    /**
     * ID of the element that labels the modal.
     * Used for aria-labelledby.
     */
    labelledBy?: string;
}