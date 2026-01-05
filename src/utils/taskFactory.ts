import type { Task } from "../types/task";
import { generateId } from "./id";


export function createTodoTask<TData>(
    projectId: string,
    data: TData
): Task<TData>{
    return {
        id: generateId('task'),
        projectId,
        status: 'todo',
        data,
        createdAt: new Date().toISOString(),
    }
}