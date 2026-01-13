import type { AppState } from "../../types/appState";
import type { Task, TaskStatus } from "../../types/task";


export const selectAllTasks=(
    state: Readonly<AppState>
): readonly Task[]=>{
    return state.tasks;
}

export const selectTasksByStatus=(
    state: Readonly<AppState>,
    status: TaskStatus
): readonly Task[]=>{
    return state.tasks.filter(task=>task.status===status);
};

export const selectTasksByProject=(
    state: Readonly<AppState>,
    projectId: Task['projectId']
): readonly Task[]=>{
    return state.tasks.filter(task=>task.projectId === projectId);
};