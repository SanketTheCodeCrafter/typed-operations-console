import type { FormField } from "../types/forms/formField";


export function renderField(field: FormField): string{
    switch (field.type){
        case 'text':
            return `Text field: ${field.label} `;
         
         case 'number':
            return `Number field: ${field.label} `;
          
         case 'select':
            return `Select field: ${field.label} Options: ${field.options.join(', ')}`;
            
         default:
            return assertNever(field);   
    }
}

function assertNever(value: never): never{
    throw new Error(`Unhandled field type: ${JSON.stringify(value)}`);
}