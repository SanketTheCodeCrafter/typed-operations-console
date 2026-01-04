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