import { createContext } from "react";
import type { AuthState } from "../types/auth";
import type { User } from "../types/user";

export interface AuthContextValue {
  state: AuthState;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
