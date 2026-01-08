import { useState } from "react";
import { useAppState } from "../../hooks/useAppState"
import type { FormField } from "../../types/forms/formField";
import { generateId } from "../../utils/id";
import type { FormSchema } from "../../types/forms/formSchema";


export const CreateFormSchema=()=>{
    const {dispatch} = useAppState();

    const [name, setName]=useState('');
    const [fields, setFields]=useState<FormField[]>([]);

    const addTextField=()=>{
        setFields((prev)=>[
            ...prev,
            {
                id: generateId('field'),
                label: 'Text Field',
                required: false,
                type: 'text',
            },
        ]);
    };

    const addNumberField=()=>{
        setFields((prev)=>[
            ...prev,
            {
                id: generateId('field'),
                label: 'Number Field',
                required: false,
                type: 'number',
            },
        ]);
    };
    
    const saveSchema=()=>{
        if(!name || fields.length===0) return;

        const schema: FormSchema={
            id: generateId('schema'),
            name,
            fields,
        };

        dispatch({type: 'ADD_FORM_SCHEMA', payload: schema });

        setName('');
        setFields([]);
    };

    return (
        <div>
            <h3>Create Form Schema</h3>

            <input
                placeholder="Schema name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <div>
                <button onClick={addTextField}>+ Text Field</button>
                <button onClick={addNumberField}>+ Number Field</button>
            </div>

            <ul>
                {fields.map((field)=>(
                    <li key={field.id}>
                        {field.label} ({field.type})
                    </li>
                ))}
            </ul>

            <button onClick={saveSchema}>Save Schema</button>
        </div>
    )

}