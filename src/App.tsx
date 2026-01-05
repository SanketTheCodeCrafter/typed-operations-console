import { AuthProvider } from "./auth/AuthProvider";
import { AppStateProvider } from "./context/AppStateProvider";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <AppStateProvider>
        <Dashboard />
      </AppStateProvider>
    </AuthProvider>
  );
}

export default App;
