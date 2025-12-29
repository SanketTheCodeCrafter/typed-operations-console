import type { Role } from "./role";


export interface User{
    readonly id: string;
    readonly name: string;
    readonly role: Role;
}