import React from "react";
import type { TableProps } from "../../types/ui/table";

export function Table<T>({ data, columns }: TableProps<T>) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={String(col.key)}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col) => {
                            const value = row[col.key];

                            return (
                                <td key={String(col.key)}>
                                    {col.render
                                        ? col.render(value, row)
                                        : String(value)}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
