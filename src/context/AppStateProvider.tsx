import React, { createContext, useReducer } from "react";
import type { AppAction } from "../state/actions";
import type { AppState } from "../types/appState"
import { appReducer, initialAppState } from "../state/appReducer";




type AppStateContextValue = {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
};

export const AppStateContext = createContext<AppStateContextValue | null>(null);

export const AppStateProvider: React.FC<{children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}
