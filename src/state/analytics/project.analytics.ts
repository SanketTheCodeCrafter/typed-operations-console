import type { AppState } from "../../types/appState";
import { selectAllTasks } from "../selectors";

export type ProjectHealth =
    'empty'
    | 'in_progress'
    | 'healthy'
    | 'stalled';

export interface ProjectTaskStats {
    readonly projectId: string;
    readonly totalTasks: number;
    readonly completedTasks: number;
    readonly pendingTasks: number;
}

export interface ProjectCompletionMetrics {
    readonly completionRate: number;
}

export interface ProjectAnalytics {
    readonly projectId: string;
    readonly projectName: string;
    readonly totalTasks: number;
    readonly completedTasks: number;
    readonly pendingTasks: number;
    readonly completionRate: number;
    readonly health: ProjectHealth;
}

export const getProjectAnalytics = (
    state: Readonly<AppState>
): readonly ProjectAnalytics[] => {
    const tasks = selectAllTasks(state);

    return state.projects.map(project => {
        const projectTasks = tasks.filter(
            task => task.projectId === project.id
        );

        const totalTasks = projectTasks.length;

        const completedTasks = projectTasks.filter(
            task => task.status === 'done'
        ).length;

        const pendingTasks = totalTasks - completedTasks;

        return {
            projectId: project.id,
            projectName: project.name,
            totalTasks,
            completedTasks,
            pendingTasks,
            completionRate:
                totalTasks === 0 ? 0 : completedTasks / totalTasks,
            health: (() => {
                if (totalTasks === 0) {
                    return "empty";
                }

                if (completedTasks === totalTasks) {
                    return "healthy";
                }

                if (completedTasks > 0 && pendingTasks > 0) {
                    return "healthy";
                }

                if (completedTasks === 0 && pendingTasks > 0) {
                    return "in_progress";
                }

                return "stalled";
            })(),

        };
    });
};
