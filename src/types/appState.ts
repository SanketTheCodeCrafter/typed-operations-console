import type { AuthState } from "./auth";
import type { Project } from "./project";
import type { Task } from "./task";

export interface AppState{
    readonly auth: AuthState;
    readonly projects: Project[];
    readonly tasks: Task[];
}