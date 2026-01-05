import { useState } from "react";
import { useAppState } from "../hooks/useAppState"
import type { Project } from "../types/project";
import { generateId } from "../utils/id";


export const CreateProjectForm: React.FC = () => {
    const { dispatch } = useAppState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return;

        const project: Project = {
            id: generateId('project'),
            name,
            description: description.trim() ? description : undefined,
            createdAt: new Date().toISOString(),
        };

        dispatch({ type: 'ADD_PROJECT', payload: project });

        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Project</h3>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Project Name'
                required={true}
            />

            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Project Description (optional)'
            />

            <button type="submit">Create Project</button>


        </form>
    )
}