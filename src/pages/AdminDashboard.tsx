import { useAuth } from "../auth/useAuth";
import { CreateProjectForm } from "../components/CreateProjectForm";
import { ProjectList } from "../components/ProjectList";

export const AdminDashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <CreateProjectForm />
      <ProjectList />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
