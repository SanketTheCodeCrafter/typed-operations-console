import { AuthProvider } from "./auth/AuthProvider";
import { AppStateProvider } from "./context/AppStateProvider";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";
function App() {
  return (
    <AuthProvider>
      <AppStateProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </Router>
      </AppStateProvider>
    </AuthProvider>
  );
}

export default App;
