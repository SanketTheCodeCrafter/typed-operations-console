import type { FC } from "react";
import type { ProjectAnalytics } from "../../state/analytics";


interface ProjectAnalyticsTableProps {
    readonly projects: readonly ProjectAnalytics[];
}

const ProjectAnalyticsTable: FC<ProjectAnalyticsTableProps> = ({
    projects
}) => {
    return (
        <section>
            <h2>Project Analytics</h2>

            <table border={1} cellPadding={8}>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Total</th>
                        <th>Completed</th>
                        <th>Pending</th>
                        <th>Completion</th>
                        <th>Health</th>
                    </tr>
                </thead>

                <tbody>
                    {projects.map(project => (
                        <tr key={project.projectId}>
                            <td>{project.projectName}</td>
                            <td>{project.totalTasks}</td>
                            <td>{project.completedTasks}</td>
                            <td>{project.pendingTasks}</td>
                            <td>
                                {(project.completionRate * 100).toFixed(0)}%
                            </td>
                            <td>{project.health}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );

}

export default ProjectAnalyticsTable;