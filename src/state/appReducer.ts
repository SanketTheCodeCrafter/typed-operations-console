import type { AppState } from "../types/appState";
import type { AppAction } from "./actions";

export const initialAppState: AppState = {
  auth: {
    status: "unauthenticated",
  },
  projects: [],
  tasks: [],
};

export function appReducer(
  state: AppState,
  action: AppAction
): AppState {
  switch (action.type) {
    case "ADD_PROJECT": {
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    }

    case "REMOVE_PROJECT": {
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload.projectId
        ),
      };
    }

    default: {
      return state;
    }
  }
}
