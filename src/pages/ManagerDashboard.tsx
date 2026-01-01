import { useAuth } from "../auth/useAuth";

export const ManagerDashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Manager Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
