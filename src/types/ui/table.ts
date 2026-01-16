import type { ReactNode } from "react";

/**
 * Column definition for a typed table.
 *
 * T = row type
 * K = key of T this column reads from
 */
export interface Column<T, K extends keyof T = keyof T> {
    /** Property key from the row object */
    key: K;

    /** Column header label */
    header: string;

    /**
     * Optional custom renderer.
     * Receives the cell value and the full row.
     */
    render?: (value: T[K], row: T) => ReactNode;
}

/**
 * Props for the Table component.
 *
 * T = row type
 */
export interface TableProps<T> {
    /** Array of row data */
    data: T[];

    /** Column definitions tied to row type */
    columns: Column<T>[];
}
