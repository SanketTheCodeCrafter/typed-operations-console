import React from "react";
import { useAuth } from "../auth/useAuth";

import { Login } from "./Login";
import { AdminDashboard } from "./AdminDashboard";
import { ManagerDashboard } from "./ManagerDashboard";
import { ViewerDashboard } from "./ViewerDashboard";

export const Dashboard: React.FC = () => {
  const { state } = useAuth();

  if (state.status === "unauthenticated") {
    return <Login />;
  }

  // authenticated but user not ready yet (future-proof)
  if (!state.user) {
    return <p>Loading user...</p>;
  }

  switch (state.user.role) {
    case "admin":
      return <AdminDashboard />;

    case "manager":
      return <ManagerDashboard />;

    case "viewer":
      return <ViewerDashboard />;

    default:
      return null;
  }
};
