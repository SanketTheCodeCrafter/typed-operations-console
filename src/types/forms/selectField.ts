import type { BaseField } from "./baseField";


export interface SelectField extends BaseField{
    readonly type: 'select';
    readonly options: readonly string[];
}