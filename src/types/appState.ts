import type { User } from "./user";


export interface AppState{
    readonly currentUser: User | null;
}