import type { User } from "./user";


export type AuthState={
    status: 'unauthenticated'
} | {
    status: 'authenticated', user: User | null;
}