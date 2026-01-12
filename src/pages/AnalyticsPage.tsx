import type { FC } from "react";
import { useAppState } from "../hooks/useAppState";
import { getProjectAnalytics, getSchemaAnalytics, getTaskCompletionMetrics } from "../state/analytics";
import TaskMetrics from "../components/analytics/TaskMetrics";
import ProjectAnalyticsTable from "../components/analytics/ProjectAnalyticsTable";
import SchemaAnalyticsTable from "../components/analytics/SchemaAnalyticsTable";


const AnalyticsPage: FC = () => {
    const { state } = useAppState();

    const taskMetrics = getTaskCompletionMetrics(state);
    const projectAnalytics = getProjectAnalytics(state);
    const schemaAnalytics = getSchemaAnalytics(state);

    return (
        <div>
            <h1>Analytics</h1>

            {/* Phase 5.5: skeleton only */}
            <TaskMetrics metrics={taskMetrics} />
            <ProjectAnalyticsTable projects={projectAnalytics} />
            <SchemaAnalyticsTable analytics={schemaAnalytics} />
        </div>
    )
}

export default AnalyticsPage;