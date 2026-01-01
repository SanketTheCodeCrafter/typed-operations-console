import { useAuth } from "../auth/useAuth";

export const AdminDashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
