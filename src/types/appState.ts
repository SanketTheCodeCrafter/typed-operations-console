import type { AuthState } from "./auth";
import type { Project } from "./project";
import type { Task } from "./task";

export interface AppState{
    auth: AuthState;
    projects: Project[];
    tasks: Task[];
}