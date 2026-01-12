import type { FC } from "react";
import type { TaskCompletionMetrics } from "../../state/analytics";


interface TaskMetricsProp {
    readonly metrics: TaskCompletionMetrics;
}

const TaskMetrics: FC<TaskMetricsProp> = ({ metrics }) => {
    const { total, completed, pending, completionRate } = metrics;

    return (
        <section>
            <h2>Task Metrics</h2>

            <ul>
                <li>Total Tasks: {total}</li>
                <li>Completed Tasks: {completed}</li>
                <li>Pending Tasks: {pending}</li>
                <li>
                    Completion Rate: {(completionRate * 100).toFixed(0)}%
                </li>
            </ul>
        </section>
    );
};

export default TaskMetrics;