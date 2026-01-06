import type { AuthState } from "./auth";
import type { FormSchema } from "./forms/formSchema";
import type { Project } from "./project";
import type { Task } from "./task";

export interface AppState{
    readonly auth: AuthState;
    readonly projects: readonly Project[];
    readonly tasks: readonly Task[];
    readonly formSchemas: readonly FormSchema[];
}