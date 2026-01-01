import { useAuth } from "../auth/useAuth";

export const ViewerDashboard = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Viewer Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
