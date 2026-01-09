import { useAuth } from "../auth/useAuth";
import { CreateProjectForm } from "../components/CreateProjectForm";
import { CreateFormSchema } from "../components/forms/CreateFormSchema";
import { ProjectList } from "../components/ProjectList";
import { useAppState } from "../hooks/useAppState";

export const AdminDashboard = () => {
  const { state } = useAppState();
  const { logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <CreateProjectForm />
      <ProjectList />
      <button onClick={logout}>Logout</button>

      <CreateFormSchema />

      <h3>Existing Schemas</h3>
      <ul>
        {state.formSchemas.map((schema)=>(
          <li key={schema.id}>
            {schema.name} ({schema.fields.length} fields)
          </li>
        ))}
      </ul>
    </div>
  );
};
