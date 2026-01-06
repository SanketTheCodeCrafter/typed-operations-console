import type { FormSchema } from "../types/forms/formSchema";
import type { Project } from "../types/project";
import type { Task, TaskStatus } from "../types/task";


export type AppAction =
| {
    type: 'ADD_PROJECT';
    payload: Project;
}
| {
    type: 'REMOVE_PROJECT';
    payload: { projectId: string };
}
| {
    type: 'ADD_TASK';
    payload: Task;
}
| {
    type: 'UPDATE_TASK_STATUS';
    payload: {
        taskId: string;
        nextStatus: TaskStatus;
    };
}
| {
    type: 'ADD_FORM_SCHEMA';
    payload: FormSchema;
}
| {
    type: 'REMOVE_FORM_SCHEMA';
    payload: { schemaId: string };
}