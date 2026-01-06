import type { TextField } from "./textField";
import type { SelectField } from "./selectField";
import type { NumberField } from "./numberField";

export type FormField = TextField | SelectField | NumberField;

export function isTextField(field: FormField): field is TextField{
    return field.type === 'text';
}

export function isNumberField(field: FormField): field is NumberField {
  return field.type === "number";
}

export function isSelectField(field: FormField): field is SelectField {
  return field.type === "select";
}