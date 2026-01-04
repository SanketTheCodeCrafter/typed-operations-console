import { useAppState } from "../hooks/useAppState"


export const ProjectList: React.FC = () => {
    const { state } = useAppState();

    if (state.projects.length === 0) {
        return <p>No projects available.</p>
    }

    return (
        <ul>
            {state.projects.map((project) => (
                <li key={project.id}>
                    <strong>{project.name}</strong>
                    {project.description && <p>{project.description}</p>}
                </li>
            ))}
        </ul>
    )
}