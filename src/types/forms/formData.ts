import type { FormField } from "./formField";
import type { TextField } from "./textField";
import type { NumberField } from "./numberField";
import type { SelectField } from "./selectField";
import type { FormSchema } from "./formSchema";
import type { Task } from "../task";

export type FieldValue<F extends FormField> =
  F extends TextField ? string :
  F extends NumberField ? number :
  F extends SelectField ? string :
  never;


  export type FormDataFromFields<
  Fields extends readonly FormField[]
  > = {
    [F in Fields[number] as F['id']]: FieldValue<F>
  }

export type FormDataFromSchema<
Schema extends FormSchema
> = FormDataFromFields<Schema['fields']>;

export type TaskFromSchema<
Schema extends FormSchema
>=Task<FormDataFromSchema<Schema>>