import type { BaseField } from "./baseField";


export interface TextField extends BaseField{
    readonly type: 'text';
    readonly placeholder?: string;
    readonly minLength?: number;
    readonly maxLength?: number;
}