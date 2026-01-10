import type { TaskStatus } from "../../types/task";
import type { AppState } from "../../types/appState";
import { selectAllTasks } from "../selectors";


export type TaskCountByStatus=Record<TaskStatus, number>;

export interface TaskCompletionMetrics{
    readonly total: number;
    readonly completed: number;
    readonly pending: number;
    readonly completionRate: number;
}

/**
 * Returns task counts grouped by status.
 */

export const getTaskCountByStatus=(
    state: Readonly<AppState>
): Record<TaskStatus, number>=>{
    const initialCounts: Record<TaskStatus, number>={
        todo: 0,
        in_progress: 0,
        review: 0,
        done: 0,
    };

    const tasks=selectAllTasks(state);

    return tasks.reduce((acc, task)=>{
        acc[task.status]+=1;
        return acc;
    }, initialCounts);
};

/**
 * Returns overall task completion metrics.
 */

export const getTaskCompletionMetrics=(
    state: Readonly<AppState>
): TaskCompletionMetrics=>{
    const counts = getTaskCountByStatus(state);

    const completed = counts.done;
    const total = Object.values(counts).reduce((sum, count)=> sum + count, 0);

    const pending = total - completed;

    const completionRate = 
        total === 0 ? 0 : completed / total;

    
    return {
        total,
        completed,
        pending, 
        completionRate,
    }
}