import { useState } from "react";
import type { FormDataFromSchema } from "../../types/forms/formData";
import type { FormSchema } from "../../types/forms/formSchema";



type Props<S extends FormSchema> = {
    schema: S;
    onSubmit: (data: FormDataFromSchema<S>) => void;
};

export function DynamicForm<S extends FormSchema>({
    schema,
    onSubmit,
}: Props<S>) {
    const [formData, setFormData] = useState<Partial<FormDataFromSchema<S>>
    >({});

    const updateField = (id: string, value: unknown) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const finalizeFormData = (
        data: Partial<FormDataFromSchema<S>>
    ): FormDataFromSchema<S> => {
        return data as unknown as FormDataFromSchema<S>;
    };

    const handleSubmit = () => {
        onSubmit(finalizeFormData(formData));

    };

    return (
        <div>
            <h4>{schema.name}</h4>

            {schema.fields.map((field) => {
                switch (field.type) {
                    case 'text':
                        return (
                            <input
                                key={field.id}
                                placeholder={field.label}
                                onChange={(e) =>
                                    updateField(field.id, e.target.value)
                                }
                            />
                        );

                    case 'number':
                        return (
                            <input
                                key={field.id}
                                type='number'
                                placeholder={field.label}
                                onChange={(e) =>
                                    updateField(field.id, Number(e.target.value))
                                }
                            />
                        );

                    case 'select':
                        return (
                            <select
                                key={field.id}
                                onChange={(e) =>
                                    updateField(field.id, e.target.value)
                                }
                            >
                                <option value=''>Select</option>
                                {field.options.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        );

                    default:
                        return null;
                }
            })}

            <button onClick={handleSubmit}>Create Task</button>
        </div>
    )

}
