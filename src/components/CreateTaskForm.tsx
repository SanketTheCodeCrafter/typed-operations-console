import { useState } from "react";
import { useAppState } from "../hooks/useAppState";
import { createTodoTask } from "../utils/taskFactory";


type Props = {
    projectId: string;
}

export const CreateTaskForm: React.FC<Props> = ({ projectId }) => {
    const { dispatch } = useAppState();
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const task = createTodoTask(projectId, { title });

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