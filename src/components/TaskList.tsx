import { useAppState } from "../hooks/useAppState";


type Props = {
    projectId: string;
};

export const TaskList: React.FC<Props> = ({ projectId }) => {
    const { state } = useAppState();

    const tasks = state.tasks.filter((task) => task.projectId === projectId);

    if (tasks.length === 0) {
        return <p>No tasks for this project.</p>;
    }

    return (
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <span>{task.status}</span>
                </li>
            ))}
        </ul>
    )
}