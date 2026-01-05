import type { AppState } from "../types/appState";
import { TASK_STATUS_FLOW } from "../types/task";
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
      const { projectId } = action.payload;

      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== projectId
        ),
        tasks: state.tasks.filter(
          (task) => task.projectId !== projectId
        ),
      };
    }

    case 'ADD_TASK': {
      const projectExists = state.projects.some(
        (project) => project.id === action.payload.projectId
      );

      if(!projectExists){
        return state;
      }

      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case 'UPDATE_TASK_STATUS': {
      const { taskId, nextStatus } = action.payload;

      return {
        ...state,
        tasks: state.tasks.map((task)=>{
          if(task.id !== taskId) return task;

          const allowedNext = TASK_STATUS_FLOW[task.status];

          if(!allowedNext.includes(nextStatus)){
            return task;
          }

          return {
            ...task,
            status: nextStatus
          };
        }),
      };
    }

    default: {
      return assertNever(action);
    }
  }
}

function assertNever(x: never): never{
  throw new Error(`Unhandled action: ${JSON.stringify(x)}`)
}
