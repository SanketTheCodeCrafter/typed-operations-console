import { useState } from "react";
import { useAppState } from "../hooks/useAppState";
import type { Task } from "../types/task";
import { generateId } from "../utils/id";


type Props = {
    projectId: string;
}

export const CreateTaskForm: React.FC<Props> = ({ projectId }) => {
    const { dispatch } = useAppState();
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const task: Task<{ title: string }> = {
            id: generateId('task'),
            projectId,
            status: 'todo',
            data: { title },
            createdAt: new Date().toISOString(),
        };

        dispatch({ type: 'ADD_TASK', payload: task });

        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
            />

            <button type='submit'>Add Task</button>
        </form>
    )
}