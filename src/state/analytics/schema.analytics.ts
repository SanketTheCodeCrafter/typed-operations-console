import type { AppState } from "../../types/appState";

export interface SchemaUsageAnalytics{
    readonly schemaId: string;
    readonly schemaName: string;
    readonly taskCount: number;
    readonly isUsed: boolean;
}

export interface SchemaAnalyticsSummary{
    readonly totalSchemas: number;
    readonly usedSchemas: number;
    readonly unusedSchemas: number;
    readonly tasksWithoutSchemas: number;
}

export interface SchemaAnalytics{
    readonly schemas: readonly SchemaUsageAnalytics[];
    readonly summary: SchemaAnalyticsSummary;
}

let lastState: Readonly<AppState> | null = null;
let lastResult: SchemaAnalytics | null = null;

export const getSchemaAnalytics = (
  state: Readonly<AppState>
): SchemaAnalytics => {
  if (state === lastState && lastResult !== null) {
    return lastResult;
  }

  const schemaUsageMap = new Map<string, number>();
  let tasksWithoutSchemas = 0;

  for (const task of state.tasks) {
    if (!task.schemaId) {
      tasksWithoutSchemas += 1;
      continue;
    }

    schemaUsageMap.set(
      task.schemaId,
      (schemaUsageMap.get(task.schemaId) ?? 0) + 1
    );
  }

  const schemas = state.formSchemas.map(schema => {
    const taskCount = schemaUsageMap.get(schema.id) ?? 0;

    return {
      schemaId: schema.id,
      schemaName: schema.name,
      taskCount,
      isUsed: taskCount > 0,
    };
  });

  const totalSchemas = schemas.length;
  const usedSchemas = schemas.filter(s => s.isUsed).length;
  const unusedSchemas = totalSchemas - usedSchemas;

  const result: SchemaAnalytics = {
    schemas,
    summary: {
      totalSchemas,
      usedSchemas,
      unusedSchemas,
      tasksWithoutSchemas,
    },
  };

  lastState = state;
  lastResult = result;

  return lastResult;
};
