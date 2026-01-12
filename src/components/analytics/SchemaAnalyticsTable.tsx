import type { FC } from "react";
import type { SchemaAnalytics } from "../../state/analytics";

interface SchemaAnalyticsTableProps {
    readonly analytics: SchemaAnalytics;
}

const SchemaAnalyticsTable: FC<SchemaAnalyticsTableProps> = ({
    analytics,
}) => {
    const { schemas, summary } = analytics;

    return (
        <section>
            <h2>Schema Analytics</h2>

            {/* Summary */}
            <ul>
                <li>Total Schemas: {summary.totalSchemas}</li>
                <li>Used Schemas: {summary.usedSchemas}</li>
                <li>Unused Schemas: {summary.unusedSchemas}</li>
                <li>Tasks Without Schemas: {summary.tasksWithoutSchemas}</li>
            </ul>

            {/* Schema table */}
            <table border={1} cellPadding={8}>
                <thead>
                    <tr>
                        <th>Schema</th>
                        <th>Tasks</th>
                        <th>Used</th>
                    </tr>
                </thead>

                <tbody>
                    {schemas.map(schema => (
                        <tr key={schema.schemaId}>
                            <td>{schema.schemaName}</td>
                            <td>{schema.taskCount}</td>
                            <td>{schema.isUsed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default SchemaAnalyticsTable;
