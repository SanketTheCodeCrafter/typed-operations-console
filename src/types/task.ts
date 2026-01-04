export type TaskStatus =
  | "todo"
  | "in_progress"
  | "review"
  | "done";


export interface Task<TFormData = unknown> {
  readonly id: string;
  readonly projectId: string;
  readonly status: TaskStatus;
  readonly data: TFormData;
  readonly createdAt: string;
}

export const TASK_STATUS_FLOW: Record<TaskStatus, TaskStatus[]> = {
  todo: ['in_progress'],
  in_progress: ['review'],
  review: ['done'],
  done: [],
};