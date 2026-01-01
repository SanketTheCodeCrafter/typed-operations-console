import type { FormField } from "./formField";


export interface FormSchema{
    readonly id: string;
    readonly name: string;
    readonly fields: readonly FormField[];
}