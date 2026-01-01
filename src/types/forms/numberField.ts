import type { BaseField } from "./baseField";


export interface NumberField extends BaseField{
    readonly type: 'number';
    readonly min?: number;
    readonly max?: number;
}