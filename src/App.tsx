import { AuthProvider } from "./auth/AuthProvider";
import { RequireRole } from "./auth/RequireRole";
import { useAuth } from "./auth/useAuth";

import { Login } from "./pages/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ManagerDashboard } from "./pages/ManagerDashboard";
import { ViewerDashboard } from "./pages/ViewerDashboard";

const AppContent = () => {
  const { state } = useAuth();

  if (state.status === "unauthenticated") {
    return <Login />;
  }

  return (
    <>
      <RequireRole role="admin">
        <AdminDashboard />
      </RequireRole>

      <RequireRole role="manager">
        <ManagerDashboard />
      </RequireRole>

      <RequireRole role="viewer">
        <ViewerDashboard />
      </RequireRole>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
