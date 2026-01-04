import type { Project } from "../types/project";


export type AppAction =
| {
    type: 'ADD_PROJECT';
    payload: Project;
}
| {
    type: 'REMOVE_PROJECT';
    payload: { projectId: string };
};