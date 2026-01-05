import { useAuth } from "../auth/useAuth";
import { CreateTaskForm } from "../components/CreateTaskForm";
import { TaskList } from "../components/TaskList";
import { useAppState } from "../hooks/useAppState";

export const ManagerDashboard = () => {
  const { logout } = useAuth();
  const { state } = useAppState();

  return (
    <div>
      <h1>Manager Dashboard</h1>

      {state.projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <CreateTaskForm projectId={project.id} />
          <TaskList projectId={project.id} />
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  );
};
