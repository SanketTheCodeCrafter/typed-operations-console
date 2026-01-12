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

export const getSchemaAnalytics=(
    state: Readonly<AppState>
): SchemaAnalytics=>{
    const schemaUsageMap = new Map<string, number>();
    let tasksWithoutSchemas = 0;

    //count task usage per schema
    for(const task of state.tasks){
        if(!task.schemaId){
            tasksWithoutSchemas++;
            continue;
        }

        schemaUsageMap.set(
            task.schemaId,
            (schemaUsageMap.get(task.schemaId) ?? 0) + 1
        );
    }

    //build per schema analytics
    const schemas: SchemaUsageAnalytics[] = state.formSchemas.map(schema => {
        const taskCount = schemaUsageMap.get(schema.id) ?? 0;

        return {
            schemaId: schema.id,
            schemaName: schema.name,
            taskCount,
            isUsed: taskCount > 0,
        };
    });

    const totalSchemas = schemas.length;
    const usedSchemas = schemas.filter(schema => schema.isUsed).length;
    const unusedSchemas = totalSchemas - usedSchemas;

    return {
        schemas,
        summary: {
            totalSchemas,
            usedSchemas,
            unusedSchemas,
            tasksWithoutSchemas,
        },
    };
};