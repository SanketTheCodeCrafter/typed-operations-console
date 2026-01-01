import type { AuthState } from "./auth";

export interface AppState{
    readonly auth: AuthState;
}