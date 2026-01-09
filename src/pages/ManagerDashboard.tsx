import { useAuth } from "../auth/useAuth";
import { CreateTaskForm } from "../components/CreateTaskForm";
import { DynamicForm } from "../components/forms/DynamicForm";
import { TaskList } from "../components/TaskList";
import { useAppState } from "../hooks/useAppState";
import type { TaskFromSchema } from "../types/forms/formData";
import { generateId } from "../utils/id";

export const ManagerDashboard = () => {
  const { logout } = useAuth();
  const { state, dispatch } = useAppState();

  if (state.projects.length === 0) {
    return (
      <div>
        <h1>Manager Dashboard</h1>
        <p>No project available. Please ask an admin to create a project.</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }


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

      {state.formSchemas.map((schema) => (
        <DynamicForm
          key={schema.id}
          schema={schema}
          onSubmit={(data) => {
            const task: TaskFromSchema<typeof schema> = {
              id: generateId('task'),
              projectId: state.projects[0]?.id ?? 'unknown',
              schemaId: schema.id,
              status: 'todo',
              data,
              createdAt: new Date().toISOString(),
            };

            dispatch({ type: 'ADD_TASK', payload: task });
          }}
        />
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  );
};
